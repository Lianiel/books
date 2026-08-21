import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">誰是聖靈？</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、少年時的信仰倦怠——「基督徒好寶寶」的疲憊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶，自己很年輕時就加入教會，充滿熱情，願意挑戰信仰的大山：十幾歲便認真讀經、背誦經文，努力遵守從講台上聽到的每一條誡命——永遠選擇說實話、保持不動搖的信心、常常禱告、樂於付出、大膽相信。他驕傲地別上「基督徒好寶寶」的勳章，渴望登上道德、屬靈與敬虔的巔峰。他坦言自己真的努力過了，但信仰之路變得越來越陡峭：同儕壓力、狂放的荷爾蒙與罪疚感，使他相信自己永遠無法到達那個理想境界。他問：「一個十五歲的孩子會在靈性的追求上感到倦怠嗎？我就是如此。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他向讀者喊話：也許你也懂這種感覺——心中的信仰火焰漸漸微弱，卻不知新的燃料在哪裡。問題不在於沒有尋求，而是即便做了一切知道正確且美好的事，挑戰依然嚴峻，追求信仰反而變成一條艱難的上坡路，仍會感到空虛，感覺少了些什麼，連應付生活的最後一點力氣都將耗盡——一點一滴，日復一日，消耗殆盡。他說，如果這是讀者的感受，上帝知道也在意這樣的感受：祂創造人不是為了讓人過行屍走肉的生活，祂有一份特別的禮物、一位特別的人物要介紹給人認識。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、聖靈是誰？一個難以回答的問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸坦言，從未有人向他清楚解釋過這股力量的來源，即便聖經就在手邊，若要他解釋，依然只能聳肩說：「聖靈是誰？」他觀察到一個有趣的現象：若問「天父是誰？」大家都知道怎麼回答；若問「聖子是誰？」教會裡多數人也能毫不猶豫地告訴你答案；但若問「聖靈是誰？」多數人會露出支支吾吾、說不出話來的窘樣。他認為，這個問題之所以難回答，部分原因在於這個名字本身——上帝作為天父，形象好理解；上帝作為聖子耶穌，概念還算能消化；但上帝作為「靈」，這個詞本身就充滿神祕色彩。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、第一次與聖靈相遇——嬉皮佈道家與拖車屋讀經會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶第一次與聖靈相遇的經歷：高中生涯尾聲，他所居住的德州西部小鎮，來了一位從加州遠道而來的佈道家，駕駛一輛漆成花園圖案的校車，是在1970年代初風靡全國的「耶穌運動」（Jesus Movement）中信主的基督徒，留著及肩長髮、穿著喇叭褲，在學校停車場紮營傳講基督和聖靈的大能。當時的陸可鐸早已放棄攀登屬靈高峰的崎嶇之路，轉而投向酒精、試圖登上另一種飄飄然的巔峰；但這位嬉皮風的佈道家邀請他們參加家庭讀經會，他去了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他來到小鎮邊陲一間拖車屋，屋裡的人他一個也不認識，但大家都很友善。眾人坐在地上一起讀使徒行傳，這是他第一次聽到有人談聖靈的工作——雖然已經想不起確切說了什麼，但當時的感受仍記憶猶新：聖靈是賜生命的朋友，要引領人回家。禱告時，有幾個人用他從未聽過的語言禱告，也問他是否願意這樣禱告，他回答「我願意」，照做了，什麼也沒發生——即便如此，他依然深受感動，因為這些人看起來毫不疲憊，反而充滿活力，談到聖靈時眼中閃爍著光芒。他坦言，故事並沒有像掃羅在大馬士革路上被主光照那樣戲劇化的轉折，他也沒有成為使徒或寫下任何偉大書信，反而認為自己根本不配與聖靈同行，因此連試都沒試——之後多年他過著浪子般的生活，稱自己是基督徒，卻週六晚上混夜店、週日早晨坐在教會長椅上，成了讓人遠離基督的偽君子。直到二十多歲，一位後來成為摯友的人幫助他相信，上帝的恩典大過他的悖逆，他在教會祭壇前跪下，重新踏上信仰道路，饒恕成為他不斷追求與傳講的信息，並進入神學院、在邁阿密和里約熱內盧的教會服事，最終在德州聖安東尼奧定居，成為一名牧師。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、牧師生涯中的油盡燈枯——聖靈找到了他</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸坦言，成為牧師之後，生活再次失衡——他決心努力學習、給弟兄姊妹明智的輔導、解決人們的問題、籌組執事會，盡力滿足每一個挑剔的會友，維持著堅強的外表長達三、四年，但三十多歲時徹底感到油盡燈枯：他突然無法入睡，躺在床上聽著妻子平穩的呼吸聲，想著三個小女兒在走廊另一端熟睡，想到朋友同事、養的狗和金魚也都在睡覺，唯獨自己的思緒像參加計時賽的法拉利跑車極速奔馳，滿腦子是明天要打電話給哪些會友、要做哪些決定，不只一次在幾乎沒睡的情況下站上講台講道，情況相當不妙。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他說：「這是我找到聖靈的時刻嗎？可以這麼說。但更準確的說法是，聖靈找到了我。」在那些夜不成眠的夜晚，他會從床上爬起來，走下樓，跪在沙發旁禱告——那時的他不過是個灰心喪志的人，不是牧師陸可鐸、不是領袖陸可鐸，而是穿著皺巴巴睡衣、筋疲力竭、心裡充滿困惑的門徒陸可鐸。他的禱告彷彿痛苦的呻吟，信仰也像一條磨損的絲線，連假裝堅強的力氣都失去了，只能誠實面對上帝——結果他意外發現，上帝特別偏愛這種誠實的禱告。漸漸地，他開始感受到聖靈的同在，祂溫柔地觸摸、引導，用低聲的呢喃吸引他。當他祈求力量，祂就賜下力量；當他祈求醫治，祂也不只一次做到；當他祈求活力和喜樂，這些都重新回到他的生命中——漫長的寒冬終於過去，宜人的春天終於降臨。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他分享，某天準備講道時讀到耶穌用來形容聖靈的話——「保惠師和朋友」，當下突然有個美妙的體會：「我認識這位聖靈。」那是三十年前的事了，從那時起他不再問「聖靈是誰」，而是稱祂為天國差來的幫手：祂是信徒的最佳盟友，支持我們，是保惠師也是嚮導，安慰我們、為我們指引方向、內住在我們裡面、改變我們、在黑暗的時刻撐住我們，最終帶領我們返回天家。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、聖靈帶著能力而來</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，耶穌不讓門徒在沒有聖靈的情況下展開事工：「我要將我父所應許的降在你們身上，你們要在城裡等候，直到你們領受從上頭來的能力。」（路加福音二十四章49節）他強調，門徒已接受三年裝備，與耶穌圍坐營火旁、陪祂穿越各城、目睹祂驅逐疾病趕跑污鬼，知道耶穌最喜歡吃什麼、聽得懂祂的笑話——但論到耶穌的死與復活，他們還沒準備好；即便看見空墳墓、觸摸過復活的身體、花了四十天聽復活的基督講論天國，這樣還不夠。他引使徒行傳一章8節：「但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒瑪利亞，直到地極，作我的見證。」他總結，聖靈帶著能力而來，這股能力讓人做出正確的選擇、信守承諾、壓制內心的恐懼和失敗的聲音，讓人能從床上爬起來繼續生活，以對的方式為對的事情努力——這是耶穌當時的應許，直到今天依然成立。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、兩種極端：拿聖靈來炫耀 vs. 聖靈糾察隊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸提醒，聖經有超過一百處提到聖靈，耶穌談到聖靈的次數超過教會、婚姻、財務和未來，因為上帝不希望原本要為祂作見證的孩子們一個個壓力重重、身心疲憊、精力枯竭，而是希望人過著每一天、每個小時都能不斷與祂連結並得著更新的生活。但他也提醒要小心兩種極端：一種是「拿聖靈來炫耀」——表現得極度屬靈，讓身旁的人誤以為自己靈性匱乏，好似擁有「特權通行證」，想讓所有人見識自己的醫治恩賜、聽自己說神祕的方言，把事工變成一種讓其他人感覺不敬虔的展示；另一種是「聖靈糾察隊」——壓抑一切看起來不合常理或失控的事物，自封為超自然事件的糾察員，忽視一切無法解釋的現象。他認為，健康的聖徒應該介於兩者之間：有些人擁有孩子般的心，有些人則高舉聖經；有些人坦然接受新鮮的能力，有些人則重視分辨而且謹慎；但他們都在努力跟隨聖靈，緊緊抓住耶穌最後的應許。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">七、十幾種比喻，與那個沒扣上的加油開關</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，聖經用了十幾種比喻來描述聖靈的工作，這證明祂的偉大僅用一種比喻是不夠的：聖靈是為我們指明一切的導師（約翰福音十四章26節）、是上帝的風（約翰福音三章8節）、為我們禱告（羅馬書八章26節）、是聖徒身上天國的印記（以弗所書一章13節）、是平安的鴿子安撫我們、賜恩賜裝備我們、是活水的江河從我們腹中流出滋潤這個世界。他預告，接下來的篇章將一同探究聖靈同在所帶來的莫大好處，無論讀者是渴望更新與聖靈相遇的經歷，或是第一次認識聖靈，上帝都希望人擁有聖靈充沛無限的能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他以一個生活小故事作結：不久前開車發現油箱快空了，停下來加油，加完油卻習慣性地走進便利商店買汽水、和店員閒聊、考慮買熱狗，回到車上取下油槍、鎖上油箱蓋後開車上路——沒多久才發現一件好笑的事：油表顯示油箱竟然還是空的！他推測，不是油槍提早跳停，而是自己忘了扣上加油開關——他什麼都做了，卻唯獨忘了不可少的那一件事。他問讀者：這是不是你的生活寫照？是否忘了自己最需要做的那件事？是否忽視了聖靈？他總結：上帝的靈渴望賜人大能，渴望引導、教導、激勵人，會承擔人不應背負的重擔——生活確實充滿挑戰，但人不必讓這些挑戰主宰生命，因為隨時的幫助，只要前來支取，就在這裡。
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
                '陸可鐸年少時熱心追求信仰，努力遵行一切「正確且美好的事」，卻逐漸感到力不從心與靈性枯乾——這種疲憊不是因為不夠努力，而是因為少了聖靈的力量。',
                '「聖靈是誰？」是教會裡最少被清楚教導的問題——多數信徒能輕易描述天父與聖子，卻對聖靈支支吾吾，這正是這本書要補上的空缺。',
                '第一次與聖靈相遇的經歷不一定戲劇化：陸可鐸在一間拖車屋的讀經會裡，第一次聽見聖靈是「賜生命的朋友」，即便當下沒有立即的轉變，這顆種子仍在多年後結果。',
                '真正找到聖靈的時刻，往往是在油盡燈枯、誠實破碎的禱告中——陸可鐸在牧師生涯的失眠低谷裡，被聖靈溫柔地觸摸、引導、更新。',
                '面對聖靈，有兩種需要警惕的極端：拿聖靈來炫耀、把聖靈當作展示屬靈優越感的工具，以及成為壓抑一切超自然現象的「聖靈糾察隊」——健康的信仰生活介於兩者之間。',
                '「加油卻忘了扣上開關」的比喻提醒我們：即便做了許多屬靈操練，若忽略了聖靈這位「隨時的幫助」，屬靈的油箱依然是空的。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼「聖靈是誰」比「天父是誰」「聖子是誰」更難回答？</h4>
              <p className="text-gray-700 leading-relaxed">
                這與教會歷史上聖靈論（Pneumatology）發展的軌跡有關：早期教會信經對聖父的創造與聖子的救贖有清楚的教義陳述，但對聖靈位格與工作的系統闡述相對較晚（如尼西亞信經對聖靈的描述遠比對聖子簡短）。這不代表聖靈不重要，而是聖靈的工作本質上更傾向「指向他者」而非「自我彰顯」——約翰福音十六章14節說聖靈「要榮耀我，因為他要將受於我的告訴你們」，聖靈的角色正是把焦點引向基督，這也解釋了為何聖靈本身相對「難以描述」，卻無所不在地讓人經歷到基督的同在。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「拿聖靈來炫耀」與「聖靈糾察隊」，如何影響教會歷史上不同的信仰群體？</h4>
              <p className="text-gray-700 leading-relaxed">
                這兩種極端某種程度上反映了教會歷史上靈恩派與非靈恩派之間長期存在的張力：前者有時因過度強調超自然恩賜的展示而招致「炫耀」的批評，後者則有時因過度強調理性與秩序而顯得對聖靈的工作過於謹慎、近乎壓抑。哥林多前書十二至十四章其實正是保羅處理這兩種極端張力的經典教導——保羅既肯定屬靈恩賜的多樣性與價值（十二章），也堅持一切都要「造就教會」、按著次序而行（十四章40節），本身就是「敞開又分辨」這種健康平衡的聖經範例。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">陸可鐸的失眠與職業倦怠經歷，對今日的牧者與服事者有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸描述自己「維持堅強的外表長達三、四年」才崩潰，這種模式在牧者與長期服事者中相當常見——外在角色要求持續給出，內在資源卻沒有相應的補給管道。這提醒服事者：屬靈的疲憊不是不屬靈的表現，而往往是長期忽略與聖靈連結、只顧著「為神做事」卻沒有「與神同在」所累積的結果。誠實的破碎禱告（如陸可鐸夜半跪在沙發旁的禱告），往往比維持體面的服事表現，更容易讓人重新經歷聖靈的更新。
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
              '如果請你分別用一句話形容聖父、聖子、聖靈，你會怎麼說？哪一位最容易描述，哪一位最難？為什麼？',
              '你對聖靈的認識從何而來——是教會的教導、個人讀經的領受，還是其他來源？這些來源如何形塑了你目前對聖靈的看法？',
              '陸可鐸說「聖靈是賜你生命的朋友，來引領你回家」。你是否同意這樣的描述？在你的生命中，聖靈是否曾是這樣一位「賜生命的朋友」？',
              '面對「拿聖靈來炫耀」與「聖靈糾察隊」這兩種極端，你認為自己更容易落入哪一種？你是否認識屬於這兩種類型的人，他們如何影響了你對聖靈的看法？',
              '聖經用了十幾種比喻描述聖靈（導師、風、代禱者、印記、鴿子、活水江河等），哪一種比喻最讓你感到好奇？哪一種讓你有所遲疑或不解？',
              '回想你生命中一段「油盡燈枯」的時期，那時你是否經歷過聖靈溫柔的觸摸與引導？如果有，是怎樣的經歷？',
              '「加油卻忘了扣上開關」的比喻——在你目前的信仰生活中，你是否也做了許多屬靈操練，卻可能忽略了與聖靈連結這件最重要的事？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 查考聖靈的七個比喻</h4>
              <p className="text-gray-700 mb-2">本週花時間查考約翰福音十四章26節、三章8節、羅馬書八章26節、以弗所書一章13節、馬太福音三章16節、哥林多前書十二章1-11節、約翰福音七章37-39節這七處經文，寫下哪一個比喻最貼近你目前的需要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛑 誠實面對自己的疲憊</h4>
              <p className="text-gray-700 mb-2">
                找一段安靜的時間，誠實承認自己是否正處在「維持堅強外表」卻內在枯竭的狀態，用陸可鐸式的誠實禱告向神表達真實的疲憊，而不是用屬靈的語言粉飾太平。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⛽ 每天「扣上開關」</h4>
              <p className="text-gray-700 mb-2">
                設定一個每天固定的時間點（如起床後、睡前），花一分鐘刻意邀請聖靈的同在——不需要複雜的儀式，只需要簡單一句「聖靈，我需要祢」，養成不遺漏這「不可少的一件事」的習慣。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，我承認我常常忘記祢的同在，用盡自己的力氣硬撐，卻忘了扣上那個不可少的開關。求祢像對陸可鐸一樣，在我疲憊破碎的時刻找到我，溫柔地觸摸、引導我。求祢賜給我力量、醫治、活力和喜樂，讓我不再獨自背負不該背負的重擔。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
