import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Map, Star, Search, Shield, Users } from 'lucide-react';

export default function Book29Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    title: true,
    author: true,
    structure: true,
    parts: true,
    features: true,
    chapters: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">指向終末的創世記</h1>
        <h2 className="text-lg font-semibold text-gray-600">Genesis Pointing towards the End</h2>
        <p className="text-gray-500 mt-1">終末論視角的創世記詮釋</p>
      </div>

      {/* 壹、創世記卷名 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('title')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">壹、創世記卷名</span>
          </div>
          {expanded['title'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['title'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              本卷中文名叫「創世記」，但實際上應為「創始記」更為準確，因為希伯來聖經本卷的名稱是取用第一個字「起初」（בְּרֵאשִׁית，Bereshit）命名。全書敘述萬物的起源及以色列國的起源。希臘文七十士譯本將本書譯為「Genesis」，意為「起源、起始」，這個命名也被新約和教父們沿用至今。
            </p>
            <p className="text-gray-700 leading-relaxed">
              創世記是整本聖經的「種籽書」，聖經中所有重要主題都源於這本書，包括三位一體、人、罪、救恩、信心、稱義、婚姻、家庭、選民、先知、祭司、君王、末世、審判……等。可以說，沒有創世記的奠基，整本聖經的神學架構便無從理解。
            </p>
          </div>
        )}
      </div>

      {/* 貳、創世記作者 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('author')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">貳、創世記作者</span>
          </div>
          {expanded['author'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['author'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              創世記是五經的第一本，「五經」猶太人稱之為「TORAH」，有律法、法度、條例、訓誨的意思，從創世記廿六 5 中「法度」一詞而來。創世記廿六 5：「都因亞伯拉罕聽從我的話，遵守我的吩咐和我的命令、律例、法度（תּוֹרָה，towrah）。」這字在舊約聖經出現219次，大多翻譯為律法，但在以賽亞書則較多翻譯為訓誨。
            </p>
            <p className="text-gray-700 leading-relaxed">
              五經以摩西為主要作者，有多處聖經引用為證，如約書亞記八章31節：「正如耶和華的僕人摩西所吩咐以色列人的，照著摩西律法書上所寫的」；列王記上二章3節：「要謹守耶和華你神所吩咐的，照著摩西律法上所寫的行走」；以及新約主耶穌在馬可福音十二章26節所引用：「摩西所著的書上」。這些引文均指向摩西為五經作者的傳統。
            </p>
          </div>
        )}
      </div>

      {/* 參、創世記的結構與大綱 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('structure')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">參、創世記的結構與大綱</span>
          </div>
          {expanded['structure'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['structure'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">創世記的結構有兩種比較重要的分析法：</p>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">一、多利達特公式（希伯來片語 אֵלֶּה תוֹלְדוֹת，elleh toledot）</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                出現11次（二4、五1、六9、十1、十一10、十一27、廿五12、廿五19、卅六1、卅六9、卅七2）。這個片語有來歷、後代、兒子、記略等各種翻譯。這片語通常接著一個人名，只有第一處例外，不是人名，而是「天地」。從第二處開始，記載：1. 亞當的後代、2. 挪亞的後代、3. 閃含雅弗的後代、4. 閃的後代、5. 他拉的後代、6. 以實瑪利的後代、7. 以撒的後代、8. 以掃的後代、9. 雅各的後代。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（朗文、狄拉德，《21世紀舊約導論》，頁47-48）</span>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">二、按內容與文學形式的分法</h4>
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                創世記結構的第二種分析法，以內容與文學形式作為考慮。可分為兩大部分：創世記一至十一章，和十二至五十章。前者為人類的歷史／太古時期，包含創造、墮落、洪水、巴別等四個重要事件；後者為族長的歷史／先祖時期，包含亞伯拉罕、以撒、雅各、約瑟等四個重要人物。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（馬有藻，《舊約概論》，頁34-35）</span>相關章次對應如下：
              </p>
              <div className="border border-blue-200 rounded-lg overflow-hidden" style={{ fontSize: 'calc(1em - 8px)' }}>
                <div className="text-center font-semibold bg-blue-100 text-blue-900 py-2">表一：創世記的結構與大綱</div>
                <div className="grid grid-cols-2 text-center font-semibold text-blue-800 bg-blue-50 border-t border-blue-200">
                  <div className="py-2 border-r border-blue-200">人類的歷史<br />四個重要事件</div>
                  <div className="py-2">族長的歷史<br />四個重要人物</div>
                </div>
                <div className="grid grid-cols-8 text-center text-gray-700 border-t border-blue-200">
                  <div className="py-2 border-r border-blue-100 font-semibold">創造</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">墮落</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">洪水</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">巴別</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">亞伯拉罕</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">以撒</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">雅各</div>
                  <div className="py-2 font-semibold">約瑟</div>
                </div>
                <div className="grid grid-cols-8 text-center text-gray-600 border-t border-blue-200 bg-white">
                  <div className="py-2 border-r border-blue-100">1~2章</div>
                  <div className="py-2 border-r border-blue-200">3~6章</div>
                  <div className="py-2 border-r border-blue-100">7~9章</div>
                  <div className="py-2 border-r border-blue-200">10-11章</div>
                  <div className="py-2 border-r border-blue-100">12~23章</div>
                  <div className="py-2 border-r border-blue-200">24~26章</div>
                  <div className="py-2 border-r border-blue-100">27~36章</div>
                  <div className="py-2">37~50章</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 肆、本書五大部 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('parts')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">肆、本書五大部</span>
          </div>
          {expanded['parts'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['parts'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              本書書名是《指向終末的創世記》，其內容包含五大部，也是創世記的五個段落，這五部可簡稱為創造、伊甸、方舟、選召、掌權，分別講到神、羔羊、拯救、稱義、得勝。兩兩相對應如下：<strong>創造──神、伊甸──羔羊、方舟──拯救、選召──稱義、掌權──得勝</strong>。每部各有十二章。既然是指向終末，因此各部都包含有關基督的預言與預表，關聯到基督的降生、成長、傳道、救贖、復活、升天、再來、禧年國度、新天新地等。
            </p>
            <div className="space-y-2">
              {[
                { num: '第一部', title: '從創造到安息', desc: '經文範圍在創世記一章至二章3節，主要講神的創造與安息，包含起初與終末、神創造天地、聖靈的工作，生命的真光、天空上的水、陸地與植物、日月與眾星、安息的生命、豐盛的生命、我們的形像、掌權的生命、神與人安息等十二章。' },
                { num: '第二部', title: '從伊甸到救贖', desc: '經文範圍在創世記二章4節至三章，主要講伊甸園裡發生的事，包含神精心造人、伊甸園與河、設立生命樹、分別善惡樹、單身的亞當、神設立婚姻、蛇魔鬼撒但、撒但的謊言、人犯罪墮落、神審判撒但、長遠的爭戰、咒詛與救贖等十二章。' },
                { num: '第三部', title: '從羔羊到方舟', desc: '經文範圍在創世記四章至七章，主要講離開伊甸園到大洪水來臨的故事，包含該隱與亞伯、失去根的人、該隱的後裔、塞特的後裔、以諾的一生、神的兒子們、人與神的心、完全人挪亞、傳道者挪亞、挪亞造方舟、你和你全家、洪水與方舟等十二章。' },
                { num: '第四部', title: '從紀念到選召', desc: '經文範圍在創世記八章至廿三章，主要講離開方舟到信心之父亞伯拉罕的故事，包含紀念與獻祭、賜福與立約、咒詛與祝福、三個大族群、巴別亂口音、生養與離開、呼召與拯救、寄居與不爭、爭戰與奉獻、肉體的拆毀、屬靈的新造、獻上獨生子等十二章。' },
                { num: '第五部', title: '從安息到掌權', desc: '經文範圍在創世記廿四章至五十章，主要講以撒、雅各至猶大、約瑟的事情，包含以撒的一生、神堅定立約、抓取到分享、生命的豐盛、為父的雅各、雅各與約瑟、神寬廣的愛、約瑟的一生、猶大的故事、約瑟的人格、豐年與荒年、基督的預表等十二章。' },
              ].map((part, i) => (
                <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">{part.num}「{part.title}」</span>
                  <p className="text-gray-700 text-sm mt-1">{part.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 伍、本書六大特色 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('features')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">伍、本書六大特色</span>
          </div>
          {expanded['features'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['features'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              { num: '一', title: '與基督及終末相關', desc: '本書各章內容幾乎都包含基督的預表及福音的內容，關聯到基督的降生、成長、傳道、救贖、復活、升天、再來等。基督的降生已經開啟了終末，使整個世界進入末世，因為基督的受死與復活帶來拯救，這拯救關乎以色列，也關乎萬國萬民。福音傳遍全地後，基督還要再來，在全地掌權，實現創世記一28神給人的使命。創世記內容所預表的包括基督第一次來與第二次來。' },
              { num: '二', title: '與律法及福音相關', desc: '分別善惡樹與生命樹在創世記二章出現，本書指出，這兩棵樹分別標示了律法與福音的道路。人吃分別善惡樹的果子，就走在律法的道路上；人吃生命樹的果子，就走在福音的道路上。雖然生命樹要到新天新地時才會再出現，但羔羊的救恩早已及時臨到，使亞伯、以諾、挪亞、亞伯拉罕都能走在福音與生命的道路，而非律法與死亡的道路。這是兩條有關生死禍福的道路，從創世記連貫到啟示錄。' },
              { num: '三', title: '與科學的辯證相關', desc: '福音派學者，多數對進化論採取接納的態度，認為既然是科學界的共識，就不要製造對立。筆者本科所學是物理學，比較了解真科學與假科學的分野，也了解已驗證的事實與尚未取得驗證的假說之間的分野。因此本書有部分篇幅，會指出進化論的問題，也稍微探討地球年齡及宇宙年齡的問題；並以聖經為本，提供創造論詮釋的合理視角。這方面對我們解讀創世記也是很重要的。' },
              { num: '四', title: '與靈命及教牧相關', desc: '本書沒有很深的學術討論，比較著重在以經解經及靈命、教牧的應用。舉例來說，第二、三章生命樹與分別善惡樹的意義，固然跟自由意志有關，更重要是跟靈命及教牧相關，本書有深入的分享。第六章神的兒子是誰，不同的解釋帶出不同的應用，本書提供有別於一般福音派的見解，可有更切合實際的應用。第九章挪亞咒詛的小兒子是誰，本書有深入的分析，提供更切合靈命與教牧的應用。本書也多次從不同經文帶出這世代肉身生養、屬靈生養、牧養宣教的呼召與實踐。' },
              { num: '五', title: '與華人的信仰相關', desc: '創世記一至九章內容的主要見證人及上古歷史的主要傳承者，乃是挪亞。全世界的人都是挪亞的後裔，挪亞兒子閃的後代主要是亞洲人，佔世界人口二分之一，而華人佔全世界人口近四分之一，因此閃的後代幾乎一半是華人。可推知，華人最早的祖先與挪亞、閃在世的時間有重疊。中國字所留存的見證及華人古代信仰的內涵必皆來自挪亞與閃。因此本書內容除了以解釋聖經為主之外，有些篇章也會引用華人古代文化中的信仰素材。' },
              { num: '六', title: '人稱代名詞的使用', desc: '本書提到神／上帝、基督，需要使用代名詞時，基本上是用「祂」，而不是「他」，這種用法與和合本聖經一致。講神／上帝固然可以用「祂」，講基督卻不能只用「他」，因為用「他」就否定了基督的神性，用「她」就否定了基督的人性，因此一律用「祂」，這個「祂」可包含神性與人性，這是和合本與本書使用「祂」的共同原因。此外，和合本聖經有「神」版與「上帝」版兩種，本書多數用「神」，但為了詞句的感覺或字數的配合，有時也用「上帝」。' },
            ].map((f, i) => (
              <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1">
                <span className="font-semibold text-indigo-800">{f.num}、{f.title}</span>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 章節目錄 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('chapters')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">第一部：從創造到安息（目前章節）</span>
          </div>
          {expanded['chapters'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['chapters'] && (
          <div className="p-5 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { ch: '第一章', title: '起初與終末', desc: '創造的開始與完成，聖經的起初與終末' },
                { ch: '第二章', title: '神創造天地', desc: '三位一體的創造，bara 前無今有' },
                { ch: '第三章', title: '聖靈的工作', desc: '空虛混沌、黑暗的意義、聖靈運行' },
                { ch: '第四章', title: '生命的真光', desc: '光的起源，光暗分別，時間的起點' },
                { ch: '第五章', title: '天空上的水', desc: '穹蒼的意義，天上水層的功能' },
                { ch: '第六章', title: '陸地與植物', desc: '第三日的雙好日，亞當與土地的字根關係' },
              ].map((c, i) => (
                <div key={i} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100 rounded px-2 py-0.5">{c.ch}</span>
                    <span className="font-semibold text-gray-800 text-sm">{c.title}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">（第七至十章內容將於後續新增）</p>
          </div>
        )}
      </div>
    </div>
  );
}
