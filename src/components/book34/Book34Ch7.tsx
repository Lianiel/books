import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch7() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第三篇　與人分離</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們如何發展界限</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、我們如何發展界限</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                真愛來尋求醫治，因為她感到「恐慌來襲」。她丈夫酗酒，引起家中的問題。她試著成為有慈愛肯支持的妻子，卻沒有改善情況，反而愈來愈糟。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她讀了一些有關如何設定界限的書，以及如何不使自己成為促成別人虐待的人。她明白自己必須對丈夫不當的行為說不，有時候當他狂鬧時，必須離開他，不管他。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而當她限定丈夫的行為時，她感到極度的恐慌。她覺得自己好像掉到一個洞裡。她戰驚害怕。她覺得可怕的孤單要把她吞吃了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當她越瞭解自己，她發現自己裡面的相連感不夠好。她的內在很孤立，當人不在她身邊，她沒有能力在情緒上保持與人相通。也就是我們前面提過的「情緒對象的恆常性」。真愛在所愛的人離開時，感覺極大的孤寂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當她離開丈夫，她感到恐懼。但當她不敢離開，她又加強了丈夫對她的虐待。她在兩難之間，正如許多被虐待者所在的兩種捆綁中。他們正是「沒有他活不下去，有他也活不下去」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真愛學到了一個重要的功課：先要有內在的相連感，才能設立界限。沒有相連，界限發生不了作用。那是缺乏愛的一種界限，正如地獄。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當真愛了解自己為什麼不能對丈夫的行為設定界限，她開始為自己缺乏與人依附而努力。她加入了一個支持團隊，使她建立與別人的關係，並在對丈夫的行為設定界限上給予支持。她發現可以與人分離而不孤單，而設定界限並不表示不愛對方。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真愛不再成為丈夫虐待的驅使者。以往，因為缺乏與人相連，丈夫就為所欲為。當她得到外面的支持，她可以為自己站起來，而她丈夫也被迫使去面對自己的問題。他覺悟到自己的行為造成他的孤立，並且他第一次為自己的行為所造成的後果受苦。後果是行為改變的因素。真愛以往沒有給他改變行為的機會。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                漸漸地，他不再酗酒了，他們可以解決一些問題。但若沒有支持團體的插手，幫助她建立相連感，她不可能與丈夫的行為分開。先有相連才能夠有分離。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">相連</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                相連（bonding）是成長第一個，也是最重要的階段。我們要能與別人建立關係才會存活。這也是神的形象中，關係方面的基礎。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果一個人不能依附（attach），則分離就沒有意義。我們先要成為別人的一部分，才能與人分享。依附感給我們分離的安全感和力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                恢復和好的關係，是建立與神親密的第一步。「小子們哪，我寫信給你們，因為你們的罪藉著主的名得了赦免。」（約壹二：12）第一步是饒恕，它帶來相連。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們研究一個人的發展，第一年是相連感的建立。非常少有分離在第一年發生。這也是建立愛的基礎的時候，使「愛心有根有基」（弗三：17），也讓我們在冒險嘗試分離時，有不可以缺少的安全感，除非我們有相連，我們不可能有真正的分離。

              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">漸漸分離</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                經過一年的相連和依附，分離的過程開始展開。嬰兒發展出一種奇妙的能力，稱為第二過程（secondary processes），因為是在主要過程之後發展的。主要過程是感覺和愛的發展。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二過程發展分離和身分：它們基於行動能力、語言發展、思想發展、理解因果關係、更大的行為範圍、增加的身體及情緒分離、以及「意志」的發展。這些聽起來都很好，但很奇怪許多人稱這段時間是「可怕的兩歲」（terrible twos）！我聽到一個朋友稱這段時間為「美妙的兩歲」（terrific twos），她品嚐孩子蓓蕾萌芽和分離的滋味。這真是一個新鮮的說法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當這些過程開展時，對母親和嬰兒都是很大的改變。本來幾乎是一體的，現在成為兩個分開的個體。想想神所設計的美好過程：在起初相連的階段，建立信任與關係，從信任建立不至令人害怕的分離。這也是新約中主僕的相連關係。因為我們對神的愛，祂給我們分離的自由，但我們寧願受愛的約束。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當愛在母子間建立，孩子逐漸形成分離的意識。他慢慢理解自己的界限，並與母親分離。他開始瞭解誰是我，誰是母親。當嬰兒有行動能力，他開始走離母親。他開始學習有自己的生活，雖然是小小的一部分。他開始探索周圍的世界。他越有行動能力，他越能自由地離開母親。分離不再只有母親可以主動，孩子可以照自己的願望主動分離。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他思想的容量增加，他可以與世界有更好的交涉，甚至可以叫出事物的名字。他開始使喚，並按照目的使用東西。他可以講說事物，要求事物，得不到就大叫。他學習思想並講說一個分離於母親的世界。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同時，他學習在其他方面與母親分離。他學習到有時候走路跌倒，是自己行動的後果，不是母親使他如此。當他跌倒或有新發現，他感覺跌倒的痛苦和發現的喜悅。當母親與他分享這些經驗，他學習重視，並擁有這些成為自己的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同樣的，他學習到他有能力做事。這是達到目標和培養能力的開始。此外，他也學習到他的能力有限，需要幫助。界限的重要，在於完成一件事的得意洋洋及成就感，是出於自己的行為及後果。他需要學習什麼是被允許的界限，而他的能力會帶來什麼後果。他慢慢學習與外界合作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這孩子學到他可以想要一些東西，並經由自己的努力，或別人的幫助獲得它。但他不會得到他想要的每一件東西。對慾望的內在界限就形成了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他理解到他需要為自己的選擇負責。如果他選擇打妹妹，會有後果。如果他選擇在街上遊蕩，也會有後果。（這裡所討論的是分離的過程，而非管教，因此我不討論每種行為的後果。）如果他走到窗邊，他會經驗到好的後果就是看到美麗的花。他發現因果定律：「我選擇行動，它會帶來快樂。」但同時選擇也帶來痛苦。「當我選擇去碰暖爐，它會使我痛。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                經過每一次的行動、感覺、和選擇，這孩子越來越瞭解，是他，不是他母親，要為一切負責。他也學到自己的想法和感覺不一定和母親一樣。他覺得在沙坑多玩一會是個好主意，母親卻覺得應該睡午覺了。他也許不想洗澡，但母親要他洗。如果他被允許有自己的想法和期望，但不一定樣樣都依他，他會學習對自己的想法、感覺、和選擇負責，不至失去控制。這是一種很微妙的平衡，一方面被允許做全部的自己，一方面又不以自我為中心。
              </p>
              <p className="text-gray-700 leading-relaxed">
                界限發展不好會產生兩種極端。有些人的界限不清楚，是因為他們不被允許擁有自己的感覺、思想、和行為，因此他們也不擁有自我。他們以後也不知如何處理這些問題；他們沒有藍圖。另一些人在感覺、思想、和行為上的限制太少，他們會以為自己是唯一重要的。這兩種人以後會成為過分負責和過分不負責的人。（常常這兩種人找到彼此而結了婚！）
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">增加分離</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從第二年開始，相連和分離必須攜手合作。到了四、五歲，分離會增多，越來越多人會進入他的世界。他們學習可以和兩個人相處，而不是只能和一個人。他們有玩伴和幼兒園的同學，以及越來越多的經歷。他們主要依附之外的世界在增大，他們可以忍受二十分鐘以上的分離。他們可以花半天在幼兒園，並樂在其中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當能力、思想、行為、和感覺逐漸發展，分離延伸到學校的世界。在他們界限裡面，他們擁有越多的東西，他們的責任就越大。以後，他們離開家上大學或工作。上大學的人也終究會離開學校的安全堡壘，進入真實的世界。他們一直都要學習維持人際關係，但又增加與相連者之間分離的能力。這能使他們過一個豐富、有生產力的生活，並做一個與人有關係的人。經由平衡的相連與分離，愛能發揮作用，工作也有效果。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、界限設定的失敗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                所有權在建立界限上極為重要。一方面，當人不被允許擁有自己的思想、感覺、態度、行為、慾望、和選擇時，他們無法建立真正的責任感。他們在相連和分離上，會一再產生衝突。他們不知道如何擁有人際關係，同時又可以分離。他們不知道每個人要為自己界限內的東西負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一方面，當有人擁有別人的思想、感覺、態度、行為、慾望、和選擇時，他們把界限擴展得太遠了，侵犯到別人的領土。這正是珊蒂和她母親的情形，珊蒂的時間屬於珊蒂，她母親的時間屬於她母親。然而珊蒂從來沒去學習限制母親。許多年來，她讓母親以為她擁有珊蒂的時間。珊蒂的內心並沒有自由，她覺得被強迫要給母親時間。而母親覺得她本來就擁有珊蒂的時間——她的生命。想控制別人的生命，不讓他們分離，是很嚴重的關係毀壞者。這是造成親子關係有掙扎，友誼、婚姻破裂、工作衝突、與神掙扎的原因。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在墮落之後，我們的界限被摧毀了。我們失去恩典，也失去分辨誰擁有什麼的真理。亞當說那是女人的錯，不是他的。她「導致」他犯罪。夏娃說是蛇的錯，是牠使她做的。他們不承認他們自己的慾望、態度和行為驅使他們作出選擇。他們沒有為自己負責。他們想吃果子然後變得像神。他們想要什麼就有什麼，他們認為神不知道什麼對他們最好。他們選擇越過界限。而神要他們為所選擇的負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                墮落之後我們都有一種困難，就是不要我們所擁有的，而去要屬於別人的。珊蒂的母親不想負責去養大一個終究會離開的女兒。她不想為自己的失望負責。正如一個兩歲的孩子，必須對付因不能遲睡而產生的失望一樣。珊蒂的母親試圖擁有不屬於她的，像是珊蒂的時間和生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                父母，孩子，朋友和配偶，常常不能解決這些問題。人際關係中至少有兩個人的意志，要繼續有愛和責任感，必須有寬容。我看過一張車後貼紙這樣寫著：「如果你愛一個人，釋放他的自由。如果他真愛你，他會回來。如果不回來，逮住把他殺了。」我們都在某種程度上感覺如此。我們希望我們所愛的人自己選擇，但這些選擇又會限制我們。當我們被限制，我們不想負責地處理限制，我們寧願抱怨。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果珊蒂選擇和朋友共度假期，她母親必須選擇處理她的願望受限。健康的作法是，為願望落空難過，但尋找別的方法過節得到滿足。然而她卻責怪珊蒂，自己扮演受害者，聲稱女兒破壞了她的假期。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                說愛一個人很容易，卻很難讓對方有自由。當別人不照我們的意思去行，我們就「逮到他把他殺了」。我們繃臉，憤怒地哭叫，發出令人有罪惡感的訊息，並企圖控制別人。這種行為扼殺自由意志，最後會扼殺愛。沒有自由，愛就不能存在。而沒有責任就沒有自由。我們必須對我們所擁有的負責，這包括我們的失望，就如別人不照我們的意思行事。我們所愛的人運用他們的自由意志而令我們失望，這是我們的責任，我們要去處理。這是使愛存活的唯一辦法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                即使當別人的自由使他們得罪我們，去處理痛苦仍然是我們的責任。如果我們不處理受傷之處，停留在怨恨當中，我們就無力對付罪。這種受害者的心態，使許多人走不出他們的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真愛的丈夫得罪她，他酗酒而使家庭受損。這是他的罪，真愛的痛苦是他的錯。但真愛要對自己的痛苦負責，她做得好極了。她說：「我無法控制他的行為，但這事對我和家庭的影響，我可以控制。我擁有的痛苦使我有動力改變對待他的方式。這樣我可以使他的影響限制到最小。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她面對受傷和憤怒。當她覺得孤立，她負起責任處理。她這樣做之後，就不再生活在他的權勢和控制下。她從支持團體尋得快樂，是與他無關的。由於她為自己的痛苦負責，她找到了自由。附帶的好處是她丈夫的行為有改善。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人不為自己的生命負責。（我被車撞不是我的錯，但學習以後怎麼走路卻是我的責任，沒有人可以替我做，只可能幫助我。我必須為受傷的腿負責，去練習走路。）他們走不出來，因為他們要別人改變。他們要別人變得更好，而通常別人不會。結果他們就受到別人的捆綁。得自由來自負責任，受捆綁來自放棄責任。許多酗酒者的配偶不像真愛，他們繼續責怪別人，這是無力感的緣由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我記得一位婦人，她丈夫突然離開她，留給她四個兒女去照顧。丈夫所作的是很糟糕，她有所有的理由覺得背叛、生氣、被棄、沮喪、招架不住。只要她表達「看看他對我做的是什麼事」，事情就沒有進展。當別人得罪我們，這是很自然的反應。但這應該慢慢轉變，我們要去擁有這個情況，並對因失去而有的痛苦負責。但這並沒有發生。她聽不進建議，對丈夫離去的情況不採取任何行動使自己脫難。她對我的建議生氣，就是她有選擇權來幫助自己。她只想做一件事，就是抱怨他造成這個情況。很長一段時間，她就是抱怨，並不再來治療。很久以後，我聽到她還在抱怨——過得很悽慘。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她和別人所遭遇的情形相似，但結果卻不同。別人也經過抱怨，那是必須的。饒恕的過程之一，就是稱罪為罪。我們須承認被得罪，然後才能去饒恕。然而經過一段適當期間的歸咎，我們必須開始為別人得罪我們所造成的混亂負責。我們的情況是我們的一部分，我們必須有我們的感覺、態度、行為，並為其負責，才能走出這個情況，雖然我們並沒有造成這個情況。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                芭比的丈夫離開她和秘書走了。她有三個幼兒卻沒有贍養費，也沒有謀生的技能。他從離婚實質上偷取了一切。她真正是受害被虐待了。她盡力挽回，卻沒有用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當婚姻突然結束，她完全被毀了。二十年的婚姻，毀於一夕，芭比陷於貧困之中。她二十年沒進學校，大部分時間擔任義工。她的沮喪很嚴重，經濟情況更糟。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但當她認知事實，她開始為自己負責。她走出抱怨的階段，開始忙碌。她白天上班晚上上課。她聯絡教會中其他單親父母分擔重擔。她還做了一些創意性的工作，並不影響和孩子的共處。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了頗長一段時間，她完成學業，經濟好轉。她建立了新的友誼與支持。她參加離婚研習會，處理痛苦的情緒。她學到自己為什麼會選擇這一型的丈夫，以及她為何慢慢讓丈夫孤立她，以致她有無力感。
              </p>
              <p className="text-gray-700 leading-relaxed">
                簡言之，雖然離婚被棄不是她的錯，她為自己的情況負責。她擁有自己界限內的事。她為自己的感覺、態度、行為負責並發展它們。她追求一些願望，做負責的選擇，帶給她及兒女更大的快樂。她孤單的時候，她為自己建立支持和友誼，重新建立信任別人的能力。從這一切中，她發現神照著祂的應許，信實地扶持了她。
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
                '界限的發展必須先有相連才能有分離——真愛因缺乏內在的相連感，一設定界限就陷入極度恐慌；她先透過支持團體建立相連感，才真正能對丈夫的行為設定界限，脫離「沒有他活不下去，有他也活不下去」的捆綁。',
                '健康的界限發展有其發展心理學脈絡：第一年建立相連與信任的根基，第二年起（「可怕的兩歲」）孩子逐漸發展出行動、語言、思想能力，開始學習「我」與「母親」是分開的個體，並為自己的選擇與後果負責。',
                '界限發展不好會產生兩種極端：一種是不被允許擁有自己的感覺思想行為，因而界限模糊、過分不負責任；另一種是被允許的限制太少，以為自己是唯一重要的、過分負責（想控制他人）——這兩種人常常彼此吸引而結合。',
                '墮落使人類失去了「分辨誰擁有什麼」的能力，亞當夏娃互相推諉罪責就是最早的例子；珊蒂與母親的糾纏，正是「擁有不屬於自己的東西（他人的時間與人生）」的典型例子，最終摧毀的是關係本身。',
                '真正的自由來自負責任，捆綁來自放棄責任：真愛與芭比都經歷了被丈夫傷害的痛苦，但她們選擇為自己的痛苦、感覺、選擇負責，而非停留在受害者心態中一味抱怨，最終都重新找回了生活的力量與自由。',
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
              <h4 className="font-semibold text-gray-800 mb-2">瑪格麗特·馬勒的「分離—個體化」理論</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對「漸漸分離」階段的描述，直接呼應心理學家瑪格麗特·馬勒（Margaret Mahler）著名的「分離—個體化」（Separation-Individuation）發展理論：嬰兒從與母親近乎共生的一體狀態，經過「孵化」「實踐」「和解」等階段，逐漸發展出獨立的自我感，同時保有與母親的情感連結。作者把這套發展心理學架構直接應用在屬靈成長上，說明「相連」與「分離」不是互斥的兩極，而是同一個成熟歷程的兩個必要階段，缺一不可。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為何「先相連才能分離」對受虐者特別關鍵</h4>
              <p className="text-gray-700 leading-relaxed">
                真愛的案例揭示了一個對家暴/受虐者輔導極重要的原則：許多輔導直接教導受害者「設立界限、拒絕虐待」，卻忽略了如果當事人內在缺乏足夠的相連感（沒有「情緒對象的恆常性」），單獨的人離開施虐者時會經歷等同於「失去唯一依附對象」的原始恐慌，這解釋了許多受虐者「明知該離開卻離不開」的心理機制。真正有效的介入，往往需要先協助當事人在支持團體或其他關係中建立足夠的相連感，界限的設立才會穩固、可持續。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">受害者心態與負責任之間的張力</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對真愛與芭比的描述特別小心地區分「這不是你的錯」與「這是你的責任」：她們所受的傷害（丈夫酗酒、丈夫外遇拋家棄子）確實不是她們造成的，但如何回應這個處境、如何處理自己的痛苦，卻是她們自己要承擔的責任。這個區分避免了兩種常見的偏差——一種是苛責受害者「都是你的錯」，另一種是讓受害者永遠停留在「都是他的錯」的無力感中。健康的路徑是承認傷害的真實性，同時仍然選擇為自己的復原負起責任。
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
              '你有沒有經歷過像真愛一樣，一想到要對某人設立界限，就湧起強烈的恐慌或孤單感？你覺得背後缺乏的相連感可能來自哪裡？',
              '回想你自己（或觀察孩子）「漸漸分離」的過程，你覺得自己在哪個階段的發展比較不完整（信任的建立、行動的自由、對後果負責、對慾望的內在界限）？',
              '你比較容易落入「界限發展不好」的哪一種極端——過分不負責任（界限模糊、任人擺佈），還是過分負責任（想控制別人的人生）？',
              '你有沒有像珊蒂母親一樣，把不屬於自己的東西（如別人的時間、選擇、人生）當成自己理所當然擁有的？',
              '面對別人得罪你所帶來的痛苦，你目前是停留在「抱怨、要求對方改變」的階段，還是已經開始「為自己的痛苦與復原負責」？',
              '真愛和芭比都在支持團體中找到重新站起來的力量。你目前有沒有這樣一個群體？如果沒有，這一週可以怎麼開始尋找？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔗 檢查你的「相連存款」</h4>
              <p className="text-gray-700 mb-2">
                在設立一個困難的界限之前，先問自己：我目前有沒有足夠的相連關係，可以在設界限的過程中支撐我？如果不夠，這週先花時間建立或加深一段支持性的關係。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📋 分辨「我的」與「不是我的」</h4>
              <p className="text-gray-700 mb-2">
                寫下一段目前讓你困擾的關係，逐項列出：這其中哪些是我該負責的（我的感覺、選擇、行為），哪些是對方該負責的（他的情緒、反應、選擇）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🚶 練習「為自己的復原負責」</h4>
              <p className="text-gray-700 mb-2">
                如果你正處在被別人傷害的痛苦中，效法芭比的作法：先允許自己經歷合理的哀傷與憤怒，然後主動踏出具體一步（學習新技能、加入支持團體、尋求輔導）來為自己的復原負責。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢按著祢的智慧，讓相連與分離在成長中攜手同行。求祢光照我界限發展不完整的地方——不論是過分負責，還是過分不負責。求祢賜我勇氣，先在祢與弟兄姊妹中間建立足夠的相連，好讓我能穩固地設立界限，而不被恐慌吞沒。也求祢幫助我，在受傷之後，不長久停留在抱怨與無力感中，而是願意為自己的復原負起責任，經歷祢信實的扶持。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
