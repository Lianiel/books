import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">第8章 聖靈的工作</h1>

      {/* Content Section */}
      <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('content')}
          className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded.content ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {expanded.content && (
          <div className="p-4 bg-white border-t space-y-4">
            <p className="text-gray-700">聖靈的工作涵蓋基督徒生活的各個層面。他在我們心中重生我們，使我們成為神的兒女。他內住在我們裡面，提供不息的力量和安慰。聖靈不斷地在我們的心中動工，使我們漸漸相似基督。</p>
            <div className="mt-3 p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>羅馬書 8:9-11</strong> - 「如果神的靈住在你們心裡，你們就不屬肉體，乃屬聖靈了。人若沒有基督的靈，就不是屬基督的。基督若在你們心裡，身體就因罪而死，靈卻因義而活。然而，叫耶穌從死裡復活者的靈若住在你們心裡，那叫基督從死裡復活的，也必藉著住在你們心裡的聖靈，使你們必死的身體又活過來。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Extended Exploration */}
      <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('exploration')}
          className="w-full px-4 py-3 bg-indigo-50 hover:bg-indigo-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-gray-800">深層探討</span>
          </div>
          {expanded.exploration ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {expanded.exploration && (
          <div className="p-4 bg-white border-t">
            <p className="text-gray-700 mb-4">探討內容待填...</p>
          </div>
        )}
      </div>

      {/* Reflection Questions */}
      <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('questions')}
          className="w-full px-4 py-3 bg-amber-50 hover:bg-amber-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded.questions ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {expanded.questions && (
          <div className="p-4 bg-white border-t">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>問題待填...</li>
            </ul>
          </div>
        )}
      </div>

      {/* Practical Implementation */}
      <div className="mb-6 border rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('practice')}
          className="w-full px-4 py-3 bg-green-50 hover:bg-green-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-800">實踐應用</span>
          </div>
          {expanded.practice ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {expanded.practice && (
          <div className="p-4 bg-white border-t">
            <p className="text-gray-700 mb-4">實踐內容待填...</p>
          </div>
        )}
      </div>
    </div>
  );
}
