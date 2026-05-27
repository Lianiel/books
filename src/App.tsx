import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import { useState, useEffect } from 'react';
import BookLayout from './components/BookLayout';
import { fetchBooks, fetchChapters, type Book as BookType, type Chapter } from './api/books_supabase';

// ========== TypeScript 型別定義 ==========

interface BookCardProps {
  number: number;
  title: string;
  author?: string;
  description?: string;
  chapters: number;
  to: string;
  color?: string;
}

export interface ChapterInfo {
  id: string;
  title: string;
  path: string;
}

// ========== 靜態章節備援資料 ==========
export const BOOK_TITLES: Record<string, string> = {
  book1: '立界線得自由',
  book2: '情感健康的門徒',
  book3: '向保羅學宣教',
  book4: '成為有感染力的基督徒',
  book5: '如何活出基督的樣式',
  book6: '列王記上',
  book7: '基要陪讀課程',
  book8: '靈性關懷與身心健康',
  book9: '三層天禱告',
  book10: '禱告的盾牌',
  book11: '從懷疑到相信',
  book12: '十架預言真奇妙',
  book13: '十字架跨越的智慧',
  book14: '活在聖靈中',
  book15: '誰需要神學？',
  book16: '拾級靈程三階',
  book17: '十架牧養學：從哥林多前書學習教會建造',
};

export const BOOK_CHAPTERS: Record<string, ChapterInfo[]> = {
  book1: [
    { id: 'home', title: '書本簡介', path: '/book1/home' },
    { id: 'definition', title: '界線的定義', path: '/book1/definition' },
    { id: 'development', title: '界線的發展', path: '/book1/development' },
    { id: 'myths', title: '界線的迷思', path: '/book1/myths' },
    { id: 'diagnosis', title: '界線問題診斷', path: '/book1/diagnosis' },
    { id: 'laws', title: '界線的法則', path: '/book1/laws' },
    { id: 'ch7', title: '第七章', path: '/book1/ch7' },
    { id: 'ch8', title: '第八章', path: '/book1/ch8' },
    { id: 'ch9', title: '第九章', path: '/book1/ch9' },
    { id: 'ch10', title: '第十章', path: '/book1/ch10' },
    { id: 'ch11', title: '第十一章', path: '/book1/ch11' },
    { id: 'ch12', title: '第十二章', path: '/book1/ch12' },
    { id: 'ch13', title: '第十三章', path: '/book1/ch13' },
    { id: 'ch14', title: '第十四章', path: '/book1/ch14' },
    { id: 'ch15', title: '第十五章', path: '/book1/ch15' },
    { id: 'ch16', title: '第十六章', path: '/book1/ch16' },
    { id: 'ch17', title: '第十七章', path: '/book1/ch17' },
  ],
  book2: [
    { id: 'chapter1', title: '第一章', path: '/book2/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book2/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book2/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book2/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book2/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book2/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book2/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book2/chapter8' },
  ],
  book3: [
    { id: 'chapter1', title: '第一章', path: '/book3/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book3/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book3/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book3/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book3/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book3/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book3/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book3/chapter8' },
  ],
  book4: [
    { id: 'chapter1', title: '第一章', path: '/book4/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book4/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book4/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book4/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book4/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book4/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book4/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book4/chapter8' },
    { id: 'chapter9', title: '第九章', path: '/book4/chapter9' },
    { id: 'chapter10', title: '第十章', path: '/book4/chapter10' },
    { id: 'chapter11', title: '第十一章', path: '/book4/chapter11' },
    { id: 'chapter12', title: '第十二章', path: '/book4/chapter12' },
    { id: 'chapter13', title: '第十三章', path: '/book4/chapter13' },
    { id: 'chapter14', title: '第十四章', path: '/book4/chapter14' },
    { id: 'chapter15', title: '第十五章', path: '/book4/chapter15' },
    { id: 'chapter16', title: '第十六章', path: '/book4/chapter16' },
  ],
  book5: [
    { id: 'chapter1', title: '第一章', path: '/book5/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book5/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book5/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book5/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book5/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book5/chapter6' },
  ],
  book6: [
    { id: 'chapter1', title: '第一章', path: '/book6/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book6/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book6/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book6/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book6/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book6/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book6/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book6/chapter8' },
  ],
  book7: [
    { id: 'chapter1', title: '第一章', path: '/book7/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book7/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book7/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book7/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book7/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book7/chapter6' },
  ],
  book8: [
    { id: 'chapter1', title: '第一章', path: '/book8/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book8/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book8/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book8/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book8/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book8/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book8/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book8/chapter8' },
    { id: 'chapter9', title: '第九章', path: '/book8/chapter9' },
    { id: 'chapter10', title: '第十章', path: '/book8/chapter10' },
    { id: 'chapter11', title: '第十一章', path: '/book8/chapter11' },
    { id: 'chapter12', title: '第十二章', path: '/book8/chapter12' },
  ],
  book9: [
    { id: 'intro', title: '導論', path: '/book9/intro' },
    { id: 'chapter1', title: '第一章', path: '/book9/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book9/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book9/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book9/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book9/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book9/chapter6' },
  ],
  book10: [
    { id: 'chapter1', title: '第一章', path: '/book10/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book10/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book10/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book10/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book10/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book10/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book10/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book10/chapter8' },
    { id: 'chapter9', title: '第九章', path: '/book10/chapter9' },
  ],
  book11: [
    { id: 'lesson1', title: '第一課', path: '/book11/lesson1' },
  ],
  book12: [
    { id: 'home', title: '書本簡介', path: '/book12/home' },
  ],
  book13: [
    { id: 'chapter1', title: '第一章', path: '/book13/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book13/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book13/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book13/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book13/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book13/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book13/chapter7' },
  ],
  book14: [
    { id: 'chapter1', title: '第一章', path: '/book14/chapter1' },
    { id: 'chapter2', title: '第二章', path: '/book14/chapter2' },
    { id: 'chapter3', title: '第三章', path: '/book14/chapter3' },
    { id: 'chapter4', title: '第四章', path: '/book14/chapter4' },
    { id: 'chapter5', title: '第五章', path: '/book14/chapter5' },
    { id: 'chapter6', title: '第六章', path: '/book14/chapter6' },
    { id: 'chapter7', title: '第七章', path: '/book14/chapter7' },
    { id: 'chapter8', title: '第八章', path: '/book14/chapter8' },
    { id: 'chapter9', title: '第九章', path: '/book14/chapter9' },
  ],
  book15: [
    { id: 'home', title: '書本簡介', path: '/book15/home' },
    { id: 'chapter1', title: '人人都是神學家', path: '/book15/chapter1' },
    { id: 'chapter2', title: '不是所有神學都一律平等', path: '/book15/chapter2' },
    { id: 'chapter3', title: '界定神學', path: '/book15/chapter3' },
    { id: 'chapter4', title: '為神學辯護', path: '/book15/chapter4' },
    { id: 'chapter5', title: '神學的任務和傳統', path: '/book15/chapter5' },
    { id: 'chapter6', title: '神學家的工具', path: '/book15/chapter6' },
    { id: 'chapter7', title: '建立神學的脈絡', path: '/book15/chapter7' },
    { id: 'chapter8', title: '神學生活化', path: '/book15/chapter8' },
    { id: 'chapter9', title: '神學研究入門', path: '/book15/chapter9' },
  ],
  book16: [
    { id: 'home', title: '書本簡介', path: '/book16/home' },
    { id: 'chapter1', title: '導言：心靈需要出口', path: '/book16/chapter1' },
    { id: 'chapter2', title: '一階：靈修方法初階', path: '/book16/chapter2' },
    { id: 'chapter3', title: '二階：日常生活中的靈修', path: '/book16/chapter3' },
    { id: 'chapter4', title: '三階：終末中與上帝親近', path: '/book16/chapter4' },
    { id: 'chapter5', title: '第四章：生命內裡的轉變', path: '/book16/chapter5' },
    { id: 'chapter6', title: '第五章：靈修觀歷史概覽', path: '/book16/chapter6' },
  ],
  book17: [
    { id: 'home', title: '書本簡介', path: '/book17/home' },
    { id: 'chapter1', title: '第1章 從神的角度看教會與恩賜（一1-9）', path: '/book17/chapter1' },
    { id: 'chapter2', title: '第2章 在十架陰影下合一（一10-31）', path: '/book17/chapter2' },
    { id: 'chapter3', title: '第3章 十字架的資訊與屬靈的智慧（二1-16）', path: '/book17/chapter3' },
    { id: 'chapter4', title: '第4章 教會與傳道人的關係（三1-23）', path: '/book17/chapter4' },
    { id: 'chapter5', title: '第5章 信徒與傳道人的關係（四1-21）', path: '/book17/chapter5' },
    { id: 'chapter6', title: '第6章 正視罪惡的嚴重性（五1-13）', path: '/book17/chapter6' },
    { id: 'chapter7', title: '第7章 真智慧與真自由（六1-20）', path: '/book17/chapter7' },
    { id: 'chapter8', title: '第8章 面對信仰與處境的張力（七1-40）', path: '/book17/chapter8' },
    { id: 'chapter9', title: '第9章 愛與理性（八1-13）', path: '/book17/chapter9' },
    { id: 'chapter10', title: '第10章 愛與捨己（九1-27）', path: '/book17/chapter10' },
    { id: 'chapter11', title: '第11章 從食物與神的關係看自由的底線（十1-十一1）', path: '/book17/chapter11' },
    { id: 'chapter12', title: '第12章 敬拜神，尊重他人（十一2-34）', path: '/book17/chapter12' },
    { id: 'chapter13', title: '第13章 合一與多元（十二1-31）', path: '/book17/chapter13' },
    { id: 'chapter14', title: '第14章 追求成就或追求愛人（十三1-13）', path: '/book17/chapter14' },
    { id: 'chapter15', title: '第15章 造就自己或造就他人（十四1-40）', path: '/book17/chapter15' },
    { id: 'chapter16', title: '第16章 帶著復活的盼望而活著（十五1-58）', path: '/book17/chapter16' },
    { id: 'chapter17', title: '第17章 成為有愛心的群體（十六1-24）', path: '/book17/chapter17' },
  ],
};

