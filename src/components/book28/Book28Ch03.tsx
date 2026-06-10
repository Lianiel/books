import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle } from 'lucide-react';

export default function Book28Ch03() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第3課：改變需要群體的生活</h1>
      <p className="text-gray-600">教師本帶領指南</p>

      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <h2 className="text-xl font-bold text-purple-700 mb-3">帶領簡介</h2>
        <p className="text-gray-700"><strong>課程目標：</strong>幫助學員理解改變不是孤獨的個人旅程，而是發生在群體生活的背景下的。教會群體提供支持、問責、鼓勵與見証。</p>
        <p className="text-gray-700 mt-2"><strong>帶領重點：</strong>許多現代基督徒倾向於個人化信仰。此課挑戰這種思維，強調真實改變需要群體的支持與代禱。</p>
      </section>

      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">帶領流程</h2>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700">1. 複習與作業討論（15分鐘）</p>
            <p className="text-sm text-gray-700 mt-1">邀請學員分享上週關於身分的反思。強調神的愛如何激勵我們向他人展示相同的愛。</p>
          </div>
          <div className="bg-white p-3 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700">2. DVD與小組討論（60分鐘）</p>
            <p className="text-sm text-gray-700 mt-1">播放DVD（26分鐘）。分組討論如何在小組中互相支持。邀請學員分享他們在群體中得到的幫助。</p>
          </div>
        </div>
      </section>

      <section className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded">
        <h2 className="text-xl font-bold text-blue-700 mb-4">關鍵內容說明</h2>
        <p className="text-gray-700 text-sm">重點經文：希伯來書10:24-25強調我們應當聚集，彼此勉勵。群體的功能包括：代禱、勸誡、見証、承擔責任。帶領時幫助學員看見小組本身就是神改變他們的工具。</p>
      </section>

      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <h2 className="text-xl font-bold text-cyan-700 mb-4">討論與應用引導</h2>
        <p className="text-gray-700"><strong>主要問題：</strong>「因為你屬於基督群體的一員，在日常生活中，你可以支取的資源有哪些呢？」</p>
        <p className="text-gray-700 text-sm mt-3">應用：鼓勵學員在小組中建立問責關係，為彼此禱告。</p>
      </section>
    </div>
  );
}
