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
        <p className="text-gray-500 mt-1">神說：天上要有光體，可以分晝夜，作記號，定節令、日子、年歲，並要發光在天空，普照在地上。事就這樣成了。於是神造了兩個大光，大的管晝，小的管夜，又造眾星，就把這些光擺列在天空，普照在地上，管理晝夜，分別明暗。神看著是好的。有晚上，有早晨，是第四日　創世記一14-18</p>
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
              創造的頭三天，神開展背景，創造了供應者；後三天，神充實舞台，創造了管理者。第四日與第一日相關，第一日創造時間，第四日豐富時間。第四日所造的光體可以管理晝夜，以及定節令、年歲，作記號，使時間有了更豐盛的意義。可以分三方面來探討。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、定節令──在有規律的時間中與神同行</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                頭三天，神尚未造日、月兩個大光，那時已經有晝夜之分。用科學的知識去理解，只要有一個定向光源，加上地球能自轉，就會有晝夜。但單單有晝夜之分，在時間管理上是不足夠的。神的設計，要人有年、月的區別，所以給我們太陽、月亮。地球公轉繞太陽一圈是一年，月球繞地球一圈是一個月。這使我們不僅有了每天的晝夜之分，也有了月與年的時間單位。聖經中講到耶和華的節期，完整記載在利未記廿三章裡。利未記廿三2-44：「你曉諭以色列人說：耶和華的節期，你們要宣告為聖會的節期。……於是，摩西將耶和華的節期傳給以色列人。」其中除了安息日是所有節期的基礎，主要有正月14日的逾越節、七週多之後的五旬節、七月1日的吹角節、七月10日的贖罪日、七月15日的住棚節等。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這些都需要仰賴日、月所提供的年月計算。神喜悅他的子民在時間中與他同行，經過不同的節期，對神的作為有不同的紀念與經歷。正如詩篇六十五11所說：「你以恩典為年歲的冠冕，你的路徑都滴下脂油。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、作記號──在浩瀚宇宙中頌讚神的偉大</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                眾星的功能，主要是作記號，使人能靠它分辨方位。但所謂作記號，還有一個含意，就是讓人從眾星的浩瀚看到神的偉大。如同羅馬書一20所說：「自從造天地以來，神的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物就可以曉得，叫人無可推諉。」記號原文是 אוֹת（owth），與神蹟是同一個字，也有兆頭、紀念、盟約、證據、旗幟的意思。神與挪亞立約，以彩虹為記號，是這個字（創九13）；神要亞伯拉罕為男丁行割禮作為立約的證據是這個字（創十七11）；出埃及的時候，神要摩西在法老面前行神蹟，用的也是這個字（出三12，四8-9）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按目前天文學的觀測成果，地球及太陽系所在的銀河系，共有約一千億個恆星。整個宇宙原估計有二千億個類似銀河系的星系，最新估計再增加10倍，可能有二兆個星系。這些都是神在第四日所造的。為何神要造這麼多星球，造這麼大的宇宙？筆者的答案有兩個：一是讓我們知道神的偉大，如啟示錄四11所說：「我們的主，我們的神，你是配得榮耀、尊貴、權柄的；因為你創造了萬物，並且萬物是因你的旨意被創造而有的。」二是讓我們有一個可近乎無限成長的空間，如啟示錄廿二5所說：「……他們要作王，直到永永遠遠。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於日月星被造的時間，大部分解經者接受近代科學家所提出的答案，相信地球是從太陽分出來的，月球是從地球分出來的。因著有這種先入為主的觀念，所以會說，在第一天的創造時，那個光已經是太陽光，只是第一天的時候看不清楚，到了第四天才看清楚，所以說第四天造了日、月、星。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種解釋若可接受，我們需要進一步問：「日、月、星是在第一日造的，還是起初『神創造天地』的時候造的？」如果太陽一定先於地球，那麼他不能在第一日被造，而必須在「起初」就被造。然而當神剛創造天地時，全宇宙都是黑暗的，那時並沒有太陽。若要符合創世記一1的記載，地球一定比太陽更早被造。若這樣，就不能說：「第一日已造光體，只是還看不清楚光體。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們只能有兩個選擇，一個是接受近代科學的理論，太陽被造早於地球，早於第一日。若這樣，聖經的記載就只是神學的、寓意的，不是歷史上的事實。第二個選擇就是相信聖經記載的乃是歷史上的事實，真的先有地球，之後有光，再之後才有天上的光體。若這樣，神在第四天所做的，乃是將第一日的光集中在許多的光體上，讓它們去發揮除了分晝夜以外的各種豐富的功能。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孫大程博士所寫的《創世以來的奧秘》，以科學的角度指出大爆炸理論的錯誤；也提供了許多資料，幫助我們相信宇宙是年輕的，在大約一萬年前，神造了地球、太陽、月亮、眾星，並賦予它們成熟的樣貌，被造次序是照聖經所記載的，這樣的觀點是筆者所認同的。為避免佔用太多篇幅，鼓勵有興趣的人去讀孫博士的書。本書則以「以經解經」及「屬靈生命」為優先。
              </p>
              <p className="text-gray-700 leading-relaxed">
                每當我們看到浩瀚的宇宙，或參與科學研究，更加看到宇宙的浩大，就要發出讚美，加入啟示錄四11天上敬拜讚美神的行列。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、發光管理——藉著發光功能執行管理權柄</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                日、月、星的管理功能是重要的，因為有二次出現「管」這個字，原文是 מֶמְשָׁלָה（memshalah）（名詞），另有一次是「管理」這個字，原文 מָשַׁל（mashal）（動詞），都是管轄、統治的意思。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一16-18：「於是神造了兩個大光，大的管晝，小的管夜，又造眾星，就把這些光擺列在天空，普照在地上，管理晝夜，分別明暗。神看著是好的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神對夏娃說，你丈夫必管轄你，用這個字（創三16）。約瑟作埃及全地的宰相，用這個字（創四十五8，26）。約瑟曾作一夢，夢見太陽、月亮和十一個星都拜他。這夢的應驗，就是約瑟作了埃及的宰相。這夢裡面太陽代表父親，月亮代表母親，星星是十一位兄弟。聖經其他地方也常將星星與有生命的體系做對比，例如，神稱天使為眾星（伯卅八7），亞伯拉罕有數不盡的後裔，神用天上眾星的數量來作比喻（創十五5），以賽亞先知說天使長是明亮之星、早晨之子（賽十四12），神應許得勝者，要把晨星賜給他（啟二28），並且主自己說：「我是明亮的晨星」（啟廿二16）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上這些都告訴我們，神是光，他願意將他的光分享給日月星，讓它們發光普照大地；也願意將光分享給信他、跟隨他的人，讓人能為主發光。神是管理者，他將管理權柄分享給日月星，讓它們管理晝夜、節令、年歲；也要將管理的權柄分享給信他、跟隨他的人，讓人能去管理各樣的人事物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神給予日月眾星管理的權柄，也將管理的權柄與能力給人。形成權柄的體系，包括家庭的權柄、學校職場的權柄、國家的權柄、教會的權柄。正如羅馬書十三1所說：「在上有權柄的，人人當順服他，因為沒有權柄不是出於神的。凡掌權的都是神所命的。」主耶穌說：「父所做的，子才做。」他給了我們順服權柄最好的榜樣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                太陽月亮星星的榜樣，不僅有管理的權柄，同時也在散發光芒，它們從神得到光，並且去分享光。這光主要是愛的能力。神要人在管理中分享愛，在愛的分享中執行管理的權柄。有愛有光的管理才會是好的管理。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                第四天的創造與希伯來書十一章第四位信心英雄亞伯拉罕有關，亞伯拉罕是信心之父，保羅以亞伯拉罕的例子來說明「因信稱義」的真理（羅四1-5）。第一位信心英雄亞伯也是因信稱義（來十一4），相對於亞伯拉罕是信心之父，亞伯可說是信心之祖。第一日的光可代表亞伯，他的信心很單純，使他的生命充滿光。第四日的光體可代表亞伯拉罕，同樣對神有信心，但亞伯拉罕經歷許多信心的功課，促使他的信心不斷更加成熟豐盛，像這些光體所呈現的。亞伯沒有後裔，但亞伯拉罕有如同天上眾星那麼多的後裔，他們不僅要效法亞伯拉罕的信心（約八39，羅四11-16），且要成為國度，會產生君王，有管理的權柄（創十七6）。有一天，神指著天上的眾星對亞伯拉罕說，你的後裔將要如此，那天上眾星正是神第四日所造的。若沒有造天上眾星，神就不能將這樣的應許給亞伯拉罕。今天神也讓我們藉著天體提供的節令與神同行，因日月星的見證頌讚神，效法日月星發光管理，並藉眾星的異象生養眾多。
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
                '日月的設立使人有年、月的時間單位（地球公轉一年、月球公轉一月），並支持耶和華節期的計算（利廿三），神喜悅子民在節期中與祂同行、紀念祂的作為。',
                '「記號」（אוֹת，owth）與「神蹟」同字，也有兆頭、盟約、證據之意；眾星除了辨別方位，也讓人從宇宙的浩瀚看見神的偉大（羅一20），並讓人有近乎無限成長的空間（啟廿二5）。',
                '關於日月星被造的時間有兩個選擇：接受近代科學（太陽先於地球被造，聖經記載僅為神學寓意）或相信聖經歷史事實（地球先於太陽，第四日將第一日的光集中在光體上）；作者採後者立場，並援引孫大程博士的科學論述。',
                '日月星「管理」（מֶמְשָׁלָה／מָשַׁל）晝夜、節令、年歲，神也把管理權柄賜給人，形成家庭、職場、國家、教會的權柄體系（羅十三1）；有愛有光的管理才是好的管理。',
                '第四日創造對應信心之父亞伯拉罕（來十一），神指著眾星應許亞伯拉罕後裔繁多（創十五5、十七6），信徒當效法亞伯拉罕的信心，並藉著日月星的見證與神同行。',
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
              '神造光體有哪三方面的功用？跟你有何關係？',
              '第四日創造光體，所預表的人物是誰？神給他關於後裔的應許是什麼？',
              '你目前在生活中有哪些層面需要執行管理的權柄？要怎麼發揮有愛、有光的管理呢？',
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
