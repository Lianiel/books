import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">愛與捨己</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 九1-27</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、保羅放棄使徒的權利（九1-18）</h4>
              <p className="text-gray-700 leading-relaxed">保羅確認自己有使徒的資格和權利：見過復活的主、在哥林多人心上刻上了事工的印記。作為使徒，他有權利要求供給（如同士兵、農夫、牧羊人）。但保羅選擇放棄這一切權利，免費傳福音，為的是「不在基督的福音上有什麼攔阻」。他以這個活生生的例子，示範了第八章所說的「愛勝過自由」的原則。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、為多得人作眾人的僕人（九19-23）</h4>
              <p className="text-gray-700 leading-relaxed">保羅宣告他偉大的使命策略：「我雖是自由的，無人轄管；然而我甘心作了眾人的僕人，為要多得人。」他向猶太人就作猶太人，向外邦人就作外邦人，向軟弱的就作軟弱的。這不是諂媚或失去原則，而是為著他人的得救，自願放棄文化特權和個人喜好。「為福音的緣故，凡事我都行，為要與人同得這福音的好處。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、運動員的節制與自律（九24-27）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以運動競技為比喻：在場上賽跑的，只有一個人得獎。凡較力爭勝的，諸事都有節制。保羅如此操練自己，使身體服從，免得傳福音給別人，自己反被棄絕。這不是「靠行為得救」，而是靠自律維持事奉的持守性——真正的自由需要自律才能持守。</p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">保羅的「自願軟弱」</h4>
              <p className="text-gray-700 leading-relaxed">保羅放棄使徒的權利，不是因為他沒有選擇，而是主動的神學選擇。這個「自願軟弱」直接與第二章的「示弱策略」相連：讓基督的能力，而非自己的地位，成為事工的基礎。這也是十字架的邏輯——主耶穌有能力不上十字架，但祂選擇了捨己，為要多得人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">文化適應的神學原則</h4>
              <p className="text-gray-700 leading-relaxed">「向什麼人，就作什麼人」是宣教學上「處境化」的聖經根據。保羅不是沒有原則地討好每個人，而是在真理不改變的前提下，調整表達和生活方式。這需要深刻的文化理解、自我察覺和對他人的愛。今日宣教和牧養的挑戰，在於如何在文化適應（福音有效傳遞）和文化妥協（真理失去）之間找到平衡。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">自律的神學：不是律法主義</h4>
              <p className="text-gray-700 leading-relaxed">保羅在九章27節說「恐怕自己反被棄絕」，這讓一些人擔心是否在暗示「靠行為保住救恩」。但保羅的重點是事奉的資格，不是救恩的保持。一個傳道者若放縱自己，不但失去見證，更在自己所傳的信息上顯出矛盾。自律不是為了自我救贖，而是為了事奉的持守性和對福音的尊重。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「為福音的緣故，凡事我都行」</h4>
              <p className="text-gray-700 leading-relaxed">這句話是保羅事奉哲學的最高概括。「凡事都行」不是任意妄為，而是在一個最高目標下（多得人歸主）的靈活性。這個最高目標讓保羅能放下文化偏好、個人習慣、社會地位，甚至合法的權利。今日基督徒常問「我可以做什麼」，保羅的問題是「我怎樣做才能多得人」——這是視角的根本轉換。</p>
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
              <p className="text-gray-700">保羅放棄了合法的使徒權利，為了更有效地傳福音。你是否曾主動放棄一項合法的權利或個人偏好，為了他人的益處或福音的緣故？那是什麼感受？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「向什麼人，就作什麼人」——在你的日常生活中，你是否願意為了接觸不同背景的人，而調整自己的文化習慣？有沒有你不願妥協的地方？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅以運動員比喻自律。在你的信仰生活中，你在哪些方面需要更多的自律（禱告、讀經、節制欲望）？你目前的「靈命操練」習慣是怎樣的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「傳福音給別人，自己反被棄絕」——你是否曾見過或經歷過一個人在屬靈服事上看似忠心，但私下生活卻與所傳的信息相矛盾？這對你有什麼警醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">如果你把「多得人」設為你生命的最高優先目標，你目前的生活會有什麼需要改變？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別一個可以捨棄的「自由」</h4>
              <p className="text-gray-700 mb-2">參考保羅放棄使徒權利的精神，這週：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>識別一項你目前合法擁有、但可能成為別人接近福音障礙的自由或習慣</li>
                <li>主動放棄它一週，觀察這對你與那個人的關係有什麼改變</li>
                <li>把這個捨棄當作「為福音的緣故」的禱告和獻上</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 靈命操練的計畫</h4>
              <p className="text-gray-700 mb-2">仿效運動員的節制，設立一個屬靈操練計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選一項你一直想建立但未持守的屬靈習慣（如每日禱告、讀經、記錄感恩）</li>
                <li>設定每天的固定時段和實際的時間長度（從5-10分鐘開始）</li>
                <li>找一位弟兄/姊妹互相守望，每週匯報</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我有保羅的心腸——為了多得人，甘心放棄自己的權利和喜好。讓我不問「我可以做什麼」，而問「我怎樣才能多得人歸向祢」。讓我像運動員一樣操練自己，使我的生命與所傳的信息相符。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
