// 章節配置檔 - 定義每本書的章節資訊

export interface ChapterInfo {
  id: string;
  title: string;
  path: string;
}

export interface BookChapters {
  [bookId: string]: ChapterInfo[];
}

export const bookChapters: BookChapters = {
  // Book 1 - 立界線得自由 (17章)
  book1: [
    { id: 'home', title: '簡介', path: '/book1/home' },
    { id: 'definition', title: '界線的定義', path: '/book1/definition' },
    { id: 'development', title: '界線的發展', path: '/book1/development' },
    { id: 'myths', title: '界線的迷思', path: '/book1/myths' },
    { id: 'diagnosis', title: '界線的診斷', path: '/book1/diagnosis' },
    { id: 'laws', title: '界線的法則', path: '/book1/laws' },
    { id: 'ch7', title: '第7章', path: '/book1/ch7' },
    { id: 'ch8', title: '第8章', path: '/book1/ch8' },
    { id: 'ch9', title: '第9章', path: '/book1/ch9' },
    { id: 'ch10', title: '第10章', path: '/book1/ch10' },
    { id: 'ch11', title: '第11章', path: '/book1/ch11' },
    { id: 'ch12', title: '第12章', path: '/book1/ch12' },
    { id: 'ch13', title: '第13章', path: '/book1/ch13' },
    { id: 'ch14', title: '第14章', path: '/book1/ch14' },
    { id: 'ch15', title: '第15章', path: '/book1/ch15' },
    { id: 'ch16', title: '第16章', path: '/book1/ch16' },
    { id: 'ch17', title: '第17章', path: '/book1/ch17' },
  ],

  // Book 2 - 情感健康的門徒 (8章)
  book2: [
    { id: 'chapter1', title: '第1章', path: '/book2/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book2/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book2/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book2/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book2/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book2/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book2/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book2/chapter8' },
  ],

  // Book 3 - 你可以更靠近神 (8章)
  book3: [
    { id: 'chapter1', title: '第1章', path: '/book3/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book3/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book3/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book3/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book3/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book3/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book3/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book3/chapter8' },
  ],

  // Book 4 - 成為有感染力的基督徒 (16章)
  book4: [
    { id: 'chapter1', title: '第1章', path: '/book4/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book4/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book4/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book4/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book4/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book4/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book4/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book4/chapter8' },
    { id: 'chapter9', title: '第9章', path: '/book4/chapter9' },
    { id: 'chapter10', title: '第10章', path: '/book4/chapter10' },
    { id: 'chapter11', title: '第11章', path: '/book4/chapter11' },
    { id: 'chapter12', title: '第12章', path: '/book4/chapter12' },
    { id: 'chapter13', title: '第13章', path: '/book4/chapter13' },
    { id: 'chapter14', title: '第14章', path: '/book4/chapter14' },
    { id: 'chapter15', title: '第15章', path: '/book4/chapter15' },
    { id: 'chapter16', title: '第16章', path: '/book4/chapter16' },
  ],

  // Book 5 - 如何活出基督的樣式 (6章)
  book5: [
    { id: 'chapter1', title: '第1章', path: '/book5/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book5/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book5/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book5/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book5/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book5/chapter6' },
  ],

  // Book 6 - 向保羅學宣教 (8章)
  book6: [
    { id: 'chapter1', title: '第1章', path: '/book6/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book6/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book6/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book6/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book6/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book6/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book6/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book6/chapter8' },
  ],

  // Book 7 - 基要陪讀課程 (6章)
  book7: [
    { id: 'chapter1', title: '第1章', path: '/book7/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book7/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book7/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book7/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book7/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book7/chapter6' },
  ],

  // Book 8 - 靈性關懷與身心健康 (12章)
  book8: [
    { id: 'chapter1', title: '第1章', path: '/book8/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book8/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book8/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book8/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book8/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book8/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book8/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book8/chapter8' },
    { id: 'chapter9', title: '第9章', path: '/book8/chapter9' },
    { id: 'chapter10', title: '第10章', path: '/book8/chapter10' },
    { id: 'chapter11', title: '第11章', path: '/book8/chapter11' },
    { id: 'chapter12', title: '第12章', path: '/book8/chapter12' },
  ],

  // Book 9 - 三層天禱告 (7章,包含引言)
  book9: [
    { id: 'intro', title: '引言', path: '/book9/intro' },
    { id: 'chapter1', title: '第1章', path: '/book9/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book9/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book9/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book9/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book9/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book9/chapter6' },
  ],

  // Book 10 - 禱告的盾牌 (9章)
  book10: [
    { id: 'chapter1', title: '第1章', path: '/book10/chapter1' },
    { id: 'chapter2', title: '第2章', path: '/book10/chapter2' },
    { id: 'chapter3', title: '第3章', path: '/book10/chapter3' },
    { id: 'chapter4', title: '第4章', path: '/book10/chapter4' },
    { id: 'chapter5', title: '第5章', path: '/book10/chapter5' },
    { id: 'chapter6', title: '第6章', path: '/book10/chapter6' },
    { id: 'chapter7', title: '第7章', path: '/book10/chapter7' },
    { id: 'chapter8', title: '第8章', path: '/book10/chapter8' },
    { id: 'chapter9', title: '第9章', path: '/book10/chapter9' },
  ],

  // Book 11 - 從懷疑到相信 (目前只有 1 課)
  book11: [
    { id: 'lesson1', title: '第1課', path: '/book11/lesson1' },
  ],
};

// 獲取書籍的章節列表
export const getBookChapters = (bookId: string): ChapterInfo[] => {
  return bookChapters[bookId] || [];
};

// 獲取當前章節的索引
export const getCurrentChapterIndex = (bookId: string, chapterId: string): number => {
  const chapters = getBookChapters(bookId);
  return chapters.findIndex(ch => ch.id === chapterId);
};

// 獲取上一章
export const getPreviousChapter = (bookId: string, chapterId: string): ChapterInfo | null => {
  const chapters = getBookChapters(bookId);
  const currentIndex = getCurrentChapterIndex(bookId, chapterId);
  return currentIndex > 0 ? chapters[currentIndex - 1] : null;
};

// 獲取下一章
export const getNextChapter = (bookId: string, chapterId: string): ChapterInfo | null => {
  const chapters = getBookChapters(bookId);
  const currentIndex = getCurrentChapterIndex(bookId, chapterId);
  return currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
};
