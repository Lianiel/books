import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第五講</h1>
        <h2 className="text-xl font-semibold text-gray-700">四種生產式的禱告</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔引用希伯來書十二章12-15節：「所以，你們要把下垂的手、發酸的腿挺起來……你們要追求與眾人和睦，並要追求聖潔；非聖潔沒有人能見主」，鼓勵大家離開世界、保持純潔的心與清潔的生活，這是未來成為強而有力代禱者的保證。她再引以弗所書六章17節「並戴上救恩的頭盔，拿著聖靈的寶劍，就是神的道」，作為這一講的引子——這一講要談不同形式的禱告和代禱。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、使用神的話來禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔開門見山地說：常有人問她禱告室裡的「秘方」，問什麼話能扭轉神的心意——她要打破這個幻覺：根本沒有這樣的事，唯一能扭轉神心意的方法，就是禱告出祂的旨意（她也提到有些時候人不願按神的旨意禱告，這點留待第六講結尾再談）。她說，保羅教導要戴上救恩的頭盔、拿聖靈的寶劍——神的話，並不住地禱告；這不是說要像揮劍一樣機械式地引用經文打敗撒旦，而是真正用神的話來禱告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享自己在以色列的經歷：她打開聖經，翻到先知書，按著神一再向以色列說的話來禱告，若有應許還沒應驗，就用神自己的話向祂陳明。有一次，她為過去兩千多年猶太人的歷史心中滿有沉重的負擔，感覺自己彷彿是一個兩千歲的老人，一面回顧同胞的悖逆、飄流曠野的心酸，一面遠遠望見前方幽暗、毫無神同在的未來，不禁向神哭訴：「父神，我感覺甚至我們的先祖雅各也離棄我們了。」她就這樣持續哭了好幾個小時，後來被提到靈裡，看見雅各站在路的那頭，耶穌站在雅各旁邊，兩人張開雙臂擁抱以色列百姓，都被從永恆隧道射進來的光環繞，百姓心中生出盼望。禱告結束後她一打開聖經，正好翻到耶利米書一段約三章長的經文，內容竟與她心中方才湧出的念頭一模一樣——原來多年前先知耶利米也作過同樣的禱告，神也給了他同樣的指望。她因此再次用這段經文禱告，心裡更加確信神在以色列中將要做的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也分享第二次去以色列的經歷：耶穌向她顯現，把她提到以色列上空（不是天堂），說要教導她此後每次來以色列該怎樣禱告，接著開始宣告一節節經文，每念一節就進入極深的哭泣，她也跟著一起哭泣，哭到一定程度突然停止、恢復平靜，主再找下一節經文，如此反覆，從晚上十一、二點一直到隔天早上七點左右才把她帶回房間。妮塔說，這正是神要她此後為以色列所做的禱告方式——允許神藉著祂的話語來膏抹我們的禱告，不論是否流淚，都是帶著信心用聖經的話禱告，這是一種非常強而有力的代禱方式。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、呻吟式的禱告（Groaning Prayer）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用羅馬書八章26節：「只是聖靈親自用說不出來的歎息（groaning）替我們禱告」，說明這種代禱形態：呻吟的靈臨到時，腹部會像胃痛一樣持續呻吟，頭腦裡有許多話卻說不出來；不需要擔心該說什麼，因為聖靈已經做了該做的。這叫「說不出來的歎息」，是一種生產式的禱告——當你這樣呻吟時，是在神的國度中生產出一些東西；即便不完全明白呻吟的具體內容（例如是為某人的救恩），只要順服聖靈、持續呻吟，聖靈就會把那人靈魂的救恩生產出來。她說，凡看到一個地區或國家經歷復興，一定能看見這種類型的禱告，並舉查理斯·芬妮（Charles Finney）為例：他在講道前常躲在教會後面或樹林中，不斷呻吟禱告，一開始講道聖靈便降下、復興臨到、靈魂得救；他還有兩位代禱者，也以這種呻吟式禱告聞名，提前抵達他要去的城市，孕育出當地的復興。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、哭泣式的禱告（Weeping Prayer）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用耶利米哀歌一章20節：「我心腸擾亂，我心在我裡面翻轉，因我大大悖逆」，並澄清一個常見的誤解——許多解經家與傳道人以為耶利米是消沉沮喪的人，但實際上耶利米是「哭泣的先知」，一直在聖靈的膏抹下哭泣代禱，是神的靈藉著他哭出來，為以色列的醫治禱告，這被稱為哭泣式的禱告。她描述其特徵：可能有淚水，也可能沒有，但內心會感受到彷彿放聲大哭一樣，對所代禱的人事懷著極深切的愛，同時也對神有極深的愛；即便所代禱的人正處在嚴重的罪中，心裡卻沒有絲毫責備、批評，只有滿滿的憐憫。她說，凡看見復興發生的地方，也一定會看見這種禱告形態，這是為靈魂得救最典型、最有深度的代禱形式。她舉自己所屬「鷹的聚集」為例：為對原住民所犯的罪悔改時、為美國黑人的歷史悔改時，都出現大量這種撕心裂肺的哭泣代禱，彷彿親身活在那段苦難歷史中，心中充滿了對這些族群的愛與憐憫，也能感受到神心中的憂傷；若為列國禱告，甚至能感受到地裡血的呼求。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、哭嚎式的禱告（Bewailing Prayer）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用哥林多後書十二章21節：「又因許多人從前犯罪，行污穢、姦淫、邪蕩的事，不肯悔改，我就憂愁」，指出KJV版本用的字是「bewail」，即排山倒海般的哭泣，與哭泣式禱告同類型但程度更深，是所有禱告形態中最有力的一種，聽起來就像這人剛剛失去了獨生子一般，神在最有需要的時候會降下這種禱告。她分享一次為G8高峰會、為美國黑人所受的罪禱告時，聖靈降下極大的憂傷充滿整個房間，眾人進入哭嚎式禱告；有一位她多年不見、向來優雅得體的姊妹，被代禱的靈臨到後，從站立到跪下，最後整個人撲倒在地爬到一位黑人牧師腳前，蜷曲哭喊：「我們很抱歉，我們很對不起。」妮塔強調，這不是人為的激情，而是為過去所犯的罪真實地哭嚎，全場都被深深震動；在這種形態的代禱中，神掌管一切，不論禱告的內容是什麼，神都會施行恢復。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、劬勞式的禱告（Travailing Prayer）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用加拉太書四章19節：「我小子啊，我為你們再受生產之苦，直等到基督成形在你們心裡」，指出KJV版本用「經歷劬勞的生產之苦」來形容。她舉先知以利亞在迦密山上為例：他俯伏於地、雙膝蜷起、臉放兩膝之間，表面看似哭嚎，實際上正在劬勞。她說，真正的劬勞式禱告會自動使身體進入生產的姿勢，不論男女，都會感覺像是在生一個孩子，裡面被拉扯，彷彿要生出些什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享自己早期代禱生活中的經歷：她所服侍的一所聖經學校校長相信復興會在他們服侍期間臨到，於是他們每天為復興禱告，這種生產式禱告便常常臨到她——神給她一個異象，每天看見一個嬰孩在產道中往下移動，一天比一天更往下，經過許多天，異象中嬰孩終於生出來，她也從這樣的劬勞禱告中被釋放出來。就在那天晚上的聚會中，復興真的降臨了：聖靈的火降下，人們從座位站起就撲倒在神的大能中，甚至走不到講臺前就已倒地，會場中彷彿到處都是天使的同在，神的能力強而有力。妮塔總結，這就是「劬勞產生復興」——生產式的禱告、哭泣式的禱告、呻吟式的禱告，加在一起，正是產生復興所需要的禱告形式；若渴望為列國禱告，應當尋求神賜下這樣的禱告形態。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她在這一講結尾預告：隔天將一起釋放代禱的恩膏，任何願意領受的人都能領受，並鼓勵大家從現在到隔天，默想她所分享的這幾種禱告形態，因為新的恩膏永遠代表著新的權柄。
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
                '沒有能扭轉神心意的「魔法話語」，唯一能扭轉神心意的禱告，就是禱告出祂自己的旨意——用神的話來禱告，是最強而有力的代禱方式之一。',
                '呻吟式禱告（Groaning）：以說不出來的歎息代禱，是一種生產式禱告，常見於復興運動之前，如查理斯·芬妮及其代禱者的服事。',
                '哭泣式禱告（Weeping）：帶著對神與對代禱對象的深切之愛而哭泣，即便對方在罪中也毫無指責，只有憐憫，是為靈魂得救最典型的代禱形式。',
                '哭嚎式禱告（Bewailing）：比哭泣式更深一層的排山倒海式痛哭，是最有力的禱告形態，神在最有需要的時刻會親自降下。',
                '劬勞式禱告（Travailing）：如同生產般的身體與靈裡的拉扯，以利亞在迦密山上的禱告即是一例；妮塔親身經歷「異象中嬰孩逐日下移、直到生出」而後復興真實降臨的過程，印證「劬勞產生復興」。',
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
              <h4 className="font-semibold text-gray-800 mb-2">高度情感化的禱告經歷，如何避免流於情緒表演？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述的呻吟、哭泣、哭嚎、劬勞，都是強烈的身體與情緒反應，這類經歷在部分教會傳統中較為陌生，也容易被誤解或刻意模仿成一種「表演式屬靈」。健康的態度或許是：這些禱告形態的核心不在外顯的激烈程度，而在於是否真是聖靈的感動、是否結出憐憫與代求的實際果效（如妮塔強調的「沒有絲毫責備批評，只有憐憫」）；讀者不必以外在表現來評斷自己或他人禱告是否「有分量」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「用神的話禱告」與逐字背誦經文的差異</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔特別澄清「不是像揮劍一樣機械式引用經文」，這提醒我們：用神的話禱告，重點是讓經文所啟示的神的心意真正進入禱告者的心，帶出真實的負擔與回應，而不是把經文當作咒語式的公式重複誦念。這與雅各書一章提到「聽道而不行道，如同人對著鏡子看自己本來的面目，看見，走後，隨即忘了他的相貌如何」的提醒有相通之處——經文要進到心裡，而非只是停留在口中。
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
              '你過去的禱告，多半是「告訴神我要什麼」，還是「讓神的話塑造我要禱告什麼」？兩者的差別，對你意味著什麼？',
              '妮塔提到，對罪中的人心存憐憫而非責備批評，是哭泣式禱告的重要特徵。你在為某人代禱時，內心更常出現的是評判，還是憐憫？',
              '在四種生產式禱告中（呻吟、哭泣、哭嚎、劬勞），哪一種你曾經歷過或最能感同身受？哪一種對你而言最陌生？',
              '妮塔說「劬勞產生復興」。你是否曾為一件事持續禱告很久，卻不確定何時會「生出」果效？這一講對你的堅持有什麼提醒？',
              '面對本講描述的高度情感化禱告經歷，你會如何在「渴慕更深的禱告經歷」與「不刻意模仿外在表現」之間拿捏平衡？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 操練用經文禱告</h4>
              <p className="text-gray-700 mb-2">下次為某個處境代禱前，先打開聖經尋找相關的經文（先知書的應許、詩篇的呼求皆可），把那段經文的話語直接讀出來、禱告出來，而不是先用自己的話開口。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 留意禱告中的身體與情緒反應</h4>
              <p className="text-gray-700 mb-2">
                下一次禱告時，若感受到不尋常的沉重、哽咽或身體的拉扯感，不要急著壓抑或分析，先安靜下來順服聖靈的帶領，觀察這感受最終指向什麼樣的代求內容。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💞 為一件事持續代禱到底</h4>
              <p className="text-gray-700 mb-2">
                選一件你相信需要「劬勞」才能看見突破的事（一個人的得救、一個地方的復興、一段關係的和好），委身持續為它禱告一段時間，不因暫時看不到結果而放棄。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你用你的話語來膏抹我的禱告，使我不再只是用自己的話向你求，而是學會用你的心意來禱告。求你賜給我一顆柔軟的心，能為著失喪的靈魂哭泣、能為著破碎的關係劬勞，直到看見你的旨意成就。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
