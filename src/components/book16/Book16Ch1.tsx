import React from 'react';
import { Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">導言</h1>
        <h2 className="text-xl font-semibold text-gray-700">心靈需要出口</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <Heart className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <p className="text-gray-700 leading-relaxed bg-violet-50 rounded-lg p-4 border-l-4 border-violet-400">
            人生乃是行在一條絕路上。在未認識基督之前，人時常活在絕望中，隨時發生的某件事都可能是壓垮人的最後一根稻草，使其陷入崩潰。人生每一次瀕臨崩潰，都讓我們感到害怕，不知道即使今天過了這關，將來再遇到類似情況時，是否還能挨過去。
          </p>

          <h3 className="font-bold text-gray-900 text-lg">人原是行在一條絕路上</h3>
          <p className="text-gray-700 leading-relaxed">
            多年前回家鄉過春節，作者探望親戚，席間唯一兩歲多的男孩歡歡成了一家人的歡樂來源。就在大人還沒有吃完飯時，歡歡突然要求拿椅子擺小火車，被拒後便哭鬧起來，越發地歇斯底里，「好像是他的世界已經到了盡頭一樣」，口中只喃喃地說「我再也不理你們了」，卻無法為自己找到得安慰的透氣口。
          </p>
          <p className="text-gray-700 leading-relaxed">
            這讓人感歎：日常一件似乎很小的事，都可能完全改變整個生活處境。即使是在孩童時期，當一個小孩陷入絕望時，不要說是他自己，就算是他母親的柔聲細語，也很難為他帶來心靈的安慰，找到一條出路。人根本不清楚自己為什麼就陷入這種狀態。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">通常尋求出路的方式</h3>
          <p className="text-gray-700 leading-relaxed">
            當人開始有一定能力解決自己的需求時，可能通過享受當下的樂趣來尋找人生的安慰與出路。有人靠事業成功、兒女成功或追求國家復興來尋求出路——這或許是我們能找到的最為道德甚至神聖的方式了。但無論哪種方式，都反映出人心靈的虛空和對出路的渴求。
          </p>
          <p className="text-gray-700 leading-relaxed">
            作者描述與他同住的一對老夫婦。老太太一生最大的安慰就是她的獨生兒子。她站在窗邊盼望兒子回來的那個眼神，讓人多少年後都難以忘記。然而在老爺子突然過世後，老太太的記憶力迅速衰退，不久就顯出了老年癡呆的症狀。她說得最多的一句話就是「她要回家」；做得最多的一個動作就是拉開家裡的門，然後每次都十分失望地說：「這門是通向回家的路呀，現在怎麼不是了呢？」
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">心靈需要透氣口</h3>
          <p className="text-gray-700 leading-relaxed">
            有一天，一位無神論的朋友進到作者辦公室，第一件事就是打開面向草坪的窗戶，然後費力地打開門上的小窗。「太悶了！」他說。當他踮起腳尖打開小窗時，作者腦海突然冒出這句話：<strong>心靈需要透氣口。</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            加爾文把人的心思比喻成一個迷宮——特別在人被血氣激動的時候，我們不知道自己在說什麼、事情怎麼就成了這樣，卻同時以為自己是最有道理的。在心靈還沒有找到出口時，生活中遇到的每樣事物都可能成為虛幻的對象：既可以是撒氣的物件，也可以是崇拜與依靠的物件。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">出路只在心靈的層面</h3>
          <p className="text-gray-700 leading-relaxed">
            多少年來，近代哲學家們高喊：「回到事情本身」——讓事情成為事情本身，並以積極的態度去面對。但我們越來越深地認識到，這只能是在認識心靈、在心靈找到出口後才可能真正實現。
          </p>
          <p className="text-gray-700 leading-relaxed">
            在心靈層面上，「出路」意味著人只有在歸信基督後，才能認識到：心靈的透氣口不是靠自己能夠找到，只能在上帝的兒子成就的恩典中得到。苦難與死亡依然難以避免，只是他代替了我們來承擔。我們本來想找一個幫助我們成功的神明，沒想到他卻借著讓我們的心靈蘇醒，為我們找到穿越苦難與死亡的那條出路。
          </p>
          <div className="bg-violet-50 rounded-lg p-4">
            <p className="text-gray-700 leading-relaxed">
              人生的安慰與寄託不是來自我們的獨生子，而是來自上帝的那位獨生子。他不單為我們打通了回天家的道路，為我們預備了將來要去的地方，同時差來了保惠師住在我們裡面，成為我們內心得安慰的活水源頭，以及與天家相連接的透氣口；讓我們的靈魂得以呼吸，不再因各種血氣中的情緒，特別是多年來在歷史塵埃中的積怨，窒息而死。
            </p>
          </div>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">加爾文的「迷宮」比喻與人的自欺</h4>
            <p className="text-gray-700 leading-relaxed">
              加爾文用「迷宮」來描述人的心思，這個比喻特別深刻。當人被血氣激動時，我們不知道自己在說什麼，卻以為自己最有道理——這種自欺是人心靈需要被更新的根本原因。書中後來（第四章）也提到巴斯卡（Pascal）對自欺的洞察：「人在為自己謀益處時，還會以為自己在討上帝喜悅。」這種自欺可以讓一個人的生活分裂成多個層面，在這個處境下行事是一種樣子，在另一個處境下卻是另一種樣子。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">尼布林論人的自我肯定與逃離自我</h4>
            <p className="text-gray-700 leading-relaxed">
              書中引用神學家尼布林（Reinhold Niebuhr）的洞察：在純粹本能的基礎上，人的性衝動同時兼有「自我肯定」與「逃離自我」兩種功用。這一分析揭示了人行為背後深層的心靈動力——無論是通過感官享樂、職業成就還是關係依附，人都在尋求心靈的出口。但這些出路都是暫時的、虛幻的，只有在基督裡心靈的更新，才是真正的出路。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">老太太的故事：失去理性後顯露的心靈真相</h4>
            <p className="text-gray-700 leading-relaxed">
              作者觀察到一個深刻的現象：老太太頭腦清醒時，以理性（寄望於兒子）掩蓋了心靈的真實需要；失去理性的掩護後，反而顯露了靈魂對「真正的家」的渴望。這提示我們：人的理性有時反而會成為心靈真實需要的遮蔽物。靈修的目標之一，正是讓心靈真實的渴望浮現，並在基督裡得到回應。作者後來才明白，老太太在生命終點尋求回家，其實是靈魂在臨近終點時，顯露出對那真正永恆之家的渴望。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">書的架構：靈程三階的意涵</h4>
            <p className="text-gray-700 leading-relaxed">
              「拾級靈程三階」描述了靈修操練者可能經歷的三個階段：內室（一階）、日常生活（二階）及終末（三階）。這種劃分跟古代靈修傳統中的三階段論有相似之處，更接近加爾文所講的基督徒生活三要素：否定自己、背負十架、默想永生。三個階段在靈修操練中並非前後界限明確，而是多少會有疊合。導言正是整本書的起點：只有先認識到心靈需要出口，才會有動力踏上這條靈修的旅程。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '你有沒有在某個生命時刻，感到自己「走在一條絕路上」？那時你的心靈是如何尋找出口的？結果如何？',
            '你曾經把哪個人或哪件事當作人生最大的安慰和盼望所在？當那個依靠受到挑戰時，你的心靈有什麼感受？',
            '加爾文說人心是一個迷宮。你有否經歷過「以為自己最有道理，後來才發現自己根本不清楚在說什麼」的時刻？那次經歷讓你學到什麼？',
            '作者說老太太在頭腦最不清醒的時候，才顯露了對「真正的家」的渴望。你認為在你清醒的理性思考之下，你的心靈深處真正渴望的是什麼？',
            '你如何理解「心靈的透氣口」在你個人生命中的意思？當你感到「悶」的時候，你通常會用什麼方式尋求出口？',
            '上帝的獨生子如何成為你生命中真正的安慰與出路？這對你來說是一個理論，還是一個切身的經歷？請具體說說。',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🪟 開一扇心靈的窗</h4>
            <p className="text-gray-700 mb-2">這週，找一個安靜的地方，花十分鐘問自己：「我現在的生命中，有哪些事情讓我感到窒悶或找不到出口？」把它們寫下來，然後把這份清單帶到上帝面前禱告，告訴他你的心靈需要透氣口。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 讀《詩篇》42-43篇</h4>
            <p className="text-gray-700 mb-2">這兩篇詩篇描述了詩人靈魂渴慕上帝的深切感受——「我的心渴想上帝，就是永生上帝；我幾時得朝見上帝呢？」讀完後，寫下一句最能描述你現在靈魂狀態的句子，然後帶著這句話向上帝禱告。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">💜 識別你的「迷宮時刻」</h4>
            <p className="text-gray-700 mb-2">這週留意自己有沒有「以為最有道理卻後來發現自己錯了」的時刻。當那個時刻過後，試著安靜下來，問：「在這件事上，我的心靈實際的狀態是什麼？我的心靈在尋找什麼出口？」</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的心靈清單</h4>
            <p className="text-gray-700 mb-2">寫下你目前最大的三個「寄望所在」——你最依靠什麼人、什麼事、什麼成就來讓自己的心靈得到安慰？然後誠實地問自己：如果這些都失去了，你的心靈還有根基嗎？</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我承認我的心靈常常在自己的迷宮裡打轉，找不到出路。我也承認我常常把對你的渴望，轉嫁到其他人事物上，以為那是我人生的出口。謝謝你不是一個幫助我成功的神明，而是親自成為了我真正的家。求你差來的保惠師繼續住在我裡面，成為我心靈的透氣口，讓我在你面前可以真實地呼吸，找到穿越苦難與死亡的那條出路。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
