import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book31Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    {
      num: 1, title: '進化論是對是錯',
      sections: ['化石證明生命不是來自進化', '基因證明物競天擇是錯的', '生物學證明物種沒有進化', '數學證明進化概率不可能', '邏輯證明進化論自相矛盾', '進化論無法解釋的現象太多', '現今實例證明進化論是錯的', '聖經曾提到恐龍存在的證據', '物理證明進化論違反自然', '宇宙必有一位創造者'],
    },
    {
      num: 2, title: '地球到底有幾歲',
      sections: ['碳14測量法為什麼錯了', '碳14改良測定法', '岩石測量法的錯誤', '宇宙塵的證據', '地球磁場的記錄', '其他在地球上的實驗', '鐘乳石的故事', '塞特西島的證據', '這是一個年輕的地球'],
    },
    {
      num: 3, title: '宇宙論問題所在',
      sections: ['宇宙大爆炸學說的錯誤', '宇宙年齡比想像的年輕', '哈伯常數大有問題', '光年計算法原理的錯誤', '太陽系本身證明宇宙非源自爆炸', '彗星證明太陽系不超過一萬年', '太陽正在縮小', '月球正在遠離', '獵戶星雲四個星球的實例', '巨無霸超能量星球的實例', '宇宙論無法解釋的現象', '神必然統管這浩瀚宇宙'],
    },
    {
      num: 4, title: '起初　神創造天地',
      sections: ['七日大神蹟', '第一日的創造', '神說要有光就有了光', '神第二日分開水與空氣', '神第三日造地生植物', '神第四日造日月星辰', '神第五日造魚和鳥', '神第六日造動物及人類', '神第七日安息', '可愛的地球', '伊甸園', '故鄉頌'],
    },
    {
      num: 5, title: '伊甸失落在哪裏',
      sections: ['人類原可永生', '撒但引誘人類犯罪', '罪敗壞所有受造物', '人體血液的實例', '罪所產生的後果', '分別善惡樹上的果子', '神宣告審判與救贖', '人類開始自相殘殺', '罪惡充滿全地', '惟義人因信得生'],
    },
    {
      num: 6, title: '大洪水審判真相',
      sections: ['全球都被大洪水淹沒', '鐵證如山為何不信', '恐龍何以滅亡', '大洪水才是恐龍滅亡的主因', '彗星或隕石會擊打地球嗎', '這個假設並沒有違背聖經', '確實曾有彗星或隕石擊打地球', '大洪水所造成的副作用', '起初是一整塊陸地', '大洪水促成今天地球的外貌', '火山和地震產生', '大洪水造成奇特的天然景觀', '大峽谷的實例', '可愛島峽谷的例子', '南非布萊德河峽谷的例子', '神話語的警告'],
    },
    {
      num: 7, title: '探尋挪亞的方舟',
      sections: ['全世界有關方舟的傳說', '中華民族洪水方舟的傳說', '方舟停在亞拉臘山上', '目睹方舟的歷史記錄', '更清楚的方舟描述', '方舟的結構和尺寸', '方舟的體積與容量', '方舟建造了多少年', '大洪水發生的年代', '挪亞方舟在大洪水中的經歷', '遠方的動物如何前來', '方舟內和平相處', '大洪水來臨的前夕'],
    },
    {
      num: 8, title: '地球大環境改變',
      sections: ['聖經裏的明證', '地球的氣候改變', '水氣層消失的後果', '冰河時期的開始', '南極和北極的奧秘', '冰河時期有多久', '長毛象的千年之謎', '幾個可能的理論', '神全能的主權從未改變', '複製長毛象不能解決問題', '中國遼寧省「有羽恐龍」解謎', '恐龍仍是恐龍而鳥仍是鳥', '何以有些動物在洪水後絕跡', '恐龍體積與年齡的關係', '並不是冷血或是溫血的問題', '第二個臭氧層破洞', '大地的森林在萎縮', '二十世紀暴風的災害', '聖經中清楚的警告', '信　神的人無所畏懼'],
    },
    {
      num: 9, title: '人類制度的建立',
      sections: ['神吩咐人類的命令', '流人血的必被報應', '大洪水以前的社會狀態', '人犯罪使獸的性情改變', '神允許政府制度的原因', '執政者用人的建議', '以　神為主的那國是有福的', '神的恩典大過制度', '神是制度最高的主宰'],
    },
    {
      num: 10, title: '各民族遷徙全地',
      sections: ['人類三大種族起源', '各種因素影響人的外表特徵', '閃族後裔最初分佈區域', '含族後裔最初分佈區域', '雅弗族後裔最初分佈區域', '挪亞對三大種族的預言', '神變亂各民族口音', '閃族後裔遷徙全地概況', '含族後裔遷徙全地概況', '雅弗族後裔遷徙全地概況', '挪亞後裔近代遍滿世界', '和樂歌'],
    },
    {
      num: 11, title: '神的救贖計劃',
      sections: ['有一奇妙嬰孩誕生', '神恩典臨到願意接受的人', '所有預言必會應驗', '撒但最後必定會失敗', '接受主耶穌是唯一的道路'],
    },
    {
      num: 12, title: '主耶穌再回來',
      sections: ['將來必定會有審判', '啟示錄與創世記對比', '主耶穌回來前的預兆', '更大的災難將會發生', '沒人知道那日子時辰', '今天接受主不要再遲疑'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          創世以來的奧秘
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">THE MYSTERIES SINCE CREATION</h2>
        <p className="text-gray-500 text-sm mb-4">21世紀現代人須知</p>
        <div className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl px-6 py-3">
          <p className="text-teal-800 font-semibold">孫大程　著</p>
          <p className="text-teal-600 text-sm">Christopher Sun Evangelistic Association</p>
          <p className="text-gray-500 text-xs mt-1">2000年初版・2002年重訂版・2012年更新版</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <h3 className="font-bold text-teal-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          自從有天地以來，到底曾發生了什麼重要的事情？進化論是對是錯？地球到底有幾歲？宇宙論的問題在哪裏？天地的由來到底是怎麼回事？伊甸失落在哪裏？什麼是大洪水審判的真相？如何尋探挪亞的方舟？地球大環境經過什麼變改？人類制度是怎樣建立的？各民族如何遍徙全地？什麼是　神的救贖計劃？將來世界還會有什麼大事發生？
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書作者為你詳細研究考察並以最新的資料旁證。本書有系統地探討人類科學、天文、地理、人文、社會、歷史、神學等奧秘。書中含105幅精彩珍貴的圖片及照片，並有各式圖表幫助你瞭解宇宙的奧秘及人生命的意義。
        </p>
        <div className="bg-white rounded-lg p-3 border border-teal-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-teal-700">作者簡介：</span>孫大程，加州大學柏克萊分校 U.C. Berkeley 建築碩士，富勒神學院 Fuller 神學系碩士，加州神學院研究所 C.G.S.T. 哲學博士。加州建築師。1984年成立佈道大會，1991年被授立為牧師，全職在世界各國舉辦佈道大會，歸榮耀與主。
          </p>
        </div>
      </div>

      {/* 前言 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">前言</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">
              近年許多人對二十一世紀的未來充滿好奇，於是世界上充滿各式各樣不同的學說。從表面看來，各種說法都似乎差不多，乃至於許多人反而無法分辨真假。但是真理仍然是真理，只有真理才能經過時間的考驗，也只有真理才能在歷史中永遠存留。
            </p>
            <p className="text-gray-700 leading-relaxed">
              當我看見許多高樓大廈在強烈地震中倒塌，心中難過。這些不幸蒙難的住戶怎能知道自己所居住的建築物結構上無法承受強震呢？從表面看來，自己所住的建築物好像和鄰棟差不多，但是當大地震襲擊的時候自己卻無辜受害。一個人抱持著某種思想或信仰也好像如此，平常看不出和別人有什麼差別，但總有一天會真相大白，遺憾的是到那時候往往已經太遲了。
            </p>
            <p className="text-gray-700 leading-relaxed">
              兄弟寫本書的目的就是在辨明真理，因為察明事實，只會使真理更加顯明。為了追尋真理，是就說是，不是就說不是。真理是不能被人所改變的，真理也必然是絕對的。良知與責任使我一直選擇真理，為了真理我就必須說誠實話。
            </p>
            <p className="text-gray-700 leading-relaxed">
              創世以來的奧秘非常多，一切的奧秘開始於起初　神創造天地。既然是奧秘，為了避免讀友不易瞭解，所以用詞盡量簡化，文中特意刪去不常使用的專有名詞，使本書不僅是一本容易閱讀的書，也可以算是一本研究參考書。
            </p>
            <p className="text-gray-700 leading-relaxed">
              書中結構主要是以聖經「創世記」第一章至第十一章為引導，進而討論整本聖經包括「啟示錄」及其他許多卷書的內容。為了有系統的探討人類科學、天文、地理、人文、社會、歷史、神學等奧秘，特別按照次序分為十二個主題。書中另一個特色在於「註釋」的部分，每章精選五則註釋，以便讀友閱讀。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本書原是以兄弟所寫的「創造論對進化論」為骨幹，後來全部重新撰寫，在主恩典下，是佈道大會出版部門傳播福音所結的果子。原書於1983年出版時只有92頁，現在內文增加為288頁；原書只有16幅圖片，現在增加為105幅；原書只有七章，現在增加為十二章。
            </p>
            <div className="text-right text-gray-500 text-sm italic mt-2">
              <p>耶穌基督的僕人，孫大程</p>
              <p>於洛杉磯，主曆2000年初版・2002年重訂版・2012年更新版</p>
            </div>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white space-y-4">
            {chapters.map((ch) => (
              <div key={ch.num} className="border-l-4 border-teal-400 pl-4">
                <h3 className="font-bold text-teal-800 mb-2">
                  第{['一','二','三','四','五','六','七','八','九','十','十一','十二'][ch.num - 1]}章　{ch.title}
                </h3>
                <ul className="space-y-1">
                  {ch.sections.map((sec, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-teal-400 flex-shrink-0 mt-0.5">‧</span>
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-l-4 border-gray-300 pl-4 mt-2">
              <h3 className="font-semibold text-gray-600">註釋（第一章至第十二章）</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
