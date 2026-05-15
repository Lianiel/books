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
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">說方言代表一種對於神的真相的醒覺，並將這醒覺對焦和強化；因此，說方言成了一種自然的表達崇敬情緒的方法，而靈恩派信徒稱方言為他們「禱告的語言」是一點也不希奇的。說方言，雖然不是以一種概念性的語言形式出現，但作為發自心靈的聲音，在基督教裡，正如在其他領域一樣，他總是「說出」一些東西——他說出一個人有意識地投入並直接回應鄂圖（Rlldolph OttO）稱為「那聖潔的」或「那神聖不可測的」，也就是現今社會學家和人類學家一般稱為「那神聖的」。</p>
            <p className="text-gray-700 leading-relaxed mb-3">那些尋覓、尋索和運用方言的人通常視說方言的群體為屬靈上「特殊」的一群，並希望全然投入他整個團體經驗之中。</p>
            <p className="text-gray-700 leading-relaxed mb-3">但無論如何，以上一切觀點辯證出對於一些人來說，說方言是從神而來美好的恩賜，即如對於我們所有人來說，能清晰表達思想的語言能力是神給我們一個美好的恩賜。可是，既然說方言者視方言的作用主要是（縱非全然）為私人用途，也不宣稱他們知道自己所說的是什麼，而保羅所講述的方言是純粹為公開發言及要求把意思翻出來的，並且保羅也許認為講者總會對自己的話的含意有多少認識，我們不可能確定這兩種現象能夠達到複還論所要求的一致。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在我來看，有關翻方言這問題，似乎是最莫衷一是的。翻方言就是將所說方言的訊息內容（一如他們自己所聲稱的）宣佈出來。複還論引導我們將說方言及翻方言與哥林多教會的方言（charismata）等同。保羅給「翻」方言的用字是 diermeneuo（林前一二 30，一四 5、13、27），可以指到解釋任何不明白的事情（一如路二四 27 所載的）；這辭彙與語言連結起來很自然是指到把字句本身蘊含的意思翻譯出來（一如徒九 36 所載）。從保羅的話看來，他顯然認為哥林多信徒的方言是帶有可翻出來的意義的（—四 19-13），而今天的翻方言者對今天的方言亦有相同的假設，把他們對方言的解釋視為方言的實際翻譯。</p>
            <p className="text-gray-700 leading-relaxed mb-3">然而，他們的表現是令人因惑的。那些流暢、肯定而又自然流露出來的解釋，後來卻被證實是千篇一律、含糊不清和無所傳達的。其中造成了許多荒誕的錯誤。喬達（Kildahl）告訴我們非洲土話主禱文如何被翻為主再來的訊息。27 一位我曾教導過的衣索比亞牧師，參加一個說方言的聚會，他誤以為是一個非正式的多種語言讚美崇拜會，於是，他站起來用基茲話（ Ge’ez，譯者注：一種已廢的閃族語，今用於衣索比亞基督徒的禱文中。）背誦詩篇第二十三篇，這是他出生的科普替族（Coptic）崇拜時用的古老語言；他的背誦立刻被當眾翻譯出來。翌日，他憂愁困惑地告訴我：「全都翻錯了。」喬達也報導過一件事，同一段方言錄音經兩個不同的人翻譯，其中一個翻為「為一份新工作尋求引導」的禱告，另一個則翻為「為一次嚴重大病最近康復而獻上的感恩」。當告訴翻方言的人兩種解釋有出入時，「那翻譯者毫不遲疑，亦不自辯地說神給予一個翻譯者一種翻譯，又給予另一個翻譯者另一種翻譯。」</p>
            <p className="text-gray-700 leading-relaxed mb-3">28 那翻方言者的經驗是，「方言的解釋」是即時浮現腦海的，換句話說，聽見方言之後，那些即時深印腦海的思想就視為那段方言的解釋。他們宣稱神直接賜予翻譯的內容；就好像靈恩派的預言一樣，他們持相類似的宣稱，只要該預言是合乎聖經的話，他就可以成立，不能修改，因為他是無從驗證的。我們可以看出一個翻方言的人——尤其是一開始就滿腦袋儲存了許多聖經真理的人——如何能夠借著與講者、或講者的聲線語調、或聚會的氣氛共嗚感應而產生恰當並造就人的「解釋」。可是，至於這些解釋如何能夠直接表達所剛剛聽到的聲音的意義，以致實際上將一種不明白的言語翻譯為一種能明白的言語，那就難以理解了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我不會妄自憑幾句翻譯錯誤的例子作為基礎，去全盤否定所有方言的解釋，看他們為虛妄的，同時，我同意撒瑪連（Samarin）的意見，他認為說方言加上翻方言的宗教儀式所產生的團結友愛本身可以是有價值的。 29 但我想，因此就假設我們已重獲保羅所說的翻方言恩賜，卻是十分危險的。無他，事實的證據委實太不肯定了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">賀其馬提出當說方言帶來祝福的時候，祝福的源頭「並不是方言本身，而是說方言時候的心境，或者說„„在方言說出之先，一顆尋求更多被聖靈充滿的心。」 30 這個意見似乎比任何認為現時人所說的方言，在思想暫時停止活動的情況下，這方言本身能造就人的說法來得實在。同樣，翻方言也可以帶來祝福，是由於他傳達了聖經的激勵，而不一定像一些人的想法，認為這些必然是神所賜方言的神授解釋，就如當日在哥林多教會裡被翻出來的方言可能是神授的一樣。</p>
            <p className="text-gray-700 leading-relaxed mb-3">走筆至此，我們必需就醫治和說預言提出一些反問。</p>
            <p className="text-gray-700 leading-relaxed mb-3">靈恩派的醫治職事能否令人信服地與哥林多前書第十二章二十八及三十節描述的醫治恩賜等同呢？當然不可以。</p>
            <p className="text-gray-700 leading-relaxed mb-3">使徒時期教會醫治恩賜的典範只能夠是屬乎使徒擁有的醫治恩賜，而耶穌自己的醫治職事就是他們的典範。可是，耶穌和門徒是直接用他們的話（太八 5 一 13，九 6、7；約四 46 一 53；徒九 34）或者他們的撫摸（可一 41，五 25—34；徒二八 8）來醫治的。然後，病者立即得醫治（太八 13；可五 29；路六 10，一七 14；約五 9；徒三 7；有一次分兩階段進行醫治，每階段的效果是即時的，可七 32—35）。</p>
            <p className="text-gray-700 leading-relaxed mb-3">身體上的殘缺（例如跛子、瘸子），以及功能性、徵候的和心理引致身心上的疾病（徒三 2 一 10；路六</p>
            <p className="text-gray-700 leading-relaxed mb-3">8—10；約九），一概獲得醫治。有時候，他們叫死了多天的人復活（路七 11—15，八 49—55；約—一 1 一 44；徒九 36—41）。他們醫治一大群人（路四 40，七 21；太四 23、24；徒五 12—16，二八 19），並且沒有任何記載說他們嘗試醫治而結果失敗的（除卻有一次門徒忽略了禱告，要由耶穌接替他們進行醫治「可九 17—29」）。再者，他們醫治的結果是持久的；沒有任何跡象顯示得醫治者後來舊病復發。對於現今五旬節派及靈恩派醫者的職事，以及那些為病者禱告的人的職事，無論人如何說他們有神特別的呼召，他們當中沒有一人有上述如此驕人的成績。</p>
            <p className="text-gray-700 leading-relaxed mb-3">所以，我們不能像某些人有時候的想法一樣，假設現今靈恩派醫治的能源一定就是保羅在哥林多前書十二章二十八節所講述的。在使徒時代，醫治的恩賜比起現今靈恩派信徒看來擁有的醫治恩賜，在本質上是更超越的。我們頂多可以說，靈恩派醫者有時候並在某些方面可以表現得像新約時代有恩賜的醫者一樣，而每次這樣的場合都印證了神的觸摸仍然具有他自遠古以來的能力。可是，這並不等如說在這些人的職事裡，新約時期的醫治恩賜又重新出現。31</p>
            <p className="text-gray-700 leading-relaxed mb-3">「靈恩派的預言能否確實被視為新約表記恩賜的復興？」當然不可以。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">聖靈充滿的動詞時態：反覆充滿，非一次完成</h4>
              <p className="text-gray-700 leading-relaxed">希臘文「被聖靈充滿」（plerousthe）是現在式命令語態，強調持續、反覆的動作。與此對比，「聖靈內住」（oikein）是描述一個固定的狀態。這個語法區別反映了重要的神學真理：聖靈在信徒生命中的「同在」是一次性、永久的，但聖靈對信徒生命的「影響力和掌控」則需要信徒持續地開放和順服。這解釋了為什麼保羅在以弗所書5:18說「要被聖靈充滿」（命令語態），而不是「你已被聖靈充滿」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈生活的誤解：超自然主義與自然主義的兩極</h4>
              <p className="text-gray-700 leading-relaxed">對聖靈生活有兩種常見的誤解：(1)超自然主義的誤解——認為真正的聖靈生活必然伴隨戲劇性的超自然現象，如異象、神蹟、方言等；沒有這些現象就表示沒有真正的聖靈工作。(2)自然主義的誤解——認為聖靈的工作完全可以用心理或社會因素解釋，否認任何超自然的維度。聖經的立場是：聖靈既可以透過平凡的方式工作（聖經的感動、信徒的勸勉、環境的安排），也有時透過特別的方式工作，兩者都是真實的聖靈工作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">辨別聖靈與辨別邪靈：約翰的測試</h4>
              <p className="text-gray-700 leading-relaxed">約翰一書4:1-3給出辨別聖靈的關鍵測試：「凡靈認耶穌基督是成了肉身來的，就是出於神的。」真正的聖靈工作必然高舉和見證基督。任何靈裡的感動，若把人的注意力從基督移開，指向說話者本身、某種特殊經歷或組織，都值得謹慎檢驗。辨別靈的能力本身也是聖靈所賜的恩賜（林前12:10），需要屬靈的成熟和聖經的知識。</p>
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
              <p className="text-gray-700">你對「聖靈充滿」的理解是什麼？你有沒有把它理解為一次性的特殊經歷，而非每天需要更新的關係？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在解釋自己的屬靈經歷時，你有沒有不自覺地傾向「超自然主義」（凡事求超自然現象）或「自然主義」（否認聖靈的特別工作）的一端？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何在日常生活中辨別一個感動是「出於聖靈」還是「出於自己的情緒或軟弱」？你有哪些個人的辨別準則？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅的「肉中刺」（林後12章）表明，即使屬靈最成熟的人也有持續的軟弱和挑戰。這對你面對自己的軟弱有什麼安慰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「按聖靈而行」的生活（加5:25）在你的日常決策中是什麼樣子的？你有沒有可以分享的具體例子？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 每日被聖靈充滿的操練</h4>
              <p className="text-gray-700">每天早晨，有意識地「向聖靈開放自己」：(1)認罪——承認昨天有哪些地方自我行事而非靠聖靈；(2)降服——把今天的計劃、對話、決定交在聖靈手中；(3)邀請——求聖靈掌管你今天的每個時刻。這不是儀式，而是一種生活態度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 屬靈日記：辨別聖靈的足跡</h4>
              <p className="text-gray-700">本週每天記錄一件你相信是「聖靈工作」的事（可能是突然的憐憫心、對某節聖經的深刻感動、或在挑戰中意外的平安）。週末回顧：聖靈在你生命中的工作，是否多過你平時注意到的？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚖️ 辨別靈的實踐框架</h4>
              <p className="text-gray-700">當你有一個強烈的屬靈感動或感覺「神在告訴我什麼」時，用這個四步驟檢驗：(1)這感動是否與聖經一致？(2)這是否高舉基督而非我自己？(3)這感動的果效是愛和造就，還是驕傲和分裂？(4)屬靈成熟的弟兄姊妹怎麼看？四項都一致，才有更大的把握。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗓️ 季度屬靈成長評估</h4>
              <p className="text-gray-700">每三個月，安靜地問自己：「我的聖靈生活在哪些方面有真實的成長？哪些方面有退步或停滯？」不要用戲劇性的超自然經歷作為衡量標準，而是用加拉太書5:22-23的聖靈果子作為標準。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
