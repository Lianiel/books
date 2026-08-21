import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">點燃靈魂</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、風暴之王山野火——布萊德·霍爾的逃生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸以空降消防員布萊德·霍爾（Brad Haugh）驚心動魄的逃生經歷開場：他是受困在科羅拉多州風暴之王山（Storm King Mountain）野火中四十九名消防員之一，這場野火最終導致十四人喪生。霍爾推測他們被將近一百公尺高的火焰吞噬，每兩分鐘火牆就以每小時近三十公里的速度沿山脈上竄五百公尺，炙熱高達兩千度。他回憶：「人們在對講機裡大喊：『跑！快跑啊！』當時我離山頂大約五十公尺，而火勢在十到十二秒後就追了上來。」陸可鐸說，我們很少人會有這樣的經歷，但每個人都曾接觸過火——因此當火和聖靈出現在同一句話時，我們自然會格外注意。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、聖靈用火施洗——瑪拉基書的預言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引施洗約翰向世人介紹耶穌的話：「他要用聖靈與火給你們施洗。」（馬太福音三章11節）他說，我們或許期待更正面的介紹方式，卻沒想到是聖靈與火——這與瑪拉基書三章2-3節的預言相互呼應：「他如煉金之人的火，如漂布之人的鹼。他必坐下如煉淨銀子的，必潔淨利未人，熬煉他們像金銀一樣。」他指出，希臘原文用「他自己」（Autos）強調這是耶穌具排他性的角色——若你渴慕聖靈，轉向基督接受祂成為救主，祂會用聖靈為你施洗，讓你完全投入、沉浸在聖靈之中，正如耶穌從約旦河起來時全身滴著水。他解釋火的化學原理：木柴燃燒的能量最初來自太陽、儲存在纖維素和木質素中，只要空氣、燃料和熱量充足，火勢就會繼續蔓延——他問：神的靈是否也是如此？如果我們讓祂好好工作，祂將火力全開，不會熄滅，也無法被消滅。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、火的潔淨作用——只燙看得見的部分</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享母親身為護理師常說的話：「火是一種淨化的力量。」她用針挑刺或劃破膿包前，一定會把針尖放到火焰上燒過殺菌。他說：再沒有比聖靈更能煉淨一切的力量，祂來是為了去除器皿中的污穢，使我們合乎主用——聖靈的到來可以煉淨我們，也能使我們的生命更美麗。他坦言，煉淨生命的火不總是讓人喜歡，可能以威嚴紀律、傷心失望、灰心挫折的形式出現，但正如森林大火能釋放種子、清除枯木、分解養分、保持樹木健康，若管理得當，大火最終對植物有益——耶穌用聖靈的火為我們施洗，正是要我們結出更美好豐盛的果子。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他分享自己神學院畢業後在密蘇里州聖路易斯擔任實習牧師的糗事：與兩個單身漢合租公寓，因為沒有乾洗預算得自己燙襯衫，一位室友教他「只燙看得見的部分」——只燙領子和袖口，除非有人讓他脫掉外套，否則沒人會發現裡面其實皺巴巴的。他說：耶穌的靈不會被這種伎倆所騙，祂要浸透我們靈魂深處的每一處空間，在祂面前我們毫無隱藏——他鼓勵讀者每天做詩篇一百三十九篇23-24節的禱告：「神啊，求你鑒察我，知道我的心思，試煉我，知道我的意念，看在我裡面有什麼惡行沒有，引導我走永生的道路。」聖靈如同熱燙的熨斗，能撫平我們生命中的皺褶，使我們再也無需隱藏。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、羅馬書七、八章的對比——靠自己還是靠聖靈</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸指出，聖靈的火會在我們與罪的鬥爭中賜力量——許多基督徒都能體會保羅的感嘆：「我真是苦啊！誰能救我脫離這取死的身體呢？」（羅馬書七章24節）他分析：羅馬書第七章描述舊律法下的生活模式，「我」這個代名詞出現了二十七次，只提到聖靈一次；到了第八章，「我」僅出現兩次，聖靈卻被提到二十二次——關鍵是：想戰勝罪，靠的絕對不是自己，而是存在我們心中的聖靈。他問：哪一章的經文更符合你的生命？你倚靠的是「自己」還是「祂」？他引帖撒羅尼迦前書五章19節：「不要消滅聖靈的感動」，不要忽視聖靈或抵抗祂的引導，不要讓祂的火熄滅——沒有聖靈，我們的心會變得剛硬，唯有聖靈能融化我們的頑梗，當聖靈的火焰燒出光亮時，你會發現自己開始愛那些曾經排斥的人，過去的偏見與歧視，在聖靈對人類燃燒的熱愛之下無法存續。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、木柴與壁爐的比喻——教會保持信仰火熱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，火最大的特點是能轉換出極大能量——「聖靈降臨在你們身上，你們就必得著能力」（使徒行傳一章8節）；神不希望我們只是盡力而為，而是希望我們靠祂得力：「我靠著那加給我力量的，凡事都能做」（腓立比書四章13節）。他問：當內心的火焰開始減弱，我們該怎麼辦？他引葛安妮（Anne Graham Lotz）書中的故事：一位年輕人從大學回家拜訪牧師，說自己信仰足夠堅固、學業繁忙，不需要去教會聚會了。牧師沒有說話，只是從火堆中抽出一根木柴放在爐邊，靜靜坐著——年輕人以為牧師睡著了，準備起身離開，這時老牧師問：「你注意到了嗎？當它與其他木柴在火堆中時，就能燒得紅亮；但現在我把它拿出來，火焰就熄滅了。孩子，你就像那根木柴，如果你希望自己的信仰保持火熱，就需要與其他信徒在一起。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸總結：教會絕對不完美，儘管如此，教會仍是神用來保持我們信仰不失去溫度的營火，正如希伯來書十章24-25節：「又要彼此相顧，激發愛心，勉勵行善。你們不可停止聚會……倒要彼此勸勉。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、火的保護作用——聖靈是環繞我們的火城</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸說，火還有一個屬性讓我們想到聖靈：保護作用——東方牧羊人會在夜間用火牆環繞羊圈，將野獸阻擋在外，神也如此說：「我要作耶路撒冷四圍的火城，並要作其中的榮耀」（撒迦利亞書二章5節）。他總結：聖靈的火能幫你擋下撒旦的誘惑和陷阱，祂如此愛你，絕不會讓你毫無防備——惡者雖能看到你，卻無法觸及你；牠也許露出鋒利的獠牙，卻連你皮膚的一點點都無法咬到。聖靈是環繞你的火炮，隔絕魔鬼和牠的詭計。擁抱聖靈的幫助吧！祂會潔淨你、煉淨你、賜你力量，並保護你——還有誰能比聖靈做得更多呢？
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
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '耶穌用聖靈與火為信徒施洗，這火有三重作用：煉淨、賜能量、提供保護——三者都是聖靈給我們的祝福，而非要傷害我們。',
                '聖靈的火如同煉金之人的火，去除生命中的雜質，使我們合乎主用；「只燙看得見的部分」的比喻提醒我們，聖靈要浸透我們靈魂深處，不容我們有所隱藏。',
                '羅馬書七章與八章的鮮明對比顯示：戰勝罪不能單靠自己努力（第七章滿是「我」），而要倚靠內住的聖靈（第八章滿是「聖靈」）。',
                '「木柴與壁爐」的比喻說明：信仰的火熱需要教會群體的陪伴才能持續燃燒，離群索居的信仰之火終將熄滅。',
                '聖靈如同環繞羊圈的火牆，是隔絕仇敵詭計的保護——祂如此愛我們，絕不會讓我們毫無防備地獨自面對黑暗勢力。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">「聖靈與火施洗」是否指向一種特定的、可辨識的超自然經歷？</h4>
              <p className="text-gray-700 leading-relaxed">
                不同教會傳統對馬太福音三章11節「聖靈與火」的解讀有所差異：有些傳統將其理解為五旬節式的特定經歷（如使徒行傳二章3節「有舌頭如火焰顯現出來」），有些則理解為聖靈重生、內住並持續煉淨信徒生命的漸進過程（陸可鐸這一章的側重點）。這兩種理解未必互斥——重點不在於是否經歷過某種特定的戲劇性體驗，而在於是否讓聖靈持續在生命中做煉淨、賜能力、保護的工作，這是每個信徒都可以、也應當持續經歷的日常實際。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">羅馬書七、八章的「我」與「聖靈」用詞統計，反映了怎樣的釋經傳統？</h4>
              <p className="text-gray-700 leading-relaxed">
                羅馬書七章24-25節到八章的轉折，是歷代解經家反覆討論的段落——關於第七章描述的究竟是保羅信主前、信主後仍掙扎的狀態，還是一種修辭手法用來對比「靠律法」與「靠聖靈」兩種生活方式，學者間存在不同看法。但陸可鐸這裡採用的實用角度（統計「我」與「聖靈」出現次數的對比）提供了一個易於掌握、有助操練的觀察角度：無論神學立場如何，聖經確實教導信徒最終得勝的動力來源是聖靈的工作，而非單靠意志力對抗罪。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「離開教會就像離開火堆的木柴會熄滅」，這個比喻的限制在哪裡？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個比喻有力地說明群體對信仰生命的重要性，但也需要留意：教會群體本身不完美，有些信徒暫時離開特定教會，是因為經歷了傷害、需要療傷的空間，而非單純的信仰冷淡。健康地應用這個比喻，應該是鼓勵人尋找、委身一個真實、安全的信仰群體，而非簡單地把「離開特定教會」等同於「信仰必然冷淡」——若原本的群體本身是傷害的來源，尋找另一個健康的群體，同樣是保持信仰火熱的必要之舉。
              </p>
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
              '聽到「為主火熱」或「被聖靈的火點燃」這樣的說法時，你如何理解？你個人的屬靈生活中是否有過這樣的感受？',
              '你的生命中是否有需要聖靈煉淨的地方——需要戒除的壞習慣、犯罪的習性，或對你有害的關係？你能如何邀請聖靈潔淨這個部分？',
              '「只燙看得見的部分」的比喻，是否也是你信仰生活的寫照？你是否有某些部分只維持表面得體、內裡卻皺巴巴的？',
              '面對自己的罪，你通常倚靠的是「自己」還是「聖靈」？你的策略有效嗎？羅馬書第七章和第八章的對比，對你有什麼提醒？',
              '你是否曾經歷過沒有委身教會或信仰群體的時期？這如何影響了你的信仰？木柴與壁爐的比喻對你有什麼觸動？',
              '今天，你最需要聖靈的火給你哪一種幫助——煉淨、能量，還是保護？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔥 每天禱告詩篇一百三十九篇23-24節</h4>
              <p className="text-gray-700 mb-2">連續一週，每天用這節經文禱告，誠實邀請聖靈鑒察你「看不見的部分」，並記錄祂光照你的具體事項。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪵 檢視你的「木柴」狀態</h4>
              <p className="text-gray-700 mb-2">
                誠實評估你目前與教會群體的連結程度：是像在火堆中燒得紅亮的木柴，還是像被抽離的木柴逐漸冷卻？若需要，主動安排時間參與聚會或小組。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 宣告聖靈的保護</h4>
              <p className="text-gray-700 mb-2">
                面對一個你正掙扎的試探或誘惑，練習大聲宣告撒迦利亞書二章5節：「祢是我四圍的火城」，把這節經文當作抵擋試探時的具體武器。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，求祢用祢的火煉淨我，去除我生命中一切的雜質。求祢賜給我戰勝罪的力量，讓我不再靠自己，而是靠祢。求祢像火牆一樣環繞保護我，隔絕仇敵的詭計。願祢的火在我心裡持續燃燒，永不熄滅。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
