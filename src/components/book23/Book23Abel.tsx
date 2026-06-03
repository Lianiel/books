import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Abel() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">亞當和夏娃的次男</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Abel</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">亞伯</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">亞當和夏娃的次男</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我是世界上第一個謀殺被害者</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 4章</span>
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
              敬虔的牧羊人，獻上最美的祭物
            </h3>
            <p className="text-gray-700 leading-relaxed">
              亞當（→亞當，p.24）和夏娃（→夏娃，p.25）的次男，該隱（→該隱，p.26）的弟弟，是個敬虔上帝的牧羊人。有一年收穫季，兄弟都向上帝獻上祭品。亞伯從自己飼養的仔羊中挑選一隻最肥美的頭生羊羔獻給上帝，上帝只接受他的祭品，因而引來該隱嫉妒，使亞伯遭到殺害（創世記 4章）。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              亞伯被認為是人類最初一位對上帝懷有堅定、虔敬信仰的人，而且沒有任何榜樣，是亞伯自己培養出來的。
            </p>
          </div>

          {/* Episode 02 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">episode 02</span>
              <h3 className="font-semibold text-red-800">亞伯信仰之堅和「偏愛」</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              上帝為何只收下亞伯獻祭的羔羊呢？相對於該隱如同往常一樣以收成的作物獻祭，亞伯則是從仔羊中精挑細選出最肥美的一隻獻祭。一般認為上帝是感偏亞伯信仰之堅定才「偏愛」他。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              上帝在驅逐該隱時，可能是感到自己有責任吧？故於該隱身上留下印記，以免他遭別人殺害。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>亞伯未曾娶妻，所以沒有後代。
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
            '亞伯是世界第一個謀殺案的受害者，被哥哥該隱出於嫉妒殺害，成為聖經中第一位無辜犧牲的人物。',
            '他的祭物被上帝悅納，關鍵不在於祭物的種類，而在於他「精挑最肥美的頭生羊羔」所反映的誠摯信仰態度。',
            '他是人類歷史上「沒有任何榜樣」卻自發培養出堅定信仰的第一人，展現了信仰可以在任何環境中萌生。',
            '亞伯雖然短命且沒有後代，但新約希伯來書11章將他列為信心英雄之首，他的血「說話」直到如今。',
            '耶穌在馬太福音23章提到「從義人亞伯的血，到巴拉加的兒子撒迦利亞的血」，亞伯代表所有為義而受苦的人。',
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
            <h4 className="font-semibold text-gray-800 mb-2">亞伯：信心英雄的榜樣</h4>
            <p className="text-gray-700 leading-relaxed">
              希伯來書11:4說：「亞伯因著信，獻祭與神，比該隱所獻的更美，因此他得了稱義的見證。他雖然死了，卻因這信，仍舊說話。」亞伯是新約「信心雲彩」章節（希伯來書11章）第一位被提及的人。他的信心在沒有任何聖經文字、先例或信仰社群的支持下自發萌生，是最純粹形式的信心。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">亞伯的血與基督的血</h4>
            <p className="text-gray-700 leading-relaxed">
              希伯來書12:24說，基督所流的血「比亞伯的血說更美的話」。亞伯的血從地裡呼喊伸冤（創4:10），代表人類罪惡的控訴；基督的血則說出赦免和和解的話。亞伯作為無辜受害者，被視為基督受難的預表（type）——兩者都是無辜的，都是被嫉妒所殺（亞伯被哥哥；基督被祭司因嫉妒交出），但死亡的結果卻帶來了更大的救恩。
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
            '亞伯沒有任何信仰榜樣，卻自發培養出堅定的信心。你的信仰是如何開始的？有沒有哪個關鍵時刻讓你主動選擇相信？',
            '亞伯做了「對的事」，卻付出了生命的代價。你有沒有因為堅持正確而遭受損失的經驗？那帶給你什麼感受？',
            '「他雖然死了，卻仍舊說話」——你認為一個人在離世後，可以留下什麼樣的「聲音」繼續影響他人？',
            '亞伯的血「從地裡哀告上帝」。你認為上帝對無辜受苦的人有什麼樣的回應？',
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
            <h4 className="font-semibold text-green-700 mb-2">獻上最好的，不只是剩下的</h4>
            <p className="text-gray-700 text-sm mb-2">亞伯「挑選最肥美的頭生羔羊」獻祭，提醒我們給上帝的應該是我們的首選，而不是剩餘。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>思考你的時間、金錢、精力的分配——你給上帝的是「首先」還是「剩餘」？</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>嘗試一週內把靈修/禱告安排在一天最清醒、最有精力的時段，而非只是睡前疲憊的幾分鐘</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 4:1–16', desc: '該隱與亞伯的祭物' },
                { ref: '希伯來書 11:4', desc: '亞伯：信心英雄之首' },
                { ref: '希伯來書 12:24', desc: '亞伯的血與基督的血' },
                { ref: '馬太福音 23:35', desc: '耶穌提到義人亞伯' },
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

      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '亞當', desc: '父親' }, { name: '夏娃', desc: '母親' }, { name: '該隱', desc: '殺他的哥哥' }, { name: '塞特', desc: '弟弟' }].map(p => (
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
