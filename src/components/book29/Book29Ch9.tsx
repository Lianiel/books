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
        <p className="text-gray-500 mt-1"><sup>24</sup>神說：「地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。」事就這樣成了。<sup>25</sup>於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的　創世記一24-25</p>
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
              第六日的創造與第三日的創造是相對的。第三日造了陸地與植物，預備好地上四方的空間。第六日造動物與人，吃地上生長的植物，在地上繁衍，豐富了地上四方的空間。因內容豐富，這一章先分享第六日的前半——神造陸上動物，後面兩章再分享第六日的後半——有關神照他的形象造男造女的事。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、各從其類</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記第一章詳細記載動植物的「各從其類」，在五節經文裡講了十次「各從其類」：一11（一次）、12（兩次）、21（兩次）、24（兩次）、25（三次）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一11-12：「神說：地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類；果子都包著核。神看著是好的。」這段經文將地上植物分成三類：青草、菜蔬、樹木。但講各從其類時，則將青草、菜蔬歸為一大類，結果子的樹木歸為一大類。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一21：「神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。」這節經文提到三類活物：大魚、水中活物、飛鳥，講各從其類時則分為兩大類：大魚和水中活物，各樣飛鳥。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一24-25：「神說：地要生出活物來，各從其類；牲畜、昆蟲、地上的野獸，各從其類。事就這樣成了。於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的。」這段經文講了五次「各從其類」，第一次是對整體的地上活物說的，第二次是在提出牲畜、昆蟲、野獸等三類之後說的，第三次至第五次分別針對野獸、牲畜、昆蟲各講了一次。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經這樣的表達，一定有其重要性。這個「各從其類」，乃是神留下的記號，要讓人知道物種不是進化來的，而是神創造而有的。神強調各從其類，是在講神把物種的「基因」放在各物種裡面，使不同的物種有一個恆久的界線，這在現代科學裡已經被證實。達爾文提出進化論的時候，他對於「基因」還不很瞭解，以為物種可以經由「突變」來產生新物種，但先進的科學指出這條路行不通。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">有許多書籍或文章指出「突變」不能產生新物種，為避免佔用太多篇幅，僅簡單歸納以下四點：</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-3">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>所有的生命形式都非常複雜，「基因」（DNA）一直都在所有的物種裡給予清楚的界線。</li>
                  <li>發生「突變」的個體，只會因畸形而提早病亡，而不會累積進化。</li>
                  <li>混種的動物通常不能生育下一代。</li>
                  <li>就算有所謂良性的「微突變」，從統計學的機率來計算，要發展出這麼多物種，所需的時間遠超過公認的宇宙年齡138億年，更別說地球的45億年。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">另外，「化石」也是進化論所標榜的證據，但事實上，累積至今的所有「化石」資料，不僅不能證明進化，還會反對進化。理由如下：</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-3">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>已知的化石顯示，大部分的物種在所謂寒武紀的岩層同時出現，而非在不同年代逐個出現。</li>
                  <li>複雜的生物與簡單的生物是一起出現的，並沒有從簡單進化到複雜的序列。</li>
                  <li>從一個物種進化成另一個物種的「過渡類型」化石，沒有被找到。</li>
                  <li>「化石」證明了「各從其類」，而非證明進化。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed">
                從有生物開始，第三日、第五日、第六日神講了十次「各從其類」，而第四日則是講「作記號」，意思是作為神蹟的證據。生物各從其類與眾星作記號的形式不同，但本質是一樣的，因為生物各從其類就是神在作記號，要顯明神自己的永能和神性（羅一20）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、向動物學品格</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                比爾高達所設立的培基學院，觀察各種動物的特質，在每個動物身上找出一個品格特質，作為學員的學習指引。例如：白雉雞有機警的品格，白尾鹿有專注的品格，長頸鹿有隨時待命的品格，草原犬鼠有慎重的品格，浣熊有創意的品格，海狸有勤奮的品格。鮭魚有決心的品格，一定要回到家鄉產卵。斑馬有同情的品格，會等候體力較弱的斑馬。黑雁有忠貞的品格，牠們絕對是一夫一妻、生一世。帝王企鵝有真愛的品格，媽媽生蛋後，企鵝爸爸將蛋放置在牠的腳上，塞在牠的腹部下，靜靜站著，長達三個月，好讓小企鵝誕生。……神先造各種動物，最後才造人，因為人能夠擁有這些動物所有的品格。但是在人的成長過程中，動物可以成為我們的榜樣，不同的動物可能在不同單項上比我們更優越。我們若願意謙卑學習，能幫助我們擁有更多好品格，這些品格與聖靈的果子相關（加五22-23，林前十三4-7），能使我們擁有豐盛的生命。我們一信耶穌，就有生命了，但要在生活中倚靠聖靈操練品格，才能結出聖靈的果子，並真正擁有豐盛的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一24：「神說：地要生出活物來，各從其類；牲畜、昆蟲、地上的野獸，各從其類。事就這樣成了。」神在第六日所造的地上動物有牲畜、昆蟲、野獸三大類，筆者從三大類各選一個動物來分享，牲畜方面以牛為代表，昆蟲方面以蜜蜂為代表，野獸方面以獅子為代表。
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">一、牛</h4>
                  <p className="text-gray-700 leading-relaxed">
                    對以色列人而言，牛是最重要的財產之一，也是獻給神首要的祭物。創世記廿四35：「耶和華大大地賜福給我主人，使他昌大，又賜給他羊群、牛群、金銀、僕婢、駱駝，和驢。」利未記一2：「你曉諭以色列人說：你們中間若有人獻供物給耶和華，要從牛群羊群中獻牲畜為供物。」牛的工作要付出很多的勞力，但牛都是任勞任怨，忠誠為主人工作。保羅是神的僕人，自比為在場上踹穀的牛，他認為神的僕人在事奉崗位上工作，跟牛在場上踹穀是一樣的：「就如摩西的律法記著說：牛在場上踹穀的時候，不可籠住他的嘴。難道神所掛念的是牛麼？不全是為我們說的麼？分明是為我們說的。」（林前九9-10）「因為經上說：牛在場上踹穀的時候，不可籠住他的嘴；又說：工人得工價是應當的。」（提前五18）
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    四活物其中一個臉面是牛，代表僕人的形象：「第一個活物像獅子，第二個像牛犢，第三個臉面像人，第四個像飛鷹。」（啟四7）神給以色列人的迦南美地乃是流奶與蜜之地，「流奶」的意思不是地自己流出奶，乃是指這地適合畜牧，可從牛羊得到許多奶。這跟牛羊的消化系統有很大的關係。人吃草無法消化，牛吃草可將它轉化為牛奶，讓人可以來喝。但這不是一件簡單的事，牛吃了草以後，要經過多次反芻，三天多時間，才消化完畢。所以牛奶的供應是很不容易的。牛樂意將牠的奶供應給人，是分享的生命，也是僕人的生命。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    主耶穌提到，神的僕人有一個很重要的任務是按時分糧：「誰是忠心有見識的僕人，為主人所派，管理家裡的人，按時分糧給他們呢？」（太廿四45）僕人分糧與牛供應牛奶相似，因為神的僕人要把聖經中深奧的真理（保羅形容那是乾糧），分解為淺顯易懂的道，按每個人不同的需要去供應，讓神的道成為靈奶供應給人（彼前二2）。這事也在詩篇及教牧書信中表明出：「你的言語一解開就發出亮光，使愚人通達。」（詩一一九130）「你當竭力在神面前得蒙喜悅，作無愧的工人，按著正意分解真理的道。」（提後二15）
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">二、蜜蜂</h4>
                  <p className="text-gray-700 leading-relaxed">
                    蜜蜂非常謙卑順服、勤勞主動，且有很高的團隊性。蜜蜂從卵裡孵出來，還是一隻幼蜂時，就在蜂房裡擔任不同的角色，從這一項實習轉換到另一項實習，藉著模仿成蜂，學到各種職責。當牠們學會後，身體也剛好成熟了，就開始到蜂房外去採蜜。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    通常一隻蜜蜂要造訪花朵一千多次，才能將花蜜裝滿一個蜜囊。而一個針環大小的蜂蜜，要用六十個蜜囊才能做成。一個蜂房一天製成蜂蜜的量接近一公斤，所以一個蜂房裡所有的工蜂總共要造訪花間十億次，才能完成一天的工作。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    蜜蜂的工作團隊性很強，當一隻蜜蜂遇到一處有價值的花蜜資源後，會用特殊的飛舞方式將方位、距離告訴同伴，並以高頻率的聲音，傳達花的樣式及種類。因為牠們知道自己能做的有限，需要更多的蜜蜂到牠所發現的地方去採蜜。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    以上是神賦予蜜蜂的勤勞與忠誠。因此我們能從蜜蜂身上學習到三點：1. 謙卑與順服，2. 主動與勤勞，3. 團隊與合作。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    聖經中多次講到蜂蜜的重要與美好，甚至用來比擬神的話。撒母耳記下十七29：「蜂蜜、奶油、綿羊、奶餅，供給大衛和跟隨他的人吃；他們說：民在曠野，必飢渴困乏了。」詩篇十九9-10：「耶和華的道理潔淨，存到永遠；耶和華的典章真實，全然公義，都比金子可羨慕，且比極多的精金可羨慕；比蜜甘甜，且比蜂房下滴的蜜甘甜。」箴言十六24：「良言如同蜂房，使心覺甘甜，使骨得醫治。」箴言廿四13：「我兒，你要吃蜜，因為是好的；吃蜂房下滴的蜜便覺甘甜。」
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    奶與蜜總括了動物與植物的精華，奶是動物的精華，以牛奶為代表，蜜是植物的精華，以蜂蜜為代表。兩種東西都是經過勤勞的工作與複雜的消化才完成的。神希望我們今天在世上作僕人，要像牛與蜜蜂一樣，勤勞、主動、團隊配搭，而能夠領受豐盛生命，並去分享生命中的豐盛。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">三、獅子</h4>
                  <p className="text-gray-700 leading-relaxed">
                    以色列十二支派中，有三個支派，聖經用獅子來形容。創世記四十九9：「猶大是個小獅子；我兒啊，你抓了食便上去，你屈下身去，臥如公獅，蹲如母獅，誰敢惹你？」申命記卅三20：「論迦得說：使迦得擴張的應當稱頌！迦得住如母獅；他撕裂膀臂，連頭頂也撕裂。」申命記卅三22：「論但說：但為小獅子，從巴珊跳出來。」獅子乃是百獸之王，牠具有王的特質：「獅子乃百獸中最為猛烈、無所躲避的，」（箴三十30）箴言還說：「義人膽壯像獅子。」（箴廿八1）意思是，勇敢乃義人的特質之一。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    獅子在聖經中代表君王，也被用來形容耶和華神。箴言十九12：「王的忿怒好像獅子吼叫；他的恩典卻如草上的甘露。」何西阿書十一10：「耶和華必如獅子吼叫，子民必跟隨他。他一吼叫，他們就從西方急速而來。」阿摩司書三8：「獅子吼叫，誰不懼怕呢？主耶和華發命，誰能不說預言呢？」最重要的，耶穌基督是猶大的獅子，是萬王之王：「長老中有一位對我說：不要哭。看哪，猶大支派中的獅子，大衛的根，他已得勝，能以展開那書卷，揭開那七印。」（啟五5）
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    以西結書與啟示錄分別提到基路伯與四活物的四個臉——獅子、牛、人、鷹，剛好可對照四福音書，分別指出基督是君王、僕人、完全的人、完全的神。這不是說，四活物是基督，而是說，神在創造的時候，不僅把完整的神的形象放在人的裡面，也把部分的神的形象放在天使、動物裡面，因此動物、天使也能幫助我們來認識神美好的屬性，且藉此操練成長。天使、動物被造，都是為了成為服務人、幫助人，如希伯來書一14所說：「天使豈不都是服役的靈、奉差遣為那將要承受救恩的人效力麼？」
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    限於篇幅，我們沒有談到公雞報時、狗忠誠護主、馬載人行遠路，駱駝、牛驢馱重……等等，這些都是神在第六天的創造中為人預備的。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、耶穌與雅各的生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從蜜蜂與牛看到僕人的形象，也從獅子看到君王的形象，這兩種不同的形象結合在一個人身上，將成為一個成熟的人，也是一個有豐盛生命的人。因為我們一定要先作僕人，而後才能夠作君王。作了君王，仍然繼續作僕人，是僕人式的領導。一個好的傳道人，不僅會講道、教導，也會打掃廁所、庭院。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌是最好的榜樣，他在世上，一直在作僕人，即使是門徒們的老師，在最後晚餐，還是幫每個門徒洗腳。耶穌並非溺愛，因為他說，你們也要這樣做。但身教總是最有效的，他的榜樣留在門徒的心中，也呈現在每位基督徒眼前。如福音書所見證的：馬太福音十二18-21：「看哪！我的僕人，我所揀選，所親愛，心裡所喜悅的，我要將我的靈賜給他；他必將公理傳給外邦。他不爭競，不喧嚷；街上也沒有人聽見他的聲音。壓傷的蘆葦，他不折斷；將殘的燈火，他不吹滅；等他施行公理，叫公理得勝。外邦人都要仰望他的名。」馬可福音十44-45：「在你們中間，誰願為首，就必作眾人的僕人。因為人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書信心英雄榜的第六位雅各，對應了第六天前半的創造。雅各的生命一般人印象比較深刻的是他的詭詐、說謊、欺騙，但其實那是他的成長過程，他經過許多的磨練，而在人生的下半場有了豐盛的生命。他的父親以撒沒有去過很遠的地方，雅各則走了與祖父亞伯拉罕相似的路程，在其中接受神的雕塑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各壯年時回到祖父的家鄉，在那裡工作、結婚、生子，與母舅從親密到衝突。過程中他是一個忠心的僕人，也是一個盡責的牧人。中年時回來面對哥哥以掃，向以掃道歉，與以掃和解，過程中他成為一個謙卑的兄弟。
              </p>
              <p className="text-gray-700 leading-relaxed">
                老年時，他失去妻子、失去兒子，學習放下再放下，單單仰望神、倚靠神。晚年時，他去到埃及，與約瑟相會，這是他靈性的高峰期，因為他為當時最有權勢的法老祝福，為埃及帶來數百年美好的日子。臨終前為約瑟的兩個兒子祝福，如希伯來書十一21所說：「雅各因著信，臨死的時候，給約瑟的兩個兒子各自祝福，扶著杖頭敬拜神。」緊接著又為十二個兒子祝福，後來全部照他的預言應驗。相似於耶穌復活後、昇天前對門徒的祝福與吩咐：「天上地下所有的權柄都賜給我了。所以，你們要去，使萬民作我的門徒，……」（太廿八18-19）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                讓我們稱頌神創造的奇妙，神創造陸上動物來幫助我們，也使用各種動物不同的特質來教導我們生命品格的功課。讓我們學習像蜜蜂與牛的捨己、勤勞、可靠，也學習像獅子的勇敢、誠實、領導。作僕人，也作君王。並且像雅各，雖然曾經詭詐、欺騙、奪取，但在神的調教之下，轉變成為一個忠心的僕人、群羊的牧者、負責的丈夫、有愛的父親、謙卑的兄弟，以及能祝福君王的人。
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
                '創世記十次「各從其類」是神留下的記號，證明物種是被造而非進化而來；基因（DNA）給每個物種清楚的界線，突變無法累積產生新物種，化石證據也證明「各從其類」而非進化。',
                '動物身上有值得學習的品格特質（如白雉雞機警、海狸勤奮、黑雁忠貞等），神先造動物後造人，是要讓人謙卑向動物學習好品格，結出聖靈的果子（加五22-23）。',
                '牛代表僕人的形象（任勞任怨、供應牛奶，林前九9-10），蜜蜂代表謙卑順服、主動勤勞、團隊合作（詩十九9-10、箴十六24），獅子代表君王的形象（勇敢、百獸之王，啟五5基督是猶大的獅子）。',
                '耶穌是僕人與君王合一的最好榜樣（太十二18-21、可十44-45），先作僕人而後作君王；雅各是希伯來書信心英雄榜第六位，一生經歷詭詐到謙卑、忠心、負責的轉變過程。',
                '結語呼籲信徒學習動物的品格：像牛與蜜蜂捨己勤勞，像獅子勇敢領導，並像雅各在神的調教下從詭詐轉變為忠心謙卑，成為僕人也成為君王。',
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
              '已知的生物證據當中，有哪些觀察到或研究出來的事實可說明各種生物不是進化來的，而是神「各從其類」創造的？',
              '我們可從動物學習品格，本書分享的牛、蜜蜂、獅子有哪些正面的品格？',
              '為什麼雅各的生命可以對照第六天的創造？你的生命當中有什麼是需要被神調整的？',
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
