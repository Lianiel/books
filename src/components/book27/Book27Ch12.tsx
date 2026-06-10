import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Sun, Target, Users } from 'lucide-react';

export default function Book27Ch12() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第12課：令人耳目一新的善果——果實篇（下）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">整體回顧與課程總結</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>課程回顧：</strong>這是最後一課。我們走完了整個旅程：</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {[
              { label: '炎熱', desc: '神的工具（第4-6課）' },
              { label: '荊棘', desc: '罪的根源（第7-8課）' },
              { label: '十字架', desc: '改變的樞紐（第9-10課）' },
              { label: '果實', desc: '成長的結果（第11-12課）' },
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 p-3 rounded border border-emerald-300 text-center">
                <p className="font-bold text-emerald-700">{item.label}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-2"><strong>作業討論：</strong>分享你在腓立比書研習中最有共鳴的一個段落，以及你在整個課程中看見自己生命中的哪些「果實跡象」。</p>
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
            <p>詩篇4篇（大衛在危機中的禱告）和以賽亞書55章（神白白的邀請）告訴我們：生命中真正令人耳目一新的善果，往往不是來自環境的改善，而是來自一顆學會了在艱難中仍然信靠神的心。這樣的心能夠在炎熱中數算恩典，在荊棘中謙卑悔改，在十字架前重新得力，最終在意想不到的地方結出豐盛的果實。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>在這個課程結束時，你最大的收穫是什麼？你在自己的生命中看到了什麼樣的改變？你最渴望繼續在哪個方面成長？</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>這個課程如何改變了你的一段重要關係？你在關係中的改變，對對方有什麼具體的影響？你希望繼續如何成長？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Sun className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「在何處神呼召你去實現<br />你身為神兒女的潛力，<br />並且讓你的生命結出豐盛的善果？」
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
            <h3 className="font-bold text-cyan-700 mb-2">一、詩篇4篇——大衛在洞穴中的故事</h3>
            <p className="mb-2">詩篇4篇（與詩篇3篇一起）被認為是大衛在兒子押沙龍叛變、被迫逃離耶路撒冷時所寫的。這是他生命中最大的炎熱之一——不是外敵的攻擊，而是親生兒子的背叛。然而，在這個極度炎熱中，大衛展現了三個重要的回應：</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">第一個回應：向神呼求，而非向人尋求解決</p>
                <div className="italic text-sm mb-2">
                  <p>「我的神，我的義啊，我呼籲的時候，求你應允我！我在急難中，你曾使我寬廣；現在求你憐恤我，聽我的禱告。」（詩篇4章1節）</p>
                </div>
                <p className="text-sm text-gray-700">大衛第一個轉向是向神，不是向人（政治盟友、軍事力量）。在你的炎熱中，你的第一個轉向是哪裡？</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">第二個回應：在憤怒中仍然安靜省察</p>
                <div className="italic text-sm mb-2">
                  <p>「你們動怒卻不要犯罪；在床上的時候，要心裡思想，並要肅靜。」（詩篇4章4節）</p>
                </div>
                <p className="text-sm text-gray-700">大衛承認憤怒的存在（押沙龍的背叛值得憤怒），但他選擇「肅靜」——讓憤怒在神面前沉澱，而不是立即用憤怒的行動回應。這是「荊棘」和「果實」之間的那個關鍵選擇。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-1">第三個回應：在最黑暗的夜晚擁有平安</p>
                <div className="italic text-sm mb-2">
                  <p>「我必安然躺下睡覺，因為獨有你耶和華使我安然居住。」（詩篇4章8節）</p>
                </div>
                <p className="text-sm text-gray-700">在兒子叛變、自己逃難的夜晚，大衛說「我必安然躺下睡覺」——這是什麼樣的平安？是建立在環境安全上的嗎？不，是建立在「獨有你耶和華」上的。這就是果實在最黑暗炎熱中的最終表現。</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、以賽亞書58章——真正的禁食和善果</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「我所揀選的禁食不是這樣嗎？是要解開兇惡的繩，使被欺壓的得自由，折斷一切的軛嗎？不是要把你的餅分給飢餓的人，將飄流的窮人接到你家中；見赤身的，給他衣服，不離棄自己的骨肉嗎？這樣，你的光就必發現如早晨，你所得的醫治必速速來到。」（以賽亞書58章6-8節）</p>
            </div>
            <p className="mb-2">以賽亞書58章批評了一種「宗教型」的敬虔——人們行禁食、宗教行為，但心中充滿自私和對人的不公正。神說：真正的敬虔（真正的果實）表現在：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>解放被壓迫的：</strong>真正的信仰推動我們關心社會上的弱勢群體</li>
              <li><strong>分享我們的資源：</strong>把餅分給飢餓的人——不只是屬靈的給予，也是物質的給予</li>
              <li><strong>接待無家可歸的：</strong>以具體的行動服事身邊的需要</li>
              <li><strong>不離棄自己的骨肉：</strong>在最親密的關係中（家人），活出敬虔的果實</li>
            </ul>
            <p className="mt-2">保羅·區普提醒我們：以十字架為中心的生活，最終一定會表現在對社會和對他人的關愛上。改變不是私人的屬靈成就，而是使我們成為神在世界中恩典的管道。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、以賽亞書55章1-2節——神白白的邀請</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「你們一切乾渴的都當就近水來；沒有銀錢的也可以來，你們都來，買了吃！不用銀錢，不用價值，也來買酒和奶。你們為何花錢買那不足為食物的，用勞碌得來的買那不使人飽足的呢？你們要留心聽我的話，就能吃那美物，得享肥甘，心中喜樂。」（以賽亞書55章1-2節）</p>
            </div>
            <p className="mb-2">這段話是整個課程最美的總結：神的邀請是白白的、開放的、不需要資格的。所有「乾渴的」都可以來——無論你的炎熱有多大，無論你的荊棘有多深，無論你的罪有多重。</p>
            <p>「你們為何花錢買那不足為食物的？」——這是一個尖銳的問題：我們花費多少時間和精力，試圖從這個世界（偶像）得到滿足，結果卻仍然空虛？神的邀請是：放下你的偶像，來到我這裡，「就能吃那美物，得享肥甘，心中喜樂。」這就是果實的最終源頭——神自己。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、何西阿書14章5-7節——復興後的善果圖景</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「我必向以色列如甘露；他必如百合花開放，如利巴嫩的樹木扎根。他的枝條必延伸，他的榮華如橄欖樹；他的香氣如利巴嫩的香柏木。住在他蔭下的必歸回，發旺如五穀，開花如葡萄樹；他的香氣如利巴嫩的酒。」（何西阿書14章5-7節）</p>
            </div>
            <p className="mb-2">這段話是何西阿書的結尾，在以色列人悔改歸回神之後（第4節），神所應許的復興圖景。注意幾個生動的圖像：</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { image: '百合花開放', meaning: '美麗、純潔的生命見證，在炎熱的曠野中開花' },
                { image: '橄欖樹的榮華', meaning: '豐盛的生命力，果實纍纍，供應他人的需要' },
                { image: '利巴嫩的香氣', meaning: '屬靈生命的芬芳，影響周圍的人，吸引他們歸向神' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded border border-emerald-200 text-center">
                  <p className="font-bold text-emerald-700 mb-1">「{item.image}」</p>
                  <p className="text-sm text-gray-700">{item.meaning}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">這幅圖景是神給我們的盼望：當我們從炎熱→荊棘→十字架→果實這條道路走過，我們的生命不只是「自己不再那麼痛苦」，而是成為「香氣」，使「住在他蔭下的必歸回」——我們的生命改變成為別人蒙恩的管道。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">五、課程的永恆委託——繼續走這條路</h3>
            <p className="mb-2">腓立比書1章6節是整個課程最有力的保證：「我深信那在你們心裡動了善工的，必成全這工，直到耶穌基督的日子。」</p>
            <div className="bg-white p-4 rounded border border-cyan-200 space-y-2">
              <p><strong>「那在你們心裡動了善工的」：</strong>神已經開始了在你生命中的工作。這個課程不是起點，而是你學習辨識神一直在做的工作的一個幫助。</p>
              <p><strong>「必成全這工」：</strong>神不是用一半力量在做這件事——他的應許是「必成全」。無論你目前的成長有多緩慢，無論你的荊棘有多頑強，神的工作不會中途放棄。</p>
              <p><strong>「直到耶穌基督的日子」：</strong>成全的時間表是永恆的——在今生，我們持續成長；在基督再來的日子，這個工作將完全成就。我們朝著這個終點前行，不是靠自己的力量，而是靠那「在我們裡面動了善工的」神。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 作業：課程結束的反思 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">課程結束：反思與展望</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">完整的課程反思</h3>
            <p className="text-gray-700 mb-2">回顧這整個課程（12課），誠實地回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>在這個課程中，你對自己有什麼最重要的發現（關於你的炎熱、荊棘、偶像、身分）？</li>
              <li>你的哪一個想法或對神的理解被最深刻地改變了？</li>
              <li>你在哪段具體的關係或情境中，看到了真實的改變跡象？</li>
              <li>你最感謝神在這個課程中做的哪一件事？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">研讀詩篇4篇與以賽亞書55章</h3>
            <p className="text-gray-700 mb-2">這週慢讀這兩段經文，並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>詩篇4章8節「安然躺下睡覺」的平安，在你生命中哪些時刻最難得到？什麼幫助你在那些時刻回到神？</li>
              <li>以賽亞書55章1-2節問：「你們為何花錢買那不足為食物的？」你今天仍在哪些方面試圖從「不足為食物的」那裡得到滿足？</li>
              <li>神的邀請是白白的——你在接受這個邀請時，有什麼是讓你難以「白白」接受的（如感覺自己不夠資格）？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">制訂「繼續成長的計畫」</h3>
            <p className="text-gray-700 mb-2">課程結束不是改變旅程的終點。制訂你繼續成長的具體計畫：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你要繼續使用「自我成長方案」嗎？多久一次？針對哪個炎熱？</li>
              <li>你需要持續在哪個屬靈紀律上（如禱告、讀經、群體）投資，以便繼續結果實？</li>
              <li>你要找誰繼續同行，彼此問責和鼓勵（即使課程結束了）？</li>
              <li>你要如何把從這課程學到的，傳遞給你身邊的人？（如分享書、帶領小組、在關係中活出）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold text-sky-800">重點總結（整個課程）</h2>
        </div>
        <div className="space-y-3">
          {[
            '詩篇4篇的大衛在極度炎熱中展現了果實的真實面貌：向神呼求、在憤怒中肅靜、在最黑暗的夜晚擁有建立在神身上的平安',
            '以賽亞書58章告訴我們：真正的果實不只是個人的靈命成長，而是在社會和關係中，把神的恩典帶給飢餓的、窮困的、和被壓迫的人',
            '以賽亞書55章是神白白的邀請——無論我們的炎熱有多大、荊棘有多深，神的邀請永遠是開放的，不需要我們的資格，只需要我們的就近',
            '何西阿書的復興圖景（百合花、橄欖樹、香氣）是我們的盼望：當我們走過炎熱→荊棘→十字架，我們的生命成為別人蒙恩的管道',
            '腓立比書1章6節是整個課程的保證：「那在你們心裡動了善工的，必成全這工」——改變的主角是神，我們的責任是配合和信靠',
            '改變是終生的旅程——課程結束只是旅程中的一站；繼續活出炎熱→荊棘→十字架→果實的大圖畫，是每一個基督徒永恆的委託',
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
          <h2 className="text-xl font-bold text-indigo-700">課程結束的祝福與默想</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">「耶和華如甘露」</p>
            <p>何西阿書14章5節說：「我必向以色列如甘露。」甘露是安靜的、是豐盛的、是每天早晨更新的。神對你的恩典也是這樣的——不是轟轟烈烈的一次性改變，而是每天安靜地滋潤你，使你慢慢地、真實地生長。不要因為成長的緩慢而沮喪——神的甘露每天都在工作。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">寫給未來的自己</p>
            <p>在課程結束時，寫一封信給「六個月後的自己」：描述你目前的炎熱、你正在成長的地方、和你的期望與委託。六個月後，再打開這封信，看看神的甘露如何在這段時間繼續工作。</p>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐方針（持續的委託）</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'a. 繼續使用自我成長方案', desc: '每月（或每當面對重大炎熱時）完整填寫一份自我成長方案，讓這個工具成為你持續成長的夥伴' },
            { label: 'b. 建立持續的問責關係', desc: '邀請一位課程夥伴繼續每月見面，分享各自的炎熱、荊棘、和果實，彼此代禱、鼓勵和問責' },
            { label: 'c. 閱讀《人如何改變》原著', desc: '用這個課程的架構重新閱讀保羅·區普的原著，讓更深的神學理解滋養你的持續成長' },
            { label: 'd. 把善果傳遞給別人', desc: '找機會把這個課程介紹給身邊的人——一個掙扎中的朋友、一個新的小組——讓你的成長成為別人成長的起點' },
            { label: 'e. 每年回顧詩篇4篇', desc: '每年（如每年的生日或年底），用詩篇4篇做反思禱告：我今年的炎熱是什麼？我是否安然躺下？' },
            { label: 'f. 永遠記住腓立比書1章6節', desc: '把「那在你們心裡動了善工的，必成全這工」貼在你每天能看到的地方，讓這個應許支撐你每天的成長旅程' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded border border-lime-200">
              <p className="font-bold text-lime-700 mb-1">{item.label}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-emerald-100 p-5 rounded-xl border border-emerald-300 text-center">
          <p className="text-emerald-800 font-bold text-lg mb-2">課程結束的禱告</p>
          <p className="text-gray-700 italic text-sm">「主啊，感謝祢帶領我走過這個課程。感謝祢揭示我心中的炎熱、荊棘、和偶像，也感謝祢讓我再次看見十字架的美麗。求祢繼續在我的生命中動善工，直到耶穌基督的日子。讓我的生命如甘露中的百合花，成為祢恩典的香氣。奉耶穌的名求，阿們。」</p>
        </div>
      </section>
    </div>
  );
}
