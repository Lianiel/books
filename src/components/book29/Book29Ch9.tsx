import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">豐盛的生命</h2>
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
              第六日的創造與第三日的創造是相對的，第三日造了陸地與植物，預備好了地上四方的空間；第六日造動物與人，吃地上生長的植物，在地上繁殖，豐富了地上四方的空間。因此本章先分享第六日的前半——神創造了陸上動物，後面兩章再分享第六日的後半——有關神按他的形象造男造女的事。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、各從其類</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記第一章詳細記載動植物的「各從其類」，在五節經文裡講了十次「各從其類」：一11（一次）、12（兩次）、21（兩次）、24（兩次）、25（三次）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                創世記一11-12：「神說：地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類……地便發生了青草和結種子的菜蔬，並結果子的樹木，各從其類；神看著是好的。」這段經文用到植物分成三類：草草、菜蔬、樹木，但講述各從其類時，草和菜蔬同為一大類。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                創世記一21：「神創造出大魚和水中所滋生各樣有生命的動物，各從其類；及從各樣飛鳥，神看著是好的。」這節提到了大魚和水中活物、飛鳥兩大類各從其類。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一24-25：「神說：地要生出活物來，各從其類；牲畜、昆蟲、地上的野獸，各從其類，事就這樣成了……神造出地上的野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類；神看著是好的。」這段又講了五次「各從其類」，第一次是提出地上動物整體，第二次是提出牲畜、昆蟲、野獸三種後說的，第三至五次分別針對野獸、牲畜、昆蟲各講了一次。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經這些強調，一定有其重要性，這個「各從其類」，乃是神留下的記錄，要讓人知道物種不是進化來的，而是神創造而有的。神強調各從其類，是在講神把物種的「基因」放在各種種類中，使不同的物種有一個超越久遠的界限，這在現代科學裡已經被確認。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                達爾文提出進化論的時候，他對「基因」還不瞭解，以為「突變」可以產生新物種，但先進的科學家指出這條路行不通。有許多書籍或文章指出「突變」不能產生新物種，以下四點歸納：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>所有的生命形式都非常複雜，「基因（DNA）」一直都在所有的物種中被給予清楚的提綱。</li>
                  <li>發生「突變」的個體，負因凶異形而提早死亡，而不會繼續進化。</li>
                  <li>混種的動物通常不能生育下一代。</li>
                  <li>就算有所謂真的性的「微突變」，從統計學的機率來計算，要突破出這麼多物種，所需的時間遠超過公認的科學算年齡138億年，更超過地球的45億年。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「化石」也是進化論所提供的證據，但事實上，累積到今天所有的化石資料，不能証明進化，還會反對進化，理由如下：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>已知的化石顯示，大部分的物種在所謂寒武紀的岩層同時出現，而非在不同年代逐漸出現。</li>
                  <li>複雜的生物與簡單的生物是一起出現的，並沒有從簡單進化到複雜的順序。</li>
                  <li>從一個物種進化成另一個物種的「過渡類型」化石，沒有找到。</li>
                  <li>化石證實了「各從其類」，並非遵照進化的順序。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed">
                從有生物開始，第三日、第五日、第六日神都強調了「各從其類」，在第四日則強調「作記號」，其意義是神要動植物遵從他的命令，生物各從其類也是作記號的形式，本質是一樣的，因為生物各各從其類就是神在作記號，要標示神自己的永能和神性（羅一20）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、向動物學品格</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                比較高速所設立的培基學院，觀察各種動物的特質，在每種動物身上找出一個品格特質，作為學員的學習取例，例如：白鷺有機智的品格，草原大鼠有忠誠的品格，浣熊有韌感的品格，鮭魚有情感的品格，一定要回到家鄉……等等。每種動物有不同的品格，都可以代代相傳，讓人效仿成為更好的人，也成為我們的榜樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                不同的動物可能在不同事項上比我們更優越，我們應該謙虛學習，使用神的智慧接受神的活水，然後把活水分享給有需要的人，就有如聖靈的果子相關（加五22-23；林前十三4-7），能使我們擁有豐盛的生命。神在第六日所造的地上動物有牲畜、野獸、昆蟲，筆者從各類選一個動物來分享，牲畜方面以牛為代表，昆蟲方面以蜜蜂為代表，野獸方面以獅子為代表。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">一、牛</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                對以色列人而言，牛是最重要的財產之一，也是獻給神最重要的祭牲。創世記二十四章35節：「耶和華大大地賜福給我主人，使他昌大；又賜給他羊群、牛群、金銀、僕婢、駱駝、和驢。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                牛的工作要付出很多的努力，但都是忠誠去為主人工作。聖經說：「你不要封住在場上踐踏穀物的牛嘴。」（林前九9）「工人工資是應當的。」（提後五18）四活物其中一個側面是牛：代表要侍候人的形象；四活物的四個側面分別是獅子（君王）、牛（服事者）、老鷹（使者）、人（啟四7）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                牛吃了草以後，要經過多次反芻，才消化完成，然後把化為牛奶，讓人可以來喝。主耶穌提到，神的僕人一個很重要的任務是按時分糧：「誰是忠心有見識的管家，主人派他管理家裡的人，按時分糧給他們吃呢？」（太二十四45）我們要把信仰真理分解為淺易理解的道，按各人不同的需要去供應，這就是牛的精神——忠誠服事、分享生命。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">二、蜜蜂</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                蜜蜂非常謙卑地顯示服從，勤勞主動，具有很高的團隊性。蜜蜂從幼年開始，就在蜂巢裡擔任不同的角色。通常蜜蜂要造訪花朵三千多次，才能把花蜜裝滿一個蜂窩；一個蜂窩一天所有的工蜂積共要造訪花朵四十萬次，才能完成一天的工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                蜜蜂的工作很努力，當一隻蜜蜂遇到一處有很多值得的花蜜資源後，會用特別的飛舞方式告知其他蜜蜂，表達方位及種類，因此其他蜜蜂知道自己的能力有限，需要更多的同伴去採索。我們能從蜜蜂身上學習三點：（1）謙卑順從職；（2）主動與勤勞；（3）團隊與合作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                聖經多次講到蜂蜜的重要性，詩篇十九章9-10節：「耶和華的典章是真實的，全然公義，都比金子可羨慕，且比精金更可羨；比蜜甘甜，且比蜂房下滴的蜜更甜。」箴言一六章24節：「良言如同蜂房，使心覺甘甜，使骨得醫治。」蜂蜜濃縮了花朵植物的精華，以蜜蜂為代表，讓我們今天在世上作使人，要像蜜蜂一樣，勤勞、主動、圓隊配搭，感觸豐盛生命，並且分享生命中的豐盛。
              </p>

              <h4 className="font-semibold text-indigo-700 mb-2">三、獅子</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                以色列十二支派中，有三個支派，聖經裡面用獅子來形容：創世記四十九章9節：「猶大是個小獅子；我兒，你從擄物上去，他蹲臥如公獅，蹲臥如母獅，誰敢惹他呢？」箴言二十八章1節：「惡人雖無人追趕也逃跑，義人卻膽壯如獅子。」獅乃是百獸之王，他具有其名王的特質，毫不退縮（箴三十30）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                獅子在聖經中代表君王，也被用來形容耶和華神。何西阿書十一章10節：「他們跟從耶和華，耶和華必如獅子吼叫，他一吼叫，子孫就從西方急速而來。」阿摩司書三章8節：「獅子吼叫，誰不懼怕？主耶和華命，誰不奉命說話呢？」
              </p>
              <p className="text-gray-700 leading-relaxed">
                最重要的，耶穌基督是猶大的獅子，是萬王之王：「長者中有一位長老說：不要哭，看哪，猶大支派中的獅子，大衛的根，他已得勝，能以展開那書卷，拆開那七印。」（啟五5）以西結書與啟示錄兩書中四活物的四個側面——獅子、牛、人、鷹，分別顯示神完整形象的不同面向，因此這些動物也能幫助我們實際認識神，讓我們成為服事人、幫助人的使者（來一14）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、耶穌與雅各的生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從蜜蜂得到侍候人的形象，也從獅子看到君王的形象，這兩種不同的形象結合在一個人身上，才能成為一個成熟的人，也是一個有豐盛生命的人，因為我們一定要先作僕人，而後才能作為君王。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌是最好的榜樣，他在世上，一直在作使人。以賽亞書四十二章1-4節所說：「看哪！我的僕人，我所扶持、所揀選、心裡所喜悅的！我已將我的靈賜給他，他必將公理傳給外邦。他不喧嚷，不揚聲，也不使街上聽見他的聲音。壓傷的蘆葦，他不折斷；將殘的燈火，他不吹滅……」馬太福音廿章44-45節：「在你們中間，誰想為首，就必須作眾人的僕人，因為人子來，並不是要受人的服侍，乃是要服侍人，並且要捨命作多人的贖價。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書信心英雄第六位是雅各，雅各代表第六日的成長歷程，雖然在一般比較中他表現比較曲折，但其實是他的成長過程，他的路也更加廣闊，在人生的下半場也是了豐盛的生命。主耶穌藉著麥子容他自己的生命——「一粒麥子不落在地裡死了，仍舊是一粒，若是死了，就結出許多子粒來」（約十二24）——也告訴門徒結果子的重要，要藉著與葡萄樹相連結的關係，讓我們一起都得到成長，並且等候出果子的重要。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各年輕時在人家工作，婚娶、生子，與母親親密、與兄弟有矛盾衝突，過程中他是一個忠心的僕人，也是一個勤勞的牧羊者；中年時回到家鄉，以插接植的方式，過程中他成為一個榜樣的兒子；老年時，他失去愛子約瑟，學習放下再放下，但神把他帶到埃及，在那裡他的晚年是最有榮耀的時光，為雅各帶來數百年美好的日子，使後代在埃及繁衍成一個大民族。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                第六日的創造揭示了豐盛生命的奧秘——不在個人的能力，而在按照神的心意各從其類，在每一個神所設計的位分中忠誠服事。如同牛的忠誠、蜜蜂的勤勞，以及獅子的勇敢，都是指向耶穌基督的形象——那又謙遜又剛強的僕人君王。以雅各的生命為例，從年輕到老年，神一步一步地修建他，使他從一個善謀的人成長為一個成熟的信心英雄。我們每一個人也是如此，在神的手中，不管在哪一個生命的階段，都能在各自的位分中活出豐盛的生命。
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
                '第六日對應第三日：第三日造植物預備地上空間，第六日造陸上動物與人填充這個空間，象徵豐盛生命的實現。',
                '「各從其類」在創世記一章講了十次，是神留下的記錄，說明物種是神創造而有的，不是進化來的；基因的界限、突變的侷限、化石的證據，都支持這一點。',
                '牛代表忠誠服事的品格——忠誠、任勞、按時分糧；蜜蜂代表勤勞主動的品格——謙卑、主動、團隊合作；獅子代表勇敢剛毅的品格——不退縮、有威嚴。',
                '四活物的四個側面（獅子、牛、老鷹、人）對應神完整形象的不同面向，這些動物能幫助我們認識神的屬性。',
                '耶穌是使人式的君王：他先作使人（太廿45），再作君王（啟五5）；豐盛的生命必先從謙卑服事開始。',
                '雅各的生命歷程（勞動→爭奪→失去→榮耀）是豐盛生命成長的縮影，神在每一個階段都在修建他，使他從善謀的人成為成熟的信心英雄。',
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
              '各從其類這個概念如何幫助你理解生命的價值和意義？這對你的信仰有什麼影響？',
              '牛、蜜蜂和獅子各代表哪些品格？你可以從哪一個動物身上學習，應用在你現在的生命中？',
              '耶穌是使人式的領導，也是君王式的帶領，你在什麼樣的情況中需要學習作使人？你的生命中是否也有雅各式的成長歷程？',
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
