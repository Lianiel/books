import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sun, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch21() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-5</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「情面概念」所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">躲避神的面，到仰望神的面</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的：福音與「情面概念」有交集，福音的傳達可以循此概念做調整。<sup>1</sup><span style={cite}>（Flanders, About Face 對泰國文化中「面子」與福音的重疊有全面性的探討。）</span>聖經中「臉面」的概念有兩個部分：人類因罪，在神面前是蒙羞的，這從離開、躲避神的面可看出；而人類的罪得救贖、羞辱得醫治，正是人們回轉到神面前，領受神所賜的平安。<sup>2</sup><span style={cite}>（改編自Stockitt.）</span>亞當和夏娃犯罪時「躲避耶和華神的面」（創三8），希伯來原文中的「躲避」是指避開神的臉（pānîm），這是罪的結果，是「丟臉」的事。但聖經也有正面的材料：「凡仰望他的，便有光榮；他們的臉必不蒙羞」（詩三四5）；「願神憐憫我們，賜福與我們，用臉光照我們」（詩六七1）；「神啊，求你使我們回轉，使你的臉發光，我們便要得救！」（詩八十3）——透過回到神的面前重建關係，正是「挽回面子」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅把舊約的情面概念，與透過耶穌基督的面、神的光進入黑暗心靈連結起來：「神已經照在我們心裏，叫我們得知神榮耀的光顯在耶穌基督的面上」（林後四6）。作者指出這裡有兩道「光」相互呼應：第一道光是大馬士革路上照瞎保羅眼睛的光（徒九3），第二道光是呼召、拯救他，並照進他心裡的光——這是所有信徒被光照時共有的經歷。<sup>3</sup><span style={cite}>（神對保羅的呼召，救贖與使命結合為一。）</span>由此可歸納：在救恩中轉向主，就是遮蓋一個人的羞恥、恢復其「面子」；這是透過耶穌基督的臉把光照進人心中；救恩就是神向我們仰臉、光照我們。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「保存上帝的面子」：贖罪與情面的五個步驟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督十字架的贖罪工作，與臉面概念如何產生關係？作者感謝吳榮提供以下的論述架構<sup>4</sup><span style={cite}>（Wu, 193-220，本書在此僅作精要概述。）</span>：（1）神的榮耀是終極目標——一切創造都是為了彰顯祂的榮耀（詩十九1；羅十一36）；（2）神對人類罪惡感到憂傷——犯罪不僅違背神的律法，其根本問題在於罪羞辱了神本身（羅一21-26），犯罪虧缺神的榮耀（羅三23）；（3）神應許透過亞伯拉罕的家庭祝福所有人——「我必賜福給你，叫你的名為大……地上的萬族都要因你得福」（創十二2-3）；（4）神的兒子基督履行了這個應許——祂為世人的罪死在十字架上，「成了咒詛，就贖出我們脫離律法的咒詛……這便叫亞伯拉罕的福，因基督耶穌可以臨到外邦人」（加三13-14），開啟了外邦人「信道的門」（徒十四27）；（5）神在整個過程中彰顯祂的榮耀、維持自己的「面子」——耶穌在十字架前禱告：「父啊，願你榮耀你的名！」（約十二27-28），這其實是在說：父啊，彰顯祢的榮耀，守住祢的「面子」！
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者解釋，基督的死和復活之所以能彰顯神的榮耀，正因這是神應許亞伯拉罕賜福萬族的唯一方式——神祝福萬族的計劃只有透過逆轉萬民的詛咒才能兌現，而這信仰必須是超越文化、不受猶太民族特有律法（如割禮）所捆綁的：「所以人得為後嗣是本乎信，因此就屬乎恩，叫應許定然歸給一切後裔」（羅四16）。吳榮總結：「基督的救贖與神的榮耀、人的羞辱密切相關，救恩守住了神的榮耀，消弭人類的羞辱……耶穌是代罪羔羊，祂為世人的罪，捨榮耀受屈辱，付出生命代價。」<sup>5</sup><span style={cite}>（Wu, 219.）</span>作者特別提醒，這套神學論述適用於來自中國、泰國、印尼、日本、緬甸、柬埔寨、越南等地，成千上萬把「面子」視為重要文化動力的民族——對這些民族傳講福音時，若能運用尊重面子的語彙和概念，會更符合實際情境需要。
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
                '聖經對「臉面」的敘事，構成一條清晰的救恩軸線：從亞當夏娃因罪「躲避耶和華的面」，到詩篇「仰望祂的便有光榮」，再到保羅「神榮耀的光顯在耶穌基督的面上」——救恩就是重新被允許仰望、親近神的臉。',
                '吳榮「保存上帝的面子」五步驟論述，把贖罪神學重新框架為：神的榮耀是終極目標→人的罪羞辱了神→神應許透過亞伯拉罕賜福萬族→基督親自成就這應許→神在整個過程中守住並彰顯了自己的「面子」。',
                '耶穌在十字架前禱告「父啊，願你榮耀你的名」，用面子概念重新詮釋，其實就是在祈求「父啊，守住祢的面子」——十字架因此不只是為人贖罪，更是神信實地維護、彰顯自己榮耀的方式。',
                '這套框架的關鍵神學意義在於：救恩不只是消除個人的罪疚，更是神親自出面，透過基督恢復人「面子」（尊嚴與身分）的行動——這對面子觀念根深柢固的東亞、東南亞文化格外具有說服力。',
                '亞伯拉罕之約的應許（地上萬族都要因你得福）之所以能兌現，關鍵在於這套救恩必須超越猶太律法與民族界限，成為所有文化都能透過信心領受的普世信仰，而非受限於特定族群儀式的宗教。',
                '本章呼籲：面對來自中國、泰國、印尼、緬甸等重視「面子」的民族傳福音時，若能主動運用尊重面子的語彙與概念呈現福音，將比純粹套用西方框架更貼近實際文化情境。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「神為了守住自己的面子而讓基督受死」，這種說法會不會讓神顯得自私或愛面子？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是初次接觸這個框架的人很自然會有的疑問。關鍵在於理解：神的「面子」（榮耀）與祂對人的愛，並非互相衝突、而是同一件事的兩面——神信守對亞伯拉罕的應許、彰顯自己的信實公義，本身就是為了完成祝福萬民的計畫。神不是為了自己的虛榮而犧牲基督，而是因為祂的榮耀本質上就與祂對受造物毫無保留的愛與信實綁在一起——正如約翰福音三章16節「神愛世人，甚至將祂的獨生子賜給他們」與十二章28節「父啊，願你榮耀你的名」，其實是同一個救贖行動的兩種描述角度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「面子」在華人文化中常帶有負面聯想（愛面子、死要面子），如何避免福音信息因這種負面聯想而被誤解？</h4>
              <p className="text-gray-700 leading-relaxed">
                傳講這個角度時，需要清楚區分「不健康的、自我中心的死要面子」與「聖經中健康的、關乎尊嚴與身分的面子」。可以透過具體區分：世俗的「愛面子」常常是為了自己的虛榮、不顧他人的自欺欺人；而聖經中「神顧全祂的面子」則是祂堅守應許、信實可靠的表現，「我們的面子被恢復」則是指找回真實的尊嚴與價值認同，而非虛偽的表面工夫。這種區分能幫助聽眾避免誤解，同時保留這個框架的溝通力量。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">保羅在大馬士革路上經歷「兩道光」的經驗，對今日信徒理解自己被光照的過程，有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                第一道光讓保羅失明、暴露出他原本自以為義、迫害教會的黑暗；第二道光則帶來醫治、呼召與使命。這個雙重過程提醒我們：真正的悔改往往需要先經歷「暴露」的階段——誠實面對自己需要被光照出的問題，才能進入「醫治恢復」的階段。跳過暴露、直接追求安慰的信仰，可能只是膚淺的自我感覺良好，而非真實深刻的生命更新。
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
              '福音的傳達重心，可以如何凸顯救恩就是「神對我們仰臉」這個意象？試著用自己的話講一次。',
              '「贖罪的意義主要在於彰顯神的榮耀，而不僅是弭平神的忿怒」——這句話，如何調整或深化你過去對十字架的理解？',
              '在你的文化中，「面子」通常帶著什麼樣的正面或負面聯想？這對你運用「面子」概念傳福音，會帶來什麼幫助或挑戰？',
              '回想保羅在大馬士革路上「兩道光」的經歷，你自己的信主歷程中，是否也有類似「先被暴露、後被醫治光照」的階段？',
              '如果要向一位來自泰國、緬甸或越南、深受面子文化影響的朋友介紹福音，你會如何運用「保存上帝的面子」這個框架？',
              '你認為放下西方文化偏見、大方又有創意地用「面子」概念傳福音，對你個人而言最大的心理障礙是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「保存上帝的面子」五步驟寫一份福音簡報</h4>
              <p className="text-gray-700 mb-2">
                仿照本章整理的五個步驟（神的榮耀是終極目標→人的罪羞辱了神→神應許賜福萬族→基督成就應許→神彰顯並守住了榮耀），寫一份簡短的福音分享大綱，練習向人講述。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✨ 為身邊「怕丟臉」的朋友代禱</h4>
              <p className="text-gray-700 mb-2">
                想一位你認識、深受「面子」文化影響、因害怕丟臉而不敢面對某些真相或關係破裂的朋友，本週具體為他/她禱告，求神用祂仰臉光照的恩典觸摸對方。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢沒有丟下躲藏、蒙羞的我，反而親自尋找我，用祢在耶穌基督臉上所顯的榮耀之光，光照我的心。求祢幫助我，不再懼怕面對自己真實的破碎，也求祢使用我，把這道恢復面子、除去羞辱的光，帶給身邊仍在躲藏的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
