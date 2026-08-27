import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Hand, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-6</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第六項：身體語言</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Hand className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：頭、臉、手是貴重的，腳是卑微的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章解釋在聖經榮/辱社會中，身體部位所代表的意義，特別是右手和腳所蘊含的意義，並藉此彰顯救贖主的生命本質——耶穌基督征服了罪惡與羞辱、死亡和地獄。在舊約和新約時代，一般人把「頭」、「面」和「手」視為身體的貴重部位，而腳則是最卑微的身體部位之一。田奈特寫道：「在古代世界，榮耀與身體息息相關，是整個社會背景的縮影，頭和臉是身體中最尊貴的部位，因此頭戴上冠冕，代表一個人領受尊榮。相對地，打人的臉或吐口水在人的臉上就是羞辱人。此外，要維護一個人的尊榮，必須覆蓋卑微的身體部位，如生殖器和臀部。」<sup>1</sup><span style={cite}>（Tennent, 86，引用Julian Pitt-Rivers, "Honor and Shame," 1966.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「你坐在我的右邊，等我使你仇敵作你的腳凳」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中身體部位有代表性意義的重要例證，出現在詩篇一一○篇——這節經文也是新約聖經中最常引用的舊約經文之一：「耶和華對我主說：你坐在我的右邊，等我使你仇敵作你的腳凳」（詩一一○1）。英文標準版研經本指出：「這篇詩篇是新約中最常引用的舊約經文之一，在福音書、使徒行傳、保羅書信、希伯來書和彼得的書信中都有出現，或引用，或影射此經文。基督徒唱詩歌，慶祝耶穌藉著復活，掌權做王。」<sup>2</sup><span style={cite}>（ESV Study Bible, Kindle locations 75504-75507.）</span>人體有兩個部位在此具有指標性：一是右手，另一是腳，大衛在另一首詩中也呼應：「你派他管理你手所造的，使萬物……都服在他的腳下」（詩八6-8）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者細數新約聖經中一再出現的相同意象：耶穌自己引用詩篇一一○篇質問法利賽人「大衛被聖靈感動……怎麼還稱他為主」（太廿二43-44），又對大祭司宣告「後來你們要看見人子坐在那權能者的右邊，駕著天上的雲降臨」（太廿六64）；使徒行傳記載耶穌「既被神的右手高舉」（徒二33），司提反殉道前「看見耶穌站在神的右邊」（徒七55-56）；保羅寫道基督「現今在神的右邊，也替我們祈求」（羅八34），並宣告「神叫萬物都服在他的腳下」（林前十五24-27）；希伯來書更五次重申基督「坐在……右邊」的意象（來一3、13，八1，十12，十二2）；彼得也寫道耶穌「在神的右邊；眾天使和有權柄的，並有能力的，都服從了他」（彼前三22）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者總結：從這些經文的全貌可以看出，新約聖經作者一再強調，耶穌基督的榮耀，指的是祂在父的右邊，置身在崇高的榮耀中，以「敵人為腳凳」——新約信徒明白，這位權能統治者的榮耀，祂確確實實地征服了仇敵。這也增強了對基督這位權能君王的尊崇和順服，這正是基督徒追隨耶穌過程中，應當持守的態度和互動方式。作者也特別提醒：本書第二部的七到十章（本書的2-7至2-10節），由於所涵蓋的聖經素材極為豐富，篇幅將比前面各章長得多。
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
                '在古代榮辱社會中，身體部位承載著具體的社會意義：頭、臉、手是尊貴的，腳（以及需要遮蓋的部位）是卑微的，這套身體語言深深嵌入聖經文本的表達方式中。',
                '詩篇一一○篇「你坐在我的右邊，等我使你仇敵作你的腳凳」，是新約引用最頻繁的舊約經文，「右邊」代表至高的尊榮，「腳凳」則代表徹底的降服與征服。',
                '從福音書、使徒行傳、保羅書信、希伯來書到彼得前書，新約作者反覆引用「坐在神右邊」的意象，一致見證耶穌基督透過復活升天所領受的至高權柄與榮耀。',
                '「以敵人為腳凳」的意象傳達的不只是靜態的尊榮地位，更是一個動態的、正在進行中的征服過程——基督的統治正持續地使一切仇敵臣服。',
                '身體語言這個榮辱動力雖然篇幅短小，卻是理解新約基督論最頻繁引用的舊約意象之一，提醒讀者：聖經作者選用身體意象傳達神學真理，遠比單純抽象論述更貼近原初讀者的文化直覺。',
                '作者特別提醒，第二部第七至十章篇幅將明顯加長，因為守護關係、名字親屬血統、潔淨等主題所涉及的聖經素材極為豐富——這也預告了本書內容深度將持續加深。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為何理解「身體語言」的文化背景，能幫助我們更準確地讀懂新約中頻繁出現的「坐在右邊」意象？</h4>
              <p className="text-gray-700 leading-relaxed">
                現代讀者讀到「坐在神的右邊」，很容易只當作一個空間位置的描述，甚至覺得語意平淡。但若理解古代榮辱社會賦予「右手」的尊貴意涵，就能體會這個意象在原初讀者心中所激起的強烈畫面：這不只是「在哪裡」，而是宣告耶穌基督享有與神同等的至高尊榮與權柄。這提醒我們，讀經時若忽略身體語言背後的文化重量，很容易把充滿張力的神學宣告，讀成平淡無奇的敘述。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「以敵人為腳凳」這個意象，如何幫助信徒面對生命中尚未得勝的掙扎？</h4>
              <p className="text-gray-700 leading-relaxed">
                林前十五章24-27節描述的「腳凳」，其實是一個進行式的過程——「等神把一切仇敵都放在他的腳下」，這意味著基督的得勝雖然在十字架與復活已經確立根基，但完全的實現仍在展開中。這給仍在與罪惡、軟弱、逼迫爭戰的信徒帶來盼望：得勝的結局已經確定，即使眼前的爭戰尚未結束，我們仍可以「以終為始」，帶著確據活在當下的爭戰中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">不同文化對身體部位有不同的尊卑觀念（如某些文化中左手被視為不潔），這對跨文化宣教的實務有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多跨文化宣教士都曾因不了解當地的身體語言禁忌（如用左手遞物、翹腳露出鞋底朝人）而無意間冒犯了當地人。本章提醒我們，身體語言不只是聖經研究的素材，也是活生生存在於今日各文化中的溝通系統——宣教工作者若能主動學習、尊重當地的身體語言規範，往往能大幅減少不必要的文化衝突，建立更深的信任關係。
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
              '你曾經用身體（言語、動作或表情）傷害他人，造成羞辱或壓迫嗎？想想看：耶穌可以如何幫助你，從這種罪中得釋放？',
              '讀完本章列舉的多處「坐在右邊」經文後，你對耶穌基督現今的地位和權柄，有什麼更深刻的認識？',
              '在你的文化或家庭中，哪些身體動作或部位帶有特殊的尊榮或羞辱意涵（例如鞠躬、握手、脫鞋）？',
              '「以敵人為腳凳」的意象，如何幫助你在目前正經歷的某個爭戰或掙扎中，持守盼望？',
              '若有機會與來自不同文化的朋友交流，你會如何詢問他們文化中身體語言的特殊含義？',
              '本章篇幅雖短，卻蘊含豐富的新約引文網絡，這對你日後讀經時「順藤摸瓜」查考交叉引用經文，有什麼提醒？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀詩篇四十四篇</h4>
              <p className="text-gray-700 mb-2">
                找出每一個「身體部位會說話」的例子（如臉、手、腳），體會詩篇作者透過身體意象表達的情感與呼求。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌏 詢問跨文化朋友身體語言的意義</h4>
              <p className="text-gray-700 mb-2">
                詢問一位跨文化宣教夥伴，或來自不同文化背景的朋友：在他們的社會中，哪些身體部位代表特別意義？右手或腳是否有特殊含義？記下你的發現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢如今坐在父神的右邊，以無比的權柄和榮耀，正在使一切仇敵服在祢的腳下。求祢幫助我，在生命中尚未得勝的爭戰裡，仍能因祢已得的勝利而滿有盼望，也求祢潔淨我，不再用言語或行為羞辱他人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
