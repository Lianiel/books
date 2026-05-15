import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第3章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經裡的聖靈</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">現在就讓我向你陳述本書的中心思想吧！這並非一個新思想，它古老得可與新約時代相比，要陳述這思想，無非是追溯基督徒的本源。他是如此簡單：在現在或任何一個基督教年代，聖靈職事的本質就是體現我們的主耶穌基督。縱然我們對這個真相的理解是落後而不足，但我作為基督徒作者，你作為基督徒讀者，其實已經活在聖靈這個職事以下。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在我的方程式裡，耶穌的同在不該以空間來思想，應該以關係來思想。我這樣說，是指著我對三件事情的覺醒而言的。第—，是拿撒勒人耶穌——聖經裡的基督——曾被釘死，現今得著榮耀，就在這裡親自俯近我，對我說話。第二，他正在積極工作，他催迫我們脫離惰性，加強我們的洞察力，安慰我們內疚的良心，使我們的脾氣轉好，在壓力中支持我們，堅固我們，使我們過公義的生活；就這樣，他大大地啟迪我和眾人，賦予我們生命朝氣，改變我們的生命。第三，就他自己和他的工作而言，他是榮耀的，配受我們所能獻上的一切崇拜、敬慕、愛和忠誠。因此，聖靈體現基督，盡他所能，在人的生命中創造、保持、加深和表達這種對耶穌同在的醒覺。在我們要清晰解說這一點時，耳熟能詳的主題就浮現我們腦海裡：在基督裡從神而來的溝通，和借著基督人與神的密契；聖經的闡釋和人心靈的啟迪；罪人的重生和成聖；恩賜和善行；聖靈見證我們被神收納為後嗣，幫助我們勝過人性的軟弱；憑超自然的力量，產生信心、禱告、盼望、愛和所有像基督的性情„„。這裡沒有什麼新鮮的事，只不過我指出聖靈這一切的工作時，特別強調他們都以基督為中心，而以前是很少人如此強調的。我在本章嘗試表明，這樣強調純粹是出於聖經的指引。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我想在開始的時候，我們最好看看聖靈的名稱及注意他蘊含的意義。</p>
            <p className="text-gray-700 leading-relaxed mb-3">今天，對於大多數人來說，靈（SPirit）是一個含糊褪色的字彙。英文 spirit 這個字最易令人聯想起人的情緒或態度（如 high or low spirits「情緒高漲或情緒低落」，animal spirits「輕快精神」，a cheerful or downcast spirit「高興或沮喪」，aspirit of mischief or kindness［惡作劇或和藹的態度」等等）。從前靈這個詞曾用來代表各類游魂和神靈（如天使、魔鬼、神仙、小精靈、妖怪、鬼、孤魂，以及住在山嶺、石頭和樹上的神靈）。因此，在一六九一年，年長的清教徒巴斯特（Richard Baxter）給他那本離奇趣怪、肯定靈界事物的書定名為《靈界的真實》（ The Certainty of the Worlds ofSPiritS）。但人們對這些靈體的信念已逐漸消失，至少在西方是如此。現在，許多人會認為相信各種靈體至少反映出人缺乏哲學性的冷靜。總之，在研究「神的靈」這個主題時，我們的西方文化根本不能給我們什麼幫助。</p>
            <p className="text-gray-700 leading-relaxed mb-3">其實，一如聖經裡其他指向神的辭彙，靈是一個圖像化的名詞，具有生動逼真、明確、富色彩的意思。這個字的意象是呼出或喘著的氣，就如你吹熄生日蛋糕上的臘燭，或者吹脹一個汽球，或跑步時喘氣那樣。「靈」字在這裡的意義，可從以下的情景去瞭解：一頭狡猾的豺狼唬嚇一群小豬，大聲喝道：「我會發怒，我會噴氣，我會把你們的屋次塌！」整個意象就是強勁有力地，甚至猛烈地鼓動空氣，</p>
            <p className="text-gray-700 leading-relaxed mb-3">所表達的意念是釋放出來的能量、進取的力量、運用中的能力，以及藉活動來表彰的生命。</p>
            <p className="text-gray-700 leading-relaxed mb-3">聖經中希伯來文及希臘文的「靈」字（ruach 和 Pneuma），都同時帶有這個基本意思，兩個字都同時使人產生相類似的聯想。他們的含義包括：（1）那位神聖的靈，是有位元元格和目的，看不見又無法抗拒的；（2)個人的意識（在這層意義上，靈就是魂的同義詞，例子見於路一 46、47）；（3）風：這種風一旦被激起，可使樹葉飛旋、大樹連根拔起、樓宇坍塌。（例子可參看（a）結三七 1 一 14；在枯骨的異象中，希伯來文 ruach 的意思先後是氣息、風和神的靈。（b）約三 8；希臘文 Pneuma 意指風，同時也指神的靈。）但願在我們的語言裡也有一個字包含這種種聯想。英文字“puff”和“blow”（我想這兩個是唯一較貼切的字彙），既指從人的肺部呼出空氣，也表示風的吹動，但英文中完全沒有一個字既包含上述意義，又同時表達神並他所造具理性的受造物在智慧、意志和情感上的個性。相對地，英文字 spirit</p>
            <p className="text-gray-700 leading-relaxed mb-3">E 指在行動和反應上具有意識的人格，但這個字卻沒有風或氣息的含義。無可置疑，這是 spirit</p>
            <p className="text-gray-700 leading-relaxed mb-3">不能給我們像 ruach 和 pneuma 這些字對昔日聖經時代人物同樣啟示的其中一個原因，因為他沒有運行的力量的含意。</p>
            <p className="text-gray-700 leading-relaxed mb-3">其實，每當聖經提到神的靈，一個基本理念是能力的作為。在舊約聖經裡，「神的靈」常常指那位正在工作和改變事物的神。接近一百節經文（最低的數目是八十八節，最高的數目是九十七節；不同學者有不同的數算方法）對神的靈所進行的工作有如下記敘：</p>
            <p className="text-gray-700 leading-relaxed mb-3">1．將整個創造模塑成形，賦予受造物生命氣息。（創一 2，二 7；詩三三 6；伯二六 13，三三 4）</p>
            <p className="text-gray-700 leading-relaxed mb-3">2．控制大自然的秩序和歷史的進程。（詩一○四 29、30；賽三四 16，四○7）</p>
            <p className="text-gray-700 leading-relaxed mb-3">3．借著直接溝通和／或經過過濾的屬靈洞見，向神的使者啟示神的真理和旨意。（民二四 2；撒下二三 2；代下一二 18，一五 1；尼九 30；伯三二 8；賽六一 1 一 4；結二 2，——24，三七 1；彌三 8；亞七 12）</p>
            <p className="text-gray-700 leading-relaxed mb-3">4．借著這種種啟示，教導神的子民如何忠心愛主，多結果子（尼九 20；詩一四三 10；賽四八 16，六三 10—14）</p>
            <p className="text-gray-700 leading-relaxed mb-3">5．引發個人對神的回應（也就是聖經所說的認識神）——以信心、悔改、順服、公義、敞開心懷去接受神的訓令，以及透過讚美、禱告與神相交來回應神。（詩五一 10—12；賽——2，四四 3；結——19，三六 25—27，三七 14，三九 29；珥二 28、29；亞一二 10）</p>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">舊約聖靈工作的局限性</h4>
              <p className="text-gray-700 leading-relaxed">舊約聖靈的工作是預備性的——他預備以色列民族接納彌賽亞，但聖靈本身還沒有與信徒建立永恆的內住關係。聖靈賦予力量、啟示真理，但這些工作是選擇性的，面向特定的人物（士師、先知、君王）。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">五旬節：聖靈工作的重大轉變</h4>
              <p className="text-gray-700 leading-relaxed">五旬節不是聖靈第一次出現，而是聖靈新職事的開始。這一刻，聖靈從『臨時造訪』變成『永遠內住』，從『賦予能力』變成『進駐心靈』。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈見證基督的雙重模式</h4>
              <p className="text-gray-700 leading-relaxed">聖靈見證基督有兩個層面：(1)直接見證——透過聖經、奇跡、悔改；(2)間接見證——透過信徒的品格、行為、生命改變。</p>
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

          </div>
        )}
      </div>
    </div>
  );
}
