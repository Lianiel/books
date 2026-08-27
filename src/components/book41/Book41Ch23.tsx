import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Gift, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch23() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-7</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「守護關係」的動力所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              作者的答案是肯定的：「守護關係」的力量，與基督福音連結的方式有兩種——第一種簡單，第二種複雜。
            </p>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">簡單的方式：神是偉大的施恩者</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一世紀的基督徒把神的恩典視為一種守護關係：「神的恩典（charis）不會與他們所熟悉的恩典有異，只會在質量和程度上有所不同。」<sup>1</sup><span style={cite}>（deSilva, Honor, Patronage, Kinship, Purity, 122.）</span>「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生」（約三16）——從守護關係的觀點，這位尊榮、偉大的施恩者，把自己的兒子當作禮物賜給世人。德西瓦特別指出，約翰福音強調耶穌的死並非失敗或敵人的勝利：眾人想盡辦法要捉拿耶穌卻不斷受挫，一直到「祂的時刻」到了才奏效；耶穌甚至清楚知道背叛者的身分、精心策劃自己的受死——「顯然，耶穌並非受害者，而是一位樂意施恩的人，祂心心念念要把好處帶給人，至死不渝。」<sup>2</sup><span style={cite}>（David deSilva, The Hope of Glory, 78.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡有兩樣禮物：第一，神賜下祂的兒子，這禮物就是耶穌自己；第二，「因信得救」——「你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的……也不是出於行為，免得有人自誇」（弗二8-9）。羅馬書五章8-9節連結了這兩個禮物：「惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。現在我們既靠著他的血稱義，就更要藉著他免去神的忿怒。」作者特別留意羅馬書五章12-21節中反覆出現的「統治」一詞（14、17、21節），暗示國度與尊榮：汝耶解釋，「既然基督帶來恩典的全面性勝利，罪的統治就結束了，而恩典的統治成了新的開始……當人領受了神充分的恩典，根本就不需要更多的榮耀；可恥的爭競之心、受罪行所牽制的行徑，自然而然會畫下休止符。」<sup>3</sup><span style={cite}>（Jewett, Romans, 389.）</span>我們的施恩者是一位君王，祂給了最昂貴的禮物——祂的兒子；因此，我們讚美：「感謝神，因他有說不盡的恩賜！」（林後九15）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">複雜的方式：「亞伯拉罕的福音」——與神同做施恩者</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅把神傳給亞伯拉罕的福音，濃縮成一句話：「萬國都必因你得福」（加三8-9）。守護概念交織在亞伯拉罕的生平中——他與麥基洗德相遇、受其祝福（創十四17-20），這正說明：神是一切尊貴、榮耀的終極源頭，亞伯拉罕跟祂一樣，同作施恩者，透過他的家庭祝福萬國。羅馬書四章18-25節描述亞伯拉罕在無可指望時仍因信持守盼望，「將榮耀歸給神」，第25節總結「耶穌被交給人，是為我們的過犯；復活，是為叫我們稱義」——亞伯拉罕的信心（不是人的努力）如何成為基督徒的榜樣：對神有堅定不移的信心，猶太律法在此毫無作用。這也間接表達：亞伯拉罕與神同為施恩人，祝福萬國萬民。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提出一個關鍵問題：亞伯拉罕所擁有的榮耀——做神賜福萬民的共同施恩者或中間人——是否也可成為今天基督徒和教會的榜樣？答案是肯定的。作者以保羅為例：「我們作基督的使者，就好像神藉我們勸你們一般。我們替基督求你們與神和好」（林後五20）——保羅在以弗所書中，七次使用「奧祕」這個詞彙，描述神託付給他傳福音給外邦人的恩典：「用啟示使我知道福音的奧祕」（弗三3）、「使眾人都明白，這歷代以來隱藏在創造萬物之神裏的奧祕是如何安排的」（弗三9）。羅馬書結尾，保羅寫道：「神所給我的恩典，使我為外邦人作基督耶穌的僕役，作神福音的祭司」（羅十五15-16）——雖然作者指出，受過完整猶太傳統訓練的保羅，可能更多把自己理解為「祭司般的中間人」，而非嚴格意義上的「施恩者」，但當保羅寫下加拉太書三章8節時，顯然已經看到自己就置身在神與亞伯拉罕的偉大故事當中，與亞伯拉罕一樣，被同一個使命所呼召：祝福世上萬民。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者總結出一個重要原則：參與宣教、傳遞神全面的愛的故事，這份榮耀不僅是福音的果效——置身神國事工的榮耀，本身就是好消息！這是福音的一部分。今天，神的宣教呼召，具有冒險、挑戰、卻也崇高的回報，享有特權和尊嚴，以及基督的同在（太廿八20）——如果我們認定「萬國都要因你得福」的福音，以及保羅從一開始就被呼召成為外邦人的基督使者，那麼，加入神的全球使命這份榮耀，對所有基督徒而言理當是優先之事，而不該被留到門訓的後面階段才提及。
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
                '「簡單的方式」把福音理解為神這位偉大施恩者，主動賜下獨生子作為禮物，且是甘心樂意、精心策劃、而非被迫受害的施恩之舉——約翰福音特別強調耶穌對自己的死有完全的主導權。',
                '羅馬書五章反覆出現的「統治」一詞，揭示恩典與罪之間存在一場「誰來統治」的榮耀競爭，而基督徒領受了恩典的統治，便不再需要透過可恥的爭競來尋求榮耀。',
                '「複雜的方式」把福音理解為「亞伯拉罕式的福音」——信徒和教會蒙召，效法亞伯拉罕的角色，與神同做賜福萬民的施恩者，這是一種比單純「領受救恩」更深一層的榮耀身分。',
                '保羅一生的服事，正是「亞伯拉罕式福音」的具體實踐：他多次以「奧祕的管家」「外邦人的祭司」自居，把傳福音給外邦人視為神賦予他的至高榮耀，而非單純的義務或差事。',
                '作者的核心論點是：參與宣教本身就是好消息的一部分，而非只是信主後才附加的責任——「與神同做施恩者」這份尊榮，理當從門訓一開始就被信徒認識和珍視。',
                '這兩種切入角度為跨文化事奉者提供實用彈性：對渴望「被施恩、被眷顧」的聽眾，可從神是偉大施恩者切入；對渴望「參與偉大使命、成為他人祝福」的聽眾，則可從亞伯拉罕式的呼召切入。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「宣教的呼召是得救歷程的一環，不該留到門訓後面才提」，這對教會的門訓次序安排有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多教會的門訓路徑，習慣把「參與宣教、服事他人」安排在門訓的後段——先建立信徒個人的信仰根基，再逐步引導其參與事奉。作者的論點提出另一種可能：既然「與神同做施恩者」本身就是福音好消息的一部分，或許門訓一開始，就該讓新信徒認識到自己蒙召不只是「被拯救」，也是「被差派去祝福他人」，讓宣教使命感成為信仰身分認同不可分割的一部分，而非後期才附加的進階選修。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">保羅究竟更像「施恩者」還是「祭司般的中間人」？這個區分對今日信徒理解自己在傳福音中的角色，有何實際意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者細膩地指出，保羅雖然參與神賜福萬民的偉大計畫，但他更多把自己定位為「中間人」（把人引到神面前），而非「施恩者」本身（真正的恩典來源仍是神）。這個區分提醒今日信徒：傳福音、服事他人時，應存謙卑的心態——我們是蒙恩、被神使用的管道與中間人，而非施恩本身的源頭，這能避免服事者產生「我在拯救別人」的驕傲，同時仍然珍視神賦予這個角色的尊榮。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「亞伯拉罕式的福音」框架，對於習慣家族、宗族觀念的華人文化，有何獨特的動員力量？</h4>
              <p className="text-gray-700 leading-relaxed">
                華人文化中「光宗耀祖」「造福鄉里」的價值觀，與「與神同做施恩者、祝福萬族」的呼召有深刻的共鳴——這不是要求信徒做一件與自己家族身分無關的苦差事，而是邀請他們承接一個比原生家族更大、卻同樣根植於「為家族／群體帶來祝福與榮耀」邏輯的呼召。這種框架，可能比單純強調「個人蒙恩得救」更能激發華人信徒參與宣教的熱情。
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
              '我們如何把「神是偉大施恩者，慷慨賜下祂的兒子」這份愛，更適切地傳揚出去？',
              '保羅視自己為「基督的使者」「福音的祭司」，這對你理解自己在傳福音中的角色定位，帶來什麼啟發？',
              '如果傳福音就像走入「亞伯拉罕的故事」，重點放在透過耶穌基督、萬國與神同享榮耀，你會如何向人分享福音？',
              '在你的教會或團隊中，宣教／服事的呼召，是被視為「額外的責任」，還是「得救歷程本身的一部分」？',
              '「亞伯拉罕的福音」——強調祖先、故事、榮耀——對於習慣口傳文化、重視家族傳承的聽眾，可能格外有吸引力，你能想到哪些具體的群體？',
              '在榮/辱文化中，「與神同為各民族的施恩者」這份榮耀，是否能成為你所屬教會宣教動員的關鍵？可以如何具體落實？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀羅馬書五章12-21節</h4>
              <p className="text-gray-700 mb-2">
                圈出經文中重複出現的「統治」一詞，體會保羅如何用榮耀競爭的語言，描述罪的統治與恩典統治之間的對比，並默想這對你自己生命的意義。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 重新框架你對宣教／服事的理解</h4>
              <p className="text-gray-700 mb-2">
                寫下一段話，用「與神同做施恩者、祝福萬族」的角度，重新描述你目前正在參與（或渴望參與）的服事或宣教機會，並與一位屬靈夥伴分享。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是那位甘心樂意、親自策劃救恩、把獨生子當作禮物賜給我的施恩者。求祢也幫助我，像亞伯拉罕、像保羅一樣，把參與祢的宣教使命，視為至高的尊榮，而不是額外的負擔，讓我甘心樂意成為祢祝福萬族萬民的管道。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
