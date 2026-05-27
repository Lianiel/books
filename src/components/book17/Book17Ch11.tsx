import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">從食物與神的關係看自由的底線</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十1-十一1</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、以色列歷史為警戒（十1-13）</h4>
              <p className="text-gray-700 leading-relaxed">以色列人出埃及時享有特別的恩典（過紅海、吃嗎哪、喝靈磐石的水），卻有許多人在曠野倒斃，因為他們貪戀惡事、拜偶像、行淫、試探主、發怨言。保羅把這些記載為「我們的鑒戒」，警告自以為站立得穩的人要謹慎。然而神是信實的，不讓人受超過所能受的試探，並且為人開出路。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、不拜偶像是絕對底線（十14-22）</h4>
              <p className="text-gray-700 leading-relaxed">保羅引入聖餐的神學：喝祝謝的杯是與基督的血相交，擘開的餅是與基督的身體相交。祭偶像也是相交——是與鬼魔相交。「你們不能喝主的杯，又喝鬼魔的杯；不能與主的桌子，又與鬼魔的桌子有分。」參與偶像崇拜是對神的激惹，不拜偶像是絕對底線，不是相對的自由問題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、自由的原則與限度（十23-十一1）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以「凡事都可行，但不都有益處；凡事都可行，但不都造就人」作為行為準則，同時補充：「無論做什麼，都要為榮耀神而行。」在外買食物不必問；若有人指出是祭偶像的，就不要吃——不是為自己，而是為說話者的良心。最終總結：「你們要效法我，像我效法基督一樣。」</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">恩典與警醒的並行</h4>
              <p className="text-gray-700 leading-relaxed">以色列人享有恩典，卻仍然失敗——這個警告對「已蒙神恩」的基督徒也有意義。不是說救恩可以失去，而是說：擁有恩賜和蒙召的人，仍需保持靈命的謹慎和警醒。「自以為站立得穩的，須要謹慎，免得跌倒」是保羅給一切已蒙恩者的警告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">聖餐的「相交」神學</h4>
              <p className="text-gray-700 leading-relaxed">保羅用「相交」（koinonia）的概念解釋聖餐：喝主的杯是進入與基督受苦的聯合，擘開的餅是進入與基督身體的聯合。這個神學把聖餐提升到遠超「象徵性紀念」的層次——它是真實的屬靈接觸和生命聯合。因此參與偶像的桌子（與鬼魔相交）和主的桌子（與基督相交）不可能同時並存，有根本的衝突。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「試探之中的出路」神學</h4>
              <p className="text-gray-700 leading-relaxed">十章13節「神是信實的，必不叫你們受試探過於所能受的」常被斷章取義，以為「只要信神，試探就會消失」。保羅的重點是：神知道你的限度，不會讓試探超過你的承受力；並且「必要開出路來」——這路不必是「消除試探」，而是「在試探中有承受的力量和抵抗的智慧」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「榮耀神」作為行為的終極準則</h4>
              <p className="text-gray-700 leading-relaxed">十章31節「無論做什麼，都要為榮耀神而行」是保羅倫理的總綱。這個準則比任何規則都更根本——它要求信徒在每個具體情境問：「這個選擇榮耀神嗎？」這個問題的好處是：它不需要規則表，而是培養一種持續詢問和回應神的生命方向。</p>
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
              <p className="text-gray-700">以色列人蒙受了豐盛的恩典，卻仍然失敗。這讓你如何看待「我已是基督徒了，就不會跌倒」的心態？你在哪些方面有「自以為站立得穩」的危險？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說不拜偶像是絕對底線，不是相對的自由問題。在你的文化或家庭背景中，有沒有一些宗教或文化習俗，可能構成「與偶像相交」的問題？你如何看待這些情況？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何理解「神的試探出路」？面對一個你反覆跌倒的試探，你相信神確實為你開了出路嗎？那條出路可能是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「凡事都要為榮耀神而行」——若你把這個問題應用在你今天的行程，有哪些選擇你會做出不同的決定？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅以自己為例，說「你們要效法我，像我效法基督一樣」。你有沒有能夠以同樣的話說「效法我」的信心？如果沒有，什麼地方需要改變？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 「無論做什麼，都為榮耀神」的一天</h4>
              <p className="text-gray-700 mb-2">選擇一天，在每個重要決定前問自己這個問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「這個選擇榮耀神嗎？」——在飲食、娛樂、說話、使用時間上</li>
                <li>晚上記錄下：哪些選擇明確榮耀神？哪些讓你後悔？</li>
                <li>把這個問題逐漸培養成生命的習慣</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 面對反覆試探的禱告策略</h4>
              <p className="text-gray-700 mb-2">針對你反覆跌倒的試探，建立一個具體的應對策略：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>識別試探通常在什麼時間、情境、觸發點出現</li>
                <li>預先計畫「神開的出路」——在試探來臨前先想好替代行動</li>
                <li>告訴一個信任的人，請他/她在這個領域守望你</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我從以色列的歷史學到謹慎，不以蒙受恩典為自以為是的理由。讓我在每個決定中問：這榮耀神嗎？並且在每個試探中尋找祢所開的出路。讓我效法保羅，效法基督，在凡事上以祢的榮耀為最高目標。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
