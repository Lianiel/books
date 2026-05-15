import { useState } from 'react';
import { ChevronDown, ChevronUp, Map, Heart, Users, Sparkles, Lightbulb, Target, BookOpen, MessageCircle, Navigation, Wind } from 'lucide-react';

export default function Chapter5() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['alex','alex-story','bar-door','brute','discouragement','ending','guidance','holy-spirit-challenge','manuel','resolution']);

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
          第五章 莽漢、艾利克斯和曼紐爾
        </h1>
        <p className="text-lg text-gray-500 mt-2">跟隨聖靈的平安與詩歌</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
        <div className="flex items-start gap-3">
          <Map className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本章記錄了作者 1961 年在鳳凰城街頭發福音單張時,學習跟隨聖靈「平安」引導的經歷。這次奇妙的經歷開啟了「行走禱告」的原則。
            </p>
            <p className="text-gray-700 leading-relaxed">
              透過跟隨內心的平安和詩歌,作者被引導到一個看似不可能的地方,見證了神奇妙的救恩計畫。
            </p>
          </div>
        </div>
      </div>

      {/* 新年立志 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('resolution')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              1961 年的新年立志
            </h3>
          </div>
          {isExpanded('resolution') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('resolution') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                在同一天的傍晚,我為一九六一年立下了一個新年新志向;這個志向開啟了我人生最重要的階段之一。
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-purple-700">
                「主啊,每星期我會找一天晚上帶一百份福音單張到鳳凰城市區,我若不親手發完它們就不回家。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              當我立下這個志向時,主就在那天晚上開始將<span className="font-semibold">行走禱告</span>的原則栽植在我的生命中。直到如今,祂仍然在持續不斷地加添這些原則的內涵。
            </p>
          </div>
        )}
      </div>

      {/* 氣餒的開始 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('discouragement')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Wind className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              氣餒:單張隨風飛散
            </h3>
          </div>
          {isExpanded('discouragement') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('discouragement') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              於是在一九六一年的元旦,我滿腔熱血地開始實踐我的諾言。到了二月底,一如我所答應主的,我走遍貧民區的大街小巷四處發單張。但我感到非常氣餒。
            </p>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                這些單張的下場不是:
              </p>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 隨風吹散,在空中起舞</li>
                <li>• 被雨水浸透</li>
                <li>• 被當作一般垃圾丟在路邊</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              我哭求主打破這個宿命,讓新鮮事發生,因為我所做的並沒有為主結出果子,只是讓拾荒者有活可幹罷了。
            </p>
          </div>
        )}
      </div>

      {/* 聖靈的挑戰 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('holy-spirit-challenge')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              聖靈的挑戰:跟隨平安
            </h3>
          </div>
          {isExpanded('holy-spirit-challenge') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('holy-spirit-challenge') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <h4 className="font-semibold text-rose-700 mb-2">聖靈的話</h4>
              <p className="text-gray-700 leading-relaxed">
                「你去街頭發單張時,要選你心裡<span className="font-semibold text-rose-700">滿有平安</span>的時間和地點;而且也只有在你心中充滿相同的平安時,才可以伸手向人遞出單張。」
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">我的解讀</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                一旦我心中猶豫是否該繼續往下走,或是該換條路,那我就應該停下來,試試那條新路。
              </p>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 若<span className="font-semibold">平安和詩歌</span>回到我心中 = 應該繼續走</li>
                <li>• 一旦<span className="font-semibold">平安和詩歌</span>消失 = 應該停下來,換方向</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              當年的這個基本教導,日後成了我最後收錄在本書中的故事和屬靈原則的基調。
            </p>
          </div>
        )}
      </div>

      {/* 奇妙的引導 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('guidance')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Navigation className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              奇妙的引導:繞了一個正方形
            </h3>
          </div>
          {isExpanded('guidance') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('guidance') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              於是我謹記聖靈的指示,開始依據心中的平安和唇上的詩歌走在鳳凰城的街道上。
            </p>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">第一次轉向</h4>
              <p className="text-gray-700 leading-relaxed">
                第一個晚上,我正要越過一條街朝一群人走過去,我的詩歌和平安卻離開了我。於是我轉身往原路走回去。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">沒有人,卻極為平安</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我朝那個方向看過去,<span className="font-semibold text-blue-700">半個人也看不到</span>,但我心裡卻極為平安,而且口裡又再次哼起詩歌來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我心想:「我雖然看不到半個可以讓我發單張的對象,但我還是要追隨這份平安繼續走下去才是。」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">繞了一圈</h4>
              <p className="text-gray-700 leading-relaxed">
                我就這樣在一個正方形的街塊繞了半圈,卻<span className="font-semibold text-yellow-700">沒有發出半張單張</span>,也沒有機會向任何人作見證。但那份平安卻仍然緊緊抓住我的心、指引我的腳步。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 酒館門口 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('bar-door')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Map className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              停在酒館門口
            </h3>
          </div>
          {isExpanded('bar-door') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('bar-door') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              當我走到那個點時,我向左邊一看,看到一間小酒館的門,門上貼著一面「未滿廿一歲禁止進入」的告示牌。我只有十八歲,因此沒有資格進去。
            </p>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-700 mb-2">進退不得</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                • 不能過街(違反交通規則)<br />
                • 不能進酒館(未滿 21 歲)<br />
                • 往右走平安就離開<br />
                • 只有面對酒館門時平安才回來
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                於是我停下腳步,站在那裡,進退不得。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">決心等候</h4>
              <p className="text-gray-700 leading-relaxed">
                我心裡說:「主啊,我決定<span className="font-semibold text-blue-700">站在這裡,守著這平安,直到祢告訴我離開或發生某件事情為止</span>。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 莽漢出現 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('brute')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              莽漢衝出來
            </h3>
          </div>
          {isExpanded('brute') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('brute') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                就在那一刻,一個粗壯、滿臉鬍肥的男子走出那扇門,使勁地扯著他的嗓門咒罵著——而且非常靠近我的臉。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他在極度憤怒中揮舞著拳頭,在我的耳邊劃來劃去。他不斷朝我的臉吐口水並且大聲咒罵,而我只是靜靜地站在原地對他微笑。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他似乎怎麼也打不著我。這更加激怒了他。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              這情形持續了一段時間。我就站在那裡為他寶貴靈魂的得救不斷禱告。我可以從眼角看到相當多的人被吸引過來。
            </p>
          </div>
        )}
      </div>

      {/* 艾利克斯 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('alex')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              艾利克斯:「耶穌愛你」
            </h3>
          </div>
          {isExpanded('alex') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('alex') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              我不想整個人轉過去看,因為那將使他已經在我耳邊搧來搧去的拳頭打到我的鼻子。他和我差不多高;當我從他左耳旁邊側看出去,我看到酒館門邊有個人向我走過來。
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">四目交會</h4>
              <p className="text-gray-700 leading-relaxed">
                我們四目交會之後,那個人突然開始用手抹去臉上滑下的淚水。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              莽漢最後從喉嚨發出一聲呼嚕聲,就轉身用手肘推開旁邊的人,殺出一條路,回到酒館裡去了,留下一大群人在我身邊。
            </p>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">關鍵對話</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                當我走到他旁邊,我問道:「你叫什麼名字?」
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                他回答:「艾利克斯。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 font-semibold text-green-700">
                「艾利克斯,你知道耶穌愛你嗎?」
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                聽了這話他登時跪了下來,大聲懺悔說:「喔,耶穌,我知道祢愛我。謝謝祢。謝謝祢饒恕我和愛我。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 曼紐爾 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('manuel')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              曼紐爾:印地安男子漢也會哭
            </h3>
          </div>
          {isExpanded('manuel') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('manuel') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              哇,向神說話這件事他竟然可以做得這麼好,我想他應該不需要我了,因此我站了起來。站在我旁邊的是個高高的毗馬印地安人。
            </p>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                他死命地掌摑著自己的臉,口中說道:<span className="font-semibold text-indigo-700">「堂堂印地安男子漢是不哭的。堂堂印地安男子漢是不哭的。」</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                我重複我剛剛問艾利克斯的同一問題:「你叫什麼名字?」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「曼紐爾。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「曼紐爾,耶穌愛你。那些眼淚都是很棒的眼淚,你不用為哭泣感到丟臉。」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                他在嗚咽中向我解釋:「我做錯很多事情,但當我看到這個人以那種方式找到神,我忍不住哭了。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我說:「曼紐爾,你何不在艾利克斯的旁邊跪下,照著他的方式向神禱告?」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 艾利克斯的故事 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('alex-story')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              艾利克斯的絕望禱告
            </h3>
          </div>
          {isExpanded('alex-story') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('alex-story') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              群眾漸漸散去,各做各的事去了;這才讓我有機會和艾利克斯交談。他開始敘述他是誰以及他為什麼會在這時候來到這個地方。
            </p>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">艾利克斯的遭遇</h4>
              <ul className="space-y-2 text-gray-700 pl-4">
                <li>• 從洛杉磯來,和朋友到鳳凰城喝酒</li>
                <li>• 錢花光後,醒來發現在巷子裡</li>
                <li>• 皮夾和好友都不見了</li>
                <li>• 慚愧地沒臉直接回家</li>
                <li>• 四處遊蕩,愈來愈沮喪</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">絕望中的禱告</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他走在那條巷子裡,並且明白自己身陷嚴重的麻煩時,他向主哭喊:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3 font-semibold text-purple-700">
                「如果我還有什麼地方值得祢愛我,請祢派一個人來告訴我『耶穌愛你』。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                他在沮喪之中決定,如果當晚酒館打烊之前沒有人來告訴他這句話,他就要走到鐵軌上,等火車開過來時衝上去,讓自己一了百了。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">神的回應</h4>
              <p className="text-gray-700 leading-relaxed">
                他就是在那時候看見我微笑的臉,以及那個莽漢想要打我卻徒勞無功的樣子。當我的微笑轉向他時,他再也按耐不住自己的眼淚,<span className="font-semibold text-green-700">因為他知道神果真派了一個人來,要告訴他:「艾利克斯,耶穌愛你。」</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 結局 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('ending')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              神奇妙的計畫
            </h3>
          </div>
          {isExpanded('ending') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('ending') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                艾利克斯最後獲得資助,回到洛杉磯;而我則把曼紐爾帶回印地安保留區,並且與他的姊姊和媽媽一同禱告。
              </p>
              <p className="text-gray-700 leading-relaxed italic font-semibold text-amber-700">
                讚美神,因為祂以耐心教導我們,祂用恩慈與良善對待全人類!
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
                <h4 className="font-semibold text-blue-700 mb-2">1. 跟隨聖靈的平安</h4>
                <p className="text-gray-700 mb-2">• 你有沒有經歷過內心「平安」或「不平安」的感覺?</p>
                <p className="text-gray-700 mb-2">• 當平安離開時,你會停下來尋求神的引導嗎?</p>
                <p className="text-gray-700">• 你是否曾因為忽略內心的不平安而後悔?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 看不見人,卻繼續前行</h4>
                <p className="text-gray-700 mb-2">• 作者看不到任何人,但因為有平安就繼續走</p>
                <p className="text-gray-700 mb-2">• 你能否在看不見結果時,仍然順服神的引導?</p>
                <p className="text-gray-700">• 什麼會讓你停止順服?(沒有看見果效?太不合理?)</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 神的時間與位置</h4>
                <p className="text-gray-700 mb-2">• 神引導作者到一個看似不可能的地方(酒館門口,未滿 21 歲禁入)</p>
                <p className="text-gray-700 mb-2">• 艾利克斯在同一時間剛好在那裡,正等著有人告訴他「耶穌愛你」</p>
                <p className="text-gray-700">• 你相信神在安排你的腳步嗎?即使看起來不合理?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 如果沒有順服...</h4>
                <p className="text-gray-700 mb-2">• 如果作者因為「看不到人」就放棄,會發生什麼事?</p>
                <p className="text-gray-700 mb-2">• 艾利克斯可能就會自殺</p>
                <p className="text-gray-700">• 你有沒有想過,你的順服可能關乎某人的生死?</p>
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
                  操練敏銳於聖靈的平安
                </h4>
                <p className="text-gray-700 mb-3">
                  每天操練注意內心的平安:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 早晨安靜時,問神:「今天祢要我做什麼?」</li>
                  <li>• 注意內心的平安或不平安</li>
                  <li>• 當計畫某事時,留意平安是否離開</li>
                  <li>• 平安離開 = 停下來禱告尋求</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  嘗試「行走禱告」
                </h4>
                <p className="text-gray-700 mb-3">
                  找一天實踐:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 選一個時間去散步(校園、社區、公園)</li>
                  <li>• 邊走邊禱告,求神引導你的腳步</li>
                  <li>• 注意哪些人、哪些地方讓你特別有負擔</li>
                  <li>• 當平安臨到時,停下來為那人/那地禱告</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  準備好說「耶穌愛你」
                </h4>
                <p className="text-gray-700 mb-3">
                  很多人像艾利克斯一樣,正在等待有人告訴他們:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 求神給你機會對某人說「耶穌愛你」</li>
                  <li>• 不要小看這句話的能力</li>
                  <li>• 可能救一個正在絕望中的人</li>
                  <li>• 讓自己隨時準備好分享福音</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  即使看不見果效,仍然順服
                </h4>
                <p className="text-gray-700 mb-3">
                  學習作者的榜樣:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 繞了一圈沒發出任何單張,但仍繼續跟隨平安</li>
                  <li>• 不以「果效」來判斷是否順服</li>
                  <li>• 神的計畫遠超過我們所能看見的</li>
                  <li>• 你的順服可能正在拯救某個你不認識的人</li>
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
                <h4 className="font-semibold text-purple-700 mb-3">一、「平安」作為聖靈引導的記號</h4>
                <p className="text-gray-700 mb-3">
                  聖經中關於平安的教導:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 腓立比書 4:7 - 「神所賜出人意外的平安」</li>
                  <li>• 歌羅西書 3:15 - 「讓基督的平安在你們心裡作主」</li>
                  <li>• 約翰福音 14:27 - 「我留下平安給你們」</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  平安不是:
                </p>
                <ul className="space-y-1 text-gray-700 pl-4 mb-3">
                  <li>• 沒有困難(作者面對莽漢時仍有平安)</li>
                  <li>• 看得見結果(看不到人也有平安)</li>
                  <li>• 合乎理性(站在禁止進入的酒館門口)</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">關鍵:</span> 平安是一種內在的確據,來自聖靈,超越環境和理性。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、神的時間分秒不差</h4>
                <p className="text-gray-700 mb-3">
                  這個故事展現神驚人的精準:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 艾利克斯在洛杉磯被朋友騙,流落鳳凰城</li>
                  <li>• 他在絕望中禱告,求神派人告訴他「耶穌愛你」</li>
                  <li>• 作者在二月底氣餒,聖靈教導他跟隨平安</li>
                  <li>• 同一個晚上,同一個時刻,同一個地點</li>
                  <li>• 莽漢剛好衝出來,吸引眾人圍觀</li>
                  <li>• 艾利克斯剛好在酒館門邊看見</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  如果任何一個環節不同,兩人就不會相遇。這不是巧合,是神的精心安排。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、「行走禱告」的原則</h4>
                <p className="text-gray-700 mb-3">
                  這章建立了「行走禱告」的基本原則:
                </p>
                <ol className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>1. <span className="font-semibold">尋求平安:</span> 選擇有平安的時間和地點</li>
                  <li>2. <span className="font-semibold">跟隨平安:</span> 平安在就繼續,平安離開就轉向</li>
                  <li>3. <span className="font-semibold">等候平安:</span> 如果進退不得,就停在有平安的地方等候</li>
                  <li>4. <span className="font-semibold">順服平安:</span> 即使不合理(看不到人、不能進去),仍然順服</li>
                </ol>
                <p className="text-gray-700">
                  這些原則成為作者後來所有服事的基調,也是本書其他故事的基礎。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、莽漢的角色</h4>
                <p className="text-gray-700 mb-3">
                  莽漢看似是攪局者,實際上是神計畫的一部分:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 他的咒罵吸引了人群圍觀</li>
                  <li>• 人群中就包括艾利克斯和曼紐爾</li>
                  <li>• 他的拳頭打不到作者,展現神的保護</li>
                  <li>• 作者的微笑和平靜成為強烈對比</li>
                  <li>• 這個對比讓艾利克斯看見神的愛</li>
                </ul>
                <p className="text-gray-700">
                  神甚至使用看似負面的人和事來成就祂的計畫。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、一句話的能力</h4>
                <p className="text-gray-700 mb-3">
                  「耶穌愛你」- 簡單的四個字,卻有巨大的能力:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 對艾利克斯:是神回應他禱告的記號,救他脫離自殺</li>
                  <li>• 對曼紐爾:讓他這個「不哭的印地安男子漢」流淚悔改</li>
                  <li>• 對圍觀群眾:見證神的真實</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">應用:</span> 永遠不要小看一句簡單的「耶穌愛你」。你不知道誰正在等待聽到這句話。
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
              「你去街頭發單張時,要選你心裡滿有平安的時間和地點;而且也只有在你心中充滿相同的平安時,才可以伸手向人遞出單張。」
            </p>
            <p className="text-sm text-gray-600 mb-4">— 聖靈的話</p>
            <p className="text-gray-700">
              跟隨聖靈的平安,即使看不見結果,即使不合理,也要順服。神的時間分秒不差,你的順服可能正在拯救一個你不認識、正在絕望中的人。讚美神,因為祂以耐心教導我們,祂用恩慈與良善對待全人類!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
