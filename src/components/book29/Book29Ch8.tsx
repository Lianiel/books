import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">安息的生命</h2>
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
              第五日與第二日的創造相關，第二日造空氣，將水分到天上，預備了上下空間；第五日造水中活物與飛鳥，豐富了第二天所預備好的上下空間。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、藉浮力行動自如</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                水中活物與飛鳥有一個共通點，他們都藉浮力使他們能行動自如。水的浮力使物體漂浮起來，主要是由於物體的比重低於水；空氣的浮力能使在空中飛翔，主要是因為飛翔的時候下面的氣壓大過上面的氣壓。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魚兒水中游，鳥兒天上飛，是很多人夢想的情景，借用上述的原理，近代科學發明了潛水艇，可以像魚在水中游；又發明了飛機，可以像鳥在空中飛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈的生命有相似於魚的生命跟鳥的生命，因為可以有屬靈的浮力，這浮力就是神的能力，一個人安住在神的裡面時，可以感受到這個屬靈的浮力，使人不再為許多事業憂慮。聖經在登山訓眾告訴了這個生命，並且以飛鳥為例，說：「你們看那天上的飛鳥，也不種，也不收，也不積蓄在倉裡，你們的天父尚且養活牠……」耶穌在登山寶訓裡揭示了這個安息的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩人也以鳥類傳達心靈輕省的告白，能得到神的能力，使他如同得到浮力一般，克服各種苦難，飛到神的寶座前：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4 space-y-2 text-sm text-gray-700">
                <p>詩篇四8：「我必安然躺下睡覺，因為有你耶和華使我安然居住。」</p>
                <p>詩篇十一1：「我是以耶和華為避難所，你們怎麼對我說：你當像鳥飛到你的山上去？」</p>
                <p>詩篇十三5：「但我仍倚靠你的慈愛；我的心因你的救恩快樂。」</p>
                <p>詩篇十六8-9：「我將耶和華常常擺在我面前；因他在我右邊，我便不至搖動；因此，我的心歡喜，我的靈快樂；我的肉身也必安然居住。」</p>
                <p>詩篇三十四10：「少壯獅子還缺食忍饑，但尋求耶和華的什麼好處都不缺。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                這些都是大衛的詩，幾乎都是在艱難的境地中寫的，但他有一個安息的生命，因此能夠滿心地宣告神的指引與供應。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神賜鳥魚多生（魚、鴿子、老鷹）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在六日的創造中，只有第五日增加了魚、鳥要多生，以及第六日增加了人要生養眾多、遍滿全地：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4 space-y-2 text-sm text-gray-700">
                <p>對魚的祝福：「要生養眾多，充滿海中的水」（一22b）</p>
                <p>對飛鳥的祝福：「雀鳥也要多生在地上」（一22c）</p>
                <p>對人的祝福：神賜福給他們，要他們管理海中的魚、空中的鳥（一28節）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                這代表神特別欣賞水中的魚，及空中的鳥，因為魚所代表的安息之生命，乃是神所器重的生命。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">一、魚</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                從聖經中看到第五日對魚的祝禱，以西結書四十七章8-9節：「他對我說：這水往東方流去，流到亞拉巴，直到海；眾水流入海，海水就必得以治好。這河所到之處，凡滋生的動物都必生活，並且魚甚多；因為這水流到那裡，海水就變甜，這河所到之處，百物就都活了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                活水代表聖靈，如約翰福音七章37-39節所說：「人若渴了，可以到我這裡來喝。信我的人，就如經上所說：從他腹中要流出活水的江河來。」耶穌這話是指著信他之人要受聖靈說的。我們若能充滿聖靈活水，並且活活地供應給人，就能有如得著魚，且能極多的魚。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">二、鴿子</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                鳥類中，除了隼鳥可以代表安息的生命，另外還有鴿子、老鷹值得提出來。聖經中多次提到鴿子：
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                馬太福音三章16節：「耶穌受了洗，隨即從水裡上來，天忽然為他開了，他就看見神的靈彷彿鴿子降下，落在他身上。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                主耶穌對門徒說：「你們要靈巧像蛇，馴良像鴿子」（太十16），所以鴿子象徵聖潔的平靜與柔和。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                雅歌書二章14節：「我的鴿子啊，你在磐石穴中，在崖壁的隱密處，求你容我看你的面貌，得聽你的聲音；因為你的聲音甜蜜，你的面貌秀美。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                鴿子的觀察力非常好，她在天空飛翔時，地上的東西在移動，她都能看清楚並注意位置，因此能精確記憶，也因此能幫助人類各種需要的助手。鴿子有許多美好的特質：真實、美麗、聖潔、謙良、和平，這些也是神兒女應有的特質，基督徒擁有鴿子的特質，可將和平的聲音傳遞給周遭的人。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">三、老鷹</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                神以老鷹來形容他自己，讓老鷹成為帶領以色列百姓的符號。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                出埃及記十九章4節：「我向埃及人所行的事，你們都看見了，且看我怎樣把你們背在鷹翅上，帶來歸我。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                申命記三十二章10-11節：「耶和華遇見他在曠野荒涼、野獸吼叫之地，就環繞他，看顧他，保護他如同保護眼中的瞳仁；又如鷹攪動巢穴，在幼雛以上兩翼展開，接取幼雛，背在兩翼之上。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                以賽亞書四十章28-31節：「你豈不曾知道嗎？你豈不曾聽見嗎？永在的神耶和華，創造地極的神，並不疲乏，也不困倦；他的智慧無法測透。疲乏的，他賜能力；軟弱的，他加力量。就是少年人也要疲乏困倦，強壯的也必全然跌倒；但那等候耶和華的必重新得力，他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、以撒代表安息生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書信心英雄第五位是以撒（來十一20），以撒的生命是第五日的創造所呈現的生命樣式，正如同第五日創造所呈現的安息生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以撒被父親亞伯拉罕帶上摩利亞山上獻祭，整個過程是安息的，乃是完全依據神的旨意，乃是完全順服的關係（創廿二14）。以撒的婚姻在安息中完成的，他也不需要去追求，不是因為自己去愛或憂慮而定的，乃是由父親及老僕人幫找到那神所命定的女孩，並帶領到他的面前，成為他的妻子（創廿四1-67）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以撒的工作也是在安息裡面，他不需要很費勁，就可以有百倍的收成；他與富貴的亞比米勒有生存的衝突，他不需要去爭奪，就能獲得水井；別人來爭水，他能多次退讓，再回到活水，因為神與他同在（創廿六12-22）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以撒的生命，是安息中工作的典範。他接被父親引導，在安息中被神配置，在安息中工作結果，在安息中讓步得水。這是第五日創造所呈現的安息生命——如同魚在活水中游，如同鳥在空氣中飛，不靠爭奪，靠著神所賜的浮力自如行動。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                願我們都如同水中的魚、空中的鳥，得著神所賜的浮力，遨遊飛翔，生命繁多，如魚充滿溪潭，如鳥得翱翔豐富，如鴿子為主傳遞，如老鷹展翅上騰。回到神的懷抱，與神同行，在神的指引中，滿心宣告神的指引與供應，並且也供應別人，使更多人也帶著安息之生命，活活地供應給周圍的人。
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
                '第五日與第二日相對應：第二日造空氣預備上下空間，第五日造魚和飛鳥填充這個空間，象徵安息生命的填充與豐盛。',
                '屬靈的浮力是神的能力——一個人安住在神的裡面，可以感受到屬靈的浮力，不再為生命憂慮，如同魚在水中、鳥在空中自在行動。',
                '鴿子象徵聖靈（太三16）、純良（太十16）、潔淨（利五7）、美麗（雅二14）；基督徒擁有鴿子的特質，可傳遞和平。',
                '老鷹象徵神的保護與更新——「等候耶和華的必重新得力，他們必如鷹展翅上騰」（賽四十31），這是安息生命的最高境界。',
                '以撒是安息生命的信心英雄（來十一20）：他在安息中被獻（創廿二）、在安息中成婚（創廿四）、在安息中工作得百倍收成（創廿六）。',
                '安息的生命不是消極的等待，而是積極的信靠——如同魚、鴿子、老鷹，藉著神所賜的浮力行動自如，在神的供應中豐盛繁多。',
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
              '怎麼樣可以有屬靈的浮力呢？我們所需要的是什麼？',
              '聖經中找到魚和飛鳥有哪些特質及象徵？試說說鴿子、老鷹的特質，並嘗試分享。',
              '你現在的生命有哪些部分需要有安息呢？分享出來，讓大家代禱。',
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
