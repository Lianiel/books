import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

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
                對教會而言，僅僅在理論上肯定聖經的可靠性是不夠的。上帝的聖言是教會與撒但及其國度爭戰的最強有力的武器。路德寫道：「上帝的大衛投向撒但的歌利亞的所有石頭，都取自聖經的溪流。」
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
                教會也需要復興。《使徒行傳》3章19節告訴我們，復興是「從主面前來到的安舒的日子」。真正的復興有九個標誌：聖靈主權的作為、禱告的傾注、從教會內部開始的運動、合乎聖經的講道、悔改、信心、以基督為中心、宣講福音、愛心。
              </p>
              <p className="text-gray-700 leading-relaxed">
                沒有改革的復興促進的是「沒有光的熱」；沒有復興的改革可能最終變得非常醜陋，甚至殘酷無情。教會需要「改革的復興」和「復興的改革」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心四：在基督面前過合一的生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人在飛機上坐在一位禱告的男人旁邊。交談後才知道，那人正在向撒但禱告，祈求「撒但在這個星期能夠成功地使北美的至少三十位牧師與他們的教會決裂」。「那個人禱告時看起來非常真誠，比我禱告的大多數時候都更迫切。」——撒但喜歡分裂，喜歡撕碎基督的身體。
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
