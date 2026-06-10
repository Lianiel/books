import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Target } from 'lucide-react';

export default function Book27Ch1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第1課：這是神要帶領你去的地方</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習／作業討論（30分鐘）</h2>
        </div>
        <p className="text-gray-700">這是課程的第一課，歡迎加入！請在小組中互相介紹，並分享：你加入這個課程最大的期待是什麼？請一起閱讀「複習」、「重點與應用」及「主要問題」的部分。</p>
      </section>

      {/* 複習 */}
      <section className="bg-white border border-emerald-200 p-6 rounded">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">複習</h2>
        <p className="text-gray-700 mb-3">這本書以一個非常具體的問題開始：神想要在你的生命中做什麼？更重要的問題是：祂正在做什麼？要回答這些問題，我們需要從「神的大圖畫」開始——從一個終極的、永恆的角度來看我們的生命。</p>
        <p className="text-gray-700 mb-3">整個課程圍繞著一個核心模式——<strong>炎熱、荊棘、十字架、果實</strong>——這個模式描述了神在我們生命中工作的方式。在第一課，我們首先確立：神改變我們的終極目標是什麼？</p>
        <p className="text-gray-700">記住，這個課程不是提供一些「讓生活更美好」的技巧，而是幫助你看見神在你生命中正在做的驚人事業——祂要使你像基督的樣式！</p>
      </section>

      {/* 重點與應用 CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">重點提要：</p>
            <p className="text-gray-700">神的終極目標是讓我們完全像基督的樣式。這個目標既是今生持續的過程，也是將來完全實現的盼望。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用：</p>
            <p className="text-gray-700">當我看見神要改變我像基督，我對自己人生目標和每日選擇的看法，將會如何改變？</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用：</p>
            <p className="text-gray-700">當我幫助他人時，我是否記得神對他們的最終目標？這個認識將如何改變我對待他們的方式？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">主要問題</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">是什麼樣的盼望與目標，決定你的人生方向？</p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <h2 className="text-xl font-bold text-cyan-700 mb-4">課程內容</h2>
        <div className="bg-white p-3 rounded border border-cyan-200 mb-4">
          <p className="font-bold text-cyan-700">DVD（40分鐘）</p>
        </div>
        <div className="bg-white p-4 rounded border border-cyan-200">
          <p className="font-bold text-cyan-700 mb-3">小組活動（20分鐘）</p>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium mb-2">1. 請一起查考啟示錄七章9至17節，並回答：</p>
              <p className="ml-4 text-gray-600">a. 這段經文描繪了什麼景象？這幅圖畫中哪些讓你嚮往？</p>
              <p className="ml-4 text-gray-600 mt-1">b. 「不再飢、不再渴」（16節）、「抹去他們一切的眼淚」（17節）代表什麼意義？神的終極目標是什麼？</p>
            </div>
            <div>
              <p className="font-medium mb-2">2. 請一起查考腓立比書一章3至11節，並回答：</p>
              <p className="ml-4 text-gray-600">a. 保羅在什麼環境中寫信？他對腓立比信徒有什麼信心？</p>
              <p className="ml-4 text-gray-600 mt-1">b. 一章6節：「那在你們心裡動了善工的，必成全這工。」這告訴我們改變的動力和保證從何而來？</p>
            </div>
          </div>
        </div>
      </section>

      {/* 作業 - 主要內容 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：神的大圖畫</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">一、終極目標：榮耀的完全</h3>
            <p className="mb-3">每個人的生命都有一個方向。你每天所做的選擇、每一段關係的建立，都受到某個「終極目標」的驅動。有些人活著是為了成功、財富、被認可，或讓家人過得更好。這些目標本身並不壞，但問題是：它們能夠支撐你整個人生嗎？能讓你在面對失去、痛苦和死亡時仍然站立得住嗎？</p>
            <p className="mb-3">聖經告訴我們，神對我們的生命有一個宏大的計畫。保羅在羅馬書八章29節說：「因為他預先所知道的人，就預先定下效法他兒子的模樣，使他兒子在許多弟兄中作長子。」神的目標，是要讓你成為像耶穌基督一樣的人！這不是小事，而是宇宙中最宏大的工程。</p>
            <p className="mb-3">啟示錄七章9至17節給了我們旅程終點的圖畫：「有許多的人，沒有人能數過來，是從各國、各族、各民、各方來的，站在寶座和羔羊面前，身穿白衣，手拿棕樹枝，大聲喊著說：願救恩歸與坐在寶座上我們的神，也歸與羔羊！」（9-10節）。神的目標是帶我們到完全榮耀、永與神同在的境界。</p>
            <p>這個終極目標改變了我們對今生的看法。今生的每一個挑戰、每一次失敗、每一段艱難，都不是目的地，而是旅途的一部分——神正在用這些事情，將我們塑造成「那最後的樣式」。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">二、改變的保證：腓立比書一章3至11節</h3>
            <p className="mb-3">保羅寫這封信時身在羅馬監獄，面對可能的死刑。然而，在信的開頭，他不是在抱怨自己的處境，而是在感謝神，並且充滿了對腓立比信徒未來的盼望和信心。這是為什麼？因為保羅看見的，不只是眼前的炎熱，他看見了神正在做的事。</p>
            <p className="mb-3">一章6節是整段的核心：「我深信那在你們心裡動了善工的，必成全這工，直到耶穌基督的日子。」這節經文說明了幾個重要的真理：（1）善工是神開始的，不是我們自己開始的；（2）神必然完成這工，不是也許，而是必然；（3）這工將在「耶穌基督的日子」完全實現——這是一個永恆的視野。</p>
            <p>一章9至11節記錄了保羅的禱告：他祈求信徒的愛「更加增長，在知識和各事上多有聰明，使你們能分別是非，作誠實無過的人，直到基督的日子，並靠著耶穌基督結滿了仁義的果子，叫榮耀稱讚歸與神。」這個禱告不是為了他們的舒適，而是為了他們成為基督樣式——這正是神的大圖畫。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">三、兩種購屋者的比喻</h3>
            <p className="mb-3">想像兩個家庭正在找房子。第一個家庭找到了他們非常喜愛的房子，位置絕佳，設計美觀。他們買了這棟房子，並把全部精力和金錢用在裝修上。然而，他們不知道這棟房子被規劃為都市更新地段，五年後將被拆除。他們所有的投資，最終化為烏有。</p>
            <p className="mb-3">第二個家庭找到了一棟「過渡屋」——簡陋，但有個特別條件：屋主承諾，住滿十年可免費得到一棟豪宅。這第二個家庭不會為過渡屋的缺陷感到沮喪，因為他們看見的是將來那棟豪宅的應許。</p>
            <p>這個比喻描述了兩種人生觀。以今生為終點的人，為今生的財富、地位傾盡全力，卻忘記這一切都會過去。以今生為旅程的人，不忽視今生的挑戰，但用永恆眼光詮釋一切。保羅在腓立比書中正是如此——即使身在監獄，他仍然充滿盼望，因為他知道自己在旅途中，目的地是榮耀的終點。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">四、反思問題</h3>
            <div className="space-y-3 ml-2">
              <p className="text-gray-800">❓ 1. 在你的日常生活中，有哪些具體的「目標」或「盼望」在驅動你的選擇和行動？這些目標是暫時的還是永恆的？</p>
              <p className="text-gray-800">❓ 2. 腓立比書一章9至11節，保羅的禱告重點是什麼？這個重點與你現在最重視的事情有何不同？</p>
              <p className="text-gray-800">❓ 3. 想一想生命中某個困難時期。回顧那段時間，你是否看見神曾藉著那段「炎熱」在改變你？請具體說明。</p>
              <p className="text-gray-800">❓ 4. 請用自己的話說明：為什麼外在行為的改變，若沒有內心動機的改變，是不夠的？</p>
            </div>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-sky-500" fill="currentColor" />
          <h2 className="text-xl font-bold text-sky-700">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '神對我們的終極目標是使我們完全像基督的樣式——這是宇宙中最宏大的改變工程，由神親自負責完成。',
            '腓立比書一章6節保證：神所開始的善工，必然完成——改變的動力和保證都在神身上，而非靠人的努力。',
            '啟示錄七章9至17節給我們看見旅程的終點：完全的救贖、榮耀的相聚、永遠的安慰——這是我們在苦難中仍有盼望的根基。',
            '真正的改變從心開始：必須有正確的終極目標；只追求今生舒適和成功，是以「過渡屋」當成「豪宅」的錯誤。',
            '即使在困難中，如保羅在獄中，以永恆眼光看待今生的炎熱，能給我們超越環境的平安與盼望。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="bg-sky-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700 text-sm">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 延伸的重點與應用CPR */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸的重點與應用CPR</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">重點提要</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>當我看見神的終極目標，並甘心樂意為此而活時，在每日的景況和人際關係中，會充滿盼望與正確的眼光。</li>
              <li>個人成長與改變的希望，來自於我與耶穌基督的關係；祂大有能力地動工，為了改變我的心，使我的心思意念與祂越來越相通。</li>
              <li>我的炎熱處境（困難、挑戰、痛苦）不是偶然的；神常常藉著這些，讓我更清楚看見自己的心，並更深地靠賴祂。</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">個人應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>本週，我要對照腓立比書一章9至11節，誠實地問自己：我最渴望的改變，是在行為上還是在心裡？</li>
              <li>我要在禱告中感謝神，祂在我心裡所開始的工作必然完成，並求祂幫助我配合祂的工作。</li>
              <li>我要開始用「我在旅途中」的眼光看待目前的困難，問自己：神想要藉這件事讓我學習什麼？</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">人際應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>當我幫助或陪伴正在受苦的人時，我要記得：神的目標不是讓他們立刻「感覺好一點」，而是讓他們成長得更像基督。</li>
              <li>在對話中，我要多詢問：「你在這件事上看見神想要做什麼？」而不只是提供解決方案。</li>
              <li>我要學習用感謝和讚美鼓勵他人看見神在其生命中的善工，即使那善工現在看起來很痛苦。</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-5 h-5 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>一、</strong>在日記或手機裡，寫下你現在生命中最大的一個挑戰。然後在旁邊寫：「神可能要藉著這件事讓我更像基督的地方是……」試著填滿這個句子。</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>二、</strong>慢慢地讀啟示錄七章9至17節，默想這幅終點的圖畫。然後禱告，告訴神你對這個終點的感受——是渴望、懷疑，還是困惑？讓這段禱告成為你整個課程學習的開始。</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>三、</strong>找一個你信任的人，分享你今天在這課中最有共鳴的一點，以及你對這個課程的期待。如果可以，請這個人在課程期間為你禱告。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
