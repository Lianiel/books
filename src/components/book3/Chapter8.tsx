import React from 'react';
import { BookOpen, Library } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        參考書目
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Library className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">一、中文書目</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <ul className="list-none pl-0 space-y-3">
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                博許 (Bosch, David J.)。《更新變化的宣教：宣教神學的典範與變遷》。白陳毓華譯。台北：中華福音神學院，1999。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 198</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                賈榮禮。《宣教學概論：宣道聖工之基本認識》。黃彼得編譯。台北：中國信徒佈道會，1994。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 198</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                萊特 (Christopher H. Wright)。《宣教中的上帝：顛覆世界的宣教釋經學》。李望遠譯。台北：校園出版社，2011。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 198</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                陳濟民。《成為宣教的教會：從新約看宣教神學與實踐》。台北：校園出版社，2015。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 198</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                范榮真 (Charles Van Engen)。《上帝宣教之民——再思地方教會的目的》。鍾曉文譯。新北市：中華福音神學院，2005。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 199</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                湯姆．賴特 (Tom Wright)。《再思保羅神學爭議》。白陳毓華譯。台北：校園 2000。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 199</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                莊新泉。《牧師保羅：近身觀察第一世紀保羅牧會的實況》。台北：聖經資源中心，2002。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 199</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">二、英文書目</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <ul className="list-none pl-0 space-y-3">
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                Allen, Rolland. Missionary Method: St Paul's or Ours? 2nd ed. Grand Rapid: Eerdmans, 1962.
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 203</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                Beker, J. Christiaan. Paul The Apostle: The Triumph of God in Life and Thought. Philadelphia: Fortress Press, 1984.
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 203</span>
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-0 text-indigo-400">•</span>
                Best, Ernest. Paul and his convert. Edinburgh: T&T Clark, 1988.
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 203</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
