import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">認識教會</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、教會是什麼？</h3>
              <p className="text-gray-700 leading-relaxed">
                「教會」這個詞，在中文讓人聯想到建築物（教會堂）或組織（某某教會）。但希臘文原文「ekklesia」的意思是「被召出來的群體」——指被上帝從世界中呼召出來、聚集在一起的人。教會不是一個人自發組成的社群，而是因上帝的主動呼召而存在的。這個定義有深刻的意涵：教會的主動者是上帝，而非人；教會的根基是上帝的召選，而非人的決定。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                加爾文給教會的經典定義是：「凡是上帝的話被宣講和聆聽、聖禮被正確施行的地方，那裡就有教會。」這是一個動態的概念——教會不是靜態的建築或組織，而是一個持續發生的「事件」：上帝透過祂的話語向人說話，人真實地聆聽和回應，聖禮被照著基督的設立施行。這個定義簡潔有力，既排除了只有外在組織形式卻無實質的假教會，也開放了各種形式的真教會。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、有形教會與無形教會</h3>
              <p className="text-gray-700 leading-relaxed">
                奧古斯丁最先明確區分了「有形的教會」（visible church）和「無形的教會」（invisible church）。有形教會是我們看得見的、歷史上實際存在的教會組織和群體；無形教會則是真正蒙上帝揀選、得著救恩的信徒群體，只有上帝完全知道其成員是誰。這個區分的歷史背景是對抗多納特主義（Donatism）——他們主張只有道德清白的基督徒才算是真教會。奧古斯丁指出，有形教會就像麥子與稗子同在的麥田（太13:24-30），最終的分別屬於上帝，人無法完全判定。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                改革宗傳統的格言「教會永遠在更新中」（Ecclesia semper reformanda est）提醒我們：有形教會從來不是完美的，需要不斷地按照上帝話語的標準進行自我省察和改革。這個格言有時被誤解為「我可以不斷地更換教會，直到找到完美的教會」，但其真正意思是：我所在的教會需要持續更新，而我是這個更新過程的一部分，而非旁觀的批評者。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、教會的五大功能</h3>
              <p className="text-gray-700 leading-relaxed">
                新約聖經描述教會的功能，可以歸納為五個希臘文術語。交誼（Koinonia）：彼此相交、分享生命的群體生活，超越表面的點頭之交；教育（Didache）：教導信仰、門徒訓練，幫助信徒在真理中成長；服務（Diakonia）：服事社會、關懷弱勢，將上帝的愛實踐在具體的需要上；傳道（Kerygma）：宣揚福音，將耶穌基督的好消息帶給尚未認識的人；禮拜（Leiturgia）：崇拜上帝，承認上帝的主權和恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這五個功能不是平等排列的，而是以禮拜為根基和中心。教會首先是一個崇拜上帝的群體，其他四個功能都從崇拜中流出、也流向崇拜。一個只有服務（Diakonia）而沒有禮拜（Leiturgia）的教會，容易變成一個NGO；一個只有禮拜而沒有服務的教會，則脫離了上帝呼召我們進入世界的使命。五個功能的均衡，是健康教會的標誌。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、教會與文化：澎湖馬公的故事</h3>
              <p className="text-gray-700 leading-relaxed">
                林鴻信引用澎湖馬公教會的故事作為教會影響文化的具體例子。馬公教會長期培育出大量醫療人才，使澎湖地區有遠超其規模的醫療資源。這個例子說明：一個忠心宣揚福音、培育門徒的地方教會，可以在數十年間深刻地轉化一個地方的文化和社會。教會對文化的影響，往往不是透過政治力量或媒體運動，而是透過一代代忠心的門徒，在各自的崗位上活出福音的價值。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                然而教會與文化的關係是雙向的。教會在影響文化的同時，也不可避免地受文化塑造。台灣教會受儒家文化影響，可能過分強調尊卑位階而壓制恩賜；受商業文化影響，可能把教會當成服務消費者的機構。教會需要有持續的自我省察：我們在哪些方面是在「轉化文化」，在哪些方面是被「文化同化」？先知性的聲音，往往在這種自我省察中誕生。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '「教會」（ekklesia）是「被召出來的群體」：主動者是上帝而非人，教會的根基是上帝的呼召，而非人自發組成的契約關係。',
              '加爾文的教會定義：「上帝的話被宣講和聆聽、聖禮被正確施行的地方就有教會」——這是動態的、事件性的，而非靜態的建築或組織。',
              '有形教會（可見的組織）與無形教會（上帝所知的真信徒）的區分：教會是麥子與稗子同在，最終分別屬於上帝；「教會永遠在更新中」呼召我們成為更新的參與者而非批評者。',
              '教會的五大功能：交誼（Koinonia）、教育（Didache）、服務（Diakonia）、傳道（Kerygma）、禮拜（Leiturgia）——以禮拜為根基，五者缺一則失衡。',
              '教會與文化是雙向影響：忠心的教會能深刻轉化地方文化（如馬公醫療），但教會也需持續自我省察，辨別自己是在轉化文化還是被文化同化。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「有形教會」與「無形教會」的區分</h4>
              <p className="text-gray-700 leading-relaxed">奧古斯丁最先明確區分了有形教會和無形教會，是為了回應多納特主義（Donatism）——他們主張只有道德清白的基督徒才是真教會的成員。奧古斯丁指出，教會是麥子與稗子同在的麥田（太13:24-30），最終的分別屬於上帝。這個區分防止了人類按自己的標準分裂教會，但也帶來危險：如果看得見的教會的狀況與無形教會的理想相距太遠，信徒可能用「無形教會」作為不投入具體教會生活的藉口。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">同質性教會（Homogeneous Unit）的爭議</h4>
              <p className="text-gray-700 leading-relaxed">麥高文（Donald McGavran）的「教會增長學」提出「同質性單位」原則：同類人最容易向同類人傳福音，因此建立針對特定族群的教會（如同語言、同職業）是有效的宣教策略。這在福音普及上有實效，但也受到批評：基督的教會應當是「沒有猶太人和希臘人，沒有自主的和為奴的，沒有男和女」（加3:28）的新人類群體，刻意的同質化反而強化了社會的分隔，未能彰顯教會作為新創造的見證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">台灣教會在歷史轉折中的角色</h4>
              <p className="text-gray-700 leading-relaxed">台灣教會在歷史的轉折點上扮演了重要角色。長老教會在威權時期發表了多份聲明，為人權和民主化發聲。這一方面顯示了教會作為先知群體的可能性；另一方面，也有些教會選擇迴避政治，以「傳福音為重」作為不介入的理由。在面對社會不義時，教會的沉默有時是共謀；但教會的發言也需要智慧，避免淪為某種政治力量的工具。如何在「在世卻不屬世」中維持先知性的位置，是台灣教會持續的課題。</p>
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
              '你目前參與的教會，最著重哪個功能（交誼、教育、服務、傳道、禮拜）？哪個功能最被忽略？',
              '你曾否對教會感到失望或受傷？面對教會的不完美，「教會永遠需要更新」這個觀念如何幫助你？',
              '你認為理想的教會應該是什麼樣子？這個理想是根據聖經，還是根據個人偏好？',
              '你所在的教會與周邊文化的關係是怎樣的——是被文化同化，還是在轉化文化，還是與文化隔離？',
              '「被召出來的群體」這個定義如何改變你對教會成員身份（church membership）的理解？',
              '你認為教會應當如何回應當今社會的不義或苦難？邊界在哪裡？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 為你的教會「診斷」</h4>
              <p className="text-gray-700 mb-2">根據教會五大功能，為你的教會打分數（1-5分）並說明理由：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>交誼（彼此連結的深度）：＿分，因為……</li>
                <li>教育（信徒造就的系統性）：＿分，因為……</li>
                <li>服務（對社會的關懷行動）：＿分，因為……</li>
                <li>傳道（福音宣揚的積極性）：＿分，因為……</li>
                <li>禮拜（崇拜上帝的真實性）：＿分，因為……</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">然後思考：我個人可以在哪個最弱的功能上做出貢獻？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 深化你的「交誼」</h4>
              <p className="text-gray-700 mb-2">本週主動接觸教會中你不太熟悉的一位弟兄或姊妹：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>邀請他/她喝咖啡或一起用餐</li>
                <li>真誠地了解他/她的生命故事和信仰歷程</li>
                <li>為他/她的一個需要代禱</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主啊，感謝祢建立教會，使我們不是孤單的基督徒。我承認我有時對教會失望，甚至逃避。求祢幫助我，以祢愛教會的心愛教會，以祢對教會的盼望而非對教會現況的失望來參與教會。使我成為教會更新的一部分，而非批判的旁觀者。願我所在的教會真實地成為上帝話語被宣講聆聽、聖禮被施行的地方。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
