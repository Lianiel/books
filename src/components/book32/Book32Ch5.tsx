import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={81} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">洪水與方舟</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          創世記七11-14：「當挪亞六百歲，二月十七日那一天，大淵的泉源都裂開了，天上的窗戶也敞開了，四十晝夜降大雨在地上。正當那日，挪亞和他三個兒子閃、含、雅弗，並挪亞的妻子和三個兒婦，都進入方舟。他們和百獸，各從其類，一切牲畜，各從其類，爬在地上的昆蟲，各從其類，一切禽鳥，各從其類，都進入方舟。」<br />
          創世記九12-14：「上帝說：『我與你們並你們這裡的各樣活物所立的永約是有記號的。我把虹放在雲彩中，這就可作我與地立約的記號了。我使雲彩蓋地的時候，必有虹現在雲彩中，我便記念我與你們和各樣有血肉的活物所立的約，水就再不氾濫、毀壞一切有血肉的物了。虹必現在雲彩中，我看見，就要記念我與地上各樣有血肉的活物所立的永約。』」
        </p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <PageTag page={82} />
            <p className="text-gray-700 leading-relaxed">
              第四章提到，整個世界的主要趨勢是罪惡不斷更加蔓延，因此上帝決定以洪水毀滅全地，同時吩咐挪亞建造方舟，使人類得以在洪水審判過後，繼續生養發展。本章專注探討洪水與方舟，說明神的公義審判與神的大能拯救，這在古時與今日都同樣真實。洪水與方舟，既記載在聖經，也在華人文化素材之中。以下分別從聖經的記載、中國字與古籍、各民族傳說三方面來分享。
            </p>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　聖經的記載</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                創世記六至八章記載，上帝指示挪亞造方舟以施行拯救與審判，結果洪水淹沒了全地，除了水中活物以外，凡沒有進方舟的陸上活物與空中飛鳥都被洪水滅絕了。水中活物沒有進方舟，在洪水當中，水中的活物也會大量死亡，但不會全數死亡，而是能有足夠的數量繼續繁衍，使後來的人類能以魚類為主要食物來源之一。挪亞一家八口得救，開始新的族裔。不久
              </p>

              <PageTag page={83} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                之後神揀選亞伯拉罕來建立神的國度，並從他的後裔預備救主基督降生，以成就普世性永恆的救恩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                洪水結束之後，陸地露出，水往哪裡去呢？詩篇一〇四6-9有很好的說明：「你用深水遮蓋地面，猶如衣裳；諸水高過山嶺。你的斥責一發，水便奔逃；你的雷聲一發，水便奔流。諸山升上，諸谷沉下，歸你為它所安定之地。你定了界限，使水不能過去，不再轉回遮蓋地面。」此經文描述大洪水淹沒全地，同一年接著有造山運動──諸山升上，也有海溝的形成──諸谷沉下，海底比以前更深，因此能容納更多的水。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                中國曾有大禹治水，他所治的水不是洪水，而是洪水過後遺留下來的水；當時陸地上升，洪水很快向下奔流，但還有很多比較高的水來不及宣洩；大禹距離挪亞時代不遠，許多高山上的水陸續氾濫成災，因此大禹修築疏通水道，將高山上的水引流至大海，解決中國的水患。
              </p>
              <p className="text-gray-700 leading-relaxed">
                冰河也是洪水過後產生的另一個景象，因造山運動而升上去的水結冰後，被重力往下遷移，就產生了冰河；因此冰河並非幾億年前或幾千萬年前，而是在五千年前左右產生的。另外，高山上的鹽水湖也是海水淹沒全地，又經過造山運動將海水升上所遺留的；而高山鹽岩則是岩石經海水淹沒，水分蒸發後岩石殘留鹽分的結果，也是大洪水的證據之一。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　中國字與古籍</h3>

              <PageTag page={84} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                昔：「大水」在「日」之上，表古時洪水曾經淹沒全地（創七19）。<sup>1</sup><span style={cite}>（朱天民，《從聖經看甲骨文》，頁32-33）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                船：會意字，「八口」在「舟」裡面，得以躲避洪水，此為特殊之「船」，非一般之「舟」（創六10、18）。<sup>2</sup><span style={cite}>（朱天民，《中國字》，頁231-233。葉夫樹，《中華民族文字學與三位一體真神的關係》，頁145-148）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舫：會意字，「方」形的「舟」，用以承裝人、動物、食物，以避洪水，非為航行（創六14-21）。<sup>3</sup><span style={cite}>（葉夫樹，《中華民族文字學與三位一體真神的關係》，頁149-150）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沿：會意字，「八口」在「洪水」之後存留繁衍（創九1）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                普世性的洪水是由於全人類的罪。聖經說：「地上充滿罪惡，上帝用大洪水除滅地上活物。」（創六11～七24）中國的《淮南子》、《路史》則都提到：「共工為始作亂，振滔洪水，以禍天下。」「天柱折，地維絕。天傾西北……地不滿東南，故水潦塵埃歸焉。」<sup>4</sup><span style={cite}>（《路史‧後紀卷二》《淮南子‧天文篇》。桂冠圖書公司編輯部，《中國神話故事》，頁34-38、46）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                洪水之後，人類有一個新的開始。聖經說：「大洪水退後，上帝與挪亞立約，以彩虹為記號。」（創九12-13）中國古書則
              </p>

              <PageTag page={85} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                說：「女媧熔煉五色石，以補蒼天。」<sup>5</sup><span style={cite}>（《淮南子‧覽冥》。桂冠圖書公司編輯部，《中國神話故事》，頁36、38。桂冠圖書公司編輯部，《中國古史故事》，頁12）</span>意思是，蒼天有破洞，造成洪水，女媧用一種顏色如同彩虹的五色石來補蒼天的破洞，從此之後天上就有了彩虹。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這雖是個傳說，但很可能是從歷史事實演變而來的。創世記九12-13記載，大洪水退後，上帝與挪亞立約，以彩虹為記號。所以是上帝將彩虹放在天空作為立約記號，應許不再以洪水毀滅世界。立約之後才有了彩虹，而「挪亞」這名字的希伯來文跟中文「女媧」的發音幾乎一樣，並且傳說中女媧是天下人的祖先，挪亞也真的是目前全天下人的祖先，由此推知，中國的女媧跟挪亞很可能有關連。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第三節　各民族傳說</h3>

              <PageTag page={86} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                雖然有的聖經學者認為挪亞時代的洪水是地區性的，因為希伯來文「天下」一詞也可以指一個國家或地方<sup>6</sup><span style={cite}>（巴斯德〔J Sidlow Baxter〕，楊牧谷譯，《聖經研究I》，頁57-58）</span>，但在有關各民族古老傳說的調查中，最令人驚異的是：幾乎各民族都有洪水毀滅大地的傳說。依據人類學家的統計<sup>7</sup><span style={cite}>（本段取材自 John D. Morris &amp; Tim LaHaye, The Art on Ararat, 231-241）</span>，全世界有超過兩百個民族曾留傳下來這種傳說，其地理位置遍布在各大洲，如中東、歐洲、太平洋各島嶼、北美的印地安人及愛斯基摩人、亞洲各國（當然包括中國）及中南美洲。涉及八十四個語言系統，包括印歐語系、突厥語系、亞非閃族語系、古蘇米爾語系、尼格剛果語系、尼羅薩哈拉語系、亞洲十九個語系、大洋洲十一個語系、美洲四十三個語系等<sup>8</sup><span style={cite}>（梁燕城，〈洪水與方舟傳說的探索〉，《文化中國》2003年第三期〔總38期〕，頁22）</span>，由於分布如此廣泛，似乎各民族都曾「記得」這次毀滅性的大洪水，因此，洪水是普世性（而非地區性）的可能性大為增加。
              </p>
              <p className="text-gray-700 leading-relaxed">
                同時，在分析各民族有關洪水的傳說時，發現離希伯來文化愈遠的地區，其內容與聖經的記載出入也愈大。但即使是與聖經記載最相似的巴比倫傳說，其內容也有許多荒誕、不近人情之處。例如，所傳說的方舟是正方體，而不是聖經所說的高三十肘、寬五十肘、長三百肘的完美比例。真正的方舟不會亂
              </p>

              <PageTag page={87} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                轉、非常穩定，這是科學家所證實的。因此，最合理的推論乃是：所有的洪水傳說都是由挪亞的後裔流傳下來的，可是隨著民族的遷徙，這些傳說也逐漸因代代相傳而失真了，只有聖經的記載才保留了最原始、最正確的「原版」資料！另一項有力的佐證是：在詳細分析這兩百多種傳說的內容之後，以下列十五項問題予以統計，發現這些傳說之內容雷同的比例如下：<sup>9</sup><span style={cite}>（摘自《校園》1995年5月號，頁24-25）</span>
              </p>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 mb-3">
                <li>大災難只是因洪水而引起的（95%）</li>
                <li>洪水是普世性的（95%）</li>
                <li>有一家人得救（88%）</li>
                <li>他們藉著一艘船得救（70%）</li>
                <li>這事件發生在各民族所在之當地（82%）</li>
                <li>洪水是因人類的罪惡而引起的（60%）</li>
                <li>動物也同時被拯救（67%）</li>
                <li>動物在洪水故事中扮演很重要的角色（73%）</li>
                <li>那些被拯救的人事先曾被警告過（66%）</li>
                <li>那些獲救的人最後停靠在一座山上（57%）</li>
                <li>最後曾放出鳥類（35%）</li>
                <li>有偶發事件（37%）</li>
                <li>在獲救之後有獻祭的行動（13%）</li>
                <li>獲救的人數正好八個人（9%）</li>
              </ol>

              <PageTag page={88} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                15. 曾提到彩虹（7%）
              </p>
              <p className="text-gray-700 leading-relaxed">
                這些傳說的相似程度是令人驚異的。甚至在某些細節上（如彩虹及一家八口得救等）雖然有相同說法的不多，但是絕非偶然。同時，絕大部分的傳說都以當地的山脈為背景，只有聖經的記載卻是在以色列北方遙遠的亞拉臘山為方舟停靠處，也間接證明了聖經的客觀性。亞拉臘山的地理位置很特殊，由此處到歐、亞、非三洲任何一處都沒有困難。而以世界地圖來看，全世界各大洲的質量重心位於土耳其的首都安卡拉，距亞拉臘山約600哩。亞拉臘山的雪水也正是幼發拉底河的源頭，由此到富饒的兩河流域只有700哩，那裡正是人類古文明的發源地！這些事實顯明了聖經中有關洪水的記載是可信的，其可靠性超過我們所想像的。
              </p>

              <div>
                <h3 className="font-bold text-amber-800 text-lg mb-3">結語</h3>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  洪水的審判，不僅在聖經有清楚的記載，也在華人的文化素材及全人類各民族留下見證，而且普世性的化石遺跡，也見證這個普世性的大審判。如聖經所記：「他們故意忘記，從太古，憑上帝的命有了天，並從水而出、藉水而成的地。故此，
                </p>

                <PageTag page={89} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  當時的世界被水淹沒就消滅了。但現在的天地還是憑著那命存留，直留到不敬虔之人受審判遭沉淪的日子，用火焚燒。」（彼後三5-7）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  挪亞是信靠上帝的人，他有因信稱義的恩典，因此是個義人。挪亞那世代罪惡滿盈，整個社會充滿強暴、詭詐，相對之下挪亞可算是一個完全人。如今我們也因信稱義，也要在這世代成為一個像挪亞那樣的完全人；這不表示我們不會犯罪或做錯事，乃是靠神過成聖生活，犯罪隨即認罪悔改，成為為主發光、影響別人的人。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  挪亞一家人經歷死而復活的過程，開啟新人類嶄新的一頁。如今在末後也有個方舟：耶穌基督，在十字架上完成救贖大功，使凡信靠祂的人，在靈裡經歷與基督同死、同復活，成為新造的人。基督還要再來，信靠祂的人將免去末後的審判，如同挪亞一家藉方舟得救一般。
                </p>
              </div>
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
                '創世記六至九章記載，上帝以洪水審判全地的罪惡，惟挪亞一家八口因方舟得救；洪水退後，上帝與挪亞立約，以彩虹為記號，這是聖經對神公義審判與大能拯救的清楚見證。',
                '中國字「昔」「船」「舫」「沿」等字，分別描繪大水淹沒全地、八口躲避洪水、方舟承裝人與動物、洪水後存留繁衍等情節，與創世記六至九章的洪水記載緊密呼應。',
                '中國古籍《淮南子》、《路史》記載共工振滔洪水、女媧煉石補天等傳說，「挪亞」與「女媧」發音相近，且皆為天下人的祖先，暗示中國的女媧傳說可能與挪亞事蹟有關連。',
                '全世界超過兩百個民族、八十四個語言系統都留有洪水毀滅大地的傳說，經統計分析，這些傳說內容與聖經記載高度雷同，顯明洪水審判極可能是普世性而非地區性的事件。',
                '眾多洪水傳說中，唯獨聖經記載方舟停靠在地理位置獨特、可通達歐亞非三洲及兩河流域古文明發源地的亞拉臘山，這項客觀細節顯明聖經中洪水記載的可靠性超過其他傳說。',
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
    </div>
  );
}
