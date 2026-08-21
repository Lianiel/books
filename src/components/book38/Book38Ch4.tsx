import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">心中的哀嘆</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、疫情中湧來的代禱訊息——「我不知道該求什麼」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸在COVID-19疫情肆虐、全球經濟癱瘓、大規模恐慌之際寫下這一章。他建立了一個禱告網頁，每天分享帶給人盼望的信息，並公開邀請：「寫下你的代禱事項，我們會為你禱告。」結果這個頁面被無數代禱請求淹沒，從康乃狄克州到柬埔寨，成千上萬的訊息如潮水般湧來：「請禱告我能找到工作」「請禱告我能跟家人和睦相處」「求神幫助我入睡」「我很孤獨，請為我禱告」。他說，其中最常見的代禱需要，往往也最真誠：「我不知道該求什麼」「我嘗試過禱告卻做不到，大多數時候我只是一直哭」「我想禱告，但我的需要大到難以用文字形容」「我只能嘆息」。他感嘆：在陽光燦爛的日子裡，我們的禱告既優美又富有詩意，但在風雨飄搖的季節，我們的禱告充斥著悲傷、恐懼與震顫——然而這些最赤裸的呼求，最終會到達天父面前，因為這些呼求被託付給聖靈來照料。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、羅馬書八章——聖靈用說不出來的歎息代求</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引羅馬書八章22-23、26-27節：「一切受造之物一同歎息、勞苦，直到如今……我們的軟弱有聖靈幫助；我們本不曉得當怎樣禱告，只是聖靈親自用說不出來的歎息替我們禱告。鑒察人心的，曉得聖靈的意思，因為聖靈照著神的旨意替聖徒祈求。」他說，很少有經文能像這裡一樣寫出聖靈溫柔的心腸——我們已習慣祂大能的作為：聖靈的火降臨彼得身上、為保羅打開牢房大門、使以西結看見枯骨復活、使摩西看見紅海分開；但同樣重要的是，聖靈也會悉心整理軟弱者語無倫次的禱告，確保天上的神聽見這些呼求。他指出，「有聖靈初結果子的，也是自己心裡歎息」意味著有聖靈同在，不代表就不會遭遇痛苦——痛苦是生命的一部分，會使人心裡軟弱。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、軟弱與疾病中的禱告——心房顫動的親身經歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享自己與心房顫動搏鬥的那段時間，一連數月心跳加速，身心俱疲、情緒低落，看到醫生們束手無策更加沮喪，經常待在教堂裡、在禱告的祭壇前跪下，說著簡單而真誠的祈求。他坦言，相比一些讀者，自己的疾病顯得微不足道——當癌症奪走青春的活力、多發性硬化症吸乾生命的氣息、類風濕性關節炎使關節僵硬時，禱告只剩下呻吟與嘆息。他也提到，軟弱未必來自病痛，也可能是婚姻破裂、事業失敗、被所愛的人拒絕、失去工作——正是在這些時刻，我們和先知希西家一樣，「我像燕子呢喃……我因仰觀，眼睛困倦」（以賽亞書三十八章14節），或像詩篇作者所寫：「我被壓傷，身體疲倦；因心裡不安，我就唉哼。主啊，我的心願都在你面前；我的歎息不向你隱瞞」（詩篇三十八篇8-9節）。他說：我們渴望的生活與現實之間經常存在著鴻溝，在這樣軟弱的時刻，「我們本不曉得當怎樣禱告」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、我們不知道怎麼禱告才正確——保羅的誠實</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸感謝保羅的誠實：如果連這位使徒和多數新約作者在面對困境時，都會有不知如何禱告的時刻，那麼我們大可放心，有這樣的困惑並不奇怪。他舉出幾個難解的兩難：癌症病人該為自己求什麼——病得醫治，還是進入天國以得到解脫？浪子的父親該如何禱告——求神耐心對待兒子的悖逆，還是讓兒子落入豬圈以得到教訓？被迫害的囚犯該求什麼——獲得釋放，還是在囚牢中忍耐到底？他坦言，我們不知道怎麼禱告才正確，甚至懷疑：如果所說的過於零零落落，配得神的垂聽嗎？天堂真的會傾聽疲憊靈魂的微弱呼求嗎？他的答案是：幸好我們有來自天上的幫助——聖靈親自替我們禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、昆尼奧的比喻——聖靈是我們的中保</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸解釋，「代求」指的是站在兩者之間：當剛強的一方代替較軟弱的人提出祈求，這就是代求。他分享1983年他和妻子德娜琳搬到巴西里約熱內盧的經歷：初到這個國家，幾乎一句葡萄牙語都不會說，公寓裡家徒四壁，但一整箱家具、家庭照片、餐具、書籍卻卡在海關領不出來。他連續好幾週固定到海關辦公室報到，用蹩腳的葡萄牙語詢問，得到的總是「不行，先生」，情況陷入僵局，他日復一日回家告訴德娜琳「我沒拿到行李」，心裡充滿恐懼。這時，鄰居昆尼奧（Quenho）登場了——聽完他的困境後說：「我來幫你吧，我是律師。」「我有辦法。」他們一起走進海關辦公室，昆尼奧直接走向那位多次拒絕陸可鐸的官員，不到幾分鐘兩人就笑了起來，搭著陸可鐸的肩膀替他說話——行李順利放行、家具送達，妻子非常高興。陸可鐸說：昆尼奧擁有我缺乏的一切，他了解當地文化、熟悉語言、懂法律、知道如何說服官員，最幸運的是，他選擇替我們發聲——他是我們的中保。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他說：這正是聖靈的角色。在你一無所有的時候，你有神的靈作為中保——「即使人們在求拯救時只能嘆息，並啞口無言，神的靈已經在他們內心發出嘆息、為他們代求。」我們不知道如何禱告，但聖靈知道，而且祂非常清楚！與海關人員不同，天父非常樂意釋放豐盛的祝福——你有聖靈作中保，也有天父作你的供應者，你可能處在軟弱中，但同時，這也可以是你最強大的時刻。他說：最偉大的禱告勇士很可能看起來最軟弱——監獄中的囚犯、邊境的移民、孤兒院裡被遺忘的孩子；他提到自己患有失智症的母親，會躺在床上喃喃自語，良善的上帝聽她的禱告；一位患有創傷後壓力症候群的退伍軍人向神祈求重返社會的勇氣，這難道不值得天堂垂聽嗎？他說：就在此刻，永恆的、無限的、不斷創造的聖靈正在為你發聲，「用禱告傳遞我們說不出的歎息和沉痛的哀嘆」（羅馬書八章26節，Message版聖經），你隨時的幫助就在這裡！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、泰國睡美人洞的救援——「我只是第一個找到你們的人」</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸以2018年6月泰國睡美人洞救援事件作結：十二名男孩深入洞穴探索，一場突如其來的暴風雨淹沒通道，將他們困在裡面，沒有食物、沒有光源，陷入一片黑暗，斷絕與外界所有聯繫。男孩們不知道，世界各地的人正在為他們禱告——多個國家聯合組織救援行動，動員一萬多人，包括潛水員、救援隊、士兵、直升機駕駛員、救護車司機，還有潛水氧氣瓶、嗅探犬、無人機和機器人，全球的知識與力量聚集在一起。救援隊花了九天時間，最終在一處泥濘的岩石平台找到這些男孩，救難人員摘下氧氣罩告訴他們：「我只是第一個找到你們的人，還會有其他人來救你們。」陸可鐸問讀者：如果你能想像男孩們聽到這句話的感受，那麼你就能想像，當聖靈告訴你「你說不出口的，我能說，不要絕望，天堂會聽見你的禱告」時，祂希望你也會有同樣的感受。他總結：你沒有被困在一公里深的地底，但可能也處在看不見出路的黑暗之中——如果這是你，請記住，當我們軟弱時，三位一體的神正全力以赴為我們成就美好的結果。我們不知道如何禱告，沒有關係，聖靈知道，祂會為你禱告。
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
                '人在痛苦、疾病、恐懼或人生破碎時，常常「不知道該怎麼禱告」，只能用嘆息代替言語——這是陸可鐸從無數真誠代禱請求中觀察到的普遍現象。',
                '羅馬書八章26節應許：聖靈會親自整理我們破碎、語無倫次的呼求，用「說不出的歎息」替我們向父神代求，使禱告仍能直達神面前。',
                '軟弱與疾病並不代表神離開，而是提醒我們需要天上的力量介入——連使徒保羅都坦承「我們本不曉得當怎樣禱告」。',
                '「昆尼奧」的比喻說明聖靈作為中保的角色：祂了解我們所不了解的、能說出我們說不出的，並主動選擇為我們發聲。',
                '在哀痛與低潮中的禱告同樣神聖——失智老人的喃喃自語、退伍軍人求勇氣的禱告，都同樣被天堂垂聽。',
                '「我只是第一個找到你們的人，還會有其他人來救你們」——這句話提醒我們，聖靈的代求不是終點，而是三位一體神全力以赴為我們成就美好結果的起點。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「聖靈用說不出來的歎息代求」，與詩篇中大量的哀歌傳統有何關聯？</h4>
              <p className="text-gray-700 leading-relaxed">
                舊約詩篇中有將近三分之一是「哀歌」（lament psalms），內容充滿困惑、抱怨甚至對神的質問（如詩篇二十二篇「我的神，我的神，為什麼離棄我」）。這說明聖經本身就為「不知道怎麼禱告」「只能嘆息」的處境保留了合法的表達空間，而不是要求信徒永遠用正面、有條理的語言禱告。羅馬書八章26節可以理解為新約對這個古老傳統的延續與深化：不僅允許人用嘆息禱告，更應許聖靈親自介入、把這些嘆息轉化為蒙神悅納的祈求。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「我們不知道當怎樣禱告」是否代表禱告的內容不重要？</h4>
              <p className="text-gray-700 leading-relaxed">
                這節經文不是在貶低禱告的具體內容或教導人放棄清楚表達，而是承認人有限的認知無法總是準確判斷什麼才是真正對自己有益的祈求（如陸可鐸所舉的癌症病人、浪子父親、囚犯的兩難例子）。羅馬書八章27節緊接著說「聖靈照著神的旨意替聖徒祈求」，說明真正重要的不是禱告詞的完美程度，而是聖靈按著神的心意居中調節——這其實是對禱告者極大的釋放：不必因為詞不達意、邏輯混亂而擔心禱告「不夠格」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">泰國睡美人洞救援與聖靈代求的類比，界限在哪裡？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個類比生動地傳達了「即便你說不出口，仍有人在為你行動」的安慰，但讀者需留意：泰國洞穴救援最終結果是全數男孩生還的美好結局，而現實中許多禱告的結局並不總是如此（如陸可鐸自己也提到癌症病人、失智母親的例子，並未承諾「聖靈代求」等同於「問題必然被解決」）。這個比喻的重點應放在「過程中不孤單、有人正在為你行動」的陪伴性安慰，而非暗示每個困境最終都會有皆大歡喜的結局——羅馬書八章28節的「萬事互相效力叫愛神的人得益處」，指向的是神在一切境遇中掌權的信實，而非承諾每個具體祈求都會照人的期待實現。
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
              '你是否曾在禱告時感到無話可說，只剩下嘆息？當時你面臨什麼處境？那段無言的禱告時光，是否仍帶給你幫助？',
              '重讀羅馬書八章22-23、26-27節：根據這段經文，聖靈在禱告這件事上為我們做了什麼？這個想法讓你有什麼感受——充滿希望、困惑，還是懷疑？',
              '回想你自己或身邊人重病、失業、離婚等軟弱的時期，那段時間你是如何禱告的？當時的禱告是否感到特別困難？',
              '是否曾有人像昆尼奧為陸可鐸那樣，在你無法為自己發聲時替你代求？那個人是誰？他的代求如何影響了你的處境？',
              '你是否曾感受過要為「標準正確的事情」禱告的壓力？這種壓力從何而來，又如何影響了你的禱告生活？',
              '羅馬書八章28節說「萬事都互相效力，叫愛神的人得益處」。你目前生活中，是否有讓你不知該如何用話語禱告的事？這節經文能帶給你什麼樣的盼望？',
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
              <h4 className="font-semibold text-green-700 mb-2">😮‍💨 練習「無言的禱告」</h4>
              <p className="text-gray-700 mb-2">下次不知道該如何禱告時，不要強迫自己組織出完整的句子，允許自己單純地嘆息、流淚，或只是安靜地說「聖靈，求祢明白」，然後把接下來的表達交給祂。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📜 抄寫詩篇三十八篇8-9節</h4>
              <p className="text-gray-700 mb-2">
                找一段時間手抄這段經文，並在旁邊寫下你目前生命中一件「心願都在祢面前、歎息不向祢隱瞞」的事。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 為需要「中保」的人代求</h4>
              <p className="text-gray-700 mb-2">
                想一位你認識、目前正處在軟弱或困境中卻難以開口禱告的人，這一週具體為他代求，讓自己也成為聖靈工作的一個管道。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，謝謝祢懂我說不出口的話。此刻我把心中無法用言語表達的重擔交給祢，求祢用說不出的歎息，替我向父神祈求。求祢讓我知道，即便我不知道怎麼禱告，祢知道，而且祢正在為我發聲。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