// ========== 靜態首頁備援資料 ==========
const STATIC_BOOKS = [
  { book_id: 'book1', title: '立界線得自由', author: 'Henry Cloud & John Townsend', description: '學習設立健康的人際界線，從家庭、工作、友誼到靈性生活，活出自由與責任。', chapters_count: 17 },
  { book_id: 'book2', title: '情感健康的門徒', author: 'Peter Scazzero', description: '整合情感健康與靈命深度，建立真實、持久的門徒訓練生命。', chapters_count: 8 },
  { book_id: 'book3', title: '向保羅學宣教', author: '', description: '從保羅的宣教旅程和書信，學習跨文化傳福音的原則與實踐。', chapters_count: 8 },
  { book_id: 'book4', title: '成為有感染力的基督徒', author: '', description: '探討基督徒如何在生活中真實地活出信仰，影響身邊的人。', chapters_count: 16 },
  { book_id: 'book5', title: '如何活出基督的樣式', author: '', description: '深入思考靈命成長的核心議題，活出與基督相符的生命。', chapters_count: 6 },
  { book_id: 'book6', title: '列王記上 從歷史中看見神的啟示', author: '', description: '透過列王記上的歷史敘述，發現神在人類歷史中的主權與啟示。', chapters_count: 8 },
  { book_id: 'book7', title: '基要陪讀課程', author: '', description: '系統性的基要真理學習，幫助信徒建立扎實的信仰基礎。', chapters_count: 6 },
  { book_id: 'book8', title: '靈性關懷與身心健康', author: '', description: '探討靈性照顧與身心健康的整合，提供全人關懷的框架。', chapters_count: 12 },
  { book_id: 'book9', title: '三層天禱告', author: '', description: '深入認識禱告的層次與力量，學習突破性的禱告生活。', chapters_count: 7 },
  { book_id: 'book10', title: '禱告的盾牌', author: '', description: '學習如何以禱告抵擋屬靈攻擊，活出得勝的基督徒生命。', chapters_count: 9 },
  { book_id: 'book11', title: '從懷疑到相信', author: '', description: '以理性與信仰對話，幫助懷疑者找到相信的堅實根基。', chapters_count: 1 },
  { book_id: 'book12', title: '十架預言真奇妙', author: '', description: '探索舊約中關於基督受難的預言，見證聖經的完整與奇妙。', chapters_count: 1 },
  { book_id: 'book13', title: '十字架跨越的智慧', author: '', description: '從十字架的角度理解人生智慧，學習以基督的心志面對人生。', chapters_count: 7 },
  { book_id: 'book14', title: '活在聖靈中', author: '巴刻 (J. I. Packer)', description: '深入探討聖靈的位格、工作與基督徒生命，認識與聖靈同行的生活。', chapters_count: 9 },
  { book_id: 'book15', title: '誰需要神學？', author: '史丹尼·格蘭茨 & 羅傑·奧遜', description: '破除迷思，幫助每位信徒認識神學的必要性，成為更負責任的神學家。', chapters_count: 10 },
  { book_id: 'book16', title: '拾級靈程三階', author: '孫毅', description: '帶領讀者拾級而上，領略內室、日常生活及終末的靈程三階，深化靈修操練。', chapters_count: 7 },
  { book_id: 'book17', title: '十架牧養學：從哥林多前書學習教會建造', author: '陳濟民', description: '從哥林多前書探討十架牧養智慧，學習建造合神心意的教會群體。', chapters_count: 18 },
];

const colorMap: Record<number, string> = {
  1: 'from-blue-500 to-cyan-600',
  2: 'from-green-500 to-emerald-600',
  3: 'from-purple-500 to-pink-600',
  4: 'from-orange-500 to-red-600',
  5: 'from-teal-500 to-cyan-600',
  6: 'from-indigo-500 to-purple-600',
  7: 'from-amber-500 to-orange-600',
  8: 'from-rose-500 to-pink-600',
  9: 'from-violet-500 to-purple-600',
  10: 'from-purple-500 to-pink-600',
  11: 'from-indigo-500 to-purple-600',
  12: 'from-amber-500 to-orange-600',
  13: 'from-teal-500 to-cyan-600',
  14: 'from-purple-500 to-pink-600',
  15: 'from-indigo-600 to-slate-700',
  16: 'from-violet-600 to-purple-700',
  17: 'from-amber-600 to-orange-700',
};

