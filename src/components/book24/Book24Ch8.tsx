import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神的主權與最終供應</h2>
        <p className="text-gray-500 mt-1">美國的命運、神的國度與對剩餘者的指示（4.19-4.22）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-teal-700 text-base mb-2">4.19 歐洲核研中心：「我是神！除我以外，別無他神！」</h3>
              <p className="text-gray-700 leading-relaxed">
                主就歐洲核研究中心（CERN）的粒子加速器實驗發出警告。主描述了那些科學家的心態：
                「他們忽忘了一個顯而易見的事實：誰創造了我？明白了吧！他們可以玩我給的積木，
                但是他們的生命是靠著我的愛和能力來維繫的；他們可以運用各樣的定理，
                達到各樣的目的，但是他們是我創造的，所有的定理也是我創造的。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主對那些企圖超越神的科學家說：「我不是見一個，斬一個，那種所謂的即偉大又殘忍的王。
                我可不是那樣的王。溫柔的人，我以溫柔待他；軟弱的人，我以柔和待他；
                膽怯的人，我張開雙臂擁抱他；惱怒殘忍的人，我以猛烈強壓待他；
                對於騙子，我讓他們中了自己的詭計；對於惡人，我揮舞手中的鐵棍。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主指出這些驕傲的科學家忽視了最根本的問題：他們所有的才智都來自神，
                卻用這才智否認神。主說他們就像彼拉多一樣——「心裡清楚不應該把我釘十字架，
                但是，一方面他害怕失去凱撒的賞識，毀了他的仕途前程；另一方面，如果他不釘我，
                就會發生暴動和叛亂。最後他只好釘死我。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-base mb-2">4.20 他們必定忘記所愛慕的一切</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「當地球遭到毀滅的時候，從前肥沃的土地不再被人念念不忘，對所有失去的一切，
                人們只有心酸痛苦的回憶。然後他們將從廢墟中尋求我。那時他們才意識到
                戀慕世界所帶來的後果就是赤身露體和一貧如洗。當他們來找我的時候，
                我會張開擁抱他們，用膏油塗抹他們的傷口，用聖靈復興他們的人生。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主解釋為什麼允許人們失去他們所愛的東西：「我是想告訴你，不要為那些被留下來的人傷心難過。
                這是他們自己選擇的命運。他們喜歡孤軍奮戰，一切靠自己。他們整個人生的目標就是成功。
                是他們自己選擇了這種生活方式，選擇了世界以及屬世的生活，所以他們個個在我面前都是
                瞎眼和赤身的。但是為了拯救他們的靈魂，我允許災難發生。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也有溫柔的保證：「無法避免的災難僅僅是讓我的孩子們的靈魂轉向我，轉向真理的一個機會和平臺。
                由此可知，無法避免的災難不過是讓我的孩子們的靈魂轉向我，轉向真理的一個機會和平臺。
                你看，一旦把房子立在沙土上，雨來水衝，把房子沖走的時候，他就開始意識到把房子蓋在磐石上的重要性。
                那時我會去教導他們。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-base mb-2">4.21 美國的死亡</h3>
              <p className="text-gray-700 leading-relaxed">
                主就美國的屬靈狀況發出沉重的宣告。主說：「你們知道，美國玩的都是表面功夫：
                耀武揚威的武力威脅，北極地區的軍事演習都是做樣子給別人看的。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主揭示了美國領袖的問題：「被稱之為總統的人物，就是靠欺騙手段，用詭計和心計登上
                總統寶座的人，只是裝模作樣給別人看看。災難來臨的時候，他會裝腔作勢，以掩蓋一人
                獨統天下的願望和摧毀國家所有主權的事實。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                然而主也留下了盼望：「我是跟那些一直守著我異象的美國人說：就是那些拒絕跟外邦人
                睡覺和不能戰勝貪食者的人民。那些貪婪的人操縱左右，一心想過舒適生活但又無知的平民百姓。
                你們要勇往直前！我必親自與你們同在，凡是計畫用來攻擊你們的器械，必全然腐朽，
                無有功效。你們必要從灰塵中興起，拯救你們的國家，遵循我的國度原則，
                釋放所有的人，擺脫暴君的壓迫。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-base mb-2">4.22 給留下來的人的供應和指示</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「今晚我想跟你談一談靈命的成長。我在你身上所做的一切工作都是為了你靈命的成長，
                就是讓你的靈人長得高大豐滿，堅定平穩，根基穩固，預備應對各樣的環境。
                因為你所面對的現實狀況，也就是即將發生的混亂，對我來說，都是在屬靈層面，
                而不是在屬世和屬地層面的。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主對留下來的人給出具體的供應應許：「我會把你安置在無人居住，被人遺棄的地方。
                那些地方可以作為你們安全的避難所。那裡有豐富的水源和食物，以及天然的洞穴。
                當年天使如何在曠野降下嗎哪，我也如何給你們賜下足夠的糧食。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主強調醫治的方法：「永遠記住，得醫治只需要具備兩個條件：一個病人，一位信徒。
                如果一個基督徒祈求我醫治別人，不管是大聲的禱告，還是內心默默的禱告，
                我都會通過他們的禱告醫治病人。其它什麼都不需要了。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主最後強調領袖的重要性：「在他們當中，有一個人將被呼召出來做領袖，
                我要賜給他/她屬天的知識和智慧。所以保護這位領袖，對完成我們的使命至關重要。
                絕不允許魔鬼在你們中間，使用紛爭，誤解，抱怨，嫉妒，分裂你們。
                要謹慎警醒，防備這些有毒素的東西。聚集在一起，就可以生存下來；
                脫離大家，沒有了彼此的支持，就會有很多潛在的危險。」
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
            <ul className="space-y-2">
              {[
                '神的主權超越科學和政治權力——所有人類的才智和能力都來自神，否認神是最大的悖論。',
                '失去所愛慕的事物是讓人轉向神的最後機會，災難本身不是目的，而是歸回的邀請。',
                '神對美國仍有計畫，會在大復興後使用它；但領袖的欺騙和腐敗將使國家付出沉重代價。',
                '神為留下來的人預備了偏遠安全的藏身之處，有超自然的食物、水和醫治供應。',
                '末世群體的凝聚力至關重要——紛爭、嫉妒和分裂是魔鬼最慣用的武器，必須警醒防備。',
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
              <h4 className="font-semibold text-gray-800 mb-2">科學與信仰的對話</h4>
              <p className="text-gray-700 leading-relaxed">
                主對CERN科學家的批評，並非反對科學本身，而是反對「用被造物的法則來否認造物主」的驕傲。
                許多偉大的科學家——牛頓、開普勒、法拉第——都是虔誠的基督徒，
                他們在科學中看見神的智慧和榮耀。問題不是科學探索本身，
                而是將自然法則視為無需神的「自足系統」，忽略了「這些法則從哪裡來？」的根本問題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「房子立在沙土上」——末世的轉化機會</h4>
              <p className="text-gray-700 leading-relaxed">
                馬太福音7:24-27的「磐石和沙土」比喻在本書中獲得了末世性的詮釋。
                書中描述的災難，其目的之一是讓那些「房子立在沙土上」的人，
                在沙土崩塌之後認識磐石的重要性，從而轉向神。
                這是一種充滿慈悲的末世觀：即使最嚴重的審判，也有神拯救靈魂的目的在其中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">末世群體的凝聚力與屬靈社群的建立</h4>
              <p className="text-gray-700 leading-relaxed">
                使徒行傳2:42-47描述的早期教會，在極大的壓力下展現了驚人的凝聚力——
                他們「彼此相通」，「分享食物」，「有需要的人沒有一個缺乏的」。
                本書強調的末世群體建立，與這個模式高度吻合。
                在末世中，個人無法單獨生存，必須在有愛心和謙卑精神的群體中彼此倚靠。
                現在就開始建立這樣的關係，是最重要的末世預備之一。
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
              '思考「失去所愛慕的一切」這個可能性——你認為你的信仰是否足夠堅固，能在失去一切後仍然倚靠神？',
              '書中描述末世群體需要強的凝聚力——你目前所在的信仰群體有這種關係的基礎嗎？你可以做什麼來加強它？',
              '神承諾「你禱告，我就醫治」——你相信神今天仍然行神蹟醫治嗎？如何讓這個信心更加堅定？',
              '對於「神仍然對美國有計畫」的說法，你有什麼看法？一個國家可以悔改和蒙神的恩典嗎？',
              '主說「你生命中的挑戰都是屬靈層面的，而不是屬地的」——這個視角如何改變你面對日常問題的方式？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立末世信仰群體</h4>
              <p className="text-gray-700 mb-2">開始刻意建立可以在末世中同行的關係。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>識別三到五個與你信仰相近、關係可信賴的人</li>
                <li>建立定期的禱告和彼此分享的習慣</li>
                <li>實踐「彼此相通」——主動分享你的資源和時間</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 神蹟醫治的信心步驟</h4>
              <p className="text-gray-700 mb-2">操練為他人禱告，相信神的醫治大能。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀馬可福音16:17-18（神蹟的應許）</li>
                <li>下次有人生病，主動問：「我可以為你禱告嗎？」</li>
                <li>以信心禱告，不管當下看到的結果如何</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 以屬靈眼光看世界</h4>
              <p className="text-gray-700 mb-2">培養從神的角度理解世界事件的習慣。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選一個當前的重大世界事件，在禱告中問神它的屬靈意涵</li>
                <li>不因世界的敗壞而絕望，而是看到其中「轉向神」的可能</li>
                <li>為你的國家和領袖代禱</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，感謝你是掌握萬物的神，沒有任何人或力量能超越你。
                求你賜我屬靈的眼光，在每一件事中都看見你的主權和目的。
                幫助我建立真正的信仰群體，彼此相愛、扶持，預備在末世的黑暗中成為你的光。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
