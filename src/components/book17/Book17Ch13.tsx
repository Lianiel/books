import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">合一與多元</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十二1-31</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、辨別真靈與假靈（十二1-3）</h4>
              <p className="text-gray-700 leading-relaxed">保羅談屬靈恩賜前，先提出辨別靈的準則：凡被神的靈感動的，會承認耶穌是主；若被邪靈牽引，則會說「耶穌可被咒詛」。真正聖靈的工作，不只是引人順服聖靈的引領，更是引人離棄偶像，尊耶穌為主。恩賜問題永遠不能與「耶穌是主」這個信仰核心分離。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、多元而合一的恩賜（十二4-31）</h4>
              <p className="text-gray-700 leading-relaxed">保羅在這段經文反覆強調「多元而合一」：恩賜有分別，但同一位聖靈；職事有分別，但同一位主；功效有分別，但同一位神。聖靈按自己的意思把不同的恩賜分給各人，目的是使人得益。以身體為比喻：信徒彼此相屬，不能孤立；身體各器官互相需要，不能因恩賜不同而互相排斥或自我抽離。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、神特別顧念軟弱的肢體（十二22-26）</h4>
              <p className="text-gray-700 leading-relaxed">保羅反轉世人的邏輯：身上看為不體面的，神越發給他加上體面；不俊美的，越發得著俊美。神故意這樣安排，是要身體的各部分互相顧念，「一個肢體受苦，所有的肢體就一同受苦；一個肢體得榮耀，所有的肢體就一同快樂」。這是基督身體的互相感通。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">恩賜源於三一神的豐盛</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十二章4-6節把恩賜、職事、功效分別歸於聖靈、聖子、聖父三位一體。這個三一神學框架說明：教會恩賜的多元性，根源於神自身的豐盛。不同的恩賜不是分裂的訊號，而是三一神豐盛的反映。因此攻擊別人的恩賜，等於攻擊神的設計；輕看自己的恩賜，等於輕視神的賜予。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">恩賜的主權在聖靈</h4>
              <p className="text-gray-700 leading-relaxed">「這一切都是這同一位聖靈所作的，他按照自己的意思個別地分給各人」（十二11）。這個宣告徹底否定了「所有人應有相同恩賜」的主張，也否定了「恩賜可以靠努力追求得到」的偏差。恩賜的主權在聖靈，不在人的渴望或努力——這讓信徒在自己的恩賜中謙卑，在他人的恩賜中感恩。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">優越感和自卑感的同根問題</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十二章15-26節對治了兩種相反的態度：因恩賜不足而自卑抽離（「我不屬乎身子」），以及因恩賜豐盛而輕視他人（「我不需要你」）。兩種態度都源於以恩賜衡量價值的錯誤邏輯，都造成身體的殘缺。真正的解方是：無論有什麼恩賜，都因為「在基督身體中」而有無可取代的價值。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">合一不是統一</h4>
              <p className="text-gray-700 leading-relaxed">保羅所描繪的教會合一，不是所有人都一樣（統一），而是在多元中互相需要（合一）。這個區分非常重要：統一消滅差異，合一在差異中共存。教會常把「合一」理解為「我們都要做同樣的事、有同樣的意見」，這實際上是追求統一。保羅的「身體合一」是：因為各有不同，所以互相需要，互相顧念。</p>
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
              <p className="text-gray-700">你是否曾渴望擁有別人的恩賜，甚至因為自己沒有某種恩賜而感到不完全？這個感受如何影響了你在教會中的投入程度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">教會中有沒有你覺得不重要或「比較不屬靈」的恩賜或服事？保羅的「身體神學」如何挑戰你對這些服事的評價？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「一個肢體受苦，所有肢體就一同受苦」——你對教會其他成員的喜樂和痛苦有多少真實的感通？有沒有你一直未去關心的受苦弟兄姊妹？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你認為自己在教會的恩賜是什麼？若你不確定，你願意主動尋求了解和嘗試嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「合一不是統一」——在你的教會經歷中，有沒有因為「要求統一」而傷害了有不同恩賜或風格的人的例子？這讓你有什麼反思？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 感謝他人的不同恩賜</h4>
              <p className="text-gray-700 mb-2">這週選一位恩賜與你很不同的弟兄/姊妹：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>具體思考他/她的恩賜如何補充了你的不足</li>
                <li>主動向他/她表達感謝，說明他/她的恩賜對你或教會的貢獻</li>
                <li>為他/她的恩賜和事奉獻上禱告</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 與受苦肢體同感</h4>
              <p className="text-gray-700 mb-2">本週主動了解你身邊是否有弟兄/姊妹正在受苦：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>不只是聽說，而是主動關心詢問</li>
                <li>為他/她的需要代禱，並問有什麼具體的幫助</li>
                <li>記住：他/她的痛苦也是整個身體的痛苦</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我接受祢對我恩賜的設計，不羨慕他人，也不輕看自己。讓我看到每一個弟兄姊妹的恩賜，都是祢豐盛的展現，都是教會需要的。讓我在喜樂中與弟兄同樂，在痛苦中與他們同苦，真正活出「身體合一」的真理。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
