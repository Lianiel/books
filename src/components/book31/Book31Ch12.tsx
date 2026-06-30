import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">主耶穌再回來</h2>
        <p className="text-sm text-gray-500 mt-1">書頁 265–269（全書終章）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">將來必定會有審判</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神起初創造天地，時間進入了世界：一切既有開始，也必有終了的時候。這就是為什麼聖經是由創世記開始，而最後由啟示錄作為結束。啟示錄的主題，就是宣告復活榮耀的主將來必會回來，祂要施行最後審判，將會有一個嶄新天地成為義人的居所。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神最後的審判有一天會來臨，這是邏輯必然的結果。想想看，　神起初創造天地，在未了一切又歸於祂。這好像農夫辛苦播種、耕作，最後在豐收的時候他當然有權將好的收成放到倉庫裏，而將壞的和雜草扔在火中焚燒。所以　神在最後大審判的時候，使義人和接受祂救恩作祂主的人進入　神的國度，又把定罪那些墮落的人和拒絕祂救恩的人到火湖裏，這整個的結局是宇宙必然的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們若比較創世記前三章和啟示錄後三章在下列圖表中作一個概略的比較：
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="border border-teal-200 px-3 py-2 text-teal-700 font-semibold text-left">創世記前三章</th>
                      <th className="border border-teal-200 px-3 py-2 text-teal-700 font-semibold text-left">啟示錄後三章</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      ['起初　神創造天地', '看見一個嶄新天地'],
                      ['稱水的聚處為海', '海也不再有了'],
                      ['稱暗為夜', '不再有黑暗'],
                      ['神造了兩個大光', '不用日月光照，因有　神的榮耀光照，又有羔羊為城的燈'],
                      ['你吃的日子必定死', '不再有死亡'],
                      ['我必多多增添你懷胎的苦楚，生產兒女必多受苦楚', '不再有悲哀、哭號、疼痛'],
                      ['地必為你的緣故受咒詛', '以後再沒有咒詛'],
                      ['人被驅逐離開　神的面', '他們也要見　神的面'],
                      ['人被驅逐離開生命樹', '生命樹再度出現'],
                      ['有河從伊甸流出來滋潤那園子', '有一道生命水的河，從　神和羔羊的寶座流出來'],
                      ['使他修理看守伊甸園', '他們要作王，直到永永遠遠'],
                    ].map(([left, right], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-3 py-2">• {left}</td>
                        <td className="border border-gray-200 px-3 py-2">• {right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神如果由這個世界永遠敗壞下去，祂就不需要在前面有伊甸園和大洪水的審判，更不會介入巴別塔和所多瑪的審判；足見祂必定會為這個世界帶來了最後的審判。
              </p>
              <p className="text-gray-700 leading-relaxed">
                　神如果由人類死亡，祂定創世的時候，就不可能預備了使人永遠不死的生命樹。既有生命樹的存在，就說明　神原來的計劃是使人永遠不死，將來必會有永恆的生命。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">主耶穌回來前的預兆</h3>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch12-fig105-trumpet.jpg" alt="圖105 第七位天使吹號" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖105 — 第七位天使吹號，天上就有大聲音說：「世上的國，成了我主和主基督的國，祂要作王，直到永永遠遠。」（啟示錄十一章15節）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然會有將來的審判，所以主耶穌告訴我們祂回來得國前的種種預兆，好叫我們做好預備。祂說：「民要攻打民，國要攻打國，多處必有饑荒、地震。這都是災難的起頭。」（馬太福音二十四章7至8節）。我們回頭看二十世紀所發生的許多世界戰爭、各地的飢荒及地震頻繁，這種種現象已經說明我們很可能正接近主耶穌回來審判世人的期間了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌也提到對抗祂的各種預兆，假先知的出現、不法的事增多、人的愛心冷淡、福音傳遍天下、以色列人復國、敵基督褻瀆聖地、大災難將會發生等等，充分顯示在祂回來以前，人將面臨一個動盪不安的時代。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在聖經裏，主耶穌清楚指明我們的預言，乃至於世人已經聽聞主耶穌快回來審判的信息。在過去歷史裏，妄稱主耶穌歸某某月某日回來審判的假預言書實在不勝枚舉，以致於人們都撲了魔鬼的當計。主耶穌清楚告訴我們他回來的日子和時辰是不可能讓人知道的（馬太福音二十四章36節），祂甚至告訴我們大洪水以前的日子是怎麼樣，祂回來的日子也是怎麼樣。那時人照常吃喝嫁娶，許多人故意不見　神審判的種種預兆，當主耶穌再回來的時候，同樣的情形也將再度發生。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">更大的災難將會發生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅如此，主耶穌還清楚指明將來會有更大的災難接續發生，而這種大災難是創世以來從沒有發生過的，甚至連太陽系也會有非常劇烈的大變化。祂說：「必有大災難，從世界的起頭，直到如今，沒有這樣的災難，後來也必沒有……那些日子的災難一過去，日頭就變黑了，月亮也不放光，眾星要從天上墜落，天勢都要震動。」⁴
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我們看到啟示錄上記載的各種大災難將來會臨到忽忽的人身上：日月星辰變色、流星落到地球上、痛苦在人身上的可怕情景，處處說明當人類棄棄　神的時候，他們同時也棄棄了自己未來獲得永恆生命的盼望。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">沒有人知道那日子時辰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很遺憾，今天有太多的假先知發出許多不是出於　神的預言，乃至於世人已經聽麻木主耶穌快回來審判的信息。在過去歷史裏，妄稱主耶穌某某年某月某日回來審判的假預言書實在不勝枚舉，以致於人們都中了魔鬼的詭計。主耶穌清楚告訴我們，祂回來的日子和時辰是不可能讓人知道的，「那日子，那時辰，沒有人知道，連天上的使者也不知道，子也不知道，惟獨父知道。」（馬太福音二十四章36節）。祂甚至告訴我們大洪水以前的日子是怎麼樣，祂回來的日子也是怎麼樣。那時人照常吃喝嫁娶，許多人故意不見　神審判的種種預兆，當主耶穌再回來的時候，同樣的情形也將再度發生。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">今天接受主不要再遲疑</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人說：「我要等到看到主耶穌回來的時候，我再悔改歸向祂。」你若抱著這種心態等到那時候再說，一切就太遲了。那時候已成為定局，你還想著會有機會得救嗎？不要再等了。今天打開心門，接受耶穌基督作你個人的救主吧！讓祂給你随時的幫助，讓祂帶領你進入　神的國度。現在請你跟著我作以下的禱告：
              </p>
              <div className="bg-teal-50 rounded-lg p-5 my-4 border border-teal-100">
                <h4 className="text-center font-bold text-teal-800 mb-3">接受主耶穌的禱告詞</h4>
                <p className="text-gray-700 leading-relaxed italic">
                  「親愛的天父，我奉主耶穌基督的聖名到你面前來。求你赦免我過去的過失和錯誤，用主耶穌基督在十字架上所流的寶血洗淨我。我相信主耶穌基督是我的罪在十字架上捨命，在三天後從死裏復活，升天。將來還要回來，審判世界。因為我相信，我擁有有永恆的生命。現在我自願離開我的罪，打開我的心門接受主耶穌基督成為我的救主。感謝祢拯救我。這樣禱告，是奉拿撒勒主耶穌基督的聖名求。阿們。」
                </p>
                <p className="text-center text-teal-600 mt-3 font-medium text-sm">
                  願主耶穌基督的恩惠、天父的慈愛、聖靈的感動，常與我們眾人同在，從今直到永遠。阿們。
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-center text-gray-700 leading-relaxed italic">
                「我又看見死了的人，無論大小，都站在寶座前。案卷展開了，並且另有一卷展開，就是生命冊。死了的人都憑著這些案卷所記載的，照他們所行的受審判。於是海交出其中的死人，死亡和陰間也交出其中的死人，他們都照各人所行的受審判。死亡和陰間也被扔在火湖裏，這火湖就是第二次的死。若有人名字沒記在生命冊上，他就被扔在火湖裏。」
              </p>
              <p className="text-right text-sm text-teal-600 mt-2 font-medium">—— 啟示錄二十章12至15節 ——</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '歷史有起點（創世記），必有終點（啟示錄）——　神最後的審判是邏輯必然；正如農夫豐收時分開好壞，　神在末日也必分開義人與惡人。',
                '創世記與啟示錄互相呼應：失落的伊甸園（海、黑暗、咒詛、死亡、流離）將在新天新地中完全恢復（無海、無暗、無咒詛、無死、神的面、生命樹），　神的創造計劃絲毫沒有落空。',
                '主耶穌預言了回來前的預兆：民族戰爭、饑荒地震、假先知、愛心冷淡、福音傳遍天下、以色列復國——這些在二十世紀以後都在加速應驗。',
                '沒有任何人知道主再來的日子時辰（馬太福音二十四章36節）；那些預測具體日期的假先知都被歷史證明是錯的，信徒應當儆醒預備，而非計算日期。',
                '大災難的規模將是創世以來未曾有過的——太陽變黑、月亮不放光、眾星墜落；但這些都在　神的掌控之中，是審判的完成而非混沌的開始。',
                '今天就是接受主耶穌的時機——等到祂再來才悔改已太遲；現在打開心門，接受祂作個人救主，名字記在生命冊上，才是面對末日審判最穩妥的預備。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">創世記與啟示錄：聖經的拱形結構</h4>
              <p className="text-gray-700 leading-relaxed">
                神學家常說「聖經是一本書」，最有力的證據就是創世記與啟示錄的對應關係（inclusio）。兩者之間有超過11組平行主題，構成完美的文學拱形結構（chiasm）：失落的海、黑暗、死亡、咒詛、生命樹、　神的面……每一個在創世記中失去的，在啟示錄中都得到更美的恢復。這不是人為設計，而是　神在超過1500年的時間中透過40位作者，完成了同一個救贖敘事——這正是聖經靈感默示（Verbal Plenary Inspiration）的最有力明證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">主再來的預兆：已應驗與尚未應驗的</h4>
              <p className="text-gray-700 leading-relaxed">
                馬太福音二十四章的「橄欖山講論」列出了末日預兆，其中部分已在二十世紀明顯應驗：以色列1948年復國（「無花果樹」的比喻）、福音藉廣播電視傳遍地極、全球戰爭與飢荒規模空前。尚待應驗的包括：第三聖殿重建、敵基督出現、「那大淫婦」（啟示錄十七章）的全球一元宗教體系等。儆醒的信徒應理解：我們可能正活在歷史最接近主再來的時代。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「白色大寶座審判」與「基督台前的審判」的區別</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄二十章11至15節的「白色大寶座審判」是針對未信者的最終審判，以「案卷」（行為）和「生命冊」（是否接受救恩）為依據。這與哥林多後書五章10節的「基督台前的審判」（Bema Seat）不同——後者是針對已信者的賞賜審判（非定罪審判），評定信徒在地上的忠心服事。兩種審判的區別在於：前者決定去向（永生或火湖），後者決定賞賜（冠冕或虧損）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">本書的回顧：從創世到末世的十二大奧秘</h4>
              <p className="text-gray-700 leading-relaxed">
                《創世以來的奧秘》十二章的論述構成一個完整的世界觀：從進化論的謬誤（第一章）→ 地球年齡（第二章）→ 宇宙起源（第三章）→ 　神的創造（第四章）→ 伊甸園（第五章）→ 大洪水（第六章）→ 挪亞方舟（第七章）→ 地球環境（第八章）→ 人類制度（第九章）→ 民族遷徙（第十章）→　神的救贖（第十一章）→ 主耶穌再來（第十二章）。這十二章呈現了一個完整的「科學—歷史—神學」三位一體的世界觀，回答了21世紀現代人最根本的問題：我從哪裏來？我是誰？我往何處去？
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '創世記與啟示錄的對應讓你看到　神計劃的完整性。讀完這個對比表，你對「　神掌管歷史」這件事有什麼新的體會？',
              '主耶穌說回來的日子沒有人知道，但祂要我們儆醒預備。你覺得「儆醒預備」在你的日常生活中具體意味著什麼？你現在的生命狀態算是「預備好了」嗎？',
              '本章描述的末日大災難（天體異變、前所未有的患難）讓你有什麼感受？恐懼、期待，還是兩者都有？這種感受告訴了你什麼關於你與　神關係的事？',
              '「今天接受主不要再遲疑」——你身邊有沒有正在「等等再說」的人？是什麼讓他們還在等待？你可以為他們做什麼？',
              '讀完全書十二章，從進化論的謬誤到主耶穌再來，哪一章或哪一個論點對你的信仰衝擊最大？為什麼？',
              '如果主耶穌明天就要回來，你今天最想做的一件事是什麼？這個回答告訴了你什麼關於你現在的生命優先次序？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 讀完啟示錄作為本書的完結</h4>
              <p className="text-gray-700 mb-2">本書從創世記到啟示錄，讓末世的異象成為你信仰的盼望。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀啟示錄二十一章1至22章5節（新天新地），與創世記一至三章對照，默想　神計劃的完整性。</li>
                <li>把本章的「創世記vs啟示錄」對比表抄下來，放在你的聖經書籤裏，提醒自己歷史的終點是勝利而非虛無。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 以「末世眼光」重新評估生活優先次序</h4>
              <p className="text-gray-700 mb-2">主快回來——這個真相應當影響我們如何使用時間、金錢和關係。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這週花15分鐘安靜思考：如果主耶穌一年後回來，你的生活會有什麼不同？把這個問題帶到禱告中。</li>
                <li>寫下一件你一直在拖延、但若主快回來你會立刻去做的事，然後本週就去做。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 全書回顧：分享你最受影響的論點</h4>
              <p className="text-gray-700 mb-2">讀完全書，把你的收穫傳遞出去。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選出本書對你衝擊最大的一章或一個論點，寫成一段見證（100至200字），分享給小組、朋友或社群媒體。</li>
                <li>若你身邊有人對「神是否存在」或「聖經是否可信」有疑惑，可以把這本書送給他們，或帶他們一起瀏覽電子書房。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 本章及全書終結禱告詞</h4>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-gray-700 leading-relaxed italic">
                  「主耶穌，感謝祢從創世以來就為我預備了救贖的計劃，也應許要再回來迎接我。求祢讓這個盼望成為我每天生命的動力——不是叫我逃避世界，而是叫我更認真地活在這個世界中，把握每一個傳福音、造就人、榮耀祢的機會。願我的名字寫在生命冊上，也願我所愛的人的名字都寫在那裏。主啊，我渴望那日子的來到——馬拉那他，主耶穌啊，請你來！奉主名求，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
