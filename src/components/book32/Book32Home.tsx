import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book32Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    {
      num: 1, title: '神與創造',
      sections: ['神的名字（中國字、人類學的研究）', '神的創造（大明會典、詩經與老莊）'],
    },
    {
      num: 2, title: '人的特性',
      sections: ['人與上帝的關係～天人合一（中國字、甲骨文、金文、《詩經》）', '人對世界的使命～內聖外王（大學之道、天下的所有權）'],
    },
    {
      num: 3, title: '墮落與拯救',
      sections: ['中國字的救恩意義（關於犯罪的字、關於救贖的字）', '五經的救恩內涵（天討有罪、罪的後果、上帝赦罪）'],
    },
    {
      num: 4, title: '罪惡的蔓延',
      sections: ['聖經的記載', '孔子的觀點', '孟子的觀點', '荀子的觀點'],
    },
    {
      num: 5, title: '洪水與方舟',
      sections: ['聖經的記載', '中國字與古籍', '各民族傳說'],
    },
    {
      num: 6, title: '閃的後代',
      sections: ['希伯來人與華人信仰旅程的對照（從法勒到摩西、從大衛到基督、從中世紀到近代）', '羌人與羊文化（近代羌人、古代羌人）'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">
          華人回家
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">創世記與華人先祖</h2>
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
          華人慕道朋友考慮是否接受基督信仰，常會面對一個問題：中華民族五千年的歷史留給我們許多寶貴的文化遺產，有關倫理道德、四書五經的教導也不輸給聖經，我們為什麼要相信一個外來的宗教呢？信上帝或信耶穌會不會違背華人祖先固有的文化與信仰呢？
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書以聖經為經、華人古籍為緯，內容的呈現按照創世記一至十一章的次序，配以相關的華人古籍資料，探討創世記一至十一章的六個重要主題：神與創造、人的特性、墮落與拯救、罪惡的蔓延、洪水與方舟、閃的後代。這六個主題在中華文化中皆有不少相關素材，可用以幫助華人認識創世記內容，並進而認知：古代華人對神、對人的認識，與聖經有其一致性；華人信靠真神，不是背祖，而是回歸祖先的信仰。
        </p>
        <div className="bg-white rounded-lg p-3 border border-amber-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-amber-700">與前書的關係：</span>本書與作者另一本著作《跨越鴻溝——在華人文化處境中詮釋罪》相輔相成。前書是以華人古籍為經、聖經為緯，內容按照華人古籍的類別及時間次序，配以聖經中的對照資料，使人明白聖經內容能說明華人文化；本書則使人從另一個角度看出，華人文化能說明聖經內容。本書可單獨閱讀，也可成為前書的前導書。
          </p>
        </div>
      </div>

      {/* 自序 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">自序、緒論</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的自序與緒論內容，請見獨立頁面「自序」與「緒論」，其中詳述本書寫作緣起、與《跨越鴻溝》一書的關係、六大主題的安排，以及「神版」與「上帝版」聖經用詞、代名詞用法等體例說明。
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
            <div className="border-l-4 border-gray-300 pl-4 mt-2">
              <h3 className="font-semibold text-gray-600">結論、參考書目</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
