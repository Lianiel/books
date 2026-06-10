import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Search, Target, Users } from 'lucide-react';

export default function Book27Ch8() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第8課：為什麼你會被纏累——荊棘篇（下）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與作業討論</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>複習：</strong>上一課我們認識了六種荊棘反應，以及以弗所書所描述的「舊人」和「新人」的對比。今天我們要更深入地探問：<strong>為什麼</strong>我們會有這些荊棘反應？荊棘的根源在哪裡？</p>
          <p><strong>作業討論：</strong>分享你本週的「荊棘偵測」日記——在哪個時刻你最感到被自己的荊棘模式困住？什麼情境最容易觸發你的荊棘反應？</p>
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
            <p>荊棘的根源不在於外在的情況或他人的行為，而在於我們內心的「偶像」——那些我們渴望得到、以至於當得不到時就以罪性方式反應的事物。雅各書4章1-4節說得清楚：我們的紛爭和衝突來自我們內心爭戰的「私慾」。辨識我們的偶像，是改變的關鍵一步。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>在你最常出現荊棘反應的情境中，思考：是什麼你極度渴望得到、卻未能如願的東西，觸發了你的反應？（控制感？被尊重？安全感？被愛？）</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>你的偶像（心中的私慾）如何破壞你的關係？當你的私慾在關係中沒有被滿足時，你通常如何對待對方？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Search className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「是什麼事物擄獲了你的心？」
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
            <h3 className="font-bold text-cyan-700 mb-2">一、申命記5章6-21節：十誡的心理層面</h3>
            <p className="mb-2">十誡不只是一份「禁止做這些事」的清單，它揭示了神對人心的深刻認識。特別值得注意的是第一條和最後一條的關係：</p>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「除我以外，你不可有別的神。」（申命記5章7節）</p>
              <p className="mt-2">「不可貪戀……凡你鄰舍所有的。」（申命記5章21節）</p>
            </div>
            <p className="mb-2">保羅·區普指出，十誡的結構本身就告訴我們：<strong>所有外在的罪行（第2-9條），都有一個共同的根源——貪戀（第10條），而貪戀的原因是我們沒有讓神成為我們的第一（第1條）。</strong></p>
            <p>當神不是我們生命的中心，我們就會以各種「神的替代品」（偶像）來填充那個位置。當這些替代品讓我們失望時（它們終究會），我們的荊棘反應就出現了。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、羅馬書1章25節：偶像的定義</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「他們將神的真實變為虛謊，去敬拜、事奉受造之物，不事奉那造物的主，主乃是可稱頌的，直到永遠。阿們。」（羅馬書1章25節）</p>
            </div>
            <p className="mb-2">保羅在這裡定義了「偶像」：偶像是我們把對神的崇拜、信靠、和渴望轉移到任何受造之物上的結果。現代的偶像不一定是石頭雕像，而可能是：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>舒適與安全：</strong>「只要我的生活安穩，我就沒事。」</li>
              <li><strong>讚美與認可：</strong>「只要別人覺得我好，我就沒事。」</li>
              <li><strong>掌控與秩序：</strong>「只要事情按我的計畫走，我就沒事。」</li>
              <li><strong>愛與被需要：</strong>「只要重要的人愛我，我就沒事。」</li>
              <li><strong>成就與卓越：</strong>「只要我表現優秀，我就沒事。」</li>
            </ul>
            <p className="mt-2">提摩太·凱勒（Timothy Keller）說：「罪是以任何替代神的事物作為救主和主的行動。」</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、雅各書4章1-4節：衝突的根源</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「你們中間的爭戰鬥毆是從哪裡來的呢？不是從你們百體中戰鬥之私慾來的嗎？你們貪戀，還是得不著；你們殺害、嫉妒，又不能得；你們爭戰鬥毆。你們得不著，是因為你們不求。你們求也得不著，是因為你們妄求，要浪費在你們的宴樂中。你們這些淫亂的人哪，豈不知與世俗為友就是與神為敵嗎？所以凡想要與世俗為友的，就是與神為敵了。」（雅各書4章1-4節）</p>
            </div>
            <p className="mb-2">這段經文揭示了荊棘的深層動力：</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>「百體中戰鬥之私慾」：</strong>衝突和問題的根源不在外面，而在我們內心的私慾。我們的身體（本性）充滿了對神以外的事物的渴望。</li>
              <li><strong>「貪戀，還是得不著」：</strong>私慾的本質是永不滿足——我們越得到，越渴望更多。這是偶像的本性：它們總是要求更多，卻從不真正滿足。</li>
              <li><strong>「不求」或「妄求」：</strong>我們的禱告問題揭示我們的偶像——我們不禱告（不依賴神），或者我們禱告只是為了讓神服事我們的私慾。真正的禱告是把自己的私慾帶到神面前，讓神改變我們的慾望。</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、「X光問題」——探測你的偶像</h3>
            <p className="mb-2">大衛·鮑利生（David Powlison）和提摩太·凱勒（Timothy Keller）發展了一系列「X光問題」，幫助我們透過外在的行為看見內心的偶像。以下是34個問題中最核心的幾個：</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-2">關於欲求（渴望）</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>什麼讓你最沮喪、最憤怒、最焦慮？（你最怕失去的，往往就是你的偶像）</li>
                  <li>如果你能改變你的情況，你最想改變什麼？為什麼？</li>
                  <li>你夢想中的「完美生活」是什麼樣子？那個「完美」裡面，神佔多大的比例？</li>
                  <li>你花最多時間擔心的是什麼？</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-2">關於行為（荊棘的來源）</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>在哪些情境下，你最容易失控（憤怒、崩潰、操控別人）？那個觸發點背後，你渴望的是什麼？</li>
                  <li>你最難饒恕的是什麼樣的傷害？為什麼這種傷害特別難接受？（你保護的，往往就是你的偶像）</li>
                  <li>你願意說謊（或隱瞞真相）是為了得到什麼？</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-cyan-700 mb-2">關於信靠（偶像的替代品）</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>如果神永遠不解決你目前最大的問題，你還能說神是好的嗎？</li>
                  <li>當你不確定某件事時，你第一個尋求的是什麼（或是誰）的確保？</li>
                  <li>是什麼給你帶來最深的滿足感和成就感？那個來源是神，還是其他事物？</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">五、「塞車比喻」——偶像在關係中的表現</h3>
            <p className="mb-2">保羅·區普用「塞車比喻」說明偶像如何在日常關係中製造衝突：</p>
            <div className="bg-white p-4 rounded border border-cyan-200">
              <p className="italic text-sm mb-2">想像你被塞車困住，趕不上一個重要的會議。你的反應是什麼？你是否對同車的人發脾氣，或者在心裡咒罵前方的駕駛？</p>
              <p className="text-sm text-gray-700">塞車不是你的問題的根源——你對「準時」或「掌控」的渴望才是根源。如果準時對你不那麼重要，塞車只是一個不方便；但如果「準時」已經成為你的偶像（你的身分感、你的安全感依附在上面），那麼任何阻礙準時的事物都會觸發你的荊棘反應。</p>
              <p className="text-sm text-gray-700 mt-2">同樣的道理適用於所有的人際衝突：你對配偶的憤怒、對孩子的失望、對朋友的失望——它們背後都有一個「偶像」在說：「你應該讓我的渴望得到滿足！」</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">六、荊棘中的六種典型藉口</h3>
            <p className="mb-2">當我們的荊棘反應出現後，我們通常用藉口來保護自己：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { excuse: '「我就是這種人。」', response: '這是認命，不是誠實。基督改變人的心，你不必永遠是「這種人」。' },
                { excuse: '「要不是因為那個人（那件事）……」', response: '把責任全推給外在因素，讓你永遠不需要改變自己。' },
                { excuse: '「我已經盡力了。」', response: '這可能是真的，但也可能是停止成長的藉口。神的恩典夠不夠？' },
                { excuse: '「你不了解我經歷了什麼。」', response: '你的苦難是真實的，但苦難不能成為荊棘反應的藉口。' },
                { excuse: '「這只是我的個性。」', response: '個性可以影響表現形式，但不能為罪性反應辯護。' },
                { excuse: '「我有改善了，只是還不夠完美。」', response: '進步是好的，但「比以前好」不等於「不需要繼續改變」。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded border border-orange-200">
                  <p className="font-bold text-orange-700 text-sm mb-1">藉口：{item.excuse}</p>
                  <p className="text-sm text-gray-700">回應：{item.response}</p>
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
          <h2 className="text-xl font-bold text-green-700">作業：偶像探測與自我成長方案深化</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">完成「X光問題」練習</h3>
            <p className="text-gray-700 mb-2">誠實地回答以下問題，並思考它們揭示了你心中什麼樣的偶像：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你目前生命中最大的恐懼是什麼？（害怕失去什麼？）</li>
              <li>當事情不按你的計畫走時，你第一個反應是什麼？這個反應揭示了你最深的渴望是什麼？</li>
              <li>在你最親密的關係中，你最常期望對方做到什麼？當對方做不到時你的反應如何？</li>
              <li>如果明天你的＿＿＿（填入你認為最重要的東西）被奪去，你的人生還有意義嗎？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">深化自我成長方案</h3>
            <p className="text-gray-700 mb-2">針對你目前最大的炎熱和荊棘，現在深化分析：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你的荊棘反應背後，是什麼偶像（渴望）在驅動？</li>
              <li>這個偶像是真實美好的事物（如家庭、工作）還是自私的渴望？（注意：偶像常常是好事物被放在了錯誤的位置）</li>
              <li>你願意把這個「偶像」帶到神面前，求祂改變你的渴望嗎？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">研讀雅各書4章1-10節</h3>
            <p className="text-gray-700 mb-2">閱讀雅各書4章1-10節，特別注意第7-10節雅各給出的回應之道：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>「順服神」（第7節）在你目前的情境中意味著什麼？</li>
              <li>「抵擋魔鬼」（第7節）——魔鬼如何在你的具體情境中誘惑你走向荊棘反應？</li>
              <li>「親近神」（第8節）——你目前如何在你的炎熱中親近神？</li>
              <li>「在主面前自卑」（第10節）——具體地說，這對你意味著什麼行動？</li>
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
            '荊棘的根源不在外面，而在我們內心的「偶像」——那些我們把對神的渴望轉移到受造之物上的結果（羅馬書1:25）',
            '申命記十誡的結構揭示：所有外在的罪（第2-9條）根源於貪戀（第10條），貪戀根源於沒有讓神作第一（第1條）',
            '雅各書4章1-4節清楚指出：我們的衝突和荊棘反應，來自內心「私慾」的爭戰，而非外在情況的問題',
            '「X光問題」幫助我們透過荊棘的表現，回溯到背後的偶像——我們最害怕失去的、最渴望得到的，往往就是我們的偶像',
            '典型的藉口（「我就是這種人」「這是別人的錯」）阻礙我們看見自己的責任，也阻礙真實的改變',
            '辨識偶像不是為了定罪，而是為了悔改和更新——把我們錯誤的渴望帶到神面前，讓神改變我們的心',
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
            <p className="font-bold text-indigo-700 mb-2">當好事物成為偶像</p>
            <p>提摩太·凱勒提醒我們：偶像通常不是壞事物，而是好事物被放在了錯誤的位置。家庭是好的，但如果家庭的和睦成為我生命的終極意義，那麼家庭就成了偶像——當它出問題時，我的整個世界就崩潰了。你有沒有把一個好事物放在只有神才能佔據的位置上？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">從偶像到神：重新定向的禱告</p>
            <p>當我們辨識了偶像之後，下一步是禱告——不是求神去除我們的問題，而是求神成為我們在那個領域的滿足。如果你的偶像是「被認可」，禱告可以是：「主啊，求祢成為我身分的根基，使我不再需要人的認可來感到安全。」這種禱告本身就是悔改的開始。</p>
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
            { label: 'a. 寫下你的偶像清單', desc: '誠實地列出你心中最重要的3件事（你最怕失去的），然後問：這些佔了神的位置嗎？' },
            { label: 'b. 偶像悔改禱告', desc: '針對你辨識出的主要偶像，每天用5分鐘做「重新定向的禱告」，求神成為那個空缺的滿足' },
            { label: 'c. 讀申命記5章1-21節', desc: '從偶像的角度重新讀十誡，看你在哪些誡命上最掙扎，那就是你偶像所在的領域' },
            { label: 'd. 注意你的觸發點', desc: '本週記錄：每當你出現荊棘反應，停下來問「我被剝奪了什麼？我渴望的是什麼？」' },
            { label: 'e. 向信任的人坦承', desc: '分享你辨識出的偶像給一位信任的弟兄姐妹，請他們與你一起禱告並互相問責' },
            { label: 'f. 更新自我成長方案', desc: '把「我的偶像是___」加入你的自我成長方案，讓荊棘的分析更完整、更誠實' },
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
