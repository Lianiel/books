import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Book14Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第3章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經裡的聖靈</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">03聖經裡的聖靈</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">現在就讓我向你陳述本書的中心思想吧！這並非一個新思想，它古老得可與新約時代相比，要陳述這思想，無非是追溯基督徒的本源。他是如此簡單：在現在或任何一個基督教年代，聖靈職事的本質就是體現我們的主耶穌基督。縱然我們對這個真相的理解是落後而不足，但我作為基督徒作者，你作為基督徒讀者，其實已經活在聖靈這個職事以下。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在我的方程式裡，耶穌的同在不該以空間來思想，應該以關係來思想。我這樣說，是指著我對三件事情的覺醒而言的。第—，是拿撒勒人耶穌——聖經裡的基督——曾被釘死，現今得著榮耀，就在這裡親自俯近我，對我說話。第二，他正在積極工作，他催迫我們脫離惰性，加強我們的洞察力，安慰我們內疚的良心，使我們的脾氣轉好，在壓力中支持我們，堅固我們，使我們過公義的生活；就這樣，他大大地啟迪我和眾人，賦予我們生命朝氣，改變我們的生命。第三，就他自己和他的工作而言，他是榮耀的，配受我們所能獻上的一切崇拜、敬慕、愛和忠誠。因此，聖靈體現基督，盡他所能，在人的生命中創造、保持、加深和表達這種對耶穌同在的醒覺。在我們要清晰解說這一點時，耳熟能詳的主題就浮現我們腦海裡：在基督裡從神而來的溝通，和借著基督人與神的密契；聖經的闡釋和人心靈的啟迪；罪人的重生和成聖；恩賜和善行；聖靈見證我們被神收納為後嗣，幫助我們勝過人性的軟弱；憑超自然的力量，產生信心、禱告、盼望、愛和所有像基督的性情„„。這裡沒有什麼新鮮的事，只不過我指出聖靈這一切的工作時，特別強調他們都以基督為中心，而以前是很少人如此強調的。我在本章嘗試表明，這樣強調純粹是出於聖經的指引。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我想在開始的時候，我們最好看看聖靈的名稱及注意他蘊含的意義。</p>
              <p className="text-gray-700 leading-relaxed mb-3">今天，對於大多數人來說，靈（SPirit）是一個含糊褪色的字彙。英文 spirit 這個字最易令人聯想起人的情緒或態度（如 high or low spirits「情緒高漲或情緒低落」，animal spirits「輕快精神」，a cheerful or downcast spirit「高興或沮喪」，aspirit of mischief or kindness［惡作劇或和藹的態度」等等）。從前靈這個詞曾用來代表各類游魂和神靈（如天使、魔鬼、神仙、小精靈、妖怪、鬼、孤魂，以及住在山嶺、石頭和樹上的神靈）。因此，在一六九一年，年長的清教徒巴斯特（Richard Baxter）給他那本離奇趣怪、肯定靈界事物的書定名為《靈界的真實》（ The Certainty of the Worlds ofSPiritS）。但人們對這些靈體的信念已逐漸消失，至少在西方是如此。現在，許多人會認為相信各種靈體至少反映出人缺乏哲學性的冷靜。總之，在研究「神的靈」這個主題時，我們的西方文化根本不能給我們什麼幫助。</p>
              <p className="text-gray-700 leading-relaxed mb-3">其實，一如聖經裡其他指向神的辭彙，靈是一個圖像化的名詞，具有生動逼真、明確、富色彩的意思。這個字的意象是呼出或喘著的氣，就如你吹熄生日蛋糕上的臘燭，或者吹脹一個汽球，或跑步時喘氣那樣。「靈」字在這裡的意義，可從以下的情景去瞭解：一頭狡猾的豺狼唬嚇一群小豬，大聲喝道：「我會發怒，我會噴氣，我會把你們的屋次塌！」整個意象就是強勁有力地，甚至猛烈地鼓動空氣，</p>
              <p className="text-gray-700 leading-relaxed mb-3">所表達的意念是釋放出來的能量、進取的力量、運用中的能力，以及藉活動來表彰的生命。</p>
              <p className="text-gray-700 leading-relaxed mb-3">聖經中希伯來文及希臘文的「靈」字（ruach 和 Pneuma），都同時帶有這個基本意思，兩個字都同時使人產生相類似的聯想。他們的含義包括：（1）那位神聖的靈，是有位元元格和目的，看不見又無法抗拒的；（2)個人的意識（在這層意義上，靈就是魂的同義詞，例子見於路一 46、47）；（3）風：這種風一旦被激起，可使樹葉飛旋、大樹連根拔起、樓宇坍塌。（例子可參看（a）結三七 1 一 14；在枯骨的異象中，希伯來文 ruach 的意思先後是氣息、風和神的靈。（b）約三 8；希臘文 Pneuma 意指風，同時也指神的靈。）但願在我們的語言裡也有一個字包含這種種聯想。英文字“puff”和“blow”（我想這兩個是唯一較貼切的字彙），既指從人的肺部呼出空氣，也表示風的吹動，但英文中完全沒有一個字既包含上述意義，又同時表達神並他所造具理性的受造物在智慧、意志和情感上的個性。相對地，英文字 spirit</p>
              <p className="text-gray-700 leading-relaxed mb-3">E 指在行動和反應上具有意識的人格，但這個字卻沒有風或氣息的含義。無可置疑，這是 spirit</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec1')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">Baxter）所言：</span>
          </div>
          {expanded['sec1'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec1'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">基督領我經過的黑暗之地，         絕不比他自己曾走過的幽暗。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我們應該強調基督的道路是經過死亡再經歷復活的路。我們必須知道，他經常引領我們走上這一條相同的道路，即使他的形式或許千變萬化。</p>
              <p className="text-gray-700 leading-relaxed mb-3">最後，我們可以矯正一般關於基督徒委身的含糊觀念。在我們的讀經生活裡，強調經常默想四福音書，甚於其他經文，因為研讀福音書可以幫助我們對主有清晰的觀念，並在思想裡掌握到作為他門徒的意義。其實，有關門徒實踐的教義，在書信裡寫得最清楚；但門徒實踐的性質，卻在福音書裡有最傳神的描繪。有些基督徒重視新約書信過於福音書，他們說從福音書的研習中畢業後，就可進入新約書信的研習，仿佛這就是屬靈成長的標誌；但事實上這種態度是十分惡劣的，他意味著我們著重神學觀念多於與主耶穌個人的相交。其實，我們應該把新約書信的神學思想視為一種裝備，好叫我們更瞭解福音書中基督與門徒的關係。讓我們不要忘記一般人慣常的說法，也是真確的說法：四福音書是世界上最奇妙的書。</p>
              <p className="text-gray-700 leading-relaxed mb-3">有一件事是清楚肯定的，若我們能完成上述所有矯正和修改，那將是極大收穫。</p>
              <p className="text-gray-700 leading-relaxed mb-3">某些有關基督徒生命的真理，是眾多以聖經為信仰根據的基督徒所共知的。舉例來說，每個信主的人都領受聖靈（徒二 38；加三 2），這是大家熟知的真理。所以，那賜下給我們的聖靈，是一個「印記」——表示信徒屬於神（林後一 22；弗一 13）。從此以後，聖靈居住在他或他裡面（羅八 ll）：亦即是說，他好像一個長期住客，關往及投入我們生命和心靈中的大小事情。他擔當了「仁慈和甘心樂意的住客」角色，成為一股改變的力量，使我們更新，與耶穌的德性相似，「„„榮上加榮„„」（林後三 18）。這裡沒有什麼是新鮮的，全都是一般標準的教導。</p>
              <p className="text-gray-700 leading-relaxed mb-3">成聖是一個形容改變過程的常用詞。從我們的觀點來看，成聖之道就是「順著聖靈而行」（加五 16），意思是拒絕隨從「肉體的情欲」（肉體和心思上罪性的欲望），讓聖靈在我們裡面結出他的「果子」，就是那九項與基督相似的特質（加五 22、23）。構成成聖生命的另一方法是效法基督的謙卑、愛心，遠避罪惡和實踐公義（約一三 12—15、34、35，一五 12、13；弗五 l、2；腓二 5—8；彼前二 21—25；來一二 l— 4）。耶穌重複地指出成聖就是遵行他的話語；他總結這種取悅神的生命，就是愛神和愛鄰舍（可一二 29—31；路一○25—37）。總言之，在福音信仰基督徒中間，這是早已清楚定下的真理基礎。</p>
              <p className="text-gray-700 leading-relaxed mb-3">可是，當我們思想到屬靈生命經驗層次（有別於認罪、意志及管教層面）的問題時，這又完全是另一回事。關於這方面，我們好像走進了一個陌生的國土一樣，大部分福音信仰人土都感到不知所措。對於直接體會神的大能和良善、他的永恆和無窮盡、他的真理、慈愛、榮耀，並所有關乎基督又藉基督賜給我們的一切，我們從前的瞭解比今天豐富得多。這是我們需要重新學習的。這種種體會源於對聖經的瞭解，必須按聖經的標準去判斷，以聖經的神學思想去解釋。然而，這些體會本身是即時的，並獨立自主的，他們並不受制於我們，我們不可強求或預知這些經驗，他們純粹出於神的心意。這些體會通常透過聖靈賜下，賜給有愛心又肯順服的門徒，為要成就基督的應許，就是父和子要到這人那裡去，與他同住，並且向他顯現（約一四 18、20—23）。這些體會（這種說法比較說「這些經驗」為佳；固然，每一種體會確是「一次經驗」）帶來極大喜樂，因為信徒藉此經歷神的大愛。他們屬於內心世界，有別於我們認識人和事的外在知覺。雖然許多時候，我們對神的種種體會是從我們對人和事的知識而來，即使不一定在領受知識那一刻產生，也會在追憶回想的時候產生，但這些體會必須與一般人和事的知識區分出來。任何一種觀念，若認為認識神就是自我意識的下降或消失，都會混淆人的思想，應當加以排斥。</p>
              <p className="text-gray-700 leading-relaxed mb-3">但這種混淆的思想俯拾皆是，結果，任何人嘗試重新強調基督教可經驗的一面，都遭受偏見的反對。我現在談論的與神相交，常被人誤解，以為與印度教聖人的所謂神秘主義沒有什麼分別；這些印度教聖人是泛神觀的，對他們來說，自我意識其實是幻覺，超越甚或消滅自我意識，就是修行的最高目標。很明顯，基督徒若追求印度教的目標，縱未算叛教，實際上已是異端。那麼，為什麼現在或過去一些熱心的密契主義信徒，會被懷疑是追隨印度教的目標呢？似乎引起這誤解的，是他們所用的字彙。在我的瞭解中，最吊詭的真相是由於他們運用一些言語，使他們遭受嫌疑；這些由衷自發，藉以表達他們對神的醒悟和回應的言語，往往是一些表達兩性之愛的言語，但其實這是最恰切的言語，因為男女的愛最能比喻神期望我們與他建立的親密關係。事實上，人間的愛無非幫助在愛中的人達致這更深遠的境界。在愛的經驗裡，不論是屬天或人間的愛情，當事人都有很強烈的自我意識；然而，在兩性之愛的關係裡，自我意識的最高境界就是看見自己成為對方的一部分，以致二人成為一個新的個體（可能就是創二 24 中「一體」的含意）。莎士比亞曾表達這種感覺：「在愛裡，數字已死！」2；又如華格納（Wagner）所述：</p>
          </div>
        )}
      </div>
    </div>
  );
}
