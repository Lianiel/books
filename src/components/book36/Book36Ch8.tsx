import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第八講</h1>
        <h2 className="text-xl font-semibold text-gray-700">神國裡四種類型的人</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、禱告戰士與耶穌的愛人——兩種代禱者的失衡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔一開場請大家翻到馬太福音第六章，並先做了一個小小的現場調查：多少人禱告不到5年、5到10年、10到15年、20年以上。她說，有些禱告多年的人一直在尋找「禱告的秘方」，卻不真的認得禱告的那位主；也有些人心裡像戰士一樣，滿腦子都是屬靈爭戰，卻沒有學會成為一個單純愛耶穌的人。她形容早年教導禱告時，教會裡許多代禱者總像是在不停追打魔鬼，「禱告戰士」與「耶穌的愛人」這兩種特質，好像很難同時並存在一個人身上；但她深信，人越靠近耶穌，就會越能成為有智慧、有能力的代禱者。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、主禱文的情境——門徒真正在問什麼？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家想像：如果你有一天坐在橄欖山上聽耶穌講道，眼睛突然被打開，第一次真正意識到眼前這位與你同吃同睡同行的人，就是永生神的兒子——祂在時間之先就與父同在，親眼見過父，坐在父神的右邊——在那種情境下，你要問祂的第一個問題會是什麼？她說，這正是門徒的處境：他們聽過耶穌禱告，也聽過法利賽人、撒都該人、文士律法師在街上大聲冗長的禱告，也聽過自己父親餐桌上的禱告，卻從未聽過像耶穌那樣、聽得出「認識父神」的禱告，於是他們對耶穌說：「教導我們禱告」。妮塔強調，門徒不是在找一個格式化的範本或秘方，耶穌給的回答第一步也不是背誦公式，而是「我們來禱告」——因為除非你開始禱告,你學不會禱告,你越禱告,越懂得如何禱告。她引出馬太福音六章9-13節的主禱文經文作為這一講的根基。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她進一步說，如果一個人渴望的只是「知道怎麼讓神做我要祂做的事」，那就需要秘方；但如果渴望的是真正認識這位賜生命的主，就不需要秘方，只需要持續禱告，直到祂觸摸你的心、對你變得真實。她提醒，大部分基督徒對神的「真實」其實並不明白——花很多時間聽錄音、讀書、看影片來認識神的知識，卻未必真正經歷神。她說，認識神最基本的方法就是：跟祂說話、聽祂說話、培育單單渴慕祂的熱情，讓早晨睜眼的第一句話、晚上闔眼前的最後一句話，都成了向祂表達的愛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、禱告的四個層次：溝通、相交、擘餅、變相</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提出禱告有四個遞進的層次。第一層是<strong>溝通式的禱告（Communication）</strong>：大部分基督徒的日常禱告——祝福家人、祝福工作、祝福經濟，然後「奉耶穌的名，阿們」；她笑談過去某廣播節目教人「一天花5分鐘認識神」，指出你連認識一個人都不可能只花5分鐘，何況是神，但這仍是大部分基督徒起步的禱告方式，是一種較低層次、卻也是常見必經的溝通。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二層是<strong>相交式的禱告（Fellowship）</strong>：像是一位姊妹進入禱告室，跟神聊今天穿什麼、求神留一個好停車位，整天都在跟神說話——內容或許瑣碎甚至有點好笑，但她們正逐漸靠近耶穌，開始意識到神無所不在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三層是<strong>擘餅式的禱告（Communion）</strong>：操練神的同在，培育內在生活，學習在神同在中安靜等候，渴望明白祂的旨意與心意，用聖經的話敬拜祂，如雅歌書拉密女渴望「用你的嘴親吻我」那樣，渴慕真實觸摸到神的本性。妮塔坦言自己曾有過一次經歷——被提到神完全超越的同在中，感受到神從亙古直到永遠、不受時間限制的浩瀚，自己被擴張到超過人一切的容量，最終無法承受、自己選擇退出，她說有些神的奧秘寧可留到天堂再經歷。她形容與神相交的旅程，會讓人認識這位與哀哭者同哭、與嬉笑者同樂的神，這位對軟弱與被罪捆綁的人滿懷憐憫、如同撇下九十九隻羊去尋找那一隻迷羊的牧人，心裡並不論斷人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第四層是<strong>變相／合一式的禱告（Transformation）</strong>：如同夫妻合二為一——丈夫的心變成妻子的心，妻子的心變成丈夫的心，兩人有同一個心跳，那擘餅的杯已不再需要，因為只剩一顆心。妮塔說，在這個層次裡，基督徒被淹沒在神的同在裡。她也提醒，不是每個人都渴望走到這麼深的地步——她問學員是否覺得自己不需要這些屬靈經歷，也有人舉手表示不需要；但她強調，僅僅渴求神、讀神的話仍是不夠的，除非切實經歷祂的心意、道路與思念，光是能引用五十處經文，不代表真正認識神。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、神國裡的四種人：僅僅認識、彼此認識、朋友、新婦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享神在異象中告訴她，祂教會裡的聖徒可以分為四類。<strong>第一類是「僅僅認識」</strong>：每週日到教會，彼此點頭打招呼，卻稱不上關係，是遠距離的認識——神深愛他們，若能擁抱他們祂會這麼做，他們在敬拜或服事中偶爾經歷神的觸摸，但那只是神憐憫的舉動。<strong>第二類是「彼此認識」</strong>：同屬一個主日學，會寒暄近況，是熟人關係，是溝通的專家，對神的認識大多停留在牧師講道所說的內容，禱告可能也只有每天五分鐘。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>第三類是「朋友」</strong>：親密的朋友之間可以談論家事，緊急時會互相代禱——妮塔說，神也有這樣的朋友，就是祂的代禱者，祂會告訴他們一些不會告訴別人的事。<strong>第四類是「新婦」</strong>：如同結婚多年的夫妻，即使一天不說話，妻子也能感覺到丈夫的心思與情緒，甚至相處久了容貌氣質都彼此相似——耶穌也有這樣的新婦，能經歷別人無法經歷的啟示,祂向她所彰顯的,是別人未曾見過的。妮塔形容新婦每天花大量時間單單與主同在，她的禱告帶著極大權柄,如同以斯帖、狄波拉、聖殿裡的亞拿一樣，一般基督徒看她可能覺得平凡、安靜、不愛參加聚集，卻帶著極大的權柄；她不追逐名利，不過奢華生活，因為她活在基督裡而非世界裡，渴望聆聽父神輕柔的呼喚。妮塔補充，新婦有時站上講臺成為牧師、教師、先知，有時卻不是，因為她真正的價值不在講臺，而在禱告室裡——神藉著新婦改變一個國家的命定，這是極高的使徒性呼召。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、你被造是為了什麼？——結語的挑戰</h3>
              <p className="text-gray-700 leading-relaxed">
                妮塔以創世記的「起初，神」作結，提醒學員：你連自己的頭髮、身高、性別都無法掌控,若連生命中最基本的部分都需要神,又怎能以為自己不需要神來引導、加力量？她直接挑戰學員：你被放在地上，不是為了在餐桌邊佔一個位置，不是為了講一場好道，不是為了成為好父母，不是為了讓人驚豔於你的才智或藝術天賦，也不是為了成為一個好的主日學老師——你被放在地上，是要讓神的國透過你被釋放到地上。她強調：這與你做了什麼事無關，而是關乎你成為什麼樣的人，關乎你身上披戴的是誰，關乎你裡面盛裝了多少神自己。
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
                '門徒向耶穌求的不是禱告公式，而是「怎樣像你一樣認識父神」；耶穌的回答不是給範本，而是「我們來禱告」——禱告本身就是認識神的途徑。',
                '禱告有四個遞進的層次：溝通式（日常代求）、相交式（隨時交談）、擘餅式（安靜等候、渴望明白神心意）、變相式（與神合而為一，如夫妻同心）。',
                '妮塔提出教會中的四種人：僅僅認識、彼此認識、朋友、新婦——親密程度逐層加深，新婦被形容為與神心意最為交織的一群代禱者。',
                '新婦式的代禱者不一定站在講臺上，她真正的價值和權柄在禱告室裡，藉著與神的親密關係影響一個國家的命定。',
                '結語的核心挑戰：你的價值不在於「做了什麼」，而在於「成為什麼樣的人」、「身上披戴誰」、「裡面盛裝多少神自己」。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「四種人」的分類，是否意味著基督徒有等級之分？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用「僅僅認識、彼此認識、朋友、新婦」描述親密程度的差異，用意是鼓勵人渴慕更深的關係，而非為信徒劃分「等級」或暗示某些基督徒比較不蒙神喜悅。聖經中，神對每一個相信祂的人都懷著同樣真實、毫無保留的愛（羅馬書八章38-39節），「新婦」在啟示錄十九章、二十一章等經文中其實是指整個教會群體，而非教會裡的少數精英。讀者在使用這個框架自我省察時，宜把重點放在「我可以如何更靠近神」，而不是拿這個分類去論斷自己或他人在神眼中的價值高低。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「被提到神超越同在中、自己選擇退出」的經歷該如何理解？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述自己在深度禱告中經歷到難以承受的屬靈經歷而主動退出，這提醒我們：追求與神更深的相交，不代表要不計代價地追逐超自然的、震撼性的靈裡經歷。聖經中保羅在哥林多後書十二章提到自己被提到樂園、卻不可說出所聽見的話，也顯示屬靈經歷有其節制與界限。健康的追求深度禱告，應以認識神的性情、順服神的心意為核心，而非以經歷的強度或戲劇性作為衡量屬靈成熟的標準。
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
              '回顧你目前的禱告生活，比較接近溝通式、相交式、擘餅式，還是變相式？你渴望往哪一個方向成長？',
              '「除非你開始禱告，否則你學不會禱告」——你是否也曾因為「還沒找到方法」而遲遲不開始，反而錯過了在禱告中成長的機會？',
              '在教會中的「四種人」裡，你覺得自己目前更接近哪一種？是什麼讓你停留在目前這個層次？',
              '「你的價值不在於做了什麼,而在於成為什麼樣的人」——這句話對你目前忙碌的服事或工作節奏,帶來什麼樣的提醒或挑戰？',
              '對於「新婦式代禱者」的描繪，你認為這對所有基督徒都是同等的呼召，還是特定人的特殊呼召？為什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">🤫 操練「擘餅式」的安靜等候</h4>
              <p className="text-gray-700 mb-2">本週找一段至少15分鐘不被打斷的時間，不列代禱清單，單純安靜在神面前，練習「等候」而非「說話」，觀察自己的心是否能安靜下來。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 讓禱告貫穿整天</h4>
              <p className="text-gray-700 mb-2">
                嘗試一天中不定時、隨想隨向神說話，如同對一位隨時同在的朋友傾訴，觀察這樣的習慣是否讓你更意識到神無所不在。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 誠實自我省察</h4>
              <p className="text-gray-700 mb-2">
                誠實問自己：我最近的忙碌與成就感，是建立在「我做了什麼」還是「我成為什麼樣的人、與神有多親近」？記錄下你的反思。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，我不要滿足於遠遠地與你溝通，求你帶領我進入更深的相交,讓我渴慕認識你的心、你的道路、你的思念,勝過渴慕知道該做什麼。求你光照我裡面盛裝了多少你自己，也求你使我裡面盛裝更多。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
