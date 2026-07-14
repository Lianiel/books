import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, X, StickyNote } from 'lucide-react';
import { loadAllHighlightsForBook, HIGHLIGHT_COLORS, type HighlightRecord } from '../useHighlight';
import { BOOK_TITLES, BOOK_CHAPTERS } from '../App';
import { useState } from 'react';

export default function BookHighlightsOverview() {
  const { bookId = '' } = useParams();
  const navigate = useNavigate();
  const chapters = BOOK_CHAPTERS[bookId] || [];
  const [, forceRefresh] = useState(0);

  const grouped = loadAllHighlightsForBook(bookId);
  const chapterOrder = chapters.length > 0 ? chapters.map(c => c.id) : Object.keys(grouped);
  const totalCount = Object.values(grouped).reduce((sum, list) => sum + list.length, 0);

  const goToHighlight = (h: HighlightRecord) => {
    const chapterInfo = chapters.find(c => c.id === h.chapter);
    sessionStorage.setItem('scrollToHighlightId', h.id);
    navigate(chapterInfo?.path || `/${bookId}/${h.chapter}`);
  };

  const deleteHighlight = (h: HighlightRecord) => {
    try {
      const key = `highlights_${bookId}_${h.chapter}`;
      const list: HighlightRecord[] = JSON.parse(localStorage.getItem(key) || '[]');
      const updated = list.filter(item => item.id !== h.id);
      localStorage.setItem(key, JSON.stringify(updated));
      forceRefresh(n => n + 1);
    } catch (e) {
      console.error('刪除重點失敗:', e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-300 to-pink-400 shadow-lg" style={{ paddingTop: 'max(env(safe-area-inset-top), 20px)' }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 bg-white/80 hover:bg-white px-3 py-1.5 rounded-lg font-semibold text-sm shadow"
          >
            <ChevronLeft className="w-4 h-4" />
            返回
          </button>
          <h1 className="text-lg font-bold text-white">
            {BOOK_TITLES[bookId] || bookId} · 全書重點總覽 {totalCount > 0 ? `(${totalCount})` : ''}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {totalCount === 0 ? (
          <p className="text-gray-500 text-center py-12">這本書目前還沒有畫任何重點。</p>
        ) : (
          chapterOrder.filter(chId => grouped[chId]?.length > 0).map(chId => {
            const chapterInfo = chapters.find(c => c.id === chId);
            return (
              <div key={chId} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-4 py-2 bg-indigo-50 font-semibold text-indigo-800 text-sm">
                  {chapterInfo?.title || chId}
                </div>
                <ul className="divide-y divide-gray-100">
                  {grouped[chId].map(h => (
                    <li key={h.id} className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => goToHighlight(h)}
                          className="flex-1 flex items-center gap-2 text-left hover:bg-gray-50 rounded px-1 py-1 transition-colors"
                        >
                          <span
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: HIGHLIGHT_COLORS.find(c => c.style === h.style)?.hex }}
                          />
                          <span className={`text-gray-800 text-sm ${h.bold ? 'font-bold' : ''}`}>{h.text_content}</span>
                        </button>
                        {h.note && <StickyNote className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />}
                        <button
                          onClick={() => deleteHighlight(h)}
                          className="text-gray-300 hover:text-red-500 flex-shrink-0"
                          aria-label="刪除此重點"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      {h.note && (
                        <p className="mt-1 ml-6 text-xs text-amber-800 bg-amber-50 rounded px-2 py-1 whitespace-pre-wrap">{h.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
