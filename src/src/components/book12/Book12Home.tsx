import { useState } from 'react';
import { ChevronDown, ChevronUp, Cross, BookOpen, Scale, Heart, Shirt, Droplet, MessageCircle, Frown, HelpCircle, MapPin, CheckCircle, Shield, Users, AlertCircle, Dice6, AlertTriangle, Clock, Star } from 'lucide-react';

export default function Book12Home() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['prophecy1','prophecy2','prophecy3','prophecy4','prophecy5','thief1','thief2','jesus-died','q1','q2','q3']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 標題區 */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Cross className="w-24 h-24 text-amber-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          十架預言真奇妙
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          探討耶穌被釘十字架的預言與真義
        </p>
        <p className="text-lg text-gray-500">
          作者:李錦彬
        </p>
      </div>

      {/* 簡介區 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-8 shadow-md">
        <div className="flex items-start gap-4 mb-4">
          <BookOpen className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">關於本書</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              若果要了解基督教的信仰,究竟可以怎樣開始呢?
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              筆者可以提供一個既充滿趣味、又合乎客觀事實的主題,就是<span className="font-semibold text-amber-700">預言</span>。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              世界上有哪一個宗教好像基督教那樣,充滿數不盡的預言?預言若果不應驗的話,那麼就自毀長城,不值一信。
            </p>
            <p className="text-gray-700 leading-relaxed">
              每一個人來到這世界上,都是為了生存;但惟有耶穌來到這個世界,卻是為了死亡。因為早在耶穌降生千多年之前,就有不同的先知,將耶穌在世上所遭遇的事,包括出生、在世上的待人接物、不同的人怎樣對待祂與祂要怎樣死亡,並且如何復活,都以預言的方式,記載得一清二楚。
            </p>
          </div>
        </div>
      </div>

      {/* 核心經文 */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-md border-2 border-amber-200">
        <p className="text-gray-700 leading-relaxed mb-3 italic">
          「到了一個地方,名叫髑髏地,就在那裏把耶穌釘在十字架上。又釘了兩個犯人,一個在左邊,一個在右邊。當下耶穌說:『父阿!赦免他們,因為他們所作的,他們不曉得。』兵丁就拈鬮分他的衣服,百姓站在那裏觀看。官府也嗤笑他說:『他救了別人,他若是基督,神所揀選的,可以救自己罷。』」
        </p>
        <p className="text-sm text-amber-700 font-semibold">— 路加福音二十三章 33-38 節</p>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          原來在耶穌死亡之前倒數二十四小時之內,最少有<span className="font-semibold text-blue-700">二十五個預言</span>,陸續應驗在祂的身上。以下筆者就着上述的經文,分為兩方面闡述:<span className="font-semibold text-blue-700">十架預言</span>與<span className="font-semibold text-blue-700">十架真義</span>。
        </p>
      </div>

      {/* 第一部分:十架預言 */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <Cross className="w-8 h-8 text-amber-600" />
          一、十架預言
        </h2>

        <div className="space-y-4">
          {/* 預言一 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('prophecy1')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  1. 祂被列在罪犯之中
                </h3>
              </div>
              {isExpanded('prophecy1') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('prophecy1') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-800 italic mb-2">
                    「所以,我要使他與位大的同分,與強盛的均分擄物。因為他將命傾倒,以至於死;<span className="font-bold text-amber-700">他也被列在罪犯之中</span>。他卻擔當多人的罪,又為罪犯代求。」
                  </p>
                  <p className="text-sm text-amber-700 font-semibold">— 以賽亞書五十三章 12 節</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  經文特別強調這一位義僕,一生行義,但當祂死的時候,卻是與罪犯一樣,要被人執行死刑,這實在是一件不可思議的事。大概過了七百多年後,這個預言就應驗在耶穌的身上。
                </p>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">應驗過程</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    耶穌不但要接受死刑,而且必須死在十字架上,並且被安排在兩個強盜<span className="font-semibold text-blue-700">之中</span>。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    聖經記載:「他們又把兩個強盜和他同釘十字架,一個在右邊、一個在左邊。這就應驗了經上的話說『他被列在罪犯之中』。」(馬可福音十五章 27-28 節)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 預言二 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('prophecy2')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  2. 主為罪犯代求
                </h3>
              </div>
              {isExpanded('prophecy2') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('prophecy2') && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  預言指出那位公義的僕人,雖然願意為拯救世人而傾倒性命,世人卻藐視祂、頂撞祂,並且奪去祂的性命。然而祂不但沒有以惡報惡,還竟然為他們向父神說好話求情。
                </p>

                <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                  <p className="text-lg text-gray-800 font-semibold italic mb-2">
                    「父啊!赦免他們,因為他們所作的,他們不曉得。」
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    耶穌被釘在十架上的時候,第一句要說的話就是為罪犯代求,應驗了以賽亞書五十三章 12 節的預言。
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  耶穌曾教導門徒說:「要愛你們的仇敵,為那逼迫你們的禱告。」(馬太福音五章 44 節) 祂不但講道理,更是身體力行的實踐者。
                </p>
              </div>
            )}
          </div>

          {/* 預言三 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('prophecy3')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shirt className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  3. 主的衣服被分
                </h3>
              </div>
              {isExpanded('prophecy3') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('prophecy3') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                  <p className="text-gray-800 italic mb-2">
                    「他們分我的外衣,為我的裏衣拈鬮。」
                  </p>
                  <p className="text-sm text-indigo-700 font-semibold">— 詩篇二十二篇 18 節</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  早在一千年前,先知就預言了兩種截然不同的處理方法:外衣被撕開分為四分,每兵一分;裏衣因為是上下一片織成,所以用拈鬮(抽籤)的方式決定歸屬。
                </p>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed">
                    耶穌的門徒約翰看見這整個過程,驚訝地說:「兵丁果然作了此事。」(約翰福音十九章 23、24 節) 因為整個分衣服的過程,真是好像照着舊約一個劇本拍攝下來一樣。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 預言四 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('prophecy4')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Droplet className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  4. 主要吃醋
                </h3>
              </div>
              {isExpanded('prophecy4') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('prophecy4') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="text-gray-800 italic mb-2">
                    「他們拿苦膽給我當食物,我渴了,他們拿醋給我喝。」
                  </p>
                  <p className="text-sm text-teal-700 font-semibold">— 詩篇六十九篇 21 節</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  耶穌先被給予苦膽調和的酒(古代麻醉藥),祂嘗了就不肯喝,表明期望自己的死更加徹底。後來兵丁為了戲弄耶穌,在祂說「我渴了」的時候,拿醋給祂喝。
                </p>

                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-700 mb-2">醋的作用</h4>
                  <p className="text-gray-700 leading-relaxed">
                    當耶穌被釘在十字架上,因曝曬多時、失血過多而嚴重脫水,這時吃醋很容易引起類似中酒毒的徵狀,結果就是<span className="font-semibold text-amber-700">加速了主的死亡</span>。幸好耶穌死得早,不然兵丁原本要打斷祂的腿骨,就會破壞另一個「一根骨頭也不可以折斷」的預言。
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  兵丁把握了千載難逢戲弄耶穌的機會,竟然反過來成就了一個舉足輕重的預言。這印證了神在任何事情上,都能造出美好的事物。
                </p>
              </div>
            )}
          </div>

          {/* 預言五 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('prophecy5')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  5. 他們引用俗語來譏笑主
                </h3>
              </div>
              {isExpanded('prophecy5') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('prophecy5') && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  這是耶穌親自預言自己的。當耶穌初出來傳道時,眾人都稱讚祂,但耶穌卻指出,將來他們「必引用俗話」來譏笑祂。果然,當耶穌被釘十字架時,共有四類人都說出類似的話。
                </p>

                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-700 mb-3">四類人的譏笑</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 路過的百姓:「你這拆毀聖殿,三日又建造起來的,可以救自己從十字架上下來罷!」</li>
                    <li>• 官府:「他救了別人,他若是基督,神所揀選的,可以救自己罷!」</li>
                    <li>• 兵丁:「你若是猶太人的王,可以救自己罷!」</li>
                    <li>• 同釘的強盜:「你不是基督麼?可以救自己和我們罷!」</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed">
                    舊約詩篇二十二篇早已預言:「凡看見我的都嗤笑我,他們撇嘴搖頭說...」連「撇嘴搖頭」和「咳」這樣的小動作都準確應驗,顯明聖經預言的精確性。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 第二部分:十架真義 */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <Heart className="w-8 h-8 text-rose-600" />
          二、十架真義
        </h2>

        <div className="bg-rose-50 rounded-lg p-6 mb-6 border-l-4 border-rose-600">
          <p className="text-gray-700 leading-relaxed">
            昔日在髑髏地合共有三個人,雖然他們所犯的罪輕重各有不同,但都是接受同一樣的刑罰。然而在釘十字架背後所帶出的意義,卻是迥然不同。它們可以分別代表三種不同類型的人。
          </p>
        </div>

        <div className="space-y-4">
          {/* 譏笑的強盜 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('thief1')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Frown className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  一位譏笑耶穌的強盜
                </h3>
              </div>
              {isExpanded('thief1') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('thief1') && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  這個強盜雖然手腳已經動彈不得,但他仍然使用他唯一能動的口來譏笑耶穌。他不肯承認自己的罪,死到臨頭也不肯悔改,可以說他是<span className="font-semibold text-gray-700">死在罪中的 (died in sins)</span>。
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-700 leading-relaxed">
                    他期望耶穌能神蹟地解救他的厄運,卻沒有把握機會去考慮是否需要接受耶穌。他代表世界上曾經有機會與耶穌擦身相遇,卻只期望神蹟而不願接受信仰的人。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 求告的強盜 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('thief2')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  臨終前求告耶穌的強盜
                </h3>
              </div>
              {isExpanded('thief2') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('thief2') && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  這個強盜雖然知道自己將會在幾個小時後死亡,但他的良心告訴他,如果一個人帶着罪而死,試問怎能心安呢?因此他把握千載一時的機會,在臨死前信靠耶穌,找着永生。他雖然會<span className="font-semibold text-green-700">因罪而死 (died of sins)</span>,但他的靈魂卻因信靠耶穌,將來會得着永恆的生命。
                </p>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">轉變的關鍵</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="font-semibold">遍地黑暗</span> - 從中午到下午三時的黑暗,讓他反省生命</li>
                    <li>• <span className="font-semibold">耶穌代求</span> - 聽見耶穌為罪犯代求的禱告,深受感動</li>
                    <li>• <span className="font-semibold">責備同伴</span> - 「你既是一樣受刑的,還不怕神麼?」</li>
                    <li>• <span className="font-semibold">求告耶穌</span> - 「耶穌呀!你得國降臨的時候,求你記念我。」</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-800 font-semibold italic mb-2">
                    「我實在告訴你,今日你要同我在樂園裏了。」
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    耶穌的應許讓他在人生最後一刻,得着永生的盼望與保障,可以安然離世。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 耶穌為罪人而死 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('jesus-died')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Cross className="w-6 h-6 text-rose-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  耶穌為罪人而死
                </h3>
              </div>
              {isExpanded('jesus-died') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('jesus-died') && (
              <div className="px-6 pb-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  神為了愛世人的緣故,差遣耶穌來到世上。祂甘願為世人歷代所犯的罪,肩負在自己的身上。祂以<span className="font-semibold text-rose-700">無罪的來代替有罪的 (died for sins)</span>,滿足了神公義的要求,最終死在十字架上。
                </p>

                <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                  <p className="text-gray-800 italic text-lg mb-3">
                    「我的神,我的神,為甚麼離棄我?」
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    公義的神對祂的愛子耶穌掩面而不看,反映神是相當痛心的。正是這樣,耶穌死在十字架上,就同時滿足了神慈愛與公義的屬性。因此<span className="font-semibold text-rose-700">十字架就成了神與人復和的基石</span>。
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">主堅守神的使命</h4>
                    <p className="text-gray-700 text-sm">完成了父神所交附的一切使命</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">主征服死的捆鎖</h4>
                    <p className="text-gray-700 text-sm">說「成了」而不是「完了」</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-700 mb-2">主應許信的強盜</h4>
                    <p className="text-gray-700 text-sm">今日就與他同在樂園</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 第三部分:結論與呼召 */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-600" />
          三、結論與呼召
        </h2>

        <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed">
            這一段聖經雖然非常簡單,但是它已將基督教有關救恩的基本要點,描寫得淋漓盡致。我們可將一個人究竟何時和怎樣相信耶穌所涉及的三個問題,清楚回答如下:
          </p>
        </div>

        <div className="space-y-4">
          {/* 問題一 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('q1')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  何時可以決志信主呢?
                </h3>
              </div>
              {isExpanded('q1') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('q1') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-800 italic mb-2">「朝聞道,夕死可以。」</p>
                  <p className="text-gray-700 leading-relaxed">
                    一個人若在早上得知道一個真理,即使他是晚上便要離世,他仍然可以沒有遺憾了。
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  那個強盜從來沒有機會讀過聖經,也沒有返過聖殿敬拜;他只憑一顆單純信靠主的心,並且對耶穌有一個簡單的認知,就是誠然的接受祂為救主,他就可以立時相信耶穌了。
                </p>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">答案</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">任何時候都可以</span>,只要你願意單純地信靠耶穌,就是現在這一刻也可以。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 問題二 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('q2')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  需要作何事才可以獲取救恩呢?
                </h3>
              </div>
              {isExpanded('q2') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('q2') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-700 leading-relaxed">
                    世界上所有的宗教,或多或少也要信徒完成了某些要求,才會獲得救贖。但基督教的救恩觀卻不是這樣。要獲取耶穌的救恩,世人唯一要做的,就是以<span className="font-semibold text-purple-700">信心</span>來求告耶穌。這裏所說的「信心」,在聖經中有它獨特的解釋,扼要來說,就是「接受」的意思。
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 italic mb-2">
                    「你若口裏認耶穌為主,心裏信神叫祂從死裏復活,就必得救。」
                  </p>
                  <p className="text-sm text-blue-700 font-semibold mb-3">— 羅馬書十章 9 節</p>
                  
                  <p className="text-gray-800 italic mb-2">
                    「你們得救是本乎恩,也因着信,並不是出於自己,乃是神所賜的。也不是出於行為,免得有人自誇。」
                  </p>
                  <p className="text-sm text-blue-700 font-semibold">— 以弗所書二章 8、9 節</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700 mb-2">結論</h4>
                  <p className="text-gray-700 leading-relaxed">
                    那強盜直到離世為止,沒有機會行善、補償,甚至連受洗也沒有機會。然而他是會得救的,因為這是主親自應許他。我們可以確定,<span className="font-semibold text-green-700">良好的品德與善行,都是得救後的結果,而並不是得救的條件</span>。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 問題三 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection('q3')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  何處可以與主同在呢?
                </h3>
              </div>
              {isExpanded('q3') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isExpanded('q3') && (
              <div className="px-6 pb-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    那強盜小小的一個祈禱,求主記念,耶穌竟然應許他,「今日」就與他在「樂園」中。這是何等大的安慰呢!
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    透過耶穌的啟示,使我們知道原來一個信徒死了以後,他的肉身雖然會敗壞,但他的靈魂卻立刻轉往「樂園」去,與主同在。既說「樂園」,就是不再受任何疾病、災難及意外所傷害。
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 italic mb-2">
                    「因為主必親自從天降臨,有呼叫的聲音和天使長的聲音,又有神的號吹響;那在基督裏死了的人必先復活。以後我們這活着還存留的人必和他們一同被提到雲裏,在空中與主相遇。這樣,我們就要和主永遠同在。」
                  </p>
                  <p className="text-sm text-blue-700 font-semibold">— 帖撒羅尼迦前書四章 16-17 節</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 個人回應 */}
      <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-8 mb-6 border-l-4 border-rose-600">
        <h3 className="text-2xl font-semibold text-rose-800 mb-4">親愛的各位讀者:</h3>
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            你可能在一個不經意的情況底下,接觸及閱讀完了這一本小冊子,它有可能會影響你餘生。
          </p>
          <p className="text-gray-700 leading-relaxed">
            如果這個世界上有神的話,那麼一切發生在你身上的事,就不會是偶然的了!因此我懇請你,用一些時間想一想,來整理自己的信仰。
          </p>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-blue-200 mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">請用「是」或「否」來回答以下問題:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold">1</span>
            </div>
            <p className="text-gray-700 pt-1">你是否同意這本小冊子所說,有關耶穌的預言是真確的?</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold">2</span>
            </div>
            <p className="text-gray-700 pt-1">你是否願意相信耶穌基督成為你個人的救主?</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold">3</span>
            </div>
            <p className="text-gray-700 pt-1">你是否需要有人來解答你有關信仰的一些問題?</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-semibold">4</span>
            </div>
            <p className="text-gray-700 pt-1">你是否想參加教會聚會?</p>
          </div>
        </div>
      </div>

      {/* 版權資訊 */}
      <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600">
        <h4 className="font-semibold text-gray-800 mb-3">書籍資訊</h4>
        <div className="space-y-1">
          <p><span className="font-semibold">作者:</span> 李錦彬</p>
          <p><span className="font-semibold">校對:</span> 楊建君</p>
          <p><span className="font-semibold">出版:</span> 福音研經有限公司</p>
          <p><span className="font-semibold">出版日期:</span> 2022 年 7 月初版</p>
          <p><span className="font-semibold">ISBN:</span> 978-988-16510-9-9</p>
        </div>
      </div>
    </div>
  );
}
