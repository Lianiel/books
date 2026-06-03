import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, Users } from 'lucide-react';

export default function Book23ShemJapheth() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">挪亞的長男和三男</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Shem · Japheth</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">閃、雅弗</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">挪亞的長男和三男</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我們和父親乘坐方舟，在大洪水中死裡逃生</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 9–10章</span>
          </div>
        </div>
      </div>

      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              敬重父親的兩兄弟
            </h3>
            <p className="text-gray-700 leading-relaxed">
              閃是挪亞（→挪亞，p.32）的長男，雅弗是三男。挪亞醉酒後赤身裸體睡覺，次男含（→含，p.35）看見後告訴了兩位兄弟。閃和雅弗卻背對著父親慢慢走近，為父親蓋上衣服、照顧父親，沒有直視父親的裸露，因而得到父親的祝福（創世記 9章）。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              洪水後各民族的祖先
            </h3>
            <p className="text-gray-700 leading-relaxed">
              閃是亞伯拉罕（→亞伯拉罕，p.42）的祖先，以閃為祖先的民族（閃族）分布在西亞到北非一帶，包括以色列人、阿拉伯人、亞述人等。「閃族語言」（Semitic languages，希伯來語、阿拉伯語等）即以他命名。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              雅弗是挪亞的三男，相傳是歐洲人的祖先。他的孩子們（歌篾、瑪各、瑪代等）各自成為不同地區民族的祖先，分散到地中海沿岸各地（創世記 10章）。
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>世界多數民族據說都是包括次男含在內的三兄弟之後代。
          </div>
        </div>
      </div>

      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '閃和雅弗在父親挪亞醉酒裸睡時，背過身去為父親蓋衣，因尊重父親而蒙祝福，與次男含形成對比。',
            '閃是亞伯拉罕乃至整個以色列民族的祖先，「閃族」（Semites）和「閃族語言」（Semitic）即以他命名。',
            '雅弗的後代相傳分散到歐洲和地中海一帶，三兄弟的後代合在一起代表了當時已知世界的主要民族。',
            '挪亞對閃的祝福：「閃的上帝耶和華是應當稱頌的」，暗示信仰的祝福將透過閃的血脈延續。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「含的詛咒」與種族主義的誤用</h4>
            <p className="text-gray-700 leading-relaxed">
              歷史上，某些人曾誤用「含的詛咒」（創9:25）來為非洲人的奴役辯護，聲稱非洲人作為含的後代應受詛咒。這是對聖經的嚴重誤讀：其一，詛咒的對象是含的兒子迦南，而非含本人，也不是所有非洲人；其二，閃和雅弗因尊重父親而得祝福，這是具體行為的後果，而非種族命運的宣告。聖經從未為任何形式的種族歧視提供根據。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '閃和雅弗選擇「保護父親的尊嚴」，而不是嘲笑他的失態。你有沒有過為家人或長輩的弱點「遮掩」而非傳揚的機會？',
            '含的行為是否真的那麼嚴重？你如何理解挪亞的反應？你認為「尊重長輩」在什麼程度上是重要的價值？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { ref: '創世記 9:18–27', desc: '挪亞的醉酒與三子的回應' },
              { ref: '創世記 10章', desc: '萬國之表：三子後代的分散' },
            ].map(item => (
              <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                <p className="font-semibold text-green-700">{item.ref}</p>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '挪亞', desc: '父親' }, { name: '含', desc: '兄弟' }, { name: '亞伯拉罕', desc: '閃的後代' }].map(p => (
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
