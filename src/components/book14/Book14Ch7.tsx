import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search as SearchIcon, BookOpen, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第7章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：解釋聖靈生活</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <SearchIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">許多關於聖靈生活的誤解源於對聖經的曲解。本章旨在澄清一些常見的誤讀和錯誤理解。</p>
            <p className="text-gray-700 leading-relaxed">首先是關於「聖靈充滿」的誤解。許多人以為聖靈充滿是一次性的經驗，達到後就永久擁有。但聖經中「被聖靈充滿」是反覆出現的動詞，表示它是持續的過程，不是一次性的事件。信徒需要反覆地求聖靈充滿自己。</p>
            <p className="text-gray-700 leading-relaxed">其次是關於「聖靈內住」與「聖靈充滿」的區別。聖靈內住是指聖靈住在每個信徒心中——這是一次性的、不可改變的。聖靈充滿是指信徒允許聖靈完全控制、引導自己——這需要信徒主動的順服和開放。</p>
            <p className="text-gray-700 leading-relaxed">第三，許多人誤解「聖靈引導」，期望聽到神的聲音或看見異象。但聖靈引導主要是透過理性思考、聖經原則、環境安排、他人勸告等方式進行，而非神祕的靈感。</p>
            <p className="text-gray-700 leading-relaxed">最後，許多人被某些「聖靈生活」的誇張描述所迷惑——期待永遠的喜樂、無止的能力、問題的瞬間解決。但現實的聖靈生活是平靜而持久的，是在挑戰中的堅持，是在軟弱中的依靠。</p>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">動詞時態的神學含義</h4>
              <p className="text-gray-700 leading-relaxed">希臘文聖經中「被聖靈充滿」（pletho）是現在式、被動語態，表示一個反覆持續的行為。相比之下，「聖靈內住」（oikeo）也是現在式，但指的是一個狀態。這個語言上的區別反映了神學上的真理：聖靈內住是信主後的固定狀態，充滿是信徒需要反覆追求的經驗。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈引導的理性維度</h4>
              <p className="text-gray-700 leading-relaxed">西方基督教傳統往往過分強調理性（傾向理性主義，否定神祕），而靈恩傳統往往過分強調靈感（傾向神祕主義，輕視理性）。但聖靈的引導同時使用理性和直覺。聖靈光照我們的理性，幫助我們思考；聖靈也在我們靈魂深處工作，給予平安與確信。二者並非對立。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈生活的現實性</h4>
              <p className="text-gray-700 leading-relaxed">許多靈恩教導描繪一個過度理想化的聖靈生活：永遠的勝利、無止的能力、立即的改變。但保羅的見證包括他的「肉中刺」（林後12章），表明甚至屬靈最高超的人也面臨持續的挑戰。聖靈生活是在軟弱中的力量、在失敗中的恢復、在試煉中的堅持。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈見證的多元形式</h4>
              <p className="text-gray-700 leading-relaxed">聖靈在人身上的見證不是單一形式。有時是眼淚的悔改（內在的痛苦），有時是喜樂的確信（內在的平安），有時甚至是沉默的順服（內在的決定）。不同的人經歷聖靈工作的方式不同，這些都是有效的見證。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你之前對「聖靈充滿」的理解是什麼？現在你如何看待它作為一個反覆的過程？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你有沒有期待聖靈引導總是以神祕或超自然的形式出現？理性與靈感如何在你的決策中互動？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你對聖靈生活的期待是現實的嗎？有沒有被某些理想化的描述所誤導？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你如何區別聖靈內住與聖靈充滿？這個區別對你有什麼實踐意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">聖靈在你生命中的工作是否常常是平靜而持久的，而非戲劇性的？你如何看待這種平凡的工作？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 經文重新閱讀</h4>
              <p className="text-gray-700 mb-2">重新閱讀幾段關於聖靈的關鍵經文（以弗所1:13-14, 4:30; 羅8:15-16; 加5:25），注意：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>聖靈內住與充滿的區別</li>
                <li>動詞時態與其含義</li>
                <li>你之前可能忽視的細節</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤔 期待的重新校準</h4>
              <p className="text-gray-700 mb-2">列出你對聖靈生活的期待，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這些期待是基於聖經，還是基於某些人的見證或教導？</li>
                <li>哪些期待可能過於理想化？</li>
                <li>聖經中關於聖靈工作的現實性說法有哪些？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚖️ 理性與靈感的平衡</h4>
              <p className="text-gray-700 mb-2">在一個需要決策的事項上，同時使用理性和靈感：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm space-y-2">
                <p><strong>理性層面：</strong>蒐集信息、分析利弊、尋求建議</p>
                <p><strong>靈感層面：</strong>禱告、安靜、聆聽內在的平安或不安</p>
                <p><strong>整合：</strong>理性和靈感如何一致？如果衝突，我需要更多禱告</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔄 聖靈充滿的日常追求</h4>
              <p className="text-gray-700 mb-2">建立一個日常習慣，反覆向聖靈敞開：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>早晨：「聖靈啊，充滿我，願你引導我今天的每一個決定」</li>
                <li>中午：檢查自己是否仍在聖靈的引導下，還是走回自我中心</li>
                <li>晚間：感謝聖靈的指引，為失誤悔改，再次開放自己</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 現實性的禱告</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「聖靈啊，感謝你內住在我裡面，一個已經完成、永遠不變的事實。同時，求你每一天充滿我。我承認我的軟弱和失敗，不期待完全的勝利，而是在軟弱中尋求你的力量。幫助我用現實且平衡的角度看待屬靈生活，既不懷疑你的能力，也不對自己有不切實際的期待。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