// ========== 導入 Book 1 章節 ==========
import Book1Home from './components/book1/SectionHome';
import Book1Definition from './components/book1/SectionDefinition';
import Book1Development from './components/book1/SectionDevelopment';
import Book1Myths from './components/book1/SectionMyths';
import Book1Diagnosis from './components/book1/SectionDiagnosis';
import Book1Laws from './components/book1/SectionLaws';
import Book1Ch7 from './components/book1/SectionCh7';
import Book1Ch8 from './components/book1/SectionCh8';
import Book1Ch9 from './components/book1/SectionCh9';
import Book1Ch10 from './components/book1/SectionCh10';
import Book1Ch11 from './components/book1/SectionCh11';
import Book1Ch12 from './components/book1/SectionCh12';
import Book1Ch13 from './components/book1/SectionCh13';
import Book1Ch14 from './components/book1/SectionCh14';
import Book1Ch15 from './components/book1/SectionCh15';
import Book1Ch16 from './components/book1/SectionCh16';
import Book1Ch17 from './components/book1/SectionCh17';

// ========== 導入 Book 2 章節 ==========
import Book2Ch1 from './components/book2/Chapter1';
import Book2Ch2 from './components/book2/Chapter2';
import Book2Ch3 from './components/book2/Chapter3';
import Book2Ch4 from './components/book2/Chapter4';
import Book2Ch5 from './components/book2/Chapter5';
import Book2Ch6 from './components/book2/Chapter6';
import Book2Ch7 from './components/book2/Chapter7';
import Book2Ch8 from './components/book2/Chapter8';

// ========== 導入 Book 3 章節 ==========
import Book3Ch1 from './components/book3/Chapter1';
import Book3Ch2 from './components/book3/Chapter2';
import Book3Ch3 from './components/book3/Chapter3';
import Book3Ch4 from './components/book3/Chapter4';
import Book3Ch5 from './components/book3/Chapter5';
import Book3Ch6 from './components/book3/Chapter6';
import Book3Ch7 from './components/book3/Chapter7';
import Book3Ch8 from './components/book3/Chapter8';

// ========== 導入 Book 4 章節 ==========
import Book4Ch1 from './components/book4/Chapter1';
import Book4Ch2 from './components/book4/Chapter2';
import Book4Ch3 from './components/book4/Chapter3';
import Book4Ch4 from './components/book4/Chapter4';
import Book4Ch5 from './components/book4/Chapter5';
import Book4Ch6 from './components/book4/Chapter6';
import Book4Ch7 from './components/book4/Chapter7';
import Book4Ch8 from './components/book4/Chapter8';
import Book4Ch9 from './components/book4/Chapter9';
import Book4Ch10 from './components/book4/Chapter10';
import Book4Ch11 from './components/book4/Chapter11';
import Book4Ch12 from './components/book4/Chapter12';
import Book4Ch13 from './components/book4/Chapter13';
import Book4Ch14 from './components/book4/Chapter14';
import Book4Ch15 from './components/book4/Chapter15';
import Book4Ch16 from './components/book4/Chapter16';

// ========== 導入 Book 5 章節 ==========
import Book5Ch1 from './components/book5/Chapter1';
import Book5Ch2 from './components/book5/Chapter2';
import Book5Ch3 from './components/book5/Chapter3';
import Book5Ch4 from './components/book5/Chapter4';
import Book5Ch5 from './components/book5/Chapter5';
import Book5Ch6 from './components/book5/Chapter6';

// ========== 導入 Book 6 章節 ==========
import Book6Ch1 from './components/book6/Chapter1';
import Book6Ch2 from './components/book6/Chapter2';
import Book6Ch3 from './components/book6/Chapter3';
import Book6Ch4 from './components/book6/Chapter4';
import Book6Ch5 from './components/book6/Chapter5';
import Book6Ch6 from './components/book6/Chapter6';
import Book6Ch7 from './components/book6/Chapter7';
import Book6Ch8 from './components/book6/Chapter8';

// ========== 導入 Book 7 章節 ==========
import Book7Ch1 from './components/book7/Chapter1';
import Book7Ch2 from './components/book7/Chapter2';
import Book7Ch3 from './components/book7/Chapter3';
import Book7Ch4 from './components/book7/Chapter4';
import Book7Ch5 from './components/book7/Chapter5';
import Book7Ch6 from './components/book7/Chapter6';

// ========== 導入 Book 8 章節 ==========
import Book8Ch1 from './components/book8/Chapter1';
import Book8Ch2 from './components/book8/Chapter2';
import Book8Ch3 from './components/book8/Chapter3';
import Book8Ch4 from './components/book8/Chapter4';
import Book8Ch5 from './components/book8/Chapter5';
import Book8Ch6 from './components/book8/Chapter6';
import Book8Ch7 from './components/book8/Chapter7';
import Book8Ch8 from './components/book8/Chapter8';
import Book8Ch9 from './components/book8/Chapter9';
import Book8Ch10 from './components/book8/Chapter10';
import Book8Ch11 from './components/book8/Chapter11';
import Book8Ch12 from './components/book8/Chapter12';

// ========== 導入 Book 9 章節 ==========
import Book9Intro from './components/book9/Intro';
import Book9Ch1 from './components/book9/Chapter1';
import Book9Ch2 from './components/book9/Chapter2';
import Book9Ch3 from './components/book9/Chapter3';
import Book9Ch4 from './components/book9/Chapter4';
import Book9Ch5 from './components/book9/Chapter5';
import Book9Ch6 from './components/book9/Chapter6';

// ========== 導入 Book 10 章節 ==========
import Book10Ch1 from './components/book10/Chapter1';
import Book10Ch2 from './components/book10/Chapter2';
import Book10Ch3 from './components/book10/Chapter3';
import Book10Ch4 from './components/book10/Chapter4';
import Book10Ch5 from './components/book10/Chapter5';
import Book10Ch6 from './components/book10/Chapter6';
import Book10Ch7 from './components/book10/Chapter7';
import Book10Ch8 from './components/book10/Chapter8';
import Book10Ch9 from './components/book10/Chapter9';

// ========== 導入 Book 11 章節 ==========
import Book11Lesson1 from './components/book11/Lesson1';

// ========== 導入 Book 12 章節 ==========
import Book12Home from './components/book12/Book12Home';

// ========== 導入 Book 13 章節 ==========
import Book13Ch1 from './components/book13/Chapter1';
import Book13Ch2 from './components/book13/Chapter2';
import Book13Ch3 from './components/book13/Chapter3';
import Book13Ch4 from './components/book13/Chapter4';
import Book13Ch5 from './components/book13/Chapter5';
import Book13Ch6 from './components/book13/Chapter6';
import Book13Ch7 from './components/book13/Chapter7';

// ========== 導入 Book 14 章節 ==========
import Book14Ch1 from './components/book14/Book14Ch1';
import Book14Ch2 from './components/book14/Book14Ch2';
import Book14Ch3 from './components/book14/Book14Ch3';
import Book14Ch4 from './components/book14/Book14Ch4';
import Book14Ch5 from './components/book14/Book14Ch5';
import Book14Ch6 from './components/book14/Book14Ch6';
import Book14Ch7 from './components/book14/Book14Ch7';
import Book14Ch8 from './components/book14/Book14Ch8';
import Book14Ch9 from './components/book14/Book14Ch9';

