import { lazy, type ComponentType } from 'react';

// Every book chapter is its own lazy-loaded chunk (300+ of them). When we
// push a new deploy, a tablet/browser tab that's been open for a while may
// still be holding an old index.html that references chunk hashes which no
// longer exist on the server — the next dynamic import() then fails with a
// "Loading chunk failed" style error, which used to bubble up to
// ErrorBoundary and force the reader to tap "重新整理" by hand.
//
// A full reload fetches the fresh index.html (correct hashes) and fixes
// this automatically, so we do that once. The timestamp guard (not just a
// one-time flag) stops an infinite reload loop if the failure is a real,
// persistent problem, while still allowing a *fresh* reload attempt for a
// later, unrelated deploy during a long reading session.
const RELOAD_AT_KEY = 'ebook_lazyChunkReloadedAt';
const GUARD_WINDOW_MS = 10_000;

function recentlyReloaded(): boolean {
  try {
    const t = Number(sessionStorage.getItem(RELOAD_AT_KEY) || 0);
    return Date.now() - t < GUARD_WINDOW_MS;
  } catch {
    return false;
  }
}

function markReloaded() {
  try {
    sessionStorage.setItem(RELOAD_AT_KEY, String(Date.now()));
  } catch {
    /* ignore (e.g. private browsing storage restrictions) */
  }
}

export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error) {
      if (!recentlyReloaded()) {
        markReloaded();
        window.location.reload();
        // The reload navigates away before this would ever resolve;
        // return a never-settling promise so React doesn't render an
        // error state in the split second before the reload happens.
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}
