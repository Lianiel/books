import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch17() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">成為有愛心的群體（十六1-24）</h2>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多前書第十六章單看表面似乎繁瑣，但在經文背後卻自有它的邏輯：1-4節回答哥林多信徒關於捐款的問題，5-12節談到保羅和同工們的行程與計畫，13-18節是保羅最後的叮嚀，19-24節是問安結語。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">一、捐款（十六1-4）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅回答哥林多教會詢問的問題——為耶路撒冷「聖徒」捐款。保羅稱耶路撒冷貧窮的基督徒為「聖徒」，正如他稱哥林多人為「聖徒」一樣，表示他們具有同樣的身分。他說：「我從前怎樣吩咐加拉太的眾教會，你們也當怎樣行」，可見為其他地方有需要的信徒捐款，是保羅宣教事工之一，而且在不同的教會之間推廣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅提出兩個要點：（1）「各人要照自己的進項抽出來留著」——照自己的收入；（2）「免得我來的時候現湊」——必須有計劃，而非臨時湊款。在3-4節，他說明金錢的處理方式：哥林多信徒自己推派代表把捐資送到耶路撒冷，表現出財務透明度，而保羅也會為他們寫信舉薦。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、未來的計畫（十六5-12）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅計畫經馬其頓到哥林多（希望多逗留一段時日，不只是路過），然後返回以弗所。幾個要點：他是有計劃的人，但計畫必須以「主許可」為前提；他暫時不去哥林多，是因為以弗所福音的門大開；他知道以弗所「反對的人也多」，但他的去留不是看環境順利與否，而是看神是否開門。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於提摩太，保羅在四章17節已提過會派他去，在此再次提到，並為他鋪路——吩咐哥林多信徒「不容他害怕」，好好接待，因為提摩太所做的「也是主的工」。在當時敬老的社會文化中，年輕人是較被輕看的，所以保羅特別為提摩太護航。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在第12節，可以看到保羅與亞波羅之間有美好的情誼——分派結黨只是哥林多信徒自己的問題。保羅對亞波羅毫無芥蒂，甚至鼓勵他去哥林多；而亞波羅也相當成熟，認為此時間點不合適，不願因自己的出現引起更多的問題。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">三、最後的叮嚀（十六13-18）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅以五個命令式表達對哥林多信徒的期待：（1）務要儆醒——主再來的信念；（2）站立得穩——在信仰上站穩；（3）作大丈夫——與嬰孩的表現（自私、嫉妒）相對，是要長大；（4）要剛強——在今世苦難的世界中堅持；（5）凡事都要憑愛心而做——這是八章9節和十二至十三章所教導的原則。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在15-18節，保羅要哥林多信徒對那些在他們中間事奉者有正確的態度：順服和敬重。司提反是亞該亞第一個信主的人——信主就應事奉，而且信主不久的人，就可以開始事奉。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">四、問安（十六19-24）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅提到許多教會及個人的問安，其中包括亞居拉和百基拉家中的教會——無意中透露了宣教行程中的一個家庭教會聚會地點。「用聖潔的親嘴彼此問安」（第20節）是當代彼此問候的方式；保羅特別強調「聖潔」，是因為哥林多信徒在性方面曾有嚴重的錯誤。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅親筆所寫的話，表達出他心中最重要的兩件事：第一，「主必要來」（Maranatha，亞蘭文，可能是早期教會的術語）——主的再來是基督徒一切盼望及行動的原動力；第二，「如果有人不愛主，他就該受咒詛」——保羅資訊的中心是主耶穌自己。最後，保羅重申他對哥林多信徒的愛：「我對你們眾人的愛是在基督耶穌裡的」——不管你們是否屬保羅派的，我都愛！
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十六章是保羅整封書信的尾聲。從第13節以後，可以說是保羅的結語，流露出保羅對哥林多教會的關懷。然而在言談之中，也看到了保羅心中一個更大的宣教世界和視野。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">一、慈善行動</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在這章所說的「捐錢」，不是教會平常主日崇拜奉獻，而是慈善行動。從這段經文中，可以看到幾個值得信徒多加注意的要點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一，這種慈善行動在聖經中有相當的地位。保羅在第一世紀多個教會中發動，充分表達了使徒信經中「聖徒相通」的教導。教會固然有地方性，但同時具有普世性，教會與教會之間本來就不能只有單向的幫助。在中國教會的歷史發展中，西方教會長期單向性地協助中國教會，結果造成中國教會過分依賴外來資源；但若從哥林多前書這段經文歸結，這種單向流動並非必然，更不是必要的。現代的海外華人教會，無論在任何方面都說不上是貧乏的，因此更應注意對其他地區聖徒的責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二，保羅教導信徒，即便是慈善行動也必須要有計劃，而非臨時現湊。近日在網路上看到一則有趣的報導：美國有些人的收入按統計數字是全國的前百分之十五的高收入者，可是這些人並不覺得自己富有，反而經常覺得捉襟見肘。換句話說，重點不在於實際收入的多少。信徒若學會在奉獻上也有預算，就一定會有金錢奉獻給神作慈善事工。即便是將每天零星的錢幣儲存起來，一年半載之後的數目仍相當可觀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三，保羅處理這件事所呈現的財務智慧：他不僅是要他們捐錢，更是要他們推派代表把錢送到耶路撒冷，並說他會為哥林多教會寫信舉薦。「金錢」往往是教會中引起誤會和糾紛的關鍵之一。傳道人最好不要直接經手教會錢財，教會也需要教導信徒不要叫傳道人代轉奉獻。在美國，有些福音機構加入財務審核聯盟，讓機構的財務透明化；不少教會把會計和出納分為兩個人負責，都是有智慧的舉動。在這些事情上，教會面對的不僅是一個人是否值得信任的問題，更是要防止不必要的誤會。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">二、生活與宣教規畫</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                從保羅在1-12節所說的話，可以更深入地認識神在保羅身上的引導。一方面，可以看到他是一個有計劃的人，但同時他對自己的行程，仍然不能做最後的決定，因為他知道一切的計畫，仍然需要神的許可。可見屬靈偉人雖然有他的目標和計畫，但面對將來的事情也不能確定，端賴神隨時的引領。真正的屬靈生活就是如此，人的計畫和神的引領，在聖經中並不是對立的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這段話也可以看到，保羅在作計畫時，主要的考量並非工作是否一帆風順；他清楚知道以弗所福音的門大開，同時反對的人也多，但他決定留在以弗所，最主要的原因是為著傳福音。他之所以不願意路過哥林多，是因為他希望可以在哥林多多逗留一段時間，可見他主要的考量不是自己的方便。這也符合保羅自己所主張的「愛的原則」。多年前，作者聽到一位主內的弟兄面對工作的選擇，知道他最後的決定，是去一個在人看來條件比較不好的地方，為的就是那裡更需要有人傳福音，令作者心中深感欽佩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在宣教策略方面，保羅在替百基拉和亞居拉問安時，提到他們家中的教會，無意中透露了一個家庭教會聚會地點。保羅在哥林多時也曾使用提多猶士都的家作為據點（徒十八7）。保羅的佈道有時是在猶太人的會堂，有時是在學校，有時是在家庭教會；這個重要的資訊讓我們看到，保羅時代的教會不一定要在固定的教堂中聚會。中國家庭教會的模式，也在聖經中得到肯定。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">三、工作團隊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                近代談保羅的宣教工作，許多人都注意到保羅不是單打獨鬥，而是有一個團隊事奉。在哥林多前書第十六章，更是可以看到這個團隊中間一些實際的運作。保羅對提摩太的保護：他要哥林多信徒不讓提摩太害怕，好好接待，理由是提摩太也是在做主的工作，與保羅一樣。細讀哥林多前書，便可以了解提摩太為何會害怕，因為哥林多這些信徒畢竟不是省油的燈！當時代是敬老的社會，在這種文化中，年輕人是較被輕看、較吃虧的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅與亞波羅之間的關係，更是令人感動。保羅明知哥林多教會中有人重此輕彼，卻鼓勵亞波羅去哥林多；從人的角度看，此舉無疑是助長他人勢力，不利於己。但亞波羅非常成熟，認為此時間點不合適，不要因自己的出現引起更多問題。保羅對亞波羅全無顧忌，不擔心亞波羅搶他的地盤，而亞波羅也不會搶保羅的地盤。兩人之間並沒有相互猜疑或嫉妒，反而在一個團隊中努力事奉，因為他們知道恩賜要互相配搭，貢獻己力。這是多值得羡慕的同工關係！
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">四、愛主愛人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在哥林多前書最後的結語中，清楚可見保羅的牧者心腸。在13-18節再次提醒哥林多信徒生活的要點，特別要他們敬重在他們中間為主而勞碌的人。現今教會常找不到好的傳道人，許多原因是因信徒不會敬重、也不順服傳道人，甚至藐視他們，叫他們懼怕，往往使一個有心的傳道人灰心喪膽，從事奉職場上退縮冷淡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                最令人驚訝的，恐怕是保羅在第22節所說的重話：「如果有人不愛主，他就該受咒詛。主啊，願你來！」（新譯本）這句話是保羅親筆所寫的，表達出他心中認為最重要的兩件事。第一是主耶穌的再來——在第一章的感恩禱告、第十一章的聖餐、第十三章的恩賜討論、第十五章的復活信念中，主的再來是基督徒一切盼望和行動的原動力，也是哥林多前書一以貫之的主題。第二是保羅資訊的中心是主耶穌自己——若是以神學語言表達，基督論是救恩論、聖靈論、教會論、末世論及基督徒倫理的基礎。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者讀哥林多前書，發現整卷書信呈現出基督救恩的奇妙：基督在十字架上的替贖；聖靈許許多多的恩賜；主耶穌再來時，信徒可以成為聖潔無瑕疵，可以超越苦難與死亡而身體復活；在耶穌基督裡，軟弱的、受輕視的、貧窮的信徒，都得到重視、肯定與保護，這也就是那超越世上種族和社會階級的愛。哥林多信徒最基本的問題，不是缺少聖靈的恩賜，也不是因為他們停止了教會的聚會，而是因為沒有充分掌握耶穌基督和祂救恩的寶貴，也因而處處呈現出以自我為中心的生活模式，難怪保羅在結語中要說重話！
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，這段經文也充分表達關懷和愛心。在哥林多教會以外，還有其他地區的教會，以及過往的同伴，這些人都在關心著他們。保羅更是重申他仍然愛著他們！有愛心的人並不會護短，也不會因為他所愛的人有缺點，而失去愛心！
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                從保羅的言談中，可以看見一個廣闊的教會觀。這不是說我們不需要或不關心個別教會的事，而是應當展開眼界，信徒關心的不應當僅僅是一個地方的教會。若果說保羅對教會有最大的期望，那應該就是：更多享受主耶穌的恩典和愛，並且流露出祂的愛。
              </p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">一、耶路撒冷捐款的政治神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅在三次宣教旅程中，持續推動外邦教會為耶路撒冷猶太基督徒的捐款行動（哥林多後書八至九章；羅馬書十五章25-27節；使徒行傳二十至二十一章），這並不只是一個慈善行動，而具有深刻的神學和象徵意義。保羅在羅馬書十五章27節解釋道：外邦人既然分享了猶太人屬靈的財富，「就當以養身之物供給他們」，這是一種「聖徒相通」的神學實踐——猶太基督徒與外邦基督徒，雖然文化迥異，卻在基督裡形成一個跨越民族的新群體。新約學者Scot McKnight進一步指出，這項捐款也可能具有象徵意義：應驗以賽亞書六十至六十二章中外邦人把財富帶到錫安的末世論預言，標誌著「萬民朝聖的末世聚集」已在基督裡開始成就。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、Maranatha（主必要來）的早期教會背景</h4>
              <p className="text-gray-700 leading-relaxed">
                「Maranatha」是哥林多前書十六章22節出現的亞蘭文詞語，在新約中保留原文，不加翻譯——正如「哈利路亞」（Hallelujah）和「阿們」（Amen）一樣，這暗示它是早期教會廣泛使用的禮儀用語。根據《十二使徒遺訓》（Didache，約主後80-120年）的聖餐禱告文，這句話是在聖餐結束時的呼召：「願你的恩典降臨，願這世界過去！……Maranatha！阿們。」這說明Maranatha不只是一句個人的祈禱，而是整個早期教會崇拜的核心宣告——信徒聚集的動力和終極的盼望。保羅在書信末尾以亞蘭文寫下這個詞，一方面連結到耶路撒冷使徒群體的傳統，另一方面也提醒哥林多信徒：他們在聚集中所等候的主，才是教會存在的最終依據。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、保羅的宣教團隊模式與現代宣教學</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書十六章揭示了保羅宣教工作中豐富的「同工網絡」：提摩太、亞波羅、司提反、百基拉和亞居拉……宣教學家Roland Allen在其開創性著作《保羅的宣教方法》（Missionary Methods: St. Paul's or Ours?）中，深入分析了保羅的宣教模式，並指出現代宣教機構往往忽視了保羅模式的幾個核心特徵：（1）建立本地領袖而非依賴外來傳教士；（2）宣教士本身也是團隊成員，而非獨立操作；（3）儘早讓本地教會自立、自養、自傳。Allen認為，現代宣教失敗的主要原因之一，是「傳教士主義」（missionism）——宣教士取代了本地教會的功能，而非裝備本地信徒，這正是保羅在哥林多前書十六章所示範的模式的反面。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、哥林多前書的整體神學：以愛建造教會</h4>
              <p className="text-gray-700 leading-relaxed">
                縱觀哥林多前書的整體結構，可以看到一個連貫的神學主題：「以十字架的愛建造教會」。第一至四章確立了十字架智慧的基礎；第五至十章處理各種使教會分裂的倫理和文化衝突；第十一至十四章討論教會崇拜中的秩序問題；第十五章以復活的盼望提供整個信仰的終極基礎；第十六章以具體的愛的行動（捐款、探訪、問安）收尾。保羅神學的核心不是一套純理論，而是在群體生活中活出「十字架的愛」——這正是《十架牧養學》書名所指的核心關懷。哥林多教會的問題千頭萬緒，但歸結起來只有一個：他們沒有讓十字架的愛塑造他們的群體生活，而保羅整封書信的目的，就是要把他們拉回到這個核心。
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
              <p className="text-gray-700">保羅說慈善奉獻必須「有計劃」而非「現湊」。你目前在奉獻上是有計劃的嗎？若沒有，是什麼阻礙你建立一個有規律的奉獻習慣？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說「若主許可」才實行他的計畫。你在做生活或事奉計畫時，如何保持「計劃的認真」和「對神引領的開放」之間的平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅在以弗所看到「福音的門大開，反對的人也多」，仍然決定留下來。你是否曾面對「機會大但阻力也大」的處境？你如何辨別這是神開的門還是需要放棄的挑戰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅和亞波羅之間沒有「搶地盤」的嫉妒，而是彼此成全。在你的事奉關係中，是否有人是你不自覺地視為「競爭者」而非「同工」的？這種關係如何轉化？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅要哥林多信徒敬重和順服那些在他們中間「為主而勞苦的人」。你對你所在教會的傳道人或事奉者的態度如何？有沒有你可以改進的地方？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">保羅說「如果有人不愛主，他就該受咒詛。主啊，願你來！」這是一句嚴厲的話。回顧你讀完整本哥林多前書後，作者指出哥林多信徒最基本的問題是「沒有充分掌握耶穌基督和祂救恩的寶貴」。你認為這個診斷是否也適用於你？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">作者說「有愛心的人並不會護短，也不會因為他所愛的人有缺點，而失去愛心」。在你最親近的關係（家庭、教會小組、同工關係）中，有沒有因為對方的缺點或失望而讓你的愛變得冷淡？保羅在這章的結語如何勉勵你？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">8.</span>
              <p className="text-gray-700">讀完整本《十架牧養學：從哥林多前書學習教會建造》，對你個人信仰生活和對教會的看法，有什麼最大的改變或衝擊？有什麼是你願意帶著走的？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立有計劃的奉獻習慣</h4>
              <p className="text-gray-700 mb-2">保羅教導慈善行動需要有計劃，而非臨時現湊。這個月做一個具體的奉獻計劃：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>計算你上個月的收入，決定一個你願意固定奉獻的比例或金額</li>
                <li>除了教會的定期奉獻，額外確定一個「慈善行動」目標——可以是支持宣教士、捐助貧困地區的教會、或幫助你認識的有需要的人</li>
                <li>設立一個「奉獻預算」，記錄在你的財務管理中，讓奉獻成為一種習慣而非衝動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 成為一位扶持年輕同工的「保羅」</h4>
              <p className="text-gray-700 mb-2">保羅主動為年輕的提摩太鋪路，保護他不受傷害。在你的教會或小組中，找一位比你年輕、剛開始事奉或信仰尚在成長的弟兄姊妹：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動表示願意與他/她一起禱告或分享，了解他/她在事奉中面對的挑戰</li>
                <li>在適當的場合，公開為他/她說一句鼓勵和肯定的話</li>
                <li>承諾在接下來的一至兩個月內，定期與他/她保持聯繫，成為一個穩定的支持者</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 以Maranatha的眼光重整生活優先次序</h4>
              <p className="text-gray-700 mb-2">「主必要來」不只是一句禱告，而是塑造生活的世界觀。在下週的某一天，以「主再來」為濾鏡，重新評估你的生活：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>如果主今天再來，你最希望祂看到你正在做的一件事是什麼？</li>
                <li>如果主今天再來，你最不希望祂看到你正在做的一件事是什麼？</li>
                <li>根據這個反思，做出一個具體的調整：增加一件「值得主再來時看見」的事，減少一件「不值得主再來時看見」的事</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 哥林多前書全書的個人回顧</h4>
              <p className="text-gray-700 mb-2">完成這本書的閱讀是一個重要的里程碑。花時間做一個全書的個人回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回顧你在各章節中最深刻的一個「省思與應用」，寫下它如何改變了你對教會或信仰的某一個觀點</li>
                <li>想一想：在這本書討論的所有議題中（分裂、性倫理、訴訟、飲食、恩賜、復活……），哪一個最直接挑戰你的生命？你決定如何回應？</li>
                <li>與小組分享你從這本書學到的最重要一課，讓你的學習成為群體的祝福</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 全書結束禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                主耶穌，感謝祢透過哥林多前書，讓我看見一個真實的教會——充滿問題、衝突和軟弱，卻依然是祢所愛的群體。感謝祢差遣保羅，用充滿十字架智慧的話語，帶領他們回到祢的面前。讀完這本書，我看見自己在哥林多信徒身上的影子——我也會自私、也會驕傲、也會把自己的益處放在他人之上。求祢繼續在我裡面動工，讓我成為一個真正「以十字架的愛建造教會」的人。讓我學習保羅的心腸：看見人的缺點，卻仍然愛他們；清楚指出問題，卻仍然心存盼望。願我所在的教會，因著我的存在，能多一分合一、多一分愛心、多一分對祢再來的期盼。主啊，願祢來！Maranatha！阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