// ========== 導入 Book 15 章節 ==========
import Book15Home from './components/book15/Book15Home';
import Book15Ch1 from './components/book15/Book15Ch1';
import Book15Ch2 from './components/book15/Book15Ch2';
import Book15Ch3 from './components/book15/Book15Ch3';
import Book15Ch4 from './components/book15/Book15Ch4';
import Book15Ch5 from './components/book15/Book15Ch5';
import Book15Ch6 from './components/book15/Book15Ch6';
import Book15Ch7 from './components/book15/Book15Ch7';
import Book15Ch8 from './components/book15/Book15Ch8';
import Book15Ch9 from './components/book15/Book15Ch9';

// ========== 導入 Book 16 章節 ==========
import Book16Home from './components/book16/Book16Home';

import Book16Ch1 from './components/book16/Book16Ch1';
import Book16Ch2 from './components/book16/Book16Ch2';
import Book16Ch3 from './components/book16/Book16Ch3';
import Book16Ch4 from './components/book16/Book16Ch4';
import Book16Ch5 from './components/book16/Book16Ch5';
import Book16Ch6 from './components/book16/Book16Ch6';

// ========== 導入 Book 17 章節 ==========
import Book17Home from './components/book17/Book17Home';
import Book17Ch1 from './components/book17/Book17Ch1';
import Book17Ch2 from './components/book17/Book17Ch2';
import Book17Ch3 from './components/book17/Book17Ch3';
import Book17Ch4 from './components/book17/Book17Ch4';
import Book17Ch5 from './components/book17/Book17Ch5';
import Book17Ch6 from './components/book17/Book17Ch6';
import Book17Ch7 from './components/book17/Book17Ch7';
import Book17Ch8 from './components/book17/Book17Ch8';
import Book17Ch9 from './components/book17/Book17Ch9';
import Book17Ch10 from './components/book17/Book17Ch10';
import Book17Ch11 from './components/book17/Book17Ch11';
import Book17Ch12 from './components/book17/Book17Ch12';
import Book17Ch13 from './components/book17/Book17Ch13';
import Book17Ch14 from './components/book17/Book17Ch14';
import Book17Ch15 from './components/book17/Book17Ch15';
import Book17Ch16 from './components/book17/Book17Ch16';
import Book17Ch17 from './components/book17/Book17Ch17';

// BookCard 組件
const BookCard: React.FC<BookCardProps> = ({
  number,
  title,
  to,
  color = "from-blue-500 to-purple-600"
}) => {
  return (
    <Link to={to} className="block">
      <div className={`bg-gradient-to-r ${color} rounded-lg px-3 py-2 text-white shadow hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center gap-2`}>
        <span className="bg-white/30 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">{number}</span>
        <span className="text-xl font-medium leading-tight">{title}</span>
      </div>
    </Link>
  );
};

