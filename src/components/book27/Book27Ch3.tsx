import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Users } from 'lucide-react';

export default function Book27Ch3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第3課：改變需要群體的生活</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習／作業討論（30分鐘）</h2>
        </div>
        <p className="text-gray-700 mb-2">請在小組中分享你在上一課「生活實踐」中，在「自我成長方案」領域，你發現自己通常靠什麼來應對問題？基督提供的資源有什麼不同？</p>
        <p className="text-gray-700">請一起閱讀「複習」、「重點與應用」及「主要問題」的部分。</p>
      </section>

      <section className="bg-white border border-emerald-200 p-6 rounded">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">複習</h2>
        <p className="text-gray-700 mb-3">在第一課，我們確立了神的終極目標：使我們像基督。在第二課，我們看見這個目標是在與基督的關係中實現的——我們是祂的新婦，可以支取祂的一切資源。</p>
        <p className="text-gray-700 mb-3">現在我們面對一個很多人忽略的問題：<strong>改變是在哪裡發生的？</strong>許多基督徒以為屬靈成長是一件私人的事——只要我每天讀經禱告，我就會改變。但聖經告訴我們，神設計的改變是在群體中發生的。</p>
        <p className="text-gray-700">神自己就是一個群體——父、子、聖靈三位一體的神，在永恆的愛與交通中存在。祂按自己的形象造了我們，也設計我們在群體中成長。</p>
      </section>

      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">重點提要：</p>
            <p className="text-gray-700">神改變個人生命的工作，是在神的子民所組成的群體裡發生的。孤立的屬靈生活，是片面和不完整的。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用：</p>
            <p className="text-gray-700">我需要讓其他信徒進入我生命中那些需要改變的領域，讓他們能夠看見、指正和鼓勵我。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用：</p>
            <p className="text-gray-700">我要主動成為他人屬靈成長的同伴，不只是表面的交往，而是真正進入他們的生命，彼此扶持成長。</p>
          </div>
        </div>
      </section>

      <section className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">主要問題</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">在你目前的生活中，有哪些人際關係，讓你經歷到真實的屬靈成長？缺少了這樣的關係，你的生命會有什麼不同？</p>
      </section>

      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <h2 className="text-xl font-bold text-cyan-700 mb-4">課程內容</h2>
        <div className="bg-white p-3 rounded border border-cyan-200 mb-4">
          <p className="font-bold text-cyan-700">DVD（35分鐘）</p>
        </div>
        <div className="bg-white p-4 rounded border border-cyan-200">
          <p className="font-bold text-cyan-700 mb-3">小組活動（30分鐘）</p>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium mb-2">1. 請一起查考以弗所書二章14至22節，並回答：</p>
              <p className="ml-4 text-gray-600">a. 這段經文如何描述教會的性質和目的？「基督是我們的和平」（14節）對群體生活有什麼含義？</p>
              <p className="ml-4 text-gray-600 mt-1">b. 19至22節用建築物的比喻描述教會。基督是「房角石」意味著什麼？我們每個人在這建築物中的角色是什麼？</p>
            </div>
            <div>
              <p className="font-medium mb-2">2. 提多書二章11至14節說：「因為神救眾人的恩典已經顯明出來，訓練我們除去不敬虔的心和世俗的情慾，在今世自守、公義、敬虔度日。」這個「訓練」是在什麼背景下發生的？</p>
            </div>
            <div>
              <p className="font-medium mb-2">3. 你在生命中是否有一個（或幾個）可以真正進入你生命的人？如果沒有，是什麼阻礙了這樣的關係的建立？</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：改變在群體中發生</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">一、神本身是群體：三位一體</h3>
            <p className="mb-3">改變需要群體，這不是偶然的設計，而是反映了神自己的本性。神是三位一體的——父、子、聖靈是三個位格，卻是一個神。這三個位格在永恆的愛、交通和相互尊重中存在。父愛子，子順服父，聖靈榮耀子——這種完美的群體關係，是神的存在方式。</p>
            <p className="mb-3">創世記一章26節說：「我們要照著我們的形像、按著我們的樣式造人。」「我們」這個複數，指向神三位一體的本性。人是按神的形像造的，所以人也是為關係而設計的——不只是與神的關係，也是彼此之間的關係。孤立不是神設計的生活方式，群體才是。</p>
            <p>當亞當獨處時，神說：「那人獨居不好。」（創世記二章18節）這句話不只是說人需要伴侶，而是說人的本性——按神的形像所造的本性——需要在群體關係中才能充分實現。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">二、以弗所書：群體是改變的場所</h3>
            <p className="mb-3">以弗所書二章14至22節告訴我們，基督的救贖工作不只是使我們與神和好，也使我們彼此和好。「因他使我們兩下合而為一，拆毀了中間隔斷的牆。」（14節）這「隔斷的牆」不只是猶太人和外邦人之間的隔閡，也代表所有因罪帶來的人際隔閡。</p>
            <p className="mb-3">以弗所書三章14至21節描述了保羅的禱告：他求父「照他豐盛的榮耀，藉著他的靈，叫你們心裡的力量剛強起來」。這個禱告的背景是教會——是在群體中一起成長的信徒。保羅希望他們「和眾聖徒一同明白基督的愛是何等長闊高深，並知道這愛是過於人所能測度的。」</p>
            <p>注意：是「和眾聖徒一同明白」！有些屬靈的功課，是只有在群體中才能學習的。當你看見一個兄弟姊妹如何在苦難中信靠神，你對神的信心會增長。當你被一個姊妹如實指出你的盲點，你才能看見自己看不見的問題。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">三、提多書：群體訓練我們</h3>
            <p className="mb-3">提多書二章11至14節說神的恩典「訓練我們」，使我們在今世活得敬虔公義。這個「訓練」在哪裡發生？在提多書的整個背景中，這個訓練是透過各種人際關係進行的：年長的婦女訓練年輕的婦女（2-5節），提多成為年輕人的榜樣（6-8節），老年男人指導年輕男人。</p>
            <p className="mb-3">這個模式揭示了一個重要真理：屬靈的改變需要「看見榜樣」的人。我們需要看見比我們更成熟的信徒，是如何活出信仰的。我們也需要讓比我們不成熟的人，能夠從我們身上看見他們可以成為的樣子。</p>
            <p>真實的群體不只是一起唱詩歌、聽道，而是彼此真正認識、彼此分享生命、彼此負責、彼此代禱。這種群體是改變發生的土壤。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">四、反思問題</h3>
            <div className="space-y-3 ml-2">
              <p className="text-gray-800">❓ 1. 在你目前的生活中，你是否有一個（或幾個）可以真正「進入你生命」的人？這種關係的深度是什麼樣的？</p>
              <p className="text-gray-800">❓ 2. 你是否曾因為害怕（被評判、被拒絕、失去隱私）而拒絕讓人進入你生命中真實的掙扎？這種隔絕對你的屬靈成長有什麼影響？</p>
              <p className="text-gray-800">❓ 3. 你參與的群體（教會、小組、家庭）是否能夠支持你「自我成長方案」中的改變？如果不能，為什麼？需要做什麼改變？</p>
              <p className="text-gray-800">❓ 4. 以弗所書三章16至19節是保羅對群體的禱告。請慢慢讀這段禱告，並思考：哪些是你只能在群體中、而無法獨自得到的屬靈益處？</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-sky-500" fill="currentColor" />
          <h2 className="text-xl font-bold text-sky-700">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '神自身是三位一體的群體（父、子、聖靈），人按神的形象被造，因此也為群體而設計——孤立是違背人本性的生活方式。',
            '以弗所書二章的和好不只是人與神的和好，也是人與人的和好；基督「拆毀了中間隔斷的牆」，使群體成為可能。',
            '以弗所書三章「和眾聖徒一同明白基督的愛」——有些屬靈功課只能在群體中學習，無法靠個人單獨獲得。',
            '提多書二章的群體訓練模式：通過看見榜樣、接受指導、彼此負責，使改變在實際生活中發生和持續。',
            '真實的群體不是表面交往，而是彼此認識、分享生命、互相負責代禱——這是屬靈改變發生的土壤。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="bg-sky-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700 text-sm">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸的重點與應用CPR</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">重點提要</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>神改變個人生命的工作，是在神的子民所組成的群體裡發生的；真正的改變需要真實的群體。</li>
              <li>孤立的屬靈生活會讓我們看不見自己的盲點，無法從他人的榜樣中得到激勵，也無法從他人的指正中成長。</li>
              <li>群體不是達到改變的「方法」，而是改變的「場所」——神設計在關係中塑造我們，就像祂自己在三位一體的關係中存在。</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">個人應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>這週，我要邀請至少一個我信任的人，讓他進入我在「自我成長方案」中正在掙扎的領域，請他為我禱告和監督。</li>
              <li>我要誠實地評估：我目前的群體（小組、教會、朋友圈）是否支持我的屬靈成長？如果不是，我需要做什麼調整？</li>
              <li>我要在這週刻意和小組的某個成員有一次深入的對話，分享我在這課中學到的東西和我的掙扎。</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">人際應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>我要尋求機會，主動進入一個弟兄/姊妹的生命，提供真實的陪伴和支持，而不只是表面的問候。</li>
              <li>我要學習如何在愛心中說真話，既不迴避問題，也不以刻薄的方式批評——這是群體最重要的技能之一。</li>
              <li>我要記得：我不是要成為別人的「解決者」，而是要成為他們生命旅程的同伴，一起轉向基督。</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-5 h-5 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>一、</strong>這週，找一個你信任的人（最好是同一個小組的成員），安排一次面對面或電話的對話。在這次對話中，分享你在「自我成長方案」中選擇的那個領域，以及你在其中的掙扎。請他為你禱告，並在下次見面時詢問你的進展。</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>二、</strong>閱讀以弗所書二章14至22節，並思考：你目前的群體生活是否反映了這段經文所描述的「和好與合一」？有哪些隔閡（種族、階層、性格衝突）存在於你的群體中？你可以做什麼來縮短這些距離？</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>三、</strong>「自我成長方案」延伸：在你選擇的那個領域，辨識出誰是你生命中比你更成熟的「提多書式導師」——一個可以帶領你成長的人。這週，與他/她聯絡，分享你的需要，並尋求他/她的指導和禱告。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
