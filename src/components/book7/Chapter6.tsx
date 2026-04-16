import React from 'react';
import { BookOpen, AlertTriangle } from 'lucide-react';

export default function Chapter6() {
  const rules = [
    "每堂課陪讀完後，再提供當課的學生版紙本給學生。",
    "若學員不配合陪讀，請鼓勵他；若依然不願意，可以請牧者或區長加入協助勸勉。",
    "若不配合讀經與聚會，請主動告知牧者團隊有此情況，由牧者團隊加入協助勸勉。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      <div className="bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-amber-300" /><span className="text-amber-300 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>陪讀課程使用守則</h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <div className="space-y-4">
          {rules.map((rule, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold flex-shrink-0">{i+1}</span>
              <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>{rule}</p>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
