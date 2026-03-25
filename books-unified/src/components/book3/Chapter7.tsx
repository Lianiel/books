import React from 'react';
import { BookOpen, Map, Users, Lightbulb } from 'lucide-react';

export default function Chapter7() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        附錄：保羅宣教於台灣拿撒勒人會之應用
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">台灣拿撒勒人會的現況與挑戰</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              使徒保羅留給當今教會寶貴的真理資產，他的宣教事工也給現今教會諸多啟發。筆者身為拿撒勒人會的牧者，看到台灣拿撒勒人會可以從保羅宣教模式進行許多反思。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 191</span>
            </p>
            <p>
              拿撒勒人會屬於衛理宗大家庭的一員，成立之初就強調「聖潔」教義，致力於建立屬於基督的教會，目標是「使萬民成為像基督的門徒」。而台灣拿撒勒人會從1956年開始，並於1987年被拿撒勒人會國際總會接納為「正式宣教地區」，至今已六十餘年，目前有39間地方堂會，近4000名信徒。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 191</span>
            </p>
            <p>
              總體來說，目前台灣拿撒勒人會發展面臨幾項挑戰與困境，包括：
              <br />(1) 地方堂會和信徒數量偏低。
              <br />(2) 牧者團隊趨向老化。
              <br />(3) 地區總會與地方堂會、地方堂會彼此之間互動不足。
              <br />(4) 欠缺詳細規劃、思慮清晰的宣教計畫與目標。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 192</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Map className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">追尋保羅宣教典範的建議</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              追尋保羅的宣教典範，並對照台灣拿撒勒人會的現況，對台灣拿撒勒人會的宣教與發展提出以下建議：
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 193</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">(1) 在教導培訓方面</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>a. 強化地方堂會的聖經基礎訓練：</strong> 效法保羅對真理的堅持，建立信徒扎實的聖經根基，避免在各樣異端或世俗思潮中隨波逐流。</li>
              <li><strong>b. 強化台灣拿撒勒神學院的運作：</strong> 神學院是培育傳道人的搖籃，應加強神學教育的深度與廣度，裝備未來的牧者具備保羅般的宣教視野與神學素養。</li>
              <li><strong>c. 對於地方堂會牧者引進之教會發展策略，地區總會應予以把關審核：</strong> 避免盲目跟風，確保引進的策略符合聖經真理及本會的信仰傳統。</li>
            </ul>
            <p className="text-sm text-slate-500 mt-2 text-right">p. 193</p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">(2) 在宣教事工方面</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>a. 在一線都市選擇已略具規模，並有宣教意願之拿撒勒人會地方堂會：</strong> 效法保羅以大城市為宣教據點的策略，集中資源建立強而有力的母會，再向外擴展。</li>
              <li><strong>b. 由地區總會主導，結合「宣道團契」成立「任務型」的宣教小組：</strong> 打破堂會本位主義，整合跨堂會資源，針對特定群體或地區進行策略性宣教。</li>
              <li><strong>c. 強化女性同工的角色：</strong> 肯定並成全女性在教會各項事工中的恩賜與貢獻，如同保羅團隊中的呂底亞、百基拉等人。</li>
            </ul>
            <p className="text-sm text-slate-500 mt-2 text-right">p. 194</p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">(3) 在牧養方面</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>a. 強化信徒的服事訓練：</strong> 落實「成全聖徒，各盡其職」的理念，裝備信徒參與教會建造。</li>
              <li><strong>b. 增加團隊之間的橫向聯繫：</strong> 促進各地方堂會牧者與信徒的交流合作，建立如初代教會般緊密的屬靈網絡。</li>
              <li><strong>c. 看重牧者團隊的靈命塑造：</strong> 牧者的生命是教會的火車頭，必須持續關注牧者的靈命健康與成長。</li>
            </ul>
            <p className="text-sm text-slate-500 mt-2 text-right">p. 194-195</p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">(4) 在人才培育方面</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>a. 勇於納入年輕牧者加入教派的服事團隊：</strong> 效法保羅提攜提摩太、提多，給予年輕一代發揮恩賜的空間與承擔責任的機會。</li>
              <li><strong>b. 慎選進入團隊之成員背景與素質：</strong> 確保同工在信仰、品格與異象上的一致性。</li>
              <li><strong>c. 強化團隊紀律要求：</strong> 建立健康的團隊文化，要求同工在生活與事奉上展現基督徒的見證。</li>
            </ul>
            <p className="text-sm text-slate-500 mt-2 text-right">p. 195</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">延伸探討：宗派的更新與突破</h2>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 text-slate-700">
            <div className="mb-4 text-sm font-medium text-indigo-700 bg-indigo-100/50 p-3 rounded border border-indigo-200">
              【延伸探討來源：參照賈榮禮《宣教學概論》並結合台灣拿撒勒人會之宣教處境反思】
            </div>
            <h3 className="font-bold text-indigo-900 mb-4 text-lg">宗派的更新與突破：從保羅模式看台灣教會的未來</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800 mb-2">一、 傳統與創新的張力：在堅守真理中靈活處境化</h4>
                <p className="mb-2">
                  拿撒勒人會作為衛理宗的一支，擁有極為美好的「聖潔」信仰傳統。然而，在快速變遷的現代社會中，如何讓這份傳統不流於僵化的教條，而是成為轉化生命的力量，是極大的挑戰。賈榮禮在《宣教學概論》中特別強調，宣教必須在「堅守基要真理」與「文化適應（處境化）」之間取得微妙的平衡。
                </p>
                <p>
                  保羅正是處理這種張力的大師。他對福音的核心真理（如因信稱義、基督的死與復活）絕不妥協，但在面對不同文化背景的群體時，他卻能靈活調整傳遞信息的方式——「向猶太人，我就作猶太人...向沒有律法的人，我就作沒有律法的人」（林前九20-21）。台灣的宗派教會在面對當代多元文化、後現代思潮以及新世代的價值觀時，必須學習保羅的智慧：在教義的持守上堅如磐石，但在宣教策略、敬拜形式與溝通語言上，則需要有勇敢創新與跨越文化藩籬的彈性，使「聖潔」的真理能以當代人聽得懂的語言被傳揚。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">二、 資源整合與團隊作戰：打破堂會本位主義</h4>
                <p className="mb-2">
                  目前台灣許多宗派（包括拿撒勒人會）都面臨著地方堂會規模偏小、資源分散、甚至逐漸老化的困境。在這種情況下，若各堂會仍堅持「單打獨鬥」或陷入「堂會本位主義」，將難以在宣教上取得突破。保羅的宣教模式給了我們一劑強心針：他不僅建立地方教會，更致力於建立教會之間的連結網絡（如推動外邦教會為耶路撒冷教會奉獻），並組建跨地區的「任務型宣教團隊」。
                </p>
                <p>
                  這提醒了現代的宗派總會，其角色不應僅限於行政管理，而應成為宣教資源的整合者與戰略的發動者。總會可以主導策劃，將不同堂會的人力、物力與恩賜集中起來，針對特定的一線城市、新興社區或特定未得群體，進行有組織的「團隊作戰」。透過建立跨堂會的宣教小組，不僅能發揮一加一大於二的綜效，也能在合作中激發各堂會的宣教熱忱，帶來宗派整體的復興。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">三、 世代傳承的急迫性：刻意營造接納與成全的環境</h4>
                <p className="mb-2">
                  牧者團隊的老化是台灣教會普遍面臨的嚴峻危機。如果沒有新一代的領袖接棒，教會的未來將岌岌可危。保羅之所以能將福音傳遍小亞細亞與歐洲，一個關鍵因素在於他身邊總有一群被他刻意栽培的年輕同工（如提摩太、提多、馬可等）。保羅不僅教導他們，更信任他們，將重要的牧養與教導責任託付給他們。
                </p>
                <p>
                  面對世代交替的挑戰，教會必須刻意營造一個能夠接納、成全並賦權給年輕人的環境。這意味著資深牧者需要有屬靈的父母心腸，願意花時間陪伴年輕一代，容許他們在服事中摸索甚至犯錯；同時，教會的體制也需要更具彈性，讓年輕傳道人有空間發揮他們對新世代的洞察力與創意。唯有當教會真正看重並落實「世代傳承」，如同保羅將福音的棒子交給提摩太一般，宣道的聖工才能生生不息，持續在下一個世代結出豐碩的果實。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