const App: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [bookChapters, setBookChapters] = useState<Record<string, Chapter[]>>({});
  const [loading, setLoading] = useState(true);
  const [supabaseOk, setSupabaseOk] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const booksData = await fetchBooks();
        if (booksData.length > 0) {
          setBooks(booksData);
          const chaptersMap: Record<string, Chapter[]> = {};
          for (const book of booksData) {
            const chapters = await fetchChapters(book.book_id);
            chaptersMap[book.book_id] = chapters;
          }
          setBookChapters(chaptersMap);
          setSupabaseOk(true);
        }
      } catch {
        // Supabase 連不上，使用靜態備援資料
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // 優先使用 Supabase 章節資料，連不上時用靜態備援
  const getChaptersForBook = (bookId: string): ChapterInfo[] => {
    const supabaseChapters = bookChapters[bookId];
    if (supabaseChapters && supabaseChapters.length > 0) {
      return supabaseChapters.map(ch => ({
        id: ch.chapter_id,
        title: ch.title,
        path: `/${bookId}/${ch.chapter_id}`
      }));
    }
    return BOOK_CHAPTERS[bookId] || [];
  };

  // 首頁顯示的書籍：Supabase 有資料用 Supabase，否則用靜態備援
  const displayBooks = supabaseOk ? books : STATIC_BOOKS;

  return (
    <Router>
      <Routes>
        {/* ========== Book 1 - 立界線得自由 ========== */}
        <Route path="/book1/home" element={<BookLayout bookId="book1" chapter="home" chapters={getChaptersForBook('book1')}><Book1Home /></BookLayout>} />
        <Route path="/book1/definition" element={<BookLayout bookId="book1" chapter="definition" chapters={getChaptersForBook('book1')}><Book1Definition /></BookLayout>} />
        <Route path="/book1/development" element={<BookLayout bookId="book1" chapter="development" chapters={getChaptersForBook('book1')}><Book1Development /></BookLayout>} />
        <Route path="/book1/myths" element={<BookLayout bookId="book1" chapter="myths" chapters={getChaptersForBook('book1')}><Book1Myths /></BookLayout>} />
        <Route path="/book1/diagnosis" element={<BookLayout bookId="book1" chapter="diagnosis" chapters={getChaptersForBook('book1')}><Book1Diagnosis /></BookLayout>} />
        <Route path="/book1/laws" element={<BookLayout bookId="book1" chapter="laws" chapters={getChaptersForBook('book1')}><Book1Laws /></BookLayout>} />
        <Route path="/book1/ch7" element={<BookLayout bookId="book1" chapter="ch7" chapters={getChaptersForBook('book1')}><Book1Ch7 /></BookLayout>} />
        <Route path="/book1/ch8" element={<BookLayout bookId="book1" chapter="ch8" chapters={getChaptersForBook('book1')}><Book1Ch8 /></BookLayout>} />
        <Route path="/book1/ch9" element={<BookLayout bookId="book1" chapter="ch9" chapters={getChaptersForBook('book1')}><Book1Ch9 /></BookLayout>} />
        <Route path="/book1/ch10" element={<BookLayout bookId="book1" chapter="ch10" chapters={getChaptersForBook('book1')}><Book1Ch10 /></BookLayout>} />
        <Route path="/book1/ch11" element={<BookLayout bookId="book1" chapter="ch11" chapters={getChaptersForBook('book1')}><Book1Ch11 /></BookLayout>} />
        <Route path="/book1/ch12" element={<BookLayout bookId="book1" chapter="ch12" chapters={getChaptersForBook('book1')}><Book1Ch12 /></BookLayout>} />
        <Route path="/book1/ch13" element={<BookLayout bookId="book1" chapter="ch13" chapters={getChaptersForBook('book1')}><Book1Ch13 /></BookLayout>} />
        <Route path="/book1/ch14" element={<BookLayout bookId="book1" chapter="ch14" chapters={getChaptersForBook('book1')}><Book1Ch14 /></BookLayout>} />
        <Route path="/book1/ch15" element={<BookLayout bookId="book1" chapter="ch15" chapters={getChaptersForBook('book1')}><Book1Ch15 /></BookLayout>} />
        <Route path="/book1/ch16" element={<BookLayout bookId="book1" chapter="ch16" chapters={getChaptersForBook('book1')}><Book1Ch16 /></BookLayout>} />
        <Route path="/book1/ch17" element={<BookLayout bookId="book1" chapter="ch17" chapters={getChaptersForBook('book1')}><Book1Ch17 /></BookLayout>} />
        <Route path="/book1" element={<BookLayout bookId="book1" chapter="home" chapters={getChaptersForBook('book1')}><Book1Home /></BookLayout>} />

        {/* ========== Book 2 - 情感健康的門徒 ========== */}
        <Route path="/book2/chapter1" element={<BookLayout bookId="book2" chapter="chapter1" chapters={getChaptersForBook('book2')}><Book2Ch1 expandAll /></BookLayout>} />
        <Route path="/book2/chapter2" element={<BookLayout bookId="book2" chapter="chapter2" chapters={getChaptersForBook('book2')}><Book2Ch2 expandAll /></BookLayout>} />
        <Route path="/book2/chapter3" element={<BookLayout bookId="book2" chapter="chapter3" chapters={getChaptersForBook('book2')}><Book2Ch3 expandAll /></BookLayout>} />
        <Route path="/book2/chapter4" element={<BookLayout bookId="book2" chapter="chapter4" chapters={getChaptersForBook('book2')}><Book2Ch4 expandAll /></BookLayout>} />
        <Route path="/book2/chapter5" element={<BookLayout bookId="book2" chapter="chapter5" chapters={getChaptersForBook('book2')}><Book2Ch5 expandAll /></BookLayout>} />
        <Route path="/book2/chapter6" element={<BookLayout bookId="book2" chapter="chapter6" chapters={getChaptersForBook('book2')}><Book2Ch6 expandAll /></BookLayout>} />
        <Route path="/book2/chapter7" element={<BookLayout bookId="book2" chapter="chapter7" chapters={getChaptersForBook('book2')}><Book2Ch7 expandAll /></BookLayout>} />
        <Route path="/book2/chapter8" element={<BookLayout bookId="book2" chapter="chapter8" chapters={getChaptersForBook('book2')}><Book2Ch8 expandAll /></BookLayout>} />

        {/* ========== Book 3 - 向保羅學宣教 ========== */}
        <Route path="/book3/chapter1" element={<BookLayout bookId="book3" chapter="chapter1" chapters={getChaptersForBook('book3')}><Book3Ch1 /></BookLayout>} />
        <Route path="/book3/chapter2" element={<BookLayout bookId="book3" chapter="chapter2" chapters={getChaptersForBook('book3')}><Book3Ch2 /></BookLayout>} />
        <Route path="/book3/chapter3" element={<BookLayout bookId="book3" chapter="chapter3" chapters={getChaptersForBook('book3')}><Book3Ch3 /></BookLayout>} />
        <Route path="/book3/chapter4" element={<BookLayout bookId="book3" chapter="chapter4" chapters={getChaptersForBook('book3')}><Book3Ch4 /></BookLayout>} />
        <Route path="/book3/chapter5" element={<BookLayout bookId="book3" chapter="chapter5" chapters={getChaptersForBook('book3')}><Book3Ch5 /></BookLayout>} />
        <Route path="/book3/chapter6" element={<BookLayout bookId="book3" chapter="chapter6" chapters={getChaptersForBook('book3')}><Book3Ch6 /></BookLayout>} />
        <Route path="/book3/chapter7" element={<BookLayout bookId="book3" chapter="chapter7" chapters={getChaptersForBook('book3')}><Book3Ch7 /></BookLayout>} />
        <Route path="/book3/chapter8" element={<BookLayout bookId="book3" chapter="chapter8" chapters={getChaptersForBook('book3')}><Book3Ch8 /></BookLayout>} />
        <Route path="/book3" element={<BookLayout bookId="book3" chapter="chapter1" chapters={getChaptersForBook('book3')}><Book3Ch1 /></BookLayout>} />

        {/* ========== Book 4 - 成為有感染力的基督徒 ========== */}
        <Route path="/book4/chapter1" element={<BookLayout bookId="book4" chapter="chapter1" chapters={getChaptersForBook('book4')}><Book4Ch1 /></BookLayout>} />
        <Route path="/book4/chapter2" element={<BookLayout bookId="book4" chapter="chapter2" chapters={getChaptersForBook('book4')}><Book4Ch2 /></BookLayout>} />
        <Route path="/book4/chapter3" element={<BookLayout bookId="book4" chapter="chapter3" chapters={getChaptersForBook('book4')}><Book4Ch3 /></BookLayout>} />
        <Route path="/book4/chapter4" element={<BookLayout bookId="book4" chapter="chapter4" chapters={getChaptersForBook('book4')}><Book4Ch4 /></BookLayout>} />
        <Route path="/book4/chapter5" element={<BookLayout bookId="book4" chapter="chapter5" chapters={getChaptersForBook('book4')}><Book4Ch5 /></BookLayout>} />
        <Route path="/book4/chapter6" element={<BookLayout bookId="book4" chapter="chapter6" chapters={getChaptersForBook('book4')}><Book4Ch6 /></BookLayout>} />
        <Route path="/book4/chapter7" element={<BookLayout bookId="book4" chapter="chapter7" chapters={getChaptersForBook('book4')}><Book4Ch7 /></BookLayout>} />
        <Route path="/book4/chapter8" element={<BookLayout bookId="book4" chapter="chapter8" chapters={getChaptersForBook('book4')}><Book4Ch8 /></BookLayout>} />
        <Route path="/book4/chapter9" element={<BookLayout bookId="book4" chapter="chapter9" chapters={getChaptersForBook('book4')}><Book4Ch9 /></BookLayout>} />
        <Route path="/book4/chapter10" element={<BookLayout bookId="book4" chapter="chapter10" chapters={getChaptersForBook('book4')}><Book4Ch10 /></BookLayout>} />
        <Route path="/book4/chapter11" element={<BookLayout bookId="book4" chapter="chapter11" chapters={getChaptersForBook('book4')}><Book4Ch11 /></BookLayout>} />
        <Route path="/book4/chapter12" element={<BookLayout bookId="book4" chapter="chapter12" chapters={getChaptersForBook('book4')}><Book4Ch12 /></BookLayout>} />
        <Route path="/book4/chapter13" element={<BookLayout bookId="book4" chapter="chapter13" chapters={getChaptersForBook('book4')}><Book4Ch13 /></BookLayout>} />
        <Route path="/book4/chapter14" element={<BookLayout bookId="book4" chapter="chapter14" chapters={getChaptersForBook('book4')}><Book4Ch14 /></BookLayout>} />
        <Route path="/book4/chapter15" element={<BookLayout bookId="book4" chapter="chapter15" chapters={getChaptersForBook('book4')}><Book4Ch15 /></BookLayout>} />
        <Route path="/book4/chapter16" element={<BookLayout bookId="book4" chapter="chapter16" chapters={getChaptersForBook('book4')}><Book4Ch16 /></BookLayout>} />
        <Route path="/book4" element={<BookLayout bookId="book4" chapter="chapter1" chapters={getChaptersForBook('book4')}><Book4Ch1 /></BookLayout>} />

        {/* ========== Book 5 - 如何活出基督的樣式 ========== */}
        <Route path="/book5/chapter1" element={<BookLayout bookId="book5" chapter="chapter1" chapters={getChaptersForBook('book5')}><Book5Ch1 /></BookLayout>} />
        <Route path="/book5/chapter2" element={<BookLayout bookId="book5" chapter="chapter2" chapters={getChaptersForBook('book5')}><Book5Ch2 /></BookLayout>} />
        <Route path="/book5/chapter3" element={<BookLayout bookId="book5" chapter="chapter3" chapters={getChaptersForBook('book5')}><Book5Ch3 /></BookLayout>} />
        <Route path="/book5/chapter4" element={<BookLayout bookId="book5" chapter="chapter4" chapters={getChaptersForBook('book5')}><Book5Ch4 /></BookLayout>} />
        <Route path="/book5/chapter5" element={<BookLayout bookId="book5" chapter="chapter5" chapters={getChaptersForBook('book5')}><Book5Ch5 /></BookLayout>} />
        <Route path="/book5/chapter6" element={<BookLayout bookId="book5" chapter="chapter6" chapters={getChaptersForBook('book5')}><Book5Ch6 /></BookLayout>} />
        <Route path="/book5" element={<BookLayout bookId="book5" chapter="chapter1" chapters={getChaptersForBook('book5')}><Book5Ch1 /></BookLayout>} />

        {/* ========== Book 6 - 列王記上 ========== */}
        <Route path="/book6/chapter1" element={<BookLayout bookId="book6" chapter="chapter1" chapters={getChaptersForBook('book6')}><Book6Ch1 /></BookLayout>} />
        <Route path="/book6/chapter2" element={<BookLayout bookId="book6" chapter="chapter2" chapters={getChaptersForBook('book6')}><Book6Ch2 /></BookLayout>} />
        <Route path="/book6/chapter3" element={<BookLayout bookId="book6" chapter="chapter3" chapters={getChaptersForBook('book6')}><Book6Ch3 /></BookLayout>} />
        <Route path="/book6/chapter4" element={<BookLayout bookId="book6" chapter="chapter4" chapters={getChaptersForBook('book6')}><Book6Ch4 /></BookLayout>} />
        <Route path="/book6/chapter5" element={<BookLayout bookId="book6" chapter="chapter5" chapters={getChaptersForBook('book6')}><Book6Ch5 /></BookLayout>} />
        <Route path="/book6/chapter6" element={<BookLayout bookId="book6" chapter="chapter6" chapters={getChaptersForBook('book6')}><Book6Ch6 /></BookLayout>} />
        <Route path="/book6/chapter7" element={<BookLayout bookId="book6" chapter="chapter7" chapters={getChaptersForBook('book6')}><Book6Ch7 /></BookLayout>} />
        <Route path="/book6/chapter8" element={<BookLayout bookId="book6" chapter="chapter8" chapters={getChaptersForBook('book6')}><Book6Ch8 /></BookLayout>} />
        <Route path="/book6" element={<BookLayout bookId="book6" chapter="chapter1" chapters={getChaptersForBook('book6')}><Book6Ch1 /></BookLayout>} />

        {/* ========== Book 7 - 基要陪讀課程 ========== */}
        <Route path="/book7/chapter1" element={<BookLayout bookId="book7" chapter="chapter1" chapters={getChaptersForBook('book7')}><Book7Ch1 /></BookLayout>} />
        <Route path="/book7/chapter2" element={<BookLayout bookId="book7" chapter="chapter2" chapters={getChaptersForBook('book7')}><Book7Ch2 /></BookLayout>} />
        <Route path="/book7/chapter3" element={<BookLayout bookId="book7" chapter="chapter3" chapters={getChaptersForBook('book7')}><Book7Ch3 /></BookLayout>} />
        <Route path="/book7/chapter4" element={<BookLayout bookId="book7" chapter="chapter4" chapters={getChaptersForBook('book7')}><Book7Ch4 /></BookLayout>} />
        <Route path="/book7/chapter5" element={<BookLayout bookId="book7" chapter="chapter5" chapters={getChaptersForBook('book7')}><Book7Ch5 /></BookLayout>} />
        <Route path="/book7/chapter6" element={<BookLayout bookId="book7" chapter="chapter6" chapters={getChaptersForBook('book7')}><Book7Ch6 /></BookLayout>} />
        <Route path="/book7" element={<BookLayout bookId="book7" chapter="chapter1" chapters={getChaptersForBook('book7')}><Book7Ch1 /></BookLayout>} />

        {/* ========== Book 8 - 靈性關懷與身心健康 ========== */}
        <Route path="/book8/chapter1" element={<BookLayout bookId="book8" chapter="chapter1" chapters={getChaptersForBook('book8')}><Book8Ch1 /></BookLayout>} />
        <Route path="/book8/chapter2" element={<BookLayout bookId="book8" chapter="chapter2" chapters={getChaptersForBook('book8')}><Book8Ch2 /></BookLayout>} />
        <Route path="/book8/chapter3" element={<BookLayout bookId="book8" chapter="chapter3" chapters={getChaptersForBook('book8')}><Book8Ch3 /></BookLayout>} />
        <Route path="/book8/chapter4" element={<BookLayout bookId="book8" chapter="chapter4" chapters={getChaptersForBook('book8')}><Book8Ch4 /></BookLayout>} />
        <Route path="/book8/chapter5" element={<BookLayout bookId="book8" chapter="chapter5" chapters={getChaptersForBook('book8')}><Book8Ch5 /></BookLayout>} />
        <Route path="/book8/chapter6" element={<BookLayout bookId="book8" chapter="chapter6" chapters={getChaptersForBook('book8')}><Book8Ch6 /></BookLayout>} />
        <Route path="/book8/chapter7" element={<BookLayout bookId="book8" chapter="chapter7" chapters={getChaptersForBook('book8')}><Book8Ch7 /></BookLayout>} />
        <Route path="/book8/chapter8" element={<BookLayout bookId="book8" chapter="chapter8" chapters={getChaptersForBook('book8')}><Book8Ch8 /></BookLayout>} />
        <Route path="/book8/chapter9" element={<BookLayout bookId="book8" chapter="chapter9" chapters={getChaptersForBook('book8')}><Book8Ch9 /></BookLayout>} />
        <Route path="/book8/chapter10" element={<BookLayout bookId="book8" chapter="chapter10" chapters={getChaptersForBook('book8')}><Book8Ch10 /></BookLayout>} />
        <Route path="/book8/chapter11" element={<BookLayout bookId="book8" chapter="chapter11" chapters={getChaptersForBook('book8')}><Book8Ch11 /></BookLayout>} />
        <Route path="/book8/chapter12" element={<BookLayout bookId="book8" chapter="chapter12" chapters={getChaptersForBook('book8')}><Book8Ch12 /></BookLayout>} />
        <Route path="/book8" element={<BookLayout bookId="book8" chapter="chapter1" chapters={getChaptersForBook('book8')}><Book8Ch1 /></BookLayout>} />

        {/* ========== Book 9 - 三層天禱告 ========== */}
        <Route path="/book9/intro" element={<BookLayout bookId="book9" chapter="intro" chapters={getChaptersForBook('book9')}><Book9Intro /></BookLayout>} />
        <Route path="/book9/chapter1" element={<BookLayout bookId="book9" chapter="chapter1" chapters={getChaptersForBook('book9')}><Book9Ch1 /></BookLayout>} />
        <Route path="/book9/chapter2" element={<BookLayout bookId="book9" chapter="chapter2" chapters={getChaptersForBook('book9')}><Book9Ch2 /></BookLayout>} />
        <Route path="/book9/chapter3" element={<BookLayout bookId="book9" chapter="chapter3" chapters={getChaptersForBook('book9')}><Book9Ch3 /></BookLayout>} />
        <Route path="/book9/chapter4" element={<BookLayout bookId="book9" chapter="chapter4" chapters={getChaptersForBook('book9')}><Book9Ch4 /></BookLayout>} />
        <Route path="/book9/chapter5" element={<BookLayout bookId="book9" chapter="chapter5" chapters={getChaptersForBook('book9')}><Book9Ch5 /></BookLayout>} />
        <Route path="/book9/chapter6" element={<BookLayout bookId="book9" chapter="chapter6" chapters={getChaptersForBook('book9')}><Book9Ch6 /></BookLayout>} />
        <Route path="/book9" element={<BookLayout bookId="book9" chapter="intro" chapters={getChaptersForBook('book9')}><Book9Intro /></BookLayout>} />

        {/* ========== Book 10 - 禱告的盾牌 ========== */}
        <Route path="/book10/chapter1" element={<BookLayout bookId="book10" chapter="chapter1" chapters={getChaptersForBook('book10')}><Book10Ch1 /></BookLayout>} />
        <Route path="/book10/chapter2" element={<BookLayout bookId="book10" chapter="chapter2" chapters={getChaptersForBook('book10')}><Book10Ch2 /></BookLayout>} />
        <Route path="/book10/chapter3" element={<BookLayout bookId="book10" chapter="chapter3" chapters={getChaptersForBook('book10')}><Book10Ch3 /></BookLayout>} />
        <Route path="/book10/chapter4" element={<BookLayout bookId="book10" chapter="chapter4" chapters={getChaptersForBook('book10')}><Book10Ch4 /></BookLayout>} />
        <Route path="/book10/chapter5" element={<BookLayout bookId="book10" chapter="chapter5" chapters={getChaptersForBook('book10')}><Book10Ch5 /></BookLayout>} />
        <Route path="/book10/chapter6" element={<BookLayout bookId="book10" chapter="chapter6" chapters={getChaptersForBook('book10')}><Book10Ch6 /></BookLayout>} />
        <Route path="/book10/chapter7" element={<BookLayout bookId="book10" chapter="chapter7" chapters={getChaptersForBook('book10')}><Book10Ch7 /></BookLayout>} />
        <Route path="/book10/chapter8" element={<BookLayout bookId="book10" chapter="chapter8" chapters={getChaptersForBook('book10')}><Book10Ch8 /></BookLayout>} />
        <Route path="/book10/chapter9" element={<BookLayout bookId="book10" chapter="chapter9" chapters={getChaptersForBook('book10')}><Book10Ch9 /></BookLayout>} />

        {/* ========== Book 11 - 從懷疑到相信 ========== */}
        <Route path="/book11/lesson1" element={<BookLayout bookId="book11" chapter="lesson1" chapters={getChaptersForBook('book11')}><Book11Lesson1 /></BookLayout>} />

        {/* ========== Book 12 - 十架預言真奇妙 ========== */}
        <Route path="/book12/home" element={<BookLayout bookId="book12" chapter="home" chapters={getChaptersForBook('book12')}><Book12Home /></BookLayout>} />
        <Route path="/book/12" element={<BookLayout bookId="book12" chapter="home" chapters={getChaptersForBook('book12')}><Book12Home /></BookLayout>} />

        {/* ========== Book 13 - 十字架跨越的智慧 ========== */}
        <Route path="/book13/chapter1" element={<BookLayout bookId="book13" chapter="chapter1" chapters={getChaptersForBook('book13')}><Book13Ch1 /></BookLayout>} />
        <Route path="/book13/chapter2" element={<BookLayout bookId="book13" chapter="chapter2" chapters={getChaptersForBook('book13')}><Book13Ch2 /></BookLayout>} />
        <Route path="/book13/chapter3" element={<BookLayout bookId="book13" chapter="chapter3" chapters={getChaptersForBook('book13')}><Book13Ch3 /></BookLayout>} />
        <Route path="/book13/chapter4" element={<BookLayout bookId="book13" chapter="chapter4" chapters={getChaptersForBook('book13')}><Book13Ch4 /></BookLayout>} />
        <Route path="/book13/chapter5" element={<BookLayout bookId="book13" chapter="chapter5" chapters={getChaptersForBook('book13')}><Book13Ch5 /></BookLayout>} />
        <Route path="/book13/chapter6" element={<BookLayout bookId="book13" chapter="chapter6" chapters={getChaptersForBook('book13')}><Book13Ch6 /></BookLayout>} />
        <Route path="/book13/chapter7" element={<BookLayout bookId="book13" chapter="chapter7" chapters={getChaptersForBook('book13')}><Book13Ch7 /></BookLayout>} />
        <Route path="/book/13" element={<BookLayout bookId="book13" chapter="chapter1" chapters={getChaptersForBook('book13')}><Book13Ch1 /></BookLayout>} />

        {/* ========== Book 14 - 活在聖靈中 ========== */}
        <Route path="/book14/chapter1" element={<BookLayout bookId="book14" chapter="chapter1" chapters={getChaptersForBook('book14')}><Book14Ch1 /></BookLayout>} />
        <Route path="/book14/chapter2" element={<BookLayout bookId="book14" chapter="chapter2" chapters={getChaptersForBook('book14')}><Book14Ch2 /></BookLayout>} />
        <Route path="/book14/chapter3" element={<BookLayout bookId="book14" chapter="chapter3" chapters={getChaptersForBook('book14')}><Book14Ch3 /></BookLayout>} />
        <Route path="/book14/chapter4" element={<BookLayout bookId="book14" chapter="chapter4" chapters={getChaptersForBook('book14')}><Book14Ch4 /></BookLayout>} />
        <Route path="/book14/chapter5" element={<BookLayout bookId="book14" chapter="chapter5" chapters={getChaptersForBook('book14')}><Book14Ch5 /></BookLayout>} />
        <Route path="/book14/chapter6" element={<BookLayout bookId="book14" chapter="chapter6" chapters={getChaptersForBook('book14')}><Book14Ch6 /></BookLayout>} />
        <Route path="/book14/chapter7" element={<BookLayout bookId="book14" chapter="chapter7" chapters={getChaptersForBook('book14')}><Book14Ch7 /></BookLayout>} />
        <Route path="/book14/chapter8" element={<BookLayout bookId="book14" chapter="chapter8" chapters={getChaptersForBook('book14')}><Book14Ch8 /></BookLayout>} />
        <Route path="/book14/chapter9" element={<BookLayout bookId="book14" chapter="chapter9" chapters={getChaptersForBook('book14')}><Book14Ch9 /></BookLayout>} />
        <Route path="/book/14" element={<BookLayout bookId="book14" chapter="chapter1" chapters={getChaptersForBook('book14')}><Book14Ch1 /></BookLayout>} />

        {/* ========== Book 15 - 誰需要神學？ ========== */}
        <Route path="/book15/home" element={<BookLayout bookId="book15" chapter="home" chapters={getChaptersForBook('book15')}><Book15Home /></BookLayout>} />
        <Route path="/book15/chapter1" element={<BookLayout bookId="book15" chapter="chapter1" chapters={getChaptersForBook('book15')}><Book15Ch1 /></BookLayout>} />
        <Route path="/book15/chapter2" element={<BookLayout bookId="book15" chapter="chapter2" chapters={getChaptersForBook('book15')}><Book15Ch2 /></BookLayout>} />
        <Route path="/book15/chapter3" element={<BookLayout bookId="book15" chapter="chapter3" chapters={getChaptersForBook('book15')}><Book15Ch3 /></BookLayout>} />
        <Route path="/book15/chapter4" element={<BookLayout bookId="book15" chapter="chapter4" chapters={getChaptersForBook('book15')}><Book15Ch4 /></BookLayout>} />
        <Route path="/book15/chapter5" element={<BookLayout bookId="book15" chapter="chapter5" chapters={getChaptersForBook('book15')}><Book15Ch5 /></BookLayout>} />
        <Route path="/book15/chapter6" element={<BookLayout bookId="book15" chapter="chapter6" chapters={getChaptersForBook('book15')}><Book15Ch6 /></BookLayout>} />
        <Route path="/book15/chapter7" element={<BookLayout bookId="book15" chapter="chapter7" chapters={getChaptersForBook('book15')}><Book15Ch7 /></BookLayout>} />
        <Route path="/book15/chapter8" element={<BookLayout bookId="book15" chapter="chapter8" chapters={getChaptersForBook('book15')}><Book15Ch8 /></BookLayout>} />
        <Route path="/book15/chapter9" element={<BookLayout bookId="book15" chapter="chapter9" chapters={getChaptersForBook('book15')}><Book15Ch9 /></BookLayout>} />
        <Route path="/book/15" element={<BookLayout bookId="book15" chapter="home" chapters={getChaptersForBook('book15')}><Book15Home /></BookLayout>} />

        {/* ========== Book 16 - 拾級靈程三階 ========== */}
        <Route path="/book16/home" element={<BookLayout bookId="book16" chapter="home" chapters={getChaptersForBook('book16')}><Book16Home /></BookLayout>} />
        <Route path="/book16/chapter1" element={<BookLayout bookId="book16" chapter="chapter1" chapters={getChaptersForBook('book16')}><Book16Ch1 /></BookLayout>} />
        <Route path="/book16/chapter2" element={<BookLayout bookId="book16" chapter="chapter2" chapters={getChaptersForBook('book16')}><Book16Ch2 /></BookLayout>} />
        <Route path="/book16/chapter3" element={<BookLayout bookId="book16" chapter="chapter3" chapters={getChaptersForBook('book16')}><Book16Ch3 /></BookLayout>} />
        <Route path="/book16/chapter4" element={<BookLayout bookId="book16" chapter="chapter4" chapters={getChaptersForBook('book16')}><Book16Ch4 /></BookLayout>} />
        <Route path="/book16/chapter5" element={<BookLayout bookId="book16" chapter="chapter5" chapters={getChaptersForBook('book16')}><Book16Ch5 /></BookLayout>} />
        <Route path="/book16/chapter6" element={<BookLayout bookId="book16" chapter="chapter6" chapters={getChaptersForBook('book16')}><Book16Ch6 /></BookLayout>} />
        <Route path="/book/16" element={<BookLayout bookId="book16" chapter="home" chapters={getChaptersForBook('book16')}><Book16Home /></BookLayout>} />

        {/* ========== Book 17 - 十架牧養學 ========== */}
        <Route path="/book17/home" element={<BookLayout bookId="book17" chapter="home" chapters={getChaptersForBook('book17')}><Book17Home /></BookLayout>} />
        <Route path="/book17/chapter1" element={<BookLayout bookId="book17" chapter="chapter1" chapters={getChaptersForBook('book17')}><Book17Ch1 /></BookLayout>} />
        <Route path="/book17/chapter2" element={<BookLayout bookId="book17" chapter="chapter2" chapters={getChaptersForBook('book17')}><Book17Ch2 /></BookLayout>} />
        <Route path="/book17/chapter3" element={<BookLayout bookId="book17" chapter="chapter3" chapters={getChaptersForBook('book17')}><Book17Ch3 /></BookLayout>} />
        <Route path="/book17/chapter4" element={<BookLayout bookId="book17" chapter="chapter4" chapters={getChaptersForBook('book17')}><Book17Ch4 /></BookLayout>} />
        <Route path="/book17/chapter5" element={<BookLayout bookId="book17" chapter="chapter5" chapters={getChaptersForBook('book17')}><Book17Ch5 /></BookLayout>} />
        <Route path="/book17/chapter6" element={<BookLayout bookId="book17" chapter="chapter6" chapters={getChaptersForBook('book17')}><Book17Ch6 /></BookLayout>} />
        <Route path="/book17/chapter7" element={<BookLayout bookId="book17" chapter="chapter7" chapters={getChaptersForBook('book17')}><Book17Ch7 /></BookLayout>} />
        <Route path="/book17/chapter8" element={<BookLayout bookId="book17" chapter="chapter8" chapters={getChaptersForBook('book17')}><Book17Ch8 /></BookLayout>} />
        <Route path="/book17/chapter9" element={<BookLayout bookId="book17" chapter="chapter9" chapters={getChaptersForBook('book17')}><Book17Ch9 /></BookLayout>} />
        <Route path="/book17/chapter10" element={<BookLayout bookId="book17" chapter="chapter10" chapters={getChaptersForBook('book17')}><Book17Ch10 /></BookLayout>} />
        <Route path="/book17/chapter11" element={<BookLayout bookId="book17" chapter="chapter11" chapters={getChaptersForBook('book17')}><Book17Ch11 /></BookLayout>} />
        <Route path="/book17/chapter12" element={<BookLayout bookId="book17" chapter="chapter12" chapters={getChaptersForBook('book17')}><Book17Ch12 /></BookLayout>} />
        <Route path="/book17/chapter13" element={<BookLayout bookId="book17" chapter="chapter13" chapters={getChaptersForBook('book17')}><Book17Ch13 /></BookLayout>} />
        <Route path="/book17/chapter14" element={<BookLayout bookId="book17" chapter="chapter14" chapters={getChaptersForBook('book17')}><Book17Ch14 /></BookLayout>} />
        <Route path="/book17/chapter15" element={<BookLayout bookId="book17" chapter="chapter15" chapters={getChaptersForBook('book17')}><Book17Ch15 /></BookLayout>} />
        <Route path="/book17/chapter16" element={<BookLayout bookId="book17" chapter="chapter16" chapters={getChaptersForBook('book17')}><Book17Ch16 /></BookLayout>} />
        <Route path="/book17/chapter17" element={<BookLayout bookId="book17" chapter="chapter17" chapters={getChaptersForBook('book17')}><Book17Ch17 /></BookLayout>} />
        <Route path="/book/17" element={<BookLayout bookId="book17" chapter="home" chapters={getChaptersForBook('book17')}><Book17Home /></BookLayout>} />

        {/* ========== 首頁 ========== */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="bg-white shadow-md sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-3">
                  <Book className="w-8 h-8 text-blue-600" />
                  <h1 className="text-2xl font-bold text-gray-900">電子書房</h1>
                </div>
              </div>
            </div>

            {loading && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <p className="text-gray-600">加載書籍中...</p>
              </div>
            )}

            {!loading && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {displayBooks.map((book) => {
                    const bookNumber = parseInt(book.book_id.replace('book', ''));
                    const firstChapter = bookChapters[book.book_id]?.[0];
                    const staticFirst = BOOK_CHAPTERS[book.book_id]?.[0];
                    const bookUrl = firstChapter
                      ? `/${book.book_id}/${firstChapter.chapter_id}`
                      : (staticFirst?.path || `/${book.book_id}`);
                    return (
                      <BookCard
                        key={book.book_id}
                        number={bookNumber}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        chapters={book.chapters_count}
                        to={bookUrl}
                        color={colorMap[bookNumber] || 'from-blue-500 to-purple-600'}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
              <p className="text-sm">電子書房 · 數位靈修學習平台</p>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
