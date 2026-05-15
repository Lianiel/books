// 在原有的 books.ts 檔案中,加入以下內容:

export const books = [
  // ... 原有的 Book 1-11 保持不變 ...

  {
    id: 12,
    title: '十架預言真奇妙',
    author: '李錦彬',
    description: '探討耶穌被釘十字架的預言與真義,揭示聖經預言的精確性與救恩的奧秘',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-700',
    icon: 'Cross',
    category: '福音',
    chapters: [
      {
        id: 'home',
        title: '十架預言真奇妙',
        component: () => import('./books/Book12/Book12Home')
      }
    ]
  }
];
