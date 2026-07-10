import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch42() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第42章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生養與離開</h2>
        <p className="text-gray-500 mt-1">他拉帶着他兒子亞伯蘭和他孫子哈蘭的兒子羅得，出了迦勒底的吾珥，要往迦南地去。　創世記十一31</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              這段經文可分為兩大段，第一大段創世記十一10-25，講從閃到他拉的家譜；第二大段創世記十一26-32，講他拉與亞伯蘭離開迦勒底的吾珥到哈蘭居住的這段故事。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、生養傳承——從閃到他拉</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十一10-25有一個基本公式，都是講「某人幾歲生了誰，之後又活了多少年，並且生兒養女」。這個公式重複了八次，分別講到閃、亞法撒、沙拉、希伯、法勒、拉吳、西鹿、拿鶴、他拉等九個人。雖然好像是一個單調的公式，但其中包含不少重要訊息。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、生子的年齡下降</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  除了閃一百歲生孩子之外，其他人開始生孩子的年齡是從三十五歲逐漸下降到二十九歲。比起洪水以前很明顯比較早生孩子，洪水前有四位是六十五至九十歲生孩子，其餘都是百歲以後生孩子，最晚的是挪亞五百歲生孩子。這讓我們看見，洪水之後人比較快成熟，也比較快老化，所以結婚生子的年齡大大提早。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、存活的壽命減少</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  從閃的六百歲逐步減少，亞法撒四百三十八歲，沙拉四百三十三歲，希伯四百六十四歲，法勒二百三十九歲，拉吳二百三十九歲，西鹿二百三十歲，拿鶴一百四十八歲。閃出生於洪水前，身體最好，活到六百歲。接著三代亞法撒、沙拉、希伯三人都活到四百多歲，長壽的基因仍然有些保留。法勒、拉吳、西鹿三人都只活二百多歲，大致減半。一方面是因為洪水後的大自然條件變差了，一方面似乎也跟巴別塔事件有關，就在人明顯叛逆神之後，神再次快速減低人的壽命。接下來的拿鶴活一百四十八歲，此後就幾乎只活一百多歲。很特別的是下一代的他拉竟活得更久，有二百零五歲（創十一32），亞伯拉罕也活到一百七十五歲（創廿五7）。可能是因為法勒、拉吳、西鹿、他拉都慢慢遠離神，跟著迦勒底的風俗去拜偶像。但他拉與亞伯蘭後來被神帶離開迦勒底的吾珥，成為敬拜耶和華的人，所以神重新給他們比別人有更長的壽命。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、都沒有講幾歲死</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  洪水後的家譜與洪水前的家譜做比較，可發現其異同。創世記五3-31有類似的家譜記載，總共有九次相同的公式。這兩組公式很像，都說到「某人幾歲生孩子，又活了多久，並且生兒養女」，但有一個明顯的不同：創世記五章的家譜都說到某人活到幾歲就死了，而創世記十一章的家譜都沒有講活到幾歲死。洪水前雖然人活得久，但最終是死；洪水後雖然人的壽命比較短，但不強調他死，而單單強調他把生命傳下去。似乎在表達生命傳承的盼望，從這個家譜，一代一代傳下去，將會生出一位能帶給我們永生的彌賽亞。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、都是屬靈的長子</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這些名字其實不一定是肉身的長子，舉例說，最前面講到閃一百歲生亞法撒，亞法撒就不是肉身的長子，他是老三，但他是屬靈的長子，是彌賽亞的直系祖先，所以被記在這裡。因此不能把這些人生孩子的年齡加起來變成是客觀歷史的年代。只能當作參考，而實際年代會比這裡所記的更久遠一些。若再加上可能有斷代（根據路加福音三36的家譜，亞法撒與沙拉之間還有一位該南），那就更不能以這些年數相加來推算時間，但作為參考是可以的。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">五、較著重生養傳承</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  創世記十1-31也是家譜，與十一10-25的家譜做比較，前者講這些人在甚麼地方發展，且有其他兄弟的名字；後者有寫年齡，沒有其他兄弟的名字。從十章的家譜可看見有哪些兄弟，但看不見相關的年齡；從十一章的家譜，可以看到何時生，活多久，但看不見兄弟有誰。兩種家譜各有其重要性，十章的家譜可作為一種背景，看見整個大環境；十一章的家譜則集中在彌賽亞的祖先，要帶出神揀選的亞伯拉罕。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、離開吾珥——從他拉到亞伯蘭</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十一26-32講他拉與亞伯蘭蒙召離開吾珥到哈蘭的這段故事：「26他拉活到七十歲，生了亞伯蘭、拿鶴、哈蘭。27他拉的後代記在下面。他拉生亞伯蘭、拿鶴、哈蘭；哈蘭生羅得。……31他拉帶著他兒子亞伯蘭和他孫子哈蘭的兒子羅得，並他兒婦亞伯蘭的妻子撒萊，出了迦勒底的吾珥，要往迦南地去；他們走到哈蘭，就住在那裡。32他拉共活了二百零五歲，就死在哈蘭。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十一1-9提到人類在巴別塔事件後，從示拿平原（美索不達米亞）分散到世界各地的事。那次分散的原因與本質，乃是離開罪惡之地。創世記十一26-32這段故事在形式、原因、本質上，都是創世記十一1-9的延續，因為也是叫人離開罪惡之地。前者是挪亞、閃、含、雅弗整個大家族的離開，後者是他拉、亞伯蘭一個小家族的離開。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                迦勒底的吾珥屬於示拿平原的範圍，是波斯灣上的一個港口，位於幼發拉底河河口。亞伯蘭出生時，此處是世上最繁華的城市，是製造業、農業、航運的中心，也是宗教與政商的中心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                相傳他拉原來是拜偶像的，後來因兒子被神揀選呼召，而改信了耶和華上帝。約書亞說的話可作為一個根據：「現在你們要敬畏耶和華，誠心實意的事奉他，將你們列祖在大河那邊和在埃及所事奉的神除掉，去事奉耶和華。15若是你們以事奉耶和華為不好，今日就可以選擇所要事奉的：是你們列祖在大河那邊所事奉的神呢？是你們所住這地的亞摩利人的神呢？至於我和我家，我們必定事奉耶和華。」（書廿四14-15）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大河那邊，就是他拉、亞伯蘭的故鄉迦勒底的吾珥，在那裏，所有的人都事奉別神。他拉可能多少有聽聞從閃、亞法撒、沙拉、希伯傳下來真神信仰的故事，但沒有成為他的信仰，因為在法勒之後，就逐漸被偶像崇拜的文化拉去了，所以約書亞說，「你們列祖」在大河事奉別神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同一個時期，有相當大比例的閃族後裔離開中東地區繼續往東前進，到達黃河流域，在那裏傳承發展了真神的信仰，君王、百姓皆敬拜信靠上帝。在偶像文化大舉入侵之前維持了大約兩千年，就是堯、舜、禹作王，及夏、商、周三代之時，那裏被稱為神州。但法勒、拉吳、西鹿、他拉這一個家族沒有離開偶像文化的發源地，以至於就融入偶像文化了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神計畫要在中東的迦南地——那裏接近全球陸地的中心點，建立一個小神州，所以要超自然地動工，把亞伯蘭抽離拜偶像之地，去迦南生養出一個新的族裔，是敬拜真神的。可惜他拉與亞伯蘭只走到哈蘭就停住了，沒有直接去到迦南地，哈蘭在吾珥西北530哩處，在幼發拉底河上游東岸約60哩處，是敬拜月神的中心之一，屬巴旦亞蘭地區，位處交通要道，從巴比倫前往迦南會經過此地。這裡仍屬偶像文化地區，但比迦勒底的吾珥好一些，偶像文化沒有像吾珥那裏那麼強，因此他們這家人可以在那裏建立起敬拜耶和華的信仰。直到他拉死後，神再次呼召亞伯蘭，使他離開哈蘭，去到迦南地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                摩西稱雅各是一個將亡的亞蘭人：「你要在耶和華你神面前說：我祖原是一個將亡的亞蘭人，下到埃及寄居。他人口稀少，在那裡卻成了又大又強、人數很多的國民。」（申廿六5）這可能跟亞伯拉罕曾寄居哈蘭有關，而且雅各也曾經有二十年在這裡工作、娶妻、生子。這地是亞蘭人之地，聖經多次稱拿鶴的兒子比土利、孫子拉班為亞蘭人（創廿五20，廿八5，卅一20，卅一24），利百加叫雅各逃往哈蘭拉班那裏（創廿七43）。聖經又稱哈蘭為拿鶴城（創廿四10）。所以，很可能拿鶴在父親他拉、弟弟亞伯蘭去哈蘭居住一段時間之後，他也決定前往哈蘭定居。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基本上，吾珥、哈蘭、迦南地都是拜偶像之地，差別在於那地的人口多寡。吾珥的人口密度最高，是宗教、政商中心；哈蘭人口密度較低，偶像文化的影響小一點，迦南地人口密度更低，偶像文化的感染力更小。這樣才有一個空間讓真神信仰培養茁壯起來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神後來又把整個以色列家族帶到埃及的歌珊地，那是一個更空曠的地方，讓以色列全家族生養多成為一個國族。然後才有足夠的實力，再回去迦南地發展，建立一個真神信仰的文化群體及國家。從吾珥到哈蘭，從哈蘭到迦南，從迦南到歌珊地，從埃及到曠野，從曠野到迦南地，是一次又一次走出巴別（巴比倫）的歷程。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                個人的信仰歷程需要走出自己原屬的巴別與吾珥，筆者離開高雄到台北讀大學，是一種走出吾珥的歷程，因為離開傳統佛道信仰的家庭環境，比較有機會參加校園團契及基督教會的聚會，進而信主受裝備、獻身服事。許多人與筆者有相似的經歷，離開本家族，才容易信主。在開拓教會方面，也要注意這個原則，筆者在神學院教課時，有一位神學生是客家人，他想要畢業後去客家庄開拓教會，我建議他最好先在城市建立客家教會，而後再從這教會差派團隊移民回去客家庄進行開拓。一個人單槍匹馬去客家庄開拓，很難帶那裡的人信主，一群人去則比較容易，因為初信者需要一個夠大的群體來接納及遮蓋他們。離開舊的信仰文化群體，需要同時進入新的信仰文化群體，新群體茁壯後，再差派團隊進入舊文化群體進行改造，這樣才有機會成功。所以初信者需要來教會過小組生活，被造就好之後，再回到家庭、職場建立新文化，從至少兩、三個人的小組禱告開始，進一步可建立起家庭教會、職場教會。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '從閃到他拉九代的生養公式顯示：生子年齡持續下降（三十五歲降到二十九歲），壽命也大幅減少（六百歲降到一百多歲），洪水後人比洪水前更快成熟也更快老化。',
                '創世記十一章的家譜都沒有講「活到幾歲死」，與創世記五章洪水前家譜明顯不同，似在表達生命傳承的盼望，一代代將生出帶來永生的彌賽亞。',
                '這些家譜名字未必是肉身長子，而是「屬靈的長子」（彌賽亞的直系祖先），因此不宜將年齡相加當作精確的歷史年代，只能作為參考。',
                '他拉帶著亞伯蘭、羅得離開拜偶像最盛的迦勒底吾珥，走到偶像文化較弱的哈蘭定居，直到他拉死後，神再次呼召亞伯蘭前往迦南地，這是脫離罪惡之地、走向應許之地的歷程。',
                '從吾珥到哈蘭、迦南、歌珊地、曠野，再回到迦南地，是一次又一次走出巴別（巴比倫）的歷程；個人信仰歷程也常需要離開原屬的信仰文化群體，才更容易信主、被建造。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '創世記十一章從閃到他拉的家譜，與創世記五章、十章的家譜有何異同？可看見哪些重要的信息？',
              '他拉與亞伯蘭順服神的呼召離開吾珥走到哈蘭，是一個類似離開巴別的旅程。其正面意義是甚麼？不足之處是甚麼？',
              '回想自己的生命信仰，有沒有類似離開吾珥的歷程？神做了甚麼，自己做了甚麼？付上甚麼代價，得到甚麼祝福？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
