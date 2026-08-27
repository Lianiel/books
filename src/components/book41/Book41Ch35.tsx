import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookMarked, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch35() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const verses = [
    { ref: '啟三21', text: '得勝的，我要賜他在我寶座上與我同坐，就如我得了勝，在我父的寶座上與他同坐一般。', theme: '與君王同坐的尊榮' },
    { ref: '啟五9-13', text: '你曾被殺，用自己的血從各族、各方、各民、各國中買了人來，叫他們歸於神，又叫他們成為國民，作祭司歸於神，在地上執掌王權……曾被殺的羔羊是配得權柄、豐富、智慧、能力、尊貴、榮耀、頌讚的。', theme: '羔羊配得的榮耀，萬族萬民的救贖' },
    { ref: '啟七9、15', text: '有許多的人，沒有人能數過來，是從各國、各族、各民、各方來的，站在寶座和羔羊面前……坐寶座的要用帳幕覆庇他們。', theme: '萬族萬民的敬拜與神的同在' },
    { ref: '啟十四6-7', text: '有永遠的福音要傳給住在地上的人，就是各國、各族、各方、各民……應當敬畏神，將榮耀歸給他！', theme: '永遠的福音與普世的敬拜呼召' },
    { ref: '啟十五4', text: '主啊，誰敢不敬畏你，不將榮耀歸與你的名呢？因為獨有你是聖的。萬民都要來在你面前敬拜。', theme: '萬民對神聖潔的敬畏' },
    { ref: '啟十九6-9', text: '哈利路亞！因為主——我們的神，全能者作王了。我們要歡喜快樂，將榮耀歸給他……羔羊婚筵的時候到了，新婦也自己預備好了。', theme: '羔羊的婚宴，榮耀與喜悅的盛宴' },
    { ref: '啟廿一22-27', text: '那城內又不用日月光照，因有神的榮耀光照，又有羔羊為城的燈。列國要在城的光裏行走；地上的君王必將自己的榮耀歸與那城。', theme: '新耶路撒冷城中萬國的榮耀' },
    { ref: '啟廿二1-5', text: '以後再沒有咒詛……他的名字必寫在他們的額上……他們要作王，直到永永遠遠。', theme: '永遠的作王與無盡的榮耀' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">附錄五</h1>
        <h2 className="text-xl font-semibold text-gray-700">啟示錄中的榮辱感分析</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">全書最終章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-900 leading-relaxed text-sm">
                <span className="font-semibold">說明：</span>原書附錄五本身僅以圖表形式呈現啟示錄中的榮辱動力分析，並無額外的文字論述——因為這個主題的完整神學論證，作者已分別在第二部2-10章（榮耀地位的逆轉）與第四部4-1章（融入榮辱感於目標中）詳細展開，大量引用啟示錄經文說明萬族萬民在永恆國度中所領受的榮耀。以下依據書中這兩處的論述，將啟示錄中最核心的榮辱動力經文，整理成獨立的參考清單，作為全書的最終總結。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">啟示錄榮辱動力經文清單</h3>
              <div className="space-y-3">
                {verses.map((v, i) => (
                  <div key={i} className="p-4 bg-teal-50/50 rounded-lg border border-teal-100">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-teal-800">{v.ref}</p>
                      <span className="text-xs text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">{v.theme}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">「{v.text}」</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">全書終極異象的總回顧</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這份清單所整理的經文，共同構成全書第二部2-10章與第四部4-1章反覆闡述的終極異象：啟示錄不是一部充滿災難恐懼的書卷，而是一部貫穿萬族、萬民、萬國，交織著各式各樣讚美聲的榮耀之書。從被殺的羔羊「用自己的血從各族、各方、各民、各國中買了人來」（啟五9），到萬國萬民「沒有人能數過來」聚集在寶座前敬拜（啟七9），再到新耶路撒冷城中「地上的君王必將自己的榮耀歸與那城」（啟廿一24），最終在「他們要作王，直到永永遠遠」（啟廿二5）中達到高潮——這是聖經中榮耀地位逆轉主題最壯闊、也最終極的展現。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者在書中特別強調：族群的競爭在這個異象中完全消失，取而代之的是各個族群獨特榮耀的彰顯——沒有任何民族被邊緣化，任何文化或人民都不再因身為「非主流」感到不安，種姓、階級、種族的分野所造成的自卑感將永遠消失。這正是全書書名「世界等待的福音」的終極應許：一個同時處理罪疚與羞辱、個人與群體、現在與永恆的完整福音，最終要帶領萬族萬民，一同在羔羊的榮耀中，找到永不褪色的尊榮與安息。</p>
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
                '這八處啟示錄經文清單，涵蓋從第三章「得勝者與君王同坐」到第二十二章「作王直到永永遠遠」的完整弧線，呈現啟示錄作為一部「榮耀之書」而非單純「災難之書」的另一面向。',
                '「用自己的血從各族、各方、各民、各國中買了人來」（啟五9）反覆出現在多處經文中，這種四重詞組的疊用，凸顯了神救贖計畫刻意涵蓋族群多樣性的普世格局。',
                '啟示錄中的榮耀不僅屬於神與羔羊，也慷慨地分享給得贖的百姓——「他要作王，直到永永遠遠」，這呼應全書反覆強調的核心：神的榮耀不是零和資源，分享出去反而因萬民的敬拜而增添。',
                '「族群的競爭消失，取而代之的是各族群獨特榮耀的彰顯」，這是啟示錄終極異象中最具社會意涵的一面——不是文化的抹平統一，而是各族群帶著自己的獨特性，一同蒙保守、被提升。',
                '這份附錄作為全書的最終章節，恰如其分地把讀者帶回全書開篇「世界等待的福音」的核心應許——用啟示錄壯闊的終末異象，為長達三十章的神學論證畫下句點。',
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
              <h4 className="font-semibold text-gray-800 mb-2">用「榮耀」而非「審判」作為切入點解讀啟示錄，會不會忽略了這卷書中大量的災難與審判描寫？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者並未否認啟示錄中確實存在大量審判與災難的記載，而是提醒讀者：這卷書同時交織著審判與榮耀兩條主線，西方教會傳統上常因過度聚焦於災難、末世論爭議（如千禧年觀點），而相對忽略了同樣豐富、甚至更為核心的榮耀敬拜主線。用榮辱動力的角度重新閱讀啟示錄，不是要否定審判的向度，而是要恢復這卷書原本應有的平衡——審判針對悖逆神的黑暗權勢，榮耀則屬於被贖回、忠心跟隨羔羊的萬族萬民。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「族群的獨特性被保留、而非抹平」，這個異象對今日教會處理多元文化聚會中的張力，有何具體啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多多元族群教會在追求「合一」時，容易不自覺地要求少數族群的信徒放棄自己的文化表達方式，遷就主流群體習慣的敬拜、聚會模式，把「合一」誤解為「同化」。啟示錄的異象提醒教會，真正屬天的合一，是各族群帶著自己獨特的文化資產一同敬拜，而非任何一方被要求消失或隱藏自己的獨特性——這對設計多元文化聚會的敬拜形式、語言使用、節慶安排等具體實務，都有直接的參考價值。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">作為全書的最後一章，這份啟示錄清單如何呼應、總結整本書從第一部到第四部的核心論證？</h4>
              <p className="text-gray-700 leading-relaxed">
                第一部指出西方神學對榮辱文化的盲點；第二部展示聖經中九種榮辱動力及「榮耀地位逆轉」的主題；第三部探討如何用這些動力重新表達福音；第四部則把這一切落實到宣教的目標、訓練與實踐。啟示錄的終極異象，正是這整個論證鏈條的最終落點——它證明了「榮耀地位逆轉」不僅是解經工具或宣教策略，更是神救贖歷史真實要走向的終點：萬族萬民帶著各自蒙贖的尊榮，一同敬拜羔羊，直到永永遠遠。
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
              '在讀這本書之前，你對啟示錄的印象比較偏向「災難審判」，還是「榮耀敬拜」？讀完全書後，這個印象有何改變？',
              '這八處經文中，哪一處帶給你最強烈的盼望與安慰？',
              '「族群的獨特性被保留、而非抹平」的異象，如何挑戰或安慰你對自己文化身分的看法？',
              '如果你所屬的教會或群體，正經歷不同文化背景信徒之間的張力，這份啟示錄的異象可以如何具體帶來提醒？',
              '通讀全書三十五章（正文加附錄）之後，你認為「世界等待的福音」這個書名，此刻對你而言，最深層的意義是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用這八處經文默想全書的終極異象</h4>
              <p className="text-gray-700 mb-2">
                連續一週，每天默想這份清單中的一處經文，並用一句話寫下這處經文帶給你關於「萬族萬民同享榮耀」的具體盼望。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 為一個你不熟悉的文化族群獻上敬拜的感恩</h4>
              <p className="text-gray-700 mb-2">
                選一個你不熟悉、卻同樣蒙神所愛的文化或民族，具體為他們的獨特文化恩賜獻上感恩禱告，想像他們有一天將帶著自己的榮耀，一同在羔羊面前敬拜。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告（全書總結禱告）</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢用自己的血，從各族、各方、各民、各國中買贖了我們，使我們成為祢的國民與祭司。求祢幫助我，帶著這份確據，活出滿有榮耀、不再羞恥的生命，並與祢同負使命，把這世界等待已久的完整福音，傳到地極，直到那一日，萬族萬民帶著各自的尊榮，一同俯伏敬拜祢，直到永永遠遠。奉主耶穌基督的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
