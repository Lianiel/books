import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Swords, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-4</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第四項：挑戰和反擊</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：你退我進的四步驟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章揭示榮耀競爭在聖經故事中屢見不鮮，介紹榮耀競爭涵蓋的四個步驟，以及耶穌與猶太宗教領袖之間的對立；也探討發生在榮/辱社會（如中東地區）中，衝突、暴力似乎無止盡循環的關鍵因素，並釐清耶穌對榮耀的詮釋，與世俗標準背道而馳。「反擊」原是一個擊劍術語，意思是「防守之後，快速還擊」，用在社交上，代表對侮辱或批評能靈巧、迅速地回應。處理挑戰和反擊，或說「你退我進」的遊戲規則，可分四個步驟：宣告身分/立場；質疑或拒絕承認該宣告；對宣告反擊或防衛；決定勝負。<sup>1</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 20.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者坦言，初次涉獵榮/辱感時，這個框架啟發他以全新角度，了解耶穌和法利賽人之間為何格格不入——福音書中記載的耶穌和法利賽人的互動，大多數都是公開進行的，若以榮/辱文化的角度來看，這類「榮耀競賽」的運作方式，就像擊劍術的挑戰和反擊。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">聖經例證：安息日治病</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音十二章記載了完整的四步驟：（1）對價值觀的主張——耶穌宣告「人子是安息日的主」（8節）；（2）質疑或拒絕承認——法利賽人質疑「安息日治病可以不可以？」意欲控告耶穌（10節）；（3）對宣告進行反擊或辯護——耶穌的反擊分三部分：首先用間接溝通方式提問「你們中間誰有一隻羊，當安息日掉在坑裏，不把他抓住，拉上來呢？人比羊何等貴重呢」（11-12節）<sup>2</sup><span style={cite}>（耶穌指出法利賽人的虛偽，讓他們失去榮耀或「有失顏面」。）</span>，接著語氣加重地說「所以，在安息日做善事是可以的」（12節），充滿諷刺意味，最後不僅說話，更付諸行動，行了一個奇蹟：「於是對那人說：伸出手來！他把手一伸，手就復了原」（13節）；（4）將眾所周知的成功歸於宣告者——「有許多人跟著他……眾人都驚奇，說：這不是大衛的子孫嗎？」（15、23節）。<sup>3</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 20.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶穌面對法利賽人的挑戰，做出如此強烈的反駁，以至於「法利賽人出去，商議怎樣可以除滅耶穌」（14節）——法利賽人為何如此憤怒？因為他們的榮耀和地位公然遭受嚴重打擊，相對地，耶穌的榮耀、聲望迅速提升。尼瑞指出：「同儕間你退我進這種遊戲方式，常常發生在一般社交生活中：市集、賽場、猶太會堂、男人的聚會等等……眾人相當看重耶穌，祂是神的代表，而且擁有好名聲：祂是先知、教師和醫治者。事實上，祂經常面臨挑戰……也因此，更彰顯出祂的榮耀，配得眾人的青睞與愛戴。可想而知，祂獲得肯定，難免遭人嫉妒（太廿七18），總有人想挑戰祂。」<sup>4</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 20.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">全面的挑戰和反擊，通向十字架</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一次又一次，耶穌贏得了所有榮耀競賽——這帶來兩個結果：首先，祂揭發了猶太宗教領袖的邪惡念頭和動機（約八44-47）；其次，因為這樣的揭發，他們對耶穌採取激烈手段、醞釀陰謀要置祂於死地。作者提醒讀者留意這個悖論：耶穌在與法利賽人的對話中，贏得了所有挑戰和反擊的公開「競賽」，但贏了榮耀競賽，卻在法利賽人中引發相當大的嫉恨，導致祂須蒙羞受死——被釘十字架，這簡直是耶穌的終極羞辱。基督始終順服天父要祂在十字架上所作的一切，以致「他被罵不還口；受害不說威嚇的話」（彼前二23）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對旁觀的人們來說，十字架似乎是基督澈底被擊垮的記號；然而，聖子被害乃是天父所命定（徒二23），結果帶來全面的反擊，而且有征服的實質意涵——基督的死和復活，是對敵人的終極誇勝，勝過上帝國和全人類的頭號對手：罪與死和黑暗國度。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">基督徒當效法耶穌：讓出競賽場域</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在十字架上，我們看到基督對暴力的回應：順從上帝的旨意（路廿二42），藉此獲得更大的勝利。祂忍受敵人的羞辱、攻擊，而不是報復——報復不是上帝對耶穌的計劃，同樣，報復的手段也不是上帝給基督徒的意念。在登山寶訓中，耶穌教導門徒除去一般人認定的報復行為：「有人打你的右臉，連左臉也轉過來由他打……只是我告訴你們，要愛你們的仇敵，為那逼迫你們的禱告」（太五38-44）。尼瑞認為，這表示耶穌的追隨者，只是單純地「讓出挑戰和反擊的榮辱競賽場域」<sup>5</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 214.）</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在客西馬尼園中，彼得為了保護耶穌，削掉大祭司僕人馬勒古的耳朵，耶穌卻立刻阻攔：「收刀入鞘吧！凡動刀的，必死在刀下。你想，我不能求我父現在為我差遣十二營多天使來嗎？」（太廿六52-53）耶穌沒有為自己辯護，因祂知道自己的榮耀直到永遠，並且當祂從死裡復活時，祂有永恆的榮耀確據。多年後，彼得寫信給外邦信徒，提及耶穌是所有基督徒的榜樣：「他被罵不還口，受害不說威嚇的話，只將自己交託那按公義審判人的主」（彼前二23）；「不以惡報惡，以辱罵還辱罵，倒要祝福」（彼前三9）。德西瓦詮釋這段經文：「基督徒面臨的挑戰是以慷慨大方態度，來應對帶著敵意的挑戰，基督徒夠勇敢，拒絕使用暴力，來回應暴力挑戰，屏棄形式上的挑戰。其實，這是因為他們有來自神取之不盡的善良與仁慈的資源。」<sup>6</sup><span style={cite}>（deSilva, "Turning Shame into Honor," in The Shame Factor, 175.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                對自稱是基督信徒的人來說，是否存在任何可以接受的競爭形式？的確如此——這是一種充滿愛與憐憫的榮耀：「愛弟兄，要彼此親熱；恭敬人，要彼此推讓」（羅十二10）<sup>7</sup><span style={cite}>（保羅在羅十二14-21重新闡述了耶穌所教導的「不報復倫理」；並叮嚀腓立比教會「凡事不可結黨，不可貪圖虛浮的榮耀」腓二3，ESV 2002版用「競爭」取代「私心」。）</span>。榮耀之愛、有限資源以及挑戰反擊，這三個榮辱社會特徵，可視為暴力等式的基本函數——正如第一部所述，「羞辱量表」中「攻擊自我」和「攻擊他人」兩種模式，凸顯暴力在榮辱社會中的位置：較和諧的社會多見「攻擊自我」（抑鬱、自傷）；較常訴諸暴力的社會，則多見「攻擊他人」（如榮耀殺戮）。
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
            <ul className="space-y-3">
              {[
                '「挑戰和反擊」是古代榮辱社會公開進行的四步驟「榮耀競賽」：宣告身分、質疑挑戰、反擊辯護、公認勝負，福音書中耶穌與法利賽人的多次公開交鋒，都完整呈現這個模式。',
                '馬太福音十二章安息日治病的故事，完整示範四步驟：耶穌宣告「人子是安息日的主」，法利賽人質疑控告，耶穌用提問、諷刺與神蹟三重反擊，最終眾人驚奇歸榮耀於祂——法利賽人因此徹底失了面子，遂謀劃除滅耶穌。',
                '耶穌一次又一次在公開的榮耀競賽中獲勝，卻正是這些勝利招致法利賽人的嫉恨，最終導致祂被釘十字架——這是全書反覆強調的悖論：贏得世上的榮耀競賽，卻換來終極的羞辱之死。',
                '十字架看似基督徹底的挫敗，實則是神命定、對罪與死亡黑暗國度的全面反擊與終極勝利，基督「被罵不還口」的順服，正是祂讓出世俗榮耀競賽場域、換取更大得勝的方式。',
                '耶穌教導門徒「有人打你的右臉，連左臉也轉過來」，並非懦弱，而是主動退出以牙還牙的榮辱競賽邏輯，這也是彼得後來教導教會「不以惡報惡」的神學根源。',
                '榮耀之愛、資源有限、挑戰反擊三種動力交織，正是榮辱社會暴力循環（無論是攻擊他人或攻擊自我）的基本成因；唯有效法基督「讓出競賽場域」，才能真正打破這個惡性循環。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">耶穌參與「挑戰和反擊」的競賽，卻教導門徒「讓出競賽場域」——這是否自相矛盾？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者的註腳特別澄清：耶穌參與這種「競賽」並非為信徒立下應當效法的日常行為範本，而是祂身為彌賽亞，必須挑戰當時扭曲真理的宗教體系，履行祂的生命使命，以致最終成就先知書中所寫的一切、走向十字架。門徒蒙召效法的，不是耶穌與法利賽人公開交鋒的方式，而是耶穌在十字架上「被罵不還口」、主動退出報復循環的樣式——兩者分屬耶穌獨特的救贖使命與門徒蒙召的日常倫理，並不矛盾。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「讓出競賽場域」的教導，如何應用在今日教會面對網路論戰、公眾批評時的回應方式？</h4>
              <p className="text-gray-700 leading-relaxed">
                社群媒體時代的「挑戰和反擊」比古代市集更加公開、即時，教會或基督徒領袖被質疑、被攻擊時，往往本能地想要「討回公道」、贏得這場輿論戰。但耶穌的榜樣提醒我們：真正的得勝，未必表現在公開辯論中「打贏」對方，而在於效法基督「以慷慨大方態度來應對帶著敵意的挑戰」，拒絕以暴制暴的邏輯，把最終的公義審判交託給神。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">榮耀之愛、資源有限、挑戰反擊三者如何共同構成「暴力等式」？這對理解今日世界的衝突（如网路霸凌、國際衝突）有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                當一個群體同時相信「榮耀值得不惜代價追求」（榮耀之愛）、「別人得到的，就是我失去的」（資源有限），又習慣用「以牙還牙」（挑戰反擊）處理衝突時，暴力幾乎是必然的結果。這個等式提醒我們，要真正化解衝突（無論是人際、社群或國際層級），不能只處理表面的行為，更需要從根本上鬆動這三個交織的世界觀假設。
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
              '你最近一次感到被冒犯、好想為自己辯護，甚至想以牙還牙——但因為深感自己在基督裡的榮耀，因此沒有以言語或動作反擊對方，是什麼時候？',
              '讀完馬太福音十二章安息日治病的故事後，你對耶穌回應挑戰的方式（提問、諷刺、神蹟三重反擊），有什麼新的體會？',
              '「贏得所有挑戰競賽，卻換來十字架的羞辱」——這個悖論，如何幫助你重新理解「屬世的勝利」與「屬神的得勝」之間的差異？',
              '你的團隊、教會或小組，是否曾出現「僕人式服事」以外的「榮耀競爭」氛圍？領導者展現僕人風範和謙卑態度，對此有何幫助？',
              '在教導福音書訊息時，你是否曾留意到耶穌在應對猶太宗教領袖挑戰時所展現的幽默與智慧？哪個例子讓你印象深刻？',
              '面對讓你憤怒、想要反擊的處境，你會如何操練「讓出競賽場域」，把最終的評斷交託給神？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用一週靈修時間，逐一記錄耶穌與宗教領袖的公開交鋒</h4>
              <p className="text-gray-700 mb-2">
                閱讀一本福音書，記下耶穌與猶太領袖之間每一次的公開談話，觀察每個場合中「挑戰和反擊」四步驟的呈現，體會耶穌的智慧與幽默。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「讓出競賽場域」</h4>
              <p className="text-gray-700 mb-2">
                這一週若遇到讓你想反擊、爭辯的處境，練習先停頓禱告，問自己：「我是想贏得這場競賽，還是想活出基督的樣式？」記下你的觀察與掙扎。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢在十字架上，讓出了世上的榮耀競賽場域，卻為我贏得了永恆的得勝。求祢幫助我，在被冒犯、被挑戰時，不落入以牙還牙的循環，而是效法祢的溫柔與智慧，把公義的審判交託給祢。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
