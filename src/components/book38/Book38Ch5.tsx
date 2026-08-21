import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">救恩的確據</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、「這個男孩屬於傑克和瑟瑪」——巴士上的紙條</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶大約十歲時，父母安排他獨自搭巴士去祖父母家住一週。媽媽反覆叮囑他乖乖待在座位上，不要跟任何人說話。上車前，爸爸拿出一些錢和一張事先寫好的紙條，塞進他的襯衫口袋：「拿去買些糖吃。」旅程順利，唯一值得一提的是那張紙條——上面寫著：「這個男孩屬於傑克和瑟瑪」，還附上家裡的地址和電話，萬一他弄丟了自己，這張紙條能幫助他和家人重逢。
              </p>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸說：上帝對你也是如此。看看你靈魂的「襯衫口袋」，就會看到祂公開宣示「這是我的孩子」，你屬於祂。我們都需要這種保護，因為路上充滿危險，上帝的兒女可能會迷失方向、叛逆，甚至被惡者引誘，但上帝要撒旦和牠的爪牙知道：「這個孩子屬於我，別碰他。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、聖靈的印記——已成定局的事實</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸問：三位一體的神中，究竟是哪一位來保護你呢？他引以弗所書一章13節：你「受了所應許的聖靈為印記」，以及四章30節：「不要叫神的聖靈擔憂；你們原是受了他的印記，等候得贖的日子來到。」他指出，這兩段經文都用過去式強調已成定局的事實——我們不是正在接受聖靈的印記，也不是期待將來得著印記，而是已經受了聖靈的印記，等待得救的日子。他解釋，「印記」（Seal）作動詞時有封存、彌封、印證的意思，就像扭緊瓶蓋封存醃黃瓜、舔信封彌封信件、合約公證後蓋章確認交易——印記的目的在於宣告所有權並保護內容物，象徵「這是我的，並且受到保護」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他說：當你接受基督時，神也用聖靈在你身上蓋下印記，保護你、確保你的平安——撒旦可能誘惑你、讓你意志消沉，但無法擁有你。他提到，耶穌所受的「印證」（約翰福音六章27節）與信徒所受的「印記」在希臘原文裡是同一個字——耶穌會害怕被父神拒絕嗎？當然不會。那麼你該害怕嗎？當然不必！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、東與西的距離——神的赦免徹底無回頭</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引羅馬書八章14-17節，指出信徒不僅受了印記，還領受了兒女的身分——不是奴僕的心、仍舊害怕，而是兒子的心，呼叫「阿爸！父！」他對比：奴隸生活在恐懼中，害怕主人不滿意、害怕沒有未來的保障；但父子關係卻是一種保證。他提到，舊約中上帝只有十五次被稱為「父」，新約中卻超過兩百次——基督是這個轉變的關鍵：祂在十字架上的犧牲為我們的罪付上最終代價，「東離西有多遠，他叫我們的過犯離我們也有多遠」（詩篇一百零三篇12節）。他解釋，東和西之間的距離是無限的——若一直向北走會到北極、然後開始往南走，向南也會在南極轉向北方，但東和西沒有這樣的轉折點；上帝的赦免也是如此，一旦領受了救恩、走上新的道路，就永遠無須回頭。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他引彌迦書七章19節：「將我們的罪孽踏在腳下，又將我們的一切罪投於深海」，指出希伯來文「投」這個詞聽起來像「shaw-lak」，與英文「Shellack」（徹底擊敗）發音相似——這表明神徹底處理了我們的罪，投進海洋最深處，永遠找不到、無法再回頭對付我們。他鼓勵讀者記住這個真理：「在上帝眼中，祂看到的是『你』，而不是『你的罪』」——祂「塗抹你的過犯」並「不記念你的罪惡」（以賽亞書四十三章25節），沒有緩刑、沒有例外，更不會撤銷赦免。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、被收養的兒女——不再是奴僕</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，神收養我們做祂的兒女，這觀念在任何時代都令人驚奇，對使徒保羅的受眾來說尤其重要——根據羅馬法律，被收養的兒子會與舊家庭斷絕一切關係、成為父親財產的繼承人、之前的一切債務都被免除、在法律上成了新父親的兒子。他說，基督使我們也有同樣的經歷：我們千真萬確地成為神的兒女，過去種種彷彿未曾發生，聖靈使我們確信這樣的轉變——「聖靈與我們的心同證我們是神的兒女」（羅馬書八章16節），並引加拉太書四章6-7節：「神就差他兒子的靈進入你們的心，呼叫：『阿爸！父！』可見，從此以後，你不是奴僕，乃是兒子了。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                他坦言，出於人的本能，我們對神的態度經常不是如此——雖然口裡說「我們在天上的父」，心裡卻不是真的這麼想；若不是聖靈的工作，我們會把神視為需要躲開、討好甚至逃避的對象，禱告出於責任或恐懼而非愛。但相信耶穌後，我們的生命發生超自然的變化，開始對神產生熾熱的愛，這都因為「所賜給我們的聖靈將神的愛澆灌在我們心裡」（羅馬書五章5節）。他強調：聖靈使你的靈確信，你的命運掌握在慈愛的天父手中，你的名字不是用鉛筆寫在神的冊上、等著被擦掉——祂是良善的父親，你的名字用羔羊的血寫在生命冊上。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、〈主必保守〉這首詩歌——確據帶來的安全感</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享一位朋友告訴他，成為基督徒的那天是她生命中最美好的一天，隔天卻成了最糟糕的一天——因為她一醒來就冒出念頭：「要是我搞砸了怎麼辦？」他講述澳洲鋼琴家哈克尼斯（Robert Harkness）與佈道家托瑞（R.A. Torrey）環遊世界佈道的故事：某夜在加拿大，哈克尼斯遇到一位擔心隨時會失去救恩的新信主年輕人，他寫信給倫敦的讚美詩作曲家哈伯遜（Ada Habershon）提到這個需求，她因而受啟發寫下〈主必保守〉（He Will Hold Me Fast）：「有時我怕信心失喪，主能保守我；有時誘惑甚難抵擋，主能保守我……祂不讓我靈魂失掉，主要保守我；祂已重價買贖我，主要保守我。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                他問：為什麼我們必須擁有這樣的確據？很簡單，這種確據帶有大能。他分享一位年輕大學畢業生請他為法學院申請禱告的例子：等待期間她越來越焦慮，收到錄取通知書後，整個人卻活力充沛、開始規劃未來——因為她清楚接下來會發生什麼，對未來充滿肯定。他說：聖靈也給了我們一封「錄取通知書」，不是進入法學院，而是進入天國，引約翰壹書四章17-19節：「我們就可以在審判的日子坦然無懼……愛裡沒有懼怕；愛既完全，就把懼怕除去。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、法學院錄取通知書與尼克·布朗的康復見證</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸引用羅伯特·羅賓遜（Robert Robinson）的禱告：「主啊，我知道自己容易漂泊，容易離棄我所愛的神；主啊，我把心交給祢，求祢掌管、封印，永存在祢天上的國。」並提醒：神以完全的愛來愛你，祂清楚你犯下的一切錯誤，也知道你未來可能再度失足，然而祂仍願意毫無保留地愛你，並承諾讓你安全回到祂的家。他以尼克·布朗（Nic Brown）的真實故事作結：三十八歲、育有兩個女兒的健康父親，成為所在郡第一個確診新冠病毒的人，健康狀況每況愈下，被轉送到克利夫蘭醫學中心加護病房，依賴生命維持系統存活，醫院甚至與他的妻子討論了臨終安排。但醫療團隊每天都在他病房的玻璃門上寫下治療目標，並在結尾留下這句激勵人心的話：「我們會把你平平安安的送回家。」漸漸地，尼克的身體開始對抗病毒，最終完全康復，與女兒和妻子團聚——醫護人員做到了他們的承諾。陸可鐸總結：聖靈也會履行承諾，我們的身上有祂的印記，祂會領我們回家。
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
                '上帝在我們生命中留下「屬祂的印記」，公開宣告我們是祂的孩子，並受到祂的保護，正如那張塞進口袋的紙條「這個男孩屬於傑克和瑟瑪」。',
                '聖經用過去式描述聖靈的印記——救恩已成定局，不是暫時、可撤回的，而是等候得贖之日完全實現。',
                '信徒不再是奴僕，而是被神收納的兒女，根據羅馬法律的收養概念，完全脫離舊身分、舊債務，成為神的後嗣。',
                '「東離西有多遠」的比喻說明神徹底赦免我們的罪，使它們永不再被記念；祂看的是「我們」，不是「我們的罪」。',
                '聖靈在我們心裡見證我們是神的兒女，使我們不再因害怕而服事神，而是出於愛與信任，如同〈主必保守〉這首詩歌所表達的確據。',
                '尼克·布朗從新冠重症中康復的見證提醒我們：正如醫護人員信守「把你平平安安送回家」的承諾，聖靈也必履行祂的承諾，領我們回家。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「救恩的確據」在教會歷史上曾是怎樣的神學議題？</h4>
              <p className="text-gray-700 leading-relaxed">
                「一次得救永遠得救」（perseverance of the saints）與「救恩可能失落」這兩種立場，是宗教改革以來歸正宗（加爾文主義）與阿民念主義傳統長期存在分歧的議題之一。陸可鐸這一章的立場明顯傾向前者，強調救恩一旦領受便已成定局。讀者若來自持不同立場的教會傳統，不必因此感到這章內容與自己所受的教導衝突——不同傳統對「確據」的神學機制解釋雖有差異，但都同意神對信徒不離不棄的信實本質，這也是以弗所書一章13-14節、羅馬書八章的核心信息。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「確據」與「自負、不追求聖潔」之間如何區分？</h4>
              <p className="text-gray-700 leading-relaxed">
                有人擔心「救恩已成定局」的教導會讓信徒失去追求聖潔的動力，但陸可鐸這一章其實已經回應了這個疑慮——他引用羅馬書八章14-17節強調「凡被神的靈引導的，都是神的兒子」，確據不是與聖靈引導脫鉤的空頭支票，而是與被聖靈引導的生命同步發生的果效。真正健康的確據觀，不是「反正得救了、怎麼活都無所謂」的放縱，而是如同被收養的孩子，因確信自己被無條件接納，反而更甘心樂意地活出與這個新身分相稱的生命（提多書二章11-12節「神救眾人的恩典……教訓我們除去不敬虔的心，和世俗的情慾，在今世自守、公義、敬虔度日」）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">尼克·布朗的康復見證，該如何避免被過度延伸解讀？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸用尼克·布朗的康復比喻聖靈「必領我們回家」的信實，這個類比的重點在於「信實的承諾」本身，而非暗示每位重症患者都會像尼克一樣康復。事實上，疫情期間有許多信徒同樣禱告、同樣仰望神的信實，卻未能在世上康復——這提醒讀者，「聖靈領我們回家」這個應許的「家」，最終指向的是與神永恆的同在（無論是在世上的康復，或是在天家的團聚），而不是保證此生此世特定的健康結果。
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
              '如果小時候的你也曾有一段獨自旅行的經歷，你的「口袋紙條」上會寫誰的名字？誰給了你安全感和歸屬感？',
              '「印記」意味著「這是我的，而且受到保護」。想一想，上帝讓你受了聖靈的印記，對你的生活有什麼實際的意義？',
              '你是否把神看作是一位好父親？如果不是，你目前與神的關係更像什麼？聖靈如何幫助我們建立這樣的父子關係？',
              '陸可鐸問：「為什麼我們必須有救恩的確據？」你會怎麼回答這個問題？感到不安時你會怎麼做，有安全感時又會怎麼做？',
              '你覺得自己經歷過神完全的愛嗎？如果有，你是如何知道的？如果沒有，你認為是什麼阻礙了你接受這樣的愛？',
              '如果你對救恩有完全的確據，這會如何改變你現在的行事作風，以及你對自己或他人的看法？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 默想以弗所書一章13節、四章30節</h4>
              <p className="text-gray-700 mb-2">找一段安靜時間，把這兩節經文抄寫下來，特別留意「已經受了」這個過去式的用詞，寫下這對你意味著什麼。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎵 學唱〈主必保守〉</h4>
              <p className="text-gray-700 mb-2">
                找到〈主必保守〉（He Will Hold Me Fast）這首詩歌的歌詞或旋律，在下次感到不安、懷疑救恩時，用這首詩歌代替焦慮的思緒。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫一張屬於自己的「口袋紙條」</h4>
              <p className="text-gray-700 mb-2">
                仿照陸可鐸父親寫給他的紙條，為自己寫一句話：「我是____（你的名字），我屬於神。」放在錢包或手機裡，需要提醒自己身分時拿出來看。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「天父，謝謝祢用聖靈在我身上蓋下印記，宣告我是祢的孩子。求祢除去我心中一切「會不會搞砸了」的懼怕，讓我真實經歷祢完全的愛。求祢幫助我不再用奴僕的心懼怕祢，而是用兒女的心呼叫『阿爸，父』。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
