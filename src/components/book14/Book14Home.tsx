import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Heart, Target } from 'lucide-react';

export default function Book14Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    intro: true,
    toc: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl mb-6">
          <BookOpen className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          活在聖靈中
        </h1>
        <p className="text-xl text-gray-600 mb-2">作者：巴刻（J. I. Packer）</p>
        <p className="text-sm text-gray-500">Keep in Step With the Spirit</p>
      </div>

      <div className="mb-8 border rounded-lg overflow-hidden shadow-md">
        <button
          onClick={() => toggleSection('intro')}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-lg text-gray-800">關於本書</span>
          </div>
          {expanded['intro'] ? 
            <ChevronUp className="w-6 h-6 text-gray-600" /> : 
            <ChevronDown className="w-6 h-6 text-gray-600" />
          }
        </button>
        
        {expanded['intro'] && (
          <div className="p-6 bg-white space-y-4 text-gray-700 leading-relaxed">
            <p>
              《活在聖靈中》是當代福音派神學家巴刻的重要著作之一。本書深入探討聖靈的位格、工作與基督徒生命的關係。
            </p>
            <p>
              本書的核心信息是：聖靈的主要職事是體現主耶穌基督。
            </p>
          </div>
        )}
      </div>

      <div className="border rounded-lg overflow-hidden shadow-md">
        <button
          onClick={() => toggleSection('toc')}
          className="w-full px-6 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-lg text-gray-800">章節目錄</span>
          </div>
          {expanded['toc'] ? 
            <ChevronUp className="w-6 h-6 text-gray-600" /> : 
            <ChevronDown className="w-6 h-6 text-gray-600" />
          }
        </button>
        
        {expanded['toc'] && (
          <div className="p-6 bg-white space-y-3">
            {[
              { num: 1, title: '序言及前言' },
              { num: 2, title: '看清楚聖靈' },
              { num: 3, title: '聖經裡的聖靈' },
              { num: 4, title: '聖靈的路徑－聖潔之道' },
              { num: 5, title: '聖靈的路徑－成聖面面觀' },
              { num: 6, title: '聖靈的路徑－靈恩生活' },
              { num: 7, title: '聖靈的路徑－解釋聖靈生活' },
              { num: 8, title: '聖靈，請來！' },
              { num: 9, title: '附錄：羅馬書第七章的苦中人' }
            ].map(chapter => (
              <div 
                key={chapter.num}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors border border-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                  {chapter.num}
                </div>
                <p className="font-semibold text-gray-800">{chapter.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
