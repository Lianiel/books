import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Gem, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch18() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-2</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「兩種榮耀來源」所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              作者的答案是肯定的：聖經中有大量內容，把「兩種榮耀來源」與耶穌基督的福音連結起來。有兩種方式可以詮釋：前者聚焦於基督，後者聚焦於初信者。
            </p>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">作法一：聚焦於基督與生俱有的和努力獲得的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人被受苦的僕人耶穌基督所吸引，祂獲得最大的尊榮。耶穌自己確認了這個說法：「我若從地上被舉起來，就要吸引萬人來歸我」（約十二32）<sup>1</sup><span style={cite}>（此句傳統詮釋是指祂在十字架上和升天過程中被「舉起來」，見Bosch, 516.）</span>。聚焦於基督「與生俱有的」和「努力獲得的」榮耀，這種傳福音方式，特別能吸引高度尊榮祖先的人——馬太福音第一章的家譜，代表基督出身的家族體系擁有與生俱有的榮耀，可以成為與族人分享福音的起點。作者整理相關經文：耶穌受洗時天父宣告「這是我的愛子，我所喜悅的」（太三17）；保羅在腓立比書紀念基督道成肉身、受辱，隨後升為至高（腓二5-11）；希伯來書第一章引用眾多舊約先知之言，說明基督與生俱有的榮耀和祂透過生平事蹟所展現的尊榮。
              </p>
              <p className="text-gray-700 leading-relaxed">
                基督的榮耀與救贖息息相關：「所以，神將他升為至高，又賜給他那超乎萬名之上的名……使榮耀歸與父神」（腓二9-11）——基督所成就的榮耀，出自祂無比的謙卑、純全與愛，祂承受「死於十字架上」的奇恥大辱，這正是祂復活、榮耀升天的轉折點。希伯來書一章同樣強調基督是造物主也是救贖主：「藉著他創造諸世界……祂洗淨了人的罪，就坐在高天至大者的右邊」（來一2-3）。作者提出一個引人深思的問題：你期待宇宙中最尊貴的神來認識你嗎？聚焦於基督與生俱有的榮耀，以及祂透過生平事蹟所展現的尊榮，這樣的福音信息，在榮辱文化中所引發的迴響，可能遠遠超過在西方社會。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">作法二：聚焦於信徒可獲得的「與生俱有的榮耀」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神本身就是這個新家庭的父親，祂享有與生俱有的榮耀，因而祂的兒女也活在同樣的榮耀中——這個新的家庭群體就是教會、基督的身體，「一個新人」（弗二15）。「按著自己意旨所喜悅的，預定我們藉著耶穌基督得兒子的名分」（弗一5）；「凡接待祂的，就是信祂名的人，祂就賜他們權柄，作神的兒女」（約一12）——約翰福音一章12節「權柄」一詞在希臘文中意指「莫大的榮耀」；相信基督之名的人，「不是從血氣生的，不是從情慾生的，也不是從人意生的，乃是從神生的」（約一13）。作者指出，從永恆的觀點來看，重要的是一個人自己靈性的DNA，而非父母或祖先的DNA——耶穌對尼哥底母說：「人若不重生，就不能見神的國」（約三3-6）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                信徒個人的尊榮，因著神完全歸屬到神的家庭和國度中——即使個人的家庭可能有大尊榮、也可能沒有，但成為神的兒女、因重生而得到的尊榮，永不改變：「我們也在祂裏面得了基業」（弗一11）。這與救贖的關聯，可在以弗所書一到二章找到答案：「我們藉這愛子的血得蒙救贖，過犯得以赦免，乃是照他豐富的恩典……我們也在他裏面得了基業」（弗一4-5、7、11）；「既在十字架上滅了冤仇……你們不再作外人和客旅，是與聖徒同國，是神家裏的人了」（弗二16、19）——因著耶穌基督，罪得赦免，挪去了我們與神、與人之間的疏離，並使我們永遠成為祂的後嗣，成為「神家庭裡的成員」。
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
                '福音信息可以合法地圍繞「兩種榮耀來源」展開：一是聚焦於基督自己（既與生俱有、又努力獲得的至高榮耀），二是聚焦於信徒因信靠基督而領受、與生俱來的兒女身分。',
                '馬太福音的家譜、耶穌受洗時天父的宣告、腓立比書二章的降卑升高、希伯來書一章的造物主與救贖主身分，共同構成一套聚焦於基督榮耀本身的福音敘事，特別能與重視祖先血統的文化產生共鳴。',
                '約翰福音一章12節「權柄」一詞的原文意涵是「莫大的榮耀」，這提醒我們，「作神的兒女」不只是身分上的描述，更是一種尊榮的贈與——信徒的價值不再取決於血緣或家世，而在於重生後全新的靈性身分。',
                '以弗所書一至二章清楚說明：基督徒領受的「與生俱有的榮耀」與救贖直接相關——因基督的血得蒙救贖、因十字架滅了冤仇，才使我們從「外人和客旅」變成「神家裡的人」。',
                '這兩種切入角度提供了跨文化事奉者實用的彈性：面對重視祖先與血統的族群，可從基督的尊貴身分切入；面對渴望歸屬、渴望新身分的個人，則可從「成為神兒女」的角度切入。',
                '本章提醒讀者：傳福音本質上也是敬拜、高舉耶穌基督的一種方式——「我若從地上被舉起來，就要吸引萬人來歸我」，這意味著見證基督的榮耀本身，就具有吸引人歸向祂的屬靈力量。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「重生後的靈性DNA比祖先DNA更重要」這個觀點，如何幫助我們牧養那些對家族血統感到自卑或自豪的信徒？</h4>
              <p className="text-gray-700 leading-relaxed">
                對於因家世顯赫而驕傲、或因出身卑微而自卑的信徒，這個真理都同樣具有釋放力量——無論原生家庭的社會地位如何，重生後在基督裡「與生俱有」的榮耀身分，才是永恆不變、真正決定一個人價值的根基。這提醒牧養者，在陪伴信徒建立自我認同時，應當持續引導他們把安全感的根基，從原生家庭的社會評價，轉移到「神兒女」這個不會被剝奪的身分上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聚焦「基督的尊貴血統」與聚焦「信徒的新身分」這兩種切入角度，實務上該如何搭配使用，而非二選一？</h4>
              <p className="text-gray-700 leading-relaxed">
                兩者其實是同一個福音真理的一體兩面：正因基督擁有至高的、與生俱有又努力獲得的榮耀，祂才有資格、也甘願把這份榮耀分享給相信祂的人。實務上，可以先透過基督尊貴的身分建立聽眾對「這位傳講對象值得信賴」的認識，再過渡到「這位尊貴的主，願意收你為祂家中兒女」的邀請——從敬畏基督的榮耀，走向領受基督賜下的榮耀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">在重視祖先傳承的文化中，「重生」這個概念常被誤解為「背棄祖先」，如何避免這種誤解？</h4>
              <p className="text-gray-700 leading-relaxed">
                需要清楚說明：加入神家庭領受的新身分，並非取代或否定一個人原有的家族身分與孝道責任，而是在既有身分之上，額外領受一個更深、更終極的歸屬——正如亞伯拉罕蒙召離開本族本家，卻沒有因此拋棄對家人的愛與責任，而是成為使自己家族、乃至萬族得福的管道。這種表達方式，能減少「信主等於背祖忘宗」的疑慮。
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
              '「我若從地上被舉起來，就要吸引萬人來歸我」——你認為傳福音是否也是一種敬拜、高舉耶穌基督的方式？',
              '你自己信主的過程中，「與生俱有的榮耀」（成為神兒女的身分）和「努力獲得的榮耀」（順服、委身的過程），哪一個對你的信仰更有意義？',
              '「人若不重生，就不能見神的國」——這句話，對你理解「新造的人」這個身分，帶來什麼提醒？',
              '你觀察自己的教會或團隊，是否能幫助信徒不僅明白教義，更真實經歷「聖靈將神的愛澆灌在我們心裡」（羅五5）？',
              '若要向一位重視祖先、家族傳承的朋友介紹基督的家譜（太一1-17），你會如何鋪陳這個故事？',
              '你的教會或宣教團隊，是能處理羞辱、恢復信徒榮耀的成熟群體，還是有時反而在無意間製造羞辱？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 整理一份「基督的雙重榮耀」讀經清單</h4>
              <p className="text-gray-700 mb-2">
                歸納太一1-17、三13-17、腓二5-11、來一1-13等經文，設計一份簡短的查經大綱，聚焦於耶穌基督與生俱有和祂所彰顯的榮耀，作為向重視血統的朋友傳福音的資源。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👨‍👩‍👧 向新信徒清楚傳講「成為神兒女」的身分</h4>
              <p className="text-gray-700 mb-2">
                若你有機會牧養或陪伴新信徒，花時間用以弗所書一章、約翰壹書三章1節，具體向他們解釋「成為神兒女」這個永不改變的尊榮身分，幫助他們建立穩固的屬靈自我認同。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是配得一切尊榮的君王，也感謝祢願意收納我，使我成為祢家中與生俱來、永不改變的兒女。求祢幫助我，不再從世上的家世、成就中尋找安全感，而是深深扎根在『我是神兒女』這個真理裡。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
