import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book, User } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import BookLayout from './components/BookLayout';
import BookHighlightsOverview from './components/BookHighlightsOverview';
import ErrorBoundary from './components/ErrorBoundary';
import { lazyWithRetry } from './lib/lazyWithRetry';
import { fetchBooks, fetchChapters, type Book as BookType, type Chapter } from './api/books_supabase';
import { getReaderPhone, loginReader, logoutReader } from './lib/readerAuth';

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
  book18: '與撒但爭戰',
  book19: '新生命',
  book20: '安慰人的靈魂',
  book21: '基督徒須知',
  book22: '認識上帝與認識人的九個探險',
  book23: '舊約聖經人物圖鑑',
  book24: '盼望和教導',
  book25: '教會動力大轉化',
  book26: '言語的力量與神的奇妙',
  book27: '人如何改變',
  book28: '人如何改變（教師本）',
  book29: '指向終末的創世記',
  book30: '科學創造論',
  book31: '創世以來的奧秘',
  book32: '華人回家',
  book33: '跨越鴻溝',
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
  book18: [
    { id: 'home', title: '書本簡介', path: '/book18/home' },
    { id: 'chapter1', title: '第1章 聖戰', path: '/book18/chapter1' },
    { id: 'chapter2', title: '第2章 舊約中的撒但', path: '/book18/chapter2' },
    { id: 'chapter3', title: '第3章 新約中的撒但', path: '/book18/chapter3' },
    { id: 'chapter4', title: '第4章 教會歷史中的撒但', path: '/book18/chapter4' },
    { id: 'chapter5', title: '第5章 今天的撒但', path: '/book18/chapter5' },
    { id: 'chapter6', title: '第6章 撒但的將來', path: '/book18/chapter6' },
    { id: 'chapter7', title: '第7章 建造堅固防線', path: '/book18/chapter7' },
    { id: 'chapter8', title: '第8章 主動發起進攻', path: '/book18/chapter8' },
    { id: 'chapter9', title: '第9章 撒但的策略與伎倆', path: '/book18/chapter9' },
    { id: 'chapter10', title: '第10章 直面撒但的四大策略', path: '/book18/chapter10' },
    { id: 'chapter11', title: '第11章 我們作為信徒的挑戰', path: '/book18/chapter11' },
    { id: 'chapter12', title: '第12章 我們作為教會成員的挑戰', path: '/book18/chapter12' },
    { id: 'chapter13', title: '第13章 我們作為國家公民的挑戰', path: '/book18/chapter13' },
    { id: 'summary', title: '重點總結整理', path: '/book18/summary' },
  ],
  book19: [
    { id: 'home', title: '書本簡介', path: '/book19/home' },
    { id: 'chapter1', title: '主題一：🌱 新生命的基礎', path: '/book19/chapter1' },
    { id: 'chapter2', title: '主題二：⚔️ 勝過罪與世界', path: '/book19/chapter2' },
    { id: 'chapter3', title: '主題三：💎 聖潔生活的品格', path: '/book19/chapter3' },
    { id: 'chapter4', title: '主題四：🔥 在聖靈裡的能力', path: '/book19/chapter4' },
    { id: 'chapter5', title: '主題五：🙏 基督徒的實踐', path: '/book19/chapter5' },
    { id: 'chapter6', title: '主題六：📈 生命的持續長進', path: '/book19/chapter6' },
  ],
  book20: [
    { id: 'home', title: '書本簡介', path: '/book20/home' },
    { id: 'chapter1', title: '第1章：緒論', path: '/book20/chapter1' },
    { id: 'chapter2', title: '第2章：靈性的本質與需求', path: '/book20/chapter2' },
    { id: 'chapter3', title: '第3章：靈性關懷師與基督教靈性照顧', path: '/book20/chapter3' },
    { id: 'chapter4', title: '第4章：研究方法', path: '/book20/chapter4' },
    { id: 'chapter5', title: '第5章：研究結果', path: '/book20/chapter5' },
    { id: 'chapter6', title: '第6章：結論與建議', path: '/book20/chapter6' },
  ],
  book21: [
    { id: 'home', title: '書本簡介', path: '/book21/home' },
    { id: 'chapter1', title: '第1章：聖父、聖子、聖靈——使徒信經', path: '/book21/chapter1' },
    { id: 'chapter2', title: '第2章：加入教會——洗禮和歸正', path: '/book21/chapter2' },
    { id: 'chapter3', title: '第3章：心對心——主禱文', path: '/book21/chapter3' },
    { id: 'chapter4', title: '第4章：生活的準則——十誡', path: '/book21/chapter4' },
  ],
  book22: [
    { id: 'home', title: '書本簡介', path: '/book22/home' },
    { id: 'chapter1', title: '第1章：認識人與認識上帝', path: '/book22/chapter1' },
    { id: 'chapter2', title: '第2章：神學入門', path: '/book22/chapter2' },
    { id: 'chapter3', title: '第3章：人是什麼？', path: '/book22/chapter3' },
    { id: 'chapter4', title: '第4章：敬拜上帝', path: '/book22/chapter4' },
    { id: 'chapter5', title: '第5章：認識教會', path: '/book22/chapter5' },
    { id: 'chapter6', title: '第6章：三一上帝', path: '/book22/chapter6' },
    { id: 'chapter7', title: '第7章：耶穌基督', path: '/book22/chapter7' },
    { id: 'chapter8', title: '第8章：聖靈大能', path: '/book22/chapter8' },
    { id: 'chapter9', title: '第9章：活潑的盼望', path: '/book22/chapter9' },
  ],
  book23: [
    { id: 'home', title: '人物圖鑑', path: '/book23/home' },
    { id: 'nebuchadnezzar', title: '尼布甲尼撒', path: '/book23/nebuchadnezzar' },
    { id: 'relation-chart', title: '人物關係圖', path: '/book23/relation-chart' },
  ],
  book24: [
    { id: 'home', title: '書本簡介', path: '/book24/home' },
    { id: 'chapter1', title: '第1章 前言與末世的警告', path: '/book24/chapter1' },
    { id: 'chapter2', title: '第2章 你可能會問的問題', path: '/book24/chapter2' },
    { id: 'chapter3', title: '第3章 尼比魯、外星人與屬靈爭戰', path: '/book24/chapter3' },
    { id: 'chapter4', title: '第4章 辨認叛徒與神的保護', path: '/book24/chapter4' },
    { id: 'chapter5', title: '第5章 末世關鍵時刻', path: '/book24/chapter5' },
    { id: 'chapter6', title: '第6章 耶穌對卡羅爾的深情告白', path: '/book24/chapter6' },
    { id: 'chapter7', title: '第7章 如何渡過大災難', path: '/book24/chapter7' },
    { id: 'chapter8', title: '第8章 神的主權與最終供應', path: '/book24/chapter8' },
    { id: 'chapter9', title: '第9章 接受饒恕與逃避追捕', path: '/book24/chapter9' },
  ],
  book25: [
    { id: 'home', title: '書本簡介', path: '/book25/home' },
    { id: 'chapter1', title: '第1章 推動一切的引擎', path: '/book25/chapter1' },
    { id: 'chapter2', title: '第2章 為門徒下定義', path: '/book25/chapter2' },
    { id: 'chapter3', title: '第3章 如何開始幫助人成長', path: '/book25/chapter3' },
    { id: 'chapter4', title: '第4章 生命成長的四個領域', path: '/book25/chapter4' },
    { id: 'chapter5', title: '第5章 領袖的角色', path: '/book25/chapter5' },
    { id: 'chapter6', title: '第6章 新的職稱：裝備者', path: '/book25/chapter6' },
    { id: 'chapter7', title: '第7章 個人的門徒帶領要素', path: '/book25/chapter7' },
    { id: 'chapter8', title: '第8章 捲起袖子放手做', path: '/book25/chapter8' },
    { id: 'chapter9', title: '第9章 重新思考我們的事工', path: '/book25/chapter9' },
    { id: 'chapter10', title: '第10章 關係導向的小組', path: '/book25/chapter10' },
    { id: 'chapter11', title: '第11章 新的成效評估表', path: '/book25/chapter11' },
    { id: 'chapter12', title: '第12章 轉化為塑造門徒的教會', path: '/book25/chapter12' },
  ],
  book26: [
    { id: 'home', title: '書本簡介', path: '/book26/home' },
    { id: 'chapter1', title: '第1章 言語之戰：為神的緣故直達人心', path: '/book26/chapter1' },
    { id: 'chapter2', title: '第2章 嚼環、韁繩與祝福：雅各書 3:1–12', path: '/book26/chapter2' },
    { id: 'chapter3', title: '第3章 是否存在基督徒的雄辯？', path: '/book26/chapter3' },
    { id: 'chapter4', title: '第4章 刀刃有多鋒利？基督、爭議與尖銳的言語', path: '/book26/chapter4' },
    { id: 'chapter5', title: '第5章 故事塑造的信仰', path: '/book26/chapter5' },
    { id: 'chapter6', title: '第6章 奇妙的言語：當我們歌唱時', path: '/book26/chapter6' },
    { id: 'chapter7', title: '第7章 講者對談', path: '/book26/chapter7' },
  ],
  book27: [
    { id: 'home', title: '書本簡介', path: '/book27/home' },
    { id: 'chapter1', title: '第1課 這是神要帶領你去的地方', path: '/book27/chapter1' },
    { id: 'chapter2', title: '第2課 是的，你是基督所愛的人', path: '/book27/chapter2' },
    { id: 'chapter3', title: '第3課 改變需要群體的生活', path: '/book27/chapter3' },
    { id: 'chapter4', title: '第4課 神眼中的生活，神手中的改變', path: '/book27/chapter4' },
    { id: 'chapter5', title: '第5課 現實世界中的真神（炎熱篇上）', path: '/book27/chapter5' },
    { id: 'chapter6', title: '第6課 現實世界中真實的你（炎熱篇下）', path: '/book27/chapter6' },
    { id: 'chapter7', title: '第7課 什麼事情纏累著你（荊棘篇上）', path: '/book27/chapter7' },
    { id: 'chapter8', title: '第8課 為什麼你會被纏累（荊棘篇下）', path: '/book27/chapter8' },
    { id: 'chapter9', title: '第9課 全新的身分，全新的潛能（十架篇上）', path: '/book27/chapter9' },
    { id: 'chapter10', title: '第10課 十字架與日常生活（十架篇下）', path: '/book27/chapter10' },
    { id: 'chapter11', title: '第11課 內心真實的改變（果實篇上）', path: '/book27/chapter11' },
    { id: 'chapter12', title: '第12課 令人耳目一新的善果（果實篇下）', path: '/book27/chapter12' },
  ],
  book28: [
    { id: 'home', title: '教師本簡介', path: '/book28/home' },
    { id: 'chapter1', title: '第1課 這是神要帶領你去的地方', path: '/book28/chapter1' },
    { id: 'chapter2', title: '第2課 是的，你是基督所愛的人', path: '/book28/chapter2' },
    { id: 'chapter3', title: '第3課 改變需要群體的生活', path: '/book28/chapter3' },
    { id: 'chapter4', title: '第4課 神眼中的生活，神手中的改變', path: '/book28/chapter4' },
    { id: 'chapter5', title: '第5課 現實世界中的真神（炎熱篇上）', path: '/book28/chapter5' },
    { id: 'chapter6', title: '第6課 現實世界中真實的你（炎熱篇下）', path: '/book28/chapter6' },
    { id: 'chapter7', title: '第7課 什麼事情纏累著你（荊棘篇上）', path: '/book28/chapter7' },
    { id: 'chapter8', title: '第8課 為什麼你會被纏累（荊棘篇下）', path: '/book28/chapter8' },
    { id: 'chapter9', title: '第9課 全新的身分，全新的潛能（十架篇上）', path: '/book28/chapter9' },
    { id: 'chapter10', title: '第10課 十字架與日常生活（十架篇下）', path: '/book28/chapter10' },
    { id: 'chapter11', title: '第11課 內心真實的改變（果實篇上）', path: '/book28/chapter11' },
    { id: 'chapter12', title: '第12課 令人耳目一新的善果（果實篇下）', path: '/book28/chapter12' },
  ],
  book29: [
    { id: 'home', title: '緒論：指向終末的創世記', path: '/book29/home' },
    { id: 'chapter1', title: '第1章 起初與終末', path: '/book29/chapter1' },
    { id: 'chapter2', title: '第2章 神創造天地', path: '/book29/chapter2' },
    { id: 'chapter3', title: '第3章 聖靈的工作', path: '/book29/chapter3' },
    { id: 'chapter4', title: '第4章 生命的真光', path: '/book29/chapter4' },
    { id: 'chapter5', title: '第5章 天空上的水', path: '/book29/chapter5' },
    { id: 'chapter6', title: '第6章 陸地與植物', path: '/book29/chapter6' },
    { id: 'chapter7', title: '第7章 日月與眾星', path: '/book29/chapter7' },
    { id: 'chapter8', title: '第8章 安息的生命', path: '/book29/chapter8' },
    { id: 'chapter9', title: '第9章 豐盛的生命', path: '/book29/chapter9' },
    { id: 'chapter10', title: '第10章 我們的形像', path: '/book29/chapter10' },
    { id: 'chapter11', title: '第11章 掌權的生命', path: '/book29/chapter11' },
    { id: 'chapter12', title: '第12章 神與人安息', path: '/book29/chapter12' },
    { id: 'chapter13', title: '第13章 神精心造人', path: '/book29/chapter13' },
    { id: 'chapter14', title: '第14章 伊甸園與河', path: '/book29/chapter14' },
    { id: 'chapter15', title: '第15章 設立生命樹', path: '/book29/chapter15' },
    { id: 'chapter16', title: '第16章 分別善惡樹', path: '/book29/chapter16' },
    { id: 'chapter17', title: '第17章 單身的亞當', path: '/book29/chapter17' },
    { id: 'chapter18', title: '第18章 神設立婚姻', path: '/book29/chapter18' },
    { id: 'chapter19', title: '第19章 蛇魔鬼撒旦', path: '/book29/chapter19' },
    { id: 'chapter20', title: '第20章 撒旦的謊言', path: '/book29/chapter20' },
    { id: 'chapter21', title: '第21章 人犯罪墮落', path: '/book29/chapter21' },
    { id: 'chapter22', title: '第22章 神審判撒旦', path: '/book29/chapter22' },
    { id: 'chapter23', title: '第23章 長遠的爭戰', path: '/book29/chapter23' },
    { id: 'chapter24', title: '第24章 咒詛與救贖', path: '/book29/chapter24' },
    { id: 'chapter25', title: '第25章 該隱與亞伯', path: '/book29/chapter25' },
    { id: 'chapter26', title: '第26章 失去根的人', path: '/book29/chapter26' },
    { id: 'chapter27', title: '第27章 該隱的後裔', path: '/book29/chapter27' },
    { id: 'chapter28', title: '第28章 塞特的後裔', path: '/book29/chapter28' },
    { id: 'chapter29', title: '第29章 以諾的一生', path: '/book29/chapter29' },
    { id: 'chapter30', title: '第30章 神的兒子們', path: '/book29/chapter30' },
    { id: 'chapter31', title: '第31章 人與神的心', path: '/book29/chapter31' },
    { id: 'chapter32', title: '第32章 完全人挪亞', path: '/book29/chapter32' },
    { id: 'chapter33', title: '第33章 傳道者挪亞', path: '/book29/chapter33' },
    { id: 'chapter34', title: '第34章 挪亞造方舟', path: '/book29/chapter34' },
    { id: 'chapter35', title: '第35章 你和你全家', path: '/book29/chapter35' },
    { id: 'chapter36', title: '第36章 洪水與方舟', path: '/book29/chapter36' },
    { id: 'chapter37', title: '第37章 紀念與獻祭', path: '/book29/chapter37' },
    { id: 'chapter38', title: '第38章 賜福與立約', path: '/book29/chapter38' },
    { id: 'chapter39', title: '第39章 咒詛與祝福', path: '/book29/chapter39' },
    { id: 'chapter40', title: '第40章 三個大族群', path: '/book29/chapter40' },
    { id: 'chapter41', title: '第41章 巴別亂口音', path: '/book29/chapter41' },
    { id: 'chapter42', title: '第42章 生養與離開', path: '/book29/chapter42' },
    { id: 'chapter43', title: '第43章 呼召與拯救', path: '/book29/chapter43' },
    { id: 'chapter44', title: '第44章 寄居與不爭', path: '/book29/chapter44' },
    { id: 'chapter45', title: '第45章 爭戰與奉獻', path: '/book29/chapter45' },
    { id: 'chapter46', title: '第46章 肉體的拆毀', path: '/book29/chapter46' },
    { id: 'chapter47', title: '第47章 屬靈的新造', path: '/book29/chapter47' },
    { id: 'chapter48', title: '第48章 獻上獨生子', path: '/book29/chapter48' },
    { id: 'chapter49', title: '第49章 以撒的一生', path: '/book29/chapter49' },
    { id: 'chapter50', title: '第50章 神堅定立約', path: '/book29/chapter50' },
    { id: 'chapter51', title: '第51章 抓取到分享', path: '/book29/chapter51' },
    { id: 'chapter52', title: '第52章 生命的豐盛', path: '/book29/chapter52' },
    { id: 'chapter53', title: '第53章 為父的雅各', path: '/book29/chapter53' },
    { id: 'chapter54', title: '第54章 雅各與約瑟', path: '/book29/chapter54' },
    { id: 'chapter55', title: '第55章 神寬廣的愛', path: '/book29/chapter55' },
    { id: 'chapter56', title: '第56章 約瑟的一生', path: '/book29/chapter56' },
    { id: 'chapter57', title: '第57章 猶大的故事', path: '/book29/chapter57' },
    { id: 'chapter58', title: '第58章 約瑟的人格', path: '/book29/chapter58' },
    { id: 'chapter59', title: '第59章 豐年與荒年', path: '/book29/chapter59' },
    { id: 'chapter60', title: '第60章 基督的預表', path: '/book29/chapter60' },
    { id: 'conclusion', title: '結論', path: '/book29/conclusion' },
    { id: 'appendix1', title: '附錄一 時期論', path: '/book29/appendix1' },
    { id: 'appendix2', title: '附錄二 重造論／時溝論', path: '/book29/appendix2' },
    { id: 'appendix3', title: '附錄三 畫景論', path: '/book29/appendix3' },
    { id: 'appendix4', title: '附錄四 聖經六日論', path: '/book29/appendix4' },
    { id: 'appendix5', title: '附錄五 科學創造論', path: '/book29/appendix5' },
    { id: 'appendix6', title: '附錄六 創造論與進化論', path: '/book29/appendix6' },
    { id: 'appendix7', title: '附錄七 解開恐龍滅絕之謎', path: '/book29/appendix7' },
    { id: 'bibliography', title: '參考書目', path: '/book29/bibliography' },
  ],
  book30: [
    { id: 'home', title: '書本簡介', path: '/book30/home' },
    { id: 'chapter1', title: '第1章 進化呢？還是創造？', path: '/book30/chapter1' },
    { id: 'chapter2', title: '第2章 混亂呢？還是秩序？', path: '/book30/chapter2' },
    { id: 'chapter3', title: '第3章 上坡呢？還是下坡？', path: '/book30/chapter3' },
    { id: 'chapter4', title: '第4章 偶然呢？還是計劃？', path: '/book30/chapter4' },
    { id: 'chapter5', title: '第5章 古今一致說呢？還是大天災說？', path: '/book30/chapter5' },
    { id: 'chapter6', title: '第6章 年老呢？還是年輕？', path: '/book30/chapter6' },
    { id: 'chapter7', title: '第7章 猿呢？還是人？', path: '/book30/chapter7' },
    { id: 'chapter8', title: '第8章 聖經的創造史', path: '/book30/chapter8' },
  ],
  book31: [
    { id: 'home', title: '書本簡介', path: '/book31/home' },
    { id: 'chapter1', title: '第1章 進化論是對是錯', path: '/book31/chapter1' },
    { id: 'chapter2', title: '第2章 地球到底有幾歲', path: '/book31/chapter2' },
    { id: 'chapter3', title: '第3章 宇宙論問題所在', path: '/book31/chapter3' },
    { id: 'chapter4', title: '第4章 起初 神創造天地', path: '/book31/chapter4' },
    { id: 'chapter5', title: '第5章 伊甸失落在哪裏', path: '/book31/chapter5' },
    { id: 'chapter6', title: '第6章 大洪水審判真相', path: '/book31/chapter6' },
    { id: 'chapter7', title: '第7章 探尋挪亞的方舟', path: '/book31/chapter7' },
    { id: 'chapter8', title: '第8章 地球大環境改變', path: '/book31/chapter8' },
    { id: 'chapter9', title: '第9章 人類制度的建立', path: '/book31/chapter9' },
    { id: 'chapter10', title: '第10章 各民族遷徙全地', path: '/book31/chapter10' },
    { id: 'chapter11', title: '第11章 神的救贖計劃', path: '/book31/chapter11' },
    { id: 'chapter12', title: '第12章 主耶穌再回來', path: '/book31/chapter12' },
  ],
  book32: [
    { id: 'home', title: '書本簡介', path: '/book32/home' },
    { id: 'preface', title: '自序', path: '/book32/preface' },
    { id: 'introduction', title: '緒論', path: '/book32/introduction' },
    { id: 'chapter1', title: '第1章 神與創造', path: '/book32/chapter1' },
    { id: 'chapter2', title: '第2章 人的特性', path: '/book32/chapter2' },
    { id: 'chapter3', title: '第3章 墮落與拯救', path: '/book32/chapter3' },
    { id: 'chapter4', title: '第4章 罪惡的蔓延', path: '/book32/chapter4' },
    { id: 'chapter5', title: '第5章 洪水與方舟', path: '/book32/chapter5' },
    { id: 'chapter6', title: '第6章 閃的後代', path: '/book32/chapter6' },
    { id: 'conclusion', title: '結論', path: '/book32/conclusion' },
    { id: 'references', title: '參考書目', path: '/book32/references' },
  ],
  book33: [
    { id: 'home', title: '書本簡介', path: '/book33/home' },
    { id: 'forewords', title: '推薦序、自序', path: '/book33/forewords' },
    { id: 'intro', title: '緒論', path: '/book33/intro' },
    { id: 'chapter1', title: '第1章 基督教的罪觀', path: '/book33/chapter1' },
    { id: 'chapter2', title: '第2章 中國古代的「上帝觀」', path: '/book33/chapter2' },
    { id: 'chapter3', title: '第3章 儒家的人性觀與罪觀（建置中）', path: '/book33/chapter3' },
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
  { book_id: 'book18', title: '與撒但爭戰', author: '周必克（Joel Beeke）', description: '認識撒但的弱點、策略和失敗，以全副軍裝和禱告在基督裡得勝。', chapters_count: 14 },
  { book_id: 'book19', title: '新生命', author: '慕安德列（Andrew Murray）', description: '為初信者系統闡述新生命的基本真理，原著52章重組為六大生命主題，探索在基督裡豐盛得勝的生命。', chapters_count: 7 },
  { book_id: 'book20', title: '安慰人的靈魂', author: '范銀絲', description: '基督信仰靈性關懷師照顧末期病人的實務歷程研究，探討靈性的本質、末期病人的靈性需求，及全人靈性照顧的原則。', chapters_count: 7 },
  { book_id: 'book21', title: '基督徒須知', author: '巴刻（J. I. Packer）', description: '透過使徒信經、洗禮、主禱文和十誡四大支柱，系統介紹基督信仰的核心內容。半世紀以來被世界各地教會廣泛採用的信仰入門經典。', chapters_count: 5 },
  { book_id: 'book22', title: '認識上帝與認識人的九個探險', author: '林鴻信', description: '透過九個探險，深入探討上帝、人、教會、聖靈與盼望，以加爾文神學傳統為根基，結合台灣文化處境的系統神學入門著作。', chapters_count: 10 },
  { book_id: 'book23', title: '舊約聖經人物圖鑑', author: '小堀真一郎（監修）', description: '收錄兩百七十六位舊約聖經人物，以圖像化方式呈現每位人物的故事、身分和特色，並提供可搜尋的互動式人物百科全書。', chapters_count: 3 },
  { book_id: 'book24', title: '盼望和教導', author: '珂萊爾（Corinne）', description: '末世時代的靈魂盼望——耶穌透過靈修日誌傳達的末世教導、屬靈爭戰指引與信仰告白，幫助信徒在大災難前做好靈魂準備。', chapters_count: 10 },
  { book_id: 'book25', title: '教會動力大轉化', author: '卜冀曼・賀伯陛博士・高爾文博士', description: '五步轉型門徒訓練——從定義真正的門徒，到建立關係性門徒訓練體系，幫助每間教會從領人歸主，轉型為培育能帶出門徒的門徒。', chapters_count: 13 },
  { book_id: 'book26', title: '言語的力量與神的奇妙', author: '約翰・派博 & 賈斯汀・泰勒 編輯', description: '六位當代神學家探討基督徒言語生活——言語與人心、舌頭的管治、雄辯與十字架、尖銳的言語、故事的力量、歌唱的奧祕，從不同角度呈現以神的榮耀為準則的言語神學。', chapters_count: 8 },
  { book_id: 'book27', title: '人如何改變', author: '提姆連恩 & 保羅區普（CCEF）', description: '以HEAT模式（炎熱→荊棘藪→十字架→果實）探討基督徒改變的神學——從耶利米書17章出發，揭示心的偶像如何在試煉中顯露，及十字架恩典如何帶來真實而持久的生命更新。', chapters_count: 13 },
  { book_id: 'book28', title: '人如何改變（教師本）', author: '提姆連恩 & 保羅區普（CCEF）', description: '《人如何改變》課程的教師本（Facilitator Guide）——為帶領者設計的實用指南。包含帶領流程、時間分配、關鍵教學點、討論引導技巧，及應對常見挑戰的策略，幫助帶領者有效引導學員經歷真實的屬靈改變。', chapters_count: 13 },
  { book_id: 'book29', title: '指向終末的創世記', author: '', description: '以終末論視角詮釋創世記——從「起初」到「終末」，探索創造、墮落、洪水與族長歷史中隱藏的末世啟示。每章連結基督的工作、律法與福音、科學與信仰，以及華人文化背景，帶領讀者看見創世記如何從第一頁就指向萬物更新的終末榮耀。', chapters_count: 24 },
  { book_id: 'book30', title: '科學創造論', author: '亨利·莫瑞士博士（Henry M. Morris, Ph.D.）主編　韓偉等譯', description: '創造研究社（ICR）科學家及顧問聯合執筆——以純科學角度比較「進化模式」與「創造模式」，從熱力學、古生物學、地質學、遺傳學、人類學各領域呈現創造模式的科學依據，完全不引用聖經，是教師與知識份子建立科學世界觀的重要參考。', chapters_count: 9 },
  { book_id: 'book31', title: '創世以來的奧秘', author: '孫大程　著', description: '自從有天地以來，到底曾發生了什麼重要的事情？本書有系統地探討進化論、地球年齡、宇宙論、創造、伊甸園、大洪水審判、挪亞方舟、地球環境變遷、人類制度、民族遷徙、神的救贖計劃及主再來等奧秘，含105幅精彩珍貴的圖片及照片，並有各式圖表幫助讀者瞭解宇宙的奧秘及人生命的意義。', chapters_count: 12 },
  { book_id: 'book32', title: '華人回家', author: '莊東傑　著', description: '創世記與華人先祖——以聖經創世記一至十一章為經，中國古籍為緯，探討神與創造、人的特性、墮落與拯救、罪惡的蔓延、洪水與方舟、閃的後代六大主題，幫助華人看見信靠真神不是背祖，而是回歸祖先的信仰。', chapters_count: 6 },
  { book_id: 'book33', title: '跨越鴻溝', author: '莊東傑　著', description: '在華人文化處境中詮釋罪——以華人古籍為經，聖經為緯，藉由華人的文化處境，將聖經中「罪」的觀念向華人表達出來，並指出一條華人文化更新之路。與《華人回家》互為姊妹作，可單獨閱讀。', chapters_count: 6 },
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
  18: 'from-red-600 to-rose-700',
  19: 'from-emerald-500 to-teal-600',
  20: 'from-teal-600 to-cyan-700',
  21: 'from-amber-600 to-yellow-700',
  22: 'from-blue-600 to-teal-700',
  23: 'from-amber-600 to-red-700',
  24: 'from-blue-700 to-indigo-800',
  25: 'from-blue-500 to-purple-600',
  26: 'from-rose-600 to-red-700',
  27: 'from-emerald-500 to-green-600',
  28: 'from-emerald-600 to-teal-700',
  29: 'from-indigo-700 to-blue-900',
  30: 'from-blue-600 to-indigo-600',
  32: 'from-red-700 to-amber-700',
};

