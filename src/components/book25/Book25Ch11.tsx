import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch11() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">新的成效評估表</h2>
        <p className="text-gray-500 mt-1">如何衡量教會的真正果效？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">我們在量度什麼？</h3>
              <p className="text-gray-700 leading-relaxed">教會通常量度的是容易量化的事物：出席人數、奉獻金額、受洗人數、建堂進度。但這些數字真的反映了教會的果效嗎？一間教會可能每週有一萬人出席，但若這些人的靈命沒有成長，他們的生命沒有被改變，他們沒有在帶領其他人成為門徒——這個教會真的成功嗎？</p>
              <p className="text-gray-700 leading-relaxed mt-3">作者提出一個新的思維框架：我們需要一套不同的評估表，一套能真實反映門徒訓練果效的指標。這不是要放棄數字，而是要計算對的事情。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">舊的評估指標 vs. 新的評估指標</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-gray-600 mb-2">❌ 傳統的評估指標</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 週末崇拜出席人數</li>
                    <li>• 每月奉獻金額</li>
                    <li>• 新信主的人數（決志禱告次數）</li>
                    <li>• 建堂規模或設備品質</li>
                    <li>• 節目和事工的數量</li>
                    <li>• 受洗人數</li>
                  </ul>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <h4 className="font-bold text-teal-700 mb-2">✅ 新的評估指標</h4>
                  <ul className="space-y-2 text-teal-800 text-sm">
                    <li>• 有多少人被連結在關係性的門徒帶領環境中</li>
                    <li>• 有多少人的靈命正在從一個階段移向下一個階段</li>
                    <li>• 有多少人開始帶領其他人成為門徒</li>
                    <li>• 有多少小組正在健康地成長和倍增</li>
                    <li>• 有多少人在生命的四個領域中都有成長</li>
                    <li>• 有多少「屬靈父母」正在培育「屬靈孩子」</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">五個轉化的整合評估</h3>
              <p className="text-gray-700 leading-relaxed">本書所介紹的五個轉化，每一個都有對應的評估問題：</p>
              <div className="space-y-3 mt-3">
                {[
                  { shift: '轉化一：從基督徒到門徒', q: '我們教會會眾中，真正跟隨耶穌、被耶穌改變、委身於耶穌使命的人有多少？' },
                  { shift: '轉化二：從學習到裝備', q: '我們的牧師和領袖們，有多少在刻意裝備他人服事、帶領門徒，而不只是自己服事？' },
                  { shift: '轉化三：從聚會到造就', q: '我們的小組有多少是真正在造就門徒，而不只是提供社交聚會？' },
                  { shift: '轉化四：從計畫到帶人', q: '我們的事工和課程，有多少有負責任的帶領者在持續地關懷和帶領參與者？' },
                  { shift: '轉化五：從增長到倍增', q: '我們有多少小組正在健康地倍增？我們的門徒帶領是在自我複製嗎？' },
                ].map((s, i) => (
                  <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="font-bold text-blue-800 mb-1">{s.shift}</p>
                    <p className="text-gray-700">評估問題：{s.q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">第五個轉化：從增長到倍增</h3>
              <p className="text-gray-700 leading-relaxed">最後一個轉化，是從量的增長（出席人數越來越多）轉化為質的倍增（門徒帶出門徒）。耶穌選擇了十二個人，花最多的時間在他們身上，讓他們被改變、被裝備，然後差派他們出去，讓這十二個人帶出更多的門徒。這個模式是可以自我複製的，而且隨著時間，能夠觸及比任何單一明星牧師的佈道會所能觸及的更多人。</p>
              <p className="text-gray-700 leading-relaxed mt-3">倍增的關鍵是有人承擔責任去培育下一代的帶領者。這需要時間、耐心和刻意的投資。但當一個教會開始看到門徒帶出門徒的倍增效果時，其影響力是指數性的。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '傳統的教會評估指標（出席人數、奉獻金額、決志人數）無法真正反映門徒訓練的果效，需要新的評估框架。',
                '新的評估指標應該衡量：多少人在關係性的環境中被帶領，多少人的靈命正在成長，多少人在帶領其他人成為門徒。',
                '五個轉化各有對應的評估問題，定期使用這些問題，可以幫助教會領袖看清哪個轉化還需要更多努力。',
                '第五個轉化是從增長到倍增——從出席人數的增加，到門徒帶出門徒的自我複製效果。',
                '倍增是耶穌所選擇的方法：少量的高質量門徒，比大量的表面信仰者更能觸及世界。',
                '衡量你所推崇的，會眾自然跟隨；若教會開始評估和慶祝門徒訓練的果效，文化就會隨之改變。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼數量的增長可能是假象？</h4>
              <p className="text-gray-700 leading-relaxed">一間教會可能每週有數千人出席，但若這些人沒有真實地跟隨耶穌，沒有被祂改變，沒有在帶領他人，這個數字只是一個誤導性的成功假象。反之，一間很小的教會，若每個成員都是真實的門徒，並且刻意地在帶領他人成為門徒，這間教會對神國度的貢獻可能遠超過那間大教會。耶穌選擇投資在十二個人身上，而不是努力吸引更多的觀眾，這告訴我們什麼？</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">倍增的指數性效果</h4>
              <p className="text-gray-700 leading-relaxed">如果一個人每年帶出一個成熟的門徒（並且這個門徒也帶出另一個），十年後會有多少人？答案是1024人——從一個人開始。反之，一個大型佈道會可能一次帶出一千人的決志，但若沒有後續的門徒帶領，十年後可能只剩下少數人真正成為成熟的門徒。這個對比說明了為什麼耶穌選擇了倍增而非增長作為祂的主要策略。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">如何改變衡量文化</h4>
              <p className="text-gray-700 leading-relaxed">改變一個教會的衡量文化需要時間和刻意的努力。作者建議從以下幾個地方開始：（1）在領導會議中加入門徒訓練果效的討論；（2）在崇拜或教會通訊中分享門徒帶領的真實故事；（3）公開慶祝和表揚那些帶領門徒的人；（4）讓財務資源的分配反映門徒訓練的優先序。當領袖推崇什麼，會眾就會跟隨去重視什麼。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '你的教會目前最常討論和慶祝的「成功」是什麼？這個對成功的定義符合本章的新評估指標嗎？',
              '若你的教會今天開始用新的評估指標，你認為會有哪些讓人驚訝的發現？哪些地方做得比預期好？哪些比預期差？',
              '你個人在五個轉化中，覺得自己的生命最符合哪個？還需要在哪個轉化上更多地成長？',
              '倍增的概念讓你有什麼感受？你覺得這是現實可行的，還是只是一個美好的理論？',
              '你的教會有沒有計畫和資源支持門徒訓練的倍增？若沒有，你認為需要做什麼改變？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立你的個人評估表</h4>
              <p className="text-gray-700 mb-2">每月末用以下問題評估你自己的門徒訓練果效：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這個月我在靈命上有成長嗎？具體在哪裡？</li>
                <li>這個月我有刻意地投資在誰的生命中？</li>
                <li>我帶領的人這個月有什麼成長？</li>
                <li>我的小組這個月向前進了嗎？有沒有人準備好可以帶領自己的小組？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 用新指標評估你的教會</h4>
              <p className="text-gray-700">嘗試回答本章的五個轉化評估問題，用1-10分評估你的教會目前在每個轉化上的進度。若願意，把這個評估和你的小組長或牧師分享，一起討論改進的方向。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 慶祝門徒帶領的果效</h4>
              <p className="text-gray-700">在你的小組或家庭中，分享一個你見證的門徒帶出門徒的真實故事（可以是本書中的，也可以是你自己知道的）。讓這種慶祝成為你們文化的一部分。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你幫助我和我的教會重新定義什麼是成功。讓我們不再只追求表面的數字和形式，而是真心追求真正的果效——那些被改變的生命、那些走向成熟的門徒、那些被帶出去帶領他人的人。求你讓我的生命成為一個倍增的起點，從今天開始，帶出能帶領人的門徒。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
