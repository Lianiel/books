import React from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch5() {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命內裡的轉變</h2>
        <p className="text-gray-500 mt-2 text-sm">信 · 望 · 愛——裡面的人的三重更新</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <p className="text-gray-700 leading-relaxed">
                本章討論靈修過程中「裡面的靈性」（屬靈生命）在哪些方面需要被更新：（1）意志的降服——操練在信靠與悔改中放下自己，達到意志的自由與釋放；（2）理智的歸正——在終末的盼望裡面對良知的呼聲，啟動理性的認知；（3）情感的聖化——在基督的愛裡做到單單以上帝為樂，讓對上帝的愛成為生活的中心。在從上帝而來的信、望、愛中，我們的心靈被歸正、扭轉與更新。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">一、信與意志的轉變</h3>

              <h4 className="font-semibold text-gray-800 mb-2">裡面的人的掙紮（羅7:21-25）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在《羅馬書》曾這樣自我反省：「我覺得有個律，就是我願意為善的時候，便有惡與我同在。因為按著我裡面的意思（原文是人），我是喜歡上帝的律；但我覺得肢體中另有個律和我心中的律交戰，把我擄去叫我附從那肢體中犯罪的律。我真是苦啊！誰能救我脫離這取死的身體呢？感謝上帝！靠著我們的主耶穌基督就能脫離了。」（羅7:21-25）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在這個裡面的人的爭戰中清楚知道：「在我裡頭，就是我肉體之中，沒有良善。」（羅7:18）用現代的語言表達，就是當裡面的人與「外面的人」（肉體或過去的老我）交戰，若只靠一己之力去行律法，裡面的人將註定打敗仗。因此，他是何等渴望脫離這屬肉體的生活：「我真是苦啊！誰能救我脫離這取死的身體呢？」
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">深切的悔改：加爾文的兩個層面</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅揭示意志受到捆綁的情況，因此裡面的人首先表現為人的意志。只有深切悔改才能讓我們（新人）的意志不再受肉體勢力支配，並與過去的老我分離。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼要強調深切的悔改？因為有時我們的悔改實在太表面了，只為著我們所做的某些事悔改，或僅為這些事在道德行為層面上悔改。讓事情就這麼過去了，然後生活又恢復到原來的樣子，同樣的事情可能會重複以相同的形態出現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文說，這種對罪的恨惡及對肉體的絕望、對以往那種生活方式的痛悔與離棄，就是悔改的第一層面。這是一種醒悟。另外，當我們面對絕望與痛悔，依然堅持不自甘墮落，而選擇轉向上帝，不顧一切地投入基督，借著他的靈得著安慰，這是加爾文理解悔改的第二個層面。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">奥古斯丁的「花園奇跡」</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷史上最經典的深切悔改例子就是奥古斯丁的「花園奇跡」。那天下午他倒在一棵無花果樹下，向上帝大聲哭喊：「還要多久？還要多久？明天嗎？又是明天？為何不是現在，為何不是此時此刻就結束我罪惡的過去？」就在這個時候，他聽到一個聲音說：「拿起來讀吧！拿起來讀吧！」他就回到屋裡，翻開使徒的書信，眼睛最先看到的就是《羅馬書》的這兩節：「不可荒宴醉酒，不可好色邪蕩，不可爭競嫉妒。總要披戴主耶穌基督，不要為肉體安排，去放縱私欲。」（13:13-14）當他讀到這話的時候，一道恬靜的光直射進他的內心，驅散了他裡面所有疑惑與掙紮的陰霾，帶給他生命根本性的轉折。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">信靠與意志的釋放：路德婚約的比喻</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬丁·路德從信靠的角度看意志的釋放：「信還將靈魂與基督聯合，猶如新娘與她的新郎聯合一樣。這樣的婚姻的結果，就是基督與人的靈魂成為一體，因此無論一切事物，是好是壞，他們都共同擁有。凡是基督所擁有的，同時也屬於那相信者的靈魂所擁有；反過來說，凡是人的靈魂所擁有的，同時也屬於基督所擁有。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文補充：這種自由與釋放給人帶來甘心情願的意願，「因從律法的軛下得釋放，就甘心樂意地順服神的旨意。既然一切仍在律法轄制下的人都生活在恐懼中，所以，除非神釋放他們，使他們自由，否則他們就不會樂意順服神」。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">心靈自由中的「立志」</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅說：「因為你們立志行事，都是上帝在你們心裡運行，為要成就他的美意。」（腓2:13）只有在心靈體貼的層面上，才可能毫無自欺地確認，這樣立志是「為要成就上帝的美意」，而不是名義上為了上帝，實質上則為了我們自己；如此立定的心願有聖靈在人裡面的感動。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">二、望與理智的轉變</h3>

              <h4 className="font-semibold text-gray-800 mb-2">「外體毀壞，內心一天新似一天」（林後4:16-18）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅第二次提到「裡面的人」是在《哥林多後書》：「所以，我們不喪膽。外體雖然毀壞，內心卻一天新似一天。我們這至暫至輕的苦楚，要為我們成就極重無比永遠的榮耀。原來我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「外體毀壞」除了是指我們身體上的衰微，更指我們外在的言行、過去行事的方式與原則，以及所追求的目標因遭遇挫折而衰微。從依靠自己（外面的人）轉到依靠聖靈（裡面的人）是何等困難，人只有在現實生活中碰壁，撞得頭破血流，才可能有所醒悟。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">在患難中生髮盼望</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                終末盼望與一般盼望有著多方面的不同。一般盼望是基於人的思想，根據過去的經歷提供給我們的人生目標；終末盼望不是現成就有的，而是被給予的，是人在經歷患難時才有可能生髮出來的：「因為知道患難生忍耐，忍耐生老練，老練生盼望，盼望不至於羞恥；因為所賜給我們的聖靈將上帝的愛澆灌在我們心裡。」（羅5:3-5）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕在面對失敗與患難，對外面的人完全失去盼望後，聖靈把那指向看不見的上帝國的終末盼望，放進他裡面，使他「羡慕一個更美的家鄉，就是在天上的」（來11:16）。這種盼望是對將來復活的盼望，是對現在看不見、將來卻要成就的那極重無比且永遠榮耀的盼望。正是這盼望，使我們從顧念所見的，轉向顧念那所不見的。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">裡面的人與良知：加爾文的定義</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們裡面的人生髮終末盼望，是基於耶穌基督的救贖。加爾文在《基督教要義》裡為良心下定義：「當人們對神的審判有意識，就如證人在他們面前做出見證，使得他們在法官的審判台前無法掩飾自己的罪，這意識被稱為『良心』。」在人還沒有蒙基督的救恩之前，良心只有消極的功用；當我們在基督寶血的清洗中良心的虧欠被洗去了，「就當存著誠心和充足的信心來到上帝面前」（來10:22）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅告訴我們，真正讓我們心中所誇的是無虧的良心：「我們所誇的是自己的良心，見證我們憑著上帝的聖潔和誠實，在世為人不靠人的聰明，乃靠上帝的恩惠。」（林後1:12）無論別人的評論是誇獎還是批評，都不會成為心靈真正的安慰，唯有我們內裡蘇醒的良心所作的見證，才算是最重要。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">內在理性的生髮：巴斯卡的洞見</h4>
              <p className="text-gray-700 leading-relaxed">
                在生存論領域具重要地位的思想家巴斯卡（Blaise Pascal）曾寫過：「只有兩類人可以稱為理性的人：因為認識上帝而全心全意事奉上帝的人，和因為不認識上帝而全心全意尋求上帝的人。」安瑟倫（Anselm）的名言「信仰尋求理解」的意思是：當人借著由啟示而來的「信仰」傳統與上帝有所關聯時，啟示自身的邏各斯（Logos）理性光照我們的心靈（良知）與思想，我們理性的積極層面才被開啟。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">三、愛與情感的轉變</h3>

              <h4 className="font-semibold text-gray-800 mb-2">「使基督因你們的信，住在你們心裡」（弗3:14-19）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅第三次提到「裡面的人」是在《以弗所書》：「求他按著他豐盛的榮耀，借著他的靈，叫你們心裡的力量剛強起來。使基督因你們的信，住在你們心裡，叫你們的愛心有根有基，能以和眾聖徒一同明白基督的愛是何等長闊高深。」（3:14-19）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅關注的是裡面的人生髮的力量是否通過愛心表現出來，這愛心是有根有基的；裡面的人剛強的力量主要表現在愛的方面，這種愛心的源頭來自基督住在我們裡面，成為我們裡面的人的主。在保羅看來，所有恩賜若沒有愛在其中，都算不得什麼（林前13:1-3）。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">通過愛表達出來的力量</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者曾看過一出電影，講述兩姐妹的故事，姐姐被診斷出患了癌症。在知道自己將不久于人世之際，她對妹妹說，她這一生因為有愛，所以活得很幸福和滿足。妹妹安慰她說，是的，我們大家都那麼愛你。姐姐馬上糾正說，她不是說享受到家人的愛，而是她還有一些力量來愛家人，這讓她感到安慰與滿足。說到愛的時候，我們都習慣地想要得到或享受他人的愛，而不是付出愛。當然，付出愛是不容易的，尤其是那種不計回報的愛，這種愛是一種能力或力量，並不是我們天生就擁有的。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">活在眾聖徒共同體中</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅強調，我們裡面的人只有與眾聖徒連接，才可能有力量一同領悟基督的愛。如果將《以弗所書》3:14-19與2:22放在一起對看，會發現我們裡面的人其實是與眾聖徒一同在基督裡被建造，成為聖靈居住的所在。靠著同一位聖靈內住在我們的心靈裡，才有聖徒在靈裡的相通。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可以說，你能在多大程度上將自己的一生連接起來，就能在多大程度上認識到上帝對你的愛。但這並不限於我們個人，還同時看到上帝對別人的愛，這愛遍及不同家庭、族群、國家、文化、階層的人，特別是在我們不喜歡的人身上所顯明的愛——這是「愛的闊」。以約拿為例，當他迫不得已看到他所信的那位上帝，竟然在他不喜歡的族群中給予同樣的恩典時，他的內心就被大大開闊。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">心靈帶來情感的聖化：愛德華茲的洞見</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                按照愛德華茲（Jonathan Edwards）的意思：「我們所說的情感並非身體的感動，而是靈魂的感動……這種內在的感受或屬靈的感覺就是我們說的情感。」他給情感下定義：「情感就是人心中意向和意志較活躍而明顯的活動。」重生的心靈是正常或未被扭曲之情感的源頭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                愛德華茲因此得出結論：「一切真宗教的本質在於聖潔的愛，整個宗教都在於這種神聖的情感以及愛的氣質。」對保羅來說，愛是敬虔之氣質的核心，如果沒有愛，無論多麼深奧的知識與恩賜、多麼體面完整的信仰告白、多麼熱鬧的宗教儀式，都算不得什麼。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅對情感的教導：「愛人不可虛假，惡要厭惡，善要親近。愛弟兄，要彼此親熱；恭敬人，要彼此推讓。殷勤不可懶惰。要心裡火熱，常常服侍主。在指望中要喜樂。」（羅12:9-12）愛德華茲認為，「熱情積極參與信仰生活是內心受割禮的結果，是真正重生的結果……沒什麼事情比宗教更看重強烈的意向，也只有在宗教中，不冷不熱才顯得特別可憎」。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">信、望、愛的統一</h3>
              <p className="text-gray-700 leading-relaxed">
                保羅書信中三次談到裡面的人的經文，分別涉及我們裡面生命（心靈）成長最重要的三個因素：信（羅馬書）、望（哥林多後書）、愛（以弗所書）。這些都是我們裡面生命不可缺少的。正因為有這些隨著聖靈內住而來的生命特質，人最初被造時被賦予的那些自然本性、因亞當的墮落而被扭曲的自然本性，在以聖靈為核心的裡面的人中得到聖化，而成為可以表達本真人性的意志、理性（良知）與情感。靈修的目的就是要帶來生命在這些方面的改變，即在活出信、望、愛的德性中，讓我們在意志、理智及情感方面活出更健全的人格生命。
              </p>
            </div>

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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">表面悔改與深切悔改的區別</h4>
              <p className="text-gray-700 leading-relaxed">
                本章區分了「表面悔改」（為某些行為悔改，生活繼續如常）與「深切悔改」（為整個人、整個過去的人生悔改）。這個區分背後有一個重要的神學洞見：罪不只是具體的錯誤行為，更是人存在的基本取向——以自我為中心，把自己的成功、名譽、安全感放在上帝之上。因此，真正的悔改不只是改掉某些壞習慣，而是一次存在取向的根本轉變——從以自我為中心轉向以基督為中心。加爾文稱這為「生命的轉向」（conversio），它帶來一種新的感知能力：對罪有一種特別的嗅覺，「像是聞到某種死亡的氣息，讓人避之唯恐不及」。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">路德的婚約比喻與稱義教義</h4>
              <p className="text-gray-700 leading-relaxed">
                路德在《基督徒的自由》中用婚約比喻描述稱義：信心將靈魂與基督聯合，「凡是基督所擁有的，同時也屬於那相信者的靈魂所擁有；反過來說，凡是人的靈魂所擁有的，同時也屬於基督所擁有。」這是改教的核心洞見——稱義是藉著信心「穿上基督」，祂的公義成為我們的公義，我們的罪成為祂承擔的罪。但路德還強調，這不只是法律層面的身份轉換，更是位格生命層面的聯合：信徒真實地與基督一同死亡並復活（羅6），因此新生命開始的動力不來自律法的要求，而來自與基督婚約的愛。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">愛德華茲論宗教情感——情感為何是靈性真實的指標</h4>
              <p className="text-gray-700 leading-relaxed">
                愛德華茲（Jonathan Edwards）在《宗教情感》（Religious Affections）中提出一個深刻的洞見：宗教情感（不是情緒波動，而是更深層的傾向或意向）是辨別真假重生的核心指標。一個真正重生的人，其心靈會生髮出對上帝的真實渴慕、對罪的真實厭惡、對他人的真實關懷——這些都是情感層面的特質，而非只是知識或行為。他反對兩種極端：一種是「冷冰冰的正統」（有正確的教義，卻沒有屬靈的熱情）；另一種是「熱鬧的情緒主義」（有強烈的宗教情緒，卻缺乏果子）。真正的宗教情感需要以聖靈的工作為根基，以生命的改變為果子。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「裡面的人」與群體——個人主義靈修的誤區</h4>
              <p className="text-gray-700 leading-relaxed">
                「裡面的人」這個概念很容易被誤解為一種純粹個人主義的內省。但保羅在弗3:14-19特別強調，裡面的力量需要「與眾聖徒一同」才能更完全地領悟基督的愛。這是一個重要的修正：屬靈生命的深化不是一個人在內室的獨自旅程，而是在群體中的共同旅程。在群體中，我們會遇到難相處的人，學習真正的捨己；我們會看到上帝在別人生命中的工作，開闊我們對祂愛的理解；我們會在軟弱時得到支撐，在強壯時支撐他人。聖靈不只在個人心靈裡工作，也在聖徒的共同體中工作。
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
            {[
              '保羅在羅馬書7章描述的「裡面的人」與「肉體的律」之間的爭戰，你在自己的生命中認識到這種爭戰嗎？你最常在哪個方面感受到這種拉鋸？',
              '你有沒有過「深切的悔改」——不只是為某件事悔改，而是為整個自己的生命取向悔改？那次悔改帶來的改變是什麼？',
              '奥古斯丁的哭喊「為何不是現在，為何不是此時此刻」讓你有什麼共鳴？你有沒有過類似的時刻，在掙紮中哭求上帝介入？',
              '「因從律法的軛下得釋放，就甘心樂意地順服神的旨意」——你覺得你現在的信仰生活是更靠近「因恐懼而順服」，還是靠近「因愛而甘心」？是什麼讓你有這種感受？',
              '「外體雖然毀壞，內心卻一天新似一天」——你有沒有見過一個人在身體或外在環境衰弱的同時，裡面的生命卻越來越豐盛？那個人對你有什麼影響？',
              '愛德華茲說：「一切真宗教的本質在於聖潔的愛。」在你的信仰生活中，你對上帝的愛是冷是熱？是什麼讓它變得冷淡，又是什麼讓它被重新點燃？',
              '「你能在多大程度上將自己的一生連接起來，就能在多大程度上認識到上帝對你的愛」——當你回顧自己的人生，包括那些黑暗和艱難的時期，你能看到上帝的愛如何貫穿始終嗎？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 深切悔改的禱告與日記</h4>
              <p className="text-gray-700 mb-2">安排一個安靜的午後或晚上，進行深切悔改的靈修：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在安靜中默想：「我的老我最深的取向是什麼？我最根本的依靠是什麼？」</li>
                <li>用文字寫下你對自己的老我的認識——不只是具體的罪行，而是整個生命的偏差方向</li>
                <li>像奥古斯丁一樣，大聲或在心裡哭喊出你的掙紮，不要壓抑</li>
                <li>翻開羅馬書8章，讓上帝的話語照亮你的黑暗，記下哪節經文最觸動你</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想「婚約」的比喻</h4>
              <p className="text-gray-700 mb-2">本週用路德的婚約比喻來默想稱義的恩典：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>慢慢讀路德的文字：「基督所擁有的，都屬於你；你所擁有的，都屬於基督。」</li>
                <li>讓這個真理在心裡停留，問自己：我真的相信我的罪已經轉移到基督身上了嗎？</li>
                <li>問自己：基督的公義已經成為我的公義——這個事實讓我有什麼感受？解放？難以置信？感恩？</li>
                <li>用一段禱告，把你的感受告訴基督</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💡 終末盼望的操練：記錄上帝的恩典</h4>
              <p className="text-gray-700 mb-2">本週開始「恩典日記」，以終末盼望的視角回顧生命：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每天晚上寫下1-2件當天看到上帝恩典的事，無論多麼微小</li>
                <li>每週一次，回顧過去的某段艱難時期，問：「在那段時間，上帝如何在背後工作？」</li>
                <li>把你一生中最大的幾個「轉折點」列出來，看看其中是否有上帝愛的痕跡</li>
                <li>把這份清單帶入禱告，讓良心見證：「神的恩典確實在我一生中貫穿。」</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">❤️ 在群體中練習「廣闊的愛」</h4>
              <p className="text-gray-700 mb-2">本週嘗試在群體中操練愛的擴展：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選擇一個你不容易喜歡的人，刻意為他/她禱告，求上帝讓你看見祂對那人的愛</li>
                <li>在教會或小組中，主動問一個你不熟悉的弟兄姊妹：「這週你最感恩的事是什麼？」</li>
                <li>記錄下這些互動，看看你對基督之愛的「長闊高深」有沒有新的體會</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，我承認我的老我根深蒂固——我的意志仍渴望自主，我的理智仍習慣於自欺，我的情感仍按照自我的好惡而活。我渴望深切的悔改，不只是為某些事悔改，而是為整個以自我為中心的生命取向悔改。求你像光射入奥古斯丁的心靈一樣，也射入我裡面的黑暗。讓信帶來意志的自由，讓望在患難中生髮，讓愛成為我生命真正的動力。讓我的裡面的人，在信、望、愛中一天新似一天。阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
