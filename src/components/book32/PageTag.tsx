import React from 'react';

/** Small corner tag showing the original book's page number, so readers can
 * cross-reference footnote citations back to the physical page. */
export default function PageTag({ page }: { page: number | string }) {
  return (
    <div className="flex justify-end -mb-1">
      <span className="text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5 select-none">
        第 {page} 頁
      </span>
    </div>
  );
}
