import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">第7章 聖靈的引導</h1>

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
          <div className="p-4 bg-white border-t">
            <p className="text-gray-700 mb-4">內容待填...</p>
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
