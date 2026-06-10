import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Target, Clock } from 'lucide-react';

export default function Book28Ch03() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第3課：改變需要群體的生活</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>幫助學員理解屬靈成長本質上是群體性的，而非孤立的個人旅程。神的本質（三位一體）本身就是群體；教會不是可選的附屬品，而是神設計的屬靈成長環境。帶領者要幫助學員看見：他們之所以在這個小組，本身就是神計畫的一部分。</p>
          <p><strong>帶領重點：</strong>這一課的挑戰是幫助學員超越「只要我和神的關係好就夠了」的個人主義信仰，進入「我需要弟兄姐妹才能成長」的群體意識。帶領者可以分享自己如何被群體塑造的具體故事。</p>
          <p><strong>預期時間：</strong>90分鐘</p>
        </div>
      </section>

      {/* 帶領流程 */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">帶領流程</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">1. 開場破冰（10分鐘）</h3>
            <p className="text-gray-700 mb-2">問學員：「在你的屬靈成長歷程中，有沒有哪一個人（弟兄姐妹、mentor、友人）對你的影響特別深遠？他/她做了什麼？」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：這個問題幾乎所有人都有答案，因為屬靈成長很少是孤立發生的。這個分享自然地引出今天的主題：改變需要群體。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. 閱讀複習與CPR（10分鐘）</h3>
            <p className="text-gray-700">帶領學員讀學員本的複習部分。用CPR架構引導：「改變需要群體」這個真理，對你個人的屬靈操練有什麼挑戰？對你目前的人際關係有什麼影響？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第3課DVD。重點內容：三位一體作為群體的原型，以弗所書2-3章的「神的家」概念，以及提多書2章的「群體訓練模式」。</p>
            <p className="text-sm text-gray-600 mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：播放前請學員留意：「DVD中提到哪些群體中才能發生的屬靈成長，是個人無法單獨完成的？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700 mb-2">使用學員本的小組活動問題，重點圍繞以弗所書2章14-22節（神的家）和提多書2章11-14節（群體訓練）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業介紹與結束（5分鐘）</h3>
            <p className="text-gray-700">說明本週作業，特別強調：找一位本組成員，在本週安排一次個別的屬靈對話（不在正式小組的情況下）。</p>
          </div>
        </div>
      </section>

      {/* 關鍵內容說明 */}
      <section className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-blue-700">關鍵內容說明</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：三位一體是群體的原型</h3>
            <p>神的本質是三位一體（父、子、聖靈），而三位一體的本質是永恆的愛的群體。創世記1章26節「我們要造人，照著我們的形像」——「我們」指的是三位一體的神。人是按著「群體之神」的形象造的，因此人天生需要群體。獨處無法完整地反映神的形象，群體才能。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：以弗所書2-3章的「神的家」</h3>
            <p>以弗所書2章14-22節描述教會是「神的家」和「聖殿」。猶太人和外邦人（曾經是仇敵）在基督裡成為「一個新人」。這說明了一個重要真理：我們改變最大的証明，往往是在我們與「最難相處的人」的關係中。只和相似的人在一起，不能真正測試我們的屬靈成長。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：提多書2章的群體訓練模式</h3>
            <p>提多書2章11-14節說：「神救眾人的恩典已經顯明……調教我們……」——這裡「調教」的意思是訓練、塑造。神使用群體來「調教」我們。提多書2章描述了具體的方式：年長者教導年輕者、先進引導後進——這是神設計的屬靈傳承模式。帶領者要問：「這個小組的成員如何互相調教？」</p>
          </div>
        </div>
      </section>

      {/* 小組活動帶領說明與答案 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">小組活動帶領說明與參考答案</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題1（以弗所書2章14-22節）：「神的家」意味著什麼</p>
            <p className="text-gray-700 mb-2">引導學員看第19節：「所以你們不再作外人和客旅，是與聖徒同國，是神家裡的人了。」問：「作為『神家裡的人』，你在這個小組中應有的態度和行為是什麼？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：家人之間有責任感、有誠實、有忍耐、有接納。在小組中，我們不只是一起學習的陌生人，而是屬於同一個家的成員。這意味著：我們要誠實地分享掙扎，不只是展示成功；我們要彼此承擔，不只是旁觀；我們要忍耐彼此的缺點，就像家人一樣。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2（以弗所書3章14-21節）：保羅的群體禱告</p>
            <p className="text-gray-700 mb-2">這段是保羅為以弗所教會的禱告。注意第18-19節：「能以和眾聖徒一同明白基督的愛是何等長闊高深」——保羅說「和眾聖徒一同」，暗示有些屬靈的認識只能在群體中獲得。問：「你有沒有因為弟兄姐妹的分享，而更深地認識神的什麼方面？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：神的愛的「長闊高深」有不同的面向，在不同的人的經歷中顯現不同的層面。一個人的生命故事只能反映神某個角度的恩典；只有在群體中，我們才能透過彼此的故事，更全面地認識神。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：「在你目前的生活中，哪些人際關係讓你經歷到真實的屬靈成長？」（本課主要問題）</p>
            <p className="text-gray-700 mb-2">這是最個人的問題，帶領者先分享自己的例子，幫助學員放開心。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：注意：促進屬靈成長的關係，不一定是令人舒服的關係。往往是那些「難相處」的人，或那些「敢於說真話」的人，更能帶來真實的成長。引導學員看見：困難的關係也可以是神塑造我們的工具。</p>
          </div>
        </div>
      </section>

      {/* 討論與應用引導 */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">討論與應用引導</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-teal-700 mb-2">深化討論：「你的群體現況」</h3>
            <p className="mb-2">帶領者可以引導更深入的討論：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>「在你的生活中，有誰真的了解你的掙扎？（不只是你的成功）」</li>
              <li>「有沒有人可以對你說真實話，而你願意聽？」</li>
              <li>「這個課程小組如何幫助你更開放地接受群體的幫助？」</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">應用建議</h3>
            <p>鼓勵學員本週做一件具體的事：主動聯繫小組中的一位成員（在正式小組以外），分享你這週最大的炎熱或掙扎，並請他們為你禱告。這個小小的行動開始建立超越課堂的真實群體。</p>
          </div>
        </div>
      </section>

      {/* 常見挑戰與帶領技巧 */}
      <section className="border-l-4 border-orange-400 bg-orange-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-orange-600" />
          <h2 className="text-xl font-bold text-orange-700">常見挑戰與帶領技巧</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員說：「我不需要小組，我和神的關係已經很好了。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>尊重他/她的經歷，但溫和地問：「你的私人關係和群體的關係，哪個更能測試你的愛？是一個人禱告，還是在群體中彼此忍耐和服事？」三位一體的神是群體的，我們按神的形象造的——孤立不能完整地活出神的形象。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>某些學員在小組中非常封閉，不願分享個人的事。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>不要強迫，但要在整個課程中持續建立安全的文化：帶領者自己率先分享（適度的）個人掙扎；明確說明：「在這裡分享的內容在小組內保密」；讚揚任何程度的分享。隨著課程進行，多數人會逐漸開放。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>小組中有成員分享了很多個人隱私，讓其他人感到不舒服。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>在小組開始前，設定清楚的分享原則：「分享到讓你感到舒服的程度，不需要分享所有細節。目的是幫助彼此成長，不是讓所有人都知道你的一切。」帶領者要學習如何溫和地引導分享的方向和深度。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「三位一體的神，感謝祢讓我們看見，祢自己就是完美群體的源頭。感謝祢把我們放在一起，使我們成為彼此成長的工具。求祢幫助我們學習彼此開放、彼此擔當、彼此忍耐。在我們的小組中，建立一個安全的空間，使人們可以誠實地面對自己，並且在彼此的支持中更靠近祢。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
