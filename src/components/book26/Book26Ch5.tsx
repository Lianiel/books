import React, { useState } from 'react';
import { Map, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 5 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">故事塑造的信仰</h2>
        <p className="text-base text-gray-500">敘事與信仰的力量</p>
        <p className="text-sm text-gray-400 mt-1">丹尼爾・泰勒（Daniel Taylor）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、神在說一個故事</h3>
              <p className="text-gray-700 leading-relaxed">丹尼爾・泰勒以一個宏大的宣告開始：「神在向世界說一個故事。」這個故事從亙古開始，延伸到永恆的未來。它在兩千年前達到高潮，當神以一種嶄新的方式進入祂的創造。這個故事的主題是「神的愛」——神造了我們，神愛我們，神呼召我們。這是人類歷史最偉大的敘事，人類一切的故事都是其中的章節。</p>
              <p className="text-gray-700 leading-relaxed mt-2">泰勒對比了「命題」和「故事」的不同力量。「神是有能力的」——這是一個命題，一個抽象的事實陳述，引發的是理智上的評估（真或假），卻不能觸動人的靈魂。「讓我告訴你以色列人如何過約旦河進入應許之地的故事……」——這是故事，它調動了整個人，包括智識、情感、意志，甚至身體（心跳加速、想像力飛馳）。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、命題需要故事作為根基</h3>
              <p className="text-gray-700 leading-relaxed">命題（Propositions）是重要的。「主是有能力的。主是善良的。耶穌是神的兒子。基督從死裡復活。」這些都是不可動搖的真理陳述。但命題依賴故事才有其力量和意義。離開了故事，命題就失去了存在的根基。以約書亞記的約旦河過河故事為例：那些石頭紀念碑的設立，是為了讓後代的孩子能問：「這些石頭是什麼意思？」然後父母可以說：「讓我告訴你一個故事……」</p>
              <p className="text-gray-700 leading-relaxed mt-2">泰勒也指出，聖經的命題往往「嵌在故事裡」。十誡是出現在以色列人在曠野的旅程故事中的；保羅的神學論述（如羅馬書、加拉太書）都是回應具體的教會情況和故事。這說明神刻意選擇以故事承載真理，而非以哲學論文的形式。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、大衛與拿單——故事作為媒介</h3>
              <p className="text-gray-700 leading-relaxed">泰勒以拿單先知面見大衛的故事作為最有力的例子。大衛犯了姦淫和謀殺之罪，被罪惡和自欺蒙蔽了良心。拿單沒有直接說「你犯了罪！」——他說：「讓我告訴你一個故事。有一個富人和一個窮人……」大衛被故事深深捲入，整個人——理智、道德感、情感，甚至身體——都被調動起來，以皇家的憤怒宣告：「這人該死！」</p>
              <p className="text-gray-700 leading-relaxed mt-2">然後拿單說：「你就是那人！」（撒母耳記下 12:7）這四個字之所以有如此巨大的衝擊力，是因為大衛的整個人已被故事預備好了。如果拿單一開始就說「你就是那人」，大衛的防衛機制會立即啟動。正是故事，繞過了防衛，直達人心。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、聖經是記憶之書</h3>
              <p className="text-gray-700 leading-relaxed">泰勒說，聖經在許多方面是一本「記憶的大書」。不是感傷式的懷舊，而是那種關鍵性的記憶——讓你明白自己從哪裡來、你是誰、你當怎樣活。記憶的鑰匙是故事。聖經以多種形式保存故事：詩歌、傳記、歌曲、歷史、書信……這些都是大故事的章節——神愛祂所造之物的大故事。</p>
              <p className="text-gray-700 leading-relaxed mt-2">泰勒提出一個嚴肅的問題：「我們是否會成為那一代不把故事傳承給後代的人？」在一個充滿信息碎片、刷屏文化的時代，長篇故事的傳承已成了一種危機。而基督信仰的傳遞，在本質上是故事的傳遞——我們的身份認同，建立在一個「神的故事我也在其中」的敘事上。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、故事教我們說出自己的台詞</h3>
              <p className="text-gray-700 leading-relaxed">泰勒以一個街頭遇見貧窮孩子的真實故事結束本章。一位婦人學了西班牙語，在一個陌生的國家遇見了一個無助的孩子。她下跪與孩子平視，用他的語言問他：「我沒有錢，但你願意要這個嗎？」然後拿出一個閃亮的棒球。泰勒的點評是：「她知道自己的台詞。」這「台詞」不是人為背的，而是被故事塑造的——她在神的故事中生活，所以在那個時刻，她知道該怎麼做、該說什麼話。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這正是「故事塑造的信仰」的最終果實：不只是知道正確的教義，而是在生命的每一個具體時刻，能夠活出神的故事所要求的台詞。</p>
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
                '神在向世界說一個宏大的救贖故事，人類歷史的所有故事都是其章節，主題是「神造了我們、愛我們、呼召我們」。',
                '命題（真理陳述）重要，但需要故事作為根基；離開了故事，命題就失去了存在的土壤和感染人的力量。',
                '故事能繞過人的理智防衛，直達人心——拿單對大衛的策略是最有力的聖經示範。',
                '聖經本質上是一本記憶之書，以多種形式保存神的故事，幫助人知道「我是誰、我從哪來、我當怎麼活」。',
                '信仰的傳遞本質上是故事的傳遞；不傳遞故事，就是不傳遞信仰身份認同的根基。',
                '真正被故事塑造的人，在具體的生命時刻能夠「知道自己的台詞」——活出神故事所要求的回應。',
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
              <h4 className="font-semibold text-gray-800 mb-2">聖經的「有神注釋的故事」結構</h4>
              <p className="text-gray-700 leading-relaxed">泰勒引用崔普的說法：聖經是一個「有神注釋的故事」（theologically annotated story）。故事是骨架，而神的注釋——包括命題（真理陳述）和律令（應用命令）——是血肉。這解釋了為何聖經不按主題排列：因為真理的最佳呈現不是主題式的，而是敘事性的。就連《約翰福音》1:1 也是一個開篇——「太初有道」接續的是整個道成肉身的故事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">紀念碑、石頭與記憶的神學</h4>
              <p className="text-gray-700 leading-relaxed">約書亞記 4 章的石頭紀念碑，是舊約中典型的「記憶媒介」。神命令以色列人從約旦河中取出十二塊石頭，豎立在迦南地，為的是讓後代孩子發問：「這些石頭是什麼意思？」（4:21）這個設計說明：信仰的傳遞不是靠灌輸知識，而是靠「引發問題，然後說故事」。今天教會的聖餐、洗禮、節慶，都具有同樣的功能——它們是「記憶媒介」，等待孩子們發問，等待父母說故事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">數位時代的「故事危機」</h4>
              <p className="text-gray-700 leading-relaxed">泰勒的擔憂在數位時代更加迫切。社交媒體的碎片化信息、短視頻的感官刺激、注意力的持續縮短——這些都在侵蝕人類傳統上透過故事傳承身份和智慧的能力。研究顯示，Z世代的「長篇閱讀能力」正在下降。在這個背景下，教會如何堅持以故事傳遞信仰，成了一個緊迫的文化挑戰。</p>
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
              '你信仰旅程中，有哪個「故事」（某個人說的故事、聖經中的故事，或你親身的故事）最深刻地塑造了你的信仰？',
              '你的教會或小組，現在是更側重「教導命題」還是「講述故事」？你認為兩者的平衡應該是什麼？',
              '如果你要向一個對基督教毫無背景的人解釋「神是愛」，你會先說一個命題，還是說一個故事？你會說哪個故事？',
              '拿單用故事讓大衛「看見」了他自己的罪。你認為在你的生命中，是否有人以這種方式幫助過你「看見」某個你原本看不見的盲點？',
              '泰勒問：「我們是否會成為不把故事傳給後代的那一代？」你認為在你的家庭和教會中，信仰的故事是如何（或有沒有）被傳遞？',
              '你認為你「知道自己在神故事中的台詞」嗎？在哪些生命時刻，你感到被故事塑造而能夠自然地回應？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 說一個你自己的故事</h4>
              <p className="text-gray-700 mb-2">這週，找一個機會（在小組、和朋友、或和家人），說一個神在你生命中工作的真實故事。不要只說「神很好」這個命題，而是說：「有一次……」讓故事說話。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🏛️ 建立家庭「紀念碑」</h4>
              <p className="text-gray-700 mb-2">在家中找一個方式，記念神在你家庭中做過的一件重要事情：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>一張照片、一個紀念物，或一段文字記錄</li>
                <li>放在孩子或家人能看到的地方</li>
                <li>準備好在有人問起時「說故事」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 在福音分享中用故事</h4>
              <p className="text-gray-700 mb-2">準備一個 2–3 分鐘的個人見證故事，以「神如何改變了我」為主軸（不是只列重點，而是敘述一個有衝突、轉折和結局的完整故事），在合適的機會分享。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，感謝祢不只給我道理，也給我故事——祢自己進入人類歷史的故事。求祢讓我深深活在祢的故事裡，讓我在每一個生命時刻都知道自己的台詞。讓我成為一個會說故事的人，把祢的奇妙傳遞給下一代。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
