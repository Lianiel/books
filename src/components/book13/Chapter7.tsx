import { useState } from 'react';
import { ChevronDown, ChevronUp, Mountain, AlertTriangle, Shield, Sword, Lightbulb, Target, BookOpen, MessageCircle, Cross, Flame } from 'lucide-react';

export default function Chapter7() {
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
          第七章 魔鬼的講壇
        </h1>
        <p className="text-lg text-gray-500 mt-2">在英格蘭的屬靈爭戰</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
        <div className="flex items-start gap-3">
          <Mountain className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-red-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本章記錄了作者在英格蘭和威爾斯邊界行走禱告時,無意中闖入一個叫「魔鬼的講壇」的地方,遭遇有生以來最強烈的屬靈爭戰。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這個故事揭示了土地如何因罪而被玷污,以及我們如何透過禱告和宣告來潔淨土地、釋放神的恩慈。
            </p>
          </div>
        </div>
      </div>

      {/* 美麗的早晨 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('beautiful-morning')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Mountain className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              美麗的五月早晨
            </h3>
          </div>
          {isExpanded('beautiful-morning') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('beautiful-morning') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed">
                在一個美麗、寧靜的五月早晨,我沿著英格蘭和威爾斯的邊界行走禱告。春天的野花正盛開,放眼望去,周圍的山坡因著這個季節繽紛的色彩和獨特的美而顯得生意盎然。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              在那個早晨沿著那條小路走著真是最令人愉快的一件事了。然而,我所不知道的是,<span className="font-semibold text-red-700">再過幾分鐘,整個情況將會完全改觀</span>。
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-gray-700 leading-relaxed">
                再一下下,靜謐的田園風光將會變成一幅戰場景象,彷彿地獄所有的魔鬼都傾巢而出,施展牠們全然的暴怒。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 魔鬼的講壇 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('devils-pulpit')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              闖入「魔鬼的講壇」
            </h3>
          </div>
          {isExpanded('devils-pulpit') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('devils-pulpit') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              我走著走著,來到一座山的山頂。山下最近的小鎮也有八英里之遠,它交錯的街道因而顯得十分渺小。
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                就在那裡,我發現自己正面對著<span className="font-semibold text-red-700">有生以來所遭遇過最頑強的邪惡勢力</span>。當時只有我一個人——當然,除了主以外。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我在不知不覺中闖入一個被稱為<span className="font-semibold text-red-700">「魔鬼的講壇」</span>(the Devil's Pulpit)的地方。它剛好位在「丁登寺」(Tintern Abby)的上方;丁登寺是不列顛群島上最古老和保存得最好的寺院之一。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 歷史背景 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('history')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              歷史背景:亨利八世與聖公會
            </h3>
          </div>
          {isExpanded('history') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('history') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-700 mb-2">亨利八世的叛逆</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                十五世紀初,羅馬教皇不准英王亨利八世與妻子離異另娶他人,他憤而將羅馬天主教逐出英格蘭,成立了自己的教會,也就是大家所認識的「聖公會」,或稱「英國國教」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                由於他是一國之君,他所說的話在非宗教的領域早已是不可撼動的金科玉律。這回隨著聖公會的設立,他也成了位於這片土地之上的教會之領袖。
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">打開的門</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當亨利這位政經民生領域的最高權威,為了將自己不道德的行為合法化而接管基督的教會時,這個國家就開始曝露在各種敗壞之中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                那便是亨利八世在他的領土上所打開的一扇門。而撒但也絲毫不浪費任何時間,馬上登堂入室接管了這片土地。
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">巫術與祕教盛行</h4>
              <p className="text-gray-700 leading-relaxed">
                隨著牠在不列顛群島建立起自己的轄地,這個國家成了祕教勢力龐大的基地。巫術、督伊德教以及古老的塞爾特族宗教儀式、用語和各種圖符象徵開始出現,並且勢如破竹地迅速蔓延開來。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 祝福與咒詛 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('blessing-curse')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Mountain className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              兩座山:祝福與咒詛的抉擇
            </h3>
          </div>
          {isExpanded('blessing-curse') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('blessing-curse') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                申命記 11:26-29:
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「看哪,我今日將祝福與咒詛的話都陳明在你們面前。你們若聽從耶和華你們神的誡命...就必蒙福。你們若不聽從...就必受禍。...你就要將祝福的話陳明在基利心山上,將咒詛的話陳明在以巴路山上。」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">每天的提醒</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                神要向他們表明的是:「每天早晨你都必須記得這件事。每當太陽升起,你看見那兩座山的山頂時,你就會記得你在那一天必須在兩者之間擇其一。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶利米提醒我們,神的憐憫,在每個早晨都是新的。每一天這項抉擇都矗立在我們的面前。
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">你不能同時爬兩座山</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們還是孩子的時候,我們幾個兄弟經常一起去爬山。你會試過一次爬兩座山嗎?是的,那是不可能的事。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神沒有造我們,使我們能夠那樣做;我們一次只能爬一座山。你要爬哪一座山呢?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 屬靈爭戰的經歷 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('spiritual-battle')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Sword className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              激烈的屬靈爭戰
            </h3>
          </div>
          {isExpanded('spiritual-battle') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('spiritual-battle') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                當我站在那個被稱為「魔鬼的講壇」的地方,我經歷了前所未有的屬靈攻擊。那不是一般的試探或騷擾,而是全面性的、猛烈的屬靈爭戰。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但神教導我,<span className="font-semibold text-purple-700">這不是我的爭戰,而是主的爭戰</span>。我的責任不是憑血氣爭戰,而是站立在神的真理上,宣告神的主權。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">關鍵領悟</h4>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 土地會因罪而被玷污</li>
                <li>• 歷史的罪孽會影響土地</li>
                <li>• 我們可以為土地代求、宣告潔淨</li>
                <li>• 耶穌的寶血能潔淨一切</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 如何潔淨土地 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('cleanse-land')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cross className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              如何潔淨土地
            </h3>
          </div>
          {isExpanded('cleanse-land') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('cleanse-land') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-700 mb-3">步驟一:認罪悔改</h4>
              <p className="text-gray-700 leading-relaxed">
                先為自己的罪認罪悔改,確保你站在神的恩典中。然後為那地的歷史罪孽代求,承認那些罪的可怕。
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-3">步驟二:宣告耶穌的寶血</h4>
              <p className="text-gray-700 leading-relaxed">
                宣告耶穌的寶血遮蓋那地,潔淨所有的污穢。寶血的能力超越一切黑暗勢力。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-3">步驟三:釋放神的恩慈</h4>
              <p className="text-gray-700 leading-relaxed">
                為那地求神的恩慈和祝福。求神的國降臨,神的旨意行在那地,如同行在天上。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-3">步驟四:持續守望</h4>
              <p className="text-gray-700 leading-relaxed">
                潔淨土地不是一次性的,而是需要持續的禱告守望。繼續為那地禱告,直到看見轉化。
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
                <h4 className="font-semibold text-blue-700 mb-2">1. 土地與罪</h4>
                <p className="text-gray-700 mb-2">• 你相信土地會因罪而被玷污嗎?</p>
                <p className="text-gray-700 mb-2">• 你有沒有經歷過某些地方特別有壓迫感或黑暗感?</p>
                <p className="text-gray-700">• 你所在的城市/社區有什麼歷史罪孽?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 祝福與咒詛的抉擇</h4>
                <p className="text-gray-700 mb-2">• 你每天是否意識到自己在選擇祝福或咒詛?</p>
                <p className="text-gray-700 mb-2">• 你的選擇帶來的是生命還是死亡?</p>
                <p className="text-gray-700">• 你是否在某些領域一直爬「咒詛的山」?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 為土地代求</h4>
                <p className="text-gray-700 mb-2">• 你有沒有為你的城市/國家禱告的負擔?</p>
                <p className="text-gray-700 mb-2">• 你是否了解你所在地的屬靈歷史?</p>
                <p className="text-gray-700">• 你願意成為你土地的守望者嗎?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 耶穌寶血的能力</h4>
                <p className="text-gray-700 mb-2">• 你相信耶穌的寶血能潔淨土地嗎?</p>
                <p className="text-gray-700 mb-2">• 你有沒有經歷過宣告寶血後的釋放?</p>
                <p className="text-gray-700">• 你是否低估了寶血的能力?</p>
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
                  研究你所在地的屬靈歷史
                </h4>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 了解你城市/社區的歷史</li>
                  <li>• 查看是否有重大罪孽(流血、不公義、偶像崇拜)</li>
                  <li>• 尋找老一輩基督徒,詢問屬靈歷史</li>
                  <li>• 記錄下來,成為代禱的基礎</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  開始為你的土地行走禱告
                </h4>
                <p className="text-gray-700 mb-3">
                  實踐步驟:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 從你的家開始,宣告潔淨</li>
                  <li>• 擴展到你的社區</li>
                  <li>• 為關鍵地點禱告(政府機關、學校、醫院)</li>
                  <li>• 定期(每週/每月)為你的城市守望</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  每天選擇祝福而非咒詛
                </h4>
                <p className="text-gray-700 mb-3">
                  建立每日習慣:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 早晨醒來,宣告「今天我選擇祝福」</li>
                  <li>• 在每個決定前,問自己「這選擇帶來生命還是死亡?」</li>
                  <li>• 晚上反省:今天我選擇了哪座山?</li>
                  <li>• 認罪悔改,重新對齊神</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  組織教會的行走禱告團隊
                </h4>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 邀請 2-3 位有負擔的弟兄姊妹</li>
                  <li>• 一起學習行走禱告的原則</li>
                  <li>• 定期為城市不同區域禱告</li>
                  <li>• 記錄禱告和神的回應</li>
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
                <h4 className="font-semibold text-purple-700 mb-3">一、土地如何被玷污?</h4>
                <p className="text-gray-700 mb-3">
                  聖經中土地被玷污的例子:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• <span className="font-semibold">流無辜人的血:</span> 該隱殺亞伯,地開口吞血(創 4:10-11)</li>
                  <li>• <span className="font-semibold">性罪:</span> 迦南地因淫亂而吐出居民(利 18:25)</li>
                  <li>• <span className="font-semibold">偶像崇拜:</span> 邱壇玷污土地(王下 23)</li>
                  <li>• <span className="font-semibold">不公義:</span> 壓迫窮人,地呼求(雅 5:4)</li>
                </ul>
                <p className="text-gray-700">
                  當這些罪在土地上發生,土地本身就被玷污,需要潔淨。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、亨利八世的教訓</h4>
                <p className="text-gray-700 mb-3">
                  亨利八世的故事顯示:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 領袖的罪影響整個國家</li>
                  <li>• 為了合法化自己的罪而改變教會 = 打開魔鬼的門</li>
                  <li>• 當教會與世俗權力混合,屬靈純潔就被破壞</li>
                  <li>• 一個錯誤決定,影響數百年</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">應用:</span> 為你國家的領袖禱告。他們的決定不只是政治,而是屬靈的。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、「魔鬼的講壇」的意義</h4>
                <p className="text-gray-700 mb-3">
                  這個地名本身就說明了問題:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 這是一個被獻給魔鬼的地方</li>
                  <li>• 過去在這裡進行巫術、祭祀</li>
                  <li>• 名字本身就是咒詛的宣告</li>
                  <li>• 需要被重新命名、重新奉獻給神</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、寶血的能力</h4>
                <p className="text-gray-700 mb-3">
                  耶穌的寶血能:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 洗淨一切的罪(約壹 1:7)</li>
                  <li>• 贖回被玷污的土地</li>
                  <li>• 打破世代的咒詛</li>
                  <li>• 釋放被囚的靈魂</li>
                  <li>• 恢復與神的關係</li>
                </ul>
                <p className="text-gray-700">
                  寶血不只是個人的救恩,也是土地的救恩。當我們宣告寶血遮蓋土地時,我們是在行使屬靈的權柄。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、行走禱告的戰略意義</h4>
                <p className="text-gray-700 mb-3">
                  為什麼「行走」禱告這麼重要?
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• <span className="font-semibold">物理臨在:</span> 你的腳踏在那地,宣告主權</li>
                  <li>• <span className="font-semibold">屬靈佔領:</span> 如同約書亞「你們腳掌所踏之地,我都賜給你們了」</li>
                  <li>• <span className="font-semibold">看見需要:</span> 行走讓你看見真實的需要,不只是想像</li>
                  <li>• <span className="font-semibold">破除營壘:</span> 當你行走禱告,你正在破除那地的屬靈營壘</li>
                </ul>
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
              「看哪,我今日將祝福與咒詛的話都陳明在你們面前。」
            </p>
            <p className="text-sm text-gray-600 mb-4">— 申命記 11:26</p>
            <p className="text-gray-700 mb-4">
              每一天,我們都面對兩座山:祝福的山和咒詛的山。我們一次只能爬一座山。你的選擇決定你的生命結出什麼果子。
            </p>
            <p className="text-gray-700">
              土地會因罪而被玷污,但耶穌的寶血能潔淨一切。當我們為土地行走禱告、代求、宣告神的主權時,我們正在參與神國度降臨的工作。不要小看你的禱告 — 你可能正在潔淨一個被魔鬼佔據數百年的「講壇」。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
