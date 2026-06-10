import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Target, Clock } from 'lucide-react';

export default function Book28Ch02() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第2課：是的，你是基督的新婦</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>幫助學員理解他們與基督的關係是一種「婚姻盟約」——不是雇傭關係，不是宗教義務，而是充滿愛和恩典的親密連結。讓學員明白這個身分意味著他們每天都有豐富的屬靈資源可以支取：稱義、智慧、力量、和安慰。</p>
          <p><strong>帶領重點：</strong>這一課的核心是幫助學員從「宗教性服事」（努力討神喜悅以換取祝福）轉向「恩典性服事」（因為被愛而愛）。這個轉變是整個課程屬靈更新的基礎。帶領者自己需要先思考：我的服事動機更像哪一種？</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 開場與上課回顧（10分鐘）</h3>
            <p className="text-gray-700 mb-2">問學員：「上週你學到的最重要的一件事是什麼？」引導學員簡短分享上課作業的一個洞見。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：不要讓作業分享變成冗長的個人故事，引導學員聚焦在一個最重要的洞見。如果有人沒有完成作業，不要讓這成為壓力，鼓勵繼續參與即可。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. 閱讀複習與CPR（10分鐘）</h3>
            <p className="text-gray-700">帶領學員一起讀學員本的「複習」部分，並用CPR架構（核心要點、個人應用、人際應用）引導學員思考：「成為基督新婦」這個身分對你個人和你的關係有什麼實際意義？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第2課DVD。重點介紹：人類的三個核心問題（稱義/成聖/能力），基督作為新郎的角色，以及婚約的應許。</p>
            <p className="text-sm text-gray-600 mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：播放前，請學員特別留意：「DVD中提到哪些你每天都可以從基督那裡支取的資源？」這會幫助他們在觀看時更主動聆聽。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700 mb-2">使用學員本的小組活動問題，重點圍繞歌羅西書1章15-23節和本課的「婚姻比喻」（單身女員工和老闆的比喻）。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：「婚姻比喻」可能對離婚或婚姻痛苦的學員造成不適，帶領時要敏感——強調這是一個「神與我們的關係」的比喻，不是評判人間婚姻的標準。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業介紹與結束禱告（5分鐘）</h3>
            <p className="text-gray-700">說明本週作業的重點：特別鼓勵學員完成「歌羅西書1章研讀」和「每日從基督支取資源」的練習。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：人類的三個核心問題</h3>
            <p className="mb-2">保羅·區普識別出基督徒生活中三個核心問題，每一個問題都在基督裡得到答案：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>稱義問題（罪惡感）：</strong>「我能被神接納嗎？」——基督的寶血回答：你已被完全接納</li>
              <li><strong>成聖問題（道德軟弱）：</strong>「我能夠改變嗎？」——基督的生命回答：他住在你裡面，使你改變</li>
              <li><strong>能力問題（日常力量）：</strong>「我有力量走過今天嗎？」——基督的同在回答：我的恩典夠你用</li>
            </ul>
            <p className="mt-2">帶領時要幫助學員看見：他們每天所面對的焦慮、失敗感、或枯竭，都可以在基督裡找到具體的答案。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：婚姻盟約的本質</h3>
            <p>歌羅西書1章15-23節描述基督是「萬有的首位」，也是教會（新婦）的頭。這個關係是盟約性的——不是條件性的（「如果你夠好，我就愛你」），而是盟約性的（「我永遠愛你，無論如何」）。帶領者要幫助學員理解：神的愛不會因為他們的失敗而減少。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：每日支取資源的實踐</h3>
            <p>「新婦每日支取資源」的四種資源：(1) 稱義的確信——每天在神面前被接納的確信；(2) 智慧——面對困難時神的引導；(3) 力量——完成神呼召的事的能力；(4) 安慰——在痛苦中神的同在和安撫。帶領者要鼓勵學員把這四種資源具體化到自己的生活中。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題1（歌羅西書1章15-23節）：基督的卓越與我們的地位</p>
            <p className="text-gray-700 mb-2">引導學員注意：這段經文描述的基督不是一個遙遠的宗教人物，而是「萬有的首位」——一位擁有全部權柄的主。然後問：如果這樣偉大的主選擇與我們立約，這意味著什麼？</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：基督的偉大（第15-18節）直接應用於我們的得救確據（第21-23節）。我們不是「湊合著被接納的」，而是被宇宙之主親自和好了。這應當給我們最深的安全感和謙卑。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2（婚姻比喻）：你的服事動機</p>
            <p className="text-gray-700 mb-2">問學員：「你的服事更像『朋友甲』（換取好處）還是『朋友乙』（出於愛）？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：大多數人的誠實答案是：「有時候更像甲，有時候更像乙。」這是正常的——認識自己的動機不是為了定罪，而是為了更深地回到恩典。帶領者可以先分享自己的掙扎，幫助學員誠實。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：今天你最需要從基督支取哪種資源？</p>
            <p className="text-gray-700 mb-2">邀請學員具體回答：在你目前的炎熱中，你最需要的是稱義的確信、智慧、力量、還是安慰？為什麼？</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這個問題是最個人的，帶領者要創造安全的空間。如果有人選擇不分享，完全尊重。重要的是讓每個人認真思考，而不是提供表演性的答案。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">主要問題：「因為你已許配給基督成為祂的新婦，你每日所得到的好處是什麼？」</h3>
            <p className="mb-2">帶領提示：這個問題要引導學員從抽象的神學轉向具體的日常應用。避免讓答案停留在「得救」「上天堂」等大框架，而要幫助學員說出具體的：「今天，因為我是基督的新婦，我可以___。」</p>
            <p>進一步引導：如果學員說「我感受不到這些好處」，這是一個寶貴的誠實。帶領者可以問：「是什麼讓你難以領受這些資源？是不相信，還是不知道如何支取，還是感覺自己不夠資格？」</p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">應用建議</h3>
            <p>鼓勵學員本週每天早晨做「支取資源的禱告」：「主耶穌，今天我需要你的___（稱義的確信/智慧/力量/安慰），因為我面對___。謝謝祢，這些都已在祢裡面為我預備好了。」這個簡單的禱告幫助學員把神學轉化為日常實踐。</p>
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
            <p><strong>挑戰：</strong>學員對「婚姻」比喻感到不適，特別是離婚或婚姻不幸者。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>帶領者要在提到比喻之前先說：「我們用婚姻作為比喻，是因為它是最親密的人類關係。但這個比喻描述的是神與我們的關係，不是對人間婚姻的評判。任何人間婚姻的形式，都無法完全反映神對我們的愛。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員用「我知道這個道理，但做不到」來回應，感到沮喪。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>這個課程的目的不是「讓你做到」，而是「幫助你看見並領受神已經為你做到的」。改變不是靠努力做到，而是靠更深地領受恩典。提醒學員：「做不到」正是我們需要基督的原因，這不是失敗，而是機會。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員對「每天支取資源」的概念感到抽象，不知道如何實踐。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>給出非常具體的例子：「假設你今天要去參加一個讓你焦慮的會議，你如何支取基督的智慧和力量？你在去之前禱告了嗎？你在心中是否提醒自己你是被神完全接納的，不需要靠這個會議的結果來定義自己？」具體的場景幫助學員把抽象的真理落地。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主耶穌，感謝祢不只是我們的救主，更是我們的新郎。感謝祢與我們立下永不改變的盟約，使我們有資格每天支取祢的豐盛。求祢幫助我們這一週，在每一個需要的時刻，真的相信並支取祢的稱義、智慧、力量和安慰。不讓我們靠自己的力量去生活，而是靠著那愛我們、為我們捨己的祢。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