// ========== 首頁分類 ==========
interface BookCategory {
  name: string;
  icon: string;
  color: string;
  bg: string;
  bookNumbers: number[];
}

const BOOK_CATEGORIES: BookCategory[] = [
  { name: '禱告靈修', icon: '🙏', color: '#7c3aed', bg: '#f5f3ff', bookNumbers: [9, 10, 14, 16] },
  { name: '聖經研讀', icon: '📖', color: '#b45309', bg: '#fffbeb', bookNumbers: [6, 12, 23, 29, 30, 31, 32] },
  { name: '門訓成長', icon: '🌱', color: '#059669', bg: '#f0fdf4', bookNumbers: [5, 7, 19, 21, 22, 26] },
  { name: '情緒輔導', icon: '💙', color: '#0d9488', bg: '#f0fdfa', bookNumbers: [1, 2, 8, 20, 27, 28] },
  { name: '信仰神學', icon: '✝️', color: '#4338ca', bg: '#eef2ff', bookNumbers: [11, 13, 15, 18] },
  { name: '宣教教會', icon: '🌍', color: '#dc2626', bg: '#fff1f2', bookNumbers: [3, 4, 17, 24, 25] },
];

// ========== Book 1 章節（懶加載） ==========
const Book1Home = lazyWithRetry(() => import('./components/book1/SectionHome'));
const Book1Definition = lazyWithRetry(() => import('./components/book1/SectionDefinition'));
const Book1Development = lazyWithRetry(() => import('./components/book1/SectionDevelopment'));
const Book1Myths = lazyWithRetry(() => import('./components/book1/SectionMyths'));
const Book1Diagnosis = lazyWithRetry(() => import('./components/book1/SectionDiagnosis'));
const Book1Laws = lazyWithRetry(() => import('./components/book1/SectionLaws'));
const Book1Ch7 = lazyWithRetry(() => import('./components/book1/SectionCh7'));
const Book1Ch8 = lazyWithRetry(() => import('./components/book1/SectionCh8'));
const Book1Ch9 = lazyWithRetry(() => import('./components/book1/SectionCh9'));
const Book1Ch10 = lazyWithRetry(() => import('./components/book1/SectionCh10'));
const Book1Ch11 = lazyWithRetry(() => import('./components/book1/SectionCh11'));
const Book1Ch12 = lazyWithRetry(() => import('./components/book1/SectionCh12'));
const Book1Ch13 = lazyWithRetry(() => import('./components/book1/SectionCh13'));
const Book1Ch14 = lazyWithRetry(() => import('./components/book1/SectionCh14'));
const Book1Ch15 = lazyWithRetry(() => import('./components/book1/SectionCh15'));
const Book1Ch16 = lazyWithRetry(() => import('./components/book1/SectionCh16'));
const Book1Ch17 = lazyWithRetry(() => import('./components/book1/SectionCh17'));

