import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">個人的門徒帶領要素</h2>
        <p className="text-gray-500 mt-1">教會真正的角色為何？從聚會到造就</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">一個發人深省的問題</h3>
              <p className="text-gray-700 leading-relaxed">作者的朋友去了一趟中東，遇到一位阿拉伯基督徒牧師，他的教會強調在不同的關係環境中帶領門徒——可以在公開場合，也可以在各人的家裡（徒二十20）。有一位剛信主的年輕穆斯林女子，因為改變信仰受到威脅，若她參加任何公開聚會，他們就要燒毀教會。但因為教會在各人家中也有效地帶領門徒，她的屬靈成長並不因此受阻。</p>
              <p className="text-gray-700 leading-relaxed mt-3">這讓我們問一個問題：若今天在北美，大家只能在各人家中聚會、不能公開聚集，事情將會如何？這個問題讓我們看見，我們有多倚賴聚會，而非透過個人關係來帶領門徒。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">三個不可或缺的門徒帶領要素</h3>
              <p className="text-gray-700 leading-relaxed">帶領門徒過程中有三個不可缺少的要素——神的話、神的聖靈、以及神的百姓。這三個要素相輔相成，使人的靈命邁向成熟。</p>
              <div className="space-y-4 mt-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2">1. 神的話</h4>
                  <p className="text-gray-700">小組必須忠實地固定查考聖經——不是社交聚會，不是人本主義「重要人生功課」，而是認真對待神的話語。希伯來書四章12節說：「神的道是活潑的，是有功效的，比一切兩刃的劍更快。」耶穌在曠野受試探時，直截了當用神的話與敵人對抗——這也是我們需要的裝備。提摩太後書四章3-4節預警：「時候要到，人必厭煩純正的道理，耳朵發癢」——因此小組應固定查考聖經，生命嘗試改變的事，都需根植於謹慎的聖經應用。</p>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <h4 className="font-bold text-teal-800 mb-2">2. 神的聖靈</h4>
                  <p className="text-gray-700">改變生命的力量不是從我們自己而來。若不小心，我們都可能陷入「更努力地自潔就會更好」的觀念，但這最終導致失敗、罪疚和遠離神的惡性循環。哥林多後書三章18節說：「我們眾人既然敞著臉得以看見主的榮光……就變成主的形狀，榮上加榮，如同從主的靈變成的。」我們的意志力顯然是方程式中的一個變數——彼得後書一章告訴我們要殷勤加上各樣的美德；但即使我們參與在這過程中，改變的力量最終來自聖靈。小組是一個工具，目的不是讓我們依賴小組本身，而是創造一個合乎聖經的關係環境，讓聖靈在人的生命中帶來長久的轉變。</p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <h4 className="font-bold text-indigo-800 mb-2">3. 神的百姓（最容易被忽略）</h4>
                  <p className="text-gray-700 leading-relaxed">聖經裡幾乎每個教導都包括一個垂直（愛神）或水平（愛人）的命令。這表示我們不能將關係從帶領門徒過程中分開。我們與人的互動是上帝教導我們真理的方法之一。</p>
                  <p className="text-gray-700 leading-relaxed mt-2">作者引用羅馬書十二章9-21節，列出了所有關於基督徒彼此關係的命令——愛弟兄要彼此親熱、恭敬人要彼此推讓、聖徒缺乏要幫補、逼迫你們的要給他們祝福……這些教導都和我們與教會弟兄姐妹的互動有直接關係。門徒生命要成長，必須持續和其他基督徒保持刻意的關係。</p>
                  <p className="text-gray-700 leading-relaxed mt-2">希伯來書三章12-13節是作者的座右銘：「弟兄們，你們要謹慎……總要趁著還有今日，天天彼此鼓勵，免得你們中間有人被罪迷惑，心裡就剛硬了。」如何防止自己的心因罪而剛硬？答案：透過主裡家人不斷地鼓勵，包括溫柔的規勸和告誡。</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">從「聚會」到「造就」的轉化</h3>
              <p className="text-gray-700 leading-relaxed">教會需要做的轉化，是從以聚會為基礎、資訊性的環境，轉化為在關係環境中實際操作的訓練。小組本身可以淪為只是教會眾多聚會裡的一個而已——作者稱這種沒有目的性的小組為「人肉炸彈」：當你把人聚在一起，卻沒有在屬靈上成長、沒有屬靈父母領導，你等於有個已經點燃引信的人肉炸彈。</p>
              <p className="text-gray-700 leading-relaxed mt-3">一個以促進門徒生命為目的的小組，必須具備三個特質：（1）以聖經為中心；（2）刻意地引導人向靈命成熟的目標前進；（3）一個大家可以坦誠談論自己生活、明白跟隨耶穌真諦的地方。</p>
              <p className="text-gray-700 leading-relaxed mt-3">真正的小組不只是每週的聚會時間——小組開始的關係，應該發展到遠超過每週的小組時間。幾個弟兄一起打獵或喝咖啡，在過程中聊起生命，奇妙的對話就此產生。幾個家庭一起去露營，幾個太太在孩子們玩耍時聚在一起禱告——這才是關係性門徒訓練真正的模樣。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">為何成熟的基督徒必須愛人？</h3>
              <p className="text-gray-700 leading-relaxed">愛是終極指標，顯示出真實的門徒生命（約十三34-35）。學習愛人是帶領門徒的過程中相當重要的部分。若我們沒有刻意努力與他人和睦，我們在這領域便沒有成長；不論學習了多少聖經知識，我們都沒有成為靈命成熟的人。高爾文博士的回答令人深思：「這是兩回事。我們必須去愛人，但我們不一定要喜歡他們。上帝是愛，而上帝愛那些不可愛的人。關鍵是以耶穌的眼光來看人，因為耶穌愛他們。你必須愛人，直到你能夠喜歡上他們。」</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '門徒帶領有三個不可或缺的要素：神的話（知識的根基）、神的聖靈（改變的能力）、神的百姓（成長的環境）。',
                '「神的百姓」是三個要素中最容易被忽略的，但聖經的大部分教導都涉及人與人的關係，不能從門徒帶領中分開。',
                '一個有果效的小組必須以聖經為中心、刻意引導人向成熟、並成為大家可以坦誠生活的地方——不只是定期聚會。',
                '真正的小組關係應超越每週的聚會時間，在日常生活中的各種場合中延伸和深化。',
                '愛是成熟門徒的終極標誌；不需要喜歡每個人，但必須以耶穌的眼光去愛他們——「愛人，直到你喜歡上他們」。',
                '希伯來書三章12-13節告訴我們：防止我們心中剛硬的方法，是透過主裡家人天天的相互鼓勵和告誡。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼「合乎聖經的關係」不是「社交聚會」？</h4>
              <p className="text-gray-700 leading-relaxed">合乎聖經的關係環境與純粹社交聚會的重要差異在於：焦點是神的話，以及聚集背後的目的。不是為了讓大家一起廝混或認識新朋友而推廣小組；而是讓大家知道，小組時間是具有目的性的聚集，由靈命成熟的人來帶領，他明白自己的責任是幫助大家在成為耶穌門徒這條路上持續成長。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">牧師為何需要加入普通人的小組？</h4>
              <p className="text-gray-700 leading-relaxed">有些牧師參與只由牧師組成的同儕小組，認為這樣就夠了。但作者認為，若牧師能固定參加自己教會裡由一般人組成的小組，是最有幫助的。領袖必須將他們服事的人視為同儕——除非他們不相信「信徒皆祭司」！要跟隨基督的榜樣，選擇與一群普通人相處，並真實地與他們互動。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">愛的神學：命令還是感情？</h4>
              <p className="text-gray-700 leading-relaxed">約翰福音二十一章，耶穌復活後問彼得三次「你愛我嗎」——不是「你順服我嗎」。這個順序很重要：愛先於順服。耶穌知道，若有人真正愛祂，順服就是自然的流露，而非外加的義務。同樣地，是愛迫使我們完成大使命，而不是責任感——責任感會變淡，愛才能持久。這也是為什麼門徒帶領的核心，是幫助人更深地愛耶穌，而不只是給他們更多的規則和要求。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '如果你的教會明天不能再公開聚會，你的信仰和屬靈成長會受到多大影響？這讓你對目前的信仰形態有什麼反思？',
              '在三個要素（神的話、神的聖靈、神的百姓）中，你的門徒帶領最常忽略哪一個？怎樣可以加強這個部分？',
              '你參與的小組或教會，是「以聚會為基礎的資訊分享」，還是「關係性的造就環境」？有什麼具體的差異？',
              '你生命中有沒有人天天鼓勵你，讓你不至於被罪迷惑而剛硬？你有沒有在為別人做這件事？',
              '你生命中有沒有一個你很難去愛的人？你願意嘗試以耶穌的眼光去看他，並刻意地去愛他嗎？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 本週擴展你的小組關係</h4>
              <p className="text-gray-700 mb-2">除了正式的小組聚會，這週安排至少一個和小組成員的非正式接觸：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>一起喝咖啡或吃飯</li>
                <li>打電話或發訊息問候他們的生活狀況</li>
                <li>邀請他們一起參與你的日常活動</li>
                <li>在他們需要時主動提供幫助</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 評估你的小組是否「以聖經為中心」</h4>
              <p className="text-gray-700">回顧過去三個月的小組聚會，花多少比例的時間在認真查考聖經（而不只是讀一讀、討論感受）？若比例太低，思考如何調整小組的格式，讓聖經成為每次聚會的核心。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 學習以耶穌的眼光去愛</h4>
              <p className="text-gray-700">選擇一個你覺得難以相處的人，這週為他們禱告三次，求神讓你以耶穌的眼光看他。然後嘗試做一件具體的善意之事（如一個問候、一個鼓勵或一個幫助），不期待對方的回應。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，謝謝你告訴我帶領門徒需要三個要素——你的話、你的聖靈、和你的百姓。求你幫助我不要只靠自己努力成長，而是學習在真實的關係中、在你話語的光照下、靠著聖靈的能力，與你的百姓一起前行。求你讓我的小組成為一個真實造就人的地方，而不只是一個定期的宗教活動。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
