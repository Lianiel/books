import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神學入門</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">什麼是神學？</h3>
              <p className="text-gray-700 leading-relaxed">
                「神學」（Theology）字面意思是「關於上帝的學問」（theos = 上帝，logos = 道/學問）。但神學不只是關於上帝的理論，更是一種生命的探索——在信仰中思考上帝、思考人、思考世界，以及三者之間的關係。許多人一聽到「神學」便感到距離，以為那是學者在書齋中鑽研的抽象學問，與日常信仰生活毫無關係。但事實上，每個思考過「上帝為何讓我受苦？」或「信仰和科學矛盾嗎？」的人，都已經在做神學了。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                中世紀神學家安瑟倫（Anselm of Canterbury，1033-1109）將神學定義為「尋求理解的信仰」（fides quaerens intellectum，faith seeking understanding）。這個定義精準地確立了神學的本質：它的出發點是信仰，而非懷疑；它的動力是愛——因為愛上帝，所以渴望更深地認識上帝。理性不是信仰的法官，而是信仰的僕人，幫助我們更清楚地看見所信的對象。這與後啟蒙時代「先用理性評估、再決定信不信」的認識論截然不同。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">為什麼需要神學？</h3>
              <p className="text-gray-700 leading-relaxed">
                有些基督徒認為神學是「學者的事」，一般信徒只需要「愛主」就夠了，不需要神學。然而這個觀點本身就是一種神學立場——只是一種未加反思的神學。林鴻信指出：每個基督徒都是神學家，因為只要你相信上帝，你就已經持有某種關於上帝的理解。問題不是「做不做神學」，而是「做好的神學還是差的神學」。差的神學往往是不自知的神學——不清楚自己信的是什麼，為什麼這樣信。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                好的神學能幫助信徒：（1）更準確地認識上帝，避免偶像崇拜式的扭曲；（2）更清楚地理解聖經，超越字面的誤解；（3）更有力地面對人生困境，因為有紮實的神學基礎；（4）更有智慧地與這個時代對話，回應科學、哲學、社會議題的挑戰，而不只是退縮到「我們相信就好了」的封閉態度。神學的目標不是把信仰複雜化，而是把信仰建立在更穩固的基礎上。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">如何做神學？</h3>
              <p className="text-gray-700 leading-relaxed">
                好的神學需要幾個基本態度和資源的整合。首先，以聖經為根基——聖經是神學最終的裁判和標準，任何神學主張必須能被聖經支持。其次，透過傳統（Tradition）來理解聖經——教會兩千年來的信仰傳承是上帝恩典保守的智慧，不可輕易棄置。第三，在具體的文化處境（Context）中思考——神學不是在真空中進行的，而是在特定的歷史和文化中回應真實的問題；台灣的神學就必須面對台灣的文化和歷史。第四，以整合的方式對待信仰，讓知性理解與生命經驗相互補足。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                林鴻信特別強調「處境化神學」的重要性：神學不能只引用西方的概念，也要與台灣的歷史傷痛（如二二八）、宗教文化（如民間宗教的命運觀）以及當代社會議題對話。神學思考的對象包括：上帝論（論上帝的本質與工作）、人論（論人的本質與罪）、救贖論（論基督的拯救）、教會論（論教會的本質與使命）、末世論（論歷史的終點與盼望）等。本書的九個探險，正是從這些角度出發，進行系統性而又具處境性的神學思考。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '神學不是學者的專利，而是每個信徒的事：凡持有關於上帝的任何信念，就已在做神學。問題是做好的神學還是差的神學。',
              '安瑟倫的定義最為精準：神學是「尋求理解的信仰」——以信仰為出發點，用理性深化理解，而非用理性審判信仰。',
              '好的神學有四個資源：聖經（最高權威）、傳統（教會歷史的智慧）、理性（系統思考）、經驗（生命實踐）——四者需要整合而非偏廢。',
              '處境化神學的核心：神學必須在具體的文化處境中思考，台灣的神學要與台灣的歷史、文化和社會議題對話，而非照搬西方框架。',
              '神學的目的不是把信仰複雜化，而是幫助信徒更準確地認識上帝、更清楚地讀聖經、更有力地回應人生困境與時代挑戰。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神學與信仰的關係：從安瑟倫說起</h4>
              <p className="text-gray-700 leading-relaxed">安瑟倫「信仰尋求理解」的命題，至今仍是神學最精簡的定義。它的重要性在於確立了信仰與理性的正確關係：信仰在先，理性在後。不是先用理性評估後再決定信不信，而是先相信，然後在信仰中運用理性去更深理解所信的內容。這與後啟蒙時代的認識論截然不同——後者要求先理性審核，再做信仰決定。安瑟倫的傳統提醒我們：對上帝的認識，不純粹是理性命題的接受，而是生命的委身與後續的理解之旅。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神學的不同形式：系統、聖經、歷史、實踐</h4>
              <p className="text-gray-700 leading-relaxed">神學有多種形式：系統神學（將信仰整理成有條理的體系）、聖經神學（依聖經發展脈絡追蹤神學主題）、歷史神學（研究教會歷史中神學思想的演變）、實踐神學（關注信仰如何在教會生活和社會使命中實踐）。這些形式各有貢獻，好的神學思考需要各種形式的整合，不可偏廢。本書嘗試將系統性的介紹與處境性的應用結合在一起。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">處境化神學：神學在台灣</h4>
              <p className="text-gray-700 leading-relaxed">神學不能脫離文化處境。林鴻信的神學著作深受加爾文傳統影響，同時致力於在台灣的文化處境中做神學。這意味著：神學不只引用西方的概念，也要與台灣的歷史傷痛（如二二八）、宗教文化（如民間宗教的命運觀）、以及當代社會議題（如民主化、族群關係）對話。處境化神學不是將信仰遷就文化，而是讓信仰的光照亮具體的生活處境。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你曾認為神學是「學者的事」嗎？讀完本章後，你如何看「每個基督徒都是神學家」這個說法？',
              '你目前持有哪些關於上帝的信念（即使很簡單）？這些信念從何而來——家庭、教會、個人閱讀，還是生命經驗？',
              '「信仰尋求理解」對你意味著什麼？你是否有過「越信越想理解，越理解越信」的循環經驗？',
              '為什麼神學需要考慮文化處境？若完全不考慮處境，神學會有什麼危險？若太過遷就處境，又會有什麼問題？',
              '你認識哪些生命豐盛、信仰根基穩固的基督徒？他們的信仰生命中，「神學思考」扮演了什麼角色？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 寫下你的「個人神學聲明」</h4>
              <p className="text-gray-700 mb-2">用一張A4紙，嘗試回答以下問題（不需要完美，只需要誠實）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我相信上帝是怎樣的？</li>
                <li>我相信人是怎樣的？</li>
                <li>我相信耶穌基督為我做了什麼？</li>
                <li>我認為教會的使命是什麼？</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">這就是你目前的「個人神學」。保存這份文件，半年後再次閱讀和更新，看看你的神學理解如何成長。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 從「為什麼」開始讀聖經</h4>
              <p className="text-gray-700 mb-2">選一段你熟悉的聖經（如約翰福音3:16），不只問「這節說什麼」，也問：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這節話在整本約翰福音的脈絡中是什麼意思？</li>
                <li>「上帝愛世人」在約翰寫作的時代背景下有何特殊意義？</li>
                <li>這節話對今天台灣的我有什麼具體意義？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主上帝，感謝祢賜給我理性的能力，使我能思考祢、理解祢。求祢保守我，使我的神學思考不只是頭腦的活動，而是生命的委身。願我在尋求理解的同時，信心不減；在深入思考時，謙卑不失。使我的神學成為見證的工具，帶領更多人認識祢。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