// ========== Book 2 章節（懶加載） ==========
const Book2Ch1 = lazyWithRetry(() => import('./components/book2/Chapter1'));
const Book2Ch2 = lazyWithRetry(() => import('./components/book2/Chapter2'));
const Book2Ch3 = lazyWithRetry(() => import('./components/book2/Chapter3'));
const Book2Ch4 = lazyWithRetry(() => import('./components/book2/Chapter4'));
const Book2Ch5 = lazyWithRetry(() => import('./components/book2/Chapter5'));
const Book2Ch6 = lazyWithRetry(() => import('./components/book2/Chapter6'));
const Book2Ch7 = lazyWithRetry(() => import('./components/book2/Chapter7'));
const Book2Ch8 = lazyWithRetry(() => import('./components/book2/Chapter8'));

// ========== Book 3 章節（懶加載） ==========
const Book3Ch1 = lazyWithRetry(() => import('./components/book3/Chapter1'));
const Book3Ch2 = lazyWithRetry(() => import('./components/book3/Chapter2'));
const Book3Ch3 = lazyWithRetry(() => import('./components/book3/Chapter3'));
const Book3Ch4 = lazyWithRetry(() => import('./components/book3/Chapter4'));
const Book3Ch5 = lazyWithRetry(() => import('./components/book3/Chapter5'));
const Book3Ch6 = lazyWithRetry(() => import('./components/book3/Chapter6'));
const Book3Ch7 = lazyWithRetry(() => import('./components/book3/Chapter7'));
const Book3Ch8 = lazyWithRetry(() => import('./components/book3/Chapter8'));

// ========== Book 4 章節（懶加載） ==========
const Book4Ch1 = lazyWithRetry(() => import('./components/book4/Chapter1'));
const Book4Ch2 = lazyWithRetry(() => import('./components/book4/Chapter2'));
const Book4Ch3 = lazyWithRetry(() => import('./components/book4/Chapter3'));
const Book4Ch4 = lazyWithRetry(() => import('./components/book4/Chapter4'));
const Book4Ch5 = lazyWithRetry(() => import('./components/book4/Chapter5'));
const Book4Ch6 = lazyWithRetry(() => import('./components/book4/Chapter6'));
const Book4Ch7 = lazyWithRetry(() => import('./components/book4/Chapter7'));
const Book4Ch8 = lazyWithRetry(() => import('./components/book4/Chapter8'));
const Book4Ch9 = lazyWithRetry(() => import('./components/book4/Chapter9'));
const Book4Ch10 = lazyWithRetry(() => import('./components/book4/Chapter10'));
const Book4Ch11 = lazyWithRetry(() => import('./components/book4/Chapter11'));
const Book4Ch12 = lazyWithRetry(() => import('./components/book4/Chapter12'));
const Book4Ch13 = lazyWithRetry(() => import('./components/book4/Chapter13'));
const Book4Ch14 = lazyWithRetry(() => import('./components/book4/Chapter14'));
const Book4Ch15 = lazyWithRetry(() => import('./components/book4/Chapter15'));
const Book4Ch16 = lazyWithRetry(() => import('./components/book4/Chapter16'));

// ========== Book 5 章節（懶加載） ==========
const Book5Ch1 = lazyWithRetry(() => import('./components/book5/Chapter1'));
const Book5Ch2 = lazyWithRetry(() => import('./components/book5/Chapter2'));
const Book5Ch3 = lazyWithRetry(() => import('./components/book5/Chapter3'));
const Book5Ch4 = lazyWithRetry(() => import('./components/book5/Chapter4'));
const Book5Ch5 = lazyWithRetry(() => import('./components/book5/Chapter5'));
const Book5Ch6 = lazyWithRetry(() => import('./components/book5/Chapter6'));

// ========== Book 6 章節（懶加載） ==========
const Book6Ch1 = lazyWithRetry(() => import('./components/book6/Chapter1'));
const Book6Ch2 = lazyWithRetry(() => import('./components/book6/Chapter2'));
const Book6Ch3 = lazyWithRetry(() => import('./components/book6/Chapter3'));
const Book6Ch4 = lazyWithRetry(() => import('./components/book6/Chapter4'));
const Book6Ch5 = lazyWithRetry(() => import('./components/book6/Chapter5'));
const Book6Ch6 = lazyWithRetry(() => import('./components/book6/Chapter6'));
const Book6Ch7 = lazyWithRetry(() => import('./components/book6/Chapter7'));
const Book6Ch8 = lazyWithRetry(() => import('./components/book6/Chapter8'));

// ========== Book 7 章節（懶加載） ==========
const Book7Ch1 = lazyWithRetry(() => import('./components/book7/Chapter1'));
const Book7Ch2 = lazyWithRetry(() => import('./components/book7/Chapter2'));
const Book7Ch3 = lazyWithRetry(() => import('./components/book7/Chapter3'));
const Book7Ch4 = lazyWithRetry(() => import('./components/book7/Chapter4'));
const Book7Ch5 = lazyWithRetry(() => import('./components/book7/Chapter5'));
const Book7Ch6 = lazyWithRetry(() => import('./components/book7/Chapter6'));

// ========== Book 8 章節（懶加載） ==========
const Book8Ch1 = lazyWithRetry(() => import('./components/book8/Chapter1'));
const Book8Ch2 = lazyWithRetry(() => import('./components/book8/Chapter2'));
const Book8Ch3 = lazyWithRetry(() => import('./components/book8/Chapter3'));
const Book8Ch4 = lazyWithRetry(() => import('./components/book8/Chapter4'));
const Book8Ch5 = lazyWithRetry(() => import('./components/book8/Chapter5'));
const Book8Ch6 = lazyWithRetry(() => import('./components/book8/Chapter6'));
const Book8Ch7 = lazyWithRetry(() => import('./components/book8/Chapter7'));
const Book8Ch8 = lazyWithRetry(() => import('./components/book8/Chapter8'));
const Book8Ch9 = lazyWithRetry(() => import('./components/book8/Chapter9'));
const Book8Ch10 = lazyWithRetry(() => import('./components/book8/Chapter10'));
const Book8Ch11 = lazyWithRetry(() => import('./components/book8/Chapter11'));
const Book8Ch12 = lazyWithRetry(() => import('./components/book8/Chapter12'));

// ========== Book 9 章節（懶加載） ==========
const Book9Intro = lazyWithRetry(() => import('./components/book9/Intro'));
const Book9Ch1 = lazyWithRetry(() => import('./components/book9/Chapter1'));
const Book9Ch2 = lazyWithRetry(() => import('./components/book9/Chapter2'));
const Book9Ch3 = lazyWithRetry(() => import('./components/book9/Chapter3'));
const Book9Ch4 = lazyWithRetry(() => import('./components/book9/Chapter4'));
const Book9Ch5 = lazyWithRetry(() => import('./components/book9/Chapter5'));
const Book9Ch6 = lazyWithRetry(() => import('./components/book9/Chapter6'));

// ========== Book 10 章節（懶加載） ==========
const Book10Ch1 = lazyWithRetry(() => import('./components/book10/Chapter1'));
const Book10Ch2 = lazyWithRetry(() => import('./components/book10/Chapter2'));
const Book10Ch3 = lazyWithRetry(() => import('./components/book10/Chapter3'));
const Book10Ch4 = lazyWithRetry(() => import('./components/book10/Chapter4'));
const Book10Ch5 = lazyWithRetry(() => import('./components/book10/Chapter5'));
const Book10Ch6 = lazyWithRetry(() => import('./components/book10/Chapter6'));
const Book10Ch7 = lazyWithRetry(() => import('./components/book10/Chapter7'));
const Book10Ch8 = lazyWithRetry(() => import('./components/book10/Chapter8'));
const Book10Ch9 = lazyWithRetry(() => import('./components/book10/Chapter9'));

// ========== Book 11 章節（懶加載） ==========
const Book11Lesson1 = lazyWithRetry(() => import('./components/book11/Lesson1'));

// ========== Book 12 章節（懶加載） ==========
const Book12Home = lazyWithRetry(() => import('./components/book12/Book12Home'));

// ========== Book 13 章節（懶加載） ==========
const Book13Ch1 = lazyWithRetry(() => import('./components/book13/Chapter1'));
const Book13Ch2 = lazyWithRetry(() => import('./components/book13/Chapter2'));
const Book13Ch3 = lazyWithRetry(() => import('./components/book13/Chapter3'));
const Book13Ch4 = lazyWithRetry(() => import('./components/book13/Chapter4'));
const Book13Ch5 = lazyWithRetry(() => import('./components/book13/Chapter5'));
const Book13Ch6 = lazyWithRetry(() => import('./components/book13/Chapter6'));
const Book13Ch7 = lazyWithRetry(() => import('./components/book13/Chapter7'));

// ========== Book 14 章節（懶加載） ==========
const Book14Ch1 = lazyWithRetry(() => import('./components/book14/Book14Ch1'));
const Book14Ch2 = lazyWithRetry(() => import('./components/book14/Book14Ch2'));
const Book14Ch3 = lazyWithRetry(() => import('./components/book14/Book14Ch3'));
const Book14Ch4 = lazyWithRetry(() => import('./components/book14/Book14Ch4'));
const Book14Ch5 = lazyWithRetry(() => import('./components/book14/Book14Ch5'));
const Book14Ch6 = lazyWithRetry(() => import('./components/book14/Book14Ch6'));
const Book14Ch7 = lazyWithRetry(() => import('./components/book14/Book14Ch7'));
const Book14Ch8 = lazyWithRetry(() => import('./components/book14/Book14Ch8'));
const Book14Ch9 = lazyWithRetry(() => import('./components/book14/Book14Ch9'));

// ========== Book 15 章節（懶加載） ==========
const Book15Home = lazyWithRetry(() => import('./components/book15/Book15Home'));
const Book15Ch1 = lazyWithRetry(() => import('./components/book15/Book15Ch1'));
const Book15Ch2 = lazyWithRetry(() => import('./components/book15/Book15Ch2'));
const Book15Ch3 = lazyWithRetry(() => import('./components/book15/Book15Ch3'));
const Book15Ch4 = lazyWithRetry(() => import('./components/book15/Book15Ch4'));
const Book15Ch5 = lazyWithRetry(() => import('./components/book15/Book15Ch5'));
const Book15Ch6 = lazyWithRetry(() => import('./components/book15/Book15Ch6'));
const Book15Ch7 = lazyWithRetry(() => import('./components/book15/Book15Ch7'));
const Book15Ch8 = lazyWithRetry(() => import('./components/book15/Book15Ch8'));
const Book15Ch9 = lazyWithRetry(() => import('./components/book15/Book15Ch9'));

// ========== Book 16 章節（懶加載） ==========
const Book16Home = lazyWithRetry(() => import('./components/book16/Book16Home'));
const Book16Ch1 = lazyWithRetry(() => import('./components/book16/Book16Ch1'));
const Book16Ch2 = lazyWithRetry(() => import('./components/book16/Book16Ch2'));
const Book16Ch3 = lazyWithRetry(() => import('./components/book16/Book16Ch3'));
const Book16Ch4 = lazyWithRetry(() => import('./components/book16/Book16Ch4'));
const Book16Ch5 = lazyWithRetry(() => import('./components/book16/Book16Ch5'));
const Book16Ch6 = lazyWithRetry(() => import('./components/book16/Book16Ch6'));

