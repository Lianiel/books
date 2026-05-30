import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book18Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖戰</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">撒但為何憎恨信徒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果你是一個真正的信徒，撒但就憎恨你。他之所以憎恨你，是因為你有基督的形象，是上帝在基督耶穌裡所造的精品，為要行各樣的善工，並且你是從撒但的權勢下被搶出來的。你已經離棄撒但，逃離他的領地。因著上帝的恩典，你承認基督是你的主。你和彼得一樣見證：「禰是基督，是永生上帝的兒子」（太16：16）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但憎恨你，因為基督在你裡面，因為你愛基督。撒但想要你走回頭路。正如耶穌對門徒所說的那樣：「撒但想要得著你們，好篩你們像篩麥子一樣」（路22：31）。不要高估撒但，也不要低估撒但。他既不是一個墮落的神靈，更不是上帝。他不過是一個墮落的天使而已。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但不是全能的。當然，他是一個很有能力的敵人。約翰·布蘭查德（John Blanchard）寫道：「我們的對手有生命，老奸巨滑，足智多謀，他比最老的基督徒更長壽，比最勤勞的人更忙碌，比最強壯的人更勇猛，比最有智慧的人更聰明。」每個真正的基督徒都置身於聖經中所說的屬靈爭戰中（創3：15；啟12：7）。約翰·班揚（John Bunyan）稱之為聖戰。這個屬靈爭戰或聖戰是永久性的爭戰，要對付的就是三大敵人：魔鬼、世界和肉體。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 激烈的爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                與魔鬼和邪靈之間的爭戰是激烈的。這場爭戰生死攸關，是光明與黑暗的較量。黑暗權勢處於撒但的轄制之下，服從他的命令。撒但手下的軍官是以執行他的命令為樂的邪靈。撒但的軍隊是侵略成性，惡毒殘忍，它的權勢在高空之中，包圍著我們。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這支軍隊的能力非常強大，我們憑自己的力量無法與之爭戰，但我們既不能向撒但妥協，更不能繳械投降。相反，我們務要憑著良心遵行聖經的指導，抵擋魔鬼（雅4：7），勝過撒但。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 屬靈的爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們抵擋撒但及其手下各種邪靈的爭戰是屬靈的。我們不是用槍、坦克或原子武器來與這個敵人爭戰，也不僅僅是憑血氣爭戰。正如保羅在寫給以弗所人的信中所說：「因為我們並不是與屬血氣的爭戰，乃是與那些執政的，掌權的，管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰」（弗6：12）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說，這場爭戰不是為了屬世的權勢、財產或榮譽。它有更高的目標，那就是真理的屬靈真實性、公義、永生上帝及其兒子的榮耀。在屬血氣的有形的敵人背後，是屬靈的軍隊和無形的敵人。屬靈爭戰所對付的是無形的敵人，他們用無形的武器反對耶穌基督的事業和國度。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們就是與撒但那支無形的、不計其數的大軍摔跤。摔跤是近距離的屬靈衝突，激烈而艱辛。在摔跤過程中，對手之間沒有距離，他們緊緊抓住對方不放。無論是作為黑暗王子，還是光明天使，在這場生死攸關的屬靈爭戰中，撒但都是與我們進行短兵相接的白刃戰。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 必要的爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                抵擋撒但及其手下邪靈的爭戰是必要的。就像當今世界很難避免與恐怖主義爭戰一樣，我們也無法避免與撒但的爭戰。無論是否願意，我們都處在戰爭之中。我們無法訴諸和平主義，也不能要求延期服役，更無法避免子彈和炮彈。處於戰爭之中，卻沒有意識到這一點，是極其危險的。如果我們忽視敵人，就註定使自己失敗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，保羅吩咐我們「要穿戴上帝所賜的全副軍裝，就能抵擋魔鬼的詭計」（弗6：11）。如今太多基督徒沒有注意到保羅的吩咐。太多教會談論的是解除武裝，而不是加強軍備。太多牧師大力宣揚促進全世界基督教團結的「普世性兄弟關係」，接受各種宗教，而不揭露這個世界上兩個敵對王國之間的對立。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雖然談及撒但是一個令人不快的主題，我們卻必須研究。清教徒湯瑪斯·布魯克斯（Thomas Brooks）寫道：「基督、聖經、你們自己的心和撒但的詭計是首先必須研究的四件大事」（《寶貴的應對辦法》，Precious Remedies，15頁）。如果我們沒有認識到撒但的目標、力量和局限，我們就疏忽大意，低估了敵人的力量。
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed italic">
                「在這本小書中，我們要考察的就是撒但和他的詭計。我相信我們所學的將會幫助我們奮力爭戰，堅決爭戰，繼續爭戰，直到我們徹底戰勝敵人（參《海德堡教理問答》，127問）。願上帝在爭戰中幫助我們。」
              </p>
              <p className="text-right text-gray-500 text-sm mt-2">——周必克</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">1</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">屬靈爭戰的三個本質特徵：</span>激烈（是生死之戰，沒有任何中立的空間）、屬靈（我們對付的不是有血有肉的人，乃是天空屬靈氣的惡魔，弗6:12）、必要（每個信徒都置身其中，無法迴避，必須主動認識和裝備）。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">撒但憎恨信徒的兩個原因：</span>第一，信徒身上有基督的形象——我們的存在本身就是對他最深的冒犯；第二，信徒是從撒但的國度中被基督搶救出來的——每一個得救的靈魂都是他的損失，他決不甘心。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">托馬斯·布魯克斯的四大必修課題：</span>（1）基督的榮美——認識我們的救主；（2）聖經的奧秘——深研上帝的話語；（3）自己的心——誠實認識自己的軟弱與傾向；（4）撒但的詭計——認識仇敵的策略。研讀撒但不是選修課，而是屬靈成熟不可缺少的一環。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">正確的研讀動機：</span>認識撒但的目的，不是要迷戀屬靈爭戰或著迷於撒但的事，而是更加清楚地看見基督的得勝，從而更有效地倚靠他——認識仇敵的最終目的，是更深地認識並倚靠我們的救主。</p>
          </div>
        </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「聖戰」概念的歷史根源</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰·班揚（John Bunyan，1628-1688）在其著作《聖戰》（The Holy War）中，以寓言形式描繪了靈魂（曼靈城）被魔鬼奪取、又被以馬內利王子（象徵基督）奪回的史詩性爭戰。班揚的框架幫助基督徒理解，屬靈爭戰不只是個人的內心掙扎，而是宇宙性的戰役，有其開始、發展和終局。這一主題早見於《創世記》3：15的原始福音，貫穿整本聖經直到《啟示錄》最終的得勝。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「與血氣爭戰」的常見誤解</h4>
              <p className="text-gray-700 leading-relaxed">
                許多基督徒把「屬靈爭戰」誤解為只需做禱告和靈修，而忽略了日常的屬靈紀律、認罪悔改和肢體守望。另一個極端是過度「屬靈化」，把所有困難都歸咎於邪靈，而不承擔個人責任。保羅的教導（弗6：12）提醒我們：真正的敵人是屬靈的，但戰勝他們的方法包括真實的生命改變——穿戴全副軍裝，而非尋找快捷方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">當代教會忽視屬靈爭戰的危機</h4>
              <p className="text-gray-700 leading-relaxed">
                當代西方教會普遍迴避談論撒但和屬靈爭戰，原因包括：受啟蒙理性主義影響、害怕被視為迷信、以及對「平衡」信仰的追求。然而，這種沉默正是撒但最歡迎的狀態。大衛·波利森（David Powlison）的研究指出，當教會停止以聖經框架理解邪惡時，信徒就只能借助世俗心理學或靈恩主義的極端，這兩條路都偏離了聖經的中道。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">布魯克斯「四件大事」的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                清教徒湯瑪斯·布魯克斯在《寶貴的應對辦法》（Precious Remedies Against Satan's Devices，1652年）中提出，認識基督、認識聖經、認識自己的心和認識撒但的詭計，是靈命成長的四大基礎。這四者彼此相關：認識基督是根基，認識聖經是武器，認識自己的心是前提，認識撒但的詭計則是作戰情報。缺少任何一項，信徒都會在爭戰中處於劣勢。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">作者說撒但憎恨信徒是因為「你有基督的形象」和「你是從撒但的權勢下被搶出來的」。這個認識對你如何理解自己信仰的意義有何影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「不要高估撒但，也不要低估撒但」。在你的生命和周遭的教會文化中，哪種傾向更常見？你認為原因是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「摔跤」這個比喻（弗6：12）描述了近距離、激烈的屬靈衝突。你生命中有哪些領域感覺像是在進行這樣的近距離屬靈搏鬥？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">作者批評許多教會「談論的是解除武裝，而不是加強軍備」。你所在的教會環境如何談論屬靈爭戰？你認為這樣的談論是否足夠？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">布魯克斯說「基督、聖經、你們自己的心和撒但的詭計是首先必須研究的四件大事」。你對這四件大事各自的認識程度如何？哪一項最需要加強？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「處於戰爭之中，卻沒有意識到這一點，是極其危險的。」回顧你的信仰歷程，是否有過一段時間你沒有意識到自己正在屬靈爭戰中？那段時間對你的靈命有什麼影響？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立屬靈爭戰的正確認識</h4>
              <p className="text-gray-700 mb-2">本週用15分鐘讀以弗所書6：10-20，並思考以下問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我是否承認自己處於真實的屬靈爭戰中？</li>
                <li>我傾向於高估還是低估撒但的能力？</li>
                <li>哪些領域我可能在「解除武裝」而非「加強軍備」？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀布魯克斯的四件大事</h4>
              <p className="text-gray-700 mb-2">本月針對布魯克斯所說的四件大事制定個人研讀計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>基督：閱讀一章關於基督位格和工作的書籍</li>
                <li>聖經：每日背誦一節關於屬靈爭戰的經文</li>
                <li>自己的心：每晚記錄一個今日看見的自身罪性傾向</li>
                <li>撒但的詭計：閱讀本書並記筆記</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 與信仰同伴建立屬靈守望</h4>
              <p className="text-gray-700 mb-2">聖戰不能孤軍作戰。本週邀請一位信任的弟兄姐妹：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每週分享一個你在屬靈爭戰中的掙扎</li>
                <li>互相為對方的屬靈軟弱代禱</li>
                <li>定期一起讀這本書，互相督促應用</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊，感謝祢告訴我，我的生命不是偶然的平靜，乃是真實的爭戰。求祢幫助我既不恐懼、也不輕視這場爭戰。教導我認識撒但的詭計，更認識祢的大能。讓我穿戴全副軍裝，不是靠自己的力量，乃是靠祢的大能大力。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
