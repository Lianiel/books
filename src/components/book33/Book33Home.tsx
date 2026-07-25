import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book33Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    {
      num: 1, title: '基督教的罪觀',
      sections: ['「罪」的原文與翻譯（希伯來字詞、希臘字詞、中文翻譯）', '聖經中的「罪」（舊約、新約）', '「罪」的神學觀點（奧利金、奧古斯丁、托馬斯阿奎那、馬丁路德、尼布爾）'],
    },
    {
      num: 2, title: '中國古代的「上帝觀」',
      sections: ['兩個前提', '古文中的「上帝觀」（甲骨文、金文）', '五經中的「上帝觀」（詩經、書經、易經、禮記中的祭祀）', '諸子的「上帝觀」（論語、孟子、墨子、老莊）', '聖經的「上帝觀」'],
    },
    {
      num: 3, title: '儒家的人性觀與罪觀',
      sections: ['五經中的「罪」觀', '孔子的人性觀與罪觀', '孟子的人性觀與罪觀', '荀子的人性觀與罪觀', '大學中庸的人性觀與罪觀'],
    },
    {
      num: 4, title: '其他與罪有關的言說',
      sections: ['中國的佛教思想', '中國的民間小說（西遊記、紅樓夢）', '史家文人的筆鋒（春秋左傳、史記、明夷待訪錄）', '久遠深廣的見證（祭天大典、中國字）', '哲學寓言成語故事'],
    },
    {
      num: 5, title: '現代華人與「罪」的關係',
      sections: ['文化處境下的華人性格（家族主義、孝道文化、主奴性人格、面子性格）', '社會處境下的華人行為（個人生活、民主發展、經濟發展、農工發展）'],
    },
    {
      num: 6, title: '從罪得釋放——華人文化更新之路',
      sections: ['中國文化與基督教思想的關係', '浪子回頭'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">
          跨越鴻溝
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">在華人文化處境中詮釋罪</h2>
        <div className="inline-block bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-xl px-6 py-3">
          <p className="text-amber-800 font-semibold">莊東傑　著</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-amber-50 to-red-50 border border-amber-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <h3 className="font-bold text-amber-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          如果你和非基督徒談到福音信仰，遲早一定會觸及「罪」的問題。但「罪」的觀念翻譯成中文，歷來卻產生了不少文化溝通上的障礙：華人對罪的觀點重在罪行，聖經衡量之基準則進一步往內在動機探索，兩者差異很大。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書以華人古籍為經、聖經為緯，內容按照華人古籍的類別及時間次序，配以聖經中的對照資料，藉由華人的文化處境，將聖經中「罪」的觀念向華人表達出來，並且指出一條華人文化更新之路。全書共六章：基督教的罪觀、中國古代的「上帝觀」、儒家的人性觀與罪觀、其他與罪有關的言說、現代華人與「罪」的關係、從罪得釋放——華人文化更新之路。
        </p>
        <div className="bg-white rounded-lg p-3 border border-amber-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-amber-700">與後書的關係：</span>本書與作者另一本著作《華人回家——創世記與華人先祖》相輔相成。本書使人明白，聖經內容能說明華人文化；後書則使人從另一個角度看出，華人文化能說明聖經內容。本書可單獨閱讀，也可成為後書的前導書。
          </p>
        </div>
      </div>

      {/* 序文 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">推薦序、自序</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的三篇推薦序（李景雄博士、陳吉松博士、陳志宏牧師）與作者自序，請見獨立頁面「推薦序、自序」，其中詳述本書寫作緣起、與《華人回家》一書的關係，以及各篇推薦人對本書的評價。
            </p>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white space-y-4">
            {chapters.map((ch) => (
              <div key={ch.num} className="border-l-4 border-amber-400 pl-4">
                <h3 className="font-bold text-amber-800 mb-2">
                  第{['一','二','三','四','五','六'][ch.num - 1]}章　{ch.title}
                </h3>
                <ul className="space-y-1">
                  {ch.sections.map((sec, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-amber-400 flex-shrink-0 mt-0.5">‧</span>
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs text-gray-400 pt-2">※ 目前已上架：推薦序、自序、緒論、第一章、第二章（前三節，建置中）。其餘章節陸續建置中。</p>
          </div>
        )}
      </div>
    </div>
  );
}