// ========== Book 17 章節（懶加載） ==========
const Book17Home = lazyWithRetry(() => import('./components/book17/Book17Home'));
const Book17Ch1 = lazyWithRetry(() => import('./components/book17/Book17Ch1'));
const Book17Ch2 = lazyWithRetry(() => import('./components/book17/Book17Ch2'));
const Book17Ch3 = lazyWithRetry(() => import('./components/book17/Book17Ch3'));
const Book17Ch4 = lazyWithRetry(() => import('./components/book17/Book17Ch4'));
const Book17Ch5 = lazyWithRetry(() => import('./components/book17/Book17Ch5'));
const Book17Ch6 = lazyWithRetry(() => import('./components/book17/Book17Ch6'));
const Book17Ch7 = lazyWithRetry(() => import('./components/book17/Book17Ch7'));
const Book17Ch8 = lazyWithRetry(() => import('./components/book17/Book17Ch8'));
const Book17Ch9 = lazyWithRetry(() => import('./components/book17/Book17Ch9'));
const Book17Ch10 = lazyWithRetry(() => import('./components/book17/Book17Ch10'));
const Book17Ch11 = lazyWithRetry(() => import('./components/book17/Book17Ch11'));
const Book17Ch12 = lazyWithRetry(() => import('./components/book17/Book17Ch12'));
const Book17Ch13 = lazyWithRetry(() => import('./components/book17/Book17Ch13'));
const Book17Ch14 = lazyWithRetry(() => import('./components/book17/Book17Ch14'));
const Book17Ch15 = lazyWithRetry(() => import('./components/book17/Book17Ch15'));
const Book17Ch16 = lazyWithRetry(() => import('./components/book17/Book17Ch16'));
const Book17Ch17 = lazyWithRetry(() => import('./components/book17/Book17Ch17'));

// ========== Book 18 章節（懶加載） ==========
const Book18Home = lazyWithRetry(() => import('./components/book18/Book18Home'));
const Book18Ch1 = lazyWithRetry(() => import('./components/book18/Book18Ch1'));
const Book18Ch2 = lazyWithRetry(() => import('./components/book18/Book18Ch2'));
const Book18Ch3 = lazyWithRetry(() => import('./components/book18/Book18Ch3'));
const Book18Ch4 = lazyWithRetry(() => import('./components/book18/Book18Ch4'));
const Book18Ch5 = lazyWithRetry(() => import('./components/book18/Book18Ch5'));
const Book18Ch6 = lazyWithRetry(() => import('./components/book18/Book18Ch6'));
const Book18Ch7 = lazyWithRetry(() => import('./components/book18/Book18Ch7'));
const Book18Ch8 = lazyWithRetry(() => import('./components/book18/Book18Ch8'));
const Book18Ch9 = lazyWithRetry(() => import('./components/book18/Book18Ch9'));
const Book18Ch10 = lazyWithRetry(() => import('./components/book18/Book18Ch10'));
const Book18Ch11 = lazyWithRetry(() => import('./components/book18/Book18Ch11'));
const Book18Ch12 = lazyWithRetry(() => import('./components/book18/Book18Ch12'));
const Book18Ch13 = lazyWithRetry(() => import('./components/book18/Book18Ch13'));
const Book18Summary = lazyWithRetry(() => import('./components/book18/Book18Summary'));

// ========== Book 19 章節（懶加載） ==========
const Book19Home = lazyWithRetry(() => import('./components/book19/Book19Home'));
const Book19Ch1 = lazyWithRetry(() => import('./components/book19/Book19Ch1'));
const Book19Ch2 = lazyWithRetry(() => import('./components/book19/Book19Ch2'));
const Book19Ch3 = lazyWithRetry(() => import('./components/book19/Book19Ch3'));
const Book19Ch4 = lazyWithRetry(() => import('./components/book19/Book19Ch4'));
const Book19Ch5 = lazyWithRetry(() => import('./components/book19/Book19Ch5'));
const Book19Ch6 = lazyWithRetry(() => import('./components/book19/Book19Ch6'));

// ========== Book 20 章節（懶加載） ==========
const Book20Home = lazyWithRetry(() => import('./components/book20/Book20Home'));
const Book20Ch1 = lazyWithRetry(() => import('./components/book20/Book20Ch1'));
const Book20Ch2 = lazyWithRetry(() => import('./components/book20/Book20Ch2'));
const Book20Ch3 = lazyWithRetry(() => import('./components/book20/Book20Ch3'));
const Book20Ch4 = lazyWithRetry(() => import('./components/book20/Book20Ch4'));
const Book20Ch5 = lazyWithRetry(() => import('./components/book20/Book20Ch5'));
const Book20Ch6 = lazyWithRetry(() => import('./components/book20/Book20Ch6'));

// ========== Book 21 章節（懶加載） ==========
const Book21Home = lazyWithRetry(() => import('./components/book21/Book21Home'));
const Book21Ch1 = lazyWithRetry(() => import('./components/book21/Book21Ch1'));
const Book21Ch2 = lazyWithRetry(() => import('./components/book21/Book21Ch2'));
const Book21Ch3 = lazyWithRetry(() => import('./components/book21/Book21Ch3'));
const Book21Ch4 = lazyWithRetry(() => import('./components/book21/Book21Ch4'));

// ========== Book 22 章節（懶加載） ==========
const Book22Home = lazyWithRetry(() => import('./components/book22/Book22Home'));
const Book22Ch1 = lazyWithRetry(() => import('./components/book22/Book22Ch1'));
const Book22Ch2 = lazyWithRetry(() => import('./components/book22/Book22Ch2'));
const Book22Ch3 = lazyWithRetry(() => import('./components/book22/Book22Ch3'));
const Book22Ch4 = lazyWithRetry(() => import('./components/book22/Book22Ch4'));
const Book22Ch5 = lazyWithRetry(() => import('./components/book22/Book22Ch5'));
const Book22Ch6 = lazyWithRetry(() => import('./components/book22/Book22Ch6'));
const Book22Ch7 = lazyWithRetry(() => import('./components/book22/Book22Ch7'));
const Book22Ch8 = lazyWithRetry(() => import('./components/book22/Book22Ch8'));
const Book22Ch9 = lazyWithRetry(() => import('./components/book22/Book22Ch9'));

// ========== Book 23 章節（懶加載） ==========
const Book23Home = lazyWithRetry(() => import('./components/book23/Book23Home'));
const Book23Nebuchadnezzar = lazyWithRetry(() => import('./components/book23/Book23Nebuchadnezzar'));
const Book23RelationChart = lazyWithRetry(() => import('./components/book23/Book23RelationChart'));

// ========== Book 24 章節（懶加載） ==========
const Book24Home = lazyWithRetry(() => import('./components/book24/Book24Home'));
const Book24Ch1 = lazyWithRetry(() => import('./components/book24/Book24Ch1'));
const Book24Ch2 = lazyWithRetry(() => import('./components/book24/Book24Ch2'));
const Book24Ch3 = lazyWithRetry(() => import('./components/book24/Book24Ch3'));
const Book24Ch4 = lazyWithRetry(() => import('./components/book24/Book24Ch4'));
const Book24Ch5 = lazyWithRetry(() => import('./components/book24/Book24Ch5'));
const Book24Ch6 = lazyWithRetry(() => import('./components/book24/Book24Ch6'));
const Book24Ch7 = lazyWithRetry(() => import('./components/book24/Book24Ch7'));
const Book24Ch8 = lazyWithRetry(() => import('./components/book24/Book24Ch8'));
const Book24Ch9 = lazyWithRetry(() => import('./components/book24/Book24Ch9'));
const Book25Home = lazyWithRetry(() => import('./components/book25/Book25Home'));
const Book25Ch1 = lazyWithRetry(() => import('./components/book25/Book25Ch1'));
const Book25Ch2 = lazyWithRetry(() => import('./components/book25/Book25Ch2'));
const Book25Ch3 = lazyWithRetry(() => import('./components/book25/Book25Ch3'));
const Book25Ch4 = lazyWithRetry(() => import('./components/book25/Book25Ch4'));
const Book25Ch5 = lazyWithRetry(() => import('./components/book25/Book25Ch5'));
const Book25Ch6 = lazyWithRetry(() => import('./components/book25/Book25Ch6'));
const Book25Ch7 = lazyWithRetry(() => import('./components/book25/Book25Ch7'));
const Book25Ch8 = lazyWithRetry(() => import('./components/book25/Book25Ch8'));
const Book25Ch9 = lazyWithRetry(() => import('./components/book25/Book25Ch9'));
const Book25Ch10 = lazyWithRetry(() => import('./components/book25/Book25Ch10'));
const Book25Ch11 = lazyWithRetry(() => import('./components/book25/Book25Ch11'));
const Book25Ch12 = lazyWithRetry(() => import('./components/book25/Book25Ch12'));

// ========== Book 26 章節（懶加載） ==========
const Book26Home = lazyWithRetry(() => import('./components/book26/Book26Home'));
const Book26Ch1 = lazyWithRetry(() => import('./components/book26/Book26Ch1'));
const Book26Ch2 = lazyWithRetry(() => import('./components/book26/Book26Ch2'));
const Book26Ch3 = lazyWithRetry(() => import('./components/book26/Book26Ch3'));
const Book26Ch4 = lazyWithRetry(() => import('./components/book26/Book26Ch4'));
const Book26Ch5 = lazyWithRetry(() => import('./components/book26/Book26Ch5'));
const Book26Ch6 = lazyWithRetry(() => import('./components/book26/Book26Ch6'));
const Book26Ch7 = lazyWithRetry(() => import('./components/book26/Book26Ch7'));

// ========== Book 27 章節（懶加載） ==========
const Book27Home = lazyWithRetry(() => import('./components/book27/Book27Home'));
const Book27Ch1 = lazyWithRetry(() => import('./components/book27/Book27Ch1'));
const Book27Ch2 = lazyWithRetry(() => import('./components/book27/Book27Ch2'));
const Book27Ch3 = lazyWithRetry(() => import('./components/book27/Book27Ch3'));
const Book27Ch4 = lazyWithRetry(() => import('./components/book27/Book27Ch4'));
const Book27Ch5 = lazyWithRetry(() => import('./components/book27/Book27Ch5'));
const Book27Ch6 = lazyWithRetry(() => import('./components/book27/Book27Ch6'));
const Book27Ch7 = lazyWithRetry(() => import('./components/book27/Book27Ch7'));
const Book27Ch8 = lazyWithRetry(() => import('./components/book27/Book27Ch8'));
const Book27Ch9 = lazyWithRetry(() => import('./components/book27/Book27Ch9'));
const Book27Ch10 = lazyWithRetry(() => import('./components/book27/Book27Ch10'));
const Book27Ch11 = lazyWithRetry(() => import('./components/book27/Book27Ch11'));
const Book27Ch12 = lazyWithRetry(() => import('./components/book27/Book27Ch12'));

// ========== Book 28 章節（懶加載） ==========
const Book29Home = lazyWithRetry(() => import('./components/book29/Book29Home'));
const Book29Ch1 = lazyWithRetry(() => import('./components/book29/Book29Ch1'));
const Book29Ch2 = lazyWithRetry(() => import('./components/book29/Book29Ch2'));
const Book29Ch3 = lazyWithRetry(() => import('./components/book29/Book29Ch3'));
const Book29Ch4 = lazyWithRetry(() => import('./components/book29/Book29Ch4'));
const Book29Ch5 = lazyWithRetry(() => import('./components/book29/Book29Ch5'));
const Book29Ch6 = lazyWithRetry(() => import('./components/book29/Book29Ch6'));
const Book29Ch7 = lazyWithRetry(() => import('./components/book29/Book29Ch7'));
const Book29Ch8 = lazyWithRetry(() => import('./components/book29/Book29Ch8'));
const Book29Ch9 = lazyWithRetry(() => import('./components/book29/Book29Ch9'));
const Book29Ch10 = lazyWithRetry(() => import('./components/book29/Book29Ch10'));
const Book29Ch11 = lazyWithRetry(() => import('./components/book29/Book29Ch11'));
const Book29Ch12 = lazyWithRetry(() => import('./components/book29/Book29Ch12'));
const Book29Ch13 = lazyWithRetry(() => import('./components/book29/Book29Ch13'));
const Book29Ch14 = lazyWithRetry(() => import('./components/book29/Book29Ch14'));
const Book29Ch15 = lazyWithRetry(() => import('./components/book29/Book29Ch15'));
const Book29Ch16 = lazyWithRetry(() => import('./components/book29/Book29Ch16'));
const Book29Ch17 = lazyWithRetry(() => import('./components/book29/Book29Ch17'));
const Book29Ch18 = lazyWithRetry(() => import('./components/book29/Book29Ch18'));
const Book29Ch19 = lazyWithRetry(() => import('./components/book29/Book29Ch19'));
const Book29Ch20 = lazyWithRetry(() => import('./components/book29/Book29Ch20'));
const Book29Ch21 = lazyWithRetry(() => import('./components/book29/Book29Ch21'));
const Book29Ch22 = lazyWithRetry(() => import('./components/book29/Book29Ch22'));
const Book29Ch23 = lazyWithRetry(() => import('./components/book29/Book29Ch23'));
const Book29Ch24 = lazyWithRetry(() => import('./components/book29/Book29Ch24'));
const Book29Ch25 = lazyWithRetry(() => import('./components/book29/Book29Ch25'));
const Book29Ch26 = lazyWithRetry(() => import('./components/book29/Book29Ch26'));
const Book29Ch27 = lazyWithRetry(() => import('./components/book29/Book29Ch27'));
const Book29Ch28 = lazyWithRetry(() => import('./components/book29/Book29Ch28'));
const Book29Ch29 = lazyWithRetry(() => import('./components/book29/Book29Ch29'));
const Book29Ch30 = lazyWithRetry(() => import('./components/book29/Book29Ch30'));
const Book29Ch31 = lazyWithRetry(() => import('./components/book29/Book29Ch31'));
const Book29Ch32 = lazyWithRetry(() => import('./components/book29/Book29Ch32'));
const Book29Ch33 = lazyWithRetry(() => import('./components/book29/Book29Ch33'));
const Book29Ch34 = lazyWithRetry(() => import('./components/book29/Book29Ch34'));
const Book29Ch35 = lazyWithRetry(() => import('./components/book29/Book29Ch35'));
const Book29Ch36 = lazyWithRetry(() => import('./components/book29/Book29Ch36'));
const Book29Ch37 = lazyWithRetry(() => import('./components/book29/Book29Ch37'));
const Book29Ch38 = lazyWithRetry(() => import('./components/book29/Book29Ch38'));
const Book29Ch39 = lazyWithRetry(() => import('./components/book29/Book29Ch39'));
const Book29Ch40 = lazyWithRetry(() => import('./components/book29/Book29Ch40'));
const Book29Ch41 = lazyWithRetry(() => import('./components/book29/Book29Ch41'));
const Book29Ch42 = lazyWithRetry(() => import('./components/book29/Book29Ch42'));
const Book29Ch43 = lazyWithRetry(() => import('./components/book29/Book29Ch43'));
const Book29Ch44 = lazyWithRetry(() => import('./components/book29/Book29Ch44'));
const Book29Ch45 = lazyWithRetry(() => import('./components/book29/Book29Ch45'));
const Book29Ch46 = lazyWithRetry(() => import('./components/book29/Book29Ch46'));
const Book29Ch47 = lazyWithRetry(() => import('./components/book29/Book29Ch47'));
const Book29Ch48 = lazyWithRetry(() => import('./components/book29/Book29Ch48'));
const Book29Ch49 = lazyWithRetry(() => import('./components/book29/Book29Ch49'));
const Book29Ch50 = lazyWithRetry(() => import('./components/book29/Book29Ch50'));
const Book29Ch51 = lazyWithRetry(() => import('./components/book29/Book29Ch51'));
const Book29Ch52 = lazyWithRetry(() => import('./components/book29/Book29Ch52'));
const Book29Ch53 = lazyWithRetry(() => import('./components/book29/Book29Ch53'));
const Book29Ch54 = lazyWithRetry(() => import('./components/book29/Book29Ch54'));
const Book29Ch55 = lazyWithRetry(() => import('./components/book29/Book29Ch55'));
const Book29Ch56 = lazyWithRetry(() => import('./components/book29/Book29Ch56'));
const Book29Ch57 = lazyWithRetry(() => import('./components/book29/Book29Ch57'));
const Book29Ch58 = lazyWithRetry(() => import('./components/book29/Book29Ch58'));
const Book29Ch59 = lazyWithRetry(() => import('./components/book29/Book29Ch59'));
const Book29Ch60 = lazyWithRetry(() => import('./components/book29/Book29Ch60'));
const Book29Conclusion = lazyWithRetry(() => import('./components/book29/Book29Conclusion'));
const Book29Appendix1 = lazyWithRetry(() => import('./components/book29/Book29Appendix1'));
const Book29Appendix2 = lazyWithRetry(() => import('./components/book29/Book29Appendix2'));
const Book29Appendix3 = lazyWithRetry(() => import('./components/book29/Book29Appendix3'));
const Book29Appendix4 = lazyWithRetry(() => import('./components/book29/Book29Appendix4'));
const Book29Appendix5 = lazyWithRetry(() => import('./components/book29/Book29Appendix5'));
const Book29Appendix6 = lazyWithRetry(() => import('./components/book29/Book29Appendix6'));
const Book29Appendix7 = lazyWithRetry(() => import('./components/book29/Book29Appendix7'));
const Book29Bibliography = lazyWithRetry(() => import('./components/book29/Book29Bibliography'));

