import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 1 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">言語之戰：為神的緣故直達人心</h2>
        <p className="text-sm text-gray-400 mt-1">保羅・大衛・崔普（Paul David Tripp）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、言語無所不在，卻常被輕視</h3>
              <p className="text-gray-700 leading-relaxed">言語充滿我們生命的每一個角落。我們醒來就開口說話，整天以言語與人交往，甚至在夢中也有言語。然而，我們卻常常輕視言語的重要性。我們對自己說：「那不過是隨口說說而已。」但聖經卻告訴我們，言語從來不是「隨口說說」——它帶有方向，它會結出果實，它反映了我們最深處的心靈狀態。</p>
              <p className="text-gray-700 leading-relaxed mt-2">保羅・大衛・崔普在本章以一個真實的生活場景開始：他在一個復活節早晨與妻子路易拉之間發生的一場口角。他用「有益的話」提醒妻子時間已晚，卻忘了那些「有益的話」實際上是帶著批評和不耐煩的言語。這個場景揭示了一個深刻的真理：我們日常的言語生活，往往比我們願意承認的更加混亂。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、聖經是故事，不是主題索引</h3>
              <p className="text-gray-700 leading-relaxed">在探討言語問題之前，崔普先說明聖經的本質。聖經並非按主題排列的百科全書，而是一個宏大的救贖故事——一個有神的注釋的故事。故事旁邊有真理陳述（命題），幫助讀者理解故事的情節；也有應用（律令），幫助讀者在神的故事情節中生活。神以這種方式賜下祂的話語，是要我們帶著「神的故事心態」去生活。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這對言語問題有直接的含義：言語的問題不能脫離這個更大的救贖故事來理解。我們的言語問題根植於人心的墮落，而解決之道也只能在這個救贖故事中找到。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、心是言語的根源（馬太福音 15:18）</h3>
              <p className="text-gray-700 leading-relaxed">耶穌明確說：「從口裡出來的，是從心裡發出來的」（太 15:18）。聖經用「心」（希伯來文 lev）這個詞，概括人的內在生命——包括思想、情感、意志、靈魂。心不是感情的同義詞，而是人的「方向系統」，是人的「方向盤」。我們的行為不是由外在環境決定的，外在環境只能引發（occasion）反應，卻不能決定（determine）反應。</p>
              <p className="text-gray-700 leading-relaxed mt-2">崔普舉了一個生動的例子：他的叔叔在酒後說出了令人髮指的話。但酒精並沒有在他的叔叔心裡製造污穢的思想——那些思想原本就在那裡，酒精只是「鬆開了嘴唇」。當嘴唇鬆開，心裡的東西就流出來了。這正是耶穌所說的：從口裡出來的，從心裡發出來。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、言語之戰的核心意義</h3>
              <p className="text-gray-700 leading-relaxed">理解「言語之戰」，意味著理解言語與心靈的深刻連結。這場戰爭不只是「管好嘴巴」的問題，而是心靈更新的問題。保羅在加拉太書 5:15 警告：「你們要謹慎，若相咬相吞，只怕要彼此消滅了。」保羅用的詞語強烈：他說的不是關係受損，而是人被消滅（devour）。言語能摧毀人的信仰、傷害人的盼望、損害人的身份認同，在別人心裡留下黑暗的遺產。</p>
              <p className="text-gray-700 leading-relaxed mt-2">因此，崔普問了一個讓人不舒服但必要的問題：「我真的愛我所說話的對象嗎？」他指出，許多我們以為是「愛」的東西，實際上不過是自私的偽裝。婚姻中的「愛」，有時只是「找一個能完成自己夢想拼圖的人」。真正的愛，是以十字架為定義的愛——捨己、犧牲、不求自己的益處的愛。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、恩典提供了勇氣直視言語的問題</h3>
              <p className="text-gray-700 leading-relaxed">崔普以彼得後書 1:3 作為盼望的根基：「神的神能已將一切關乎生命和虔敬的事賜給我們。」這裡的動詞是過去完成式——神已經賜下了一切所需的。這不是應許未來可能得著的，而是確認現在已在我們手中的。因此，我們不需要害怕面對言語問題的「恐怖」，因為耶穌——已勝的主——就是我們的。</p>
              <p className="text-gray-700 leading-relaxed mt-2">神不僅賜下赦免（罪得赦免），也賜下能力（勝過罪的力量），並且最終賜下成全（徹底脫離罪的應許）。有一天，神要為我們所有人舉行一個我們都願意參加的葬禮——罪的葬禮。這個盼望，使我們有勇氣謙卑地誠實面對自己言語生活的真實狀況。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '言語從不是中性的——每句話都有方向，朝向建造或破壞，朝向神或遠離神。',
                '聖經是一個救贖故事，言語問題必須放在這個更大的故事框架中理解，不能只靠技巧或規則解決。',
                '心是言語的根源（太 15:18）。外在環境只能引發反應，心靈的狀態才決定言語的內容。',
                '言語有毀滅的力量——加拉太書警告，惡劣的言語能摧毀信仰、損害身份認同、在人心留下黑暗遺產。',
                '真正的愛以十字架為定義：捨己的、犧牲的、不求自己益處的愛，這才是引導我們言語的標準。',
                '神的恩典提供了面對言語問題的勇氣，因為祂已賜下赦免、能力與最終成全的應許。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「心」在聖經中的豐富含義</h4>
              <p className="text-gray-700 leading-relaxed">希伯來文「lev」（心）在聖經中出現近千次，是聖經中發展最完整的主題之一。它不只指情感，而是涵蓋人整個內在生命——思想（如箴言 23:7「他心怎樣思量，他為人就是怎樣」）、意志（如以西結書中神應許要賜給人一顆「新心」）、良知、靈魂深處的傾向。明白「心」的全面含義，讓我們理解為何言語問題是如此根本性的靈命問題，而非行為管理問題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「言語有方向」的箴言神學</h4>
              <p className="text-gray-700 leading-relaxed">箴言從某個角度看，是一本關於「話」的論文。崔普的總結是：「你從來沒有說過一句中性的話。」箴言告訴我們，話有兩個方向：若朝向神的方向，就是鼓勵、盼望、愛、平安、合一、智慧和糾正；若背向神的方向，就是憤怒、惡意、毀謗、嫉妒、閒言、分裂、藐視、種族主義、暴力、審判和定罪。每一句「Talk」（話），都帶著巨大的屬靈意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架愛如何改變我們的言語</h4>
              <p className="text-gray-700 leading-relaxed">崔普強調「十字架形狀的愛」（cruciform love）。十字架的愛不是一種抽象概念，而是一個歷史事件——神在基督裡進入祂的創造，以死亡換來我們的生命。當一個人被這種愛深深感動，他的言語就開始發生變化：從「使用他人」到「服事他人」，從「尋求被理解」到「尋求理解他人」，從「保護自我」到「建造對方」。福音的力量足夠強大，讓我們敢於正視言語的真實問題。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '回想最近一週，有哪句話是你事後希望沒有說出口的？那句話反映了你心裡哪種狀態？',
              '崔普說「你從來沒有說過一句中性的話」。這個說法讓你感到震驚嗎？為什麼？',
              '你在日常生活中，是否曾以「關心」或「有益」為包裝，說出實際上帶有批評或控制意圖的話？',
              '「心是言語的方向盤」——在你最常發生言語衝突的關係中（家人、同事、朋友），你認為是什麼心態驅動了那些衝突？',
              '崔普問：「你所說的愛，究竟是真正的愛，還是以愛為名的自私？」這個問題如何應用在你最親密的關係中？',
              '彼得後書 1:3 說神的神能已賜下一切所需。這個「已賜下」的確據，如何給你面對自己言語問題的勇氣？',
              '如果你的家人或同事能夠看見你「心裡的話」（那些你想說但沒說出口的），你認為他們會看見什麼？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 言語日記（一週操練）</h4>
              <p className="text-gray-700 mb-2">每天結束前，寫下今天一句讓你感到後悔的話和一句讓你感到喜悅的話。不需要評判，只需觀察。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>後悔的話：是什麼情境觸發的？當時心裡有什麼？</li>
                <li>喜悅的話：是什麼讓你能說出那句話？</li>
                <li>一週後回顧，看見自己言語的模式。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">❤️ 心靈檢視禱告</h4>
              <p className="text-gray-700 mb-2">崔普說他每天早晨禱告三件事。試著每天早晨用一分鐘做以下禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>感謝神今天賜給我新的語言機會</li>
                <li>求神讓我看見自己心裡真實的動機</li>
                <li>求聖靈在我開口之前先塑造我的心</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 一個修復的對話</h4>
              <p className="text-gray-700 mb-2">想一個你最近因言語傷害的人。這週主動找那個人，用簡單、真誠的話語道歉：「上次我說的那句話，是不公平的，對不起。」不需要解釋或找藉口。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，我承認我的言語常常反映了一顆不潔淨的心。感謝祢已在十字架上為我的言語罪賜下赦免。求祢今天先更新我的心，讓從我口中出來的話，能成為建造他人的恩典之言，而不是摧毀的言語。奉耶穌的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
