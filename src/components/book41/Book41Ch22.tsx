import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Crown, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch22() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-6</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「身體語言」的動力所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">被忽略的「國度福音」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的：聖經的「身體語言」動力有助基督福音的傳達，尤其是在「國度福音」方面。作者指出一個常被忽略的現象：許多基督徒對福音的理解，單單建立在羅馬書和加拉太書中的「因信稱義」觀念，卻忽略了福音書（以及新約其他部分）中反覆宣告的「國度的福音」（太九35，四23，廿四14；可一15；路四18-19、43，八1）<sup>1</sup><span style={cite}>（N. T. Wright指出福音派常忽視福音書中的福音，見How God Became King.）</span>。作者從「身體語言」的角度切入國度福音：詩篇八篇6節「你派他管理你手所造的，使萬物都服在他的腳下」，以及詩篇一一○篇1節「你坐在我的右邊，等我使你仇敵作你的腳凳」——這是新約中被引用最多次的舊約經文，馬太、馬可、路加福音都記載耶穌用這節經文，間接宣告自己是「主」，坐在神的右邊，以敵人為「腳凳」，彰顯基督是唯一、完全得勝的王。
              </p>
              <p className="text-gray-700 leading-relaxed">
                布萊特為福音下了貼切的定義：「耶穌就是應許中的彌賽亞，祂的到來，是以色列人盼望的實現，祂（為人類）建立了神的國度。」<sup>2</sup><span style={cite}>（John Bright, The Kingdom of God, 190.）</span>作者引用路加福音四章耶穌在拿撒勒會堂的宣告：「主的靈在我身上……叫那受壓制的得自由，報告神悅納人的禧年……今天這經應驗在你們耳中了」（路四18-21）——這就是耶穌基督福音的本質、國度的福音，透過耶穌的國度統治，打破桎梏，對窮人來說是好消息：被擄的得釋放，瞎子能看見，受壓迫的得自由。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">為了全人類：一個令人震怒的擴展</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者特別提到一個耐人尋味的插曲：耶穌在故鄉會堂宣告後，起初獲得猶太群眾的青睞，但當祂提到神的賜福並不專屬猶太人（提及外邦寡婦與外邦痲瘋病人乃縵蒙福的例子，路四25-27），會堂裡的熱絡氣氛瞬間冰冷，「會堂裏的人聽見這話，都怒氣滿胸」，甚至要把耶穌推下山崖（路四28-29）。博許分析，這是因為當時聽眾期待耶穌宣告以賽亞書六十一章中「報仇的日子」，但耶穌卻省略了報復的信息，只宣告「神悅納人的禧年」——「不會因為救恩時機與其預期不同而動怒者是有福的，神對窮人、被拋棄者和陌生人，甚至對以色列仇敵的憐憫，取代了神聖的復仇！」<sup>3</sup><span style={cite}>（Bosch, 111.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「已然、未然」的國度張力</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者指出國度福音存在一種矛盾張力：一方面，國度的好消息已透過基督的死和復活顯明——保羅宣告基督是「那可稱頌、獨有權能的萬王之王、萬主之主」（提前六15），用的是現在式，博許形容：「拯救的盼望並不是一首遙不可及的未來之歌，因為這個未來現在已然來到。」<sup>4</sup><span style={cite}>（Bosch, 32.）</span>另一方面，國度仍有待最終彰顯：「基督既將一切執政的、掌權的、有能的都毀滅了，就把國交與父神……神叫萬物都服在他的腳下」（林前十五24-27）；「世上的國成了我主和主基督的國；祂要作王，直到永永遠遠」（啟十一15）。國度的好消息是：此時此刻，透過僕人基督救贖的工作，神要釋放人們得自由，將人從各種形式的壓制中拯救出來——無論是任何宗教、經濟條件、社會地位、族群，凡求告神的人，都可以得救。
              </p>
              <p className="text-gray-700 leading-relaxed">
                救贖與國度福音的關聯，可在希伯來書中找到解答：「祂洗淨了人的罪，就坐在高天至大者的右邊」（來一3）；「但基督獻了一次永遠的贖罪祭，就在神的右邊坐下了」（來十12）——雖然希伯來書常稱基督為大祭司，但這些「坐在神右邊」的敘述，都隱約傳達了基督的君王統治，因此「悔改」是迫切又合理的：「日期滿了，神的國近了。你們當悔改，信福音！」（可一15）作者也提出一個值得深思的觀察：西方文化背景的基督徒因啟蒙運動以來「法治在王權之上」的傳統（可追溯至一六四四年蘇格蘭牧師魯則福《法治與君權》一書），可能不自覺對「君王統治」的福音框架心存排斥或陌生感<sup>5</sup><span style={cite}>（Rutherford, Lex, Rex.）</span>——但聖經的主張恰恰相反：宇宙的最終不是關乎法治或道德，而是關乎萬王之王耶穌基督，祂是一切法則的起源。
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
                '許多基督徒把福音窄化為羅馬書、加拉太書式的「因信稱義」，卻忽略了福音書一再宣告的「國度福音」——「坐在神右邊、以敵人為腳凳」的身體語言意象，正是理解國度福音君王維度的鑰匙。',
                '耶穌在拿撒勒會堂的宣告（路四18-21）定義了國度福音的核心：釋放被擄的、使瞎眼的看見、叫受壓制的得自由——這是給窮人、邊緣人的好消息，而非僅止於個人靈魂得救。',
                '耶穌刻意省略以賽亞書六十一章中「報仇的日子」，只宣告「神悅納人的禧年」，引發會堂群眾的憤怒——這揭示國度福音從一開始就是超越猶太民族主義、擁抱萬民（包括仇敵）的普世信息。',
                '國度福音存在「已然、未然」的張力：基督現今已坐在神的右邊掌權（已然），但萬物完全服在祂腳下、國度完全彰顯，仍有待將來（未然）——這個張力正是「日期滿了，你們當悔改，信福音」呼召的迫切基礎。',
                '西方文化「法治優先於王權」的啟蒙傳統，可能讓西方基督徒不自覺對「君王統治」式的國度福音感到陌生甚至排斥，而傾向偏好規則式的福音表達（如《屬靈四律》）——這是作者提醒讀者留意的潛在文化盲點。',
                '對於習慣君主體制、部落酋長制或看重權柄位階的文化而言，「萬王之王」這樣的身體語言意象，可能比西方式的「法治／契約」框架，更直接、更有力地傳達耶穌基督掌權得勝的好消息。',
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
              <h4 className="font-semibold text-gray-800 mb-2">拿撒勒會堂群眾對「福音竟包括仇敵」感到憤怒，這對今日教會思考「福音的普世性」有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個場景揭示一個容易被忽視的真相：人們對福音的抗拒，未必是因為不相信神的存在或大能，而往往是因為福音的恩典範圍，超出了他們願意接受的界線——他們期待神只祝福「自己人」、審判「敵人」，卻無法接受神的憐憫同樣臨到看似不配的外人。這提醒教會反思，自己傳講的福音，是否也在無意間劃定了某種「我們vs他們」的界線，把神的恩典限制在特定群體內，而抗拒福音真正普世、超越界線的本質。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「法治在王權之上」的西方傳統，如何具體影響了福音在西方的表達方式（如《屬靈四律》）？</h4>
              <p className="text-gray-700 leading-relaxed">
                《屬靈四律》式的福音材料，本質上是「法則式」的——用一套普遍適用的原則（律）來解釋人與神的關係，這正呼應西方「法治高於統治者」的文化直覺：連神與人的關係，也被理解為一套需要遵循的「定律」。相對地，若換成「萬王之王」的框架，福音的重心會從「認識並遵守正確的屬靈法則」，轉為「向一位有位格、掌權的君王效忠降服」——這對熟悉君主、酋長或家長權威文化的聽眾，可能是更直覺、更貼近生活經驗的框架。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">國度福音「已然、未然」的張力，對信徒面對世上持續存在的不公義，有何牧養上的幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                若只強調「已然」（基督已經掌權得勝），容易讓信徒對世上持續存在的苦難與不公感到困惑，甚至懷疑福音的真實性；若只強調「未然」（一切要等到將來才實現），又容易讓信徒陷入消極等待、對現今處境毫無盼望的無力感。健康的「已然未然」神觀，能幫助信徒既在苦難處境中持守盼望（因基督已經得勝、掌權），也存留積極委身、參與神國度工作的動力（因國度尚未完全彰顯，仍需要見證人）。
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
              '你過去理解的「福音」，比較偏向「因信稱義」的個人救恩，還是也涵蓋「國度福音」的君王統治向度？',
              '你是否曾因福音「連仇敵也蒙福」感到不舒服，就像拿撒勒會堂裡的群眾一樣？這對你理解神的憐憫有何挑戰？',
              '在貧困中過日子，或受統治者迫害的人們，「基督國度的福音」可以如何具體為他們帶來盼望？',
              '你能否想到歷史上（或今日）教會鞏固特定政權、以致失去先知性聲音的例子？這對福音的可信度有何影響？',
              '對於擁有榮耀地位或掌權者而言，「國度的福音」為何可能冒犯到他們？它向壓制者發出怎樣的先知性信息？',
              '西方基督徒因民主傳統對「君王統治」框架心存疑慮的觀察，是否也適用於你自己？這對你理解「萬王之王」耶穌基督，有何影響？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀路加福音四章16-30節</h4>
              <p className="text-gray-700 mb-2">
                留意耶穌宣告內容與群眾情緒轉變的過程，思考「國度福音」如何從一開始就挑戰狹隘的民族主義期待，並默想這對你自己屬靈視野的挑戰。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👑 用「萬王之王」的角度重講一次福音</h4>
              <p className="text-gray-700 mb-2">
                找一個機會，練習不用「法則」或「四律」的方式，而是用「耶穌是掌權得勝的君王，邀請你效忠降服於祂」的角度，向人分享福音。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，祢是萬王之王、萬主之主，如今坐在父神的右邊掌權。求祢幫助我不再把福音窄化成一套規則，而是全心降服在祢的國度統治之下。也求祢擴張我的心胸，讓我像祢一樣，願意把祢的憐憫和祝福，傳給那些我原本不願意接納的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
