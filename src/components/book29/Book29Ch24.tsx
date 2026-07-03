import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch24() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">咒詛與救贖</h2>
        <p className="text-gray-500 mt-1">又對女人說：「我必多多加增你懷胎的痛苦，你生兒女時必多受痛苦。你必戀慕你丈夫，他必管轄你。」又對亞當說：「你既聽從你妻子的話，吃了那樹上所出的，就是我吩咐你不可吃的，土地必因你的緣故受詛咒；你必終生勞苦才能從土地得吃的。……」創世記三16-24</p>
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
              本章內容有三大段，包含對夏娃的咒詛、對亞當的咒詛，以及救贖與放逐。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、對夏娃的咒詛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三16：「又對女人說：我必多多加增你懷胎的苦楚；你生產兒女必多受苦楚。你必戀慕你丈夫；你丈夫必管轄你。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、生產兒女必多受苦楚</span> — 神對女人說：「我必多多加增你懷胎的苦楚，你生產兒女必多受苦楚。」（創世記三16）神的這句話預言了全世界女人幾千年來生孩子時極大的產痛。醫學研究顯示，生產的痛是人類所經歷最大的痛，而這樣的痛是因亞當、夏娃犯罪而有的。如果人沒有犯罪，女人生產不會痛，但人犯罪了，神就說女人生產要多受苦楚。神把一個極痛苦的經歷普遍性地放在女人身上，一方面這是罪的刑罰。因為犯罪了，所以要受這個苦，但受這個苦之後，會生出新的孩子，並且會因這新生兒而喜樂，甚至忘記先前的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一方面這件事其實包含一個很重要的啟示，神把末後大災難的啟示放在女人身上，每次女人經歷生產之痛，就在預告末後大災難的來臨。主耶穌在馬太福音廿四8提到末後的災難，所用的字眼原文是「生產之難」。耶穌還強調：「那時必有大災難，從世界的起頭直到如今，沒有這樣的災難，後來也必沒有。」（太廿四21）會有這大災難，是因人的罪，如果亞當、夏娃沒有犯罪，就不會有大災難。在這大災難之後會有一個美好的國度，就是禧年國度，也有人認為大災難之後是新天新地，不管是禧年國度或是新天新地，都是一個美好的結果。這跟女人受苦而後得新生兒是一樣的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌用婦人生產來比喻自己的十字架經歷。耶穌被釘十字架也是人類最大的痛苦，很難找到另一個人死得比耶穌更痛苦。而這也是因為亞當、夏娃犯了罪，才會需要耶穌來為我們被釘十字架。這事同樣先有苦難後有喜樂，因為當耶穌復活之後門徒就喜樂了，並且新約時代的教會誕生出來了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上有三件平行的事情：1. 女人生產，2. 七年大災難，3. 耶穌的十字架。三件事都是人類最大的痛苦，都是因為罪的緣故而有的，但也都會帶來新的生命與希望。三件事都與生產有關，女人生產孩子，七年大災難生出禧年國度或新天新地，耶穌基督的十字架生出教會。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們為著失喪靈魂禱告、付代價帶領人來信耶穌，也會有屬靈的生產之苦，及得回迷羊的喜樂。保羅寫信給加拉太教會時說：「我小子啊，我為你們再受生產之苦，直等到基督成形在你們心裡。」（加四19）我們的人生避免不了苦，但受哪一種苦比較值得呢？信耶穌之前是自己的罪性與軟弱使自己受苦，但信耶穌之後更多是為失喪的靈魂付代價而受苦，這樣的苦是值得的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                每個基督徒都可以有兩種生產，一是肉身的生產，二是屬靈的生產。年輕人現在很多選擇不結婚，或者結婚不生孩子。為什麼？因為生孩子要付代價，不僅十月懷胎要付代價，生孩子之後養孩子更難。年輕人面對這樣的代價，很多人選擇不要。然而，耶穌可以拒絕釘十字架嗎？世界可以決定不要面對末後大災難嗎？不能！因為罪的緣故，我們若要有後面的豐收、美好的未來，就不能逃避十架道路及生產之苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以鼓勵年輕人，勇敢地面對肉身的生產之苦，也選擇另一條同樣辛苦的路，就是屬靈的生產。保羅雖然沒有結婚、沒有肉身的孩子，但他在屬靈的生養上付出更多代價。每個基督徒，不論男女，都有一個呼召，就是要生養屬靈的孩子。可能你的日子還算舒服，沒有甚麼憂愁，鼓勵你給自己製造一點憂愁，就是去為失喪的靈魂禱告，傳福音給他們，帶他們來作主門徒。如同保羅所說：「我是大有憂愁，心裡時常傷痛；為我弟兄，我骨肉之親，就是自己被咒詛，與基督分離，我也願意。」（羅九2-3）大家都效法保羅，願受生產之苦，福音才能傳開，大使命才能完成。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神要在女人身上作生產之苦的啟示，是要見證過去夏娃犯的罪，並預示末後的大災難，以及預示耶穌上十字架的苦，然而生產之苦後會帶來新生命，這是值得的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、戀慕丈夫，被丈夫管轄</span> — 戀慕的希伯來文是 תְּשׁוּקָה（teshuwqah），在創世記只出現兩次，一次是這裡，講女人戀慕丈夫，丈夫要管轄女人；一次是講罪會戀慕該隱，該隱需要去制伏它（創四7），所以這是一種不正常的感情現象，因為人跟神的關係疏遠了。人基本上需要很強的情感關係，而最需要的情感關係就是與神的關係，可是當人犯罪、離開神之後，女子的情感就會過度依賴到丈夫身上。一個健康的基督徒姊妹，會跟上帝有良好的關係，因而跟丈夫之間有平衡健康的彼此相愛關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                管轄的希伯來文是 מָשַׁל（mashal），包含管轄、統治、掌權的意思。光體管理晝夜、丈夫管轄妻子、人要制伏罪、亞伯拉罕的僕人管理全業、約瑟作宰相，都是用這個字。女人跟丈夫關係的變化，顯示了人與神關係的變化，因為人跟神原本是愛的關係，但當人犯罪了之後，人跟神就變成了一種律法性的管轄關係。
              </p>
              <p className="text-gray-700 leading-relaxed">
                廣義的律法包含了法律、教育、宗教。人若沒有犯罪墮落，人有行善的生命能力，就不需要這些律法的管轄。律法的管轄雖有約束、抑制的作用，但也有增加犯罪的作用，有如兩刃的刀一般。廣義來說，世人就是女人，當神說：女人要被管轄，同時是在說，世人要被管轄。因人吃了分別善惡樹的果子之後，人就被律法管轄了。對於信耶穌的人來說，丈夫跟妻子的關係不再屬於戀慕和管轄的關係，乃是如以弗所書五22~33所說的，丈夫對待妻子是愛與捨己；而妻子對待丈夫乃是順服與幫助。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、對亞當的咒詛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三17-19：「又對亞當說：你既聽從妻子的話，吃了我所吩咐你不可吃的那樹上的果子，地必為你的緣故受咒詛；你必終身勞苦才能從地裡得吃的。地必給你長出荊棘和蒺藜來；你也要吃田間的菜蔬。你必汗流滿面才得糊口，直到你歸了土，因為你是從土而出的。你本是塵土，仍要歸於塵土。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、地受咒詛，長出荊棘、蒺藜</span> — 由於亞當是用塵土所造，所以他跟地是連結一體的，他一犯罪，地就跟他一同受到咒詛。人的罪影響全地，包括動、植物、生態環境等，於是地長出荊棘、蒺藜。這就如同羅八19~22說的：「受造之物切望等候神的眾子顯出來。因為受造之物服在虛空之下，不是自己願意，乃是因那叫他如此的。……一切受造之物一同歎息、勞苦，直到如今。」一切受造之物包括地土、動植物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、終身勞苦才能得吃，汗流滿面才得糊口</span> — 本來人在伊甸園中也要工作，但不至於終身勞苦，乃因人犯了罪後才需要終身勞苦、汗流滿面地工作。有一部《轉化》影片，見證南美洲有個城鎮，當全鎮的人大部分悔改信耶穌後，那裡的地土得了醫治，種出來的蔬果都很巨大、肥美，有如恢復到伊甸園時期一般。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                瑪拉基三9~12也說到，凡敬畏神、樂意忠心奉獻的人，會經歷神的保守，果子不會掉落，也不會被蝗蟲吃，會有豐盛的收成，那地要成為喜樂之地，這就跟伊甸園相似。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                中國大陸農村教會有一個真實的見證：起初傳道人不敢教弟兄姊妹奉獻，傳道人要傳道，自己的妻子還需要在家種田，供給日常生活所需。傳道人有什一奉獻，用於教會事工，一般弟兄姊妹卻不什一奉獻，因此教會成長很慢。但當他們接受筆者及其他培訓老師的教導，再去教導弟兄姊妹奉獻後，弟兄姊妹開始什一奉獻，之後弟兄姊妹就經歷神蹟。同一個地區的農作物，享有同樣的陽光和雨水，別的田地收穫普通，但弟兄姊妹們的田地則大大豐收。他們經歷神的祝福後，有奉獻的人就越愛奉獻，傳道人可以更專心傳道、教導、禱告，結果整個教會大大復興。雖是鄉村教會，大專生工作也大大興旺、蒙福。
              </p>
              <p className="text-gray-700 leading-relaxed">
                亞當夏娃犯罪後，神說亞當要終身勞苦、汗流滿面才能糊口，基督徒可以有所不同。基督徒雖然一樣活在亞當犯罪後的世界，但差別在基督徒已蒙救贖，跟神恢復了關係，並且敬畏神、尊重神的主權，因此情況會改變，那咒詛不會是宿命。雖然一樣要勤勞工作，但不須常加班、兼差，在經濟上可以經歷神的賜福。每安息日或主日可以專心來敬拜神，享受與家人的團契。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、救贖與放逐</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三21：「耶和華神為亞當和他妻子用皮子作衣服給他們穿。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、用皮子做衣服（行動者是神）</span> — 亞當夏娃原本是用無花果樹葉作衣服（創三7），但樹葉很快就會枯乾，不能持久。神用皮子做衣服，看原文，可知那皮子是動物的皮。所以是神親手殺了第一隻動物，很可能是羊，來為人贖罪並作皮衣，皮衣能有效遮羞，且能穿一生之久。人若沒有犯罪，神不需要殺動物。但人犯了罪，所以神需要殺動物做皮衣，給犯了罪的亞當夏娃穿。為什麼說所殺的動物很可能是羊呢？
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch24-skin-garments.jpg"
                  alt="圖九：神做皮衣給亞當夏娃穿，插畫呈現神以羊皮為亞當夏娃製衣"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖九：神做皮衣給亞當夏娃穿</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-3">
                <ol className="space-y-2 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>雖然那時神的兒子耶穌基督還沒來到世上，但神在創世以前就已預定讓耶穌成為贖罪羔羊（弗一4-7），因為神知道人會犯罪。當神殺第一隻羔羊時，就表明了神的兒子耶穌基督一定要來到世上成為贖罪羔羊。故此我們可以合理的推論神最早所殺的動物就是羊。</li>
                  <li>在接下來的經文中可看到，亞伯也是獻羊為祭（創四4），他效法神的行動，殺羔羊為人贖罪，因此亞伯是最早的祭司。在以賽亞書五三4~10和希伯來書九11~22都說到，一定要有流血才能贖罪。耶穌基督就是永恆的贖罪羔羊，默默無聲被牽到宰殺之地。因此神拯救行動中所殺的就是羊，這羊預表耶穌基督代替人承受罪的刑罰。</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、給亞當夏娃穿</span>
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-3">
                <ol className="space-y-2 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>稱義：人因信接受耶穌基督，就能白白的稱義，這跟羔羊的贖罪有關（羅三22~24；四7~8）。</li>
                  <li>成聖：穿皮衣不只關乎稱義，還關乎成聖，所以基督徒一生之久披戴耶穌基督（羅十三14），遵行主道，走在成聖的道路上。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當夏娃穿著羔羊的皮衣乃是一生之久。我們信主的人，也要一生之久披戴基督，讓人在我們身上看到主的榮美。正如加拉太二20所說：「現在活著的不再是我，乃是基督在我裡面活著。」以弗所書六11~17講到要穿上神所賜的全副軍裝，其實就是披戴耶穌基督。啟示錄十九7~8也講到將來羔羊婚娶時，新婦要穿戴光明潔白的細麻衣，就是聖徒所行的義。因此基督徒們一生之久披戴耶穌基督過成聖生活，就是穿上得勝的軍裝，也是在編織那光明潔白的細麻衣。
              </p>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、使離開伊甸園</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="italic">（一）封鎖不能贖罪的路</span> — 創世記三22-23：「耶和華神說：那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。耶和華神便打發他出伊甸園去，耕種他所自出之土。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                羔羊的救恩包含除去罪和賜下生命，神先給了羔羊的救恩（創三21），之後神才封閉生命樹的道路（創三22~24）。亞當夏娃犯罪，吃了分別善惡樹的果子後，神不讓他們吃生命樹的果子，以免他們永遠活著（創三22）。因為他們吃禁果後跟神的關係破壞了。若不藉著羔羊流血贖罪，人永遠活著將是更大的痛苦。唯有讓人面對生命的有限，人才比較可能悔改。如今很多人也都是如此，到了人的盡頭才來找神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然神封閉了生命樹的道路，但他是慈愛的，他同時開啟了另一條生命的道路，就是羔羊的救恩，使得人可以藉羔羊的贖罪得著永生。因此，不只亞當夏娃穿皮衣蒙救贖，亞伯也如此，合理推論他也是宰羔羊贖罪後穿羊皮做的皮衣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                生命樹果子和羔羊有何差別？生命樹是植物，不會流血，不能贖罪；羔羊是動物，會流血，能贖罪。生命樹和羔羊都是給生命，但生命樹不能贖罪，而羔羊是先流血贖罪而後給生命。所以生命樹不能給有罪的人，而羔羊的生命能給有罪的人，這就是神要封閉生命樹的道路之原因。否則人永遠活在自己的罪中，只會帶給人無盡的痛苦。生命樹只是暫時封閉起來，到了啟示錄廿二2那時候的人已無罪了，生命樹再次出現，人就可以吃生命樹的果子了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="italic">（二）放逐地在園的東邊</span> — 創世記三24：「於是把他趕出去了；又在伊甸園的東邊安設基路伯和四面轉動發火焰的劍，要把守生命樹的道路。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在伊甸園的「東邊」安設基路伯和四面轉動發火焰的劍，這代表亞當、夏娃乃是被放逐去到伊甸園的東邊。第十四章曾說到伊甸園很可能就在今日的聖地。本章再次看到，亞當、夏娃被放逐，跟以色列被擄，同樣去到聖地東邊的地方。北國以色列去亞述，南國猶大去巴比倫，都是東邊。在那裡，神要他們省思、悔改，以後才帶他們回來聖地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                伊甸園的故事在此告一個段落，與後來的以色列歷史做個比較，可發現他們經歷了許多相似的事。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>神將以色列人擺在迦南美地，那是流奶與蜜之地，與伊甸園相似。</li>
                  <li>那地有著會引誘他們犯罪的迦南七族，如同伊甸園有撒旦會來引誘人犯罪。</li>
                  <li>神給以色列人十條誡命，類似給始祖不可吃禁果的誡命。</li>
                  <li>神的話是安身立命之道，只要信靠遵從神的話，必定有平安豐盛，對亞當、夏娃，與對以色列人都一樣。</li>
                  <li>當他們犯了罪，地就受了咒詛，美地成為荒地，人被趕出去，同樣去到東邊的地方。</li>
                  <li>有一天，被放逐的人將會回來。雖然，猶太人曾經在古列王的時候開始歸回聖地，但他們又因犯罪而被迫離開聖地。</li>
                  <li>羅馬帝國以重兵防止他們入境，如同神安設基路伯和四面轉動發火焰的劍，不讓始祖回來伊甸園。直到如今，多數的猶太人仍分散在世界各地。</li>
                  <li>這個故事最終的結束，以色列人十二支派全部都會回到聖地，不再有引誘人的迦南七族，只有基督耶穌坐在大衛的寶座治理全地。而接著伊甸園也會重現，在基督裡被赦免的人全都會回到一個更大的、全新的伊甸園，就是新天新地，那裡有河、有樹，生命樹的果子更豐富地供應。唯獨不再有撒旦，只有坐寶座的聖父、羔羊基督、供應活水的聖靈、眾天使與人在一起，神與人永遠同在，人享受永遠的福樂。</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                讓我們來頌讚全能全知、掌管歷史的上帝！神從古時命定，讓人經歷磨練，雖有犯罪墮落，但神施恩拯救，使我們能披戴基督，過成聖得勝的生活。有一天，以色列人全部會回到聖地，重生得救的人也都會回到更美、更豐盛的伊甸園。今天我們還在伊甸園外，因為有任務要帶領更多人來認識救主基督，讓他們都回到主的羊圈，擁有喜樂、平安的生命，有一天一起回到全新的伊甸園，享受神永遠的同在，及美好豐盛的果實。
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
                '女人的咒詛有二：生產苦楚（與七年大災難、耶穌十架並列的三個「生產」預表）、戀慕丈夫被丈夫管轄（תְּשׁוּקָה戀慕/מָשַׁל管轄，象徵人神關係從愛變為律法性管轄）。',
                '亞當的咒詛是地受咒詛長出荊棘蒺藜、終身勞苦汗流滿面才得糊口；但基督徒因蒙救贖、敬畏神、忠心奉獻，可以經歷咒詛之外的祝福（瑪三9-12的見證）。',
                '神親手殺羊為亞當夏娃做皮衣，是最早的救贖預表，預表耶穌成為贖罪羔羊；穿皮衣一生之久對應信徒披戴基督，走在稱義與成聖的道路上。',
                '神先賜下羔羊的救恩（創三21）才封閉生命樹的道路（創三22-24），是為了不讓有罪的人永遠活在痛苦中；生命樹要到啟示錄廿二2人已無罪時才重新開啟。',
                '亞當夏娃被放逐到伊甸園東邊，與後來以色列人被擄到東邊（亞述、巴比倫）有八項相似之处，故事終將以十二支派回歸聖地、新天新地重現伊甸園作結。',
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
              '夏娃犯罪後，開始有生產之苦，這指向末世的哪二件事？以上三件事有哪些共同點？',
              '亞當犯罪造成土地受咒詛，如今我們可以如何來突破這種咒詛？',
              '神為犯罪後的亞當夏娃做了什麼事，好讓他們可以恢復與神的關係？這事與你有何關係？',
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
