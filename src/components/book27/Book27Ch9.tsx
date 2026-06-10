import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Award, Target, Users } from 'lucide-react';

export default function Book27Ch9() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第9課：全新的身分，全新的潛能——十架篇（上）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與作業討論</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>複習：</strong>過去四課，我們深入了解了「炎熱」（神的工具）和「荊棘」（我們的罪性反應，及其根源——心中的偶像）。今天我們到達改變模式的核心：「十字架」。十字架是整個模式的樞紐——它是從荊棘到果實唯一的通道。</p>
          <p><strong>作業討論：</strong>分享你上週的「偶像探測」練習——你辨識出了什麼偶像？這個發現對你有什麼衝擊？你的「重新定向的禱告」是什麼？</p>
        </div>
      </section>

      {/* CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">核心要點（Central Point）</p>
            <p>加拉太書2章20節是整個改變模式的神學心臟：「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己。」真實的屬靈改變不是「更努力地做好人」，而是每天活出「已經與基督同死同活」的現實。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>你的基督徒生活主要是靠「努力遵守規則」，還是靠「相信並活出在基督裡的身分」？這兩種方式有什麼實際的不同？</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>你在基督裡的新身分如何改變你在關係中的期待？如果你不再需要從關係中尋求「救贖」（安全、認可、價值感），你的關係會有什麼不同？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「在哪些具體的地方，你沒有讓十字架<br />引導與塑造你的處境和人際關係？」
        </p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">課程內容</h2>
        </div>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">一、加拉太書2章20節——十字架的三個維度</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-3">
              <p>「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己。」（加拉太書2章20節）</p>
            </div>
            <p className="mb-2">保羅·區普指出，這節經文包含十字架在我們生命中的三個維度：</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">維度一：救贖的事實（「已經與基督同釘十字架」）</p>
                <p className="text-sm text-gray-700">這是過去完成時——一個已經發生、已經完成的事實。當基督死在十字架上，我作為相信他的人，在神的眼中也與他同死了。我的舊人（被罪掌管的人）已經在十字架上被處決了。這不是一個目標，而是一個已成的事實。</p>
                <p className="text-sm text-gray-600 mt-1 italic">應用：改變的基礎不是我「必須做得更好」，而是我「在基督裡已經是一個不同的人」。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">維度二：現今的實際（「基督在我裡面活著」）</p>
                <p className="text-sm text-gray-700">這是現在進行時——一個正在發生的現實。活在我裡面的不再是舊的「我」，而是基督藉著聖靈住在我裡面。每一天，每一個選擇，我都有一個新的動力來源——不是我自己的意志力，而是住在我裡面的基督的生命。</p>
                <p className="text-sm text-gray-600 mt-1 italic">應用：在面對炎熱和荊棘的誘惑時，我可以禱告：「主，你在我裡面，請你在這一刻藉著我生活。」</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">維度三：每日的結果（「因信神的兒子而活」）</p>
                <p className="text-sm text-gray-700">這是我每天選擇的生活方式。「因信而活」意思是：每一天，在每一個具體的情境中，我選擇相信福音的真實，而不是靠眼見、靠感覺、靠自己的力量。這個信心的選擇是每天需要更新的。</p>
                <p className="text-sm text-gray-600 mt-1 italic">應用：信心的生活不是宏大的宣告，而是在日常的每一個炎熱和荊棘中，一次次選擇相信十字架的功效。</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、十字架為中心的生活——三種果實</h3>
            <p className="mb-2">當十字架真正成為生命的中心，會在我們的生活中產生三種具體的果實：</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-emerald-700 mb-2">果實一：從「表現」到「相信」的轉變</p>
                <p className="text-sm text-gray-700">「宗教」的生活是：「如果我做夠好，神就會愛我、祝福我。」以十字架為中心的生活是：「因為神已經在基督裡完全接納了我，我不需要靠表現來贏得他的愛，我可以自由地愛他和愛人。」這個轉變解放了我們從宗教的焦慮和荊棘反應中。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-emerald-700 mb-2">果實二：從「自我保護」到「捨己」的轉變</p>
                <p className="text-sm text-gray-700">當我們不再需要靠自己保護自己的形象、利益和偶像，我們才能真正地捨己。以弗所書4章32節說：「要以恩慈相待，存憐憫的心，互相饒恕，正如神在基督裡饒恕了你們一樣。」——我能夠饒恕，是因為我已經被饒恕了；我能夠給予，是因為我已經在基督裡擁有一切。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-emerald-700 mb-2">果實三：從「恐懼」到「盼望」的轉變</p>
                <p className="text-sm text-gray-700">炎熱最常引發的是恐懼——對失去的恐懼、對未來的恐懼、對失敗的恐懼。但以十字架為中心的人明白：「若神幫助我們，誰能敵擋我們呢？……誰能使我們與基督的愛隔絕呢？」（羅馬書8章31-35節）這種盼望不是盲目的樂觀，而是建立在復活事實上的確信。</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、「在基督裡的身分」——為什麼這很重要？</h3>
            <p className="mb-2">許多基督徒知道「我已被基督的血拯救」這個事實，但不知道這個事實在<strong>今天的生活</strong>中意味著什麼。保羅·區普指出，我們很多的荊棘反應，正是因為我們活得好像自己還沒有基督一樣：</p>
            <div className="bg-white p-4 rounded border border-cyan-200 space-y-2">
              <p className="text-sm"><strong>如果你真的相信「我已被神完全接納」</strong>，你就不需要拼命爭取別人的認可了。</p>
              <p className="text-sm"><strong>如果你真的相信「我的一切罪都已被赦免」</strong>，你就不需要用憤怒或自責來懲罰自己或別人了。</p>
              <p className="text-sm"><strong>如果你真的相信「基督是我的力量和能力」</strong>，你就不需要靠自己的努力和掌控來維持一切了。</p>
              <p className="text-sm"><strong>如果你真的相信「神的目標是讓我更像基督」</strong>，你就能夠以不同的眼光看待炎熱，把它視為神的成全，而非懲罰。</p>
            </div>
            <p className="mt-2">十字架帶給我們的不只是「罪的赦免」，更是「新的身分」和「新的能力」——這是改變的真正基礎。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、活出在基督裡身分的實踐</h3>
            <p className="mb-2">知道十字架的事實和<strong>活出</strong>十字架的事實之間，有一個巨大的差距。以下是縮短這個差距的實踐方式：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: '每日的「身分提醒」', desc: '每天早上提醒自己：「我是神所愛的孩子，已在基督裡被完全接納。今天不需要向任何人、任何成就、或任何情況證明自己的價值。」' },
                { title: '在衝突中的十字架禱告', desc: '當感到被激怒或受傷時，在回應之前先禱告：「主，你已經饒恕了我一切的罪。現在幫助我把你的饒恕帶給這個人。」' },
                { title: '以十字架解讀炎熱', desc: '當困難來臨時，練習問：「如果十字架是真實的，這個炎熱對我意味著什麼？神在其中有什麼目的？」' },
                { title: '群體的守望相助', desc: '找一位弟兄姐妹，定期分享：「在哪個領域，我活得好像沒有基督一樣？」彼此的提醒是活出新身分的重要幫助。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded border border-green-200">
                  <p className="font-bold text-green-700 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：加拉太書研讀與身分的應用</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">深度研讀加拉太書2章15節至21節</h3>
            <p className="text-gray-700 mb-2">這段經文是保羅神學最精華的部分之一，仔細閱讀並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>第16節說「人稱義不是因行律法，乃是因信耶穌基督」——這對你的「表現型」心態有什麼挑戰？</li>
              <li>第19節「我因律法，就向律法死了，叫我可以向神活著」——這話什麼意思？如何幫助你理解基督徒的自由？</li>
              <li>第20節「我已與基督同釘十字架」——把這句話應用到你目前最大的炎熱情境：如果「舊的你」已經死了，面對這個炎熱，「活在你裡面的基督」會如何回應？</li>
              <li>第21節說不要廢掉神的恩典——你在什麼方面最容易廢掉恩典（靠自己的努力，而不是信靠基督）？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">「沒有讓十字架引導」的自我審視</h3>
            <p className="text-gray-700 mb-2">誠實地回答本課的主要問題：在哪些具體的地方，你沒有讓十字架引導你的處境和人際關係？（舉出3個具體的例子）</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你在哪段關係中最難饒恕？十字架如何應用在這裡？</li>
              <li>你在哪個困難的情境中，最容易靠自己的力量而非信靠神？</li>
              <li>你有沒有什麼「慣性的罪」——你知道它是錯的，但你一直不帶到十字架前？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">在自我成長方案中加入「十字架」的應用</h3>
            <p className="text-gray-700 mb-2">針對你的炎熱和荊棘，現在思考「十字架在哪裡」這一欄：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>基督的什麼具體的工作（如赦免、接納、新生命、聖靈的力量），最能直接應對你在這個炎熱中的荊棘？</li>
              <li>你需要「相信」什麼福音真理，才能以不同的方式回應這個炎熱？</li>
              <li>寫出一個「十字架禱告」——具體地把你的荊棘和偶像帶到十字架面前</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold text-sky-800">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '加拉太書2章20節揭示十字架的三個維度：救贖的事實（已經同死）、現今的實際（基督在我裡面活著）、每日的結果（因信而活）',
            '真實的屬靈改變不是「更努力地做好人」，而是每天活出「已在基督裡」這個現實——這是根本性的轉變',
            '十字架為中心的生活結出三種果實：從「表現」到「相信」、從「自我保護」到「捨己」、從「恐懼」到「盼望」',
            '我們很多的荊棘反應，是因為我們活得好像沒有基督一樣——不相信或不應用我們在基督裡的身分',
            '十字架不只赦免我們的罪，更給我們新的身分和能力——這個身分是我們每天在具體情境中需要活出來的',
            '活出新身分需要練習：每日的身分提醒、在衝突中的十字架禱告、以十字架解讀炎熱、群體的守望相助',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-sky-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 延伸CPR */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸反思</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">「宗教」vs「福音」的生活</p>
            <p>提摩太·凱勒描述兩種生活方式：宗教生活說：「我要遵守規則，以贏得神的愛。」福音生活說：「我已被神愛，所以我渴望去愛他和愛人。」你目前的生活更像哪一種？你的疲憊、焦慮、或驕傲，哪些是來自「宗教」的心態？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">十字架的「每日新鮮」</p>
            <p>哀歌3章22-23節說：「我們不致消滅，是出於耶和華諸般的慈愛；是因他的憐憫不致斷絕。每早晨，這都是新的。」十字架的恩典不是我們一生只領受一次的，而是每天早晨需要重新支取的。今天早上，你是否重新確認了你在基督裡的身分？</p>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐方針</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'a. 每日身分宣告', desc: '每天早晨大聲說出（或默想）加拉太書2章20節，讓這個事實成為你一天的出發點' },
            { label: 'b. 十字架應用於炎熱', desc: '今天遇到炎熱時，暫停問：「如果基督在我裡面活著，面對這個炎熱，他會如何回應？」' },
            { label: 'c. 讀羅馬書8章31-39節', desc: '記住保羅的宣告：「誰能使我們與基督的愛隔絕？」讓這段話成為你面對炎熱的盾牌' },
            { label: 'd. 向人傳遞十字架的饒恕', desc: '選擇一個你最難饒恕的人，今天向神禱告，把基督給你的饒恕傳遞給那個人' },
            { label: 'e. 更新自我成長方案', desc: '在你的自我成長方案中，完整填寫「十字架在哪裡」這一欄，要具體而不是泛泛而言' },
            { label: 'f. 分享你的新身分', desc: '本週找機會告訴一位非信徒，你的身分是建立在基督裡，而不是在成就、外貌、或他人的評價上' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded border border-lime-200">
              <p className="font-bold text-lime-700 mb-1">{item.label}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
