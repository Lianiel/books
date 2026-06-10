import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle } from 'lucide-react';

export default function Book28Ch01() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第1課：這是神要帶領你去的地方</h1>
      <p className="text-gray-600">教師本帶領指南</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>幫助學員理解真實屬靈改變的本質，及其與表面改變的區別。建立學員期待神的工作，而非仰賴自己努力的心態。</p>
          <p><strong>帶領重點：</strong>此課為整個課程的基礎。學員需要明白改變是神的工作，這改變從心出發，影響生活的各個層面。帶領時要幫助他們看見改變的真實樣貌。</p>
          <p><strong>預期時間：</strong>90分鐘（包括破冰）</p>
        </div>
      </section>

      {/* 帶領流程 */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">帶領流程</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">1. 開場與破冰（15分鐘）</h3>
            <p className="text-gray-700 mb-2">請歡迎成員，簡要介紹課程。強調這不是心理學課程，而是聖經輔導課程，幫助大家經歷真實的屬靈改變。</p>
            <p className="text-sm text-gray-600">提示：如小組成員是新手，可用5分鐘讓每人自我介紹。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第1課DVD。此段落強調改變的模式（炎熱→荊棘→十字架→果實），引導學員看見改變的全景。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 小組討論（20分鐘）</h3>
            <p className="text-gray-700 mb-2">分成2-3人小組，討論：「你生活中曾經嘗試改變卻失敗的例子是什麼？」引導他們認識表面改變與真實改變的區別。</p>
            <p className="text-sm text-gray-600">提示：分享1-2個小組的回應，幫助大家連結到課程主題。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 結束與作業（15分鐘）</h3>
            <p className="text-gray-700">介紹作業，解釋學員手冊的使用方式。強調在家複習DVD內容對學習的重要性。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念：什麼是真實改變？</h3>
            <p>真實改變不是改變外部行為，而是改變內心的欲望與動機。許多人嘗試改變，但只是在表面做調整。耶利米書17:9提醒我們：「人心比萬物都詭詐，無人能識；惟有我耶和華是鑒察人心、試驗人肺腑的。」</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">引導重點：</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>改變發生於心層面，不只是行為層面</li>
              <li>改變需要聖靈的工作，不是意志力的表現</li>
              <li>改變往往很困難，但通過十字架成為可能</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 討論與應用引導 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">討論與應用引導</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">主要問題：</h3>
            <p className="mb-3">「是什麼樣的跡象與標誌決定你的人生方向？」</p>
            <p className="text-sm text-gray-600">帶領提示：引導學員思考他們生活的真正驅動力。是否被外在成功所驅動？還是被神的旨意引導？</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">應用建議：</h3>
            <p>鼓勵學員在這周反思一個他們想改變但一直沒有成功的習慣或行為模式。幫助他們為此禱告，祈求神在課程中光照他們。</p>
          </div>
        </div>
      </section>

      {/* 常見挑戰與帶領技巧 */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">常見挑戰與帶領技巧</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div className="bg-white p-3 rounded border border-teal-200">
            <p><strong>挑戰：</strong>部分學員可能認為改變就是行為改變，不理解心層面的重要性。</p>
            <p className="text-sm text-teal-600 mt-2"><strong>技巧：</strong>用生活例子說明。例如：一個人戒煙成功，但內心仍充滿憤怒和沮喪，這不是真實改變。真實改變涉及對神的心態、對他人的態度等內心層面的轉變。</p>
          </div>
          <div className="bg-white p-3 rounded border border-teal-200">
            <p><strong>挑戰：</strong>有人可能對課程的深度感到害怕或不安。</p>
            <p className="text-sm text-teal-600 mt-2"><strong>技巧：</strong>確保他們知道課程的目的是幫助，不是定罪。這是一個安全的學習空間。如果某人分享太個人的內容，可以私下與他們交談。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm">「主啊，我們感謝祢，因為祢關心我們生命中真實的改變。求祢在我們每個人心中工作，幫助我們看見真實改變的重要性。求祢的聖靈光照我們，帶領我們經歷從心而出的改變。願這課程成為祢在我們生命中動工的工具。阿們。」</p>
      </section>
    </div>
  );
}
