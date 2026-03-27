import React from 'react';
import { Map, Heart, AlertCircle, Lightbulb } from 'lucide-react';

export default function Chapter5() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6 rounded-r-lg">
            <p className="text-rose-900 font-medium m-0">悲傷是擴張靈魂的途徑。逃避痛苦，就是逃避生命的深度。<span className="text-rose-500 text-sm ml-2">(p.139)</span></p>
          </div>
          <div className="flex items-center mb-4 text-rose-700">
            <Map className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">約伯：面對失落的典範</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>約伯就是他那個時代的比爾．蓋茲。聖經說他擁有七萬隻羊、五萬隻駱駝、五百對牛和五百頭驢。他也是個敬虔的人，忠心與神同行，以神為樂，也全心順服。<span className="text-slate-400 text-sm ml-1">(p.143)</span></p>
            <p>忽然，風雲變色，短短不到一個上午的時間，這位全球首富便頓失所有，連十個兒女都在可怕的天災中喪命。更令人不可思議的是，遭遇這麼大的打擊，約伯還是沒有犯罪埋怨神。<span className="text-slate-400 text-sm ml-1">(p.143-144)</span></p>
            <p>然而約伯沒有否認痛苦，他選擇進入混亂的「靈魂暗夜」。他對神大聲怒吼，瘋狂且任性地禱告，毫不掩飾心裡的感覺。有長達三十五章的篇幅是在記錄他向神抗議。他沒有迴避這些不幸帶來的痛苦，反而直接面對。<span className="text-slate-400 text-sm ml-1">(p.151)</span></p>
            <p>約伯痛苦的時間可能長達數個月，甚至數年，沒有人知道。我們只知道他誠實面對神、面對自己，選擇進入混亂的靈魂暗夜。他這個決定幫助了許許多多的人，包括今日的我們。<span className="text-slate-400 text-sm ml-1">(p.154)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <AlertCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">逃避痛苦的常見方式</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>在我們的文化中，成癮已經變成暫時忘卻痛苦的最常見方式。我們把許多自我保護的手段帶著長大，相對地也阻礙了我們在靈性和情感上的成長。以下是一些常見的逃避方式：<span className="text-slate-400 text-sm ml-1">(p.149)</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                { title: '拒絕相信', desc: '心理和口頭上都拒絕承認某些痛苦的事實，選擇遺忘。' },
                { title: '刻意淡化', desc: '承認問題存在，但似乎不以為意。' },
                { title: '怨天尤人', desc: '不認為自己有錯，把責任都推給別人。' },
                { title: '自責', desc: '把問題歸咎於自己，讓罪惡感取代真實的哀傷。' },
                { title: '合理化', desc: '找藉口和託辭將問題合理化。' },
                { title: '訴諸於理智', desc: '透過分析、理論和龐統的言論迴避個人的覺醒和不舒服的感覺。' },
                { title: '分散注意力', desc: '改變話題或利用幽默的方式迴避有威脅性的主題。' },
                { title: '忙碌', desc: '讓自己永遠忙碌，沒有時間感受痛苦。' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-rose-700 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-slate-600 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">悲傷是聖經的傳統</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>在詩篇，有三分之二的篇幅是哀歌，內容都是在向神抱怨。在創世記，神說祂後悔創造人類（創六6）。大衛在掃羅王和他的好友約拿單去世之後寫歌哀悼，並下令軍隊要向以色列唱哀歌（撒下一17-27）。舊約有一卷書的名字就叫耶利米哀歌。<span className="text-slate-400 text-sm ml-1">(p.151)</span></p>
            <p>耶穌曾經為拉撒路哭泣，為耶路撒冷冷落淚（約十一35；路十三34）。我們都是按著神的形像所造的，為什麼我們會覺得傷心難過是不對的呢？<span className="text-slate-400 text-sm ml-1">(p.151)</span></p>
            <p>信主後，我所受到的教導都是：「生氣就是犯罪。」為了要效法耶穌，我把所有惱怒、生氣、憤恨、嫌惡的感覺都埋在心裡。畢竟這些都是罪，不是嗎？然而這種做法只會讓靈魂更加枯竭。<span className="text-slate-400 text-sm ml-1">(p.151-152)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">接受有限：我們都不是神</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>我們每個人都有各種有限。學習接受這些有限，是情感成熟的重要一步：<span className="text-slate-400 text-sm ml-1">(p.157)</span></p>
            <ul className="space-y-2 list-none pl-0">
              {[
                '你的家庭背景（無論雙親或單親，都帶著家庭給予的限制長大）',
                '你的婚姻狀態（無論已婚或單身，都會受到限制）',
                '你的智能（沒有人同時是所有領域的天才）',
                '你的才能與恩賜（耶穌擁有所有的恩賜，我們只有幾項）',
                '你的物質財富（就算是億萬富翁，資源還是有限）',
                '你的資質（神給每個人不同的性格、氣質）',
                '你的時間（每個人都只有一輩子，不可能什麼都參與）',
                '你的工作與人際關係（工作始終是我們的「荊棘和蒺藜」）',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1 flex-shrink-0">•</span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-rose-50 border-l-4 border-rose-300 p-4 rounded-r-lg mt-6">
              <p className="text-rose-800 font-medium m-0">
                悲傷不是軟弱的表現，而是靈魂誠實面對現實的勇氣。當我們願意哀傷，就是在邀請神進入我們生命最真實、最脆弱的角落，讓祂的恩典在我們的破碎中彰顯。<span className="text-rose-500 text-sm ml-1">(p.163)</span>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：悲傷是靈性操練】</h2>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>現代教會文化往往鼓勵信徒「常常喜樂」，卻很少教導如何「誠實哀傷」。然而聖經中充滿了哀歌——詩篇三分之二是抱怨詩，耶利米哀歌整卷書都在哭泣，連耶穌也在拉撒路墓前流淚。學習悲傷，是一種靈性操練。它要求我們：</p>
            <ul className="space-y-2 list-none pl-0">
              {[
                '誠實面對失落，不否認、不淡化',
                '允許自己感受哀傷，不急著「靠主得勝」',
                '向神傾倒心中的苦水，如同詩人一樣坦誠',
                '在混沌中等候，相信神在黑暗中仍然掌權',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✦</span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-amber-700 font-medium mt-2">📚 延伸參考：盧雲《負傷的治療者》</p>
          </div>
        </section>


        {/* 延伸探討 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：悲傷是靈性操練】</h2>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>現代教會文化往往鼓勵信徒「常常喜樂」，卻很少教導如何「誠實哀傷」。然而聖經中充滿了哀歌——詩篇三分之二是抱怨詩，耶利米哀歌整卷書都在哭泣，連耶穌也在拉撒路墓前流淚。</p>
            <p>學習悲傷是一種靈性操練。它要求我們誠實面對失落，允許自己感受哀傷，不急著「靠主得勝」，而是向神傾倒心中的苦水，在混沌中等候，相信神在黑暗中仍然掌權。</p>
            <p className="text-sm text-amber-700 font-medium">📚 延伸參考：盧雲《負傷的治療者》</p>
          </div>
        </section>

        {/* 深度反思與行動指南 */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg text-white">
          <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-3">
            <span>🧠</span>
            深度反思與行動指南
            <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">延伸應用（非原書內容）</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-lg font-bold text-indigo-200 mb-4">💭 反思問題</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">1.</span>我生命中有哪些失落或悲傷，我至今仍未真正哀悼過？</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">2.</span>我通常用什麼方式來逃避痛苦？這個方式帶來了什麼後果？</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">3.</span>我是否曾因為自己感到悲傷而感到罪惡感，覺得「基督徒不應該這樣」？</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">4.</span>在我的有限中，哪一個是我最難接受的？這告訴了我什麼？</li>
                <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">5.</span>約伯誠實面對神、直接向神抗議——什麼阻礙我這樣對神說話？</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-lg font-bold text-emerald-300 mb-4">🎯 生活實踐</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">1.</span>找出一件你生命中從未完全哀悼的失落，今天為它禱告，允許自己悲傷。</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">2.</span>本週讀一篇哀歌詩篇（如詩篇22、88），用詩人的語言向神禱告。</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">3.</span>列出你生命中五個你無法改變的有限，練習用感恩代替抗拒，接受神的設計。</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">4.</span>找一個安全的人或空間，分享一個你一直沒有說出口的悲傷或失落。</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
