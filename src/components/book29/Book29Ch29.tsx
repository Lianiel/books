import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch29() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">以諾的一生</h2>
        <p className="text-gray-500 mt-1">以諾活到六十五歲，生了瑪土撒拉。以諾生瑪土撒拉之後，與上帝同行三百年，並且生兒育女。以諾共活了三百六十五年。以諾與上帝同行，上帝把他接去，他就不在了。……拉麥活到一百八十二歲，生了一個兒子，給他起名叫挪亞。創世記五21-32</p>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed">
                上一章已經說了一些以諾的事，本章更深入來分享。以諾生命中最突出的兩件事乃是「與神同行」以及「被提升天」。塞特的後裔有兩個特色，一是求告、宣告神的名，二是注重生養，有生有死，這樣延續了好幾百年。似乎有一點光，但也是陰暗的，因為每個人的結局都是死亡，都在吃禁果的咒詛裡面。但到了以諾，產生很大的改變，帶來極大的盼望。他不僅求告神，而且進一步能親密地與神同行。他人生的結尾不是死亡，而是被提升天。這如同耶穌基督的福音所帶給我們的拯救與盼望，耶穌親密地與神同行，死而復活，且被提升天，我們在基督耶穌裡也能親密地與神同行，且能經歷死而復活，或者直接被提升天。以下從這兩方面來分享。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、與神同行</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以諾六十五歲生瑪土撒拉，而後與神同行三百年。過程中，以諾對瑪土撒拉可能有特別細心的照顧，使瑪土撒拉能活得愈久愈好，因為瑪土撒拉一死，審判就會臨到。以諾不僅在身體的層面照顧他，也要在靈性的層面照顧他，因為必須身心靈都健康，才能真正長壽。這也會幫助以諾自己持續地與神同行，因為身教是最好的教育，能帶出最大的影響。可以想見，瑪土撒拉也因此成為一個敬虔的人，繼續影響他的兒子拉麥、孫子挪亞。瑪土撒拉與拉麥重疊777年，與挪亞重疊600年，想像一個敬虔的屬靈父老，由於他的長壽與成熟，多代同行，長久為兒孫守望代禱，產生多麼美好的果效。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一幅圖畫，是與神同行的寫照，以撒與父親亞伯拉罕一起前往摩利亞山，準備獻祭。兩次講到二人同行，以撒單純順服，一直到被綁在祭壇上，都是如此。創世記廿二6-10：「6亞伯拉罕把燔祭的柴放在他兒子以撒身上，自己手裡拿著火與刀；於是二人同行。7以撒對他父親亞伯拉罕說：我父啊！亞伯拉罕說：我兒，我在這裡。以撒說：看哪，火與柴都有了，但燔祭的羔羊在哪裡呢？8亞伯拉罕說：我兒，上帝必自己預備燔祭的羔羊。於是二人同行。9他們到了上帝指示他的地方，亞伯拉罕在那裡築壇，把柴擺好，綁了他兒子以撒，放在壇的柴上。10亞伯拉罕就伸手拿刀，要殺他的兒子。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                與神同行，是走在神所預備的道路上。耶穌一生成長、傳道，一直到被釘十字架的過程，都完全順服地與神同行，跟以撒相似。以撒後來沒有被獻為祭，而由神所預備的一頭公羊來代替。耶穌則真正的被獻為祭，死在十架上，為世人贖罪。第三天從死裡復活，四十天後被提升天。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另有一幅圖畫，是路得與婆婆拿俄米同行。路得記一16-19：「16路得說：不要勸我離開你，轉去不跟隨你。你往哪裡去，我也往哪裡去；你在哪裡住，我也在哪裡住；你的百姓就是我的百姓；你的上帝就是我的上帝。17你死在哪裡，我也死在哪裡，葬在哪裡。只有死能使你我分離；不然，願耶和華重重懲罰我！18拿俄米見路得決意要跟自己去，就不再對她說甚麼了。19於是二人同行，來到伯利恆。……」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                與神同行，是完全與神認同、與神合一，如同路得所說：「你往那裡去，我也往那裡去，你的國就是我的國，你的神就是我的神。」也如彌迦書六8所說：「世人哪，耶和華已指示你何為善。他向你所要的是甚麼呢？只要你行公義，好憐憫，存謙卑的心，與你的神同行。」與神同行，是活出神的公義、憐憫、謙卑，使人藉著我們看見神的美好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在新約，有基督的救恩，並賜下聖靈，使我們更能真實與神同行，就是被聖靈充滿、被聖靈引導、體貼聖靈、跟隨聖靈、靠聖靈行事（弗五18，羅八4-5，加五25）。不僅有主耶穌的榜樣，也有彼得、保羅、提摩太等許多使徒、聖徒的榜樣。彼得曾經三次不認主，保羅曾經錯用熱心，逼迫基督徒，提摩太原來內向懦弱，但都被聖靈改變，成為與神同行的人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅勉勵提摩太：「你要逃避少年的私慾，同那清心禱告主的人追求公義、信德、仁愛、和平。」（提後二22）耶穌說：「無論在那裡，有兩三個人奉我的名聚會，那裡就有我在他們中間。」（太十八20）所以，有屬靈同伴一起與神同行，也是很重要的。復興禱告小組（RPG）是一個很好的方式，能幫助我們一生與神同行，不僅自己親近神，也能結出福音的果子，帶出美好的傳承。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、被提升天（創五21-24）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以諾有神的啟示，影響他能與神同行三百年，而後被提升天。我們今天也得到神的啟示，甚至更多、更豐富。因為整本聖經都在我們手中，就看我們是否願意每天來閱讀、默想、聆聽、實行神的話，有神的靈、神的道，使我們能確實地與神同行。如啟示錄所說：「念這書上預言的和那些聽見又遵守其中所記載的，都是有福的，因為日期近了。」（啟一3）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以諾被神接到天上，是與神同行、持守真道而得的賞賜，也是基督與末代聖徒被提升天的預表。按聖經記載，至今只有三個人被提，就是以諾、以利亞、耶穌，但在基督耶穌再來的時候，會有許多人被提。耶穌親自講被提的事：「26挪亞的日子怎樣，人子的日子也要怎樣。27那時候的人又吃又喝，又娶又嫁，到挪亞進方舟的那日，洪水就來，把他們全都滅了。28又好像羅得的日子；人又吃又喝，又買又賣，又耕種又蓋造。29到羅得出所多瑪的那日，就有火與硫磺從天上降下來，把他們全都滅了。30人子顯現的日子也要這樣。31當那日，人在房上，器具在屋裡，不要下來拿；人在田裡，也不要回家。32你們要回想羅得的妻子。33凡想要保全生命的，必喪掉生命；凡喪掉生命的，必救活生命。34我對你們說，當那一夜，兩個人在一個床上，要取去一個，撇下一個。35兩個女人一同推磨，要取去一個，撇下一個。」（路十七26-35）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅也講被提的事：「13論到睡了的人，我們不願意弟兄們不知道，恐怕你們憂傷，像那些沒有指望的人一樣。14我們若信耶穌死而復活了，那已經在耶穌裡睡了的人，神也必將他們與耶穌一同帶來。15我們現在照主的話告訴你們一件事：我們這活著還存留到主降臨的人，斷不能在那已經睡了的人之先。16因為主必親自從天降臨，有呼叫的聲音和天使長的聲音，又有神的號吹響；那在基督裡死了的人必先復活。17以後我們這活著還存留的人必和他們一同被提到雲裡，在空中與主相遇。這樣，我們就要和主永遠同在。」（帖前四13-17）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以諾那時接近末後世代，之後就有洪水的審判臨到全地。我們目前是在基督再來之前的末後世代，不久的未來，部分聖徒也會被提升天，而後有大災難的審判。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人認為創世記五24所說：「神將他『取去』，他就不在世了。」可能是指神取去以諾的靈魂，不一定是以諾被提升天。但希伯來書給我們清楚的答案：「以諾因著信，被接去，不至於見死，人也找不著他，因為神已經把他接去了；只是他被接去以先，已經得了神喜悅他的明證。」（來十一5）這裡清楚看見，以諾並不是只被取去靈魂，乃是真的沒有死，整個人被取去天上，跟復活的耶穌升天一樣，沒有身體存留在地上。並且希伯來書中說，以諾在被取去之前，已經得了神喜悅他的明證。那明證就是與神同行三百年的經歷，在與神同行的生活中滿有喜樂平安。這樣的明證是自己可以知道，別人也可以看得出來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌再來時我們是否會被提，乃取決於我們是否有與神同行。被提與得冠冕的條件是一樣的，使徒保羅在傳道中期的時候，仍不太確定自己是否可得冠冕，如哥林多前書九27所說：「我是攻克己身，叫身服我，恐怕我傳福音給別人，自己反被棄絕了。」但保羅在即將殉道前的最後日子則很確定，他說：「6我現在被澆奠，我離世的時候到了。7那美好的仗我已經打過了，當跑的路我已經跑盡了，所信的道我已經守住了。8從此以後，有公義的冠冕為我存留，就是按著公義審判的主到了那日要賜給我的；不但賜給我，也賜給凡愛慕他顯現的人。」（提後四6-8）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                瑪土撒拉187歲時生拉麥，又活了782年，他共活了969歲，是世上最長壽的人（創五26-27）。而拉麥182歲時生挪亞（創五28），挪亞600歲洪水來（創七6），182年加600年等於782年，正是瑪土撒拉生完拉麥之後繼續在世上的日子。因此洪水來的時候正是瑪土撒拉去世那年，應驗了神在他名字中的啟示。瑪土撒拉的長壽顯出神的慈愛與憐憫，因為神用最久的時間等候人悔改。
              </p>
              <p className="text-gray-700 leading-relaxed">
                從以諾到瑪土撒拉，到拉麥，到挪亞，他們都是敬虔的人。瑪土撒拉應是一位很好的代禱者，他為挪亞禱告，使他能夠去全世界宣教，他死的時候，挪亞的宣教任務也完成了。但挪亞的兄弟姊妹及當代大部分的人都沒有進方舟，他們繼續活在當時高度文明社會的種種享樂之中，正像所多瑪、蛾摩拉城裡的人一樣。他們不相信挪亞所傳的信息，最後被大洪水所滅，只有挪亞一家八口進方舟得救。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                今天我們正處在與以諾、挪亞相似的時代，需要藉著與神同行，向世人見證神的美好與真實，並預備自己被提迎見主；也需要藉著傳道，使人知道末日近了，將有大災難及末日審判。我們要進入末後的方舟，也就是基督耶穌裡面，才能避免滅亡，且能永遠與神同在。雖有人不願意信，但仍然有許多人可能信。如彼得後書三8-9所說：「8親愛的弟兄阿，有一件事你們不可忘記，就是主看一日如千年，千年如一日。9主所應許的尚未成就，有人以為他是耽延，其實不是耽延，乃是寬容你們，不願有一人沉淪，乃願人人都悔改。」
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
                '以諾生命最突出的兩件事：與神同行三百年、被提升天——他的人生結尾不是死亡而是被提，為咒詛之下的世代帶來極大盼望，預表基督福音的拯救。',
                '以諾在生瑪土撒拉（意為「他死之後將帶來審判」）之後開始與神同行；身教是最好的教育，敬虔的傳承從以諾延續到瑪土撒拉、拉麥、挪亞。',
                '與神同行的兩幅圖畫：以撒與亞伯拉罕同行（單純順服，走在神預備的道路上，預表耶穌順服至死）；路得與拿俄米同行（完全認同、完全合一）——並要行公義、好憐憫、存謙卑的心（彌六8）。',
                '新約時代靠聖靈與神同行：被聖靈充滿、引導、體貼聖靈、跟隨聖靈、靠聖靈行事；且需要屬靈同伴（兩三個人奉主名聚會），復興禱告小組是很好的方式。',
                '至今被提的只有以諾、以利亞、耶穌三人，但主再來時將有許多人被提（路十七、帖前四）；希伯來書十一5證實以諾是整個人被接去，未曾見死；被提與得冠冕的條件一樣——在乎是否與神同行。',
                '瑪土撒拉活969歲，是世上最長壽的人，他去世那年正是洪水來到之年，應驗名字中的啟示；他的長壽顯出神的慈愛——神用最久的時間等候人悔改。',
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
              '以諾的生命有哪兩件最突出的事？請選擇其中一項來分享。',
              '現今生活中，我們可以怎樣與神同行？談談你可能的做法。',
              '你盼望像以諾一樣被提嗎？我們當如何預備自己？',
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
