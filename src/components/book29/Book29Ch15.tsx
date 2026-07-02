import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch15() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">設立生命樹</h2>
        <p className="text-gray-500 mt-1">耶和華神使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。園子當中又有生命樹和分別善惡的樹　創世記二9</p>
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

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、生命樹的內涵</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                生命樹這個複合詞在整本聖經出現11次。如果是單單「生命」這個詞，則有164次，出現在大部分的經卷中，因為生命是貫穿整本聖經的重要主體。生命樹雖然只在創世記、箴言、啟示錄三卷書出現，但也藉著頭尾呼應，顯出它的重要。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                生命樹在創世記出現三次，都是講伊甸園的生命樹，啟示錄出現四次，也是講樂園中的生命樹，但這樂園是未來新耶路撒冷城中的樂園。在箴言出現四次，箴言的生命樹沒有定冠詞，所以不是伊甸園的生命樹，但表達了有關生命樹的一些內涵，列出如下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                箴言三18：「他與持守他的作生命樹；持定他的，俱各有福。」箴言十一30：「義人所結的果子就是生命樹；有智慧的，必能得人。」箴言十三12：「所盼望的遲延未得，令人心憂；所願意的臨到，卻是生命樹。」箴言十五4：「溫良的舌是生命樹；乖謬的嘴使人心碎。」以上四處經文，從箴言十一30可看出來，生命樹與智慧有關；從箴言十五4可看出來，生命樹與溫良的舌有關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                箴言三18所講的生命樹，從上下文可看出是指智慧、聰明、謀略。如箴言三13-22所記：得智慧，得聰明的，這人便為有福。因為得智慧勝過得銀子，其利益強如精金，比珍珠寶貴；你一切所喜愛的，都不足與比較。她右手有長壽，左手有富貴。她的道是安樂；她的路全是平安。她與持守她的作生命樹；持定她的，俱各有福。耶和華以智慧立地，以聰明定天，以知識使深淵裂開，使天空滴下甘露。我兒，要謹守真智慧和謀略，不可使她離開你的眼目。這樣，她必作你的生命，頸項的美飾。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                箴言十三12所講的生命樹，從上下文可看出來，包括了謙卑聽教訓、敬畏訓言誡命、遵循智慧人法則、誠實、正直、勤勞、積蓄、聰明、知識等。如箴言十三1-16所記：智慧子聽父親的教訓；褻慢人不聽責備。人因口所結的果子，必享美福；奸詐人必遭強暴。謹守口的，得保生命；大張嘴的，必致敗亡。懶惰人羨慕，卻無所得；殷勤人必得豐裕。義人恨惡謊言；惡人有臭名，且致慚愧。行為正直的，有公義保守；犯罪的，被邪惡傾覆。假作富足的，卻一無所有；裝作窮乏的，卻廣有財物。人的資財是他生命的贖價；窮乏人卻聽不見威嚇的話。義人的光明亮；惡人的燈要熄滅。驕傲只啟爭競；聽勸言的，卻有智慧。不勞而得之財必然消耗；勤勞積蓄的，必見加增。所盼望的遲延未得，令人心憂；所願意的臨到，卻是生命樹。藐視訓言的，自取滅亡；敬畏誡命的，必得善報。智慧人的法則是生命的泉源，可以使人離開死亡的網羅。美好的聰明使人蒙恩；奸詐人的道路崎嶇難行。凡通達人都憑知識行事；愚昧人張揚自己的愚昧。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記與啟示錄講的生命樹是實體的樹，要人去吃其果子，可看出來是在講神與人之間動態的關係，有神的恩典、神的供應，但也要人以信心去領受，才能得著生命樹果子所包含的生命。箴言所講的生命樹，則是直接講出生命樹果子的內涵，主要就是神的生命，也相似於聖靈的果子，包括智慧、聰明、謀略、知識、敬畏、謙卑、誠實、正直、勤勞、積蓄、溫良等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一顆不能吃的樹叫作分別善惡樹，原文是知識善惡樹。很多人因此認為知識、道德與生命相對立，但從箴言可看出來，完整的生命是包含知識與道德的。問題在於如果只有知識、道德，而沒有神的生命，那就會是一條引向死亡的路。這原則適用於神所造的其他事物，不管是頭腦中的理性，生活中的品格，或物質性的錢財，這些都可以包含在神的生命裡面，是好的、有用的。但如果抬高這些，而離棄神；倚仗這些，而不倚靠神，那就會是死路一條。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                先知以賽亞預言耶穌基督，提到：「從耶西的本必發一條；從他根生的枝子必結果實。耶和華的靈必住在他身上，就是使他有智慧和聰明的靈，謀略和能力的靈，知識和敬畏耶和華的靈。」（賽十一1-2）加拉太書五22-23說到：「聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。……」以賽亞書與加拉太書合起來看，差不多就是箴言所描述的那個生命，而這些都是從聖靈來的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                將創世記、箴言合起來看，可看到全貌。就是領受生命樹果子的人，將會像生命樹，並且也結出生命樹的果子。這就像今日聖徒先稱義後成聖、先得救後得勝的過程與結果。生命河像聖靈、生命樹像聖子，將神的生命供應給我們，我們有了基督的生命、聖靈的果子，又在生活中藉智慧、品格、愛心、財物，將神的生命供應給別人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、生命樹的領受</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人羨慕亞當，被造在伊甸園，自動有永生。其實不是這樣，創世記三22清楚說到，人要吃生命樹的果子才會永遠活著。創世記三22：「耶和華神說，那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。」我們每個人都一樣，必須來信靠耶穌基督，像亞當吃生命樹的果子，而後才會得著永生。正如約翰福音一4，12所說：「生命在他裡頭，這生命就是人的光……凡接待他的，就是信他名的人，他就賜他們權柄，作神的兒女。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人討論：「為何神命定吃分別善惡樹的果子會死？」一般答案是：「因為神要讓人有自由意志的選擇，神不是造一個機器人。」筆者認為，用生命樹來談自由意志更好。也就是說，神造了人，沒有強迫人要永遠與神在一起，乃是讓人選擇。人不吃生命樹的果子，只會暫時與神在一起，並且生命品質不好；人若吃生命樹的果子，將會永遠與神在一起，並且生命品質會很好。吃或不吃生命樹的果子，是由人決定的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅歌書是在寫愛情的一卷書，不管是講人與人的愛情，或講神與人的愛情，都同樣有一個要素，就是尊重對方的自由意志，如雅歌書二7所說：「耶路撒冷的眾女子啊，我指著羚羊或田野的母鹿囑咐你們：不要驚動、不要叫醒我所親愛的，等他自己情願。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                伊甸園的生命樹很像聖子基督，人與他連結就有生命，不與他連結，就沒有生命。有一顆樹跟生命樹很像，就是主耶穌在約翰福音十五章1-8所說的葡萄樹：「我是真葡萄樹，我父是栽培的人。凡屬我不結果子的枝子，他就剪去；凡結果子的，他就修理乾淨，使枝子結果子更多。現在你們因我講給你們的道，已經乾淨了。你們要常在我裡面，我也常在你們裡面。枝子若不常在葡萄樹上，自己就不能結果子；你們若不常在我裡面，也是這樣。我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子；因為離了我，你們就不能做甚麼。人若不常在我裡面，就像枝子丟在外面枯乾，人拾起來，扔在火裡燒了。你們若常在我裡面，我的話也常在你們裡面，凡你們所願意的，祈求，就給你們成就。你們多結果子，我父就因此得榮耀，你們也就是我的門徒了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然生命樹就像聖子基督，作為生命的供應。但當人犯罪以後，聖子基督必須成為神的羔羊。神的羔羊與生命樹相似，都供應生命，但有一個基本的不同，就是生命樹只供應生命，不能贖罪，神的羔羊則同時能贖罪及供應生命。對於一個有罪的人，必須先得到贖罪，而後才能領受永生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當、夏娃犯罪之後，神很快就為亞當、夏娃進行贖罪，就是做皮衣給他們穿。創世記三21：「耶和華神為亞當和他妻子用皮子做衣服給他們穿。」這裡的皮子是動物的皮，很可能是羊皮。神自己拿刀殺了一隻羊，取皮做衣服給亞當、夏娃穿。這是最起初的救贖行動，預表將來神的羔羊基督，要為世人死在十架上，成就贖罪之功。中國字的「初」這個字由衣與刀組成，很可能是記載神做皮衣這件事。
              </p>
              <p className="text-gray-700 leading-relaxed">
                基督是神的羔羊，為了替人贖罪。如希伯來書九22所說：「按著律法，凡物差不多都是用血潔淨的；若不流血，罪就不得赦免了。」一個是動物，會流血；一個是植物，不會流血，這是神的羔羊與生命樹基本的不同。人犯罪後，神就不能讓人吃生命樹了，免得人永遠活在罪的痛苦中，因為生命樹不能為他解決罪的問題。但神還是樂意將生命給人，就改用羔羊贖罪這條生命之路。亞當、夏娃被動得到贖罪，因為神殺羊做皮衣給他們穿；亞伯藉獻祭得到贖罪，因為他照著神的指示，將羊獻給神，蒙神悅納。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、生命樹的發展</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三次講生命樹，啟示錄四次講生命樹，這七次每一次都有重要意思。
              </p>
              <div className="space-y-3 mb-3">
                {[
                  { title: '1. 創世記二9', desc: '「耶和華神使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。園子當中又有生命樹和分別善惡的樹。」這裡指出神供應身體的食物──各樣的樹，以及靈魂的食物──生命樹，這樹代表聖子基督、神的道，也代表神自己，神造人給人有靈，就是要人來領受神的靈、神的道，領受神自己進到人裡面，使神與人聯合。' },
                  { title: '2. 創世記三22', desc: '「耶和華神說：那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。」這裡指出，吃生命樹的果子，能永遠活著，生命樹的果子有永生在其中。' },
                  { title: '3. 創世記三24', desc: '「於是把他趕出去了；又在伊甸園的東邊安設基路伯和四面轉動發火焰的劍，要把守生命樹的道路。」這裡指出，有罪的人不能就近生命樹，必須先領受羔羊的贖罪，然後才能得永遠的生命。' },
                  { title: '4. 啟示錄二7', desc: '「聖靈向眾教會所說的話，凡有耳的，就應當聽！得勝的，我必將神樂園中生命樹的果子賜給他吃。」這是給得勝者的應許，在新耶路撒冷的樂園中，將可吃生命樹的果子。' },
                  { title: '5. 啟示錄廿二2', desc: '「在河這邊與那邊有生命樹，結十二樣（或作：回）果子，每月都結果子；樹上的葉子乃為醫治萬民。」這是應許的實現，生命樹重現了，生長在生命河旁邊，能供應生命及醫治。也讓我們看到，在永恆之中，人與神之間繼續有親密的交流。' },
                  { title: '6. 啟示錄廿二14', desc: '「那些洗淨自己衣服的有福了！可得權柄能到生命樹那裡，也能從門進城。」這裡指出，在新天新地的人，乃是無罪之人，所以能直接來吃生命樹的果子。' },
                  { title: '7. 啟示錄廿二19', desc: '「這書上的預言，若有人刪去甚麼，神必從這書上所寫的生命樹和聖城刪去他的分。」這句話指出，生命樹和聖城，是神要給人的完備福分，但人必須先相信神的預言。生命樹強調個人與神之間愛與生命的關係，聖城強調神的子民同心合意建造神的國度。二者一內一外，個人與團體，都是神很看重的。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                七句關於生命樹的話，讓我們看到有關神給人生命完整的永恆故事。有許多血淚，但也充滿喜樂；有許多失敗，但也充滿得勝；有許多絕望，但至終充滿盼望。這正是基督十架福音的特色。基督十架福音，與生命樹的果子，都包含四個要素：1. 本質——恩典，來自神的愛與恩典。2. 媒介——信心，需要以信心來支取。3. 內涵——基督，內涵是神的道基督。4. 結果——永生，領受了會得到永生。
              </p>
              <p className="text-gray-700 leading-relaxed">
                因著神的恩典，藉著信靠基督耶穌或吃生命樹果子，必得永生，也就是得到神的生命。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                第一個創造故事，人被造後的第一個課題是來守安息日，享受神自己，有時間的奉獻。第二個創造故事，人被造後的第一個課題是來吃生命果，領受神自己，有全人的奉獻。這兩件事是相通的，曾經伯大尼的馬利亞選擇上好的福份，在耶穌腳前聽道，就如同享受安息日，也如同吃生命樹的果子（路十42），這也是神每天樂意賜給我們每個人的福分。
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
                '生命樹只在創世記、箴言、啟示錄出現，創世記與啟示錄講實體的樹要人吃其果子，是神人動態的恩典關係；箴言的生命樹沒有定冠詞，直接講出智慧、聰明、誠實、勤勞等內涵，都是聖靈果子的雛形。',
                '亞當並非自動有永生，必須吃生命樹的果子才能永遠活著（創三22），這是神給人自由意志的選擇——吃或不吃生命樹果子，決定生命品質與是否永遠與神同在。',
                '生命樹像聖子基督（供應生命），但人犯罪後基督必須成為神的羔羊（贖罪加供應生命）；亞當夏娃因神殺羊做皮衣而得贖罪，這是最初的救贖預表，中文「初」字由衣與刀組成呼應此事。',
                '創世記三次、啟示錄四次共七次提到生命樹，構成完整的救恩故事：從創造供應、犯罪後被把守、得勝者的應許，到新天新地生命樹的完全實現與醫治萬民的功能。',
                '基督十架福音與生命樹果子共有四要素：恩典為本質、信心為媒介、基督為內涵、永生為結果；人被造後第一個課題是守安息與吃生命果，二者相通，都是全人享受神自己的福分。',
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
              '創世記、啟示錄所說的生命樹，還有箴言所說的生命樹，分別代表甚麼意義？試著引用一些經文來描述。',
              '生命樹與神的羔羊有何異同？耶穌基督在其中的角色是什麼？',
              '對你來說，信仰生活中的哪些事情，讓你感覺正在吃生命樹的果子？',
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
