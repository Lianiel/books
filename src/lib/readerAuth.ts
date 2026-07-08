// 電子書房簡易登入：手機號碼 + 固定密碼，純粹當作跨裝置同步畫重點用的身分識別
// 不是真正的帳號安全機制，密碼全體共用同一組

export const READER_DEFAULT_PASSWORD = '2jaiijrl';

const STORAGE_KEY = 'reader_phone';

export function getReaderPhone(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function loginReader(phone: string, password: string): boolean {
  const trimmed = phone.trim();
  if (!trimmed || password !== READER_DEFAULT_PASSWORD) return false;
  localStorage.setItem(STORAGE_KEY, trimmed);
  return true;
}

export function logoutReader(): void {
  localStorage.removeItem(STORAGE_KEY);
}
