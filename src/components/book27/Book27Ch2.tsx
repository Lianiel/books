import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Users } from 'lucide-react';

export default function Book27Ch2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第2課：是的，你是基督的新婦</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習／作業討論（30分鐘）</h2>
        </div>
        <p className="text-gray-700 mb-2">請在小組中分享你在上一課「生活實踐」中所做的事，以及你的收穫。</p>
        <p className="text-gray-700">請一起閱讀「複習」、「重點與應用」及「主要問題」的部分。</p>
      </section>

      {/* 複習 */}
      <section className="bg-white border border-emerald-200 p-6 rounded">
        <h2 className="text-xl font-bold text-emerald-700 mb-4">複習</h2>
        <p className="text-gray-700 mb-3">在第一課，我們確立了神對我們的終極目標：讓我們完全像基督的樣式。這個目標既是今生持續的過程，也是將來完全實現的盼望。我們看見，腓立比書一章6節保證神所開始的善工必然完成。</p>
        <p className="text-gray-700 mb-3">在第二課，我們要深入探討：神如何達成這個目標？答案不是給我們更多宗教責任，而是與我們建立一種最深刻、最親密的關係——婚姻的關係。這個比喻幫助我們理解，改變的希望從哪裡來，以及為什麼只有耶穌基督才能使我們真正改變。</p>
        <p className="text-gray-700">人類的核心問題有三個層面：（1）我們需要被救贖（稱義）；（2）我們的心需要被更新（成聖）；（3）我們的生命需要得力量（能力）。耶穌在這三個方面都是我們的答案。</p>
      </section>

      {/* 重點與應用 CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">重點提要：</p>
            <p className="text-gray-700">個人成長與改變的希望，來自於我與「那一位」——耶穌基督的關係上面。祂大有能力地動工，目的是為了改變我的心，讓我的心思意念與祂越來越相通。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用：</p>
            <p className="text-gray-700">我必須持續不斷地省察自己，何處是神正呼召我要以十字架為中心的眼光，來回應我生命中的炎熱。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用：</p>
            <p className="text-gray-700">我必須幫助他人認識到，在實際的日常生活中，銘記基督在他們裡面活著的重要性。</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center py-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
        <h2 className="text-2xl font-bold text-emerald-800 mb-4">主要問題</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">因為你已許配給基督成為祂的新婦，你每日所得到的好處是什麼？</p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <h2 className="text-xl font-bold text-cyan-700 mb-4">課程內容</h2>
        <div className="bg-white p-3 rounded border border-cyan-200 mb-4">
          <p className="font-bold text-cyan-700">DVD（35分鐘）</p>
        </div>
        <div className="bg-white p-4 rounded border border-cyan-200">
          <p className="font-bold text-cyan-700 mb-3">小組活動（30分鐘）</p>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium mb-2">1. 請一起查考歌羅西書一章15至23節，並回答：</p>
              <p className="ml-4 text-gray-600">a. 在這段經文中，基督是誰？祂做了什麼？（15-19節）</p>
              <p className="ml-4 text-gray-600 mt-1">b. 21至23節描述了我們「從前」的狀態和「如今」的狀態。這個改變是如何發生的？對你的日常生活有什麼含義？</p>
            </div>
            <div>
              <p className="font-medium mb-2">2. 神婚姻的比喻揭示了什麼？在婚姻關係中，你的伴侶是誰，以及這意味著你每天可以支取什麼資源？</p>
            </div>
            <div>
              <p className="font-medium mb-2">3. 在你的生活中，你是否有「支取基督資源」的習慣？如果沒有，是什麼阻礙了你？</p>
            </div>
          </div>
        </div>
      </section>

      {/* 作業 - 主要內容 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：新婦的身分與資源</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">一、人類的核心問題</h3>
            <p className="mb-3">在我們談論改變之前，我們首先需要誠實地面對：我們真正的問題是什麼？很多人認為他們的問題是環境不好、家庭功能失調、缺乏意志力，或是遇到了壞人。這些因素確實有影響，但聖經告訴我們，問題更深。</p>
            <p className="mb-3">人類面對三個根本問題。第一，我們需要被稱義——我們在神面前是罪人，需要被赦免和稱義。第二，我們的心是彎曲的——耶利米書十七章9節說「人心比萬物都詭詐，壞到極處」，我們的動機、慾望和信念都扭曲了，需要被更新。第三，我們缺乏能力——即使我們知道什麼是對的，我們常常做不到，我們需要超越自然的力量。</p>
            <p>耶穌基督回應了這三個需要。祂的死使我們在神面前被稱義（稱義）；祂的聖靈在我們心中更新我們（成聖）；祂的力量使我們能夠生活（能力）。所以，真正的改變不是從「我要更努力」開始，而是從「我需要基督」開始。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">二、婚姻的比喻：你是基督的新婦</h3>
            <p className="mb-3">聖經用婚姻來描述基督與教會（信徒）的關係，這是一個非常深刻的比喻。在婚姻裡，兩個人不再是孤立的個體，他們共享彼此的生命、資源和未來。同樣地，當你相信耶穌，你就「嫁給」了基督——你分享祂的義、祂的能力、祂的智慧，以及祂的榮耀。</p>
            <p className="mb-3">歌羅西書一章15至23節描繪了這位「丈夫」是誰：「他是那不能看見之神的像，是首生的，在一切被造的以先。因為萬有都是靠他造的……他也是教會全體之首，他是元始，是從死裡首先復生的，使他可以在凡事上居首位。」（15-18節）。這位宇宙的創造者和統治者，選擇成為你的丈夫！</p>
            <p className="mb-3">然後，21至23節說到我們「從前」的狀態：「你們從前與神隔絕，因著惡行，心裡與他為敵。」但「如今」：「他藉著基督的肉身受死，叫你們與自己和好，把你們引到自己面前，聖潔沒有瑕疵，無可責備。」</p>
            <p>這「如今」改變了一切！你不再是神的仇敵，你是祂所珍愛的新婦。這個身分不是你努力得來的，而是基督為你做了的——祂付了全部的代價，讓這段關係成為可能。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">三、新婦每日支取的資源</h3>
            <p className="mb-3">當你真正明白自己是基督的新婦時，你對每天的生活就有了全新的資源。一個剛結婚的女子，突然可以支取她丈夫的一切資源——不是因為她配得，而是因為她是他的妻子，他選擇了她，並且把一切都給了她。同樣，在基督裡的你，每天可以支取：</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>稱義：</strong>你不需要靠自己的表現換取神的接納，因為你已經在基督裡被完全接納。</li>
              <li>• <strong>智慧：</strong>雅各書一章5節：「你們中間若有缺少智慧的，應當求那厚賜與眾人……的神。」這個智慧不是靠我們自己想出來的，而是從神那裡領受的。</li>
              <li>• <strong>力量：</strong>腓立比書四章13節：「我靠著那加給我力量的，凡事都能做。」這力量不是靠我們的意志力，而是靠內住的基督。</li>
              <li>• <strong>安慰：</strong>哥林多後書一章4節：神「安慰我們在一切患難中，叫我們能用神所賜的安慰去安慰那遭各樣患難的人。」</li>
            </ul>
            <p className="mt-3">每天，在你面對誘惑、困難、失敗時，這些資源都在等著你支取。問題不是神是否提供這些，而是你是否知道去支取，以及是否真的信靠祂。</p>
          </div>

          <div>
            <h3 className="font-bold text-green-800 text-lg mb-3">四、反思問題</h3>
            <div className="space-y-3 ml-2">
              <p className="text-gray-800">❓ 1. 在你的日常生活中，你更傾向於靠自己解決問題，還是向基督支取資源？是什麼使你傾向那個方向？</p>
              <p className="text-gray-800">❓ 2. 「你是基督的新婦」這個身分，對你的自我認識有什麼影響？你是否真正把自己當作被神完全接納的人？</p>
              <p className="text-gray-800">❓ 3. 在你目前面對的挑戰中，你最需要支取基督的哪一種資源（稱義、智慧、力量、安慰）？具體說說你打算如何支取它。</p>
              <p className="text-gray-800">❓ 4. 歌羅西書一章23節說要持守信心，「不移動，不搖撼，常在所聽見福音的盼望上堅固」。在你的生活中，是什麼事情最容易讓你「移動和搖撼」？</p>
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
            '人類面對三個核心問題：需要稱義、心需要更新、缺乏能力——耶穌基督在這三方面都是我們的答案。',
            '聖經用婚姻比喻基督與信徒的關係：你是基督的新婦，分享祂的義、智慧、力量和榮耀，這是白白賜予的恩典。',
            '歌羅西書一章21至23節揭示了「從前」（與神為敵）和「如今」（被帶到神面前）的根本改變，全是因著基督的工作。',
            '每天，基督的資源——稱義、智慧、力量、安慰——都在等待信徒去支取；問題不是資源是否存在，而是我們是否真正信靠。',
            '改變的根基是身分，不是努力：先認識「我是誰」（基督的新婦），才能知道「我能做什麼」（憑著祂的資源生活）。',
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
              <li>我的改變和成長不是靠我有多少意志力，而是靠我越來越深刻地認識和支取基督在我裡面的生命。</li>
              <li>基督是我的稱義：在神面前，我不需要靠自己的義，而是靠祂完全的義；這個事實改變了我對罪的回應。</li>
              <li>基督是我的力量：我不再被「靠自己改變」的壓力所壓垮，因為那改變我的力量來自於祂，不是來自於我。</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">個人應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>每天早晨，我要提醒自己：「我是基督的新婦，今天的一切挑戰，我可以憑著祂的資源來面對。」</li>
              <li>當我面對誘惑或失敗時，我要學習立刻轉向基督，不是靠意志力抵擋，而是支取祂的智慧和力量。</li>
              <li>我要讀歌羅西書一章，讓這幅關於基督的壯闊圖畫，深植在我的心中，成為每天行動的基礎。</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-indigo-700 mb-2">人際應用</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>當我幫助他人面對困難時，我要先問：「他們是否清楚認識自己在基督裡的身分和資源？」</li>
              <li>我要避免只給人「更努力、更自律」的建議，而是幫助他們看見基督是他們的力量來源。</li>
              <li>我要在我的關係中，成為一個幫助他人「支取基督資源」的人，而不是讓他們依賴我。</li>
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
            <p><strong>一、</strong>這週，每天早晨花5分鐘默想這個真理：「我是基督的新婦，祂把祂的一切資源給了我。」然後具體問自己：今天，我最需要支取祂的哪一種資源（稱義、智慧、力量、安慰）？並在禱告中向祂支取。</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>二、</strong>讀歌羅西書一章15至23節三遍。每讀一遍，注意不同的細節：第一遍注意基督是誰，第二遍注意祂做了什麼，第三遍注意你「如今」的新狀態。寫下你最受震動的一點。</p>
          </div>
          <div className="bg-white p-4 rounded border border-lime-200">
            <p><strong>三、</strong>「自我成長方案」：這週開始，選擇生命中一個你最想改變的具體領域（例如：憤怒、焦慮、自私）。在這個領域，誠實地問自己：我通常靠什麼來應對這個問題（意志力、逃避、靠他人）？基督提供了什麼資源，可以幫助我在這個領域真正改變？</p>
          </div>
        </div>
      </section>
    </div>
  );
}
