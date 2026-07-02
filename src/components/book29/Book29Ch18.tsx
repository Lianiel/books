import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch18() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神設立婚姻</h2>
        <p className="text-gray-500 mt-1">耶和華神說：「那人獨居不好，我要為他造一個配偶幫助他。」因此，人要離開父母，與妻子連合，二人成為一體。當時夫妻二人赤身露體，並不羞恥　創世記二18，24-25</p>
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
              本章這段經文，是婚姻關係的真理根源。神如何親自設立婚姻，夫妻各自有何角色以及當如何配搭，都記錄在這段經文中。耶穌親自引用這段經文，來說明不應該休妻：「有法利賽人來試探耶穌，說：『人無論甚麼緣故都可以休妻嗎？』耶穌回答說：『那起初造人的，是造男造女，並且說：因此，人要離開父母，與妻子連合，二人成為一體。這經你們沒有念過嗎？既然如此，夫妻不再是兩個人，乃是一體的了。所以，神配合的，人不可分開。』」（太十九3-6）
            </p>
            <p className="text-gray-700 leading-relaxed">
              使徒保羅也引用創世記這段經文，深入地講到夫妻關係，且將基督教會的關係與夫妻的關係並列，甚至引用創世記這段經文來說明基督與教會的關係。以弗所書五22-32：「你們作妻子的，當順服自己的丈夫，如同順服主。因為丈夫是妻子的頭，如同基督是教會的頭；他又是教會全體的救主。教會怎樣順服基督，妻子也要怎樣凡事順服丈夫。你們作丈夫的，要愛你們的妻子，正如基督愛教會，為教會捨己。要用水藉著道把教會洗淨，成為聖潔，可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。丈夫也當照樣愛妻子，如同愛自己的身子；愛妻子便是愛自己了。從來沒有人恨惡自己的身子，總是保養顧惜，正像基督待教會一樣，因我們是他身上的肢體。為這個緣故，人要離開父母，與妻子連合，二人成為一體。這是極大的奧祕，但我是指著基督和教會說的。然而，你們各人都當愛妻子，如同愛自己一樣。妻子也當敬重她的丈夫。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              保羅說，「人要離開父母，與妻子連合，二人成為一體」這個奧秘，乃是指著基督和教會的關係說的。因此福音派護教家法蘭西斯．薛福說，如果你不了解婚姻，不可能真正了解基督與教會的關係；如果你不了解基督與教會的關係，你不可能真正了解婚姻，基督與教會的關係乃是一個永恆的婚姻。因此，本章要特別從夫妻關係與基督教會關係的雙重角度來分享三個重點。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、相配的幫助者──神造女人的緣由</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二18：「耶和華神說：那人獨居不好，我要為他造一個配偶幫助他。」後半句，原文的排列是「我要造一個幫助者像他（照他樣式）在他面前」，意思是「我要造一個像他的幫助者在他面前」，或者說「我要照他樣式造一個幫助者在他面前」。像或樣式這個字，與神說要「按著我們的樣式造人」的「樣式」，是同一個字。因此我們看到，神先按自己的樣式造亞當，然後按亞當的樣式造夏娃，這樣做的目的，是為了讓人能與神相配，也讓妻子能與丈夫相配。所以保羅說：「男人……是神的形像和榮耀，但女人是男人的榮耀。」（林前十一7）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神造女人的緣由，可使我們間接知道神造人的緣由，是要人成為神的幫助者。一方面與神同工來治理全地，一方面也與神聯合作戰，來打敗魔鬼。「像他」與「在他面前」也表達了一種親密關係，這位幫助者，不僅在工作上幫助他，也與他有心靈之交。正如經上所說：「二人若不同心，豈能同行呢？」（摩三3）這是夫妻關係的第一件要事，也是神人關係的第一件要事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                箴言卅一章所描述的「才德的婦人」，是創世記二18最好的詮釋，因她所做的一切，使丈夫有益無損；她的丈夫得榮耀，她自己也得榮耀。奧斯本在《了解你的伴侶》一書中，清楚說明作幫助者的含意：一個女人最基本的女性特質，是在成為神創造她要她充當的角色──一個助手──這方面表現出來的，但這絕不是說她是充當次要的角色，只是當她成為一個人、一個母親、一個妻子、靈性與道德價值的守護者的時候，她才找到一個女人真正的滿足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                幫助者不是弱者，也不是次要的，因為神自己也是幫助者，詩篇當中有51處提到幫助，大部分是講神的幫助。例如詩篇一二一1-2：「我要向山舉目；我的幫助從何而來？我的幫助從造天地的耶和華而來。」幫助者乃是一個光榮的、無可取代的地位。神設立的婚姻有其完美的設計，丈夫與妻子二人的結合，在生育、教養，工作、生活，目標、執行，檢討、更新等各方面，都是必需的。成為最好的幫助者，應是女人一生最重要的目標。
              </p>
              <p className="text-gray-700 leading-relaxed">
                至於男人，很多情況也是要作幫助者，因為這是神的本性之一，神叫女人成為幫助者，也叫男人成為幫助者，正如約書亞幫助摩西，大衛幫助掃羅，路加幫助使徒保羅，使徒保羅幫助眾聖徒成長等。而男人與女人最終是要一起成為基督的新婦，作基督的幫助者。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、取肋骨造女人──神造女人的方法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在創世記二21-23中神以獨特的方式來造女人：「耶和華神使他沉睡，他就睡了；於是取下他的一條肋骨，又把肉合起來。耶和華神就用那人身上所取的肋骨造成一個女人，領她到那人跟前。那人說：這是我骨中的骨，肉中的肉，可以稱她為女人，因為她是從男人身上取出來的。」神造女人的方式是使亞當沈睡，取他的肋骨來造，這是二人能成為一體的原因或根據。女人和男人原是一體的，是男人身上的一部分，華人有個詞「于歸」，就是指女子出嫁，歸於她所出的男人。這個詞與聖經真理是一致的，因為女人是從男人身上出來的，結婚就是要歸回那個男人身上，而夫妻之間也稱對方為「另外一半」。
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch18-adam-rib-eve.jpg"
                  alt="圖七：神取亞當肋骨造夏娃，插畫呈現神造女人的過程"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖七：神取亞當肋骨造夏娃</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                按照希伯來文的意思，「骨中的骨」就是最好的骨，「肉中的肉」就是最好的肉，如同「歌中之歌」就是最好的歌。所以聖經的意思是：女人是從亞當身上最好的骨和最好的肉造出來的，因此女人比男人更優秀。有人說，男人是用塵土所造，所以比較粗糙，而女人是用肋骨所造，所以比較細緻；也有人說，先造的不夠好，後造的比較好，就像科技越來越進步、功能越來越好一樣。神說男人獨居不好，但沒有說女人獨居不好。男人沒有女人，很難生存；女人沒有男人，相對容易一些。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                很特別的是，神要比較好、比較細膩的成為幫助者，而較粗糙的男人作頭、作領袖。其實一個好的領袖不一定是最強的，而是能擁有很多優秀的幫助者在身邊，形成一個陣容堅強的團隊。對一個男人而言，在家庭中他的幫助者包括妻子與兒女，在職場或教會事奉中，也當建立一個幫助者的團隊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上有關女人受造方式的意義只是一部分，最重要的是，女人受造的方式預表了教會如何產生。當基督的肋旁被刺開，流出寶血，基督為世人的罪死在十字架上之後，教會產生了。基督第三天從死裡復活，如同亞當醒過來；接著基督看到了他所救贖的新婦，如同亞當看到了夏娃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌曾對門徒說：「我所做的事，信我的人也要做，並且要做比這更大的事。」（約十四12）耶穌將福音傳遍以色列，但耶穌的門徒可以將福音傳遍全世界。基督是教會的頭，如同丈夫是妻子的頭。既然教會可以做比基督更大、更多的事，妻子應當也可以做比丈夫更大、更多的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                女人的傳統角色是相夫教子，這是比較困難的。在家裡做家事，並且照顧、教養兒女，不是一般男人能勝任的，但大部分女人能做得很好。許多男人輕看女人在家養育兒女的重要性與困難度，不懂得肯定家中的妻子，以致女人缺乏成就感，紛紛放棄家庭與男人一樣到外面職場工作。根據統計，各行各業中女人的表現80%優越於男人，男人的失業率也因此增加。女人在外面有了成就感，就更不願在家照顧兒女，甚至不願結婚生子。這樣，男女只會一起走向兩敗俱傷的光景之中。這不是說，女人都不應該在職場工作，而是說，作丈夫的幫助者、生養兒女，有其優先性。如果20歲左右有幾年職場經驗，25-35歲專心相夫教子，等孩子都上小學以後，再逐漸回到職場，這是不錯的。若有機會在職場上作丈夫的助手，這是很好的。若不是，兩人都要防備異性的試探，要懂得保持界線。另外，也要注意職場時間不要減損每天與就學兒女當有的互動時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在家庭中作頭的丈夫，應當時常誇獎、讚美妻子，她就會幫你把家照顧得很好。其實女人能有的最大成就不是在職場上，而是能養育出優秀的神國人才，建造出幸福美滿的婚姻家庭。這樣的成就是男人自己無法做到的。因此，男人要改變，要知道女人生養孩子、整理家務有最高的難度，她們天性能一心多用，才有辦法照顧家，對家有最大的貢獻。
              </p>
              <p className="text-gray-700 leading-relaxed">
                丈夫不可對女人說：「我在外面工作很辛苦，妳在家就只是帶孩子、煮個飯，很輕鬆。」乃是要說：「親愛的，妳辛苦了，雖然我在外工作很辛苦，但妳在家料理家事、教養孩子，更加辛苦。我所做的工作只不過是小事，你在家養育孩子是更大的事。」丈夫也當將大部份的薪資交給妻子來管理使用，讓她感到在家付出是值得的。猶太人婦女的就業率低，因為她們知道在家養育兒女是最重要的事，並且猶太丈夫每個安息日晚餐時，會用箴言卅一10-31來稱讚、肯定她的妻子，讓妻子有很好的成就感、滿足感。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、二人成為一體──神造女人的結果</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二24-25：「因此，人要離開父母，與妻子連合，二人成為一體。當時夫妻二人赤身露體，並不羞恥。」這段話包含三個重要意義：1. 獨立，2. 聯合，3. 親密。
              </p>
              <div className="space-y-3 mb-3">
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">一、獨立</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    男人離開父母，是男人要獨立的意思，不要再繼續依賴父母，應該成為新家庭的一家之主，成為妻子的頭。不管有沒有跟父母住在一起，或者住在附近，父母都應該放手，不要去干預或過度關懷。這事也預表基督離開天家來找他的妻子（教會），與教會聯合，成為教會的頭。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">二、聯合</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    男人要與妻子連合，必須先有所付出，贏得芳心。捨己的行動是必須的，包括在婚前及婚後。基督也是為教會捨命，而後才能與教會連合。男人跟女人基本上是很不同的，但神卻要二人成為一體，就是要男人捨己，女人順服。這在人來說很不容易，但當人信主後有了基督的生命在裡頭，就比較能學習捨己和順服。神與人的差異更大，神與人連合是更難的，基督已經來與我們連合了，我們學效基督，也能做到。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">三、親密</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    二人成為一體，是一種親密關係。夫妻二人赤身露體，並不羞恥，也是形容彼此赤露敞開的關係，包括身體上、心靈上。惠特博士（Ed. Wheat）所著《夫妻之愛》一書提出，夫妻之愛包含五種愛：友愛、戀愛、性愛、親情、聖愛（無條件的愛）。五種愛都需要，才能使夫妻關係保持美好、長久。基督與教會也有這五種愛，基督與我們有朋友、愛人、家人的關係，某些聖靈充滿的經歷類似性愛，因包含身體的感受，基督的聖愛乃是捨命之愛。
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                蓋瑞．巧蒙博士提出人與人之間的關係有五種愛之語，也就是五種愛的表達方式，能夠帶來親密的關係，包括有贈送禮物（Treasure；Gift）、精心時刻（Time，專心陪伴）、身體接觸（Touch）、服務行動（Service）、肯定言語（Tell說出對方的優點）等。約略與夫妻之愛的五種愛有對稱，友愛與贈送禮物有關、戀愛與精心時刻有關、性愛與身體接觸有關、親情與服務行動有關、聖愛與肯定言語有關。這些不一定等於全部，但能幫助我們更具體去表達愛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                基督是神給我們的禮物，是我們的朋友，基督是神的同在、是我們的愛人，基督充滿我們、擁抱我們，基督來服事我們、作我們的家人，基督為我們捨命說出對我們最大的肯定。我們對神也當以全人奉獻及財物奉獻作為禮物、以敬拜禱告為精心時刻、以被聖靈充滿作為身體接觸、以服事主服事人作為服務行動、以讚美感謝作為肯定言語。我們與基督的關係，以及在婚姻中，皆如此操練實踐，必使我們能預備成為主的新婦，迎見主的再來。
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
                '神造女人「像他」又「在他面前」，表達出親密與相配的關係；幫助者不是次要角色，神自己也是幫助者（詩一二一1-2），這是光榮無可取代的地位。',
                '神取亞當肋骨造女人，「骨中的骨、肉中的肉」意指最好的骨肉，象徵女人受造方式更加精緻；這也預表教會的產生——基督肋旁被刺流出寶血，如同亞當沉睡取肋骨。',
                '創世記二24-25「二人成為一體」包含獨立、聯合、親密三個重要意義：獨立指離開父母、聯合指捨己與順服、親密指彼此赤露敞開的關係（含友愛、戀愛、性愛、親情、聖愛五種愛）。',
                '蓋瑞．巧蒙博士的五種愛之語（禮物、精心時刻、身體接觸、服務行動、肯定言語）與惠特博士的五種愛互相對應，幫助夫妻更具體表達愛。',
                '基督與教會的關係就是永恆的婚姻，理解婚姻能幫助理解基督與教會的關係，反之亦然；信徒對神的全人奉獻、敬拜禱告、被聖靈充滿、服事、讚美感謝，正對應著五種愛的操練。',
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
              '婚姻如何呈現基督和教會的關係？試引用經文說明。',
              '女人在婚姻中的角色是什麼？怎樣可以發揮成既不是弱者，也不是次要？',
              '創世記二24-25如何說明婚姻，有哪三個重要意義？',
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
