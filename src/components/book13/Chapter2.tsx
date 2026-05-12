import { useState } from 'react';
import { ChevronDown, ChevronUp, Cross, Heart, Book, Shield, Lightbulb, Target, BookOpen, MessageCircle, Sword, Crown, Users } from 'lucide-react';

export default function Chapter2() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

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
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          第二章 不隨血氣起舞
        </h1>
        <p className="text-xl text-gray-600">於日本大和市</p>
        <p className="text-lg text-gray-500 mt-2">一九九五年十月六日</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border-l-4 border-purple-500">
        <div className="flex items-start gap-3">
          <Heart className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-purple-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              「不隨血氣起舞」是本書最核心的教導。這個原則幫助我們在面對傷害、冒犯、危險時,不憑著肉體的反應行事,而是保持在基督裡的平靜與順服。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本章透過聖經教導和實際見證,幫助我們明白:如何在困難中不被情緒控制,而是讓基督在我們裡面掌權。
            </p>
          </div>
        </div>
      </div>

      {/* 引言:神奇妙的印證 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('intro')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Book className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              引言:神奇妙的印證
            </h3>
          </div>
          {isExpanded('intro') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('intro') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              「不隨血氣起舞」這個教導是從我這一生所學到,並且仍在不斷學習的許多寶貴功課中,累積和淬煉而來。
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                在這些人生課程中,其中有一次,神以一種最不尋常的方式,活生生地向我印證這個屬靈原則。它就發生在我家人的眼前,距離第一章所提到的「易肇事路口」不到二十英尺的距離。
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              然而,在我開始向你敘述第三章〈一根繩子〉的故事之前,我想用一段查經來分享「不隨血氣起舞」這句話的解釋。
            </p>
          </div>
        )}
      </div>

      {/* 希伯崙:連結之地 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('hebron')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              希伯崙:與神密契的關係
            </h3>
          </div>
          {isExpanded('hebron') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('hebron') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-700 mb-2">希伯崙的意義</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據《史特朗經文彙編》的〈希伯來文辭典〉,希伯崙 2275 這個字的意思是<span className="font-semibold text-amber-700">「連結之地」</span>(seat of association)。
              </p>
              <p className="text-gray-700 leading-relaxed">
                它的主要字根是聯合 2266,因此有時也被譯作<span className="font-semibold text-amber-700">「擁有密契的關係」</span>(to have fellowship)。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              如果你曾經聽過我講道,你就會知道我不斷強調與主享有密契的關係是何等美好和必要的一件事。
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">巨人控制希伯崙</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從聖經了解巨人控制,或說統治了名叫希伯崙的城市。在民數記十三章 22-33 節中我們讀到:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「在那裡(希伯崙)有亞衲族人...我們在那裡看見亞衲族人,就是偉人;他們是偉人的後裔。據我們看,自己就如蚱蜢一樣;據他們看,我們也是如此。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                在這段經文裡,我們要學習<span className="font-semibold text-blue-700">不從肉體的角度看待自己的生命</span>。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 歌利亞:新時代的挑戰 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('goliath')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Sword className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              歌利亞:揭露與羞辱
            </h3>
          </div>
          {isExpanded('goliath') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('goliath') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              聖經中記載大衛所打第一場仗的對手就是一個亞衲族人。大家視他為非利士人的頂尖戰士之一。他的名字叫作歌利亞。
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">歌利亞的意義</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據《史特朗經文彙編》,歌利亞 1555 這個名字的意思對我們而言饒富興味。它的主要字根是<span className="font-semibold text-red-700">揭示 1540</span>,意思是:
              </p>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 以剝奪的手段使人裸露</li>
                <li>• 以一種令人沒有顏面的方式為之</li>
                <li>• 宣傳、揭露、公佈、移除</li>
                <li>• 洩露、寡廉鮮恥地展現</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
              <h4 className="font-semibold text-gray-700 mb-2">現代社會的歌利亞</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我相信整個社會大致上已走完了一個歷史週期,而我們目前正在面對一個<span className="font-semibold text-gray-700">新時代的歌利亞</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                美國社會已經墮落了,因為它出版並且寡廉鮮恥地展現出太多污穢不潔的事物。我們曾經是一個非常乾淨的國家,但如今展現出來的卻是污穢不潔和卑劣下流。
              </p>
              <p className="text-gray-700 leading-relaxed">
                過去,當我從世界各地回到自己的家鄉時,我感到很自豪,因為我知道我即將回到的這個國家,擁有全世界最高的道德標準和操守,但如今的情況已經大不相同了。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 不要隨血氣起舞 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('dont-react')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              不要隨血氣起舞
            </h3>
          </div>
          {isExpanded('dont-react') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('dont-react') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                這些污穢不潔的事物和我的生命有什麼關係?這和你又有什麼關係?一點也沒有百分之百地相干!
              </p>
              <p className="text-gray-700 leading-relaxed">
                許多人問我:「怎樣才能改變我的生命?」「我要怎麼做,事情才會變得不一樣?」我回答他們時,都會用這句話開頭:<span className="font-semibold text-green-700">「不要隨血氣起舞。」</span>
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">常見的回應</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                通常他們會給我一個類似這樣的回答:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「呃,碰到事情我怎麼可能不縈繞在心,隨著血氣起舞?我是個有血有肉的人。我有我的感覺和情緒,自然會受到傷害,也會被人觸怒,有時候還會被激發到火冒三丈的程度。這不就是人的常態嗎?」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我會回答他們:「是的,那的確就是人的常態——<span className="font-semibold text-blue-700">人性中本來就有的常態</span>。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 基督在你裡面 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('christ-in-you')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cross className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              在你裡面的基督是榮耀的盼望
            </h3>
          </div>
          {isExpanded('christ-in-you') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('christ-in-you') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              然而,聖經卻告訴我們,耶穌將有一位榮美、沒有任何污點或皺紋的新婦。如果耶穌將有一位榮耀完美的新婦,那祂就必須能夠了解祂的新婦,因此祂必須像有血有肉的普通人一樣經歷苦難。
            </p>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">耶穌道成肉身的必要</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下這個例子或許有助於解釋這個道理。如果我單獨來到日本這樣的一個「外國」,而沒帶著我的妻子茱蒂絲同行,當我回到美國試著向她敘述我在日本的所見所聞時,她將會問我一大堆問題,對嗎?
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但是,如果我帶她來,那她不但能夠親自經歷和親眼看見日本,她和我還能夠分享這一趟旅程,不是嗎?這麼一來,我們就擁有一個彼此分享的經驗了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                同樣地,天上的父差遣耶穌來到這個世界,好叫祂也能夠和人類一樣經歷苦難。
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                歌羅西書一章 21-22 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你們從前與神隔絕,因著惡行,心裡與祂為敵。但如今祂藉著基督的肉身受死,叫你們與自己和好,都成了聖潔,沒有瑕疵,無可責備,把你們引到自己面前。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                假使祂沒有道成肉身降世為人,並且經歷你我的傷痛,祂又如何能夠將你聖潔、沒有瑕疵、無可責備地呈現給天父呢?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 補滿基督患難的缺欠 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('fill-up')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              補滿基督患難的缺欠
            </h3>
          </div>
          {isExpanded('fill-up') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('fill-up') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                歌羅西書一章 24 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「現在我為你們受苦,倒覺歡樂;並且為基督的身體,就是為教會,要在我肉身上<span className="font-semibold text-rose-700">補滿基督患難的缺欠</span>。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這段話使許多基督徒感到相當困惑。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">這道理的主旨</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                在第 25-27 節中,保羅說:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「我照神為你們所賜我的職分作了教會的執事,要把神的道理傳得全備,這道理就是歷世歷代所隱藏的奧祕;但如今向祂的聖徒顯明了。神願意叫他們知道,這奧祕在外邦人中有何等豐盛的榮耀,<span className="font-semibold text-blue-700">就是基督在你們心裡成了有榮耀的盼望</span>。」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">從知識到經驗</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                這也就是這個教導的主旨:讓基督——你榮耀的盼望——住在你的裡面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們所談的是要將「知識」的經驗轉化成「個人」的經驗。我們所談的這個轉化來自與基督緊密結合,經歷祂的患難。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們在其中雖然明白自己所經歷的,但卻不會「隨血氣起舞」,以致內心糾結掙扎或意氣用事。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 你是已經死了的人 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('dead-to-self')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cross className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              要記得,你是已經死了的人
            </h3>
          </div>
          {isExpanded('dead-to-self') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('dead-to-self') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              人們總是問我:「你如何聽見神的聲音?」「當你聽見的時候,你怎麼知道那就是祂的聲音?」
            </p>
            <p className="text-gray-700 leading-relaxed">
              我的回答是,當我「不隨血氣起舞」的時候,我的生命就有了屬靈的紀律,得以在基督耶穌裡,保持對這個世界已死的狀態。
            </p>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                歌羅西書三章 3 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「因為你們<span className="font-semibold text-indigo-700">已經死了</span>,你們的生命與基督一同藏在神裡面。」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">治死地上的肢體</h4>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                歌羅西書三章 5-7 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「所以,要<span className="font-semibold text-yellow-700">治死</span>你們在地上的肢體,就如淫亂、污穢、邪情、惡慾,和貪婪(貪婪就與拜偶像一樣)。因這些事,神的忿怒必臨到那悖逆之子。當你們在這些事中活著的時候,也曾這樣行過。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                請注意,這裡說你們從前「也曾」如此行和如此活。這節經文告訴我,我們在言行和生活上所作的選擇可能會傷了神的心。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">穿上新人</h4>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                歌羅西書三章 8-10 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「但現在你們要棄絕這一切的事,以及惱恨、忿怒、惡毒、毀謗,並口中污穢的言語。不要彼此說謊;因你們已經脫去舊人和舊人的行為,<span className="font-semibold text-green-700">穿上了新人</span>。這新人在知識上漸漸更新,正如造他主的形像。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 與父的親密關係 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('intimacy')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              與父的親密關係和交通
            </h3>
          </div>
          {isExpanded('intimacy') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('intimacy') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">耶穌的榜樣</h4>
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                約翰福音十章 37 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我若不行我父的事,你們就不必信我。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                約翰福音十四章 10-11, 31 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我在父裡面,父在我裡面,你不信嗎?我對你們所說的話,不是憑著自己說的,乃是住在我裡面的父做祂自己的事...但要叫世人知道我愛父,並且父怎樣吩咐我,我就怎樣行。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                除非耶穌聽到或看見天父這麼說或這麼做,否則祂就不去說或做任何事情。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">聖靈的角色</h4>
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                約翰福音十六章 12-15 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我還有好些事要告訴你們,但你們現在擔當不了。只等真理的聖靈來了,祂要引導你們明白一切的真理;因為祂不是憑自己說的,乃是把祂所聽見的都說出來...」
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶穌靠著與天父的緊密連結和親密交通,學習如何在生活的每一個層面行事為人。之後祂將聖靈差派到我們這裡來,透過聖靈供應我們,使我們能有相同的學習經驗。
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                羅馬書八章 26 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「況且,我們的軟弱有聖靈幫助;我們本不曉得當怎樣禱告,只是聖靈親自用說不出來的歎息替我們禱告。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 葡萄樹的比喻 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('vine')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              常在主裡面:葡萄樹的比喻
            </h3>
          </div>
          {isExpanded('vine') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('vine') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              無論是在約翰福音、歌羅西書、希伯來書或羅馬書中,我們所讀到的主旨都是要與天父緊密連結和親密交通。
            </p>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                約翰福音十五章 1-7 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我是真葡萄樹,我父是栽培的人。凡屬我不結果子的枝子,祂就剪去;凡結果子的,祂就修理乾淨,使枝子結果子更多...你們要常在我裡面,我也常在你們裡面。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「枝子若不常在葡萄樹上,自己就不能結果子;你們若不常在我裡面,也是這樣。我是葡萄樹,你們是枝子。常在我裡面的,我也常在他裡面,這人就多結果子;<span className="font-semibold text-green-700">因為離了我,你們就不能做什麼</span>。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「你們若常在我裡面,我的話也常在你們裡面,凡你們所願意的,祈求,就給你們成就。」
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">從僕人到朋友</h4>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                約翰福音十五章 15 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「以後我不再稱你們為僕人,因僕人不知道主人所做的事。我乃稱你們為朋友;因我從我父所聽見的,已經都告訴你們了。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 與父直接交通 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('direct-access')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              直接與父交通的權柄
            </h3>
          </div>
          {isExpanded('direct-access') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('direct-access') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                約翰福音十六章 23 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「到那日,你們什麼也不問我了。我實實在在地告訴你們,你們若向父求什麼,祂必因我的名賜給你們。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                在這裡祂將我們和祂之間的親密關係和交通移轉給天父,成了我們與天父之間的親密關係和交通。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                約翰福音十六章 25-27 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「這些事,我是用比喻對你們說的;時候將到,我不再用比喻對你們說,乃要將父明明地告訴你們。到那日,你們要奉我的名祈求;我並不對你們說,我要為你們求父。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「<span className="font-semibold text-blue-700">父自己愛你們</span>;因為你們已經愛我,又信我是從父出來的。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              耶穌不斷向我們表明,我們個人親自和天父交談和溝通是何等重要。祂希望我們和天父擁有一對一的個人關係。<span className="font-semibold">這一點是學習「不隨血氣起舞」最重要的關鍵。</span>
            </p>
          </div>
        )}
      </div>

      {/* 耶穌最後的禱告 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('final-prayer')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              耶穌最後的禱告:合而為一
            </h3>
          </div>
          {isExpanded('final-prayer') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('final-prayer') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              耶穌在約翰福音十七章 20-23 節中向天父的哭求,是聖經記載祂死前最後一次的禱告。其中字字句句都反映出祂內心對門徒能夠擁有像祂和天父之間那種密契交通的渴望與吶喊:
            </p>

            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不但為這些人祈求,<span className="font-semibold text-rose-700">也為那些因他們的話信我的人祈求</span>。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                你相不相信祂當時也在為今日的你和我祈求?我們不就是第 20 節中所提到的「那些〔將要〕因他們的話信我的人」嗎?
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「使他們都合而為一。正如祢父在我裡面,我在祢裡面,使他們也在我們裡面,叫世人可以信祢差了我來。」
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「祢所賜給我的榮耀,我已賜給他們,使他們合而為一,像我們合而為一。我在他們裡面,祢在我裡面,使他們完完全全地合而為一,叫世人知道祢差了我來,也知道祢愛他們如同愛我一樣。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                你有沒有注意到祂在這段經文裡的用字遣詞非常特別?你有沒有感受到祂靈魂深處對你我能夠合而為一的渴望與吶喊?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 吃奶與吃乾糧 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('milk-solid')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              從吃奶到吃乾糧
            </h3>
          </div>
          {isExpanded('milk-solid') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('milk-solid') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                希伯來書五章 11-12 節:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我們有好些話,並且難以解明,因為你們聽不進去。看你們學習的工夫,本該作師傅,誰知還得有人將神聖言小學的開端另教導你們,並且成了那必須吃奶、不能吃乾糧的人。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我遇過許多人,他們幾乎作了一輩子的基督徒,卻仍然在吃奶。
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">吃奶指的是什麼?</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                吃奶在這裡指的是某種生活模式。它指的是:
              </p>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 情感容易受傷</li>
                <li>• 容易被人觸怒</li>
                <li>• 容易冒犯別人</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                換句話說,它指的就是<span className="font-semibold text-yellow-700">「隨著血氣起舞」</span>!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 最後的挑戰 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('challenge')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cross className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              最後的挑戰:你真的已經死了嗎?
            </h3>
          </div>
          {isExpanded('challenge') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('challenge') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              因為如果你已經死了,而且你的生命與基督一同藏在神的裡面,你就不可能隨著血氣起舞,想要以自己的方式來解決問題。
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">終極的考驗</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果你仍然這麼做,那麼當一個人因為你為耶穌所作的見證而用一把槍指著你的臉,並對你說:「我要殺了你!」的時候,你將會為了救自己的性命而拔腿奔逃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                記得,根據歌羅西書三章 3 節所說,<span className="font-semibold text-red-700">「你們已經死了,你們的生命與基督一同藏在神裡面。」</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果你的生命真是藏在基督的裡面,在那個時候,你還會為了挽救它而試圖逃跑去得著它嗎?不會的,你一定會留在原地,<span className="font-semibold text-red-700">將它持續隱藏在基督的裡面</span>!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 深度反思 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border-l-4 border-blue-600">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">深度反思問題</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">1. 檢視你的「血氣」反應</h4>
                <p className="text-gray-700 mb-2">• 回想最近一次被冒犯或傷害的經歷,你當下的反應是什麼?</p>
                <p className="text-gray-700 mb-2">• 你是立即反擊、辯解,還是能夠保持平靜?</p>
                <p className="text-gray-700">• 事後回想,你的反應是出於「血氣」還是「聖靈」?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 「你已經死了」的意義</h4>
                <p className="text-gray-700 mb-2">• 保羅說「你們已經死了」,這對你有什麼具體意義?</p>
                <p className="text-gray-700 mb-2">• 在日常生活中,你如何實踐「向罪死,向神活」?</p>
                <p className="text-gray-700">• 什麼讓你難以「治死」地上的肢體?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 基督在你裡面</h4>
                <p className="text-gray-700 mb-2">• 「基督在你們心裡成了有榮耀的盼望」——這對你是真實的經驗,還是只是知識?</p>
                <p className="text-gray-700 mb-2">• 你如何將「知識」轉化為「個人經驗」?</p>
                <p className="text-gray-700">• 在困難中,你是否真實經歷基督在你裡面掌權?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 面對社會的「歌利亞」</h4>
                <p className="text-gray-700 mb-2">• 作者提到現代社會充滿污穢不潔的事物(新時代的歌利亞)</p>
                <p className="text-gray-700 mb-2">• 你如何在這樣的環境中保持聖潔?</p>
                <p className="text-gray-700">• 你是否會因為「大家都這樣」而妥協?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 行動指南 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
        <div className="flex items-start gap-3">
          <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-green-800 mb-4">實踐行動指南</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">1</span>
                  建立「停、想、禱」的習慣
                </h4>
                <p className="text-gray-700 mb-3">
                  當你被冒犯、傷害或激怒時:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• <span className="font-semibold">停</span> - 深呼吸,不要立即反應</li>
                  <li>• <span className="font-semibold">想</span> - 思考:「這是血氣還是聖靈?」</li>
                  <li>• <span className="font-semibold">禱</span> - 默禱:「主,幫助我不隨血氣起舞」</li>
                  <li>• 然後才回應或行動</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  每日「治死」操練
                </h4>
                <p className="text-gray-700 mb-3">
                  歌羅西書 3:5-10 的實踐:
                </p>
                <div className="bg-blue-50 rounded p-3 mb-3">
                  <p className="text-gray-700 mb-2"><span className="font-semibold">早晨宣告:</span></p>
                  <p className="text-gray-700 italic">
                    「我已經與基督同釘十字架,現在活著的不再是我,乃是基督在我裡面活著。今天我選擇治死我的舊人,穿上新人。」
                  </p>
                </div>
                <p className="text-gray-700 mb-2"><span className="font-semibold">晚間省察:</span></p>
                <ul className="space-y-1 text-gray-700 pl-4">
                  <li>• 今天哪些時刻我隨血氣起舞了?</li>
                  <li>• 哪些時刻我成功不隨血氣起舞?</li>
                  <li>• 向神認罪,求祂幫助明天做得更好</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  建立屬靈紀律
                </h4>
                <p className="text-gray-700 mb-3">
                  培養「在基督裡對世界已死」的生命:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• <span className="font-semibold">每日讀經</span> - 讓神的話更新心意</li>
                  <li>• <span className="font-semibold">默想經文</span> - 特別是歌羅西書 3 章</li>
                  <li>• <span className="font-semibold">禁食禱告</span> - 操練治死肉體</li>
                  <li>• <span className="font-semibold">遠避試探</span> - 不看、不聽污穢不潔的事物</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  尋求同伴守望
                </h4>
                <p className="text-gray-700 mb-3">
                  找一位屬靈同伴互相守望:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 每週見面或通話,分享彼此的掙扎</li>
                  <li>• 坦誠分享哪些時刻難以不隨血氣起舞</li>
                  <li>• 為彼此禱告,互相提醒和鼓勵</li>
                  <li>• 慶祝每一次的小勝利</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border-l-4 border-purple-600">
        <div className="flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">延伸探討</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">一、「不隨血氣起舞」的神學基礎</h4>
                <p className="text-gray-700 mb-3">
                  這個教導建基於<span className="font-semibold">「與基督同死同復活」</span>的真理:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 羅馬書 6:6 - 「我們的舊人和祂同釘十字架」</li>
                  <li>• 加拉太書 2:20 - 「我已經與基督同釘十字架」</li>
                  <li>• 歌羅西書 3:3 - 「你們已經死了,你們的生命與基督一同藏在神裡面」</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">核心真理:</span> 我們的舊人(肉體、血氣)已經在十字架上與基督同死。現在活著的是新人,是基督在我們裡面活。因此,我們不需要(也不應該)按照舊人的方式反應。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、耶穌的榜樣</h4>
                <p className="text-gray-700 mb-3">
                  耶穌是「不隨血氣起舞」的完美榜樣:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 被辱罵不還口(彼前 2:23)</li>
                  <li>• 被釘十架時為仇敵禱告(路 23:34)</li>
                  <li>• 面對試探時引用神的話(太 4:1-11)</li>
                  <li>• 在客西馬尼園選擇順服父神(路 22:42)</li>
                </ul>
                <p className="text-gray-700">
                  耶穌道成肉身,經歷我們所有的試探和苦難,卻<span className="font-semibold">沒有犯罪</span>(來 4:15)。祂向我們展示:即使在最困難的處境中,也能不隨血氣起舞。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、「補滿基督患難的缺欠」的意義</h4>
                <p className="text-gray-700 mb-3">
                  歌羅西書 1:24 這段話常被誤解。它不是說基督的救贖不完全,而是指:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 基督的<span className="font-semibold">贖罪</span>已經完全,不需要補充</li>
                  <li>• 但基督的<span className="font-semibold">受苦</span>需要在祂的身體(教會)中繼續</li>
                  <li>• 我們透過受苦,與基督一同經歷患難</li>
                  <li>• 這使我們更深認識祂,也能安慰同樣受苦的人</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">實際應用:</span> 當我們「不隨血氣起舞」地承受苦難時,我們就是在「補滿基督患難的缺欠」——不是為救恩,而是為見證和服事。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、與情緒管理的區別</h4>
                <p className="text-gray-700 mb-3">
                  「不隨血氣起舞」<span className="font-semibold">不等於</span>壓抑情緒或假裝沒感覺:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 壓抑情緒 = 假裝不受傷,把情緒藏起來</li>
                  <li>• 不隨血氣起舞 = 承認情緒,但不讓情緒控制行動</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">正確態度:</span>
                </p>
                <ol className="space-y-2 text-gray-700 pl-4">
                  <li>1. 承認自己的感受(「我感到受傷/生氣」)</li>
                  <li>2. 把感受帶到神面前(誠實禱告)</li>
                  <li>3. 尋求神的心意(「神要我如何回應?」)</li>
                  <li>4. 靠聖靈的能力行動(不憑血氣)</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、長期操練的重要性</h4>
                <p className="text-gray-700 mb-3">
                  「不隨血氣起舞」不是一夜之間學會的,而是<span className="font-semibold">終生的操練</span>:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 希伯來書 5:14 - 「心竅習練得通達」需要時間</li>
                  <li>• 每次的試煉都是操練的機會</li>
                  <li>• 失敗了不要灰心,認罪悔改再繼續</li>
                  <li>• 慶祝每一次的小進步</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">鼓勵:</span> 作者說這是「我這一生所學到,並且仍在不斷學習的」功課。即使是成熟的信徒,也需要繼續操練。不要因為失敗而放棄,神會在過程中塑造我們。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 本章金句 */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border-l-4 border-amber-600">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-amber-800 mb-3">本章金句</h3>
            <p className="text-lg text-gray-800 italic mb-4">
              「因為你們已經死了,你們的生命與基督一同藏在神裡面。」
            </p>
            <p className="text-sm text-gray-600 mb-4">— 歌羅西書三章 3 節</p>
            <p className="text-gray-700">
              我們的舊人已經與基督同釘十字架。當我們真正明白並活出這個真理時,就能在各樣處境中不隨血氣起舞,讓基督在我們裡面掌權。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
