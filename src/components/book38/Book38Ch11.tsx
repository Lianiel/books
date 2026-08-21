import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">放膽講論神的道</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、彼得怎麼了？——從否認到宣講的轉變</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸開門見山問：彼得怎麼了？七週前他還因門徒身分四處躲藏，如今卻靠著耶穌堅定宣揚救恩；受難前夕他不認基督，如今卻公開承認基督是主。他回顧彼得在耶穌受難前的懦弱：一個侍女聽出他的口音、問他是不是認識耶穌，彼得就慌亂崩潰、發咒起誓否認：「我不認得那個人。」（馬太福音二十六章74節）但在五旬節，彼得卻對成千上萬人宣告：「你們釘在十字架上的這位耶穌，神已經立他為主，為基督了。」（使徒行傳二章36節）——這番宣言膽大包天，可能給那些曾對耶穌高喊「釘死他」的暴徒留下把柄，隨時可能招來私刑。陸可鐸感嘆：不過才五十天，彼得就從喪膽的軟弱之人成為英勇的鬥士——我們都能體會逾越節的彼得，也都在問同一個問題：為什麼我時常在兩者之間搖擺不定？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、五旬節的等候與降臨</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，答案就在耶穌在地上最後一篇信息裡：「不要離開耶路撒冷，要等候父所應許的……你們要受聖靈的洗。」（使徒行傳一章4-5節）他描述當時聚集的一百二十人：十二個門徒（除猶大外，加上替補的馬提亞）、耶穌的母親馬利亞、耶穌的兄弟們、可能還有抹大拉的馬利亞、約亞拿、蘇撒拿——他們不知道要等多久，也不確定自己在等什麼，只是照耶穌所說的去做，在耶路撒冷等候。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他描繪五旬節當天耶路撒冷的盛況：這是三大猶太節日之一，人口可能從十萬瞬間激增到一百萬，來自世界各地的猶太人——波斯人、米底亞人、阿拉伯猶太人、羅馬猶太人——齊聚一堂，市集裡各種方言此起彼落。陸可鐸說：神的時機不可能再更精巧了——基督的救贖已經完成，墳墓空了，祂也高升天上寶座，使徒們聚集禱告、等候聖靈的能力，此時至少有十五個國家的代表聚在同一座城市，時機成熟了。他引使徒行傳二章2-6節：「忽然，從天上有響聲下來，好像一陣大風吹過……又有舌頭如火焰顯現出來，分開落在他們各人頭上。他們就都被聖靈充滿，按著聖靈所賜的口才說起別國的話來。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、聖靈第一個果子——大能的溝通</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，聖靈「忽然」從「天上」降臨在「他們所坐的屋子」，暗示這完全出自聖靈的主權，與門徒當下的行為無關——路加大可以說聖靈降臨在「他們禱告的地方」，卻選擇說「他們所坐的屋子」。因著聖靈，人人都能憑大能說話，來自世界各地的人都聽到用「自己的語言」講述耶穌的故事：安得烈用埃及語宣揚神的美善，多馬用卡帕多奇亞方言重述神蹟，馬利亞用克里特語描述耶穌的降生——巴別塔創造的混亂在那一刻遭到逆轉。有旁觀者嘲諷門徒喝醉了，其他人驚奇地問：「這是什麼意思呢？」陸可鐸的解讀是：這至少代表聖靈的第一個果子，就是讓人能以有力的方式溝通——那些被視為「沒有學問的小民」（使徒行傳四章13節）能說出從未學過的語言，烈火從天而降，震撼了近三千人的心（使徒行傳二章41節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他引耶穌的應許：「不要思慮怎樣說話，或說什麼話……因為不是你們自己說的，乃是你們父的靈在你們裡頭說的」（馬太福音十章19-20節），以及「聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒瑪利亞，直到地極，作我的見證」（使徒行傳一章8節）。他強調：上帝並沒有撤銷這個應許——葛理翰、司布真、德蕾莎修女的一生都是明證。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、布蘭妲、安特納父親的黑板、麥可的榜樣</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸更想介紹的是幾位平凡人的見證。乳癌患者布蘭妲·瓊斯（Brenda Jones）在一次整形外科諮詢乳房重建手術時，反而向醫生分享耶穌在她生命中所成就的事，告訴彼特醫生：「祂也為你而死。」短短十五分鐘的對話徹底改變了醫生的一生——陸可鐸後來在一個寒冬於戶外游泳池為這位彼特醫生施洗（本書正是獻給他）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他分享巴西牧師安特納·岡克維夫斯（Antenor Goncalves）父親的故事：一位貧困社區的屋主在自家前廊豎起一塊黑板，天天寫上不同的聖經經文（如約翰福音三章16節），安特納牧師的父親每天上班經過都會停下來讀，漸漸被聖靈激動了心，敲響那戶人家的門，最終成為基督徒——當時安特納才兩歲，一塊黑板從此改變了一家人的生命。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他也分享自己高中同學麥可的故事：兩人都是橄欖球隊的候補球員，做了一些「基督徒男孩不該做的事」，麥可甚至還不是基督徒。後來麥可愛上了認識基督的潘，生命開始改變——他待人的方式不同了，變得柔軟溫和，即使與潘分手一兩次，對信仰的態度依然認真。陸可鐸說：他沒有長篇大論談耶穌，但天天和我聊天，分享他對老師的敬重、對他人的友愛，他的生命就是一篇行走的道——五年後，麥可美好的生命榜樣讓陸可鐸大膽在生命中做出同樣的改變。他總結：這些人在說服技巧上有驚天的過人之處嗎？沒有——唯一合理的解釋，就是五旬節的應許，聖靈給了凡夫俗子不平凡的力量。使徒行傳提到聖靈五十七次，其中三十六次聖靈都是藉著人的口說話！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、以便以謝——分享你獨特的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸鼓勵讀者學習分享自己的「以便以謝」（Ebenezer，意為「幫助之石」）——這個字出現在以色列人剛立國時，儘管親眼見證神蹟，只要遇到一點困難，仍然想掉頭回埃及，甚至造了金牛犢膜拜。年復一年，他們漸漸找到紀念神恩典的方法：某次戰爭大勝、經歷屬靈更新後，立起一塊「以便以謝石」紀念神的信實（撒母耳記上七章12節），向鄰舍與子孫展示，藉此回憶神的信實。陸可鐸問：你有哪些以便以謝的時刻呢？並非所有人都能像葛理翰佈道、像德蕾莎修女服事窮人，但生命中那些「唯有神能成就」的時刻，我們都曾經歷過。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他引耶穌對格拉森被鬼附之人的吩咐：「你回家去，到你的親屬那裡，將主為你所做的是何等大的事，是怎樣憐憫你，都告訴他們」（馬可福音五章19節）——換句話說，就是放膽講論神的道，讓人看見你的以便以謝石。他最後分享印度牧師塞繆爾·賈斯汀（Samuel Justin）的見證：警察上門審問他，質問「誰給你權柄做這些事的」，塞繆爾拿起聖經朗讀：「天上地下所有的權柄都賜給我了」，以及大使命的經文——警察在小冊子上記下「耶穌和祂的權柄」，然後表示要把「塞繆爾的權柄來自何處」回報上級，自那之後再也沒找教會麻煩，甚至保護他們傳福音。陸可鐸總結：別忘了你是藉著誰的權柄做工——憑信心禱告，憑神的大能講道，在安慰傷痛之人時，別忘了你認識天堂那位最能撫慰人心的聖靈。
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
                '彼得從否認基督到公開宣講基督，五十天內的轉變，關鍵不在他個人意志力的提升，而在於五旬節聖靈的澆灌。',
                '五旬節聖靈降臨時，讓門徒能用聽眾各自的語言傳講神的作為——這是巴別塔混亂的逆轉，也是聖靈的第一個果子：大能的溝通。',
                '聖靈給凡夫俗子不平凡的力量傳講耶穌：布蘭妲對醫生的分享、一塊路邊的黑板、一位候補球員的生命榜樣，都能成為神使用的管道。',
                '「以便以謝」提醒我們紀念並分享神在自己生命中「唯有神能成就」的時刻——這是每個信徒都擁有、卻常常忽略分享的見證。',
                '面對逼迫或質疑時，塞繆爾牧師的見證提醒我們：直接指向耶穌的權柄，往往比為自己辯護更有屬靈的力量。',
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
              <h4 className="font-semibold text-gray-800 mb-2">五旬節的「說方言」與今日靈恩運動的「說方言」是同一件事嗎？</h4>
              <p className="text-gray-700 leading-relaxed">
                使徒行傳二章記載的方言，是門徒說出聽眾能聽懂的「真實外國語言」（第6、8節「各人聽見門徒用眾人的鄉談說話」），這與哥林多前書十四章描述、需要有人翻譯才能被會眾理解的「靈語式」方言，在性質上有所不同，這也是不同教會傳統對「方言」神學理解分歧的部分原因。陸可鐸這一章的重點放在五旬節方言「讓人以有力方式溝通、跨越語言隔閡傳講福音」這個果效上，這是所有傳統都能認同的核心信息，不必因對方言神學的不同理解而錯過這一章真正的重點：聖靈能使用凡夫俗子，以超越自身能力的方式為基督作見證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「以便以謝」的操練，如何避免變成自我中心的見證分享？</h4>
              <p className="text-gray-700 leading-relaxed">
                分享個人見證是重要的屬靈操練，但也存在被誤用的風險——若見證的重點變成「看我多麼被神大大使用」，就偏離了原意。撒母耳記上七章12節「以便以謝石」的立石動作，命名意義是「到如今耶和華都幫助我們」，重點始終落在神的信實而非人的功勞或能力上。健康分享見證的原則，應該效法耶穌對格拉森被鬼附之人的吩咐：「將主為你所做的是何等大的事，是怎樣憐憫你」——焦點是神做了什麼、神的憐憫如何臨到，而不是分享者自己有多屬靈、多會表達。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">陸可鐸列舉的見證故事，涵蓋哪些不同的傳福音方式？</h4>
              <p className="text-gray-700 leading-relaxed">
                值得留意的是，陸可鐸刻意列舉了多種不同形式的見證管道：布蘭妲是主動、直接的言語分享；黑板屋主是被動、持續的文字見證（他甚至可能不知道自己的黑板改變了誰的生命）；麥可則完全是透過生命品格的長期影響，沒有一句直接的福音話語。這提醒我們，聖靈使用人傳福音的方式極其多元，不必勉強自己複製某一種特定的傳福音風格（如街頭佈道或激烈的護教辯論），而可以誠實地問聖靈：「祢想如何透過『我』這個獨特的人來傳講耶穌？」
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
              '對比路加福音二十二章54-62節否認基督的彼得，與使徒行傳二章大膽宣講的彼得，你認為自己現階段的信仰更接近哪一個彼得？為什麼？',
              '你是否曾在分享信仰時詞窮，或後悔沒有大方分享自己的信仰？是什麼讓你保持沉默？',
              '布蘭妲、安特納父親的黑板、麥可的生命榜樣，這三個故事中哪一個最能引起你的共鳴？為什麼？',
              '你生命中有「以便以謝」的時刻嗎——那些「唯有神能成就」的經歷？是什麼樣的經歷？為什麼這對你意義重大？',
              '你是否感覺自己被呼召要向某人分享信仰經歷？你想與誰分享？你會如何開口？',
              '如果你對分享信仰經歷感到猶豫，本章提到的這幾個故事，如何鼓勵你採取行動？',
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
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的「以便以謝」</h4>
              <p className="text-gray-700 mb-2">花時間回顧生命中一個「唯有神能成就」的時刻，寫成一段簡短的文字（三到五句話），練習用簡潔的語言表達。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 找一個人分享</h4>
              <p className="text-gray-700 mb-2">
                本週找一個安全、合適的機會，把你寫下的以便以謝分享給一位家人、朋友或同事，不需要長篇大論，簡單真誠地說出神在你生命中做了什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌱 反思你的「生命見證」</h4>
              <p className="text-gray-700 mb-2">
                像陸可鐸的同學麥可一樣，你的日常言行舉止是否也在無聲地見證基督？寫下一項你這週可以在待人接物上具體活出福音的行動。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，求祢賜給我像五旬節那天彼得一樣的膽量，讓我不再因懼怕而沉默。求祢使用我這個平凡的人，藉著言語或生命，為耶穌作見證。提醒我，這不是靠我自己的口才，而是祢在我裡頭說話。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
