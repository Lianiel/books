import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch17() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">成為有愛心的群體</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十六1-24</p>
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
              <h4 className="font-semibold text-purple-700 mb-2">一、為聖徒捐款（十六1-4）</h4>
              <p className="text-gray-700 leading-relaxed">保羅指示哥林多信徒每週一日各人按收入比例存留，為耶路撒冷貧窮的聖徒捐款。這個行動體現了「聖徒相通」：教會不只是地方性的，也是普世性的。捐款需要有計畫（不是現湊），並由信徒選出的代表負責運送，保羅在金錢處理上保持透明度，以防誤會。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、保羅的行程計畫（十六5-12）</h4>
              <p className="text-gray-700 leading-relaxed">保羅計畫先往馬其頓，再到哥林多多住一些時候，因為以弗所有極大的福音機會（雖反對者也多）。他要哥林多人善待提摩太，因為提摩太也在做主的工作。他與亞波羅之間沒有嫌隙，亞波羅顧及時機暫不前往哥林多——兩人的關係展現了真正的同工精神，沒有爭地盤的嫉妒。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、最後的叮嚀與問安（十六13-24）</h4>
              <p className="text-gray-700 leading-relaxed">保羅給出五個命令：儆醒、在信仰上站穩、作大丈夫、剛強、凡事憑愛心而做。他叮嚀信徒敬重事奉者如司提反，接著是各人的問安。最後他親筆寫道：「若有人不愛主，他就該受咒詛。主啊，願你來！」（Maranatha）然後以恩典和愛作結束。整封書信以愛開始（一4-9的感恩），以愛作結。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">慈善奉獻的神學：有計畫的愛</h4>
              <p className="text-gray-700 leading-relaxed">保羅要哥林多人「每逢七日的第一日，各人照自己的進項抽出來留著，免得現湊」。這說明愛心的行動需要提前計畫，而非臨時衝動。真正的慷慨是有紀律的慷慨——把奉獻列入預算，而非等到有剩餘才奉獻。這也反映了保羅對有計畫地服事的重視：愛不只是感情，也是意志和習慣的操練。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">透明財務：事奉的智慧</h4>
              <p className="text-gray-700 leading-relaxed">保羅要哥林多人選出代表，而非由他一人處理捐款，這是事奉的智慧：不讓金錢成為事奉者的絆腳石和教會誤會的來源。傳道人不應該直接經手奉獻，教會應有清楚的財務透明機制。這個原則在兩千年後仍然適用，甚至更加重要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「不愛主，就該受咒詛」的嚴肅</h4>
              <p className="text-gray-700 leading-relaxed">十六章22節是整卷書信中最嚴厲的話之一，由保羅親筆所寫。「不愛主」是整個哥林多問題的根源——所有的結黨、嫉妒、性罪惡、貧富分化，都源於不以基督為生命的中心。Maranatha（主啊，願你來！）是早期教會的末世呼求，也是整卷書信的終極焦點：一切的盼望和行動的原動力，都歸向主的再來。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">保羅的牧者心腸：從始至終的愛</h4>
              <p className="text-gray-700 leading-relaxed">整卷哥林多前書，從一章4-9節的感恩禱告，到十六章24節「我在基督耶穌裡，愛你們眾人」，是一封愛的書信。保羅面對一個充滿問題的教會，沒有放棄，沒有憤怒離去，而是以嚴肅的真理和深摯的愛，一一處理他們的困境。這是真正的牧養：愛的人不會護短，也不會因對方有缺點就失去愛心。</p>
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
              <p className="text-gray-700">你在金錢奉獻上有多少「計畫性」？你是按比例、有預算地奉獻，還是等到有剩餘才奉獻？保羅的指示對你有何改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你對你教會外的其他地方教會有多少關心和資源分享？你認為「聖徒相通」的原則在今日如何應用？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅說「若有人不愛主，就該受咒詛」——這讓你省察自己對主的愛。你今天對主的愛是熱切的，還是漸漸冷淡了？是什麼讓它增加或減少？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「Maranatha——主啊，願你來！」這個末世的呼求對你有多真實？主的再來是你盼望和行動的動力，還是一個遙遠的神學概念？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">讀完整卷哥林多前書，你認為神向你個人最重要的一個呼召是什麼？你願意在這一個領域採取具體的行動嗎？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立有計畫的奉獻習慣</h4>
              <p className="text-gray-700 mb-2">本週具體行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>計算你每月收入的固定奉獻比例，設立一個具體金額</li>
                <li>把這個金額列入每月預算，而不是等到月底才決定</li>
                <li>考慮是否有一個需要的教會或機構，是你可以為「其他地方聖徒」支持的</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 哥林多前書整卷的回顧與行動</h4>
              <p className="text-gray-700 mb-2">讀完整卷書，做以下的回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>從十七章中，哪一章對你最有觸動？為什麼？</li>
                <li>神在這卷書中向你說的最重要的一句話是什麼？</li>
                <li>你願意為這個領悟做一個具體的生命改變，以文字記錄下來</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 對你的教會說「我愛你們眾人」</h4>
              <p className="text-gray-700 mb-2">效法保羅最後的話，這週：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>向你的教會夥伴（小組、同工）表達具體的感謝和愛</li>
                <li>即使教會有讓你不滿的地方，仍選擇以愛為最後的定調</li>
                <li>為你的教會禱告：求神讓這個群體成為一個真正有愛心的群體</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本書結語禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主啊，謝謝祢藉哥林多前書提醒我：教會雖有問題，仍是祢的教會；信徒雖不完全，仍是祢寶血買來的。讓十字架成為我看待一切的視角，讓愛成為我服事的動力，讓復活的盼望成為我忍耐的根基。主啊，願你來！讓我活到那一天，在祢面前無可責備。奉主耶穌基督的名禱告，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
