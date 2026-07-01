import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">天空上的水</h2>
        <p className="text-gray-500 mt-1">神說：諸水之間要有空氣，將水分為上下。神就造出空氣，將空氣以下的水、空氣以上的水分開了。事就這樣成了。神稱空氣為天。有晚上，有早晨，是第二日　創世記一6-8</p>
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
              神在第二日造了空氣，且藉空氣將水分上下，產生了天與地，這個天主要是地球大氣層範圍的天；這個地此時仍然是有水的地。第二日的重點是造出空氣，以及將部分的水移到天空之上，並且藉此形成了三度空間，有了天的概念。以下從空氣、天上的水、三度空間三方面來分享。

            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神造空氣</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                空氣這個字的原文是 רָקִיעַ（raqiya），在舊約聖經中出現15次，創世記一章裡面五次翻譯為「空氣」，三次翻譯為「天上或天空」，而詩篇二次、以西結書五次，則翻譯作「穹蒼」。但以理書一次翻譯作「天上」。目前最新的中文譯本把創世記裡面的 רָקִיעַ（raqiya）都翻譯作「穹蒼」，這是不恰當的。其實這個字基本的意思是「廣闊的空間」，延伸的意思是「天空」。若將十五處經文全部翻譯為空間或天空，都很合適。古時猶太人的觀念，認為天空像一個巨大的圓頂固體，接近中文的「穹蒼」，但猶太人的觀念不等於聖經的啟示。若要符合聖經的啟示，翻譯為空間或天空會比較正確。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結書五次都譯為「穹蒼」，這五處的內容都差不多，取以西結書十1為例：「我觀看，見基路伯頭上的穹蒼之中，顯出藍寶石的形狀，彷彿寶座的形像。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                而在14-20節，則是在講外太空，所以在 רָקִיעַ（raqiya）這個字的後面都附加說明是在「天上，שָׁמַיִם，shamayim」，一14直譯：「神說，天上的空間要有光體。……」一17直譯：「就把這些光擺列在天上的空間，普照在地上。」但新譯本卻翻譯為「天上的穹蒼」，這是不恰當的。神的話本來就很清楚，創世記一6-8是在講地球範圍的空間，所以只講 רָקִיעַ（raqiya），創世記一14-20是在講地球之上的空間，所以除了講 רָקִיעַ（raqiya），又加「天上，שָׁמַיִם，shamayim」來界定。而穹蒼乃是那個像圓頂的東西，上面有日、月、星，是人的視覺效果，並不能區分為地上的穹蒼與天上的穹蒼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若將穹蒼改譯為「空間」或「天空」，反而能讓文意更清楚。רָקִיעַ（raqiya）原意是「空間」，但根據上下文及近代科學的知識，在創世記一6-8裡面將之翻譯為「空氣」，乃是很合適的。因為神所造的這個空間，並非真空，而是有空氣充滿在其中。這是一百多年前眾多神學家、宣教士共同認同的翻譯，筆者給予贊同與欽佩。至於新譯本的「穹蒼」，真的非常不合適。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一6-7：「神說，諸水之間要有空氣，將水分為上下。神就造出空氣……」一般認為，在創世記第一章，神用「說」來造，這只是一個角度而已。第一日神造光是這樣沒錯，但第二日神造空氣，第四日神造光體，第五日神造水中活物與空中飛鳥，第六日神造陸上動物、造人，都是先說了之後，又有造的行動。「神先說，而後神工作」乃是更通常的模式。這表明，神若說了，他一定會去做，這是神的信實。在後來神與人的互動中，神常常先應許，或先預言，而後成就。並且很多時候，神希望人以禱告與神同工，而後神會動工。有一個鮮明的例子是，但以理從書上得知神的話論耶路撒冷荒涼的年數，七十年為滿。就去禁食禱告，懇求神成就這事。後來神也如此成就（但九1-19，代下卅六22-23）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在神實際的行動中，神給了光之後，接著給空氣，和天上的水，這些是生命所需。沒有光，不會產生生命；沒有空氣、沒有水，沒辦法維持生命，生命也不會成長。第三天神創造植物，植物需要光、空氣、水。第一天與第二天的創造是為第三天預備的。而前三天的創造又是為後三天預備的。因為要有植物進行光合作用才能產生動物與人類所需的食物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二7：「耶和華神用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人，名叫亞當。」這位有靈的活人，需要呼吸，以維持肉體的生命；也需要禱告，以維持屬靈的生命，禱告就是屬靈的呼吸。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人的呼吸，是吸入氧氣，呼出二氧化碳。所吸入的氧氣，在身體內進行燃燒，使身體有溫暖、有動力。同樣的，禱告時吸入神的靈，使我們的屬靈生命產生火熱與動力。呼吸是每時刻的，禱告也是每時刻的。
              </p>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <span className="font-semibold text-blue-800">屬靈應用：禱告帶來火熱的生命</span>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  神造空氣的屬靈應用，是關於禱告能帶來火熱的生命，這方面的真理，有啟示錄三15-20作為代表性經文：「我知道你的行為，你也不冷也不熱；我巴不得你或冷或熱。你既如溫水，也不冷也不熱，所以我必從我口中把你吐出去。……看哪，我站在門外叩門，若有聽見我聲音就開門的，我要進到他那裡去，我與他他與我一同坐席。」進到內室，與主親密，向神禱告，被聖靈充滿，必能擁有火熱的生命。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、天上的水</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一7：「將空氣以下的水、空氣以上的水分開了。事就這樣成了。」
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch5-water-above.png"
                  alt="圖四：天上的水，示意圖呈現地球、海洋、空氣、水氣層的分層結構"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖四：天上的水</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                這裡空氣以上的水是巨量的，可能佔了全部水的一半，不是現在看到的雲。創世記七11-12記載：「當挪亞六百歲，二月十七日那一天，大淵的泉源都裂開了，天上的窗戶也敞開了，四十晝夜降大雨在地上。」那個能下四十晝夜的大雨乃是來自神在第二天的創造中所分到天上的水。現在的雲，含水量不到全球總水量百分之一，即使烏雲密佈，若連續下大雨，很快就會下完。神創造的第二天，將水氣層或水層放在天上。若是水氣層，需要浮力；但因為量很大，也有可能是水層，那就需要像衛星，有一個繞著地球轉的速度，藉離心力留在天空上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個天上的水，水量豐沛，可供應乾淨的飲用水，因海水不能喝，天上的水下來，才合適人喝，那是淡水。當然地下水也有淡水，但大洪水前至少一千多年當中，一定也需要藉蒸發作用產生的水循環，使天上的水供應下來。天上的水（氣）層可保護地球，抵擋不好的宇宙射線、過量的太陽紫外線等。天上的水（氣）層還可以調節全地的溫度，本來地球上沒有極端的氣候，北極是溫暖的，赤道也不會太熱，全地像是一個大的伊甸園。目前從北極可挖出冰凍的長毛象，根據牠的皮下組織及胃裡的食物，可推知牠是溫帶動物。但洪水來臨時，水（氣）層破了，有一個快速的過程，讓北極立即變成極冷，長毛象很快被冷凍，可詳見孫大程博士的分析。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                天上的水（氣）層還能造成比較高的大氣壓力以及比較高的氧氣分壓，使得像恐龍這樣的大型哺乳動物能夠生存，身體大需要比現在更大的氣壓與氧壓，才比較容易將氧輸送到肢體末端。而人類因為生活在高氧壓的環境，所以普遍長壽，能活到九百多歲。大洪水後，已經沒有天上的水（氣）層，因此人的壽命快速減短，直到最多約120歲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">歸納起來，天上的水（氣）層共有五個功能：</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>供應可飲用的淡水。</li>
                  <li>抵擋宇宙射線，保護地上生物。</li>
                  <li>使太陽光的熱量平均分散全地。</li>
                  <li>提供高氧壓環境，使人與動物健康長壽。</li>
                  <li>作為審判工具，是大洪水的來源之一。</li>
                </ol>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <span className="font-semibold text-blue-800">屬靈應用：豐盛、喜樂的生命</span>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  天上的水的屬靈應用，是關於豐盛、喜樂的生命，我們飲於天上的活水，常常被聖靈充滿，就會有豐盛、喜樂的生命。如約翰福音七37-38所說：「節期的末日，就是最大之日，耶穌站著高聲說：人若渴了，可以到我這裡來喝。信我的人就如經上所說：從他腹中要流出活水的江河來。」
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、三度空間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一8：「神稱空氣為天。有晚上，有早晨，是第二日。」有了三度空間，啟動了天的觀念。第一日造光，有了光與暗，但整個地面是二度空間。到了第二日，造了空氣，把水分到空氣天上，才產生了三度空間。神稱空氣為天，或者更完整講，神稱這個被大氣層撐起來的大空間，以及更上面的一切為天。第二天產生的空間，提供了第五天水中的魚與天空的鳥所需要的空間。鷹的生命代表屬天的生命。四活物其中一個臉是鷹的臉。約翰福音用鷹來代表，因為約翰福音是在講耶穌屬天的生命。
              </p>
              <p className="text-gray-700 leading-relaxed">
                三度空間的屬靈應用是關於屬天的生命，對應希伯來書第二個信心偉人以諾。以諾是第一位升天的人。以諾與神同行三百年，而後被提升天。第二天造出來的天，讓將來的以諾有一個能升上去的方向。物質的天是有限的，以諾先從物質的天升上去，而後還要進到屬靈的天，也就是神所在的天堂。後來的以利亞升天，還有復活以後的基督耶穌升天，都是如此。因此保羅勉勵聖徒們：「你們要思念天上的事，不要思念地上的事。」（西三2）又說：「然而，神既有豐富的憐憫，因他愛我們的大愛，當我們死在過犯中的時候，便叫我們與基督一同活過來。你們得救是本乎恩。他又叫我們與基督耶穌一同復活，一同坐在天上。」（弗二4-6）我們現在坐在天上是靈性的，基督再來時的升天乃是全人的；先有現在屬天的生命，而後才會有將來被提升天的盼望。
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
                '空氣的原文「רָקִיעַ」（raqiya）出現15次，各處譯法不一（空氣、天上、穹蒼），本義是「廣闊的空間」；作者主張根據上下文及近代科學知識，翻譯為「空氣」比「穹蒼」更合適，因神所造的空間並非真空。',
                '「神先說，而後神工作」是創造中更通常的模式，如但以理禁食禱告後神成就七十年之期；這也啟示神與人同工的原則——人以禱告回應神的話，神隨後動工。',
                '天上的水（氣）層有五大功能：供應淡水、抵擋宇宙射線、調節全地溫度、提供高氧壓環境使人長壽、作為大洪水審判的來源之一；大洪水後水氣層破裂，人的壽命自此快速減短。',
                '呼吸維持肉體生命，禱告維持屬靈生命，二者都是「每時刻的」；神造空氣的屬靈應用在於禱告帶來火熱的生命（啟三15-20），天上的水的屬靈應用在於飽足喜樂的生命（約七37-38）。',
                '第二日造出空氣產生三度空間，對應以諾「與神同行而被提升天」的信心典範；物質的天有限，屬靈的天無限，我們現今坐在天上是靈性的，將來復活被提乃是全人的。',
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
              '神創造了空氣，這對我們的生存有何重要性？神造空氣的屬靈應用是甚麼？試分享你個人的領受與應用。',
              '天上的水有哪些功能？有什麼屬靈的應用？',
              '神在第二天創造了三度空間，這事有何重要性？請分別從大自然層面與屬靈層面來分享。',
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
