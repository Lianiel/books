import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">日月與眾星</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              創造的前三天，神開展了背景舞台，創造了供應舞台所需的基礎；後三天，充實了供應者。第四日對應第一日相關，第一日造初始時間（晝夜），第四日豐富時間——管理晝夜、定節令、年歲、作記號——使時間有了更豐盛的意義。可以分三方面來探討。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、定節令——在有規律的時間中與神同行</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三天尚未造日月，那時已經有晝夜之分，用科學的知識去解釋，只要找到起源，加上地球自轉，就會有晝夜之分。但日月在時間管理上更有其設計：要有年有月，月的區別——太陽、月亮、地球公轉繞太陽。地球繞太陽一圈是一年，月亮繞地球一圈是一個月，這使我們不僅有每天的晝夜之分，也有月和年的時間單位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                完整記載在利未記二十三章：「摩西將耶和華的節期傳達給以色列人。」主要有正月14日的逾越節、七週之後的五旬節、七月1日的吹角節、七月10日的贖罪日、七月15日的住棚節等。這些節期依循耶和華的計劃，提供年度的神聖時程表，神要求他的子民在不同的節期，將其作為有不同的紀念與經歷，正如詩篇六十五章11節所說：「你以恩典為年歲的冠冕，你的路徑都滴脂油。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這些節期服從了耶和華的時間安排，神要求他的子民在不同的節期中，以不同的方式紀念與經歷神的同在。節期的輪轉讓信徒在時間中與神同行，提醒我們每一年都是在神的恩典中度過。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、作記號——在浩瀚宇宙中彰顯神的偉大</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                眾星的功能，主要是作記號，使人能藉此分辨方位，但所謂作記號，還有一個更深的含意，就是讓人從眾星的浩瀚看到神的偉大。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <p className="text-sm text-indigo-800 font-semibold mb-2">「記號」原文 אוֹת (owth) 的多重含意：</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• 彩虹（創九13）—— 神與挪亞立約的記號</div>
                  <div>• 割禮（創十七11）—— 神與亞伯拉罕立約的記號</div>
                  <div>• 神蹟（出三~四8-9）—— 神要摩西在法老面前行神蹟</div>
                  <div>• 眾星（創一14）—— 神在宇宙中的記號</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                接目前天文學的觀測成果，地球及太陽系所在的銀河系，共有約一千億個恆星，整個宇宙中有約二千億個銀河系的星系，最新估計再增加10倍，可能有二兆個星系！這都是神在第四日所造的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為何要造這麼多星球？一是讓我們讚神的偉大，如啟示錄四章11節說：「我們的主、我們的神，你是配得榮耀、尊貴、權柄的；因為你創造了萬物，萬物是因你的旨意被創造而有的。」二是讓我們在浩瀚宇宙中感受到神的偉大，使我們藉此與神同行。羅馬書一章20節說：「自從造天地以來，神的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物就可以曉得，叫人無可推諉。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                關於日月是被造的時間，大部分解釋者接受近代天文學家所提出的答案。若接受聖經記載乃是歷史上的事情，先有地球，再之後有天上的光，那麼神在第四天所造的，乃是第一日的光集中在許多的光體上，讓它們去承擔各種管理的功能。每當我們閒暇看到宇宙的浩大，就要發出讚美，加入充滿讚許四天上仰望神的行列。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、發光管理——藉著發光功能執行管理樞紐</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章16-18節：「神造了兩個大光：大的管晝，小的管夜；又造眾星。神把這些光擺在天空，普照在地上，管理晝夜，分別明暗；神看著是好的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                日、月、星的管理功能是重要的，因為有二次出現「管」這個字，原文是 מֶמְשָׁלָה（memshalah），另外一次是「管理」這個字，原文是 מָשַׁל（mashal，動詞），都是管轄、統治的意思。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟夢見太陽、月亮和十一個星都跪拜他（創三十七8、26），這夢的意義就是約瑟作了以色列家及全地的宰相；夢裡面太陽代表父親，月亮代表母親，星星是各位兄弟。聖經其他地方也常將星星與有生命的體系做對比，例如：神將亞伯拉罕的後裔比作星的數量（創十五5）；耶穌應許得勝者，要把晨星給他（啟二28）；並且自己說：「我是明亮晨星」（啟廿二16）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神委任今日眾星管理的樞紐，就是要將管理的樞紐交付給人，人以不同形式的體系來執行，包括我們的家庭、教會、國家，正如羅馬書十三章1節所說：「在上有權柄的，人人當順服他，因為沒有權柄不是出於神的。」主耶穌說：「人子來，並不是要受人的服侍，乃是要服侍人……」他給了我們執行管理的能力，以愛在管理中分享，有愛有光的管理才能越來越好。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第四天的創造與希伯來書十一章第四位信心英雄亞伯拉罕有關。亞伯拉罕是信心之父，以亞伯拉罕的例子來說明「因信稱義」的真理（羅四1-5）。第一位信心英雄亞伯也是因信稱義（來十一4），相對於亞伯拉罕是信心之父，亞伯可說是信心之祖。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一日的光可代表亞伯拉罕，同樣面對神的召喚，亞伯拉罕經歷許多光體的功課，使他的信心不斷更加成熟豐盛，像光體的數量一樣的多。亞當沒有後裔，但亞伯拉罕竟有許多天上星星更多的後裔（羅四11-16），且逐漸成為國度、生出君王、有管理的樞紐（創十七6）。有一天，神指著天上的星星告訴他：你的後裔要如此之多，因此若沒有透過天上眾星，神就不能將這樣的應許給亞伯拉罕。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今天神也讓我們藉著天上光體跟著神的旨意與神同行，因日月眾星正是神在管理，亞伯拉罕的後裔如星的數量是神的應許，我們的後裔與影響力也當如此豐盛，如同眾星照耀大地，為那許多後裔指引方向。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '第四日對應第一日：第一日造晝夜（光），第四日造管理時間的日月星，使時間有了年、月、日的完整架構。',
                '神造日月星有三大功用：（1）定節令——在時間中與神同行；（2）作記號——彰顯神的偉大，讓人認識神；（3）管理樞紐——執行管理的職能。',
                '「記號」原文 אוֹת (owth) 與割禮記號、彩虹記號、摩西神蹟是同一個字，顯示眾星是神立約和彰顯主權的標誌。',
                '目前天文學估計宇宙有二兆個星系，每個星系有千億顆星——這都是神所造的，目的是讓人藉著受造物看到神的永能和神性（羅一20）。',
                '日、月、星的管理功能（原文 מָשַׁל）指向一種委任管理——神委任人在各自的崗位上執行管理，包括家庭、教會、國家。',
                '亞伯拉罕是第四天的信心英雄，他的後裔如星的數量（創十五5），是神藉著天上眾星賜給他的應許，信心的管理必帶來豐盛的後裔。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '神造光體有哪三方面的功用？這三方面與你個人的生命有何關係？',
              '第四日創造光體，所提及的人物是誰？神給他創造後裔的恩典是什麼？這對你有什麼激勵？',
              '你日常在生活中有哪些地方需要執行管理的樞紐（家庭、工作、教會）？要怎麼發揮有愛、有光的管理呢？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
