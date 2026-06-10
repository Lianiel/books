import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle } from 'lucide-react';

export default function Book28Ch02() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第2課：是的，你是基督所愛的人</h1>
      <p className="text-gray-600">教師本帶領指南</p>

      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <p className="text-gray-700"><strong>課程目標：</strong>幫助學員理解他們在基督裡的新身分——被接納、被愛、被救贖。這身分是改變的基礎。</p>
        <p className="text-gray-700 mt-2"><strong>帶領重點：</strong>許多人的改變動力來自於自我厭惡或外在認可，而非來自對神之愛的確信。此課極為重要，因為它奠定了學員對自己身分的正確認識。</p>
      </section>

      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">帶領流程</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700">1. 檢視作業（15分鐘）</h3>
            <p className="text-gray-700 text-sm mt-1">邀請1-2位學員分享他們上週的反思。肯定他們的想法，連結回第1課的主題。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700">DVD & 小組討論（60分鐘）</h3>
            <p className="text-gray-700 text-sm mt-1">播放DVD（18分鐘）。分組討論：「你如何看待自己？你對自己的看法是否受基督之愛的影響？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700">2. 歌聲西書應用（10分鐘）</h3>
            <p className="text-gray-700 text-sm mt-1">重點講解歌羅西書1:15-23，幫助學員看見自己在基督裡的新身分。</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded">
        <h2 className="text-xl font-bold text-blue-700 mb-4">關鍵內容說明</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>核心：</strong>身分改變帶來行為改變。我們不是為了成為神的兒女而改變；我們是因為我們已經是神的兒女而改變。</p>
          <p><strong>關鍵經文：</strong>歌羅西書1:13-14「他救了我們脫離黑暗的權勢，把我們遷到他愛子的國裡；我們在愛子裡得蒙救贖，罪過得以赦免。」</p>
          <p><strong>帶領重點：</strong>幫助學員看見改變的基礎不在於自己的努力，而在於對基督之愛的確信。</p>
        </div>
      </section>

      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <h2 className="text-xl font-bold text-cyan-700 mb-4">討論與應用引導</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>主要問題：</strong>「因為你已經配給基督成為他的新婦，你每日所得到的好處是什麼？」</p>
          <p className="text-sm text-gray-600">帶領提示：引導學員思考被接納、被愛、被救贖的實際含義。幫助他們看見這些真理如何改變我們的生活方式。</p>
          <p><strong>應用：</strong>鼓勵學員在這周每天思想自己在基督裡的身分，並為此感恩。</p>
        </div>
      </section>

      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <h2 className="text-xl font-bold text-teal-700 mb-4">常見挑戰與帶領技巧</h2>
        <div className="space-y-2 text-gray-700">
          <div className="bg-white p-3 rounded border border-teal-200">
            <p className="font-bold">挑戰：</p>
            <p className="text-sm">有些人可能因為過去的失敗而難以相信自己被愛。</p>
            <p className="text-sm text-teal-600 mt-1"><strong>技巧：</strong>強調神的愛不是基於我們的表現，而是基於基督的工作。羅馬書8:38-39提醒我們沒有任何東西能將我們與神的愛隔開。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
