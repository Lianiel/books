import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch13() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為國家公民的挑戰</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                作為各自國家的基督徒公民，我們所面對的挑戰同樣是打敗撒但。我們應當憑著信心，藉著基督的力量，在以下四個方面下定決心。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心一：在一切可能的時候傳播真理、傳揚福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但是謊言之父，他既是說謊者，也是謊言。上帝的本質是真理，撒但與上帝恰恰相反。聖父宣告真理（約1:18），聖子把真理顯明出來（約1:17；14:6），聖靈帶領我們認識真理（約17:17；16:13）。上帝是絕對的、無條件的真理；他絕不能說謊或不誠實（多1:2；來6:18）。正如《詩篇》111篇7至8節所說：「他手所行的，是誠實公平；他的訓詞都是確實的。是永永遠遠堅定的，是按誠實正直設立的。」誠實是上帝榮耀的屬性，所有的謊言都是罪，因為它們是與真理之上帝相抵觸的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝喜愛誠實。湯瑪斯·古德溫說：「對上帝來說，這個世界上只有三樣寶貴的東西——他的聖徒、他的敬拜和他的真理；很難說這三者當中哪一樣對他來說最寶貴。」定志毀滅撒但之國度、拓展基督之國度的人，是真理的傳播者。我們要決心做這樣的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傳播真理首先從密室裡私下禱告開始。請求上帝每天早晨為了那天的真理而賜給你力量，幫助你藉著在自己的一切言語和行為上宣講上帝的真理來使你忘記自己、牢記上帝。禱告祈求上帝為你開路，使你能夠為上帝宣講美好的話語，然後期待並抓住這樣的機會。迫使你自己不讓任何機會白白浪費，一定要為上帝說一些話。你這樣做得越多，就會發現傳播真理越來越容易。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                讓我舉兩個生動的例子。我是一家大教會的牧師，經常應邀去醫院探訪病人。當我乘電梯的時候，我經常利用這個機會與一起乘電梯的人交談。我用一兩句友好的評論打破那種典型的沉默，也許是關於天氣的話題。大多數時候，別人都會熱情地回應我的話。然後我問：「你的親戚或好友生病住院了嗎？」幾乎每次這樣問都會得到肯定的回答，然後他們開始談論自己來看望什麼人以及病情如何。如果我們在同一層樓下了電梯，談話通常會繼續下去。我曾經多次有機會為這樣的人禱告，而他們在幾分鐘前對我來說還是完全陌生的人。我經常繼續抓住這樣的宣講福音的機會，寄給他們一些改革宗的書籍。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我在飛機上也總是主動與人交談。我已經決心每當我獨自乘飛機時都這樣做。起初那對我來說是很艱難的工作，但隨著時間的流逝，我逐漸開始喜歡在飛機上向別人作見證。因為在飛機上彼此都是陌生人，所以人們幾乎總是願意坦率地談到自己的生活。大多數時候，他們都會接受我特意隨身攜帶的一些改革宗的書籍。在我們著陸之前，我提出願意寄給他們更多免費的書籍，大約一半人會接受我的好意並告訴我他們的地址。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                毫無疑問，很多這樣的努力都是沒有結果的，但誰能說得清呢？《傳道書》11章1節說：「當將你的糧食撒在水面，因為日久必能得著。」有一次在飛往紐約州的途中，我把一些書籍送給了一位女管家，她不是信徒。當我們即將著陸的時候，她問我是否可以寄給她一些講道的磁帶，因為她每天必須開車九十英里去上班。我寄給了她二十盤磁帶，幾個禮拜之後，她寄給了我一封信，表達了那些講道對她有多大影響，信裡面還有一張50美元的支票。不必說，我寄給了她更多磁帶。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                生命是短暫的，短得令人難以置信。讓真理使你承認自己的罪，使你在基督裡得自由，改變你，使你成為真理的傳播者。抓住一切時機，運用上帝給你的一切恩賜來傳播真理。利用私人談話、小冊子、錄音、雜誌、書籍、收音機和電子郵件來傳播真理。在你的家裡、教會中、主日學和鄰居當中傳播真理；在社會上、監獄裡、療養院和大街上傳播真理。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                南非開普敦有一個朋友獻身於全職的信心侍奉，向一切願意接受的人發送約翰·布蘭查德寫的《終極問題》。他最大的花費是每年要買好幾雙鞋子，因為他每天要在大街小巷中步行十到十二小時，鞋子很快就穿壞了。我有一位叔叔，已經八十多歲了，口袋裡總是裝著幾本講道的小冊子，無論走到哪裡，都總是嘗試與別人展開談話，目的是把小冊子送到別人的手中，以這樣的方式來傳播真理。有一次教會聚會時，我們聽到了警報聲；他消失了一會兒，回來時很興奮。「一大群人聚集在那邊圍著一個摩托車手，他撞上了一輛小汽車，翻到了草地上，不過沒有受傷，」他說。「但最好的事情是，」他展開他的西服上衣，讓我們看他空空的口袋，然後又接著說，「我能夠在一個地方把所有的講道稿都送出去了！」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們沒有得救，我們就會曲解真理，我們的生命就是在傳播謊言，因為我們屬於說謊者撒但。如果我們得救了，我們的生命必須越來越多地傳播真理，因為我們是屬於基督的，基督就是真理。不要為宣講基督而感到羞恥。世界不為自己虛假的作為而感到羞恥，基督徒為什麼要因向別人講述改變生命的真理而感到羞恥呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                布魯克斯說：「每一條真理都像金子一樣寶貴；我們必須靠真理而活，或者為真理而死。」約翰·赫斯的建議：「要尋求真理，聆聽真理，學習真理，愛慕真理，傳講真理，堅守真理，至死方休。」
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                「保守真理，真理就會保守你。」——威廉·布裡奇
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心二：把基督的愛給予窮人和有需要的人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒如果對社會需要閉目不看，充耳不聞，撒但的事業就會變得更加強大。雅各鄭重地警告我們，不關心有需要的人將會受到上帝的嚴厲審判：「若是弟兄或是姐妹，赤身露體，又缺了日用的飲食；你們中間有人對他們說：平平安安的去吧！願你們穿得暖，吃得飽；卻不給他們身體所需用的，這有什麼益處呢？這樣，信心若沒有行為就是死的」（雅2:15-17）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰·斯托特解釋說，基督徒對世界有兩種可能的態度：「逃避」（背對世界，棄絕非信徒）或「參與」（滿懷愛心地面向世界，不怕勞苦愁煩）。他總結說：「如果我們真的愛鄰舍，並渴望服侍他們，我們就會關心他們的全部福益——他們靈魂的狀況，身體的狀況和社群的狀況。我們的關心將會帶來實際的計畫。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                荷蘭改革宗的結婚儀式挑戰新婚的丈夫，要求他忠心地工作，誠實地供養家庭，「並有餘力周濟窮人」。我們投入時間和金錢來幫助窮人了嗎？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心三：大膽宣講關於聖經和道德的事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多基督徒避免參與政治，但政治腐化的一個重要原因，可能就是因為上帝的子民往往不再參與其中。上帝設立了國家政權來在社會中施行公義，建立秩序和正義，謀求公共利益（羅13:1-7）——這提供使福音、敬虔和誠實可以興盛的和睦環境（提前2:1-2）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒如何參與政治？作者提出四個原則：
              </p>
              <div className="space-y-2 ml-4">
                <p className="text-gray-700"><span className="font-semibold">（1）研讀聖經尋求帶領：</span>瞭解聖經對道德問題的觀點，並向家人、朋友、工作夥伴談論這些問題。</p>
                <p className="text-gray-700"><span className="font-semibold">（2）每天為國民政府禱告：</span>為那些在位掌權的禱告（提前2:1-2），為未得救之人歸正、基督徒被堅固而禱告。把自己包括在為國家而做的禱告中（參但以理書第9章）。</p>
                <p className="text-gray-700"><span className="font-semibold">（3）瞭解國民政府如何運作：</span>如果基督徒像鴕鳥一樣把頭埋在沙子裡，國家當然就會墮落得更快。但要注意：教會不應當是政治機構，教會的使命是把人帶到基督面前。</p>
                <p className="text-gray-700"><span className="font-semibold">（4）積極參政：</span>寫信給國家領導人，給報社編輯寫信，參加支援基督教道德觀的組織。如上帝呼召，競選公共職務；如上帝沒有呼召，支持那些持守聖經觀點的競選者。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                在地方性和全國性的選舉中，我們應當認真考慮把選票投給誰。正如美國最高法院的第一位首席法官約翰·傑伊於1816年所說：「上帝賜給民眾選擇治理者的權利……選舉和推薦基督徒擔任治理者是我們基督教國家的職責。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                基督徒應當在世界中發揮鹽和光的作用，而世界包括國家政府。派克寫道：「人越是深切地關注天堂，就應當越深切地關心上帝的旨意行在地上的情況。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 italic border-l-4 border-purple-200 pl-4">
                路德名言：「無論我多麼勇敢，用最洪亮的聲音，用最清晰的表述，宣告上帝所啟示的真理的每一部分，如果在那一時刻世界和撒但沒有攻擊我，我就不是在宣告基督。在激烈的戰場上，才能證明士兵的忠誠。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心四：為基督而活——全書的終結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在《以弗所書》4章27節說：「不可給魔鬼留地步。」不要給魔鬼留任何通路。要忙於自己當盡的愛的本分，就不會留時間給撒但。他是非法佔領者，在這個世界上沒有任何合法的權利。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《哥林多後書》2章16節問：「這事誰能當得起呢？」有很多年，作者以為那是個反問句，回答是「我肯定不能」。然而保羅在六節經文之後回答了：「並不是我們憑自己能承擔什麼事，我們所能承擔的，乃是出於上帝」（林後3:5）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                藉著基督的能力，我們可以為上帝的榮耀而活，過打敗撒但的得勝生活——不管是在個人生命中，在教會生活中，還是在國家生活中，都是如此。為你的救主而活，他用大能而恩慈的手支持著世界、國家、教會和你自己——包括最微小的細節。
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-gray-700 italic leading-relaxed">
                  「全能的上帝啊！願禰每日都向我們施恩，把你確定不移的旨意擺在我們的面前，不僅使我們可以耳聞目睹，思想你向我們啟示的真理，而且使我們心裡清清楚楚，大有確信，以便我們可以在真宗教的事業中繼續前進，無論撒但及其邪靈如何誘騙我們，我們都永不偏離，而是立場明確，堅忍不移，直到爭戰結束，使我們最終享受我們的主耶穌基督早已在天上為我們預備好的蒙福的安息。阿們。」
                </p>
                <p className="text-right text-gray-600 text-sm mt-2">——約翰·加爾文禱告</p>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">1</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">傳揚真理——電梯和飛機故事的實踐呼召：</span>在日常生活的普通場合——電梯、飛機、鄰居、同事——傳揚福音是信徒對抗撒但謊言王國最直接的方式。貝克博士分享他在電梯遇到陌生人的對話，以及在飛機上向陌生人傳講福音的故事，說明傳福音不需要特殊恩賜或神學訓練，只需要對神恩典的真實經歷和分享的意願。撒但透過社交恐懼、文化壓力和「不要強迫別人」的謊言壓制信徒的見證，信心的回應是突破這些障礙。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">愛憐窮人——斯托得（Stott）引言的社會責任：</span>約翰·斯托得（John Stott）說：「不愛窮人的福音主義者，缺乏聖經的完整性」。屬靈爭戰不只是個人靈性的爭戰，也是社會公義的爭戰——撒但透過貧困、不公義的結構、對弱勢者的冷漠來破壞人的尊嚴（imago Dei）。信徒參與扶貧、正義倡導、慈惠事工是屬靈爭戰的一部分，是在撒但管轄的世界系統中彰顯神國度的價值。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">在道德問題上發聲——四個政治神學原則：</span>信徒作為國家公民有責任在公共領域為道德真理發聲，但需要以清晰的神學原則為指導：（1）政府是神所設立的，目的是維持秩序和保護良善（Rom 13:1-7）；（2）信徒服從政府，但神的命令高於人的命令（Acts 5:29）；（3）信徒透過合法途徑（投票、公民討論、寫信、倡導）影響社會，不訴諸暴力；（4）在政治上保持謙遜，認識到政治行動有限，不能帶來屬靈復興——唯有福音和聖靈才能改變心靈。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">加爾文的終結禱告——全書最後的屬靈定錨：</span>加爾文以一篇充滿謙遜和信靠的禱告結束他的屬靈爭戰教導，這篇禱告是整本書的神學精神總結：承認自己完全無能，將爭戰交付給神，在基督的得勝中找到確信，以盼望基督再來作為一切掙扎的最終安慰。這禱告提醒我們：屬靈爭戰的開始是謙遜（承認我不能），中間是信靠（相信祂能），終結是盼望（等待祂必勝的那天）。爭戰是真實的，但爭戰的主是那得勝的主。</p>
          </div>
        </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「傳播真理」的日常神學——普通對話也是宣教</h4>
              <p className="text-gray-700 leading-relaxed">
                作者在電梯和飛機上傳福音的故事，體現了改革宗傳統中一個重要的宣教理念：「日常生活即宣教」（everyday evangelism）。這與一些人認為「福音傳講應當留給牧師」的觀念形成了對比。加爾文認為，每個基督徒都是在自己所在的「呼召」（vocation）中侍奉上帝的祭司。一個電梯裡的善意話語、一本送出去的書、一次真誠的傾聽，都可以是上帝拯救靈魂的管道。《傳道書》說「撒在水面的糧食」必能得著，意味著我們不必計算投資回報率，只需忠心地撒種，把收成交給上帝。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒的社會責任——不是「社會福音」，而是「道成肉身的愛」</h4>
              <p className="text-gray-700 leading-relaxed">
                本章關於關心窮人的呼召，需要與二十世紀初「社會福音」（social gospel）的錯誤區分開來。「社會福音」以社會改革取代個人救恩，最終失去了基督信仰的核心。但這並不意味著基督徒應當只關心靈魂救恩而不關心社會需要。約翰·斯托特的「整全宣教」（holistic mission）強調：真正的愛心關懷整個人——靈魂和身體，個人救恩和社會公義。基督「道成肉身」的模式啟示我們：上帝關心的真實是道成的肉身，而不只是抽象的靈魂。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒與政治——「屬天的公民身份」與「屬地的公民責任」</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對基督徒政治參與的立場，體現了改革宗「文化使命」（cultural mandate）的神學。加爾文的日內瓦不只是一個教會社區，也是一個試圖在城市生活各方面體現上帝主權的實驗。但這與「基督教神權政治」（theocracy）不同——教會和國家各有其功能，教會不應成為政治機構，但基督徒個人可以也應當以鹽和光的方式影響政治。保羅本人使用他的羅馬公民身份反對不公（徒16:35-39），展示了利用合法的公民權利來追求公義的榜樣。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全書總結：「為基督而活」——屬靈爭戰的最終目的</h4>
              <p className="text-gray-700 leading-relaxed">
                本書從第一章講到了屬靈爭戰的激烈性、必要性，歷述撒但的歷史、策略和詭計，討論了防禦和進攻的武器，最後以「為基督而活」作為全書的頂點。這個結構本身就是一個神學宣言：屬靈爭戰不是目的，基督才是目的。我們認識撒但的策略，不是為了迷戀屬靈爭戰，而是為了更加自由地愛基督、服侍基督。加爾文的那篇禱告以「我們最終享受……蒙福的安息」結尾，提醒我們：戰爭終將結束，安息必然來臨。在那安息中，再也沒有撒但，只有與基督永恆的相交。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">作者在電梯和飛機上主動傳福音——這對你來說感覺如何？你有沒有類似的「日常傳福音」的機會？是什麼使你猶豫或鼓起勇氣？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「關心窮人和有需要的人」——你目前在這方面的實踐如何？你認為你最應當改進的是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你對基督徒參與政治的態度是什麼？你認為你所在的文化背景下，基督徒的政治參與最大的危險是什麼（過度政治化？還是完全退出？）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">本章說「生命是短暫的，短得令人難以置信」。這個現實如何影響你今天的優先順序和選擇？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">讀完這整本書，你對撒但的認識有哪些最重要的改變或加深？這些認識如何具體地改變了你的屬靈生活？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">加爾文以禱告結束這本書的思想——「使我們最終享受……蒙福的安息」。天堂的盼望如何幫助你在今生的屬靈爭戰中持守？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📢 開始一個「福音傳播習慣」</h4>
              <p className="text-gray-700 mb-2">「撒種在水面」——選擇一個你可以持之以恆的傳福音方式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>準備一兩本適合送給非信徒的福音書籍或小冊子，隨身攜帶</li>
                <li>決定每週至少主動與一個非信徒深入交談，詢問他們的生命和信仰</li>
                <li>禱告列出三個你要特別為之傳福音的人，每天為他們禱告</li>
                <li>如果對方表示有興趣，邀請他們參加主日敬拜或讀書小組</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 尋找一個具體服侍窮人的機會</h4>
              <p className="text-gray-700 mb-2">「言語和行為上都關心有需要的鄰舍」——本週採取一個具體行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>詢問你的教會是否有關懷弱勢的事工，如果有，考慮參與一次</li>
                <li>查看你居住的社區是否有需要幫助的家庭或個人</li>
                <li>重新審視你的消費和奉獻習慣：你有沒有「有餘力周濟窮人」？</li>
                <li>記住：不只是金錢，時間和陪伴有時更寶貴</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 讀完整本書後的整合反思</h4>
              <p className="text-gray-700 mb-2">花一個小時做讀書後的整合反思：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回顧全書13章：哪一章對你的影響最深？為什麼？</li>
                <li>在你的屬靈爭戰中，最需要加強哪一種武器（聖道、禱告、信心、謙卑……）？</li>
                <li>寫下你讀完這本書後想要改變的三件具體的事</li>
                <li>把這三件事帶入禱告，邀請上帝在其中做工</li>
                <li>考慮把這本書分享給一位正在屬靈爭戰中的弟兄姊妹</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 全書結束禱告——以加爾文的禱告為藍本</h4>
              <p className="text-gray-700 italic leading-relaxed">
                全能的上帝啊，感謝你讓我有機會認識撒但的詭計，更深地認識你的得勝。願你每日向我施恩，使你確定不移的旨意成為我生命的定向。無論撒但及其邪靈如何誘騙，使我永不偏離，而是立場明確，堅忍不移，直到爭戰結束。使我在個人生命中、在教會中、在國家中都能為你的榮耀而活，傳播你的真理，直到我最終享受你早已在天上為我預備好的蒙福的安息。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
