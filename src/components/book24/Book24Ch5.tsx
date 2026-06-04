import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">末世關鍵時刻</h2>
        <p className="text-gray-500 mt-1">核子彈降落那一天與啟示錄預言的實現（4.7-4.9）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 text-base mb-2">4.7 我允許被提的人為你們禱告，造訪你們被留下的</h3>
              <p className="text-gray-700 leading-relaxed">
                珂萊爾提問：「主啊，知道大家在地上受苦，你會和他們一起甘苦共忍難，
                我怎麼能高興得起來呢？我們就不能回來幫幫他們嗎？」
                主回答說：「你們要進入我的安息。你們已經勞苦苦努力了，你們需要的是休息。
                我沒有打算呼召我的新婦參與即將面臨的審判。我把你們帶走，不是為了讓你們
                從天上眼巴巴地瞅著他們受苦。明白我的意思嗎？」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主進一步解釋：「親愛的，很多人以為回到地球，經受熬練，是一件英雄壯舉。
                真是不知道自己在說什麼。我的天使們已經為即將發生的一切做好了準備。
                我只允許天使參與地上的事件。」關於在天堂能否為地上的親人禱告，主說：
                「有的時候，會讓你們為他們禱告。不過，那時，你們的知識遠遠超過現在。
                你們禱告的目的是為了讓他們得到最大的益處。你們不再為親情糾結，
                你們會站在我的角度看待他們。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-rose-700 text-base mb-2">4.8 核子彈降落的那一天</h3>
              <p className="text-gray-700 leading-relaxed">
                這是書中最震撼人心的一章。主說：「如果發生少量的核武器交戰，全世界就陷入混亂，
                到時奧巴馬（Obama）會打著和平的口號，借此機會再次登上歷史舞臺，被世人捧戴為英雄。」
                主描述了核子彈降落後的景象：通訊被切斷，然後迅速恢復；特殊部隊隨時待命，
                只等核武爆發之後，按照早已部署好的計畫投入作戰行動。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                最令人震驚的是主接下來說的話：
                「核子彈降落的那一天，也是我來接你們走的那一天。抬起頭來，仰望天空，
                就在同一天，我要接你們走（被提）。」這意味著核子彈降落的那一天，
                同時也是信徒被提的那一天。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主對那些核爆後被留下的人說：「雖然剩下的人開始挺身而出，起來捍衛自己的利益，
                但為時已晚！權利已經被剝削完了。現在還有一事可行，就是你的得救，悔改和完全對我的
                信靠可以保證你在天堂裡的未來。凡是不倚靠我，想靠自己的力量去拚搏的，肯定會失敗。
                只有那些真正認識我，屬於我，被我呼召去保家衛國的百姓（男人和女人們），
                才會戰無不勝，攻無不克。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-rose-700 text-base mb-2">關於被留下的人的盼望</h3>
              <p className="text-gray-700 leading-relaxed">
                即使在核子彈降落的末世場景中，主仍然給出了希望。主問珂萊爾：
                「你知道新婦應該具備哪些品格嗎？她是不是很好戰？」主自己回答：
                「當然不是。她就像電影『宣教』裡的祭司。面對那些向他們射擊的傭兵，
                他們從容地走進士兵的射擊區，被他們擊斃打到。」
                「這就對了！這樣的新婦才配我的面！這就是新婦的品格特徵。
                她是良人，不是軍人。她所進行的唯一一場戰爭就是與罪惡的爭戰。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-rose-700 text-base mb-2">4.9 為什麼要實現啟示錄裡的預言？</h3>
              <p className="text-gray-700 leading-relaxed">
                主解釋為什麼啟示錄的預言必須應驗：
                「對我（耶穌）來說，知道自己必須做一件不得不為之的事情是很痛苦的。其實，
                我不希望啟示錄的預言應驗。但是，所有的內容必須應驗，這樣我好來統治地球。
                這是天父的旨意。雖然我知道這麼做的必要性。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也解釋了神並非殘忍無情：「你能不會想到，天父和我仔細斟酌考慮了所有不同的選擇，
                最後提出一個危害程度最弱，嚴重程度最小，傷亡程度最低的方案呢？」
                主還指出神的善意：「由於人類自私的野心如此強大，使得他們完全無視子孫後代的福祉……
                人類無法享受我賜給他們的免費能源禮物，而是互相爭奪，使能源成為戰爭和毀滅的根源。
                我賜給你們免費的能源，可是有些人卻剝奪了全人類享受免費能源的機會。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                書中也提到了有關神允許苦難的重要問題。珂萊爾提出了很多人都會問的疑問：
                「主啊，我知道人類很邪惡，但也不能讓無辜的人受苦啊！」主回答：
                「可是，人類上上下下並不像你所說的那麼無辜。有很多色情作品，
                剝工奴役和性交易行為；富人偷竊窮人僅有的財物，窮人之間也互相剝削。
                整個一桶蘋果從頭爛到底。人類自私的本性需要被神矯正。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '被提的信徒在天堂進入安息，主不會讓他們在天上看著地上的人受苦。',
                '核子彈降落那一天，同時也是被提發生的那一天——主在最混亂的時刻接走祂的新婦。',
                '被留下的人仍有得救的機會，但唯一的出路是認識主、倚靠主，而不是靠武力反抗。',
                '啟示錄預言必須應驗，因為這是天父的旨意，是讓神統治地球的必要前提。',
                '神並非殘忍——祂在無數可能的方案中選擇了危害最小的那個，每一個選擇都出於對人類的愛。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">被提（Rapture）的神學討論</h4>
              <p className="text-gray-700 leading-relaxed">
                「被提」（英文 Rapture，源自拉丁文 rapturo）是指基督徒在主再來時被提升到空中
                與基督相遇的事件，根據帖撒羅尼迦前書4:16-17。關於被提的時間點，
                神學界有三種主要立場：災前被提、災中被提和災後被提。
                本書的觀點似乎支持「與重大事件同時發生」的被提，強調信徒不需要經歷大災難的全程。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">苦難神學：神為何允許惡存在？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是哲學和神學中最古老的問題之一（神義論）。本書從幾個角度回應：
                (1) 人類的自由意志選擇了罪惡；(2) 神選擇了「危害最小的方案」；
                (3) 苦難是讓人轉向神的最後機會；(4) 若沒有苦難，更多靈魂將永遠迷失。
                這並非完整的神學解答，但提供了一個以神的愛為中心的視角——祂的每個允許都出於憐憫。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「新婦不是軍人」——信仰的和平主義</h4>
              <p className="text-gray-700 leading-relaxed">
                書中描述主的新婦「不是軍人，只進行與罪惡的爭戰」，這個意象呼應了早期基督徒
                面對羅馬迫害時的和平主義立場。馬太福音5:38-39的「不要抵擋惡人」
                和羅馬書12:17-21的「不要以惡報惡」共同構成這種信仰立場的基礎。
                這並非消極，而是一種更高層次的屬靈爭戰——以禱告、愛和見證，而非武力，
                來對抗末世的黑暗。
              </p>
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
            {[
              '如果核子彈降落的那一天真的是被提的那一天，這個知識如何改變你對日常生活預備的態度？',
              '主說「被留下的人靠武力反抗必然失敗，唯有靠我才能得勝」——你如何理解在末世中「屬靈爭戰」和「實際行動」的關係？',
              '面對「神為何允許苦難」這個問題，本書的回答（神選擇危害最小的方案）能讓你滿意嗎？如果不，你有什麼其他的思考？',
              '「新婦不是軍人，而是進行與罪惡的爭戰」——這個意象對你來說有什麼個人的召喚和挑戰？',
              '如果你在天堂中，知道地上還有你愛的人正在受苦，你認為天堂的「安息」是否會讓你感到衝突？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀帖撒羅尼迦前書4-5章</h4>
              <p className="text-gray-700 mb-2">深入了解被提的聖經依據和末世的警醒。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀帖前4:13-18（被提的描述）</li>
                <li>閱讀帖前5:1-11（「賊來的時候」——保持警醒）</li>
                <li>思考：如果主今天就來，我有沒有準備好？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 為未信的家人朋友緊急禱告</h4>
              <p className="text-gray-700 mb-2">利用現在這個恩典時期，為身邊未信的人努力。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出三個你最希望他們得救的人的名字</li>
                <li>每天為他們禱告，並尋找機會分享福音</li>
                <li>對他們的靈魂有緊迫感，因為「時間不多了」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 苦難神學的個人功課</h4>
              <p className="text-gray-700 mb-2">面對苦難問題，建立穩固的信仰根基。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>思考你個人對「為何神允許苦難」的回答是什麼</li>
                <li>閱讀約伯記，看神如何回應約伯的質問</li>
                <li>在禱告中向神誠實表達你的困惑和疑問</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，感謝你在最後的時刻仍然來接走你的新婦。我不知道那一天何時來到，
                但我選擇每天活得好像今天就是最後一天。求你幫助我在愛中，在禱告中，
                為身邊還未認識你的人盡最後的努力。願你的旨意成就，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
