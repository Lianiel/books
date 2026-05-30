import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book18Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為教會成員的挑戰</h2>
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
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心一：惟獨靠著聖經來生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「惟獨聖經」是宗教改革時期的戰鬥口號。改教者教導說，聖經是完美的、完全的、清楚的、權威的、無謬的，全部由聖靈默示。要在教會中打敗撒但，我們應當根據聖經改革教會，說明教會逐漸趨於完美。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對教會而言，僅僅在理論上肯定聖經的可靠性、無謬性和權威性是不夠的。教會不能任憑聖職人員歪曲聖經教導，否定聖經中的神跡奇事，或贊同不合乎聖經的生活方式。上帝的聖言是教會與撒但及其國度爭戰的最強有力的武器。路德寫道：「上帝的大衛投向撒但的歌利亞的所有石頭，都取自聖經的溪流。」教會成員必須真誠而謙卑地表現出，儘管別的書可以教導人甚至改變人，但惟有一本書可以徹底改變人，使之擁有基督的形像。我們只有作為「基督的活信」，才能盼望在當今時代為聖經贏得這場戰爭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當今時代的教會應當在講道、禱告、敬拜和生活方面更多地以聖經為中心。亨利·史密斯說：「我們應當時刻把上帝的聖道當作標準擺在我們面前，只相信聖經所教導的，只愛慕聖經所吩咐的，只憎恨聖經所禁止的，只去做聖經所命令的。」弗拉維爾說：「聖經教導了我們卓越的生活方式，最高貴的受苦方式，最舒適的死亡方式。」
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                聖經是我們穿衣的鏡子（雅1）、行事的準則（加6:16）、潔淨的水（詩119:9）、饑餓時的飲食（伯23:12）、爭戰的寶劍（弗6:17）、解決疑難的謀士（詩119:24）、致富的產業（詩119:111）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心二：靠著在基督裡的救贖性信心辛勤勞作</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在基督裡面的信心是教會侍奉的支柱。上帝的子民是樂觀主義者，因為他們的救主已經得勝——他是猶大支派的獅子，是出生在伯利恒馬槽中的大能的上帝，他從現在到末日一直在做工，正在得勝，不斷得勝，必要得勝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德在睡覺前可以說：「主耶穌基督，現在我需要休息，因此我把自己肩上教會的重擔交托給禰。我將在平安中安息，因為我知道禰是教會的保守者。早上，我再肩負起自己的重擔。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會是漁船的港灣，而不是遊艇的俱樂部；教會是罪人的醫院，而不是聖徒的博物館。像所有的建築工地一樣，教會這個工地也有一堆堆的磚瓦和廢料。我們不應當苛責那些沒有達到我們期望的人，而是應當穿上靴子和工作服，在工地上忙碌地工作。
              </p>
              <p className="text-gray-700 leading-relaxed">
                弗拉維爾說：「上帝誠然住在他們中間。在教會死亡之前，不要急於埋葬她。」教會也許可能動搖，但她必定會繼續自己在歷史中的征程，直到走向最終的勝利。「陰間的權柄必不能勝過上帝的教會」（太16:18）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心三：為教會的改革和復興而活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                十六世紀的改教者在四個主要的前沿陣地作戰：<span className="font-semibold">（1）敬拜改革</span>——回歸簡樸、合乎聖經的敬拜；<span className="font-semibold">（2）教義改革</span>——回歸宗教改革的五個「惟獨」和加爾文主義五要義；<span className="font-semibold">（3）教會治理和勸懲</span>——加爾文稱教會勸懲為真教會的第三個標誌；<span className="font-semibold">（4）以純正教義為根基的敬虔</span>——神學認識與生活敬虔密不可分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                萬斯·哈夫納說，撒但對那些不以聖經為中心的教會：「他不與這些教會爭戰，而是正在與他們為伍。他撒下雜草的種子比拔出麥子所帶來的危害更大，他利用贗品比公然反對所造成的破壞更多。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會也需要復興。《使徒行傳》3章19節告訴我們，復興是「從主面前來到的安舒的日子」。真正的復興並非完全不同於教會的日常經歷，差別在於程度——聖靈以非凡的方式澆灌，許許多多人獲得真正的重生，信徒對罪的確信更加深刻，更加感覺到上帝的同在，更加愛上帝和他人。真正的復興有以下九個標誌：
              </p>
              <div className="space-y-2 ml-4 mb-3">
                {[
                  '聖靈主權的作為——復興的存在、深度、時間和次數由上帝決定（徒2:47）',
                  '禱告的不尋常的傾注（徒1:14；2:1）',
                  '從教會內部開始的運動——通常伴隨著已重生之人的再覺醒和蒙光照（徒2:2-4）',
                  '合乎聖經的講道——彼得五旬節講道共24節，12節引自詩篇和先知書',
                  '悔改——對靈魂誠實，呼召悔改，伴隨著對真理的重新發現（徒2:38）',
                  '信心——信心的能力與真理和悔改的能力聯合在一起',
                  '以基督為中心——復興總是以經歷性的方式以基督為中心',
                  '宣講福音——當教會復興時，她在各處傳播福音（徒13:48-49）',
                  '愛心——復興促進對上帝榮耀和他人靈魂的大愛'
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">({i + 1})</span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                沒有改革的復興促進的是「沒有光的熱」和不可靠的熱心；沒有復興的改革可能最終變得非常醜陋，甚至殘酷無情。教會需要「改革的復興」和「復興的改革」，同時禱告祈求改革，也禱告祈求復興。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心四：在基督面前過合一的生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一天，有個教區居民給我打電話，她非常沮喪。她說她前幾天乘飛機時，旁邊坐著個正在禱告的男人。當他禱告結束時，她熱情地問：「這樣看來你是個基督徒？」「不是，」他迅速答道。「我以為你剛才在禱告，」她堅持說。「我剛才是在禱告，」他說。過了幾分鐘，她問道：「先生，我可以問一下你剛才是在向誰禱告嗎？」他頓了一下，然後說：「我剛才是在向撒但禱告。」「你究竟為什麼向撒但禱告？」她驚奇地問。他回答說：「我剛才禱告願撒但在這個星期能夠成功地使北美的至少三十位牧師與他們的教會決裂。」我的那位教區居民驚得目瞪口呆。「那個人禱告時看起來非常真誠，」她對我說，「他似乎比我禱告的大多數時候都更迫切。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但喜歡分裂，喜歡撕碎基督的身體。為了抵擋撒但，教會必須努力實現在基督裡的合一，挫敗撒但試圖分裂教會的陰謀。正如撒母耳·魯瑟福所警告的：「因為基督奧秘的身體上有瑕疵而在上面製造裂縫或破洞，是一種可怕的罪。」這樣的不和冒犯了聖父、冒犯了為打破敵意之牆而獻上生命的聖子、也冒犯了住在信徒裡面來幫助信徒生活在合一中的聖靈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《尼西亞信經》宣告「一個教會」——建立在一塊磐石、一位彌賽亞、一份信仰告白之上。《威斯敏斯德信條》說教會的合一仰賴耶穌基督：「無形的大公教會……由過去、現在和未來在教會的元首基督之下所召集的合而為一的全體選民構成。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，正確理解教會合一也能幫助我們避免「以犧牲真理宣告為代價的合一」。喬治·哈奇森說：「分裂勝過贊同邪惡。」魯瑟福說：「與魔鬼爭戰勝過與魔鬼和好。」——有些因捍衛真理而產生的分裂是必要的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                馬太·亨利的建議：「在關於敬虔的大事上要一心一意，但是，當某些意見不能達成一致時，要在愛心的情感上保持合一。」主耶穌在《約翰福音》17章為教會的合一禱告，以便世人可以相信上帝差派了他的獨生子。真正的教會合一與世界的紛爭形成鮮明的對比，象徵著存在于聖父和聖子之間合一的世界。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">1</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">唯獨聖經——教會爭戰的終極武器與最高權威：</span>路德在沃木斯（Worms）宣告「除非聖經或清楚的理性使我信服，否則我不能撤回」，代表改教最核心的立場。撒但攻擊教會最常見的方式是用傳統、理性、經歷、感動來取代或凌駕聖經權威。路德的比喻：「聖經是流出清泉活水的溪流，人的傳統是遠離源頭的死水池塘」。教會抵擋撒但的第一步是確立聖經在所有生命和教義問題上的最高裁判權。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">對基督的信心——教會是「醫院」而非「博物館」：</span>教會不是陳列已得救好基督徒的博物館，而是收納仍在爭戰的罪人的醫院——人人都是帶著傷痕來到基督面前。撒但利用教會的完美主義文化（只接待光鮮的信徒、對軟弱者冷漠）拆毀肢體的聯結。對基督的集體信心意味著教會以共同的脆弱為恥轉化為共同依靠基督為榮，每個成員的掙扎都是整體呼求大醫師的邀請。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">改革與復興必須並行——九個復興記號：</span>改革（Reform）是結構和教義的更新；復興（Revival）是聖靈的澆灌與生命的復甦。兩者缺一則不完全——有改革無復興是空洞的正統主義；有復興無改革是感性主義。九個真正復興的記號：（1）對罪深刻的悔罪；（2）對基督的愛加深；（3）對聖經話語的渴慕；（4）禱告的增加；（5）福音的廣傳；（6）肢體關係的更新；（7）對神話語的順服；（8）社會道德的改變；（9）持續的果子（不只是短暫的情感）。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">在基督裡的合一——飛機上的撒但崇拜者故事的教訓：</span>一位撒但崇拜者在飛機上對貝克博士說：「撒但的跟隨者比基督徒更忠誠，更彼此相愛，更有紀律」——這句話是嚴肅的挑戰。教會的合一不是表面和諧，而是基於共同承認基督為主、共同服在聖經權威下的深度連結。撒但藉著門派之爭、個人主義、種族文化隔閡分裂教會；合一的守護需要主動謙遜、互相承擔、以他人益處高過自己利益（腓2:3-4）。</p>
          </div>
        </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「沒有聖靈做工，改革只是形式」的歷史教訓</h4>
              <p className="text-gray-700 leading-relaxed">
                本章關於「改革需要復興，復興也需要改革」的論點，有著豐富的歷史印證。十六世紀的宗教改革之所以不只是一場神學革命，而是改變了整個歐洲文化的運動，正是因為它既有嚴謹的神學改革（如加爾文的《基督徒敬虔學》），又有聖靈大量澆灌帶來的屬靈更新。反之，十九世紀一些復興運動（如查理·芬尼的情感主義復興主義）雖然帶來大量「歸正」，但因為缺乏教義根基，大部分果子是短暫的。改革是骨架，復興是血肉——教會需要二者。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">教會勸懲——被遺忘的「真教會第三標誌」</h4>
              <p className="text-gray-700 leading-relaxed">
                改革宗傳統將純正的講道、正確施行聖禮、以及教會勸懲列為真教會的三個標誌。然而今天，「教會勸懲」幾乎從大多數教會中消失了。原因多種多樣：文化對「批判他人」的反感、教會增長主義（批評人會減少會眾人數）、對法律訴訟的恐懼。但加爾文的洞見提醒我們：如果勸懲這把鑰匙因為長期不用而生銹，講道和聖禮的功效也會大打折扣。一個不敢愛心勸懲成員的教會，實際上是在告訴人們：你的罪沒有那麼嚴重，你不需要悔改。這不是仁慈，這是撒但所喜愛的「溫柔」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「必要的分裂」與「不必要的分裂」——如何辨別</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提出「有些分裂是必要的」，但也警告「因非基要教義固守己見所導致的紛爭」傷害合一。如何辨別哪種分裂是「必要的」？改革宗傳統提出「基要-次要教義」的區分：關於上帝、基督、救恩的核心教義（基要）不可妥協；關於禮拜儀式、教會治理形式等的次要教義，不應成為分裂的理由。魯瑟福說：「因為基督奧秘的身體上有瑕疵而在上面製造裂縫或破洞，是一種可怕的罪。」在非基要問題上堅持己見，造成教會分裂，正是撒但在向彼得禱告者旁邊建造分堂的方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「惟獨聖靈」——聖道的改變力量超過任何技巧</h4>
              <p className="text-gray-700 leading-relaxed">
                本章強調，教會無論用什麼花招來吸引人，都必須用同樣的東西留住他們。若非聖道和聖靈，任何吸引策略都只是在教會裡聚集了一群對上帝沒有真正渴慕的人。路德的「上帝的大衛投向撒但的歌利亞的所有石頭，都取自聖經的溪流」提醒我們：教會最強大的武器不是節目、娛樂或社群媒體，而是忠心地宣講上帝的話語。如果教會只有聰明的策略但沒有聖道，撒但可以從容地建造他的分堂；如果教會忠心地宣講聖道，「撒但不敢與聖道爭戰」（路德）。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你的教會在多大程度上真正以聖經為中心？不只是在教義上宣告，而是在講道、決策、成員生活方式上都以聖經為標準？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">路德把教會的重擔交托給主耶穌，然後在平安中安息——你是否也能在面對教會的各種問題時，保持這種信靠的安息？是什麼讓你最難以把教會「交托給主」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「教會是罪人的醫院，而不是聖徒的博物館」——你有沒有因為看到教會中他人的不完美而感到失望或遠離？這種態度如何改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">宗教改革的四個前沿陣地（敬拜、教義、勸懲、敬虔），你認為你所在的教會在哪個方面最薄弱？你能做什麼來幫助改善這個狀況？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">撒但正在向你的教會的「分裂」禱告。你所在教會目前有哪些可能導致分裂的緊張關係？你如何做一個促進合一的人？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你有沒有曾經渴望教會復興？你認為你所在的教會目前最需要「改革」還是「復興」，或者兩者都需要？為什麼？</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 深化個人對聖經的愛慕</h4>
              <p className="text-gray-700 mb-2">「惟獨靠著聖經生活」從個人開始：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>問自己：我用在聖經上的時間，多於還是少於我用在其他媒體上的時間？</li>
                <li>選擇一個系統性讀經計畫，不只快速瀏覽，而是每天真正與上帝在聖言中相遇</li>
                <li>找一本聖經讀書帶或屬靈書籍，幫助你更深地認識聖經的某個部分</li>
                <li>在每次讀經後禱告：「主，你在這段話裡告訴了我什麼？你希望我如何改變？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 成為教會合一的促進者</h4>
              <p className="text-gray-700 mb-2">本週在教會中主動做一些促進合一的事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動與你不太熟悉或與你觀點不同的弟兄姊妹交流，尋求相互理解</li>
                <li>如果你知道有教會成員之間的紛爭，禱告求智慧，看上帝是否呼召你做和解的橋樑</li>
                <li>在教會禱告會或小組中，特別為教會的合一和牧者的帶領代禱</li>
                <li>避免在教會「非基要問題」上固守己見、製造分裂</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為教會的改革和復興禱告</h4>
              <p className="text-gray-700 mb-2">根據本章的九個復興標誌，建立為教會代禱的習慣：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天為你的教會代禱，特別為以下幾方面：忠心的聖道宣講、真實的悔改與歸正、成員真正的屬靈更新</li>
                <li>詢問你的牧者：「我可以為你和教會做什麼禱告？」</li>
                <li>當連續幾個禮拜沒有明顯的歸正時，學懷特菲爾德的心志：在禱告中憂慮地問「主啊，哪裡不對？」</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                主啊，你愛你的教會，你用自己的寶血買贖了她。感謝你應許陰間的權柄不能勝過你的教會。求你使我成為教會中促進合一的力量，而不是製造分裂的工具。幫助我愛你的話語，活出你的話語，讓教會成為你聖潔同在的見證。求你在你的教會中澆灌復興，也使我的生命成為這復興的一部分。奉你聖名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
