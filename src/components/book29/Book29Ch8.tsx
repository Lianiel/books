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
        <p className="text-gray-500 mt-1">神說：水要多多滋生有生命的物；要有雀鳥飛在地面以上，天空之中。神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。神就賜福給這一切，說：滋生繁多，充滿海中的水；雀鳥也要多生在地上。有晚上，有早晨，是第五日　創世記一20-23</p>
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
              第五日與第二日的創造相關，第二日造空氣，將水分到天上，預備了上下空間，第五日造水中活物與飛鳥，豐富了第二天所預備好的上下空間。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、藉浮力行動自如</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                水中活物與飛鳥有一個共通點，他們都藉浮力使他們能行動自如。水的浮力使物體浮起來，主要是由於物體的比重低於水；空氣的浮力使鳥能在空中飛翔，主要是因為飛翔的時候下面的氣壓大過上面的氣壓。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魚兒水中游，鳥兒天上飛，是很多人羨慕的情景。借用上述的原理，近代科學發明了潛水艇，可以像魚在水中游；又發明了飛機，可以像鳥在空中飛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈的生命相似於魚的生命跟鳥的生命，因為可以有屬靈的浮力，這浮力就是神的能力。一個人安息在神的裡面時，可以感受到這個屬靈的浮力，使人不再為許多事憂慮。耶穌在登山寶訓就揭示了這個生命，並且以飛鳥為例證：「所以我告訴你們，不要為生命憂慮吃甚麼，喝甚麼；為身體憂慮穿甚麼。生命不勝於飲食麼？身體不勝於衣裳麼？你們看那天上的飛鳥，也不種，也不收，也不積蓄在倉裡，你們的天父尚且養活他。你們不比飛鳥貴重得多麼？」（太六25-26）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩人也以麻雀、燕子來形容這種安息的生命：「萬軍之耶和華我的王，我的神啊，在你祭壇那裡，麻雀為自己找著房屋，燕子為自己找著雛之窩。如此住在你殿中的便為有福！他們仍要讚美你。」（詩八十四3-4）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇有許多禱告。詩人信心的禱告能支取神的能力，使他如同得到浮力一般，克服像地心引力的各種苦難，飛到神的寶座前。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇四8：「我必安然躺下睡覺，因為獨有你耶和華使我安然居住。」詩篇五11：「凡投靠你的，願他們喜樂，時常歡呼，因為你護庇他們；又願那愛你名的人都靠你歡欣。」詩篇十三5：「但我倚靠你的慈愛；我的心因你的救恩快樂。」詩篇十六8-9：「我將耶和華常擺在我面前，因他在我右邊，我便不至搖動。因此，我的心歡喜，我的靈快樂；我的肉身也要安然居住。」詩篇卅四10：「少壯獅子還缺食忍餓，但尋求耶和華的甚麼好處都不缺。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這些都是大衛的詩，其寫詩背景幾乎都是在艱難的環境中，但他有一個安息的生命，所以能夠大有信心地宣告神的幫助與供應。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神吩咐魚鳥多生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在六日的創造中，只有第五日吩咐魚、鳥要多生，充滿海，遍滿地，以及第六日吩咐人要生養眾多，遍滿全地。對魚的祝福：滋生繁多，充滿海中的水；（22）對雀鳥的祝福：雀鳥也要多生在地上。（22c）對人的祝福：神就賜福給他們，又對他們說：要生養眾多，遍滿地面，治理這地，也要管理海裡的魚、空中的鳥，和地上各樣行動的活物。（28節）這代表神特別欣賞水中游的魚，及空中飛的鳥。因為魚、鳥所代表的有安息的生命，乃是神所喜悅的生命。
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">一、魚</h4>
                  <p className="text-gray-700 leading-relaxed">
                    從聖殿流出來的活水，醫治了死海，使死海有了極多的魚。這項祝福正像神在第五日對魚的祝福。以西結書四十七8-9：「他對我說：這水往東方流去，必下到亞拉巴，直到海。所發出來的水必流入鹽海，使水變甜（原文是得醫治；下同）。這河水所到之處，凡滋生的動物都必生活，並且因這流來的水必有極多的魚，海水也變甜了。這河水所到之處，百物都必生活。」活水代表聖靈，如約翰福音七38-39所說：「信我的人就如經上所說：從他腹中要流出活水的江河來。耶穌這話是指著信他之人要受聖靈說的。那時還沒有賜下聖靈來，因為耶穌尚未得著榮耀。」我們裡面若能充滿活水，並將活水供應給人，將能得人如得魚，且是極多的魚。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">二、鴿子</h4>
                  <p className="text-gray-700 leading-relaxed">
                    鳥類中，除了雀鳥可以表達安息的生命，另外還有鴿子、老鷹值得提出來。聖經中多次提到鴿子：馬太福音三16：「耶穌受了洗，隨即從水裡上來。天忽然為他開了，他就看見神的靈彷彿鴿子降下，落在他身上。」鴿子象徵聖靈的平安與聖潔。主耶穌對門徒說：「你們要……馴良像鴿子。」（太十16）所以鴿子象徵馴良。利未記五7：「他的力量若不夠獻一隻羊羔，就要因所犯的罪，把兩隻斑鳩或是兩隻雛鴿帶到耶和華面前為贖罪祭：一隻作贖罪祭，一隻作燔祭。」鴿子是潔淨的，獻祭時，若沒能力獻羊，可以獻上鴿子。鴿子也象徵秀美與真愛，如雅歌書所表達的。雅歌書一15：「我的佳偶，你甚美麗！你甚美麗！你的眼好像鴿子眼。」雅歌書二14：「我的鴿子啊，你在磐石穴中，在陡巖的隱密處。求你容我得見你的面貌，得聽你的聲音；因為你的聲音柔和，你的面貌秀美。」雅歌書四1：「我的佳偶，你甚美麗！你甚美麗！你的眼在帕子內好像鴿子眼。你的頭髮如同山羊群臥在基列山旁。」鴿子的視力非常好，牠在天空飛翔時，地上很小的東西在移動，牠都能看見。而且牠能清楚辨認方位與地方，因此能擔任傳遞遠方信息的使者，成為人類最好的助手。鴿子有多重美好的特質：真愛、秀美、聖潔、馴良、和平、佳音使者。這些也是神兒女應有的特質，基督徒擁有鴿子的特質，可將和平的福音傳給近處的人及遠處的人。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">三、老鷹</h4>
                  <p className="text-gray-700 leading-relaxed">
                    神以老鷹來形容他自己，講述他如何保護、帶領以色列百姓。出埃及記十九4：「我向埃及人所行的事，你們都看見了，且看見我如鷹將你們背在翅膀上，帶來歸我。」申命記卅二10-11：「耶和華遇見他在曠野荒涼野獸吼叫之地，就環繞他，看顧他，保護他，如同保護眼中的瞳人。又如鷹攪動巢窩，在雛鷹以上兩翅搧展，接取雛鷹，背在兩翼之上。」神也以老鷹來形容等候倚靠神的人，這是安息生命的樣式。以賽亞四十28-31：「你豈不曾知道麼？你豈不曾聽見麼？永在的神耶和華，創造地極的主，並不疲乏，也不困倦；他的智慧無法測度。疲乏的，他賜能力；軟弱的，他加力量。就是少年人也要疲乏困倦；強壯的也必全然跌倒。但那等候耶和華的必從新得力。他們必如鷹展翅上騰；他們奔跑卻不困倦，行走卻不疲乏。」
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                希伯來書信心英雄榜的第五位是以撒（來十一20），以撒的生命是安息的生命，正如同第五日的創造所呈現的生命樣式。以撒被父親亞伯拉罕帶去摩利亞山上，預備被獻祭給神，整個過程是安息的，他沒有任何抵抗或恐懼，乃是完全的順服。（創廿二1-14）以撒的婚姻是在安息中完成的，他不需要去戀愛、去追求，乃是由父親及老僕人幫他找到那位神所命定的，並帶到他的面前，成為他的妻子。（創廿四1-67）以撒的工作，也是在安息裡面，他不需要很辛勞，就可以有百倍的收成。他與當地的亞比米勒有生存空間的衝突，他不需要去爭，他都是禮讓。但不管他到哪裡，神都賜福他，他的僕人挖井就得活水井，別人來爭奪，他多次禮讓，再挖仍是活水井。因為神與他同在，這就是安息的生命。（創廿六12-22）在他人生的末了，為兩位兒子祝福，所祝福的都完全應驗，因為他是安息在神裡面的器皿。如希伯來書十一20所說：「以撒因著信，就指著將來的事給雅各、以掃祝福。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                願我們都如同水中的魚、空中的鳥，得著神所給的浮力，遨遊飛翔。如魚滋生繁多，如鳥充滿這地。如雀鳥得神餵養，如鴿子為主傳佳音，如老鷹展翅上騰，與神同行。如以撒，在神的同在中，有百倍收成，且多得活水，供應自己也供應別人。藉著活水的供應，而能得人如得魚，讓更多人也來得著神裡面安息的生命。
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
                '水中活物與飛鳥都藉浮力行動自如，屬靈生命也有這種「屬靈的浮力」——神的能力，使人安息在神裡面而不再憂慮（太六25-26），大衛的詩篇多次見證這種在艱難中仍安息倚靠神的生命。',
                '神只在第五日吩咐魚鳥「多生」、第六日吩咐人「生養眾多」，顯示神特別欣賞魚與鳥所代表的安息生命；魚代表聖靈活水滋生（結四十七、約七38-39）。',
                '鴿子象徵聖靈的平安聖潔（太三16）、馴良（太十16）、真愛秀美（雅歌書）；老鷹象徵神的保護帶領（出十九4、申卅二10-11）及等候倚靠神必從新得力（賽四十28-31）。',
                '希伯來書信心英雄榜第五位以撒，其獻祭、婚姻、工作、祝福兒子都在「安息」中完成，不爭競、不焦慮，因神與他同在，正是第五日創造所呈現的安息生命樣式。',
                '結語呼籲信徒如魚滋生、如鳥充滿、如鴿子傳佳音、如老鷹展翅、如以撒安息在神裡面得百倍收成，藉活水供應成為他人的祝福，一同進入神裡面安息的生命。',
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
              '怎麼樣可以有屬靈的浮力呢？我們所倚靠的是什麼？',
              '聖經中提到魚和鳥類有哪些特質及象徵？試試從魚、鴿子、老鷹來分享。',
              '你現在的生命有哪些部分需要回到安息呢？分享出來彼此代禱。',
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
