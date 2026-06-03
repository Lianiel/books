import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Adam() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* 人物標題卡 */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">上帝創造之最初的人</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Adam</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">亞當</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">上帝創造之最初的人</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              據說，我是上帝用塵土創造出來的……
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>創世記 2–4章</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              上帝仿照自己造出最初的人
            </h3>
            <p className="text-gray-700 leading-relaxed">
              上帝仿造自己的樣子創造了「最早的人類（男性）」。他在光著身子也不怕、氣候溫和、水源豐沛的伊甸園裡生活。上帝認為伊甸園裡只住著一個人不太好，又創造了鳥和走獸，並為那人取名亞當。亞當的生活很愜意，無所匱乏。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              但上帝覺得亞當缺少一個合適的伴侶，於是取其身體的一部分創造了另一個人，那就是夏娃（→夏娃，p.25）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              偷吃禁果，被逐出伊甸園
            </h3>
            <p className="text-gray-700 leading-relaxed">
              之後，亞當和夏娃因偷吃伊甸園裡的「禁果」而被逐出伊甸園，遷居到伊甸園以東的地方，受上帝懲罰，必須一輩子辛苦勞動以獲得溫飽（創世記 2–3章）。
            </p>
          </div>

          {/* Let's read 方塊 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Let's read</div>
              <h3 className="font-semibold text-red-800">一星期＝七天的規定出自舊約聖經</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              創世記的開頭記載：上帝用七天創造天地，一般認為這就是現在一星期七天制的根源。
            </p>
            <div className="overflow-x-auto">
              <table className="text-xs w-full border-collapse">
                <thead>
                  <tr>
                    {['第一天','第二天','第三天','第四天','第五天','第六天','第七天'].map(d => (
                      <th key={d} className="bg-red-100 border border-red-200 px-2 py-1 text-red-800 font-semibold">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">使天地有光，區分晝夜</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">創造天空，使上面的水下面的水分開</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">劃過陸地和海洋，使植物萌芽</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">創造日、月、星辰</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">創造水中的生物和天上的鳥</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">創造走獸、家禽和人</td>
                    <td className="border border-red-100 px-2 py-1 text-gray-700">安息日</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>亞當這名字在希伯來語中代表「人」、「人類」的意思。
          </div>
        </div>
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '亞當是上帝仿照自己的形象、用地上的塵土創造的第一個人，安置在伊甸園中，過著無憂無慮的生活。',
            '上帝為亞當造了夏娃作為伴侶，兩人是人類的始祖，所有人類都是他們的後代。',
            '亞當和夏娃因偷吃禁果違背上帝的命令，被逐出伊甸園，開始了辛苦勞動的生活——這是聖經「墮落」（Fall）神學的起點。',
            '創世記的七天創造敘事被認為是現代一週七天制的根源，亞當是在第六天被創造的。',
            '亞當這名字在希伯來語中意指「人」、「人類」，他代表的是整個人類的形象與命運。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「按上帝形象創造」的意涵</h4>
            <p className="text-gray-700 leading-relaxed">
              創世記1:26–27記載上帝「按著我們的形象，照著我們的樣式造人」（Imago Dei，拉丁文「上帝的形象」）。神學家們長期討論這「形象」究竟指什麼：理性、道德能力、創造力、關係性，還是對受造物的管理權？大多數神學傳統認為，這代表人類有與上帝建立關係的能力，這是其他受造物所沒有的尊嚴。墮落雖損壞了這形象，但基督徒相信這形象藉著基督可以被更新（歌羅西書3:10）。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">禁果與自由意志</h4>
            <p className="text-gray-700 leading-relaxed">
              上帝為何允許禁果的存在？這個問題觸及自由意志與愛的本質。神學家奧古斯丁指出：上帝不想要被迫服從的機器人，而想要能真正選擇愛祂的人。禁果的存在，正是亞當夏娃能真實選擇順服或悖逆的前提。沒有選擇的可能，就沒有真正的愛。這一段敘事也說明了罪的本質——不是偶然的失誤，而是有意識地把自己的判斷置於上帝的命令之上。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">亞當在新約的地位</h4>
            <p className="text-gray-700 leading-relaxed">
              使徒保羅在羅馬書5章將亞當與基督作對比：「罪是從一人入了世界，死又是從罪來的」，亞當的悖逆帶來了死亡；而基督是「末後的亞當」（哥林多前書15:45），帶來了復活與新生命。這「亞當—基督」的對比，是整個基督教救恩論的核心框架，說明了人為何需要救贖，以及救贖如何成就。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '「按上帝形象被造」對你的自我認識有什麼意義？這讓你如何看待自己的價值和尊嚴？',
            '亞當和夏娃在樂園中已經擁有一切，卻還是選擇違背上帝的命令。你認為人為什麼即使已有很多，還是容易被「禁止的果子」吸引？',
            '上帝呼喊亞當「你在哪裡？」時，亞當躲藏了。你有沒有因為犯了錯而想要「躲避上帝」的經驗？那感覺是什麼？',
            '亞當把責任推給夏娃，夏娃把責任推給蛇。你在生活中最容易以什麼方式逃避責任？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">記住你是按上帝形象被造的</h4>
            <p className="text-gray-700 text-sm mb-2">這不是驕傲，而是尊嚴的根基。每當你懷疑自己的價值時，回想這個真理。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>每天早晨用一句話肯定自己：「我是按上帝形象被造的，有內在的尊嚴。」</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>以同樣的眼光看待身邊每一個人，不論他們的社會地位或行為如何</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 1–2章', desc: '天地創造與亞當夏娃' },
                { ref: '創世記 3章', desc: '禁果事件與逐出伊甸園' },
                { ref: '羅馬書 5:12–21', desc: '亞當與基督的對比' },
                { ref: '哥林多前書 15:45–49', desc: '末後的亞當——基督' },
              ].map(item => (
                <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="font-semibold text-green-700">{item.ref}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 相關人物 */}
      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '夏娃', desc: '妻子' }, { name: '該隱', desc: '長男' }, { name: '亞伯', desc: '次男' }, { name: '塞特', desc: '三男' }].map(p => (
            <span key={p.name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
              <span className="font-semibold text-amber-700">{p.name}</span>
              <span className="mx-1 text-gray-300">·</span>{p.desc}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
