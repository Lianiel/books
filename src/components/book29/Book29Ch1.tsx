import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">起初與終末</h2>
        <p className="text-gray-500 mt-1">起初，神創造天地　創世記一1</p>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、創造的「開始」與「完成」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記是全本聖經的種籽書，創世記一章（至二章3節）也是全卷創世記的種籽，二章1-3節歸為第一章會比較合理，因為這個範圍是講完整的七日，包含「從創造到安息」的完整內容。謝挺博士認為創造的總結是神安息，這事實不僅符合創造週，也符合全卷創世記，並符合整本聖經，因為創世記的內容正是從創造到安息，全本聖經的內容也是從創造到安息。那安息是終末的目標，是神一切工作的完成。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章至二章3節包含八個小段落，是與創造過程相關的八個階段，其中第一階段的起初，與最後階段的安息相對應，其時間長度比較不明確，同樣沒有講「有晚上有早晨」；神創造的前三日是開展背景，創造居住的層面及供應者（光、水、空氣、陸地、植物）；神創造的後三日是充實舞台，創造居住者、管理者（日月星、魚、鳥、陸上活物、人）。神在他的創造裡不斷增加顏色。從第一日的黑夜與白日，到第二日的藍天與海，到第三日的綠草、菜蔬和結果子的樹木，再加上以後金黃色的太陽和紅潤的人類，就形成彩虹的顏色了。神不僅是創造者，也是藝術家。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神的創造有清楚的次序，第一日與第四日相對應，分別是創造時間與豐富時間；第二日與第五日相對應，分別是創造上下空間與豐富上下空間，第三日與第六日相對應，分別是創造四方空間與豐富四方空間，可詳見「表二：神創造工作的次序與內涵」。這八個階段與創世記的八大人物有對應，因此產生了對八大人物的預表，而與整卷創世記有對應，本部接續的內容將詳細分享。
              </p>

              <div className="border border-indigo-200 rounded-lg overflow-hidden text-sm my-4">
                <div className="text-center font-semibold bg-indigo-100 text-indigo-900 py-2">表二：神創造工作的次序與內涵</div>
                <div className="text-center text-gray-700 border-t border-indigo-200 py-2 bg-white">起初：神創造天地，地是空虛混沌，淵面黑暗</div>
                <div className="grid grid-cols-2 text-center font-semibold text-indigo-800 bg-indigo-50 border-t border-indigo-200">
                  <div className="py-2 border-r border-indigo-200">頭三天：創造居住的層面<br />開展背景，預備供應者</div>
                  <div className="py-2">後三天：創造居住者<br />充實舞台，創造管理者</div>
                </div>
                <div className="grid grid-cols-4 text-center text-xs font-semibold text-gray-600 border-t border-indigo-200 bg-indigo-50/60">
                  <div className="py-1.5 border-r border-indigo-200">日期</div>
                  <div className="py-1.5 border-r border-indigo-200">神的工作</div>
                  <div className="py-1.5 border-r border-indigo-200">日期</div>
                  <div className="py-1.5">神的工作</div>
                </div>
                {[
                  ['第一日', '造光，分光暗\n創造時間', '第四日', '造日、月、星\n豐富時間'],
                  ['第二日', '造空氣，水分上下\n創造上下空間', '第五日', '造飛鳥、水中活物\n豐富上下空間'],
                  ['第三日', '分地與海，造植物\n創造四方空間', '第六日', '造動物、人\n豐富四方空間'],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 text-center text-gray-700 border-t border-indigo-200 bg-white">
                    <div className="py-2 border-r border-indigo-100 font-semibold">{row[0]}</div>
                    <div className="py-2 border-r border-indigo-200 whitespace-pre-line text-xs">{row[1]}</div>
                    <div className="py-2 border-r border-indigo-100 font-semibold">{row[2]}</div>
                    <div className="py-2 whitespace-pre-line text-xs">{row[3]}</div>
                  </div>
                ))}
                <div className="text-center text-gray-700 border-t border-indigo-200 py-2 bg-indigo-50">第七日：安息</div>
              </div>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch1-six-days-creation.png"
                  alt="圖一：六日創造，六格插畫呈現神六日創造的內容"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖一：六日創造</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、聖經的「起初」與「終末」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記的第一個詞是「起初」，希伯來文、英文、希臘文（七十士譯本）前面還有介係詞，完整翻譯是「在起初」，分別是「בְּרֵאשִׁית（Be reshiyth）」、「In the beginning」、「Ἐν ἀρχῇ（En arche）」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「起初」（רֵאשִׁית，reshiyth）神創造天地，希伯來文 רֵאשִׁית（reshiyth）這個字可以翻譯作「起初」或「首先」。這個字有兩個特點，一個特點是往往指著一段伸展但不確定的時間，而非一個特定的時刻。另一個特點是「起初」這個字有一個配語：「末後」；或者說，這字有一個相連而對立的字，是「末後」。中文也有配語，例如「雖然」的配語是「但是」，若出現「雖然」，下一句就會出現「但是」。同樣，在希伯來文這個字，既有了「起初」，就會有「末後」。例如，約伯記八7：「你起初雖然微小，終久必甚發達。」這節經文顯出了上述這兩個特點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「起初」神創造了宇宙，不僅指出宇宙有其開始，聖經作者亦暗示在歷史所向之處有一「終末」。當希伯來讀者讀到創世記一章一節的時候，同時就會留意這世界的終末。另外有兩個關於「開始」的字，是對應於第二或下一個，但聖經作者特別選用對應於「終末」的字「רֵאשִׁית（reshiyth）」。所以，這將帶出一個有終末性教義的創造論。如同一個人的生命是一個朝聖的進程，世界的歷史由創世開始就被理解成一個目的性的運動，引向終末的新天新地（賽六十五17，啟廿一1）。創世記一至二章所記載的，將會在末日重現，那就是啟示錄廿一、廿二章所寫的新天新地。這是聖經啟示的宇宙觀，是直線的，有一個完滿的結束；有別於佛教的宇宙觀是圓形循環的，沒有開始，也沒有結束。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書的作者呼應上述的啟示：「主啊，你起初立了地的根基；天也是你手所造的。天地都要滅沒，你卻要長存。天地都要像衣服漸漸舊了；你要將天地捲起來，像一件外衣，天地就都改變了。惟有你永不改變；你的年數沒有窮盡。」（來一10~12）天地就像是一件衣服，可以改變、更換。天地有起點，也有終點；有開始，也有結束或更換。希伯來書的作者將起初與末後的關聯性透澈地表明出來。神不僅創造諸天、立地根基，有一天這些都要挪走，然後重新創造新天新地。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  希伯來文的「בְּרֵאשִׁית（Bereshiyth，在起初）」，七十士譯本的希臘文是「Ἐν ἀρχῇ（En arche）」，約翰福音一1也用了完全一樣的「Ἐν ἀρχῇ（En arche）」。為何創世記翻譯作「起初」，而約翰福音翻譯作「太初」？差別在於約翰福音一1「太初有道」的「有（Ἦν，En）」，乃是「未完成第三人稱 Be 動詞」，可翻譯為「早已有，或早已存在」。所以「太初有道」是從「起初，道早已存在」意譯而來的。
                </p>
              </div>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch1-beginning-to-end.png"
                  alt="圖二：起初到終末，示意圖呈現從伊甸園到新天新地的歷史軌跡"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖二：起初到終末</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、創世記中的「起初」與「終末」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記本身就已經有一個對應於「起初」的「終末」，那就是大洪水的審判。挪亞的時代，人類已經遍滿全地，並且罪惡滿盈。因此有了第一次的「終末」，洪水淹沒全地，人類唯獨挪亞一家八口得救，而後重新在洪水消退後的「新地」再次執行「生養眾多、治理這地」的使命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得後書三3-7也講這件事：「第一要緊的，該知道在末世必有好譏誚的人隨從自己的私慾出來譏誚說：『主要降臨的應許在哪裡呢？因為從列祖睡了以來，萬物與起初創造的時候仍是一樣。』他們故意忘記，從太古，憑神的命有了天，並從水而出、藉水而成的地。故此，當時的世界被水淹沒就消滅了。但現在的天地還是憑著那命存留，直留到不敬虔之人受審判遭沉淪的日子，用火焚燒。」挪亞時代的洪水，預表了最後的審判，而方舟則預表了基督的救恩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                使徒彼得繼續以挪亞時代的洪水審判來說明將來火的審判：「那日，天必大有響聲廢去，有形質的都要被烈火銷化，地和其上的物都要燒盡了。這一切既然都要如此銷化，你們為人該當怎樣聖潔，怎樣敬虔，切切仰望神的日子來到。在那日，天被火燒就銷化了，有形質的都要被烈火鎔化。但我們照他的應許，盼望新天新地，有義居在其中。」（彼後三10-12）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按照「千禧年前派」的理解（這也是筆者的立場），這個世代結束前會有一個普世性的大災難，人類多數在這場大災難中死亡之後開啟千禧年國度。基督徒或得勝者有的復活，有的被提，與基督一同作王一千年，大災難的餘民及後裔將成為禧年國度的百姓。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                先知以賽亞書多次預言到這個禧年國度，其中在六十五章以新天新地稱之：「看哪！我造新天新地；從前的事不再被紀念，也不再追想。」從這段經文的內容，可看出來是在講禧年國度，因為說到：「百歲死的仍算孩童」（賽六十五20）。長壽是禧年國度的特色，而新天新地裡是沒有死亡的（啟廿一4）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                直到禧年國度結束，撒但被釋放，又有一個普世性的大背叛，神以天火燒滅背叛者（啟二十9），而後有白色大寶座的審判，審判歷代以來所有的人類（啟二十11-13）。舊天地完全銷毀，名字有在生命冊上的進入神重新創造的新天新地。
              </p>
              <p className="text-gray-700 leading-relaxed">
                完整來看，從創世記一章一節的創造之後，共有三次的「終末」，也就是三次的人類遍滿全地、三次的「全地審判」與「重新開始」，第一次是洪水審判，第二次是基督再來時的大災難與審判，第三次是禧年國度之後的天火燒滅惡人及白色大寶座審判，接著是新天新地。有人相信創世記一章一、二節之間也發生了一個全地性的審判，而後進行重造。因為沒有足夠的聖經根據，筆者不予列入，這個「重造論」後面會討論。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、上帝的「起初」與「終末」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝對自己的介紹，也是從起初指向終末。以賽亞書四十四6：「耶和華以色列的君，以色列的救贖主萬軍之耶和華如此說：我是首先的，我是末後的；除我以外再沒有真神。」以賽亞書四十八12-13：「雅各我所選召的以色列啊，當聽我言：我是耶和華，我是首先的，也是末後的。我手立了地的根基；我右手鋪張諸天；我一招呼便都立住。」當上帝強調他是真神時，若說「我是首先的」，這應已足夠，因為他是萬有的源頭。但他又強調「我是末後的」，這代表他不僅是萬有的源頭，他也是萬有的終結，他對整個宇宙有一個完整的計畫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以賽亞書四十一4強調神的宣召：「誰行做成就這事，從起初宣召歷代呢？就是我耶和華！我是首先的，也與末後的同在。」以賽亞書四十六10強調神的預言：「我從起初指明末後的事，從古時言明未成的事，說：我的籌算必立定；凡我所喜悅的，我必成就。」全都表明，神有完整的計畫與絕對的權柄，從起初，到歷代，到末後，神都掌權，都必按著神的心意來成就，他既創造了世界，也必將世界帶向一個美好的終結。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇九十2：「諸山未曾生出，地與世界你未曾造成，從亙古到永遠，你是神。」摩西對神的讚美，強調神不僅在亙古之前已存在，神也在永遠的未來繼續掌權，作我們的居所。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我們做了這樣的比較之後，就更完整的看到，創世記一1的起初還不是真正的起初，啟示錄廿一1所說的「先前的天地已經過去了」，也不是真正的終末，唯有神自己是真正的「首先與末後」，並且聖子基督也是真正的「首先與末後」，正如基督向使徒約翰顯現時所宣告的：「我是首先的，我是末後的。」（啟一17）或者說，神所創造的天地是在有限的時間裡面，有開始有結束，而神是超越時間的，他創造天地，也終結天地，然後把蒙他救贖的人帶進新創造的永恆新天新地裡。
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
                '創世記一章至二章3節是一個完整單元，前三日開展背景（光、水空氣、陸地植物），後三日充實舞台（日月星、飛鳥水族、陸上活物與人），第七日安息，安息是神一切工作的完成，也是終末的目標。',
                '希伯來文「起初」（רֵאשִׁית, reshiyth）有配語「末後」；創世記翻譯「起初」、約翰福音翻譯「太初」，差別在於「太初有道」的「有」是未完成式 Be 動詞，意譯為「道早已存在」。',
                '希伯來書一10-12引用詩篇說明天地如衣服可以更換，起初與末後在神的視野中緊密相連，聖經的宇宙觀是直線的、有完滿結束，不同於佛教圓形循環、無始無終的宇宙觀。',
                '創世記本身已包含對應「起初」的「終末」——大洪水審判；彼得後書三章以洪水類比末後的火燒審判，洪水預表末日審判，方舟預表基督的救恩。',
                '從創世記一1之後，共有三次「終末」：洪水審判、基督再來的大災難與審判、禧年國度之後天火燒滅惡人及白色大寶座審判，其後是新天新地。',
                '上帝自稱「首先的、末後的」（賽四十四6、四十八12-13、四十一4、四十六10；啟一17），表明神有完整計畫與絕對權柄；唯有神與基督是真正的「首先與末後」，創世記的起初與啟示錄的終末都在祂的掌權之下。',
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
              '如果有機會回到創造的那六天，你會想要看到創造時的哪個場景？',
              '你對聖經的「起初」與「終末」及創世記的「起初」與「終末」有什麼了解？你帶著什麼期待來讀創世記及這本書呢？',
              '上帝自己是「首先的」、「末後的」，時間上與他所造天地的「起初」與「終末」有甚麼基本的差別？這個事實對你有何意義？',
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
