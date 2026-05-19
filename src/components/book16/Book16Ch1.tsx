import React from 'react';
import { Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
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
          <h3 className="font-bold text-gray-900 text-lg">人原是行在一條絕路上</h3>
          <p className="text-gray-700 leading-relaxed">
            人生乃是行在一條絕路上。在未認識基督之前，人時常活在絕望中，隨時發生的某件事都可能是壓垮人的最後一根稻草，使其陷入崩潰。人生每一次瀕臨崩潰，都讓我們感到害怕，不知道即使今天過了這關，將來再遇到類似情況時，是否還能挨過去。
          </p>
          <p className="text-gray-700 leading-relaxed">
            我們時常在無意識中尋找出路：或是追求事業成功、兒女成功，或是尋求國家復興。然而這些方式終究無法真正滿足心靈深處的需要。孩童在無法得到所求時的歇斯底里，正是我們每個人心靈深處那種「不知道怎麼辦」的縮影。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">心靈尋找回家的路</h3>
          <p className="text-gray-700 leading-relaxed">
            作者描述一位與他同住的老太太，在晚年頭腦不清醒後，每天最念念不忘的事就是「回家」。她會拉著家裡每一扇門，失望地說：「這門是通向回家的路呀，現在怎麼不是了呢？」無論如何解釋這就是她生活了幾十年的家，也無濟於事。
          </p>
          <p className="text-gray-700 leading-relaxed">
            後來作者才明白：老太太在頭腦清醒時，以為自己需要的是兒子；但直到頭腦不那麼清醒的時候，才給自己的心靈一個機會，顯露出想要回到那真正的永恆之家。靈魂需要出口，正在這尋求回家的渴望中表現出來。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">心靈需要透氣口</h3>
          <p className="text-gray-700 leading-relaxed">
            一位無神論的朋友進入房間後，第一件事就是打開窗戶，然後費力地打開門上的小窗，嘆道：「太悶了！」這個動作讓作者想到：心靈也需要透氣口。加爾文把人的心思比喻成一個迷宮——特別在人被血氣激動的時候，我們不知道自己在說什麼，卻以為自己最有道理。
          </p>
          <p className="text-gray-700 leading-relaxed">
            在心靈還沒有找到出口時，生活中遇到的每樣事物都可能成為虛幻的對象：既可以是撒氣的物件，也可以是崇拜與依靠的物件。近代哲學家高喊「回到事情本身」，但這只有在認識心靈、甚至在心靈找到出口後才可能真正實現。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">出路只在心靈的層面</h3>
          <p className="text-gray-700 leading-relaxed">
            在心靈層面上，「出路」意味著人只有在歸信基督後，才能認識到：心靈的透氣口不是靠自己能夠找到，只能在上帝的兒子所成就的恩典中得到。苦難與死亡依然難以避免，只是他代替了我們來承擔。
          </p>
          <p className="text-gray-700 leading-relaxed">
            我們本來想找一個幫助我們成功的神明，沒想到他卻藉著讓我們的心靈蘇醒，為我們找到穿越苦難與死亡的那條出路。人生的安慰不是來自我們的獨生子，而是來自上帝的那位獨生子——他不單為我們打通了回天家的道路，同時差來了保惠師住在我們裡面，成為我們內心得安慰的活水源頭。
          </p>
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
            <h4 className="font-semibold text-gray-800 mb-2">加爾文的「迷宮」比喻</h4>
            <p className="text-gray-700 leading-relaxed">
              加爾文用「迷宮」來描述人的心思，這個比喻特別深刻。當人被血氣激動時，我們一方面看不清自己真實的狀況，另一方面卻以為自己最有道理。這種自欺正是人心靈需要被更新的根本原因。只有上帝的光照，才能在迷宮中為我們指出方向。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">哲學的「回到事情本身」與基督信仰</h4>
            <p className="text-gray-700 leading-relaxed">
              現象學強調「回到事情本身」，讓事情成為它本來的樣子，不被先入之見遮蔽。但孫毅指出，這種洞見在靈修的意義上更為深刻：人的心靈若未被更新，就會把其他人和事物都拉入自己的迷宮，使之成為滿足自我的工具。基督信仰提供的不只是一種哲學方法，而是心靈的真正更新。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">失智老人的神學意義</h4>
            <p className="text-gray-700 leading-relaxed">
              作者觀察到一個深刻的現象：頭腦清醒時，老太太以理性掩蓋了心靈的真實需要；失去理性的掩護後，反而顯露了靈魂對「真正的家」的渴望。這提示我們：人的理性有時反而會成為心靈需要的遮蔽物。靈修的目標之一，正是讓心靈真實的渴望浮現，並在基督裡得到回應。
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
            '你有沒有在某個生命時刻，感到自己「走在一條絕路上」？那時你的心靈是如何尋找出口的？',
            '什麼人或什麼事，曾經是你「把人生的希望寄託」其上的？那種依靠最終帶給你什麼感受？',
            '加爾文說人心是一個迷宮。你有否經歷過「以為自己最有道理，後來才發現自己根本不清楚在說什麼」的時刻？',
            '作者說，老太太在頭腦最不清醒的時候，才顯露了對「真正的家」的渴望。這個觀察如何幫助你理解自己內心深處的需要？',
            '你如何理解「心靈的透氣口」在你個人生命中的意思？你的心靈現在有沒有得到足夠的「呼吸空間」？',
            '上帝的獨生子如何成為你生命中真正的安慰與出路？這對你來說是一個理論，還是一個切身的經歷？',
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
            <p className="text-gray-700 mb-2">這週，找一個安靜的地方，花十分鐘問自己：「我現在的生命中，有哪些事情讓我感到窒悶或找不到出口？」把它們寫下來，然後把這份清單帶到上帝面前禱告。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 讀《詩篇》42-43篇</h4>
            <p className="text-gray-700 mb-2">這兩篇詩篇描述了詩人靈魂渴慕上帝的深切感受。讀完後，寫下一句最能描述你現在靈魂狀態的句子。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">💜 識別你的「迷宮時刻」</h4>
            <p className="text-gray-700 mb-2">這週留意自己有沒有「以為最有道理卻後來發現自己錯了」的時刻。當那個時刻過後，試著安靜下來，問：「在這件事上，我的心靈需要什麼？」</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我承認我的心靈常常在自己的迷宮裡打轉，找不到出路。謝謝你不是一個幫助我成功的神明，而是成為我真正的家。求你差來的保惠師繼續住在我裡面，成為我心靈的透氣口，讓我在你面前可以真實地呼吸。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
