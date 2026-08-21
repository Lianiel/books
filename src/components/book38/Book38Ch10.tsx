import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">活水湧流</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、十八世紀美國的屬靈荒涼，與甘蔗嶺教會的復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸描繪一個「基督信仰衰頹、對靈性生活漠不關心、聖經權威受質疑」的社會景象——他先讓讀者以為這是在描述美國當代的困境，接著揭曉：這其實是十八世紀美國邊境地區的屬靈光景。衛理公會主教阿斯伯里（Francis Asbury）1794年報告：「沒有人來這裡是為了追求信仰，他們來只是為了獲得一大片好土地。」但隨後發生了一件奇妙的事：復興的甘霖開始降臨——第一滴甘霖落在肯塔基州的甘蔗嶺教會（Cane Ridge Church），牧會的長老會牧師巴頓·W·斯通（Barton W. Stone）與幾十位教會領袖迫切為復興禱告，舉辦長時間的聖餐聚會。
              </p>
              <p className="text-gray-700 leading-relaxed">
                1801年8月6日，這座只能容納約五百人的簡陋會堂，接下來三天竟聚集了一萬到兩萬五千名敬拜者，他們攀山越嶺、坐馬車騎馬步行而來，凝神聽道、舉手敬拜、同領聖餐，經歷個人的屬靈復興，哭泣呻吟呼喊的聲音不絕於耳。歷史學家評論，這可能是「美國歷史上最重要的宗教集會」，福音派基督教因此崛起並迅速擴展，往後數十年許多營會都在呼喊：「主啊，求祢讓我們再一次經歷甘蔗嶺的復興。」屬靈浪潮爆發，第二次大覺醒由此誕生，教會出席率上升，社會開始改革，靈性覺醒直接促成奴隸制度的廢除與婦女權利的保障。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、今日的孤獨與絕望數據——渴望復興的理由</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸問：你渴望在當今世代看見神如此奇妙的作為嗎？我也很渴望。他列舉美國當代的統計數據：基督教信徒數量十年內下降12%，相信上帝的人愈來愈少，相信鬼魂的人卻在增加；千禧世代有三成表示感到孤獨，22%認為自己一個朋友都沒有；重度憂鬱症人口在每個年齡層都在增加，青少年與年輕人攀升比例最快；美國自殺率創下二戰以來新高，自1999年以來增加了33%。他分享一位朋友告訴他，自己決定不生孩子，因為無法忍受孩子將來要活在這樣的世界裡——他說：我們能理解她的擔憂。但他接著說：然而，我們仍然可以懷抱盼望，因為復興隨時可能來到——在適當的時候，神會打開天窗，祂的聖靈將如江河般湧入我們的社會、生活的每一個角落，這是耶穌的應許。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、住棚節與耶穌的宣告——「人若渴了」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引約翰福音七章37-38節：「節期的末日，就是最大之日，耶穌站著高聲說：『人若渴了，可以到我這裡來喝。信我的人就如經上所說：從他腹中要流出活水的江河來。』」他描述住棚節的背景——這是每年重演「摩西讓磐石出水」神蹟的節日，連續七天，每個早晨都有祭司用金罐取水，沿路走到聖殿，用漏斗將水倒在祭壇基座上；最後一天，祭司們像繞耶利哥城牆一樣繞祭壇七圈，澆上七個罐子的水。就在這樣的時刻，這位來自北方鄉村的粗獷拉比站起身來（教師通常是坐著說話，這位卻不同），高聲發出重大的邀請：「到我這裡來喝吧。」約翰罕見地為自己的經文做了註釋：耶穌在這裡所說的，就是聖靈。
              </p>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸強調，這個應許唯一的條件是「人若渴了」——不是「人若配得、合格、受過訓練或足夠成熟」，只需要承認自己渴了：青少年渴望友誼、老年人渴求盼望、心碎的人渴望再獲得一次機會、滿懷羞恥的女人渴求接納——我們都有渴望。他提醒：一個人可以參加一千場宗教聚會，卻解不了靈魂的渴求，唯有基督才能滿足我們對靈性的渴望。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、納尼亞傳奇的姬兒與獅子——「沒有別的溪流了」</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸引用魯益師（C.S. Lewis）《納尼亞傳奇》中的故事：小女孩姬兒進入陌生的國度，口渴難耐，找到一條溪流，卻因一旁有獅子而猶豫。獅子問她是否口渴，她說快渴死了，獅子說：「那就喝吧。」姬兒害怕地請求獅子先離開，隨即意識到這個請求多不合理；她又請求獅子保證不會對她動手，獅子說牠不做任何保證。姬兒問獅子是否吃過小女孩，獅子回答：「我吞噬過女孩和男孩、女人和男人、國王和皇帝、城市和王國。」姬兒說她不敢喝水，獅子說那她將渴死；她說會去找另一條溪流，獅子平淡地回答：「沒有別的溪流了。」陸可鐸說：基督是唯一的泉源。祂的邀請是「到我這裡來喝」——不是啜飲、不是淺嚐即止，而是大口大口地喝，一口氣吞下祂新鮮的活水，連我們生命最乾渴的部分也一同領受祂的澆灌。當我們這麼做，「活水的江河將流出」——耶穌進入我們的生命時，聖靈將傾洩而出，我們會成為周遭人的活水源頭。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、活水牧場的比喻——聖靈充滿的基督徒對社會的功用</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸以牧場經濟學為喻：能提高牧場價值的兩種方法，一是找到石油，二是發現水源——若牧場有河流、小溪或可鑽探的水源，廣告就會寫這是一座有「活水」的牧場，讓乾旱的土地變成有用的土地。他說：聖靈充滿的基督徒對社會也有同樣的功用——我們滋潤、安慰、柔軟一切，聖靈從我們身上湧流出來，流入世界的乾旱之地，復興就是這樣發生的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、德娜琳結帳的小故事，與威爾斯復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享妻子德娜琳最近的一次經歷：採買日用品時，她注意到一位坐輪椅、鼻子插著氧氣管的虛弱母親，被青少年孩子推著。德娜琳感到有感動要幫助她，機會就出現在排在這位母親身後結帳時——聖靈要她為這位女士付清購物費用。德娜琳事後說：「就是這麼簡單，真不知我怎麼沒早點想到。」那家人既驚訝又感激地道謝，德娜琳說這是她那天最美好的時刻（陸可鐸幽默地表示不太同意，他覺得最美好的時刻應該是早上醒來看到自己）。陸可鐸說：這樣的行為完全出於自願、發自內心，就像泉水從噴泉裡流出那般自然——把這件美好的小事乘以23億全球基督徒的數量，假設每人每天都回應聖靈的提醒去祝福他人，復興有沒有可能在這個時代發生？
              </p>
              <p className="text-gray-700 leading-relaxed">
                他引用兩段對復興的定義：「神奇妙的工作，由祂掌權。復興是神親自造訪祂的百姓、恢復他們，使他們再次甦醒，並進入神豐盛的祝福」，以及「復興是神藉著祂的能力與豐沛的大能，使原先沉睡的都甦醒過來，一股醞釀許久的全新力量突然爆發」。他引第一次大覺醒領袖愛德華茲（Jonathan Edwards）的話：「神以無比精彩的方式，接手了一切的工作，完成在正常情況下……要超過一年才能完成的工作。」他分享一位鄉村牧師的禱告：對世界處境感到沮喪，走到戶外，在地上畫了一個大圓，站在圓圈中央祈禱：「主啊，求祢賜下復興，從這個圈子裡的每一個人開始。」陸可鐸總結：改變從我們自己開始。他也提到二十世紀初威爾斯著名的復興，不到一年十萬人歸向基督——幾乎空無一人的酒吧不得不宣布關門，法院因沒有罪犯而空空蕩蕩，礦工甚至需要重新訓練礦場的騾子，因為礦工信主前講的都是髒話，現在再也不講了，騾子聽不懂新的語言，必須重新調教。他以此作結：乾渴的靈魂進前來吧，來到基督面前，讓活水的江河再一次湧流翻動。
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
                '十八世紀美國邊境地區的屬靈荒涼，與今日社會驚人地相似——但正是在這樣的荒涼中，甘蔗嶺教會的復興爆發，帶出了第二次大覺醒。',
                '面對今日孤獨感、憂鬱症、自殺率攀升的統計數據，陸可鐸提醒我們：復興隨時可能來到，這是耶穌自己的應許，不是空洞的樂觀。',
                '耶穌在住棚節的宣告「人若渴了，可以到我這裡來喝」，唯一的條件是承認自己渴了——不需要配得、合格或成熟。',
                '納尼亞傳奇中姬兒與獅子的故事提醒我們：基督是唯一的泉源，「沒有別的溪流了」——除祂以外，沒有什麼能真正解除靈魂的乾渴。',
                '聖靈充滿的基督徒對社會而言，如同乾旱牧場中的活水源頭——我們滋潤、安慰、柔軟一切，復興正是透過這樣的個人湧流累積而成。',
                '真正的復興，往往從自己開始——如那位鄉村牧師畫圈禱告「求祢賜下復興，從這個圈子裡的每一個人開始」。',
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
              <h4 className="font-semibold text-gray-800 mb-2">歷史上的「大覺醒」運動，是否總是帶來單純正面的社會結果？</h4>
              <p className="text-gray-700 leading-relaxed">
                甘蔗嶺聚會與第一、二次大覺醒確實在歷史上與廢奴運動、婦女權益等社會改革有關聯，這是歷史學界普遍認可的觀察。但同時，歷史學家也指出，這類大型復興運動的社會影響是複雜、多面向的，不同地區、不同群體的參與經驗也有差異（例如，奴隸主與被奴役者對同一場復興運動的體驗截然不同）。讀者可以把陸可鐸的敘述理解為對復興正面果效的合理強調，同時保持歷史學上的細緻理解——屬靈復興確實能成為社會改革的重要推動力，但這個過程往往漫長、複雜，不是單一場聚會就能立即、均等地改變整個社會結構。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「復興隨時可能來到」，這個信念與當代教會出席率持續下滑的現實如何並存？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸引用的統計數據顯示北美教會確實面臨嚴峻的世俗化挑戰，這與「復興隨時可能來到」的盼望之間存在張力。但歷史上多次大復興恰恰發生在教會看似最衰微、最不被看好的時刻（甘蔗嶺復興前的屬靈荒涼景況、威爾斯復興前礦區的道德敗壞）——這提醒我們，教會的外在數據下滑，不必然代表神的工作已經停止，反而歷史一再顯示，屬靈的低谷常常是復興的前奏。健康的態度是：既誠實面對當代教會面臨的真實挑戰，也不因此喪失對神主權介入歷史的盼望。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「人若渴了，可以到我這裡來喝」是否代表信仰只是為了滿足個人需求？</h4>
              <p className="text-gray-700 leading-relaxed">
                這節經文常被引用來強調基督信仰能滿足個人內心的渴望，但完整理解這段經文時，不能忽略緊接著的下一句「信我的人……從他腹中要流出活水的江河來」——喝水不是終點，而是為了成為他人的活水源頭（正如陸可鐸接下來以牧場、德娜琳的故事說明的）。這提醒我們，健康的信仰不應停留在「基督滿足了我的需要」的個人化階段，而應進一步活出「我也成為別人生命中的活水」的使命感，這正是這一章從「渴」到「流出」的完整敘事弧線。
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
              '你如何定義「復興」？你曾親身參與或見證過復興嗎？如果有，那是什麼樣的經歷？',
              '你是否曾經歷過「個人的復興」——對信仰的熱情被重新點燃的時刻？是什麼促成了這次復興？',
              '在你現在的生活中，你感受到哪些屬靈的渴望？你過去曾嘗試用什麼方式來滿足這種渴望？',
              '陸可鐸說，當聖靈從基督徒身上流出時，「我們滋潤、安慰、軟化一切」。聖靈是否曾以這種方式透過你、或透過別人向你作工？結果是什麼？',
              '如果你所在的城市或群體中，每一個基督徒都讓聖靈從自己身上流出，會是什麼樣的光景？是什麼攔阻了這件事的發生？',
              '今天，你可以做些什麼，讓自己無論到何處都成為生命與愛的泉源？',
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
              <h4 className="font-semibold text-green-700 mb-2">⭕ 為自己畫一個「復興的圓圈」</h4>
              <p className="text-gray-700 mb-2">仿照鄉村牧師的禱告，找一段安靜時間，禱告：「主啊，求祢賜下復興，從我自己開始。」誠實面對神想在你生命中先做的改變工作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💧 主動成為一次「活水」</h4>
              <p className="text-gray-700 mb-2">
                這一週留意生活中一個可以主動祝福陌生人或有需要之人的機會（如德娜琳為輪椅上的母親結帳），順著聖靈的提醒付諸行動。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想約翰福音七章37-38節</h4>
              <p className="text-gray-700 mb-2">
                找一段時間讀這兩節經文，誠實面對自己內心此刻最深的乾渴是什麼，把它帶到耶穌面前，領受祂應許的活水。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主耶穌，我承認我渴了。求祢讓我大口大口地喝祢的活水，滋潤我生命最乾渴的部分。求祢使我成為周遭人的活水源頭，讓復興從我自己開始，也求祢憐憫這個世代，讓祢的聖靈如江河湧流，臨到我的城市和國家。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