// ========== Book 30 章節（懶加載） ==========
const Book30Home = lazyWithRetry(() => import('./components/book30/Book30Home'));
const Book30Ch1 = lazyWithRetry(() => import('./components/book30/Book30Ch1'));
const Book30Ch2 = lazyWithRetry(() => import('./components/book30/Book30Ch2'));
const Book30Ch3 = lazyWithRetry(() => import('./components/book30/Book30Ch3'));
const Book30Ch4 = lazyWithRetry(() => import('./components/book30/Book30Ch4'));
const Book30Ch5 = lazyWithRetry(() => import('./components/book30/Book30Ch5'));
const Book30Ch6 = lazyWithRetry(() => import('./components/book30/Book30Ch6'));
const Book30Ch7 = lazyWithRetry(() => import('./components/book30/Book30Ch7'));
const Book30Ch8 = lazyWithRetry(() => import('./components/book30/Book30Ch8'));
const Book31Home = lazyWithRetry(() => import('./components/book31/Book31Home'));
const Book31Ch1 = lazyWithRetry(() => import('./components/book31/Book31Ch1'));
const Book31Ch2 = lazyWithRetry(() => import('./components/book31/Book31Ch2'));
const Book31Ch3 = lazyWithRetry(() => import('./components/book31/Book31Ch3'));
const Book31Ch4 = lazyWithRetry(() => import('./components/book31/Book31Ch4'));
const Book31Ch5 = lazyWithRetry(() => import('./components/book31/Book31Ch5'));
const Book31Ch6 = lazyWithRetry(() => import('./components/book31/Book31Ch6'));
const Book31Ch7 = lazyWithRetry(() => import('./components/book31/Book31Ch7'));
const Book31Ch8 = lazyWithRetry(() => import('./components/book31/Book31Ch8'));
const Book31Ch9 = lazyWithRetry(() => import('./components/book31/Book31Ch9'));
const Book31Ch10 = lazyWithRetry(() => import('./components/book31/Book31Ch10'));
const Book31Ch11 = lazyWithRetry(() => import('./components/book31/Book31Ch11'));
const Book31Ch12 = lazyWithRetry(() => import('./components/book31/Book31Ch12'));
const Book32Home = lazyWithRetry(() => import('./components/book32/Book32Home'));
const Book33Home = lazyWithRetry(() => import('./components/book33/Book33Home'));
const Book33Forewords = lazyWithRetry(() => import('./components/book33/Book33Forewords'));
const Book33Intro = lazyWithRetry(() => import('./components/book33/Book33Intro'));
const Book33Ch1 = lazyWithRetry(() => import('./components/book33/Book33Ch1'));
const Book33Ch2 = lazyWithRetry(() => import('./components/book33/Book33Ch2'));
const Book33Ch3 = lazyWithRetry(() => import('./components/book33/Book33Ch3'));
const Book32Preface = lazyWithRetry(() => import('./components/book32/Book32Preface'));
const Book32Introduction = lazyWithRetry(() => import('./components/book32/Book32Introduction'));
const Book32Ch1 = lazyWithRetry(() => import('./components/book32/Book32Ch1'));
const Book32Ch2 = lazyWithRetry(() => import('./components/book32/Book32Ch2'));
const Book32Ch3 = lazyWithRetry(() => import('./components/book32/Book32Ch3'));
const Book32Ch4 = lazyWithRetry(() => import('./components/book32/Book32Ch4'));
const Book32Ch5 = lazyWithRetry(() => import('./components/book32/Book32Ch5'));
const Book32Ch6 = lazyWithRetry(() => import('./components/book32/Book32Ch6'));
const Book32Conclusion = lazyWithRetry(() => import('./components/book32/Book32Conclusion'));
const Book32References = lazyWithRetry(() => import('./components/book32/Book32References'));

const Book28Home = lazyWithRetry(() => import('./components/book28/Book28Home'));
const Book28Ch1 = lazyWithRetry(() => import('./components/book28/Book28Ch01'));
const Book28Ch2 = lazyWithRetry(() => import('./components/book28/Book28Ch02'));
const Book28Ch3 = lazyWithRetry(() => import('./components/book28/Book28Ch03'));
const Book28Ch4 = lazyWithRetry(() => import('./components/book28/Book28Ch04'));
const Book28Ch5 = lazyWithRetry(() => import('./components/book28/Book28Ch05'));
const Book28Ch6 = lazyWithRetry(() => import('./components/book28/Book28Ch06'));
const Book28Ch7 = lazyWithRetry(() => import('./components/book28/Book28Ch07'));
const Book28Ch8 = lazyWithRetry(() => import('./components/book28/Book28Ch08'));
const Book28Ch9 = lazyWithRetry(() => import('./components/book28/Book28Ch09'));
const Book28Ch10 = lazyWithRetry(() => import('./components/book28/Book28Ch10'));
const Book28Ch11 = lazyWithRetry(() => import('./components/book28/Book28Ch11'));
const Book28Ch12 = lazyWithRetry(() => import('./components/book28/Book28Ch12'));

// BookCard 組件
const BookCard: React.FC<BookCardProps> = ({
  number,
  title,
  author,
  description,
  to,
  color = "from-blue-500 to-purple-600"
}) => {
  const tooltip = [author, description].filter(Boolean).join(' — ');
  return (
    <Link to={to} className="block" title={tooltip || undefined}>
      <div className={`bg-gradient-to-r ${color} rounded-lg px-3 py-2 text-white shadow hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center gap-2`}>
        <span className="bg-white/30 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">{number}</span>
        <div className="min-w-0">
          <span className="text-xl font-medium leading-tight block truncate">{title}</span>
          {author && <span className="text-xs text-white/80 leading-tight block truncate">{author}</span>}
        </div>
      </div>
    </Link>
  );
};

