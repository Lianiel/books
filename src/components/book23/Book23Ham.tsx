import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Ham() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">挪亞的次男</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Ham</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">含</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">挪亞的次男</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我因撞見酒醉後一絲不掛的父親，使得兒子被詛咒……</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 9章</span>
          </div>
        </div>
      </div>

      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              挪亞的次男，埃及人的祖先
            </h3>
            <p className="text-gray-700 leading-relaxed">
              挪亞（→挪亞，p.32）的次男。傳說他是埃及人的祖先，住在非洲北部一帶，從埃及、摩洛哥一直到衣索比亞的民族，被認為是他的後代。含與兄弟一同進過大洪水，獲得了新的生命。
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              父親醉酒事件與迦南的詛咒
            </h3>
            <p className="text-gray-700 leading-relaxed">
              含與兄弟一同進過大洪水，只因他某日看見父親挪亞醉酒赤身裸體睡覺的樣子後向兄弟告密，就被父親詛咒，子孫迦南將淪為閃（→閃雅弗，p.34）和雅弗後代的奴隸（創世記 9章）。
            </p>
          </div>

          {/* Episode 04 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">episode 04</span>
              <h3 className="font-semibold text-red-800">因對待酒醉父親的態度而走上不同命運的兄弟</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              洪水過後的某日，挪亞爛醉如泥，赤裸著身子睡覺。含撞見後密告兄（閃，→閃雅弗，p.34）弟（雅弗，→閃雅弗，p.34）。兩人背對著父親慢慢走近，為父親蓋上衣服、照顧父親，因而得到父親的祝福。另一方面，父親則詛咒看見他赤身裸體的含，子孫將淪為閃和雅弗後代的奴隸，當作懲罰（創世記 9章）。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>含的孩子寧錄（→寧錄，p.39）以人類第一位勇者著稱。
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
            '含是挪亞三兄弟中的次男，傳統上被認為是非洲（埃及等）諸民族的祖先。',
            '他在父親醉酒裸睡後向兄弟告密，被父親詛咒其子迦南為兄弟後代的僕役。',
            '含的行為與兄弟形成鮮明對比：同樣面對父親的軟弱，閃和雅弗選擇保護尊嚴，含選擇傳揚醜事。',
            '這個故事提醒我們：如何回應他人（特別是長輩）的弱點，深刻影響我們自己和後代的命運。',
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
        <div className="p-5 bg-white">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「言語的力量」：告密與守護</h4>
            <p className="text-gray-700 leading-relaxed">
              含的行為看似只是「說了出去」，但這個「說出去」帶來了長遠的後果。閃和雅弗選擇了「沉默守護」——不多說，只是行動上為父親遮蓋。這個對比說明：言語不只是資訊的傳遞，也是態度和品格的表達。在現代，社群媒體時代的「截圖傳播」和「當面保護」的選擇，正是相同的道德抉擇。箴言11:13說：「傳舌的洩漏密事，心中誠實的遮隱此事。」
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
            '你是否有過知道某人的「秘密或軟弱」而需要決定是否說出去的時刻？你如何做決定的？',
            '含的詛咒落在兒子迦南身上，而非含本人。你認為父母的行為如何影響後代，這公平嗎？',
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
              { ref: '創世記 9:20–27', desc: '挪亞的醉酒與含的行為' },
              { ref: '箴言 11:13', desc: '傳舌者與守密者' },
              { ref: '箴言 17:9', desc: '遮掩過失的人' },
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
          {[{ name: '挪亞', desc: '父親' }, { name: '閃、雅弗', desc: '兄弟' }, { name: '古實', desc: '兒子' }, { name: '迦南', desc: '被詛咒的兒子' }, { name: '寧錄', desc: '孫子' }].map(p => (
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
