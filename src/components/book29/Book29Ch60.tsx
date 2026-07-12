import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch60() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第60章</h1>
        <h2 className="text-xl font-semibold text-gray-700">基督的預表</h2>
        <p className="text-gray-500 mt-1">以色列原來愛約瑟過於愛他的眾子……主耶穌基督是天父最喜悅的獨生愛子。　創世記卅七3，太三17</p>
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
              創世記總共有八位最突出、最重要的人物，分別是亞當、亞伯、以諾、挪亞、亞伯拉罕、以撒、雅各、約瑟，他們在八方面預表基督，其中又以約瑟的預表最為完整。創世記第一章創造的八個過程，指向這八個人物；這八個人物又指向末世要降生且末日要再來的基督。這位基督將救贖以色列人及外邦人，且揀選其中的得勝者在全地的禧年國度中作王掌權，最後帶領全人類凡信靠他的人進到永恆的新天新地。本章分兩大段來分享，第一大段講約瑟對基督的預表，第二大段講八大人物對基督的預表。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、約瑟對基督的預表</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟是舊約人物中最像基督的一位，總共在十七方面預表基督。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀》，頁96）</span>
              </p>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-indigo-700">一、為父所愛</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟是父親雅各最愛的兒子：「以色列原來愛約瑟過於愛他的眾子，因為約瑟是他年老生的……」（創卅七3）主耶穌基督是天父最喜悅的獨生愛子：「從天上有聲音說：這是我的愛子，我所喜悅的。」（太三17）我們信基督，與基督聯合，也成了天父最愛的兒女：「凡接待他的，就是信他名的人，他就賜他們權柄，作神的兒女。」（約一12）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">二、好牧人</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟與哥哥們一同作牧羊人：「雅各的記略如下。約瑟十七歲與他哥哥們一同牧羊。」（創卅七2）耶穌也是群羊的大牧者，是願意為羊捨命的好牧人：「10盜賊來，無非要偷竊，殺害，毀壞：我來了，是要叫羊（或作：人）得生命，並且得的更豐盛。11我是好牧人；好牧人為羊捨命。」（約十10-11）舊約中有好幾位牧人，例如亞伯拉罕、以撒、雅各、約瑟、摩西、大衛等。因著大衛作過牧人，他才能寫出詩篇廿三篇如此意境幽美的詩句。到了新約時代，牧師一詞就是由牧人而來，而我們被神揀選的人，包含小組長及每位信徒，都當學習耶穌的榜樣作牧人，他是大牧人，我們是小牧人。因此牧人是基督的身分，也是基督徒一個很重要的身分。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">三、為父差遣到弟兄處</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟被父親雅各差遣，前往探望他的哥哥們（創卅七13-14）。主耶穌則受天父差遣來到世上，探望他的弟兄猶太人：「10他在世界，世界也是藉著他造的，世界卻不認識他。11他到自己的地方來，自己的人倒不接待他。」（約一10-11）約瑟不辭勞苦，輾轉尋找哥哥們；基督也是付上許多代價，來到猶太弟兄的面前：「11因那使人成聖的和那些得以成聖的，都是出於一。所以，他稱他們為弟兄也不以為恥，12說：我要將你的名傳與我的弟兄，在會中我要頌揚你。」（來二11-12）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">四、為弟兄所憎恨</span>
                  <p className="text-gray-700 leading-relaxed mt-1">受父親寵愛的約瑟被哥哥們嫉妒，約瑟的異夢更威脅到他們，因此他們憎恨他，想要殺他（創卅七4-8,18-19）。主耶穌來到世上，預備將來作王，希律王得知這消息就下令殺了伯利恆附近所有的男嬰，免得他的王位不保（太二3-16）。法利賽人則認為耶穌威脅到他們的宗教地位，因嫉妒而恨惡耶穌，如約翰福音七7所記：「世人不能恨你們，卻是恨我，因為我指證他們所做的事是惡的。」約翰福音十五24-25也說：「24我若沒有在他們中間行過別人未曾行的事，他們就沒有罪；但如今連我與我的父，他們也看見也恨惡了。25這要應驗他們律法上所寫的話，說：他們無故恨我。」</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">五、被弟兄設計謀害</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟被他的哥哥們設計謀害（創卅七20），耶穌也被文士、法利賽人設計謀害，如約翰福音十一53所記：「從那日起，他們就商議要殺耶穌。」耶穌講葡萄園的比喻，也明說這件事：「13園主說：我怎麼辦呢？我要打發我的愛子去，或者他們尊敬他。不料，園戶看見他，就彼此商量說：這是承受產業的，我們殺他罷，使產業歸於我們！」（路二十13-14）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">六、被奪去外袍</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟的彩衣被奪走（創卅七23），耶穌在十架上，他的衣服也被兵丁們瓜分，如約翰福音十九23-24所記：「23兵丁既然將耶穌釘在十字架上，就拿他的衣服分為四分，每兵一分；又拿他的裡衣，這件裡衣原來沒有縫兒，是上下一片織成的。24他們就彼此說：我們不要撕開，只要拈鬮，看誰得著。這要應驗經上的話說：他們分了我的外衣，為我的裡衣拈鬮。兵丁果然做了這事。」</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">七、被帶到埃及</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟被賣到埃及為奴：「有些米甸的商人從那裡經過，哥哥們就把約瑟從坑裡拉上來，講定二十舍客勒銀子，把約瑟賣給以實瑪利人。他們就把約瑟帶到埃及去了。」（創卅七28）耶穌出生不久，也為了逃避希律王的追殺而到了埃及（太二13-15）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">八、售以奴隸價錢</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟以奴隸的價錢被哥哥所賣：「講定二十舍客勒銀子，把約瑟賣給以實瑪利人。」（創卅七28）耶穌也以奴隸的價錢被猶大所賣：「我把他交給你們，你們願意給我多少錢？他們就給了他三十塊錢。」（太廿六15）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">九、受厲害試探</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟受女主人波提乏妻子的試探：「這事以後，約瑟主人的妻以目送情給約瑟，說：你與我同寢罷！」（創卅九7）耶穌則在四十晝夜禁食禱告後，受魔鬼的試探：「當時，耶穌被聖靈引到曠野，受魔鬼的試探。」（太四1）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十、被誣告</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟受主人波提乏的妻子誣告：「婦人把約瑟的衣裳放在自己那裡，等著他主人回家，就對他如此如此說：你所帶到我們這裡的那希伯來僕人進來要戲弄我，我放聲喊起來，他就把衣裳丟在我這裡，跑出去了。」（創卅九16-18）耶穌則被猶太人的宗教領袖誣告：「祭司長和全公會尋找假見證控告耶穌，要治死他。雖有好些人來作假見證，總得不著實據。……」（太廿六59-60）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十一、被捆綁入獄</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟因被誣告而入獄：「約瑟的主人聽見他妻子對他所說的話，說：你的僕人如此如此待我，他就生氣，把約瑟下在監裡，就是王的囚犯被囚的地方。於是約瑟在那裡坐監。」（創卅九19-20）耶穌也因被誣告而被捆綁交給巡撫：「就把他捆綁，解去，交給巡撫彼拉多。」（太廿七2）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十二、有上帝同在</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟無論身處何處都有神的同在（創卅九2,21,23），耶穌無論身處何處也都有天父的同在，如耶穌自己所說：「看哪，時候將到，且是已經到了，你們要分散，各歸自己的地方去，留下我獨自一人；其實我不是獨自一人，因為有父與我同在。」（約十六32）</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十三、與二囚同處，一得救一失喪</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟被害入獄時，與酒政、膳長兩位囚犯同處，結果酒政得救，膳長被處死，正如約瑟為他們解夢的預言（創四十2-3,21-22）。耶穌被釘在十字架上時，左右兩邊也各有一位犯人，一位信耶穌而得救，另一位則因不信耶穌而到地獄去了（路廿三32-43）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十四、受苦後得大榮耀</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟經歷苦難，成為宰相（創四十一41），耶穌也是先降為至卑，後成為至高，他在受了十架苦難後，成為全人類的救主，在天上掌權，將來也要在全世界掌權作王，如腓立比書二9-11所說：「所以，神將他升為至高，又賜給他那超乎萬名之上的名，叫一切在天上的、地上的，和地底下的，因耶穌的名無不屈膝，無不口稱耶穌基督為主，使榮耀歸與父神。」</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十五、曾為弟兄所不認得</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟打扮成埃及人的樣式，所以他的哥哥們到埃及時，認不出約瑟是他們的弟弟（創四十二7-8）。耶穌來到世上，猶太人也認不得他（羅一1-3，十一7-8）。現今耶穌雖大有榮耀，也只有基督徒認得他，但將來有一天猶太人會認出他來。如同約瑟的哥哥們是在以色列全家族要滅亡的最艱難時刻來到埃及買糧食，約瑟直接告訴他們自己的身分（創四十五3），將來有一天列國圍攻耶路撒冷，整個以色列民族幾乎要被滅絕的時候，耶穌要從天上大有榮耀的降臨，那時他們就認得耶穌了（亞十四4,9，啟十九11-21）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十六、寬恕弟兄並恢復關係</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟以神的眼光看待哥哥們對他做的事，因而能寬恕他們、與他們恢復關係（創四十五1-15）。耶穌也要寬恕猶太人，並與他們恢復關係（亞十二10）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十七、地上萬國謁見並尊為大</span>
                  <p className="text-gray-700 leading-relaxed mt-1">當天下饑荒甚大時，約瑟掌管全地，不僅他的兄弟，連週邊其他國家的人也都到埃及約瑟那裡買糧食（創四十一57），預表耶穌再來之後，萬國萬民也都要到耶路撒冷謁見敬拜他（賽二2-3，四十九6-7）。住棚節除了預表末世萬國萬民謁見耶穌並尊為大（亞十四16），更預表世界將進入禧年國度，所有得勝者將與耶穌一同作王，享有千年平安的日子（啟二十4），如同以色列全家族在歌珊地得享平安。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、八大人物對基督的預表</h3>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-indigo-700">一、亞當</span>
                  <p className="text-gray-700 leading-relaxed mt-1">亞當受造，被賦予管理活物的權柄及治理全地的使命，為使亞當能完成這使命，神按著自己的形像造亞當。這事預表基督將要治理全地，且基督擁有神完整的形像（腓二6），是神本體的真像（西一15，來一3）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">二、亞伯</span>
                  <p className="text-gray-700 leading-relaxed mt-1">亞伯有光明的生命，是信心英雄榜的第一位。亞伯因著信領受神的啟示，獻羊為祭，是第一個祭司，也是第一個殉道者。預表基督是生命之光（約一4-9，十二12,九5），是永恆的大祭司，殉道成為贖罪祭，救贖全人類（來九11-12）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">三、以諾</span>
                  <p className="text-gray-700 leading-relaxed mt-1">以諾與神同行三百年，而後升天到神寶座之處。以諾有高升的生命。預表基督是名為以馬內利、使神與人同在、人與神同行的那一位。也預表耶穌復活四十天之後被提升天，坐在神寶座的右邊（徒一9，來一3）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">四、挪亞</span>
                  <p className="text-gray-700 leading-relaxed mt-1">挪亞五百歲生閃、含、雅弗，養育裝備他們來造方舟，接著挪亞走遍全地傳神義道，約有八十年。而後經歷洪水滅世，從水中出來，如同復活，開展新人類的世代。預表基督揀選十二門徒、訓練造就他們，並且走遍以色列全地傳神國福音，三年半之後，經歷死而復活，將復活的生命賜給凡信靠他的人，產生融合猶太人、外邦人的新人，是新一代的神子民。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">五、亞伯拉罕</span>
                  <p className="text-gray-700 leading-relaxed mt-1">亞伯拉罕是信心之父，也是多國之父，因信神的話而被神稱義。他的記號是祭壇，所到之處皆築壇獻祭，求告神的名。他是一位代禱者，為姪兒羅得爭戰與代禱。他經歷多重的信心功課，包括獻上獨生愛子以撒，而擁有成熟的生命。預表基督有完全的信心，獻上自己，完成救恩工作，成為多國之父。基督在世上一直是禱告的人（可一35），現今在神的右邊也長遠為我們代求（羅八34，來七25）。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">六、以撒</span>
                  <p className="text-gray-700 leading-relaxed mt-1">以撒是蒙愛之子，預表基督是蒙愛之子。以撒順服父親走向祭壇，預表基督順服天父走上十字架。以撒的記號是活水井，他得許多活水井，預表基督供應聖靈活水。以撒有安息的生命，父親吩咐老僕人從本家為他尋得最合適的妻子，預表基督有安息的生命，天父差遣聖靈來充滿教會，使教會成為基督的新婦。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">七、雅各</span>
                  <p className="text-gray-700 leading-relaxed mt-1">雅各的記號是牧羊的杖，他花了幾十年時間在牧羊，為了娶妻、也為了工價，同時造就他成為一個很好的牧人。這事預表基督乃是好牧人，好牧人甚至為羊捨命（約十11）。與牧羊相似，很需要耐心的一件事，乃是養育兒女。列祖當中，雅各養育了最多的兒女，這預表基督也會有許多屬靈的兒女（賽五十三10）。雅各養育兒女的整個過程，雖有各種艱難、挑戰，雅各一一去面對，這些歷練使他至終擁有豐盛的生命。這預表基督付代價訓練門徒，使自己有豐盛的生命，並且能使門徒擁有豐盛的生命。雅各是全以色列民族的父，預表基督是萬國萬民的父。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">八、約瑟</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟的一生，先多次降卑，而後升為至高，預表基督的降卑與升高。約瑟在全埃及掌權，有榮耀冠冕，預表基督是萬王之王，他將再來，成為全地的王，在全世界掌權。約瑟在許多方面預表基督，前面第一大段已經有詳細的分享。</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4 mb-3">
                下面附表，完整呈現創造過程、相關人物、生命特點、救恩過程、預表基督等各個層面的對照。
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <caption className="text-left text-gray-600 font-semibold mb-2">表三：創造過程與人物預表</caption>
                  <thead className="bg-indigo-50">
                    <tr>
                      {['時序', '創造過程', '相關人物', '生命特點', '救恩過程', '預表基督'].map(h => (
                        <th key={h} className="px-3 py-2 text-left font-semibold text-indigo-800 border-b border-gray-200 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      ['起初', '空虛、黑暗\n神的靈運行\n信主以前', '亞當', '空虛的生命', '生命之始', '管理全地'],
                      ['第一日', '造光\n光暗分開', '亞伯（光）', '光明的生命', '信心之始', '殉道救贖'],
                      ['第二日', '造空氣（才有天空）\n水分上下', '以諾（被提）', '高昇的生命', '昇天之始', '被提昇天'],
                      ['第三日', '聚水露旱地', '挪亞（經歷）', '復活的生命', '復活之始', '死而復活'],
                      ['第四日', '造光體（太陽月亮星）', '亞伯拉罕', '成熟的生命', '信心之父', '多國之父\n（天上的星〔後裔〕，管理）'],
                      ['第五日', '造魚與鳥（均倚賴浮力）', '以撒', '安息的生命', '蒙愛之子\n順服之子', '蒙愛之子\n順服之子'],
                      ['第六日', '造動物', '雅各', '豐盛的生命', '開國之父', '萬民之師\n群羊之牧'],
                      ['末了', '造人', '約瑟', '掌權的生命\n榮耀的生命', '掌權之王', '掌權之王'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2 border-b border-gray-100 whitespace-pre-line align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                約瑟的一生預表了基督的蒙愛、受苦，也預表了基督的拯救、掌權，是舊約人物中最像基督的一位。我們藉著約瑟的一生，能更認識基督，並靠著聖靈活出基督的生命。我們既藉聖靈經歷神的同在，也就能培養美好的品格，及操練治理的能力。創世記八大人物各有特色，同時也有一個次序，生命的功課由淺入深。我們可以從每個人物看見神的不同恩典，及生命的不同功課，從而有不同的學習、領受，一生不斷地成長，成為神合用的器皿、神國度的人才，預備與基督一同在全地掌權。
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
                '約瑟是舊約人物中最像基督的一位，共有十七方面預表基督：從為父所愛、好牧人、被弟兄憎恨謀害、受試探被誣告下監，到受苦後升為至高、寬恕弟兄、萬國謁見尊為大等，完整對應基督的降卑與升高。',
                '創世記八大人物——亞當、亞伯、以諾、挪亞、亞伯拉罕、以撒、雅各、約瑟，分別對應創造六日加起初與末了共八個階段，各自在不同層面預表基督：治理全地、生命之光、被提升天、死而復活、信心之父、蒙愛順服、群羊之牧、掌權之王。',
                '約瑟的一生先多次降卑（被恨、被賣、被誣、下監），而後升為至高（作宰相、掌管全地），完整預表基督受苦後得榮耀、被高舉為萬王之王的救恩歷程。',
                '表三完整呈現創造過程、相關人物、生命特點、救恩過程與預表基督五層面的系統對照，顯明創世記的創造次第本身就蘊藏著救恩歷史的藍圖。',
                '創世記八大人物的生命功課由淺入深，各有次序，我們可以從每個人物身上領受不同的恩典功課，一生持續成長，預備將來與基督一同在全地掌權。',
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
              '約瑟的生命怎麼預表基督？可分享你最有感動的一、二項？',
              '創世記的八位人物如何預表基督？你最欣賞哪一位的生命特點？這項特點與你現在的生命功課有何關係？',
              '創世記八大人物的生命特點與救恩過程有關，你的生命成長是否也有這些歷程？可提出分享，並彼此祝福禱告。',
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