const App: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [bookChapters, setBookChapters] = useState<Record<string, Chapter[]>>({});
  const [loading, setLoading] = useState(true);
  const [supabaseOk, setSupabaseOk] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(BOOK_CATEGORIES.map(c => [c.name, true]))
  );
  const toggleCategory = (name: string) => setExpandedCategories(prev => ({ ...prev, [name]: !prev[name] }));

  // 讀者登入（跨裝置同步畫重點用）
  const [readerPhone, setReaderPhoneState] = useState<string | null>(() => getReaderPhone());
  const [showLoginModal, setShowLoginModal] = useState(() => !getReaderPhone());
  const [loginPhoneInput, setLoginPhoneInput] = useState('');
  const [loginPwdInput, setLoginPwdInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    if (loginReader(loginPhoneInput, loginPwdInput)) {
      setReaderPhoneState(loginPhoneInput.trim());
      setShowLoginModal(false);
      setLoginPhoneInput('');
      setLoginPwdInput('');
      setLoginError('');
    } else {
      setLoginError('手機號碼或密碼錯誤');
    }
  };

  const handleLogout = () => {
    logoutReader();
    setReaderPhoneState(null);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const booksData = await fetchBooks();
        if (booksData.length > 0) {
          setBooks(booksData);
          setSupabaseOk(true);
          setLoading(false);
          // 章節資料不影響首頁磚牆顯示（磚牆只需 chapters_count），
          // 改為平行背景載入，避免逐本依序等待拖慢首頁
          Promise.all(
            booksData.map(book =>
              fetchChapters(book.book_id).then(chapters => [book.book_id, chapters] as const)
            )
          ).then(entries => {
            const chaptersMap: Record<string, Chapter[]> = {};
            for (const [bookId, chapters] of entries) {
              chaptersMap[bookId] = chapters;
            }
            setBookChapters(chaptersMap);
          }).catch(() => {
            // 章節背景載入失敗時，各書會自動使用靜態備援章節資料
          });
        } else {
          setLoading(false);
        }
      } catch {
        // Supabase 連不上，使用靜態備援資料
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

  // 首頁顯示的書籍：Supabase 有資料時合併靜態備援（確保新書不遺漏），否則純用靜態備援
  const displayBooks = supabaseOk
    ? [...books, ...STATIC_BOOKS.filter(sb => !books.find(b => b.book_id === sb.book_id))]
    : STATIC_BOOKS;

  return (
    <ErrorBoundary>
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">載入中...</p>
          </div>
        </div>
      }>
      <Routes>
        <Route path="/:bookId/highlights" element={<BookHighlightsOverview />} />
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

        {/* ========== Book 18 - 與撒但爭戰 ========== */}
        <Route path="/book18/home" element={<BookLayout bookId="book18" chapter="home" chapters={getChaptersForBook('book18')}><Book18Home /></BookLayout>} />
        <Route path="/book18/chapter1" element={<BookLayout bookId="book18" chapter="chapter1" chapters={getChaptersForBook('book18')}><Book18Ch1 /></BookLayout>} />
        <Route path="/book18/chapter2" element={<BookLayout bookId="book18" chapter="chapter2" chapters={getChaptersForBook('book18')}><Book18Ch2 /></BookLayout>} />
        <Route path="/book18/chapter3" element={<BookLayout bookId="book18" chapter="chapter3" chapters={getChaptersForBook('book18')}><Book18Ch3 /></BookLayout>} />
        <Route path="/book18/chapter4" element={<BookLayout bookId="book18" chapter="chapter4" chapters={getChaptersForBook('book18')}><Book18Ch4 /></BookLayout>} />
        <Route path="/book18/chapter5" element={<BookLayout bookId="book18" chapter="chapter5" chapters={getChaptersForBook('book18')}><Book18Ch5 /></BookLayout>} />
        <Route path="/book18/chapter6" element={<BookLayout bookId="book18" chapter="chapter6" chapters={getChaptersForBook('book18')}><Book18Ch6 /></BookLayout>} />
        <Route path="/book18/chapter7" element={<BookLayout bookId="book18" chapter="chapter7" chapters={getChaptersForBook('book18')}><Book18Ch7 /></BookLayout>} />
        <Route path="/book18/chapter8" element={<BookLayout bookId="book18" chapter="chapter8" chapters={getChaptersForBook('book18')}><Book18Ch8 /></BookLayout>} />
        <Route path="/book18/chapter9" element={<BookLayout bookId="book18" chapter="chapter9" chapters={getChaptersForBook('book18')}><Book18Ch9 /></BookLayout>} />
        <Route path="/book18/chapter10" element={<BookLayout bookId="book18" chapter="chapter10" chapters={getChaptersForBook('book18')}><Book18Ch10 /></BookLayout>} />
        <Route path="/book18/chapter11" element={<BookLayout bookId="book18" chapter="chapter11" chapters={getChaptersForBook('book18')}><Book18Ch11 /></BookLayout>} />
        <Route path="/book18/chapter12" element={<BookLayout bookId="book18" chapter="chapter12" chapters={getChaptersForBook('book18')}><Book18Ch12 /></BookLayout>} />
        <Route path="/book18/chapter13" element={<BookLayout bookId="book18" chapter="chapter13" chapters={getChaptersForBook('book18')}><Book18Ch13 /></BookLayout>} />
        <Route path="/book18/summary" element={<BookLayout bookId="book18" chapter="summary" chapters={getChaptersForBook('book18')}><Book18Summary /></BookLayout>} />
        <Route path="/book/18" element={<BookLayout bookId="book18" chapter="home" chapters={getChaptersForBook('book18')}><Book18Home /></BookLayout>} />

        {/* ========== Book 19 - 新生命 ========== */}
        <Route path="/book19/home" element={<BookLayout bookId="book19" chapter="home" chapters={getChaptersForBook('book19')}><Book19Home /></BookLayout>} />
        <Route path="/book19/chapter1" element={<BookLayout bookId="book19" chapter="chapter1" chapters={getChaptersForBook('book19')}><Book19Ch1 /></BookLayout>} />
        <Route path="/book19/chapter2" element={<BookLayout bookId="book19" chapter="chapter2" chapters={getChaptersForBook('book19')}><Book19Ch2 /></BookLayout>} />
        <Route path="/book19/chapter3" element={<BookLayout bookId="book19" chapter="chapter3" chapters={getChaptersForBook('book19')}><Book19Ch3 /></BookLayout>} />
        <Route path="/book19/chapter4" element={<BookLayout bookId="book19" chapter="chapter4" chapters={getChaptersForBook('book19')}><Book19Ch4 /></BookLayout>} />
        <Route path="/book19/chapter5" element={<BookLayout bookId="book19" chapter="chapter5" chapters={getChaptersForBook('book19')}><Book19Ch5 /></BookLayout>} />
        <Route path="/book19/chapter6" element={<BookLayout bookId="book19" chapter="chapter6" chapters={getChaptersForBook('book19')}><Book19Ch6 /></BookLayout>} />
        <Route path="/book/19" element={<BookLayout bookId="book19" chapter="home" chapters={getChaptersForBook('book19')}><Book19Home /></BookLayout>} />

        {/* ========== Book 20: 安慰人的靈魂 ========== */}
        <Route path="/book20/home" element={<BookLayout bookId="book20" chapter="home" chapters={getChaptersForBook('book20')}><Book20Home /></BookLayout>} />
        <Route path="/book20/chapter1" element={<BookLayout bookId="book20" chapter="chapter1" chapters={getChaptersForBook('book20')}><Book20Ch1 /></BookLayout>} />
        <Route path="/book20/chapter2" element={<BookLayout bookId="book20" chapter="chapter2" chapters={getChaptersForBook('book20')}><Book20Ch2 /></BookLayout>} />
        <Route path="/book20/chapter3" element={<BookLayout bookId="book20" chapter="chapter3" chapters={getChaptersForBook('book20')}><Book20Ch3 /></BookLayout>} />
        <Route path="/book20/chapter4" element={<BookLayout bookId="book20" chapter="chapter4" chapters={getChaptersForBook('book20')}><Book20Ch4 /></BookLayout>} />
        <Route path="/book20/chapter5" element={<BookLayout bookId="book20" chapter="chapter5" chapters={getChaptersForBook('book20')}><Book20Ch5 /></BookLayout>} />
        <Route path="/book20/chapter6" element={<BookLayout bookId="book20" chapter="chapter6" chapters={getChaptersForBook('book20')}><Book20Ch6 /></BookLayout>} />
        <Route path="/book/20" element={<BookLayout bookId="book20" chapter="home" chapters={getChaptersForBook('book20')}><Book20Home /></BookLayout>} />

        {/* ========== Book 21: 基督徒須知 ========== */}
        <Route path="/book21/home" element={<BookLayout bookId="book21" chapter="home" chapters={getChaptersForBook('book21')}><Book21Home /></BookLayout>} />
        <Route path="/book21/chapter1" element={<BookLayout bookId="book21" chapter="chapter1" chapters={getChaptersForBook('book21')}><Book21Ch1 /></BookLayout>} />
        <Route path="/book21/chapter2" element={<BookLayout bookId="book21" chapter="chapter2" chapters={getChaptersForBook('book21')}><Book21Ch2 /></BookLayout>} />
        <Route path="/book21/chapter3" element={<BookLayout bookId="book21" chapter="chapter3" chapters={getChaptersForBook('book21')}><Book21Ch3 /></BookLayout>} />
        <Route path="/book21/chapter4" element={<BookLayout bookId="book21" chapter="chapter4" chapters={getChaptersForBook('book21')}><Book21Ch4 /></BookLayout>} />
        <Route path="/book/21" element={<BookLayout bookId="book21" chapter="home" chapters={getChaptersForBook('book21')}><Book21Home /></BookLayout>} />

        {/* ========== Book 22: 認識上帝與認識人的九個探險 ========== */}
        <Route path="/book22/home" element={<BookLayout bookId="book22" chapter="home" chapters={getChaptersForBook('book22')}><Book22Home /></BookLayout>} />
        <Route path="/book22/chapter1" element={<BookLayout bookId="book22" chapter="chapter1" chapters={getChaptersForBook('book22')}><Book22Ch1 /></BookLayout>} />
        <Route path="/book22/chapter2" element={<BookLayout bookId="book22" chapter="chapter2" chapters={getChaptersForBook('book22')}><Book22Ch2 /></BookLayout>} />
        <Route path="/book22/chapter3" element={<BookLayout bookId="book22" chapter="chapter3" chapters={getChaptersForBook('book22')}><Book22Ch3 /></BookLayout>} />
        <Route path="/book22/chapter4" element={<BookLayout bookId="book22" chapter="chapter4" chapters={getChaptersForBook('book22')}><Book22Ch4 /></BookLayout>} />
        <Route path="/book22/chapter5" element={<BookLayout bookId="book22" chapter="chapter5" chapters={getChaptersForBook('book22')}><Book22Ch5 /></BookLayout>} />
        <Route path="/book22/chapter6" element={<BookLayout bookId="book22" chapter="chapter6" chapters={getChaptersForBook('book22')}><Book22Ch6 /></BookLayout>} />
        <Route path="/book22/chapter7" element={<BookLayout bookId="book22" chapter="chapter7" chapters={getChaptersForBook('book22')}><Book22Ch7 /></BookLayout>} />
        <Route path="/book22/chapter8" element={<BookLayout bookId="book22" chapter="chapter8" chapters={getChaptersForBook('book22')}><Book22Ch8 /></BookLayout>} />
        <Route path="/book22/chapter9" element={<BookLayout bookId="book22" chapter="chapter9" chapters={getChaptersForBook('book22')}><Book22Ch9 /></BookLayout>} />
        <Route path="/book/22" element={<BookLayout bookId="book22" chapter="home" chapters={getChaptersForBook('book22')}><Book22Home /></BookLayout>} />

        {/* ========== Book 23: 舊約聖經人物圖鑑 ========== */}
        <Route path="/book23/home" element={<BookLayout bookId="book23" chapter="home" chapters={getChaptersForBook('book23')}><Book23Home /></BookLayout>} />
        <Route path="/book23/nebuchadnezzar" element={<BookLayout bookId="book23" chapter="nebuchadnezzar" chapters={getChaptersForBook('book23')}><Book23Nebuchadnezzar /></BookLayout>} />
        <Route path="/book23/relation-chart" element={<BookLayout bookId="book23" chapter="relation-chart" chapters={getChaptersForBook('book23')}><Book23RelationChart /></BookLayout>} />
        <Route path="/book/23" element={<BookLayout bookId="book23" chapter="home" chapters={getChaptersForBook('book23')}><Book23Home /></BookLayout>} />

        {/* ========== Book 24: 盼望和教導 ========== */}
        <Route path="/book24/home" element={<BookLayout bookId="book24" chapter="home" chapters={getChaptersForBook('book24')}><Book24Home /></BookLayout>} />
        <Route path="/book24/chapter1" element={<BookLayout bookId="book24" chapter="chapter1" chapters={getChaptersForBook('book24')}><Book24Ch1 /></BookLayout>} />
        <Route path="/book24/chapter2" element={<BookLayout bookId="book24" chapter="chapter2" chapters={getChaptersForBook('book24')}><Book24Ch2 /></BookLayout>} />
        <Route path="/book24/chapter3" element={<BookLayout bookId="book24" chapter="chapter3" chapters={getChaptersForBook('book24')}><Book24Ch3 /></BookLayout>} />
        <Route path="/book24/chapter4" element={<BookLayout bookId="book24" chapter="chapter4" chapters={getChaptersForBook('book24')}><Book24Ch4 /></BookLayout>} />
        <Route path="/book24/chapter5" element={<BookLayout bookId="book24" chapter="chapter5" chapters={getChaptersForBook('book24')}><Book24Ch5 /></BookLayout>} />
        <Route path="/book24/chapter6" element={<BookLayout bookId="book24" chapter="chapter6" chapters={getChaptersForBook('book24')}><Book24Ch6 /></BookLayout>} />
        <Route path="/book24/chapter7" element={<BookLayout bookId="book24" chapter="chapter7" chapters={getChaptersForBook('book24')}><Book24Ch7 /></BookLayout>} />
        <Route path="/book24/chapter8" element={<BookLayout bookId="book24" chapter="chapter8" chapters={getChaptersForBook('book24')}><Book24Ch8 /></BookLayout>} />
        <Route path="/book24/chapter9" element={<BookLayout bookId="book24" chapter="chapter9" chapters={getChaptersForBook('book24')}><Book24Ch9 /></BookLayout>} />
        <Route path="/book/24" element={<BookLayout bookId="book24" chapter="home" chapters={getChaptersForBook('book24')}><Book24Home /></BookLayout>} />
        <Route path="/book25/home" element={<BookLayout bookId="book25" chapter="home" chapters={getChaptersForBook('book25')}><Book25Home /></BookLayout>} />
        <Route path="/book25/chapter1" element={<BookLayout bookId="book25" chapter="chapter1" chapters={getChaptersForBook('book25')}><Book25Ch1 /></BookLayout>} />
        <Route path="/book25/chapter2" element={<BookLayout bookId="book25" chapter="chapter2" chapters={getChaptersForBook('book25')}><Book25Ch2 /></BookLayout>} />
        <Route path="/book25/chapter3" element={<BookLayout bookId="book25" chapter="chapter3" chapters={getChaptersForBook('book25')}><Book25Ch3 /></BookLayout>} />
        <Route path="/book25/chapter4" element={<BookLayout bookId="book25" chapter="chapter4" chapters={getChaptersForBook('book25')}><Book25Ch4 /></BookLayout>} />
        <Route path="/book25/chapter5" element={<BookLayout bookId="book25" chapter="chapter5" chapters={getChaptersForBook('book25')}><Book25Ch5 /></BookLayout>} />
        <Route path="/book25/chapter6" element={<BookLayout bookId="book25" chapter="chapter6" chapters={getChaptersForBook('book25')}><Book25Ch6 /></BookLayout>} />
        <Route path="/book25/chapter7" element={<BookLayout bookId="book25" chapter="chapter7" chapters={getChaptersForBook('book25')}><Book25Ch7 /></BookLayout>} />
        <Route path="/book25/chapter8" element={<BookLayout bookId="book25" chapter="chapter8" chapters={getChaptersForBook('book25')}><Book25Ch8 /></BookLayout>} />
        <Route path="/book25/chapter9" element={<BookLayout bookId="book25" chapter="chapter9" chapters={getChaptersForBook('book25')}><Book25Ch9 /></BookLayout>} />
        <Route path="/book25/chapter10" element={<BookLayout bookId="book25" chapter="chapter10" chapters={getChaptersForBook('book25')}><Book25Ch10 /></BookLayout>} />
        <Route path="/book25/chapter11" element={<BookLayout bookId="book25" chapter="chapter11" chapters={getChaptersForBook('book25')}><Book25Ch11 /></BookLayout>} />
        <Route path="/book25/chapter12" element={<BookLayout bookId="book25" chapter="chapter12" chapters={getChaptersForBook('book25')}><Book25Ch12 /></BookLayout>} />
        <Route path="/book/25" element={<BookLayout bookId="book25" chapter="home" chapters={getChaptersForBook('book25')}><Book25Home /></BookLayout>} />

        {/* ========== Book 26 ========== */}
        <Route path="/book26/home" element={<BookLayout bookId="book26" chapter="home" chapters={getChaptersForBook('book26')}><Book26Home /></BookLayout>} />
        <Route path="/book26/chapter1" element={<BookLayout bookId="book26" chapter="chapter1" chapters={getChaptersForBook('book26')}><Book26Ch1 /></BookLayout>} />
        <Route path="/book26/chapter2" element={<BookLayout bookId="book26" chapter="chapter2" chapters={getChaptersForBook('book26')}><Book26Ch2 /></BookLayout>} />
        <Route path="/book26/chapter3" element={<BookLayout bookId="book26" chapter="chapter3" chapters={getChaptersForBook('book26')}><Book26Ch3 /></BookLayout>} />
        <Route path="/book26/chapter4" element={<BookLayout bookId="book26" chapter="chapter4" chapters={getChaptersForBook('book26')}><Book26Ch4 /></BookLayout>} />
        <Route path="/book26/chapter5" element={<BookLayout bookId="book26" chapter="chapter5" chapters={getChaptersForBook('book26')}><Book26Ch5 /></BookLayout>} />
        <Route path="/book26/chapter6" element={<BookLayout bookId="book26" chapter="chapter6" chapters={getChaptersForBook('book26')}><Book26Ch6 /></BookLayout>} />
        <Route path="/book26/chapter7" element={<BookLayout bookId="book26" chapter="chapter7" chapters={getChaptersForBook('book26')}><Book26Ch7 /></BookLayout>} />
        <Route path="/book/26" element={<BookLayout bookId="book26" chapter="home" chapters={getChaptersForBook('book26')}><Book26Home /></BookLayout>} />

        {/* ========== Book 27 - 人如何改變 ========== */}
        <Route path="/book27/home" element={<BookLayout bookId="book27" chapter="home" chapters={getChaptersForBook('book27')}><Book27Home /></BookLayout>} />
        <Route path="/book27/chapter1" element={<BookLayout bookId="book27" chapter="chapter1" chapters={getChaptersForBook('book27')}><Book27Ch1 /></BookLayout>} />
        <Route path="/book27/chapter2" element={<BookLayout bookId="book27" chapter="chapter2" chapters={getChaptersForBook('book27')}><Book27Ch2 /></BookLayout>} />
        <Route path="/book27/chapter3" element={<BookLayout bookId="book27" chapter="chapter3" chapters={getChaptersForBook('book27')}><Book27Ch3 /></BookLayout>} />
        <Route path="/book27/chapter4" element={<BookLayout bookId="book27" chapter="chapter4" chapters={getChaptersForBook('book27')}><Book27Ch4 /></BookLayout>} />
        <Route path="/book27/chapter5" element={<BookLayout bookId="book27" chapter="chapter5" chapters={getChaptersForBook('book27')}><Book27Ch5 /></BookLayout>} />
        <Route path="/book27/chapter6" element={<BookLayout bookId="book27" chapter="chapter6" chapters={getChaptersForBook('book27')}><Book27Ch6 /></BookLayout>} />
        <Route path="/book27/chapter7" element={<BookLayout bookId="book27" chapter="chapter7" chapters={getChaptersForBook('book27')}><Book27Ch7 /></BookLayout>} />
        <Route path="/book27/chapter8" element={<BookLayout bookId="book27" chapter="chapter8" chapters={getChaptersForBook('book27')}><Book27Ch8 /></BookLayout>} />
        <Route path="/book27/chapter9" element={<BookLayout bookId="book27" chapter="chapter9" chapters={getChaptersForBook('book27')}><Book27Ch9 /></BookLayout>} />
        <Route path="/book27/chapter10" element={<BookLayout bookId="book27" chapter="chapter10" chapters={getChaptersForBook('book27')}><Book27Ch10 /></BookLayout>} />
        <Route path="/book27/chapter11" element={<BookLayout bookId="book27" chapter="chapter11" chapters={getChaptersForBook('book27')}><Book27Ch11 /></BookLayout>} />
        <Route path="/book27/chapter12" element={<BookLayout bookId="book27" chapter="chapter12" chapters={getChaptersForBook('book27')}><Book27Ch12 /></BookLayout>} />
        <Route path="/book/27" element={<BookLayout bookId="book27" chapter="home" chapters={getChaptersForBook('book27')}><Book27Home /></BookLayout>} />

        {/* ========== Book 28 - 人如何改變（教師本） ========== */}
        <Route path="/book28/home" element={<BookLayout bookId="book28" chapter="home" chapters={getChaptersForBook('book28')}><Book28Home /></BookLayout>} />
        <Route path="/book28/chapter1" element={<BookLayout bookId="book28" chapter="chapter1" chapters={getChaptersForBook('book28')}><Book28Ch1 /></BookLayout>} />
        <Route path="/book28/chapter2" element={<BookLayout bookId="book28" chapter="chapter2" chapters={getChaptersForBook('book28')}><Book28Ch2 /></BookLayout>} />
        <Route path="/book28/chapter3" element={<BookLayout bookId="book28" chapter="chapter3" chapters={getChaptersForBook('book28')}><Book28Ch3 /></BookLayout>} />
        <Route path="/book28/chapter4" element={<BookLayout bookId="book28" chapter="chapter4" chapters={getChaptersForBook('book28')}><Book28Ch4 /></BookLayout>} />
        <Route path="/book28/chapter5" element={<BookLayout bookId="book28" chapter="chapter5" chapters={getChaptersForBook('book28')}><Book28Ch5 /></BookLayout>} />
        <Route path="/book28/chapter6" element={<BookLayout bookId="book28" chapter="chapter6" chapters={getChaptersForBook('book28')}><Book28Ch6 /></BookLayout>} />
        <Route path="/book28/chapter7" element={<BookLayout bookId="book28" chapter="chapter7" chapters={getChaptersForBook('book28')}><Book28Ch7 /></BookLayout>} />
        <Route path="/book28/chapter8" element={<BookLayout bookId="book28" chapter="chapter8" chapters={getChaptersForBook('book28')}><Book28Ch8 /></BookLayout>} />
        <Route path="/book28/chapter9" element={<BookLayout bookId="book28" chapter="chapter9" chapters={getChaptersForBook('book28')}><Book28Ch9 /></BookLayout>} />
        <Route path="/book28/chapter10" element={<BookLayout bookId="book28" chapter="chapter10" chapters={getChaptersForBook('book28')}><Book28Ch10 /></BookLayout>} />
        <Route path="/book28/chapter11" element={<BookLayout bookId="book28" chapter="chapter11" chapters={getChaptersForBook('book28')}><Book28Ch11 /></BookLayout>} />
        <Route path="/book28/chapter12" element={<BookLayout bookId="book28" chapter="chapter12" chapters={getChaptersForBook('book28')}><Book28Ch12 /></BookLayout>} />
        <Route path="/book/28" element={<BookLayout bookId="book28" chapter="home" chapters={getChaptersForBook('book28')}><Book28Home /></BookLayout>} />

        {/* ========== Book 29 - 指向終末的創世記 ========== */}
        <Route path="/book29/home" element={<BookLayout bookId="book29" chapter="home" chapters={getChaptersForBook('book29')}><Book29Home /></BookLayout>} />
        <Route path="/book29/chapter1" element={<BookLayout bookId="book29" chapter="chapter1" chapters={getChaptersForBook('book29')}><Book29Ch1 /></BookLayout>} />
        <Route path="/book29/chapter2" element={<BookLayout bookId="book29" chapter="chapter2" chapters={getChaptersForBook('book29')}><Book29Ch2 /></BookLayout>} />
        <Route path="/book29/chapter3" element={<BookLayout bookId="book29" chapter="chapter3" chapters={getChaptersForBook('book29')}><Book29Ch3 /></BookLayout>} />
        <Route path="/book29/chapter4" element={<BookLayout bookId="book29" chapter="chapter4" chapters={getChaptersForBook('book29')}><Book29Ch4 /></BookLayout>} />
        <Route path="/book29/chapter5" element={<BookLayout bookId="book29" chapter="chapter5" chapters={getChaptersForBook('book29')}><Book29Ch5 /></BookLayout>} />
        <Route path="/book29/chapter6" element={<BookLayout bookId="book29" chapter="chapter6" chapters={getChaptersForBook('book29')}><Book29Ch6 /></BookLayout>} />
        <Route path="/book29/chapter7" element={<BookLayout bookId="book29" chapter="chapter7" chapters={getChaptersForBook('book29')}><Book29Ch7 /></BookLayout>} />
        <Route path="/book29/chapter8" element={<BookLayout bookId="book29" chapter="chapter8" chapters={getChaptersForBook('book29')}><Book29Ch8 /></BookLayout>} />
        <Route path="/book29/chapter9" element={<BookLayout bookId="book29" chapter="chapter9" chapters={getChaptersForBook('book29')}><Book29Ch9 /></BookLayout>} />
        <Route path="/book29/chapter10" element={<BookLayout bookId="book29" chapter="chapter10" chapters={getChaptersForBook('book29')}><Book29Ch10 /></BookLayout>} />
        <Route path="/book29/chapter11" element={<BookLayout bookId="book29" chapter="chapter11" chapters={getChaptersForBook('book29')}><Book29Ch11 /></BookLayout>} />
        <Route path="/book29/chapter12" element={<BookLayout bookId="book29" chapter="chapter12" chapters={getChaptersForBook('book29')}><Book29Ch12 /></BookLayout>} />
        <Route path="/book29/chapter13" element={<BookLayout bookId="book29" chapter="chapter13" chapters={getChaptersForBook('book29')}><Book29Ch13 /></BookLayout>} />
        <Route path="/book29/chapter14" element={<BookLayout bookId="book29" chapter="chapter14" chapters={getChaptersForBook('book29')}><Book29Ch14 /></BookLayout>} />
        <Route path="/book29/chapter15" element={<BookLayout bookId="book29" chapter="chapter15" chapters={getChaptersForBook('book29')}><Book29Ch15 /></BookLayout>} />
        <Route path="/book29/chapter16" element={<BookLayout bookId="book29" chapter="chapter16" chapters={getChaptersForBook('book29')}><Book29Ch16 /></BookLayout>} />
        <Route path="/book29/chapter17" element={<BookLayout bookId="book29" chapter="chapter17" chapters={getChaptersForBook('book29')}><Book29Ch17 /></BookLayout>} />
        <Route path="/book29/chapter18" element={<BookLayout bookId="book29" chapter="chapter18" chapters={getChaptersForBook('book29')}><Book29Ch18 /></BookLayout>} />
        <Route path="/book29/chapter19" element={<BookLayout bookId="book29" chapter="chapter19" chapters={getChaptersForBook('book29')}><Book29Ch19 /></BookLayout>} />
        <Route path="/book29/chapter20" element={<BookLayout bookId="book29" chapter="chapter20" chapters={getChaptersForBook('book29')}><Book29Ch20 /></BookLayout>} />
        <Route path="/book29/chapter21" element={<BookLayout bookId="book29" chapter="chapter21" chapters={getChaptersForBook('book29')}><Book29Ch21 /></BookLayout>} />
        <Route path="/book29/chapter22" element={<BookLayout bookId="book29" chapter="chapter22" chapters={getChaptersForBook('book29')}><Book29Ch22 /></BookLayout>} />
        <Route path="/book29/chapter23" element={<BookLayout bookId="book29" chapter="chapter23" chapters={getChaptersForBook('book29')}><Book29Ch23 /></BookLayout>} />
        <Route path="/book29/chapter24" element={<BookLayout bookId="book29" chapter="chapter24" chapters={getChaptersForBook('book29')}><Book29Ch24 /></BookLayout>} />
        <Route path="/book29/chapter25" element={<BookLayout bookId="book29" chapter="chapter25" chapters={getChaptersForBook('book29')}><Book29Ch25 /></BookLayout>} />
        <Route path="/book29/chapter26" element={<BookLayout bookId="book29" chapter="chapter26" chapters={getChaptersForBook('book29')}><Book29Ch26 /></BookLayout>} />
        <Route path="/book29/chapter27" element={<BookLayout bookId="book29" chapter="chapter27" chapters={getChaptersForBook('book29')}><Book29Ch27 /></BookLayout>} />
        <Route path="/book29/chapter28" element={<BookLayout bookId="book29" chapter="chapter28" chapters={getChaptersForBook('book29')}><Book29Ch28 /></BookLayout>} />
        <Route path="/book29/chapter29" element={<BookLayout bookId="book29" chapter="chapter29" chapters={getChaptersForBook('book29')}><Book29Ch29 /></BookLayout>} />
        <Route path="/book29/chapter30" element={<BookLayout bookId="book29" chapter="chapter30" chapters={getChaptersForBook('book29')}><Book29Ch30 /></BookLayout>} />
        <Route path="/book29/chapter31" element={<BookLayout bookId="book29" chapter="chapter31" chapters={getChaptersForBook('book29')}><Book29Ch31 /></BookLayout>} />
        <Route path="/book29/chapter32" element={<BookLayout bookId="book29" chapter="chapter32" chapters={getChaptersForBook('book29')}><Book29Ch32 /></BookLayout>} />
        <Route path="/book29/chapter33" element={<BookLayout bookId="book29" chapter="chapter33" chapters={getChaptersForBook('book29')}><Book29Ch33 /></BookLayout>} />
        <Route path="/book29/chapter34" element={<BookLayout bookId="book29" chapter="chapter34" chapters={getChaptersForBook('book29')}><Book29Ch34 /></BookLayout>} />
        <Route path="/book29/chapter35" element={<BookLayout bookId="book29" chapter="chapter35" chapters={getChaptersForBook('book29')}><Book29Ch35 /></BookLayout>} />
        <Route path="/book29/chapter36" element={<BookLayout bookId="book29" chapter="chapter36" chapters={getChaptersForBook('book29')}><Book29Ch36 /></BookLayout>} />
        <Route path="/book29/chapter37" element={<BookLayout bookId="book29" chapter="chapter37" chapters={getChaptersForBook('book29')}><Book29Ch37 /></BookLayout>} />
        <Route path="/book29/chapter38" element={<BookLayout bookId="book29" chapter="chapter38" chapters={getChaptersForBook('book29')}><Book29Ch38 /></BookLayout>} />
        <Route path="/book29/chapter39" element={<BookLayout bookId="book29" chapter="chapter39" chapters={getChaptersForBook('book29')}><Book29Ch39 /></BookLayout>} />
        <Route path="/book29/chapter40" element={<BookLayout bookId="book29" chapter="chapter40" chapters={getChaptersForBook('book29')}><Book29Ch40 /></BookLayout>} />
        <Route path="/book29/chapter41" element={<BookLayout bookId="book29" chapter="chapter41" chapters={getChaptersForBook('book29')}><Book29Ch41 /></BookLayout>} />
        <Route path="/book29/chapter42" element={<BookLayout bookId="book29" chapter="chapter42" chapters={getChaptersForBook('book29')}><Book29Ch42 /></BookLayout>} />
        <Route path="/book29/chapter43" element={<BookLayout bookId="book29" chapter="chapter43" chapters={getChaptersForBook('book29')}><Book29Ch43 /></BookLayout>} />
        <Route path="/book29/chapter44" element={<BookLayout bookId="book29" chapter="chapter44" chapters={getChaptersForBook('book29')}><Book29Ch44 /></BookLayout>} />
        <Route path="/book29/chapter45" element={<BookLayout bookId="book29" chapter="chapter45" chapters={getChaptersForBook('book29')}><Book29Ch45 /></BookLayout>} />
        <Route path="/book29/chapter46" element={<BookLayout bookId="book29" chapter="chapter46" chapters={getChaptersForBook('book29')}><Book29Ch46 /></BookLayout>} />
        <Route path="/book29/chapter47" element={<BookLayout bookId="book29" chapter="chapter47" chapters={getChaptersForBook('book29')}><Book29Ch47 /></BookLayout>} />
        <Route path="/book29/chapter48" element={<BookLayout bookId="book29" chapter="chapter48" chapters={getChaptersForBook('book29')}><Book29Ch48 /></BookLayout>} />
        <Route path="/book29/chapter49" element={<BookLayout bookId="book29" chapter="chapter49" chapters={getChaptersForBook('book29')}><Book29Ch49 /></BookLayout>} />
        <Route path="/book29/chapter50" element={<BookLayout bookId="book29" chapter="chapter50" chapters={getChaptersForBook('book29')}><Book29Ch50 /></BookLayout>} />
        <Route path="/book29/chapter51" element={<BookLayout bookId="book29" chapter="chapter51" chapters={getChaptersForBook('book29')}><Book29Ch51 /></BookLayout>} />
        <Route path="/book29/chapter52" element={<BookLayout bookId="book29" chapter="chapter52" chapters={getChaptersForBook('book29')}><Book29Ch52 /></BookLayout>} />
        <Route path="/book29/chapter53" element={<BookLayout bookId="book29" chapter="chapter53" chapters={getChaptersForBook('book29')}><Book29Ch53 /></BookLayout>} />
        <Route path="/book29/chapter54" element={<BookLayout bookId="book29" chapter="chapter54" chapters={getChaptersForBook('book29')}><Book29Ch54 /></BookLayout>} />
        <Route path="/book29/chapter55" element={<BookLayout bookId="book29" chapter="chapter55" chapters={getChaptersForBook('book29')}><Book29Ch55 /></BookLayout>} />
        <Route path="/book29/chapter56" element={<BookLayout bookId="book29" chapter="chapter56" chapters={getChaptersForBook('book29')}><Book29Ch56 /></BookLayout>} />
        <Route path="/book29/chapter57" element={<BookLayout bookId="book29" chapter="chapter57" chapters={getChaptersForBook('book29')}><Book29Ch57 /></BookLayout>} />
        <Route path="/book29/chapter58" element={<BookLayout bookId="book29" chapter="chapter58" chapters={getChaptersForBook('book29')}><Book29Ch58 /></BookLayout>} />
        <Route path="/book29/chapter59" element={<BookLayout bookId="book29" chapter="chapter59" chapters={getChaptersForBook('book29')}><Book29Ch59 /></BookLayout>} />
        <Route path="/book29/chapter60" element={<BookLayout bookId="book29" chapter="chapter60" chapters={getChaptersForBook('book29')}><Book29Ch60 /></BookLayout>} />
        <Route path="/book29/conclusion" element={<BookLayout bookId="book29" chapter="conclusion" chapters={getChaptersForBook('book29')}><Book29Conclusion /></BookLayout>} />
        <Route path="/book29/appendix1" element={<BookLayout bookId="book29" chapter="appendix1" chapters={getChaptersForBook('book29')}><Book29Appendix1 /></BookLayout>} />
        <Route path="/book29/appendix2" element={<BookLayout bookId="book29" chapter="appendix2" chapters={getChaptersForBook('book29')}><Book29Appendix2 /></BookLayout>} />
        <Route path="/book29/appendix3" element={<BookLayout bookId="book29" chapter="appendix3" chapters={getChaptersForBook('book29')}><Book29Appendix3 /></BookLayout>} />
        <Route path="/book29/appendix4" element={<BookLayout bookId="book29" chapter="appendix4" chapters={getChaptersForBook('book29')}><Book29Appendix4 /></BookLayout>} />
        <Route path="/book29/appendix5" element={<BookLayout bookId="book29" chapter="appendix5" chapters={getChaptersForBook('book29')}><Book29Appendix5 /></BookLayout>} />
        <Route path="/book29/appendix6" element={<BookLayout bookId="book29" chapter="appendix6" chapters={getChaptersForBook('book29')}><Book29Appendix6 /></BookLayout>} />
        <Route path="/book29/appendix7" element={<BookLayout bookId="book29" chapter="appendix7" chapters={getChaptersForBook('book29')}><Book29Appendix7 /></BookLayout>} />
        <Route path="/book29/bibliography" element={<BookLayout bookId="book29" chapter="bibliography" chapters={getChaptersForBook('book29')}><Book29Bibliography /></BookLayout>} />
        <Route path="/book/29" element={<BookLayout bookId="book29" chapter="home" chapters={getChaptersForBook('book29')}><Book29Home /></BookLayout>} />

        {/* ========== Book 30 - 科學創造論 ========== */}
        <Route path="/book30/home" element={<BookLayout bookId="book30" chapter="home" chapters={getChaptersForBook('book30')}><Book30Home /></BookLayout>} />
        <Route path="/book30/chapter1" element={<BookLayout bookId="book30" chapter="chapter1" chapters={getChaptersForBook('book30')}><Book30Ch1 /></BookLayout>} />
        <Route path="/book30/chapter2" element={<BookLayout bookId="book30" chapter="chapter2" chapters={getChaptersForBook('book30')}><Book30Ch2 /></BookLayout>} />
        <Route path="/book30/chapter3" element={<BookLayout bookId="book30" chapter="chapter3" chapters={getChaptersForBook('book30')}><Book30Ch3 /></BookLayout>} />
        <Route path="/book30/chapter4" element={<BookLayout bookId="book30" chapter="chapter4" chapters={getChaptersForBook('book30')}><Book30Ch4 /></BookLayout>} />
        <Route path="/book30/chapter5" element={<BookLayout bookId="book30" chapter="chapter5" chapters={getChaptersForBook('book30')}><Book30Ch5 /></BookLayout>} />
        <Route path="/book30/chapter6" element={<BookLayout bookId="book30" chapter="chapter6" chapters={getChaptersForBook('book30')}><Book30Ch6 /></BookLayout>} />
        <Route path="/book30/chapter7" element={<BookLayout bookId="book30" chapter="chapter7" chapters={getChaptersForBook('book30')}><Book30Ch7 /></BookLayout>} />
        <Route path="/book30/chapter8" element={<BookLayout bookId="book30" chapter="chapter8" chapters={getChaptersForBook('book30')}><Book30Ch8 /></BookLayout>} />
        <Route path="/book/30" element={<BookLayout bookId="book30" chapter="home" chapters={getChaptersForBook('book30')}><Book30Home /></BookLayout>} />

        {/* ========== Book 31 - 創世以來的奧秘 ========== */}
        <Route path="/book31/home" element={<BookLayout bookId="book31" chapter="home" chapters={getChaptersForBook('book31')}><Book31Home /></BookLayout>} />
        <Route path="/book31/chapter1" element={<BookLayout bookId="book31" chapter="chapter1" chapters={getChaptersForBook('book31')}><Book31Ch1 /></BookLayout>} />
        <Route path="/book31/chapter2" element={<BookLayout bookId="book31" chapter="chapter2" chapters={getChaptersForBook('book31')}><Book31Ch2 /></BookLayout>} />
        <Route path="/book31/chapter3" element={<BookLayout bookId="book31" chapter="chapter3" chapters={getChaptersForBook('book31')}><Book31Ch3 /></BookLayout>} />
        <Route path="/book31/chapter4" element={<BookLayout bookId="book31" chapter="chapter4" chapters={getChaptersForBook('book31')}><Book31Ch4 /></BookLayout>} />
        <Route path="/book31/chapter5" element={<BookLayout bookId="book31" chapter="chapter5" chapters={getChaptersForBook('book31')}><Book31Ch5 /></BookLayout>} />
        <Route path="/book31/chapter6" element={<BookLayout bookId="book31" chapter="chapter6" chapters={getChaptersForBook('book31')}><Book31Ch6 /></BookLayout>} />
        <Route path="/book31/chapter7" element={<BookLayout bookId="book31" chapter="chapter7" chapters={getChaptersForBook('book31')}><Book31Ch7 /></BookLayout>} />
        <Route path="/book31/chapter8" element={<BookLayout bookId="book31" chapter="chapter8" chapters={getChaptersForBook('book31')}><Book31Ch8 /></BookLayout>} />
        <Route path="/book31/chapter9" element={<BookLayout bookId="book31" chapter="chapter9" chapters={getChaptersForBook('book31')}><Book31Ch9 /></BookLayout>} />
        <Route path="/book31/chapter10" element={<BookLayout bookId="book31" chapter="chapter10" chapters={getChaptersForBook('book31')}><Book31Ch10 /></BookLayout>} />
        <Route path="/book31/chapter11" element={<BookLayout bookId="book31" chapter="chapter11" chapters={getChaptersForBook('book31')}><Book31Ch11 /></BookLayout>} />
        <Route path="/book31/chapter12" element={<BookLayout bookId="book31" chapter="chapter12" chapters={getChaptersForBook('book31')}><Book31Ch12 /></BookLayout>} />
        <Route path="/book/31" element={<BookLayout bookId="book31" chapter="home" chapters={getChaptersForBook('book31')}><Book31Home /></BookLayout>} />
        <Route path="/book32/home" element={<BookLayout bookId="book32" chapter="home" chapters={getChaptersForBook('book32')}><Book32Home /></BookLayout>} />
        <Route path="/book32/preface" element={<BookLayout bookId="book32" chapter="preface" chapters={getChaptersForBook('book32')}><Book32Preface /></BookLayout>} />
        <Route path="/book32/introduction" element={<BookLayout bookId="book32" chapter="introduction" chapters={getChaptersForBook('book32')}><Book32Introduction /></BookLayout>} />
        <Route path="/book32/chapter1" element={<BookLayout bookId="book32" chapter="chapter1" chapters={getChaptersForBook('book32')}><Book32Ch1 /></BookLayout>} />
        <Route path="/book32/chapter2" element={<BookLayout bookId="book32" chapter="chapter2" chapters={getChaptersForBook('book32')}><Book32Ch2 /></BookLayout>} />
        <Route path="/book32/chapter3" element={<BookLayout bookId="book32" chapter="chapter3" chapters={getChaptersForBook('book32')}><Book32Ch3 /></BookLayout>} />
        <Route path="/book32/chapter4" element={<BookLayout bookId="book32" chapter="chapter4" chapters={getChaptersForBook('book32')}><Book32Ch4 /></BookLayout>} />
        <Route path="/book32/chapter5" element={<BookLayout bookId="book32" chapter="chapter5" chapters={getChaptersForBook('book32')}><Book32Ch5 /></BookLayout>} />
        <Route path="/book32/chapter6" element={<BookLayout bookId="book32" chapter="chapter6" chapters={getChaptersForBook('book32')}><Book32Ch6 /></BookLayout>} />
        <Route path="/book32/conclusion" element={<BookLayout bookId="book32" chapter="conclusion" chapters={getChaptersForBook('book32')}><Book32Conclusion /></BookLayout>} />
        <Route path="/book32/references" element={<BookLayout bookId="book32" chapter="references" chapters={getChaptersForBook('book32')}><Book32References /></BookLayout>} />
        <Route path="/book/32" element={<BookLayout bookId="book32" chapter="home" chapters={getChaptersForBook('book32')}><Book32Home /></BookLayout>} />
        <Route path="/book33/home" element={<BookLayout bookId="book33" chapter="home" chapters={getChaptersForBook('book33')}><Book33Home /></BookLayout>} />
        <Route path="/book33/forewords" element={<BookLayout bookId="book33" chapter="forewords" chapters={getChaptersForBook('book33')}><Book33Forewords /></BookLayout>} />
        <Route path="/book33/intro" element={<BookLayout bookId="book33" chapter="intro" chapters={getChaptersForBook('book33')}><Book33Intro /></BookLayout>} />
        <Route path="/book33/chapter1" element={<BookLayout bookId="book33" chapter="chapter1" chapters={getChaptersForBook('book33')}><Book33Ch1 /></BookLayout>} />
        <Route path="/book33/chapter2" element={<BookLayout bookId="book33" chapter="chapter2" chapters={getChaptersForBook('book33')}><Book33Ch2 /></BookLayout>} />
        <Route path="/book33/chapter3" element={<BookLayout bookId="book33" chapter="chapter3" chapters={getChaptersForBook('book33')}><Book33Ch3 /></BookLayout>} />
        <Route path="/book/33" element={<BookLayout bookId="book33" chapter="home" chapters={getChaptersForBook('book33')}><Book33Home /></BookLayout>} />

        {/* ========== 首頁 ========== */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="bg-white shadow-md sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-3">
                  <Book className="w-8 h-8 text-blue-600" />
                  <h1 className="text-2xl font-bold text-gray-900">電子書房</h1>
                  <button
                    onClick={() => readerPhone ? handleLogout() : setShowLoginModal(true)}
                    className={`ml-auto px-3 py-1.5 rounded-lg font-semibold text-sm flex items-center gap-1.5 transition-colors ${
                      readerPhone ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                    title={readerPhone ? `已登入：${readerPhone}（點擊登出）` : '登入以跨裝置同步畫重點'}
                  >
                    <User className="w-4 h-4" />
                    <span>{readerPhone ? readerPhone : '登入'}</span>
                  </button>
                </div>
              </div>
            </div>

            {showLoginModal && (
              <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center px-4">
                <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">登入電子書房</h3>
                  <p className="text-xs text-slate-500 mb-4">登入後可跨裝置同步畫重點</p>
                  <input
                    type="text"
                    placeholder="手機號碼"
                    value={loginPhoneInput}
                    onChange={e => setLoginPhoneInput(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2 text-sm"
                  />
                  <input
                    type="password"
                    placeholder="密碼"
                    value={loginPwdInput}
                    onChange={e => setLoginPwdInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleLogin(); }}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2 text-sm"
                  />
                  {loginError && <p className="text-xs text-red-600 mb-2">{loginError}</p>}
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleLogin}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold"
                    >
                      登入
                    </button>
                    <button
                      onClick={() => { setShowLoginModal(false); setLoginError(''); }}
                      className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg py-2 text-sm font-semibold"
                    >
                      略過
                    </button>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <p className="text-gray-600">加載書籍中...</p>
              </div>
            )}

            {!loading && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {(() => {
                  const bookByNumber: Record<number, BookType> = {};
                  displayBooks.forEach(book => {
                    bookByNumber[parseInt(book.book_id.replace('book', ''))] = book;
                  });
                  const categorizedNumbers = new Set(BOOK_CATEGORIES.flatMap(c => c.bookNumbers));
                  const uncategorized = displayBooks
                    .map(book => parseInt(book.book_id.replace('book', '')))
                    .filter(n => !categorizedNumbers.has(n));
                  const categories = uncategorized.length > 0
                    ? [...BOOK_CATEGORIES, { name: '其他', icon: '📚', color: '#6b7280', bg: '#f9fafb', bookNumbers: uncategorized }]
                    : BOOK_CATEGORIES;

                  return categories.map((cat) => {
                    const catBooks = cat.bookNumbers.map(n => bookByNumber[n]).filter(Boolean);
                    if (catBooks.length === 0) return null;
                    const isExpanded = expandedCategories[cat.name] !== false;
                    return (
                      <div key={cat.name} className="mb-4">
                        <button
                          onClick={() => toggleCategory(cat.name)}
                          className="w-full flex items-center gap-2 mb-3 px-4 py-2.5 rounded-r-lg transition-colors"
                          style={{ background: cat.bg, borderLeft: `4px solid ${cat.color}` }}
                        >
                          <span className="text-xl">{cat.icon}</span>
                          <span className="font-bold text-lg" style={{ color: cat.color }}>{cat.name}</span>
                          <span className="text-sm text-gray-400">{catBooks.length} 本</span>
                          <span
                            className="ml-auto text-sm transition-transform"
                            style={{ color: cat.color, transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}
                          >
                            ▾
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-2">
                            {catBooks.map((book) => {
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
                        )}
                      </div>
                    );
                  });
                })()}
              </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
              <p className="text-sm">電子書房 · 數位靈修學習平台</p>
            </div>
          </div>
        } />
      </Routes>
      </Suspense>
    </Router>
    </ErrorBoundary>
  );
};

export default App;
