import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">倫理三大觀點應用實例</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「所以，你們或吃或喝，無論作甚麼，都要為榮耀神而行。」（林前10:31）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              上一章我們學習了基督教倫理學的三個觀點：「準則、處境及動機」。本章我們要實際應用這三個觀點，來面對六個常見的生活難題：吃祭偶像之物、抽煙、喝酒、為未信者舉行安葬禮拜、與未信者在教會舉行婚禮，以及吃血。透過這六個實例，我們可以學習如何把這套分析架構應用在自己的生活抉擇上。
            </p>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例一〉有關「吃祭偶像之物」的問題</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、知識原則</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）偶像算不得什麼，祭偶像之物並非有什麼權勢能害我們：保羅說：「論到吃祭偶像之物，我們知道偶像在世上算不得甚麼；也知道神只有一位，再沒有別的神——我們只有一位神，就是父，萬物都本於祂，我們也歸於祂；並有一位主，就是耶穌基督，萬物都是藉著祂有的，我們也是藉著祂有的」（林前8:4-8）。今天，有些基督徒主張不可以吃拜過偶像之物，否則會被黑暗權勢捆綁。甚至有人主張，因為我們每天在外面用餐都可能吃到「拜過的食物」，所以，應當每天都要為自己「趕鬼」。然而，基督徒不需要活在這樣的懼怕中而失去自由，要知道：「在我們裡面的，比在這世界的更大」，「偶像在世上算不得甚麼」！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （二）萬物屬乎主，祭拜過的食物仍是屬主的，不是屬偶像的：保羅說：「凡市上所賣的，你們只管吃，不要為良心的緣故問甚麼話，因為地和其中所充滿的都屬乎主」（林前10:25-26）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （三）要遠避拜偶像的事，不可參加任何與鬼相交的儀式：保羅說：「我所親愛的弟兄阿！你們要逃避拜偶像的事」（林前10:14）；又說：「我是怎麼說呢？豈是說祭偶像之物算得什麼呢？或說偶像算得什麼呢？」（林前10:19）。當我們讀這節經文時，心中不免有困惑，因為第八章第4節保羅不是說過：「我們知道偶像在世上算不得什麼嗎？」為何保羅似乎否認自己說過的話呢？我們必須繼續讀下去，第十章20-21節保羅說：「我乃是說，外邦人所獻的祭是祭鬼，不是祭神。我不願意你們與鬼相交。你們不能喝主的杯又喝鬼的杯，不能吃主的筵席又吃鬼的筵席」。因此，我們看見，保羅在這裡強調的是，禁止信徒參與偶像的祭典崇拜與筵席。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">二、自由原則</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第十章25節及27節，保羅鼓勵信徒：「不必拘束、只管吃、不要受良心控告，因為神的國不在乎吃喝」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">三、愛心原則</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅說：「所以，食物若叫我弟兄跌倒，我就永遠不吃肉，免得叫我弟兄跌倒了」（林前8:13）。保羅雖說，偶像本沒有能力，不能玷污神所造的肉，因此，只要知道自己吃肉時是領受神賜的食物，而不是在參與偶像崇拜，那麼吃肉就不是犯罪。然而，有些初信者不明白這道理，以為「吃肉」就是「拜偶像」，看到教會裡面資深基督徒都在吃肉，就以為這代表「基督徒可以拜偶像」，因此，帶著拜偶像的心態吃肉，那麼軟弱的弟兄就跌倒了。我們必須在愛裡面顧及這些弟兄的軟弱，而放棄我們的自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">四、造就原則</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一切都要為著使人得益處而吃。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅在哥林多前書第八至十章很注重以各種「處境」，來面對有關吃祭物的問題：
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、市上賣的</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅說：「凡市上所賣的，你們只管吃，不要為良心的緣故問甚麼話；因為地和其中所充滿的，都屬乎主」（林前10:25-26）。保羅教導信徒，在市上賣的，只管吃，不必問有沒有拜過，因它們是「食物」而不是「祭物」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">二、家裡的筵席</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅說：「倘有一個不信的人請你們赴席，你們若願意去，凡擺在你們面前的，只管吃，不要為良心的緣故問甚麼話」（林前10:27）。在家裡吃的筵席，和市上賣的一樣，只管吃，因為它們是「食物」而不是「祭物」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  今天有許多教會教導剛信主的信徒，回到家要立刻拒絕吃拜拜的食物。筆者尊重每個教會的作法，但我個人認為，因家人未信主，所以雖然在家裡吃飯的食物，有可能是祭拜過的，但對家人而言，它們是「食物」而不是「祭物」，信徒可以儘管吃。若教會教導信徒必須拒絕吃拜過的食物，那麼也要留意教導信徒用委婉的態度，與家人有好的溝通，取得家人的諒解，免得讓家人反感，造成更大的衝突。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    我們曾經試圖傳福音給一位女士，她雖然很願意聽福音，但是對於信耶穌卻一直裹足不前，因為她的家族非常反對基督教，對基督教非常反感！為什麼呢？她提到，她的堂哥是家族第一個信耶穌的。堂哥剛信耶穌時，適逢過年，教會教導他不能吃拜過的食物。因此，除夕圍爐時，當所有家人都坐上桌時，堂哥堅持不上桌、不吃拜過的食物，表明要在書房吃泡麵。他的父親非常生氣，堅持他必須上桌，全家才要吃飯，但這位堂哥也非常堅持不上桌。後來，父親氣到把整桌年夜飯翻掉！從此，整個家族對基督教非常反感！
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">三、有軟弱的弟兄在座時</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅說：「若有人對你們說：『這是獻過祭的物』，就要為那告訴你們的人，並為良心的緣故不吃」（林前10:28）。有人根據這節經文教導，只要知道是拜過的食物就不可以吃，這是錯解這節經文的意思。這節經文中的「有人」是指誰呢？八章7節保羅說：「但人不都有這等知識。有人到如今因拜慣了偶像，就以為所吃的是祭偶像之物。他們的良心既然軟弱，也就污穢了」；第13節保羅又說：「所以，食物若叫我弟兄跌倒，我就永遠不吃肉，免得叫我弟兄跌倒了」。可見，這裡的「有人」是指剛信主，曾經拜過偶像的軟弱肢體說的。因此，若有軟弱的弟兄在座，我們應為了他們，犧牲自己的自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">四、在廟裡</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  十章20節保羅教導信徒：「你們不能喝主的杯，又喝鬼的杯，不能吃主的筵席，又吃鬼的筵席」，基督徒必須避免參加宗廟慶典及筵席。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅在林前十章23節及31-33節已告訴我們，一切的動機都要為了「榮神益人」。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例二〉有關「基督徒可否抽煙？」的問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                今天常常會有人說：「為何不可以抽煙？聖經又沒有說不可以抽煙。」關於聖經沒有說不可以做的事，我們就必須用「基督教倫理學的三個觀點」來衡量：
              </p>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">一、知識原則</span> 聖經說：「身體是聖靈的殿」，所有人都知道，抽煙對身體只有百害而無一益，抽煙對身體的危害甚大，因此，基督徒當然必須遠離香煙。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、自由原則</span> 抽煙不但危害身體，而且會使人上癮，使人被轄制，違反自由原則。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、見證原則</span> 有人認為抽煙不是什麼大錯，只是「吃喝」的問題。我常常問一些基督徒：「你認為一個基督徒抽煙比較不討神喜悅，還是有壞脾氣比較不討神喜悅？」筆者也認為，我們不應把有煙癮的弟兄姐妹看為大罪人。然而，抽煙的基督徒讓人對基督徒有不好的看法，會失去基督徒的見證，這也是不容我們忽視的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、造就原則</span> 眾所周知，抽煙不但對自己身體不好、讓別人抽二手煙也非常不好，是損人損己的事。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-3">基於以上的準則來衡量，抽煙是基督徒不論在任何處境下都應避免的事。</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  抽煙雖然不是犯罪，只能說是一個軟弱，但為了要「榮神益人」，有煙癮的弟兄姐妹，當靠著聖靈的大能及眾人的代禱，戒掉抽煙的壞習慣，這絕對是榮神、益人、益己的好事！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例三〉有關「基督徒可不可以喝酒」的問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                就著對身體的健康而言，抽煙只有百害而不一益，但少量的飲酒對身體沒有害處，甚至可能有好處。因此，有關喝酒的問題就不像抽煙的問題這麼容易回答。有些教會教導基督徒必須「滴酒不沾」才符合聖徒的體統，這樣的教導應是過了聖經的教訓。但也有些教會完全沒有限制信徒飲酒，因為他們認為聖經中的聖徒們會飲酒，耶穌也飲酒，甚至耶穌還使水變為酒。然而，若不限制飲酒，也會造成很大的害處。因此，有關飲酒的問題，更是需要從基督教倫理學的三大觀點來面對：
              </p>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、知識原則</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）不能醉酒：保羅勸勉信徒：「不要醉酒，酒能使人放蕩，乃要被聖靈充滿」（弗5:18）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （二）酒很危險：箴言廿三章31-35節說：「酒發紅，在杯中閃爍，你不可觀看，雖然下咽舒暢，終久是咬你如蛇，刺你如毒蛇。你眼必看見異怪的事；你心必發出乖謬的話。你必像躺在海中，或像臥在桅杆上。你必說：人打我，我卻未受傷；人鞭打我，我竟不覺得」。古人說：「酒是穿腸毒藥」，貪杯之人往往酒後亂性、釀成大禍！因此，聖經雖未禁止飲酒，卻警告我們酒的危險性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、自由原則</span> 適度的飲酒雖然對身體並無害處，但酒和煙一樣，很容易使人落入被捆綁和轄制之中，因此，必須非常小心！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、見證原則</span> 要注意飲酒是否會絆倒人？酒後亂性更是失去基督徒美好的見證。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、造就原則</span> 適度的飲酒對身體並無害處，在節慶活動中適度的飲酒也可能讓關係更拉近。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-3">有關飲酒的問題較複雜，因而也會因不同的處境而異：</p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、平時居家</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若為了身體的益處（例：女性飲紅酒對身體很有益處），不應禁止。但應適度，不能落入捆綁中。而且每個人應衡量自己的情況，有些人一點點的酒精就會醉酒，這樣，不但對身體沒有益處，甚至會因而酒後失態。若自己曾經被酒癮捆綁，則應選擇滴酒不沾，免得落入試探。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">二、與不節制的人在一起時</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督徒在飲酒上雖是自由的，但若與飲酒不節制的人在一起，為了避免醉酒，應選擇滴酒不沾。有些地方的人們飲酒不節制，甚至喜歡「勸酒」或「逼酒」，當我們在這樣的場合中應避免喝酒。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">三、與軟弱的弟兄在一起時</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若有對飲酒反感或曾經被酒癮捆綁的弟兄姐妹在場時，我們應為了他們軟弱的緣故，放棄自己的自由，選擇滴酒不沾。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">四、在特殊節期或場合</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  許多地區，人們會在特殊節期或三五好友相聚時，小酌一番，若大家都是能節制的人，也沒有軟弱的問題，適可而止的飲酒歡樂，不傷大雅，不應禁止。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  是否「榮神益人」是基督徒行事為人最重要的原則，因此，不管飲酒或不飲酒，都是為了「榮神益人」，應當彼此尊重和接納。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例四〉信主姊妹的未信主父親過世，可否舉行安葬禮拜？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                問：「某信主姊妹，其不信主的父親過世了，可否為其舉行安葬禮拜？」
              </p>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">一、知識原則</span> 有些教會反對為未信主的人舉行安葬禮拜，認為他們不是屬神的人，這樣做違反真理。然而，筆者認為，「安葬禮拜」最主要的意義是追念故人及安慰活著的親人，我們可以以不違背真理的方式為他們舉行。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、自由原則</span> 基督教的信仰是一種生活和生命的見證，我們不打宗教戰爭，我們基督徒雖然有所為、有所不為，但我們努力活出在基督裡的自由，我們不會因為信仰而拒絕有需要的人，我們願意靠近傷心的人，服事他們！筆者教會的弟兄姐妹會爭取任何可以服事喪家的機會，若無法為他們舉行安葬禮拜，我們會爭取為他們舉行「家庭追思會」（我們甚至不忌諱用未信者看重的頭七的日子舉行），讓他們一起追念故人。甚至雖然他們用佛教的儀式舉行告別式，我們也會爭取在告別式中獻詩追念。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、見證原則（愛心原則）</span> 在家人最傷心難過時，教會願意伸出援手，關心這個家庭，為他們處理後事，這是最好見證基督徒愛心的時刻！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、造就原則</span> 在預備及進行安葬禮拜過程中，我們可以引導家人思念故人、彼此相愛、相惜，讓家人感受到基督教會葬禮何等有意義，進而願意相信福音。筆者的教會最能讓慕道友羨慕教會生活，進而相信福音的聚會不一定是主日崇拜，而是「洗禮、婚禮及喪禮」，這都是展現基督徒美好價值觀的時刻！
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  為未信者舉行安葬禮拜既不違反真理，因此，只要親人同意，我們應竭力爭取以基督教的方式舉行安葬禮拜，讓神的愛和福音進入這個家庭。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會為他們舉辦安葬禮拜全然是義務幫助，不為任何利益，一切的目的都是為了「榮神益人」。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例五〉信主女方與未信主男方，可否在教會舉行婚禮？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                問：「一對男女，女的信主，男的未信主，可否在教會為其舉行婚禮？」這個問題比起上一個問題比較複雜一些：
              </p>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">一、知識原則</span> 前面我們提到，為未信者舉行安葬禮拜並沒有違反真理，但若教會會友與未信者結婚，在教會中舉行婚禮，可能是違反真理的。安葬禮拜可以是為活著的親友舉行的，但婚禮則是為結婚的新人舉行的。教會的教導是「信與不信不能同負一軛」，我們教導弟兄姐妹一定要婚娶在主裡面的人，若交往時對方未信主，也一定要等到他信主後再結婚，否則兩個不同人生觀和價值觀的結合，婚後一定會很痛苦（有關這個主題等到我們講第七誡時再詳細討論）。因此，若我們在教會中為他們舉行婚禮，等於認同他們違反「信與不信不能同負一軛」原則的行為。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、自由原則</span> 基督徒雖是自由的，但若違反真理我們一定不自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、見證原則（愛心原則）</span> 許多教會為了愛心的緣故，贊同為不同信仰的人舉行婚禮。然而，我們雖然反對為他們在教會中舉行婚禮，我們有可能也展現我們對他們的愛心嗎？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、造就原則</span> 拒絕為他們在教會中舉行婚禮，可能讓他們不開心，但婚姻非常重要，我們選擇造就教會的弟兄姐妹，讓他們持守婚姻的原則。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們主張不在教會為會友與未信者舉行婚禮，既然是為了真理的緣故，就沒有處境的問題，但我們仍然可以再努力一下，例如，若某姐妹正交往未信主的男友，我們可以努力傳福音給他，鼓勵姐妹帶領他信主再結婚。若男友仍然不信，他們仍然執意要結婚，我們雖無法在教會中為他們舉行婚禮，我們仍然可以更有智慧的來展現我們的愛心，例如，小組仍然可以去喜宴的飯店為他們祝福等。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們當竭力地在榮耀神和造就人當中，有智慧來面對，堅持真理卻仍然展現愛心，是我們基督徒很大的考驗。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈例六〉有關「基督徒可否吃血？」的問題</h3>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第一個觀點——準則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">一、知識原則</span> 關於聖經是否禁止吃血，有兩種看法：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （1）基督徒不能吃血——這一派的人主張，從舊約到新約都禁止吃血，因此，基督徒不應吃血。他們主張，新約時代雖然有些舊約的律法我們已不用遵守，但禁止吃血的律法仍在，因為新約使徒們說：「只要寫信，吩咐他們禁戒偶像的污穢和姦淫，並勒死的牲畜和血。因為從古以來，摩西的書在各城有人傳講，每逢安息日，在會堂裡誦讀」（徒15:20-21）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （2）新約時代的基督徒可以吃血——這一派的人認為，舊約不能吃血的規定，是一種預表，而基督已為我們成就了救恩，我們不再守這些預表性的律法。至於使徒行傳十五章第20-21禁止吃血的原因是「因為從古以來，摩西的書在各城有人傳講，每逢安息日，在會堂裡誦讀」，由此可知，使徒禁止吃血的規定是為了「猶太人的軟弱」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、自由原則</span> 我們不應再受舊約吃喝的限制，要活出在基督裡的自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、見證原則（愛心原則）</span> 我們吃血是否會絆倒弟兄？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、造就原則</span> 有人主張不吃血是為了健康的原因，因為血裡面有細菌。但也有人認為吃血對身體無害處，甚至有益處。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第二個觀點——處境</h4>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、在認為可以吃血的族群中</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">筆者認為吃血並沒有違反真理，因此，在認為可以吃血的族群中，我們不應反對他們吃血。</p>
                <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">二、在認為不可以吃血的族群中</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">雖然我們是自由的，但為了他們軟弱的緣故，我們就不吃血。</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">基督教倫理學的第三個觀點——動機</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  吃血的人不是因為愛吃血，不吃血的人也不是因為不愛吃血，大家都要為了榮神益人，彼此接納。
                </p>
              </div>
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
                '吃祭偶像之物：偶像算不得什麼，市場買的、家裡的筵席都可以吃，因為那是「食物」而非「祭物」；唯獨要避免參與偶像祭典本身的筵席，並在有軟弱弟兄同席時願意為愛心放棄自由——傳福音給家人時也要用委婉的態度溝通，避免像堂哥除夕不上桌那樣，因堅持形式反倒毀了福音的門。',
                '抽煙對身體有百害無一益、使人上癮受轄制，是唯一在任何處境下都應避免的項目；喝酒則因聖經未明文禁止且有適度益處，需按「平時居家／與不節制者同席／與軟弱弟兄同席／特殊節期」四種處境分別判斷，核心原則是不能醉酒、不可被捆綁轄制。',
                '為未信主親人舉行安葬禮拜並不違反真理，教會應竭力爭取以基督教方式服事喪家（甚至用「家庭追思會」變通），因為喪禮往往是最能讓慕道友看見基督徒美好價值觀、進而信主的時刻。',
                '在教會為信與不信的一方舉行婚禮則涉及「信與不信不可同負一軛」的真理原則，不宜貿然舉行；但拒絕舉行婚禮不等於拒絕展現愛心，教會仍可用智慧的方式（如小組赴喜宴祝福）表達關懷，在堅持真理與展現愛心之間求取平衡。',
                '吃血的問題聖經中存在兩種合理解讀（禁止吃血／使徒禁令僅為顧及猶太人軟弱），作者採取處境判斷：在認為可以吃血的族群中不必反對，在認為不可以吃血的族群中則為軟弱者的緣故不吃，彼此接納而非彼此論斷。',
                '六個實例反覆印證：準則提供聖經真理的邊界、處境決定具體場合下的智慧選擇、動機則以「榮神益人」貫穿始終——三者缺一不可，才是完整成熟的基督教倫理判斷，而非只套用單一經文或單一立場一刀切地回答。',
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
              <h4 className="font-semibold text-gray-800 mb-2">除夕圍爐翻桌事件，對教會牧養新信徒有何深刻提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個真實案例顯示，教會若只教導信徒「不可吃拜過的食物」這個「形式」規條，卻沒有同時教導「如何智慧地與家人溝通」，反而可能造成家庭破口、讓整個家族對福音關上大門。這提醒教會在教導任何生活規範時，都應同步裝備信徒處理人際關係與見證的智慧，而非只給一條規則就了事。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「堅持真理卻仍展現愛心」在跨信仰婚禮案例中如何具體落實？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者拒絕在教會為信與不信的一方舉行婚禮，卻仍主張小組可以去喜宴飯店祝福新人。這種「守住教會立場的界線，卻不切斷與當事人的關係」的做法，值得應用在其他類似的張力情境中——教會的立場清楚不代表要與當事人斷絕來往，反而更需要用智慧持續保持關係、持續傳福音的機會。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">吃血案例中「兩種合理解讀並存」，對教會處理有爭議的倫理議題有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者誠實承認聖經對吃血的教導存在兩種合理的解經立場，並未強行選邊，而是回到「處境」與「動機」來決定如何應對。這提醒教會領袖，面對真正存在解經爭議的議題時，誠實承認不確定性、教導信徒彼此尊重接納，可能比堅持單一立場、要求所有人一致更符合保羅在羅馬書十四章的教導。
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
              '回想你自己面對「吃拜過的食物」這類問題時的做法，是偏向嚴格拒絕，還是自由接受？讀完本章後，你會如何調整？',
              '你身邊是否有弟兄姐妹正被抽煙或飲酒過量的習慣捆綁？「見證原則」與「造就原則」如何幫助你用愛心而非論斷去陪伴他們？',
              '若你的教會遇到「未信主親人過世」的情況，你觀察教會目前的做法，是傾向拒絕介入，還是像作者一樣竭力爭取服事的機會？',
              '「信與不信不能同負一軛」這個原則，你如何理解它背後的道理？若朋友正陷入跨信仰戀愛的掙扎，你會如何用愛心而堅定地提醒他？',
              '面對吃血這類存在解經爭議的議題，你觀察自己是否容易對持不同意見的弟兄姐妹妄下論斷？如何學習彼此接納？',
              '六個案例中，哪一個和你目前的生活處境最相關？試著用「準則、處境、動機」三個觀點，重新分析一次你自己的處境。',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用六個案例的架構分析你自己的一個生活難題</h4>
              <p className="text-gray-700 mb-2">挑一個你正在猶豫的生活抉擇，依照本章示範的格式，逐一寫下「準則（知識/自由/愛心/造就）→ 處境 → 動機」，練習完整地走過這套分析流程，而不是只憑直覺做決定。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己與未信家人相處的溝通方式</h4>
              <p className="text-gray-700 mb-2">
                誠實反省，自己在信仰生活的堅持上，是否曾像堂哥除夕不上桌那樣，只顧及「形式」的堅持而傷了與家人的關係？本週找一個機會，用更溫和委婉的方式與未信的家人溝通信仰的立場。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢賜給我智慧，讓我在生活中的每一個抉擇上，都能兼顧祢的真理準則、當下的處境，以及我內心真實的動機。求祢幫助我不憑一己的喜好或恐懼行事，也不隨意論斷持不同看法的弟兄姐妹，而是無論做甚麼，都存著榮耀祢、造就人的心去行。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
