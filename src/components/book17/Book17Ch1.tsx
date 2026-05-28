import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">從神的角度看教會與恩賜</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 一1-9</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、收信人：哥林多教會（一1-3）</h4>
              <p className="text-gray-700 leading-relaxed">保羅在書信開頭就指出，哥林多教會是「神的教會」。這些信徒「已經成聖」，是「蒙召作聖徒的」。保羅提到「教會」時，心目中想到的是一群人——有人住在哥林多，也有人在各處求告主耶穌基督的名。在保羅眼中，教會具有兩個重要特點：第一，是基督徒與神和耶穌基督的關係——他們是屬神的人，是回應神呼召、稱耶穌基督為主的人；第二，這些人因耶穌基督的緣故是聖潔的人，被稱為聖徒。保羅看哥林多教會的時候，是從神的角度來看，而不是從人的角度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、為這教會的人感恩（一4-9）</h4>
              <p className="text-gray-700 leading-relaxed">面對這個充滿問題的教會，保羅竟然獻上感恩！他感恩是因為神在哥林多人身上的工作——他們在恩賜上沒有一樣不及人的。「口才和知識」這兩種恩賜是哥林多信徒文化中的重要產物，但保羅從他們的恩賜看見神的恩典，因此感謝神。哥林多教會的問題，不是因為沒有經歷神的恩典，而是不曉得如何正當地運用神所賜下的屬靈財富。</p>
              <p className="text-gray-700 leading-relaxed mt-2">保羅從末世的角度看恩賜：哥林多信徒要在等候主耶穌基督顯現的時候，在恩賜上沒有一項缺乏。但歷史真正的高峰尚未來臨，主耶穌「要堅固你們到底，叫你們在主耶穌基督的日子無可責備」。恩賜雖好，卻不是信徒的終極目的；在主再來的日子聖潔無瑕，才是信徒得救恩的真正高峰。第9節「一同得分」（koinōnia）——與基督聯合，意謂著與主一起死、一起復活、一起受苦、一起得榮耀。神是信實的，必然成就祂呼召我們的目的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">結語</h4>
              <p className="text-gray-700 leading-relaxed">保羅心目中的哥林多教會是特別的一群人——他們是屬神的人，是蒙神賜福的人，更是有盼望的人。他想到這些人，就可以獻上感恩，同時也間接提醒他們：要把視線集中在神的身上，記得自己的富有是神在耶穌基督裡所賜的恩典，要善用這些恩典，在世過聖潔的生活，等候主再來。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">一、教會的現象</h4>
              <p className="text-gray-700 leading-relaxed">試想一間教會：領袖相當不少，好幾位擁有博士學位，也有知名的富翁；信徒雖大部分是勞動階級，卻都能言善道。但這教會卻在路線上有分歧：有人主張鼓勵追求方言，有人主張深化真道舉辦神學講座，也有人推動宣教。因著路線不同，教會分成三個派系彼此對立；在倫理立場上走兩個極端，有人主張傳道人要獨身，也有人主張任何理由都可以離婚。主日崇拜時，若有人覺得有聖靈感動，就可以要求講員下台讓他上去傳講。而這教會最精彩之處，是她至少有兩次成為當地報章頭版新聞：一次是年輕人在父親死後立刻與年輕繼母結婚，長執們還去祝賀；另一次是兩位有錢的長執合夥做生意因利潤分配爭論而對簿公堂。</p>
              <p className="text-gray-700 leading-relaxed mt-2">熟識聖經的讀者一眼便知，這就是哥林多教會的現代版。我們可能以為這是亂七八糟、一無可取的教會，但保羅的看法卻完全不同——他看見這是一間人才濟濟、恩賜全備的富足教會，因此獻上感恩。筆者個人覺得哥林多教會的現象，是呈現出一種「暴發戶心態」——致富者不曉得如何處理短期內暴增的財富；同樣，基督徒也往往不懂如何應用神給我們的屬靈財富，特別是自由、知識和恩賜。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">二、屬靈的財富</h4>
              <p className="text-gray-700 leading-relaxed">面對這種亂象的教會，我們會感恩嗎？保羅確實是這樣做的。問題的焦點在於：教會是什麼？保羅是從神的眼光來對焦，不像我們一般從人的角度，所以產生了截然不同的態度。</p>
              <p className="text-gray-700 leading-relaxed mt-2">保羅把哥林多信徒的恩賜視為他們分享了耶穌基督國度中的豐盛。將保羅在1-9節所說的話串聯起來：一個人成為基督徒，是由於神的呼召；接受福音後，神照著祂的應許賜下聖靈，也賜下恩賜，使基督徒清楚知道所信的福音是真的。但神呼召世人的目的，是要他們分享耶穌基督所成就的一切，祂不要我們以得到恩賜為滿足，而是要定睛在主再來時所帶來的完滿救贖，倚靠祂的恩典達到無可責備的境界。恩賜是上帝救恩的印證，恩賜雖好，卻不是信徒追求的終極目的。</p>
              <p className="text-gray-700 leading-relaxed mt-2">在教會歷史上，常看見一些原本社會地位低微的人信主後，蒙神恩典社會地位提升，卻停留在這種更高的地位上，失去了救恩的活力和見證，在教會中依靠學識自高自大。有靈恩經驗的信徒也有類似表現，覺得教會中其他人（包括牧者）都不及他「屬靈」，為教會帶來的不是祝福而是問題。神所賜的恩典，無論是恩賜、學識或物質，都不是要讓我們孤芳自賞，而是要加以運用，成為他人的祝福，並落實在自身，過敬虔的生活。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">三、處理之道</h4>
              <p className="text-gray-700 leading-relaxed">面對充滿亂象的教會，一般人的反應是永遠不去了，或背地裡批評指責。但保羅的反應卻截然不同——他先為他們獻上感恩！只要我們定睛在那施恩救贖世人的神和耶穌基督身上，即使在不完滿的信徒身上，我們還是可以為神的信實感恩。一般人往往看見信徒的不完滿；保羅看見的，卻是在這群不完全的信徒身上做塑造工作的神。</p>
              <p className="text-gray-700 leading-relaxed mt-2">也許有人會問：保羅為這種教會感恩，難道他贊同他們的所作所為嗎？當然不是。保羅深知哥林多信徒的問題在於過分重視現今所擁有的恩賜，因此期望他們可以視神為生命的終極關懷。對保羅而言，他完全是從救恩的角度看哥林多教會，他的盼望不在於哥林多的信徒，而是在於神和主耶穌基督。</p>
              <p className="text-gray-700 leading-relaxed mt-2">筆者看到一些福音派的弟兄與被外界認定為社會行動派的弟兄見面，由於大學時代是團契同工，彼此對話在尊重和信任的氣氛下進行；同樣，另一次福音派的人與靈恩派的人對話，也因為彼此是大學時代的好友，整個對話進行得非常順利。也許，在決定對策之前，我們需要的是更深入的了解和彼此的信任。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="text-sm font-semibold text-teal-800 mb-1">默想</p>
              <p className="text-gray-700 leading-relaxed">保羅處理教會的問題，不是僅僅從世間的社會現象著手，而是從教會的本質開始。在教會中，他看見的不僅是一群人，更是看到這些人之所以聚在一起是出於神。因此，他雖然看到人的不完全，卻能夠為著神在他們中間的作為而感恩，更鼓勵他們在神的恩典中繼續成長。這是值得我們學習的！</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">哥林多城市的歷史與社會背景</h4>
              <p className="text-gray-700 leading-relaxed">哥林多在公元前146年被羅馬摧毀，後於公元前44年由凱撒重建為羅馬殖民地。作為連接愛琴海與亞德里亞海的貿易要衝，城市急速繁榮，人口約6-8萬，商人、水手、釋奴、退伍軍人混居其中。古語有「哥林多化」（korinthiazesthai），指放蕩淫亂的生活，可見城市道德聲譽之差。在這種社會流動性極高的環境下成立的教會，成員來自各種社會階層，也就難怪會出現保羅所描述的種種問題。理解這背景，有助我們看清楚為何「屬靈財富的誤用」是如此普遍的危機。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">Charismata（恩賜）的神學史</h4>
              <p className="text-gray-700 leading-relaxed">保羅所用的 charismata 來自 charis（恩典），強調恩賜的本質是神白白賜予，而非人的努力或功勞。二十世紀五旬節運動興起後，「恩賜」往往被視為屬靈成熟的指標，尤其是方言恩賜。這與保羅的神學有根本差異：保羅在哥林多前書的論述中，從未將恩賜的多寡與屬靈成熟度劃等號；恩賜的目的在於造就教會，而非標誌個人的屬靈地位。戈登·費（Gordon Fee）在其哥林多前書注釋中指出，哥林多信徒的問題恰恰是「把恩賜功能化」，使之成為社會地位的符號，而非服事群體的工具。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">Ekklesia（教會）的政治語源</h4>
              <p className="text-gray-700 leading-relaxed">希臘文 ekklesia 原指雅典的公民大會，是「被召集出來」的公民群體，有實際的政治決策功能。保羅借用這詞稱呼基督徒的聚會，具有深刻的神學意涵：教會不是宗教俱樂部，而是被神主動呼召聚集的公民群體，其「公民身分」來自於基督。這個背景也解釋了為何保羅特別強調教會的「蒙召」性質——身分認同不來自成員的成就或道德，而來自神的呼召。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">末世論視角與教會自我理解</h4>
              <p className="text-gray-700 leading-relaxed">保羅在1-9節使用「主的顯現」、「主的日子」等末世語言，反映早期教會獨特的「已然／未然」（already/not yet）末世觀：救恩已在基督裡成就，但完全的實現尚在等待。這種末世張力對教會自我理解至關重要——教會既是「先嘗」神國豐盛的群體（因此有恩賜），又是「仍在等候」的群體（因此需要謙卑）。當代教會學家 Miroslav Volf 在《在分歧中合一》（After Our Likeness）中指出，教會的本質應從末世的角度理解：教會是神國的提前預演，而非自我完足的機構。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你通常從什麼角度看待你所屬的教會——是從人的角度（看問題和不足），還是從神的角度（看恩典和工作）？這兩種視角如何影響你對教會的實際態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅面對充滿問題的哥林多教會，第一反應是「感謝神」。你在面對教會問題時，第一反應通常是什麼？是批評、退出、還是禱告感恩？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">作者說哥林多教會問題是「暴發戶心態」——不知如何處理突然增加的屬靈財富。你有沒有經歷過類似的情況：得到屬靈恩賜或成長後，反而帶來驕傲或問題？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">神賜給你哪些恩賜或屬靈資源？你是否曾把這些恩賜視為自己努力的成果，而非神的恩典？這種心態如何影響你與他人的關係？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說「恩賜是神救恩的印證」而非信仰的終點。你有沒有發現自己或周圍的人，把擁有恩賜當作屬靈成熟的標誌？這種錯誤如何在教會中造成問題？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">作者說保羅能感恩是因為他是哥林多人「屬靈的父親」，而不是旁觀者。這個觀點如何改變你對「批評教會」與「關心教會」的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">「在主再來的日子無可責備」——這個末世的盼望如何改變你對今日生活方式的具體選擇？在哪些方面你需要更多地活在這個盼望中？</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 換個角度看你的教會</h4>
              <p className="text-gray-700 mb-2">這週選一件讓你對教會感到不滿的事，試著從「神在做什麼工作」的角度重新思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>問：「神在這位弟兄/姊妹身上做了什麼工作？」</li>
                <li>問：「神藉著這個不完美的情況，想教導我什麼？」</li>
                <li>把你的觀察寫下來，看看視角轉換後有何不同</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 恩賜盤點與感謝</h4>
              <p className="text-gray-700 mb-2">花15分鐘列出神賜給你的屬靈恩賜和資源：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>哪些恩賜你已在使用？哪些尚未充分發揮？</li>
                <li>這些恩賜如何可以更多造就他人，而非彰顯自己？</li>
                <li>為每項恩賜向神獻上感謝，並禱告求祂指引如何使用</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 為教會獻感謝禱告</h4>
              <p className="text-gray-700 mb-2">效法保羅，每天花五分鐘為你的教會感恩禱告，而不只是代禱：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>感謝神把你安置在這教會中</li>
                <li>感謝神在會友身上所做的工作（選一兩位具體的人）</li>
                <li>求神開你的眼，讓你看見祂的恩典，而非只看問題</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 末世視角練習</h4>
              <p className="text-gray-700 mb-2">在每個重大決定或衝突前問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「在主再來的日子，這件事重要嗎？」</li>
                <li>「我的反應能讓我在那日子『無可責備』地站在主面前嗎？」</li>
                <li>用這個永恆的視角來調整你的優先次序</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 leading-relaxed italic text-lg">「主啊，求祢開我的眼，讓我從祢的角度看我的教會。幫助我在不完美中看見祢的工作，在問題中看見祢的恩典。讓我的第一反應是感謝，而非批評。求祢讓我明白，我所有的恩賜、知識和一切都是祢白白的恩典，不是我的功勞。讓我學習如何正當地運用這些屬靈財富，造就他人，榮耀祢。求祢的靈堅固我和我的教會，直到主再來的日子，我們都能無可責備地站在祢面前。奉主耶穌基督的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
