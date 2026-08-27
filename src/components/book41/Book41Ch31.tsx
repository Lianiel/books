import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Highlighter, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch31() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const colors = [
    { color: '黃色', dot: 'bg-yellow-400', desc: '榮耀地位逆轉的章節——可能是單一經節，也可能是較長的經文，甚至是長篇故事。' },
    { color: '橘色', dot: 'bg-orange-400', desc: '與「君王」「國度」相關的經文，包括人的國度和神的國度——凡「君王」「國度」「陛下」「王冠」「（權）杖」「統治」「王位（寶座）」這類詞彙，都涉及榮耀與君王掌權。' },
    { color: '紅色', dot: 'bg-red-500', desc: '與救恩相關的經文——「拯救」「贖回」「救贖」「贖罪」「獻祭」「寶血」等詞語。' },
    { color: '藍色', dot: 'bg-blue-500', desc: '與神的榮耀或聖潔有關的經文。' },
    { color: '綠色', dot: 'bg-green-500', desc: '神要我們向世界萬民宣教的經文——「地上」「萬國」「萬民」「外邦人」「世界」等相關詞彙。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">附錄一</h1>
        <h2 className="text-xl font-semibold text-gray-700">如何透過閱讀聖經察覺榮辱感</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Highlighter className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">作者的親身讀經法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者在附錄一中，分享自己實際操練的讀經方法：閱讀聖經過程中，稍作留意，不難發現榮/辱動力俯拾皆是。作者在讀經時，會找出榮/辱相關的詞彙，有時用黑筆劃線或把這類詞彙圈起來，有時也用彩色筆依照不同主題分類標記。作者笑稱：用這個方式閱讀，他意外發現，「黃色註記的地方真多！」——邊閱讀邊作記號，看見不同的註記顏色互相交錯，帶給他許多省思：榮/羞動力遍布聖經當中，一目了然；這個現象，符合神的普世救贖目標——透過耶穌基督施行救恩，祝福萬民。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">五色標記系統</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                作者具體的標記步驟如下，讀者可以自行準備五種顏色的筆，依照這套系統邊讀經邊標記：
              </p>
              <div className="space-y-3">
                {colors.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-teal-50/50 rounded-lg border border-teal-100">
                    <span className={`w-4 h-4 rounded-full ${c.dot} flex-shrink-0 mt-1`}></span>
                    <div>
                      <span className="font-semibold text-teal-800">{c.color}</span>
                      <p className="text-gray-700 leading-relaxed mt-1">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                作者建議，這套方法最好從一卷書卷開始練習，本書多次建議讀者從路加福音入手（見第四部4-3「融入榮辱感於實踐中」）。透過持續、規律地標記，讀者會逐漸培養出對聖經榮辱動力的敏銳度，這種敏銳度不是一天就能養成的，而是需要長期委身、反覆操練的讀經功夫——正如學習任何一種語言，需要時間累積。
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
                '作者提供了一套簡單易學、可親自操練的五色標記讀經法，把全書抽象的「榮辱動力」理論，轉化為讀者可以立刻上手實踐的具體工具。',
                '五種顏色分別對應五個主題：黃色（榮耀地位逆轉）、橘色（君王國度）、紅色（救恩救贖）、藍色（神的榮耀聖潔）、綠色（普世宣教）——這五個主題正是貫穿全書的核心線索。',
                '作者親身實踐後的驚訝發現——「黃色註記的地方真多」——印證了第二部2-10章的核心論點：榮耀地位逆轉是聖經中反覆出現的主題，遠比一般讀者所意識到的更加普遍。',
                '這套讀經法的價值在於：它不需要神學訓練或學術背景，任何願意拿起筆、認真讀經的信徒都可以操練，這正呼應了第四部「融入榮辱感於實踐中」強調的「讀經、讀經、再讀經」的紀律。',
                '作者建議從路加福音開始練習——這與全書多次提及路加福音作為榮辱動力範例（浪子回頭、耶穌潔淨痲瘋病人等）的頻率相呼應，路加福音可視為操練這套讀經法的最佳入門書卷。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼作者把這套讀經法放在附錄，而不是正文中詳細介紹？</h4>
              <p className="text-gray-700 leading-relaxed">
                全書正文的主軸是神學論證與跨文化宣教應用，而附錄一提供的是一套「工具」——讓讀者讀完理論後，能立刻付諸行動的具體方法。把方法論放在附錄，一方面保持正文論證的流暢性，另一方面也讓這套讀經法可以獨立被查閱、影印、與人分享，不需要重新閱讀整本書的論證脈絡，這是一種貼心的讀者服務設計。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">五色標記系統中，「橘色」（君王國度）與「藍色」（神的榮耀聖潔）看似有重疊之處，如何區分這兩種標記？</h4>
              <p className="text-gray-700 leading-relaxed">
                雖然君王的統治本身也彰顯神的榮耀，但這兩種標記聚焦的焦點不同：橘色聚焦於「統治、掌權」這個具體的政治性意象（君王、寶座、權杖等具體詞彙），而藍色聚焦於「神本質上的聖潔屬性」（榮耀、聖潔本身作為神的屬性）。實務操練時，讀者不必過度糾結分類是否完全精確，重點在於透過標記的過程，培養對這些主題交織出現的敏銳度，而非追求分類的絕對精確。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">這套讀經法可以如何應用在小組查經或主日學的教學設計中？</h4>
              <p className="text-gray-700 leading-relaxed">
                小組長或主日學老師可以印製一份路加福音的經文，讓每位組員各自用五色筆標記後，再一起比較彼此的標記結果、討論差異——不同人可能會注意到不同的線索，這種比較討論本身就能深化整個小組對經文的理解。也可以設計成階段性的挑戰：第一週只找黃色（榮耀逆轉）、第二週加入橘色，逐步累積，讓學習者不會一開始就感到資訊量過大。
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
              '你願意嘗試用這套五色標記法，實際讀一卷聖經書卷嗎？你會選擇從哪一卷開始？',
              '在你過去的讀經經驗中，是否也曾意外發現某個主題「原來出現得這麼頻繁」？那是什麼樣的發現？',
              '五種顏色中，你認為哪一種主題（榮耀逆轉、君王國度、救恩、神的聖潔、普世宣教）是你過去讀經時最容易忽略的？',
              '如果你要帶領一個查經小組操練這套讀經法，你會如何設計第一堂課的內容？',
              '通讀完整本書後，回頭看這套簡單的標記法，你認為它如何幫助你把抽象的神學理論，轉化為具體的個人操練？',
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
              <h4 className="font-semibold text-green-700 mb-2">🖍️ 準備五色筆，開始標記路加福音</h4>
              <p className="text-gray-700 mb-2">
                準備黃、橘、紅、藍、綠五種顏色的筆或螢光筆，本週開始，用這套系統標記路加福音的前五章，記錄你的發現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 與人分享你的標記發現</h4>
              <p className="text-gray-700 mb-2">
                完成一段時間的標記練習後，找一位屬靈夥伴或小組，分享你標記過程中最驚訝、最有啟發的發現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢的話語如此豐富，處處可見祢榮耀與救贖的心意。求祢幫助我，願意花時間、用心操練這套讀經方法，讓我不只是頭腦上明白榮辱動力的理論，更能親自在祢的話語中，發現祢話語的豐富與美好。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
