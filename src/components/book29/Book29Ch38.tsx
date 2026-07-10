import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch38() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第38章</h1>
        <h2 className="text-xl font-semibold text-gray-700">賜福與立約</h2>
        <p className="text-gray-500 mt-1">神賜福給挪亞和他的兒子，對他們說：你們要生養眾多，遍滿了地。　創世記九1</p>
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
              創世記九1-17記載，神指示挪亞要生養眾多，並吩咐不可吃血、流人血者血必被流。接著神慎重地以虹與挪亞、兒女、一切活物立永約，不再以洪水滅地。創世記八章第一句話是神紀念，九章第一句話是神賜福，這是洪水之後，神不斷賜給人的恩典。神對人的賜福，主要是生養眾多，這與創世記一章神對人的賜福是一致的，但在這個大方向裡面有一些新的做法，包括開放人可吃動物的肉，但不可吃血，因生命在血裡。這原則帶出洪水後第一個律法：流人血者，血被人流，因人有神的形像。神也與挪亞及一切活物立約，活物不再被洪水滅絕，並以虹為立約的記號。以下從「神賜福」與「神立約」兩大方面分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神賜福</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九1-6：「1神賜福給挪亞和他的兒子，對他們說：你們要生養眾多，遍滿了地。2凡地上的走獸和空中的飛鳥都必驚恐，懼怕你們，連地上一切的昆蟲並海裏一切的魚都交付你們的手。3凡活着的動物都可以作你們的食物。這一切我都賜給你們，如同菜蔬一樣。4惟獨肉帶着血，那就是牠的生命，你們不可吃。5流你們血、害你們命的，無論是獸是人，我必討他的罪，就是向各人的弟兄也是如此。6凡流人血的，他的血也必被人所流，因為　神造人是照自己的形像造的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神賜福挪亞和他的兒子，要生養眾多。生養眾多在第一節與第七節各講了一次，第一節的生養眾多，帶出可吃肉的鬆綁，並指示殺人償命的原則，這是本段要講的。第七節的生養眾多，帶出不再有洪水滅地的應許，這是下一段要講的。這都是出於神的恩惠、神的智慧。
              </p>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">一、可以吃肉</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  關於生養眾多，亞當是從一對夫妻開始的，挪亞若不再生育，那這次就是從三對夫妻開始。理論上會快三倍達到遍滿地面的目標，結果反而慢三倍，因為有以下三個負面因素，使遍滿地面這件事更加困難：
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 mb-3" style={{ fontSize: 'calc(1em - 4px)' }}>
                  <li>水氣層的保護失去了，高壓氧的環境也沒有了，熱帶極熱寒帶極冷，人的身體健康變差，疾病增加，人壽命減短。</li>
                  <li>地理環境變得複雜、險峻，常有水災、旱災、地震、瘟疫等，會致人於死。人也會水土不服，使遷徙與調適更加困難。</li>
                  <li>人被變亂口音，使人與人、族與群、國與國之間產生更多差異、競爭、衝突，增加謀殺、爭鬥，及戰爭殺人的情況。過去的四千多年，全世界人口有時不增反減，因為會遭逢天災或發生瘟疫、戰爭等。</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因應氣候問題，神開放人可以吃動物的肉，在此沒有規定只能吃潔淨的，後來在摩西律法中才有規定。當時天上的水氣層沒有了，地上有了極帶、寒帶、溫帶、熱帶、赤道等不同區域，寒帶太冷，熱帶太熱，但若只住溫帶，就太狹小了。所以人需要去住各種地方。後來的雅弗後裔往歐洲發展，寒帶居多，生育率會比較低。含的後裔往非洲發展，熱帶居多，死亡率會比較高。閃的後裔往亞洲發展，溫帶居多，氣候最好，生育率高，死亡率低，所以人口佔了全人類的一半。即使在溫帶，也會隨著季節變成太冷或太熱，若只靠蔬果為食，寒帶、溫帶的人都會糧食不足，所以神開放可吃肉。但強調不可吃血，因活物的生命在血中，「生命在血中」這個啟示，為「流血贖罪」與「流血償命」做了真理的根據。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從營養觀點，肉食、素食、雜食的方式，不同地區應有不同考量。例如素食主義係由緯度較低的熱帶地區推廣而來的，因為那地區的人吃植物就夠了。而對於緯度偏高的歐洲地區，肉類與乳酪類食品則比較能提供足夠的熱量與營養。身處溫熱帶的台灣，應不宜大量攝取歐美傳統的乳酪類食品，在崇尚外國飲食文化的同時，應一併評估所處的環境。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神開放人可以食用肉類，但告訴人不可吃血。從健康的觀點而言，血可能不是好的食物，但在缺乏食物的情況下或許有一點彈性。最重要是要了解及教導其屬靈的意義。神藉這事告訴我們血的重要性，血代表生命，特別指向耶穌基督流血捨命救贖人類的真理。因此基督徒什麼動物的血都不吃，但在屬靈生命裡唯獨吃喝耶穌的血，以此來凸顯耶穌寶血的功效。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  有人認為不吃血的原則僅適用於以色列人，因為律法是神給以色列人的。但細看聖經的教導，早在挪亞時代神就告訴人類不可吃血，這是給全人類的原則，不是只給以色列人的。也有人引用保羅的教導，認為只要感謝禱告就可以吃（林前十30），但從上下文可知，保羅所說的是關於原來可吃的肉，若被祭拜過該怎麼面對，並非指所有的東西。譬如青草不是人的食物，我們禱告了還是不能吃。對現今教會而言，這項原則應更多強調其屬靈意義。當我們選擇不吃血時，同時當見證基督寶血的救恩，而不是只把這事當律法來守。
                </p>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">二、流血償命</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  摩西律法裡面有十誡，關於人倫道德方面的有孝敬父母、不可殺人、不可姦淫、不可偷盜、不可做假見證、不可貪戀等六條。其中的不可殺人，是在摩西律法之前，遠在挪亞出方舟的時候就頒布了，所以這件事有其關鍵重要性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「討」這個字在原文共出現三次，中文聖經只翻譯出一次，全部譯出來是：「流你們血、害你們命的，我必追討：無論是獸是人，我必追討，就是向各人的弟兄也必追討他的命。」神三次講追討，表示必定執行。人應透過法律執行，不然神也會自己執行。因為這是對人生命權的尊重與保護。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  洪水之前，神對人類全然寬容，結果全地充滿罪惡與強暴。洪水之後，神為了保護人類的生命，使其得以遍滿全地並得蒙救贖，就訂定關於流人血的禁令與刑罰。有人認為將殺人犯判死刑，是不尊重其人權；但對於被殺的無辜者，人權又何在？有關死刑廢除與否的爭議，其實答案很清楚。殺人者死是重視受害者的生命權，並執行神的公義，可警惕想謀殺人的人，使其知道謀殺人的後果，有助於減少犯罪，因此死刑有其存在之必要性，這是出於神慈愛與公義的律法。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  創世記九6：「凡流人血的，他的血也必被人所流，因為神造人是照自己的形像造的。」這句話繼續顯明兩方面的意義，一方面是人的生命要被保護，一方面是神的公義要能彰顯，因為人是照神的形像造的。這句話還讓我們看到，雖然人犯罪墮落了，但神的形像還在人的裡面。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  約伯是個很好的例子，他敬畏神，常常為兒子獻祭、守望禱告：「筵宴的日子過了，約伯打發人去叫他們自潔。他清早起來，按著他們眾人的數目獻燔祭；因為他說：恐怕我兒子犯了罪，心中棄掉神。約伯常常這樣行。」（伯一5）他不是以色列人，那時還沒有以色列國。但他是挪亞的後裔，有傳承挪亞的獻祭，能常來親近神。自洪水之後，人可以藉著獻祭，回到神面前，使神的形像更加完整。總結來說，神賜福生養眾多，同時提出不可吃血、不流人血的禁令，乃是神對生命的看重與保護，也稍微啟示了贖罪祭當中血的意義。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神立約</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九7-11：「7你們要生養眾多，在地上昌盛繁茂。8神曉諭挪亞和他的兒子說：9我與你們和你們的後裔立約，10並與你們這裏的一切活物－就是飛鳥、牲畜、走獸，凡從方舟裏出來的活物－立約。11我與你們立約，凡有血肉的，不再被洪水滅絕，也不再有洪水毀壞地了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九7：「你們要生養眾多，在地上昌盛繁茂。」神第二次對挪亞及他的兒子們講要生養眾多，並且說在地上昌盛繁茂。如何達成呢？這跟緊接著說的立約有關。
              </p>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">一、立約內容——活物不再被洪水滅絕</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  創世記九9~17中，神幾乎在每節經文都提及「立約」，共說了八次。「八」是復活的數字——耶穌在第八天復活；挪亞一家八口進方舟，他們出方舟正如同復活一般，是一個全新的開始。這是神的賜福，跟我們經歷基督復活的生命是一樣的。舊有的一切全都淹沒了，而從方舟中出來的，都有嶄新的開始，這預表了復活。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  神藉著彩虹與挪亞及一切活物立約，應許不再以洪水毀滅全地，使人類及各種活物能夠放心地去生養眾多。有人認為洪水只是局部的，若這樣，神的應許就落空了。因為這四千多年來，仍有許多局部的洪水。挪亞時代的大洪水一定是淹沒全地的，神所應許的是，不會再有淹沒全地的大洪水。這的確是四千多年來沒發生的事，未來也不會發生。但是當人類再次遍滿全地，且罪惡滿盈時，神仍然有拯救與審判，將來的審判將會是火的審判，而不是水的審判。
                </p>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">二、立約記號——以彩虹為立約的記號</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  有人認為彩虹是本來就存在的自然現象，只是在洪水後被神使用作為與全人類立約的記號，這樣講是因為不知道天空水氣層的存在與消失。筆者認為彩虹必須是一個新的現象，在屬靈意義上，才能真的代表是神與人立約的記號。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從科學角度來理解也很重要。洪水之前，地球外圍被厚厚的水氣層包覆，水氣層阻擋了陽光，柔和的陽光間接照到全地，不會有彩虹的現象。大洪水過後，沒有水氣層的阻隔，陽光直接照射到雨後天空中的水珠，經由折射現象而產生彩虹；當水珠蒸發後，彩虹隨即消逝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  虹是否僅出現於雨後天空？的確是。因雲彩是由水氣而非水珠所組成，不會產生折射，下雨前不會有彩虹。所以我們可以確認，彩虹的確是洪水後神與人類立約的記號。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  中國古書《淮南子・覽冥篇》講到：「女媧熔煉五色石，以補蒼天。」意思是，蒼天有破洞，造成洪水，女媧用顏色如同彩虹的五色石來補蒼天的破洞，從此之後天上就有了彩虹。這雖是個傳說，但很可能是從歷史事實演變而來的。大洪水退後，上帝與挪亞立約，以彩虹為記號。是上帝將彩虹放在天空作為立約記號，應許不再以洪水毀滅世界，立約之後才有了彩虹。挪亞是目前全天下人的祖先，由此可知女媧的傳說跟挪亞是有關連的。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神創造人類時，便已賦予亞當、夏娃生養眾多、治理全地的使命，人類的確生養眾多、遍滿全地了，但並沒有正確地治理全地。因始祖悖逆、離開神，最終全地充滿罪惡，於是神以大洪水毀滅全地。洪水過後，神再次將這個生養眾多、治理全地的使命託付給挪亞一家。如今人類再次遍滿全地，不信神的人如同洪水前的人一樣，活在淫亂強暴之中，不僅無法按神的心意治理全地，更大大地破壞全地。人必須先與神連結、跟神有正確的關係，才可能以神的心意來治理全地。所以要像挪亞一樣，先從獻祭開始，先與神建立正確的關係。基督徒要將基督贖罪的救恩帶給更多人，培養更多國度人才，才能落實治理全地的使命。彩虹之約充滿慈愛，應許不再以洪水毀滅全地。但末日將有火的審判臨到全地，凡蒙受基督救贖的人將能逃避火的審判。基督已為我們流血捨命，只等我們將福音傳遍全地，完成大使命，讓更多人進到神永恆的賜福裡面。
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
                '神再次賜福挪亞和兒子要生養眾多，並開放人可吃動物的肉（因洪水後環境變差、遷徙更困難），但嚴禁吃血，因生命在血中，這為「流血贖罪」與「流血償命」立下真理根據。',
                '洪水後第一條律法「殺人者血必被流」，是為保護人的生命權、彰顯神的公義而設，也顯明人雖犯罪墮落，神的形像仍在人裡面；死刑因此有其存在的必要性。',
                '神與挪亞及一切活物立永約，共提及「立約」八次（八是復活的數字），應許不再以洪水滅絕全地；未來的審判將是火的審判，而非水的審判。',
                '彩虹是洪水後才出現的新現象（洪水前水氣層阻隔陽光，不會有彩虹），神以彩虹為立約記號；中國古書《淮南子》女媧補天的傳說，可能正是這段歷史的變形流傳。',
                '神將生養眾多、治理全地的使命再次交付挪亞一家，人須先與神建立正確關係（如獻祭），才能真正按神心意治理全地；彩虹之約滿有慈愛，但末日的火審判仍要臨到，唯有蒙基督救贖的人能逃避。',
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
              '洪水之後上帝給挪亞全家的吩咐，與最早給亞當、夏娃的吩咐有何異同？',
              '洪水之後，人要生養眾多，達到遍滿全地的目標，比洪水之前困難，原因有哪些？',
              '殺人者死的這個誡命，有何重要性？與神的那些屬性有關？這個誡命可以帶來甚麼果效？',
              '神與挪亞及一切活物立約，約的內容與約的記號是甚麼？跟今天的我們有何關係？',
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
