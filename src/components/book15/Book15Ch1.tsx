import React from 'react';
import { BookOpen, Lightbulb, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Book15Ch1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">人人都是神學家</h1>
        <p className="text-lg text-amber-700">第一章 ── 揭示每個信徒的神學身份</p>
      </div>

      {/* Opening Story */}
      <motion.div
        className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-amber-900 mb-4">一個聖經教師的言論</h2>
        <blockquote className="text-amber-800 italic mb-4 text-lg border-l-4 border-amber-300 pl-4">
          「從未碰過神學家的基督徒有福了。」
        </blockquote>
        <p className="text-amber-800 leading-relaxed">
          這位有影響力的聖經教師的話代表著許多信徒的想法：神學是危險的、複雜的、只有專家才能從事的領域。許多基督徒一聽到「神學」這個詞，就會感到不安、警覺，甚至敵意。他們擔心神學會奪走他們的簡單信心，用複雜的理論取代對上帝的愛。但這個觀點其實是一個**大誤解**。
        </p>
      </motion.div>

      {/* Core Truth */}
      <motion.div
        className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-3 items-start">
          <Lightbulb className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">本章核心真理</h3>
            <p className="text-amber-800 text-lg leading-relaxed">
              <strong>每一個肯思考的基督徒都是神學家。</strong>無論自覺與否，你已經在進行神學思考。問題不在於你是否做神學，而在於你做什麼樣的神學。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Three Common Misconceptions */}
      <div>
        <h2 className="text-3xl font-bold text-amber-900 mb-8">三大常見誤解</h2>

        {/* Misconception 1 */}
        <motion.div
          className="mb-8 border rounded-lg overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 py-4 bg-amber-100">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-900 text-lg">誤解一：神學是神秘且遙遠的</span>
            </div>
          </div>

          <div className="p-6 bg-white space-y-4">
            <div>
              <h4 className="font-bold text-amber-900 mb-2">這個誤解從何而來？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多人認為神學是只有專家在象牙塔中進行的抽象思辨，與普通信徒的信仰生活無關。他們想像神學家在圖書館裡埋頭於厚重的書籍，使用普通人無法理解的術語，探討與日常信仰毫無關係的抽象概念。
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-900 mb-2">▸ 一個真實案例</h4>
              <p className="text-gray-700 leading-relaxed">
                一位年輕女士在辦公室裡興奮地談論她對上帝、救恩、基督徒生活的想法。她提出深刻的問題，進行有思想的討論。但當被建議成為「神學家」時，她恐懼地說：「神學家？那太嚇人了！」她不知道自己已經在做神學思考。這反映了多少基督徒的心態——他們在做神學，卻不敢承認或承當。
              </p>
            </div>

            <div>
              <h4 className="font-bold text-amber-900 mb-2">✓ 真相</h4>
              <p className="text-gray-700 leading-relaxed">
                神學就是<strong>思考關於上帝的事情</strong>。它不是複雜的術語和抽象論證的集合。每當你問「為什麼上帝容許苦難？」「救恩是什麼意思？」「聖靈如何在我的生活中工作？」「信仰如何指導我的職業選擇？」你就在做神學。神學是活生生的、實踐性的、與生活緊密相連的。
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
              <p className="text-gray-700 text-sm">
                <strong>神學就像呼吸。</strong>你不需要成為生理學家就可以呼吸；你也不需要是專家就可以進行神學思考。它是基督徒信仰生活的自然組成部分。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Misconception 2 */}
        <motion.div
          className="mb-8 border rounded-lg overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-6 py-4 bg-orange-100">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-orange-600" />
              <span className="font-bold text-orange-900 text-lg">誤解二：神學與禱告相對立</span>
            </div>
          </div>

          <div className="p-6 bg-white space-y-4">
            <div>
              <h4 className="font-bold text-orange-900 mb-2">這個誤解從何而來？</h4>
              <p className="text-gray-700 leading-relaxed">
                有人認為神學是「理智的旅程」，會取代真實的信心和禱告。他們害怕思考會削弱靈性，甚至摧毀信心。在他們看來，禱告是溫暖的、個人的、屬靈的，而神學是冷冷的、學術的、理性的。兩者不能並存。
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-2">▸ 一個真實的投訴</h4>
              <p className="text-gray-700 leading-relaxed">
                有人寫信抗議說：「禱告與神學是對立的。神學只是拙劣的代用品，使人誤以為可以用思想代替與上帝的關係。那些太執著於神學的人往往失去了簡單的信心和屬靈的火熱。」這個擔心在許多信仰群體中很普遍。
              </p>
            </div>

            <div>
              <h4 className="font-bold text-orange-900 mb-2">✓ 真相</h4>
              <p className="text-gray-700 leading-relaxed">
                禱告和神學不是敵人，而是<strong>相輔相成</strong>的。我們越了解上帝，禱告就越豐富；越深入思考信仰，靈命就越成長。事實上，最好的禱告往往來自於深刻的神學反思。想像你在禱告時不知道你在向誰說話、祂是誰、祂的性質是什麼——那樣的禱告會很膚淺。但如果你對上帝有深刻的認識（這正是神學所做的），你的禱告就會變成充滿敬畏、感謝、信心和親密感的對話。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
              <p className="text-gray-700 text-sm">
                <strong>歷史上最偉大的禱告者往往也是最深刻的神學家。</strong>聖奧古斯丁、聖托馬斯、馬丁路德、約翰衛斯理——他們既是祈禱者，也是思想家。他們的神學不是來自象牙塔，而是來自禱告中對上帝的經歷。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Misconception 3 */}
        <motion.div
          className="mb-8 border rounded-lg overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="px-6 py-4 bg-yellow-100">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-yellow-600" />
              <span className="font-bold text-yellow-900 text-lg">誤解三：只有專業神學家的想法才算數</span>
            </div>
          </div>

          <div className="p-6 bg-white space-y-4">
            <div>
              <h4 className="font-bold text-yellow-900 mb-2">這個誤解從何而來？</h4>
              <p className="text-gray-700 leading-relaxed">
                在當代信仰中，許多人將「一般信徒」和「神學家」看作兩個完全不同的族群。信徒被期待去「接受」教導，而神學家則被期待去「思考」和「教導」。這造成了一個等級制度，好像普通信徒的信仰反思無足輕重，只有經過正規培訓的人才有資格進行「真正的」神學。
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-2">▸ 信徒和神學家的互相需要</h4>
              <div className="space-y-3 mt-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>專業神學家需要平信徒的實踐經驗和屬靈直覺。</strong>如果神學家長期遠離信仰的實際應用，他們的思想就會變得脫離現實。他們需要聽到信徒的聲音，了解信仰在實際生活中是如何運作的。
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>平信徒需要神學家提供的研經工具、歷史視角和系統陳述。</strong>神學家可以幫助信徒更深入地理解聖經，避免走極端或被異端迷惑，並幫助信仰進行理性的驗證。
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>兩者應該是夥伴關係，而不是等級制度。</strong>神學應該是整個信仰群體的事業，其中每個人都有貢獻，無論其背景或培訓如何。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-yellow-900 mb-2">✓ 真相</h4>
              <p className="text-gray-700 leading-relaxed">
                本書的核心主張：<strong>平信徒神學家和專業神學家之間只是程度的差異，不是本質的差異。</strong>一個有學位的神學家和一個有豐富屬靈經歷的信徒，都在進行神學思考。他們都值得被聆聽，都可以互相學習。
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 text-sm">
                <strong>一個個案研究：</strong>歷史上許多重要的神學洞見來自於普通信徒。16世紀的宗教改革者馬丁路德不是在象牙塔中發現「唯獨信心」的教義，而是在他的修行室裡，在祈禱和閱讀聖經時領悟到的。他是一個思考家，但首先是一個信徒。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Three Levels of Theology */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8">神學的三個層次</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">1️⃣ 平信徒神學</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>定義：</strong>普通信徒在日常生活中進行的信仰思考。這是最直接的、最與生活相關的神學形式。
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>例子：</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-2">
                  <li>一位母親思考如何用信仰教導孩子何謂誠實和仁慈</li>
                  <li>一位上班族在遇到工作中的倫理困境時，思考聖經如何指導他</li>
                  <li>一位患病的人在痛苦中思考上帝的良善和祂對苦難的目的</li>
                  <li>一位青少年思考聖經對約會和性的教導</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                平信徒神學的特點是它總是與實際生活相連的。它不需要學術的精洗練，但卻是最實踐的和生動的。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">2️⃣ 牧師/教牧神學</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>定義：</strong>牧師和教會領袖為回應教會和社群的需要而進行的神學思考。這一層次介於個人信仰思考和學術研究之間。
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>例子：</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-2">
                  <li>牧師為主日講道進行深入的經文研究和詮釋</li>
                  <li>教會領袖思考如何以聖經的方式應對社會中的特定問題（如種族歧視、貧窮、離婚等）</li>
                  <li>青年牧師發展課程來幫助年輕人理解信仰在當代的意義</li>
                  <li>教會在面對異端影響時，進行神學討論以保護信仰的純正</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                牧職神學結合了學術的嚴謹和牧養的關懷。它需要既有聖經知識，也有對人的理解。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded border-l-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">3️⃣ 專業神學</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>定義：</strong>神學家進行的正規、系統、學術性的神學研究。這是神學中最專業和深入的形式。
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>例子：</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-2">
                  <li>神學教授撰寫關於基督論、三一論或救贖論的專著</li>
                  <li>聖經學者進行對聖經原文的深入研究</li>
                  <li>教會歷史學家研究早期教會的發展或某個特定時期的神學爭論</li>
                  <li>倫理神學家深入研究聖經與現代倫理問題的關係</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                專業神學提供了理論的深度、歷史的視角和系統的思考。它不是孤立的學術遊戲，而是為整個信仰群體服務的。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-100 p-6 rounded border-l-4 border-blue-600">
          <p className="text-blue-900 font-semibold leading-relaxed">
            ✓ <strong>關鍵認識：</strong>三個層次彼此相關且互相需要。平信徒神學提供活生生的信仰經驗，使神學不致脫離現實；牧職神學橋接理論與實踐，幫助信仰群體解決真實問題；專業神學提供深度的批判思考和學術的嚴謹。三者都很重要，三者不能相互替代！
          </p>
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-purple-900 mb-6">本章關鍵洞見</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-purple-900">洞見1：無反思的神學的危險</strong><br/>
              沒有任何基督徒是完全不受神學影響的。即使你宣稱「我不做神學」，你也在做神學——只是可能是<strong>無反思的、從未被檢驗的、可能充滿矛盾的</strong>神學。你可能從文化、媒體、親友或傳統不經意地吸收了一些信念，卻從未問過「這符合聖經嗎？這是真實的嗎？」無反思的神學就像在黑暗中開車——你在動，但你不知道要去哪裡，也看不到前面有什麼障礙。
            </p>
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-purple-900">洞見2：神學質量的問題</strong><br/>
              真正的問題不是「我們應不應該做神學？」（答案顯然是「我們已經在做了」），而是「<strong>我們應該做什麼樣的神學</strong>？」——是深思熟慮的還是膚淺的？是合乎聖經的還是偏離真理的？是系統的還是零碎的？是為了榮耀上帝和服侍教會，還是為了展示自己的聰明？本書的使命正是幫助你進行更好、更負責任、更符合聖經的神學。
            </p>
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-purple-900">洞見3：神學的目的</strong><br/>
              神學的目的不是製造更多聰明的信徒或贏得神學辯論。最終，神學的目的是幫助我們<strong>更深入地認識上帝</strong>，並因此活得更像基督徒。如果我們的神學思考沒有導向更深的信仰、更聖潔的生活、更具愛心的行為，那麼它就失敗了，無論它在學術上多麼精湛。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Reflection & Practice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-amber-900 mb-8">反思與具體實踐</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-amber-900 mb-6">❓ 反思問題</h3>
          <div className="space-y-5">
            <div className="bg-white p-5 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 font-semibold mb-2">
                1. 你最常問自己的「神學問題」是什麼？
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                例如：「為什麼上帝容許不公義？」「聖靈如何幫助我克服誘惑？」「信仰與工作、金錢、娛樂如何結合？」「我如何知道上帝的旨意？」認識到你已經在思考這些問題就意味著你已經是一個神學家。
              </p>
            </div>

            <div className="bg-white p-5 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 font-semibold mb-2">
                2. 你對神學家有什麼預設？是正面還是負面？為什麼？
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                思考你的看法是否受到個人經驗、媒體描繪或刻板印象的影響。你認識的神學家或牧師中有沒有人影響了你的看法？這些預設是合理的嗎？
              </p>
            </div>

            <div className="bg-white p-5 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 font-semibold mb-2">
                3. 在你的信仰群體中，平信徒的聲音是否被重視？
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                還是只有牧師和神學家的想法被認為是重要的？這對你的屬靈成長有什麼影響？
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-amber-900 mb-6">✓ 具體實踐方針</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-white rounded border-l-4 border-amber-600">
              <span className="text-amber-600 font-bold text-lg flex-shrink-0">1.</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">承認你已經是神學家</p>
                <p className="text-gray-700 text-sm leading-relaxed">寫下你曾經問過或思考過的三個與信仰有關的問題，並認識到你已經在思考信仰。不要等到「合格」後才承認這個身份——你現在就可以開始。</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded border-l-4 border-amber-600">
              <span className="text-amber-600 font-bold text-lg flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">更有意識地進行神學思考</p>
                <p className="text-gray-700 text-sm leading-relaxed">不要只是表面地接受信念；每當你聽到一個關於信仰的陳述時，問自己：「為什麼？」「這如何與聖經相符？」「這在我的生活中意味著什麼？」「這是真實的嗎？」這樣你就會從無反思的神學轉向深思熟慮的神學。</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded border-l-4 border-amber-600">
              <span className="text-amber-600 font-bold text-lg flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">與他人分享你的神學思考</p>
                <p className="text-gray-700 text-sm leading-relaxed">在小組、家庭或朋友中討論信仰問題。說出你的想法，聆聽他人的觀點。通過對話，你會發現你並不孤單，許多信徒都在思考同樣的問題。</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded border-l-4 border-amber-600">
              <span className="text-amber-600 font-bold text-lg flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">開始記錄你的神學旅程</p>
                <p className="text-gray-700 text-sm leading-relaxed">保持一本「信仰日誌」，記下你在閱讀聖經、聽講道或與他人談話時的洞見。回顧你的記錄，看看你的信仰理解如何逐漸加深。</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded border-l-4 border-amber-600">
              <span className="text-amber-600 font-bold text-lg flex-shrink-0">5.</span>
              <div>
                <p className="font-bold text-amber-900 mb-1">尋求平衡</p>
                <p className="text-gray-700 text-sm leading-relaxed">確保你的神學思考連結到實踐。如果你發現一個新的信仰真理，思考它對你的生活、決定和關係意味著什麼。讓神學成為改變生命的力量，而不只是心智的遊戲。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-amber-900 to-orange-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">本章小結</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p>
              <strong>你已經是神學家</strong> ── 因為你思考關於上帝和信仰的事情。問題不在於你是否做神學，而在於你做什麼樣的神學。
            </p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p>
              <strong>三個常見誤解被駁斥</strong> ── 神學並不遙遠且神秘；神學與禱告不相對立而是互補的；平信徒的神學思考也同樣重要和有價值。
            </p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p>
              <strong>神學有三個層次</strong> ── 平信徒神學、牧職神學、專業神學，各有其角色、貢獻和價值。
            </p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p>
              <strong>真正的問題不是「要不要做神學」</strong> ── 而是「要做什麼樣的、更深入的、更符合聖經的、更能改變生命的神學」。
            </p>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 flex-shrink-0" />
            <p>
              <strong>神學的目的是愛</strong> ── 不是為了贏得辯論或展示聰明，而是更深入地認識上帝，進而更充分地愛祂和愛他人。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
