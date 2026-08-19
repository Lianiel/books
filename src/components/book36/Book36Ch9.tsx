import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第九講</h1>
        <h2 className="text-xl font-semibold text-gray-700">成為神國的巨人</h2>
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

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、紅木與柳樹——結存到永遠的果子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔以加州紅木森林為喻：紅木能存活數千年、長到數百英尺高，數千年來持續結果、祝福這片土地；相較之下，柳樹雖生長迅速，卻難以存活長久，所帶來的祝福也十分短暫。她說，若一個人渴望與神合一、在地上活出被造的呼召，他所結的果子就會存到永遠，對世界的價值也存到永遠；但若一個人追求呼召（不論是事工或世上的成就）時禱告很少、不尋求被神充滿，他能帶給世界的祝福就會像柳樹一樣短暫——因為今生沒有讓神真正擁有自己的人，在永恆裡所能擁有的也十分有限。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享一次與一對富有夫婦的對話：她問對方，若把神在地上賜下的財富都花在自己身上，而在神裡面的地位卻很小，那麼在天堂會住什麼樣的房子？對方回答，可能是一間小木屋。她接著問，若把這些錢財用來滿足世人的需要、花時間紮根在神裡面，天上的住所又會是什麼樣？對方回答，可能是一座雄偉的城堡。妮塔藉此強調，生命的重點不在於知道多少、認識誰、擁有什麼身分頭銜，而在於「你在神裡面的所是」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、尼布甲尼撒與但以理的對照</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔以但以理書中尼布甲尼撒王與但以理的對照為例。尼布甲尼撒是當時全地最強大的君王，坐擁極大財富與功業，卻在一天夜裡驕傲地說「這大巴比倫不是我用大能大力建為國都……」；神並沒有否認他是偉大的君王，卻讓他在受懲罰期間形同野獸、在田間吃草，實際上仍是神在維持他的國度。相對地，但以理只是一名太監，沒有顯赫的地位，過著簡樸謙和的生活，卻擁有神的智慧與神的靈，被神完全擁有。她指出，兩人的結局截然不同：一個今生為王、結局卻不蒙福，一個今生只是僕人、卻在永恆裡坐在寶座上。她認為，尼布甲尼撒原本擁有一切條件可以同時成為偉大的君王、又造福百姓、傳揚神的名，最終卻毫無留存的價值；而但以理雖今生毫無所有，他的禱告與生命卻震動列國，直到幾千年後的今天仍被人記念。她也提到亞伯拉罕、以撒、雅各、摩西、以利亞、以利沙、保羅、使徒約翰、主的弟兄雅各（相傳因長年跪地禱告，膝蓋磨出如象膝般的厚繭）等人，指出這些生命對世界影響深遠的人物，關鍵的共通點很簡單，就是禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、把禱告從密室帶進生命的主流</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，很多人不知道自己真正的命定——你或許被呼召成為建築師，但這個職業身分背後，神可能呼召你用恩賜才幹在地上成就比職業本身更大的事。她鼓勵大家把禱告從禱告室裡「拿出來」，成為生命的主流，學會不做神沒有引導的決定；她用喝水做比喻：不要滿足於一小杯神的活水，要站到泉源旁邊直到泉源都無法滿足，甚至跳進河流，直到自己也成為那生命的海洋，以神為中心與祂合一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她引用約翰福音十五章4-8節：「你們要常在我裡面，我也常在你們裡面……離了我，你們就不能做甚麼。」她解釋，耶穌這裡講的不是得救的問題，而是合一——如同基督新郎與基督徒新婦之間的關係，希臘原文的意思是「實際地住進去」；住在基督裡的程度，直接決定了結果子的程度。她用修剪過度的樹作比喻：若一般信徒的禱告量只有應有的十分之一，所結的果子與帶出的權柄也只會是十分之一；相對地，一棵被仔細照料的成熟大樹，能結出極多的果子。她說，神也能使用很少的禱告成就好事，但如果渴望活出被造時該有的完整價值，就不能滿足於現狀的禱告生活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、唯一要緊的事——你願不願意禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔強調，姓名、學位、智力、家庭背景、財富、居住地，這些對神來說都不重要，唯一要緊的是：你願不願意屈膝禱告，讓基督藉著禱告的恩典培育你、使你成熟。她說，任何人都可以成為但以理、以斯帖、保羅、使徒約翰、以利亞、以利沙那樣的人，關鍵不在外在條件，只在於你願不願意禱告、願不願意讓神在代禱的事上培育你，甚至願不願意讓神帶你進入與祂兒子合一的境地。她提到，即便是一位一輩子癱瘓、坐輪椅的人，若他是個禱告的人，對神的國度仍然極有價值——一個人在地上的價值，取決於神擁有他多少。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、缺乏禱告的代價，與對這世代的預言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提出她個人的觀察與信念：中國長年在共產主義治理下、前蘇聯的歷史，以及中東地區被伊斯蘭信仰主導，她認為主要原因都在於這些地區缺乏足夠多禱告的人；她說「你在哪裡找到代禱者，你就找到自由」。她呼籲學員不要把時間耗在電視機前，要贖回時間，把聖經擺在膝上開始禱告，因為世界正因缺乏禱告走向衰敗。她也發出一段預言式的宣告：這個世代是地上有史以來最重要的世代，所能結出的果子將是其他世代無法比擬的，但這果子能否被釋放，完全取決於這個世代的人是否願意起來禱告——禱告能使基督重返教會、經由教會進入世界，帶來末世的靈魂收割，也能加速基督的再來。她強調，這收割的大小，取決於在場每一個人自己的禱告，而非只是講員的禱告。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，她引用耶穌的話「人子來的時候，遇得見世上有信德嗎？」，帶領會眾起立禱告、方言禱告，並宣告：神正在呼召房間裡的每一個人，成為神國裡的巨人——任何人都能成為這樣的巨人。
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
                '紅木與柳樹的比喻：與神合一、根植於禱告的生命，能結出存到永遠的果子；缺乏禱告根基的成就，祝福終究短暫。',
                '尼布甲尼撒與但以理的對照說明：今生的權勢財富未必帶出永恆的價值，反倒是看似卑微、卻被神完全擁有的生命，能真正影響歷史。',
                '約翰福音十五章「常在我裡面」講的是與基督合一的深度，而非得救與否——住在基督裡的程度，直接決定結果子的程度。',
                '一個人在神國裡的價值，不取決於身分、學歷、財富、外在條件，只取決於他願不願意禱告、願意被神擁有多少。',
                '妮塔的核心呼籲：把禱告從密室帶進生命的主流，這個世代能結出的果子大小，取決於這一代人是否願意起來禱告。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「天上房屋大小取決於今生奉獻」的觀念，聖經根據有多穩固？</h4>
              <p className="text-gray-700 leading-relaxed">
                聖經確實教導在天上有「賞賜」的觀念（如馬太福音六章20節「積攢財寶在天上」，哥林多前書三章12-15節論工程受火試驗），但把賞賜具體想像成「豪宅」與「小木屋」的對比，是一種形象化的講道方式，而非經文逐字的教導。這樣的比喻有助於提醒人不要只顧地上的享受，卻也要留意避免把「屬靈價值」簡化成一種可以量化比較的房產交易，畢竟聖經同樣強調恩典而非功德交換（以弗所書二章8-9節）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">將特定國家的政治處境歸因於「缺乏禱告」，是否是唯一的解釋角度？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提到中國、前蘇聯、中東等地區的政治宗教處境與「缺乏代禱者」相關聯，這是代禱運動傳統中常見的屬靈解讀方式，反映她個人的信仰視角與呼召，鼓勵聽眾看重代禱的重要性。但一個國家或地區的政治、宗教格局，實際上涉及極其複雜的歷史、社會、經濟因素；把複雜的地緣政治現實簡化為單一的屬靈原因，容易忽略當地基督徒（包括在極其艱難處境下仍堅持信仰與禱告的信徒）真實的努力與見證。讀者可以把這段教導理解為呼籲重視代禱的激勵性語言，而非嚴謹的政治分析。
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
              '你目前生命所結的果子，比較接近「紅木」還是「柳樹」？是什麼決定了這個差別？',
              '尼布甲尼撒擁有一切卻毫無留存的價值，但以理幾乎一無所有卻震動列國——這個對比，對你衡量「成功」的方式帶來什麼挑戰？',
              '「你在地上的價值取決於神擁有你多少」——你目前生命中，哪些部分還沒有完全交在神手中？',
              '妮塔鼓勵把禱告從密室帶進生命的主流。具體來說，你的一天當中，有哪個時段或場景可以嘗試這樣的操練？',
              '面對「這個世代能結的果子取決於是否起來禱告」的呼籲，你會如何回應這個呼召，而不僅僅是被激勵的情緒感動？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想約翰福音十五章</h4>
              <p className="text-gray-700 mb-2">通讀約翰福音十五章1-17節，特別默想「常在我裡面」這句話，寫下你認為自己目前與基督「同住」的程度，以及你渴望更深合一的具體領域。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 贖回一段被電視或社群媒體佔用的時間</h4>
              <p className="text-gray-700 mb-2">
                本週選一個你平常花在娛樂或滑手機的固定時段，改為安靜禱告或讀經，觀察這個小小的調整如何影響你一週的心境。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌳 為你的呼召禱告而非只是規劃</h4>
              <p className="text-gray-700 mb-2">
                若你正在規劃某個服事、事業或人生方向，先停下來花時間單單為這件事禱告，求神向你顯明這個呼召背後更深的心意，而不急著制定行動計畫。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，我願意把禱告從密室帶進我生命的每個角落，求你使我不滿足於一小杯的活水，而渴慕成為那盛裝你榮耀的海洋。求你光照我，讓我看見自己願不願意被你完全擁有。求你使用我這個世代，成為結出永存果子的世代。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
