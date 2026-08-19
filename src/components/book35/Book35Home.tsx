import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book35Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    '第一講　認識神就是經歷神',
    '第二講　需要神兩刃的利劍',
    '第三講　禱告是關乎神自己',
    '第四講　聖經啟示的禱告類型',
    '第五講　在主裡學習保持謙卑',
    '第六講　回應成為祭司的呼召',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
          初級代禱學
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">六堂課，從認識神開始學習成為代禱者</h2>
        <div className="inline-block bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl px-6 py-3">
          <p className="text-violet-800 font-semibold">妮塔·強生　著　／　阿木歌　編譯</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-violet-700 flex-shrink-0" />
          <h3 className="font-bold text-violet-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          《初級代禱學》是妮塔·強生牧師（Nita Johnson）給神家的又一份珍貴禮物，是初信代禱者非常好的入門教程，即便是成熟的代禱者，重新回到根基上溫習也受益匪淺。在這六堂課中，妮塔牧師把有關禱告最基本的內容教導大家，使我們知道在禱告這條路上如何走，少走彎路，也為進深的禱告打下根基。正如建造摩天大樓，打地基的過程費時費力，暫時未必看見很多果效，卻是整棟大樓屹立不倒的根本保障——耶穌說：「一個聰明人，把房子蓋在磐石上。」（太七：24）
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          全書以妮塔牧師的講道實錄形式呈現，從「認識神就是經歷神」出發，依序談到爭戰禱告的兩刃利劍、禱告如何回歸以神自己為中心、聖經中不同類型的禱告、在主裡學習謙卑，最後回應成為祭司的呼召。每一講穿插大量真實的服事見證與妮塔牧師親自示範的禱告詞，內容平實、貼近初學者，卻也一再指向禱告最核心的根基：不是靠著自己的熱心呼喊，而是先認識神、明白神的心意，再把神的旨意禱告出來。
        </p>
        <div className="bg-white rounded-lg p-3 border border-violet-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-violet-700">妮塔牧師說：</span>「神要在華人中興起一支大有能力的代禱軍隊，是在我們這個世代最偉大的。這是神的旨意。」願讀者藉著這六堂課，成為這代禱軍隊中的一員。
          </p>
        </div>
      </div>

      {/* 前言 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">序言</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的序言內容，請見獨立頁面「序言」，其中說明了編譯者對本書的推薦，以及妮塔牧師期待華人興起代禱軍隊的異象。
            </p>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {chapters.map((c, i) => (
                <li key={i} className="flex items-start gap-2 border-l-4 border-violet-400 pl-4 py-1">
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
