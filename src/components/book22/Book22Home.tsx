import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, BookOpen, Users, Star, Heart } from 'lucide-react';

export default function Book22Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    intro: true,
    chapters: true,
    author: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const chapters = [
    { num: 1, title: '認識人與認識上帝', desc: '加爾文的核心洞見：認識上帝與認識人不可分割' },
    { num: 2, title: '神學入門', desc: '什麼是神學？為何需要神學？如何做神學？' },
    { num: 3, title: '人是什麼？', desc: '人的本質、人的罪、命運觀與自卑的必升為高' },
    { num: 4, title: '敬拜上帝', desc: '崇拜的態度、關係、方向，洗禮與聖餐' },
    { num: 5, title: '認識教會', desc: '教會的本質、功能、與文化的關係' },
    { num: 6, title: '三一上帝', desc: '認識三一上帝，避免偶像崇拜與兩種扭曲' },
    { num: 7, title: '耶穌基督', desc: '歷史的耶穌，救贖的基督，信仰的核心' },
    { num: 8, title: '聖靈大能', desc: '聖靈的工作、恩賜、靈恩運動與終末盼望' },
    { num: 9, title: '活潑的盼望', desc: '盼望的優先性，死後的盼望，苦難中的盼望' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          認識上帝與認識人的九個探險
        </h1>
        <p className="text-gray-600 text-lg">林鴻信 著</p>
        <p className="text-gray-500 text-sm mt-1">校園書房出版社 · 2011年第二版</p>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('intro')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">書本簡介</span>
          </div>
          {expanded['intro'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['intro'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">
              《認識上帝與認識人的九個探險》是一本以平易近人的語言，深入淺出地介紹基督教系統神學核心議題的入門著作。本書以「認識上帝」與「認識人」的互相關聯為核心，透過九個探險，引領讀者探索基督信仰中最根本的思想。
            </p>
            <p className="text-gray-700 leading-relaxed">
              加爾文在《基督教要義》開卷即說：「我們的智慧，若值得以智慧為名，幾乎完全包含在兩項認識之中：對上帝的認識，以及對我們自己的認識。」這兩種認識彼此交織，密不可分——只有真正認識上帝的人，才能真正認識自己；只有真正認識自己的人，才能真正認識上帝。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本書既適合初探信仰者建立系統神學基礎，也適合信徒深化對上帝、人、教會、聖靈與盼望的認識。書中大量使用生活實例與文化處境，使神學思考貼近日常信仰生活。
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-blue-800 font-medium text-sm">探險特色</p>
              <ul className="mt-2 space-y-1 text-blue-700 text-sm">
                <li>• 九條初階步道，前進探索者清楚掌握基督教教義的核心</li>
                <li>• 著重對話，使用平白語言及淺近例證，進行本地神學的處境思考</li>
                <li>• 回歸聖經經文，以貼近聖經脈絡建立系統化的教義概念</li>
                <li>• 成人主日學、慕道真理、信徒造就班皆可輕鬆上手</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 章節目錄 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('chapters')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">九個探險</span>
          </div>
          {expanded['chapters'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['chapters'] && (
          <div className="p-5 bg-white">
            <div className="grid gap-3">
              {chapters.map((ch) => (
                <div key={ch.num} className="flex gap-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {ch.num}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">第{ch.num}章：{ch.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 作者介紹 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('author')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">作者介紹</span>
          </div>
          {expanded['author'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['author'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">林鴻信</span>，一位熱情的神學探險家。座右銘是「為要成就上帝美意而立志行事」（腓二13）。是一位對土地、對人有深刻關懷，又理性感性兼具的神學思想工作者。
            </p>
            <p className="text-gray-700 leading-relaxed">
              曾在台灣斗南鄉下教會，作神學總是不忘心中有羊群。深受加爾文神學的啟發，從事神學教育，卻期許自己不侷限在學術的象牙塔。常帶著一股探索的膽氣和勇氣走進人群，見證上帝的話與上帝的靈如何相互配合工作。
            </p>
            <p className="text-gray-700 leading-relaxed">
              英國蘇格蘭神學博士，英國哥廷根大學哲學博士。曾任台灣神學院院長，現為台灣神學院基督教思想研究中心主任、台大哲學系兼任教授。
            </p>
            <div className="flex items-start gap-2 bg-indigo-50 p-3 rounded-lg">
              <Heart className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <p className="text-indigo-800 text-sm">「我們不該問我們對自己的信心有多少，而該問我們對上帝的道相信多少。」——林鴻信</p>
            </div>
            <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg">
              <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-amber-800 text-sm">主要著作：《神學人基本英文字彙》、《加爾文神學》、《覺醒中的自由》、《聖神論》、《系統神學》（上、下）、《后我神學》、《莫特曼神學》等多本著作。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
