import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">當我們沒有界限</h2>
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

            <p className="text-gray-700 leading-relaxed">
              許多問題的產生，都由於我們沒有設定好的界限，並維持這個界限。如果我們不清楚我們要對什麼負責，不該對什麼負責，就會產生以下的症狀。症狀是把問題表明出來的。從來沒有一個人到我辦公室說：「克勞德博士，我不知道怎麼設定界限，請幫助我。」但人們常因以下的症狀來求助，而真正的問題常在於如何設限，以及設在哪裡。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、沒有界限的症狀</h3>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">沮喪</span>——很多沒有界限的人會感到沮喪。因為沒有界限，他們就會被錯待，痛苦就會隨之而來。有些人是因為他們把對控制者的恨意，轉入內心。他們覺得沒有選擇，因為別人控制了他們的選擇。他們便有敵意，甚至苦毒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">恐慌</span>——忽然臨到的驚恐，強大的懼怕都是屬於此類。人之所以會恐慌，是因為無法掌握髮生在他們身上的事。他們認為他們必須做別人要求的每一件事，他們覺得失去控制。讓別人控制我們的生命和選擇，是一件可怕的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">怨恨</span>——很多人對所做之事怨恨，因為他們是出於「作難和勉強」（林後九：7）。他們常常為了符合別人的希望，做他們所不願做的事。事後他們就怨恨。殉道者——自我犧牲、受苦、引起別人同情，甚至導致別人的罪惡感——常有這種表徵。他們的付出並非真正的付出，因為有一條線綁著。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">被動的挑釁行為</span>——表現在對要求的間接抗拒。舉例來說，如果有一位婦女不得不做學校的義工，她可能說好，然後以忘記會議、擱置計劃、錯置物品作為消極的抗拒。她沒有足夠的勇氣來設定界限，並對學校說不。當我們不設限，並讓我們的「是就是是，不就是不」，我們很可能會被動地受限。很多人因為答應別人，卻不能做到，而有很大的掙扎，這就是被動的挑釁。他們說不的方法是被動的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">忽視自己</span>——這是一種學習而來的態度、感受、及行為，使人嚴重地忽視自己的健康、福祉，只為滿足別人的希望。這種人總是把別人擺在第一，甚至使自己受傷害。他們看不清楚應該為什麼負責，常常助長罪惡。這種人對界限困惑，他們為別人負責，而不能「對」別人負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">身份混淆</span>——身份來自認識我們是誰，不能對自己界限內的事務負責、與人分離的人，無法認清自己是誰，別人是誰。我們必須知道我們是誰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">獨處的困難</span>——有些人的界限不夠好，以致他不太能把自己和別人分開。他們害怕孤獨，因為他們內心沒有人。對愛的接受和給予，他們內心沒有使之滿足的結構。他們一定要和人在一起才能生存。這些人並非無法與人相連，但他們沒有一種內在的相連感。正如水倒入一個無底的杯子，他們得到越多愛，他們就更需要愛。他們無法存留。他們需要的就是——界限——來幫助他們建立內在的結構。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">被虐待狂</span>——被虐待狂是因自己或別人加在自己身體或心理上的痛苦而獲得喜樂的人。他們無法對虐待者設限。他們從痛苦羞辱中得到滿足。痛苦使他們的需要越來越大，這使得他們更難設限。他們太需要人，以致他們不能對別人設限，被虐待狂需要有支持的團體，學習對虐待者設限。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">受害者心態</span>——這種人看自己為環境或別人的受害者，他們從不為自己負責。他們會說：「我必須，我沒有選擇。」他們否認任何的責任，尤其是關於選擇。他們認為他們是沒有選擇的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">埋怨</span>——埋怨和受害者心態很像；埋怨者將責任指向別人。當然，別人是會帶給我們痛苦，但當我們落入埋怨中，我們會讓別人為我們的痛苦負責，這使我們陷在這樣的光景中。埋怨的人不會改變，因為他們對自己的態度、感覺、或行為不負責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">過分負責和罪惡感</span>——沒有清楚界限的人，會對不該負責的事覺得有責任。像是別人的感覺、失望、和行動。當他們不能達到別人的希望，他們就有罪惡感。當他們不能完成他們所以為的責任，他們就覺得自己不夠好。當他們不能使別人快樂，他們就有罪惡感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">過分不負責</span>——對別人過分負責的人，很容易忽視自己的後院。他們不擔當自己的擔子（加六：5），因為他們太忙於擔別人的擔子。他們通常不去處理自己的痛苦和生活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">勉強</span>——保羅在哥林多後書九章說道有人施捨會勉強作難，他們覺得被迫，不自由，不能控制自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">被遺棄之感</span>——由於他們很會照顧別人，他們覺得別人也該來照顧他們，而情形不如他們想像時，他們就覺得遭遺棄，他們覺得別人不夠慈愛，不夠關心。他們覺得自己是施予者，而別人是接受者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">孤立</span>——界限混淆的人，會感到沒有自由。有扭曲的思想，他們會避免人際關係，以逃避界限。對他們而言，與人親密即失去界限和自我。這令他們害怕。因此他們會選擇逃避人際關係，進入孤立的世界。一個人獨處就不會被侵略或控制。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">極端依賴</span>——從來沒有真正對自己生命負責的人，會以為他們不可能為自己負責。他們依賴別人替他們向世界交涉，他們傾向把自己和這個人融合。他們很怕分離。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">沒有秩序缺乏方向</span>——對自己缺乏清楚定義的人，常會缺乏方向和目的。他們無法選擇自己的目標、喜好、厭惡。他們很容易被別人所說的引入歧途，所以就沒有目標了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">飲食失控</span>——對生命失控的人常轉向食物、藥物、酒精以麻痺自己，或讓自己覺得還能控制一些事。尤其對厭食症或暴食症的病人，這是很真實的。界限對飲食失控者是很重要的。對沉溺於食物或酒精中的人，當界限清楚之後，他們對自己也有清楚的意識，他們就會開始自我控制。暴食症者特別要解決分離的問題。而對食物愛恨並存者，當界限清楚時，問題也得到解決。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">拖延</span>——拖延，或把不愉快的事推到將來，通常由於缺乏清楚的界限。拖延者不覺得他們真正在做選擇；他們說不，並不是真正的不。他們說好，其實是不。他們以不完成一件事，來說出他們的不。這是一種扭曲的控制慾。這是兩個兒子的比喻中的情形（太二十一：28-31）。拖延的兒子沒有誠實地表達意見。他說去卻沒有去。另一個兒子說不，後來改變心意去做工。當他說不時，他是誠實的，所以當他說好時，他也是誠實的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">衝動</span>——衝動的人常有界限的問題，他們缺乏內在的結構。他們想什麼就做什麼；他們對自己也不太能說不。當他們界限清楚，學習自制而說不，他們就能對衝動產生控制。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">焦慮</span>——有些人有一種模糊的緊張和焦慮，這和缺乏界限有關。他們內在缺乏組織，以致無法處理他們的感覺，或應付外面的要求。他們無法指出有什麼特別的衝突，但他們就是焦慮。這樣的人也許不是去解決某一個問題，而是應該建立更強的界限，以瞭解自己是誰。這樣他們會更能自我控制，有更強的能力處理感覺，結果就是更少的焦慮。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">強迫性的強制行為</span>——有強迫行為者是他心中經常有無理的想法；有強制行為者是他有無法抗拒的行動，去做無理的行為。有強迫性強制行為者，同時掙扎於持續心中的佔有物，和無法抗拒的行動。舉例而言，一個人強迫自己每小時都要洗手，就是一種強迫性的強制行為。他有一種強迫性的想法，就是自己會感冒，所以他的強制行為就是以不斷洗手來預防。設定界限是一種大膽的行為。不能設限的人，把它轉換為對自己痛苦的強制，好像非要如此他們才會安全。藉著加強設限的能力，人可以解決這種痛苦。設限使內心有組織，使我們可以對強迫行為說不。它把自制力還給人，使人不必再有強迫行為。強迫行為的本質是缺乏自由。設限及對別人說不，則會帶來自由。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、設限的阻礙</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                傷害和扭曲的思想會阻礙界限的設立。以下是一些例子。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">過去的傷害</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從一個分不清楚人我界限的世界中成長。結果就是，我們不明白我們該為什麼負責，不該為什麼負責。我們不被允許擁有自己的身體、感覺、態度、行為、思想、能力、選擇、慾望、和限度。我們受傷害，並有界限的問題，而且我們也不想為自己負責。我們天生就抗拒責任，當我們受傷害，要能負責任就更難。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當別人不讓我們為自己生命負責時，通常傷害就會產生。舉例來說，當父母不給我們選擇，而要我們為他們給的選擇負責，我們設限的能力就受傷了。正如珊蒂的母親，她干擾珊蒂設限的能力。珊蒂必須經過重新宣告自己有選擇權，並把母親的選擇和責任重還於母親的過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                每一個人都該檢視自己的界限，為什麼沒有成長。虐待、控制、罪惡感的操縱都會妨礙成長。如果我們因過去的傷害，界限無法充分發展，我們就更容易受傷害。難怪當耶穌看見群眾，「就憐憫他們，因為他們困苦流離，如同羊沒有牧人一般。」（太九：36）神知道我們的失落，他要重新建立我們的身份和界限，這是人類墮落後就失去的。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">扭曲的思想——我們對自己的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於受傷及墮落，我們扭曲了對神、對自己、對別人的認識。這裡有自己、別人、和神三方面的扭曲思想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我有界限，所以就很壞。」當我們理解到我們擁有自己生命的自由時，界限上最大的問題可能是罪惡感。許多人被教導以為自己是自私的、很壞的，因為他們不為別人的感覺、行為、和選擇負責。這樣的教導使忽視自己的行為繼續存在。界限有問題的人，當他們誠實面對自己的有限時，常覺得自己很壞，因為他們對別人有一種無節制的責任感。而他們缺少自由，又讓他們覺得不好，反之亦然。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我擁有自己的生活，所以我很自私。」這樣的人被告知：「如果你不把所有的給我，你就是自私。」當人很容易受控制，他們會覺得為自己做一些決定也是自私的，事實上，為自己做決定，是得以享受真愛的唯一方法，因為那時候我們才是自由的付出。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我的需要不重要。」這說法是不符合聖經的。聖經告訴我們要捨己，但唯有我們先為自己負責，才能捨己。我們必須先做自己生命的好管家，才能將生命給出去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「只有我的願望是唯一重要的。」這是另一個方向的扭曲。當我們沒有界限，我們不會把別人看為獨立於我們的人。而真正的自私是拒絕承認別人的需要和感覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我必須擁有每一件想要的東西。」這種對自己的扭曲思想十分具破壞性，因為它使我們無法自制。限制慾望使我們能施予，也能忍受被剝奪。得不到想要的東西，常常對我們是好的，這會建立界限。對孩子的需求說不，幫助他們學習自我滿足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我必須為別人負責。」這樣的想法使別人無法成熟。我們要對別人負責，而非為別人負責。我們對需要者有責任，但對可以自己負責的人，我們須要求他們自行負責。不這樣要求會使他們繼續停留在不成熟中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我必須做別人要求的每件事。」這樣的感覺來自被別人支配，這種感覺使我們不能決定給予，也使我們不能負責任。神給我們有限的資源可以給予，我們也必須有給予的意願。但我們若讓別人操縱我們的給予，我們就不是在回應神了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「什麼事不對都是我的錯。」界限有問題的人有一種過度的錯誤感。他們常覺得自己必須負責。舉例而言，若有人開車到他家，車子有一道刮痕，他們會想各種可能的關連，去使自己為此負責。他們為別人的行為責怪自己。父母也會為孩子的失敗責怪自己。他們拒絕別人可能該付的責任，使孩子變得無能。他們所表達的就是，孩子對自己的生命無力控制，因為父母控制了一切。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「沒有一件事是我的錯。」這句話表示我們對所做的事不負責任。埋怨是典型的例子，有些父母對孩子的掙扎不負任何責任，這和上述的極端同樣錯誤。這可能導致別人犯罪（太十八：6）。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">扭曲的思想——我們對別人的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「因為說不，他們會恨我。」如果別人的失望讓我們覺得有責任，我們就會害怕設限，因為我們設限時，有些事我們會做，有些事我們不做，我們就想像別人會因此拒絕我們。事實上，研究及生活經驗顯示，能說不的人是最受喜愛的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「因為有界限，人會離開我。」有時候當孩子開始有自己的生活、獨立之後，似乎得到的愛就少了。他們因此學到，只要他們為自己負責，人就會離開他們。事實上，這又是不符真理的。沒有界限的人更容易遭遺棄。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「別人要操縱我。」意志力不強的人害怕受人操縱。他們總是注意別人會如何操縱他們，而他們很怕被捲入。好的界限使人不致害怕受操縱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我若對人有要求他們會討厭我。」有些人被教導，把自己的想法直接說出來是自私的。他們學會要壓抑自己的意願，免得被討厭或被論斷。他們害怕被認為是施壓的人。然而相反的是，直截了當的人有最清楚最好的人際關係。對被動的人，我們很難覺得親密，因為我們老是要猜他們要什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果我不讓他們快樂，他們會離開我。」人若以為自己須對別人的感覺負責，當別人不快樂，就會害怕他離開自己而去。他們也許真的因此失去過一些人，但因此做成一般性的結論，則是不對的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「別人應為我負責。」就像別人這麼想一樣，我們也常這樣越界。我們有傾向讓別人為我們的感覺、態度、選擇負責，而不視他人為自由人，有他們自己的生活。「如果人不照我所想的去做，他們就是自私的。」我們很難理解，我們是如何將我們的越界，投射在別人身上。我們因他們的自由而論斷他們，我們因他們說不而恨惡他們。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果別人對我說不，他們是沒有恩慈的。」通常我們將別人說不視為拒絕，而感到不被愛。這是對他們的扭曲，並缺乏尊重別人選擇以何種方式愛我們。當他們有界限時，我們有視他們為殘酷的傾向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「別人期望我符合他們的希望。」通常我們不理解，一般人給我們很大的自由去擁有自己的生活。如果我們在一個受控制的環境裡長大，我們不會期望別人給我們個人自由。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「別人應為我的行為負責。」如果過去有人在為我們負責，我們就會繼續認為別人該為我們的行為和後果負責。因此我們就不會理解因果律，一直會希望被保釋出去。一位祕書桌上有一個牌子寫著：「你那方面拙劣的計劃，並不構成我這方面的急件。」重點就是，她並不需要為別人的行為負責。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">扭曲的思想——我們對神的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神不要我們擁有自己的生活。」很多有界限問題的人，認為神要我們捨己並委身於祂，就是我們對自己的生活無擁有權。這是不對的，我們必須先擁有，才能給。否則，它並不屬於我們。聖經及我們的經驗告訴我們，我們必須理解以上的要素，我們才是一個自由委身於神的人，並成為一個有束縛的僕人，也就是神的奴僕，我們才能自願地讓主人使喚。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神要與我們建立關係，而關係需要兩個自由的人才能建立。耶穌在客西馬尼，把自己交在天父手中，順服祂的旨意時，耶穌明確知道自己的願望。「讓這杯離開我」表達了他的心，但他終究順服神。他擁有自己的願望並表達出來。聖經中的偉人像約伯、大衛、保羅，都有像這樣與神的關係。他們自由地向神表達心願。神要我們做真實的人並擁有我們自己，只有在這時候，我們可以自由地選擇給出去並捨己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">「神不要我們擁有任何一點自己。」界限有問題的人，對擁有願望和喜好覺得罪惡。聖經中充滿神要我們求，以致他可以賜福給我們，並與人分享的例子。有人覺得我們的期望達成時，神是在那裡皺眉頭。其實這正與神希望的相反。他要祝福我們，但他要我們視他為祝福的來源：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你要囑咐那些今世富足的人，不要自高，也不要倚靠無定的錢財，只要倚靠那厚賜百物給我們享受的神。又要囑咐他們行善，在好事上富足，甘心施捨，樂意供給人。」（提前六：17-18）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                神厚賜百物給我們享用，並要我們與人分享。苦行僧式的罪惡感是不符合聖經的。這是對這位賜福之神的扭曲思想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神要我擁有任何我想要的東西。」另一些人以為神的給予是沒有限制的。這也是同樣不符合聖經。神常常說不，他也不欠我們任何解釋，在葡萄園工人的比喻中，園主有自由以他所有的去做他想要的（太二十：15）。所謂的「說出來、宣告它，就得著」的福音，使神變為我們的僕人，而拒絕承認他的界限和選擇。神常常為了我們無法明瞭的原因對我們說不；他會拒絕我們的要求，這並不表示我們的信心不夠而得不到。問問客西馬尼的耶穌吧！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「當我對別人說不，神會說我自私。」神喜悅我們分享並捨棄我們的自由，但不是出於勉強。自由施與的另一面就是，當我們選擇不給時，我們可以說不。他贊同我們的界限，因為他創造了它。因此，我們可以做一個有意識的給予者，而非唯唯諾諾的給予者。並且，當我們對不負責任的人說不時，我們是在幫助人變得成熟。保羅說：「若有人不聽從我們這信上的話，要記下他，不和他交往，叫他自覺羞愧。但不要以他為仇人，要勸他如弟兄。」（帖後三：14-15）當我們對虐待行為說不時，我們好似神的手在別人生命中做管教的工作。我們在幫助他們理解他們自己的界限。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神要我們允許別人對我們隨意而行。」這也是類似的扭曲，神多次告訴我們責備別人（太十八：15-18；利十九：17；箴二十七：5-6；弗四：25-26；林前五：9-13；加六：1；林後二：5-11；林前五：1-5）。不這樣做，是只給人恩典而無真理，會使人繼續停留於不成熟中。神對他百姓的成長非常認真，他不要我們有助於別人的不成熟。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">「神不要我追求我想要的。」許多人為自己擁有的才能和追求的目標感到罪惡。神創造我們時賦予我們才能，他要我們與他同工，以致我們的才能有最好的發揮。我們要做計劃，但永遠要警覺神可能會修改：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「人心籌算自己的道路，唯耶和華指引他的腳步。」（箴十六：9）「又要以耶和華為樂，他就將你心裡所求的賜給你。當將你的事交託給耶和華，並依靠他，他就必成全。他要使你的公義，如光發出，使你的公平，明如正午。」（詩三十七：4-6）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神有絕對的主權控制；因此我沒有責任。」這個界限問題使我們否認自己的所有權。神給我們許多自由和責任來管理我們的生活，他甚至限制自己的界限，以致我們有我們的意志和選擇。他並沒有創造一些機器人能服從他所有的命令。我們對我們的選擇和意志負責。因為有一天我們要交帳。因此，我們其實有許多對自己生命有所主張的機會。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">「神是不干涉的神，他並不參與我的生命。」這種界限的問題否認神對我們的所有權。神其實對我們的成長非常主動參與。神和我們對成長都有責任：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「就當恐懼戰兢，做成你們得救的功夫。因為你們立志行事，都是神在你們心裡執行，為要成就他的美意。」（腓二：12-13）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們是與神同工的。「如果神對我說不，他就是不愛我。」神有自由為了他的目的，也為了我們，限制他自己不給我們一些東西，神說不並不是不愛我們。有時候他讓我們經由自己的努力去獲得醫治，而非由他替我們做成一切。舉例而言，如果我的沮喪是因不能與人相連而起的，神可能對我的禱告說不，他讓我們像約伯一樣，必須完全依靠神的「不」，以及他的時機。這並不是表示他不愛我們，可能他要給我們更好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神是饒恕的神，他不會因我的罪管教我。」這種說法否定神的界限，讓他不會允許罪惡掌權。他要潔淨他的居所，既然他邀請我們與他同住，他要我們把鞋脫下。他會為了我們的好處管教我們。他對我們的成熟非常有興趣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「神只有限制沒有愛。」神有極多的憐憫與恩慈，我們必須讓神是神，把他視為只有管教而沒有愛，是否認他的性情（詩一〇三篇）。
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
                '沒有界限會顯現為二十多種表面症狀（沮喪、恐慌、怨恨、被動挑釁、忽視自己、身份混淆、獨處困難、受害者心態、埋怨、過分負責/不負責、拖延、衝動、焦慮、強迫行為等），求助者很少會直接說「我不會設界限」，輔導者需要看穿症狀背後真正的界限問題。',
                '「過去的傷害」是設限阻礙的根源之一：當我們在成長過程中不被允許擁有自己的身體、感覺、態度、選擇，設限的能力就被剝奪了，這種傷害需要在新的、安全的關係中被重新修復。',
                '扭曲的思想分為對自己、對別人、對神三個層面，且常常呈現兩極對立的錯誤（如「我有界限所以很壞」與「只有我的願望重要」；「什麼都是我的錯」與「沒有一件事是我的錯」），健康的界限位於兩極之間。',
                '許多人對神的界限有嚴重的誤解——以為神要我們完全沒有自己的生活、或神的給予毫無限制、或神說不就是不愛我們——但聖經顯明神本身有清楚的界限與選擇的自由，而祂正是照著自己的形像造了同樣需要界限的我們。',
                '強迫性的強制行為（如反覆洗手）本質上是缺乏界限、缺乏自由的表現：設限能為內心帶來組織與秩序，把自制力還給人，這正是通往真自由的道路。',
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
              <h4 className="font-semibold text-gray-800 mb-2">症狀清單作為輔導評估工具</h4>
              <p className="text-gray-700 leading-relaxed">
                本章列出的二十多項症狀，實際上可以作為一份簡易的自我評估或輔導初診清單使用。作者特別提醒：沒有人會直接說「我的問題是不會設界限」，而是帶著沮喪、焦慮、飲食失控等表面症狀求助。這提醒助人者（無論是輔導員、小組長或朋友）在陪伴一個人處理情緒困擾時，除了處理當下的症狀，也要留意背後是否有界限缺失的根本問題，才能真正對症下藥，而不只是消除表面的不適。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">兩極化的扭曲思想與「中道」智慧</h4>
              <p className="text-gray-700 leading-relaxed">
                本章刻意並列許多對立的扭曲信念（過分負責 vs. 過分不負責、什麼都是我的錯 vs. 什麼都不是我的錯），這種結構本身就在教導一個重要的智慧原則：許多屬靈與心理問題不是單純「做得不夠」或「做得太過」，而是失去了平衡點。健康的界限不是一種固定的規則清單，而是一種持續在「過猶不及」之間校準的智慧，如同羅馬書十二章3節所說「看得合乎中道」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">關於神的扭曲圖像如何塑造我們的界限能力</h4>
              <p className="text-gray-700 leading-relaxed">
                本章用相當長的篇幅處理「對神的扭曲看法」，這反映作者一貫的洞見：我們對權威人物（尤其父母）的經驗，會直接投射成我們對神的想像，進而影響我們敢不敢在神面前擁有自己的界限。一個從小被教導「有需要就是自私」的人，很難相信神樂意賜福給求告祂的人（提前六：17-18）；一個父母情緒不穩定、動輒生氣的人，很難不把神也想像成一位隨時會發怒的神。醫治界限，往往需要同時醫治我們對神扭曲的圖像。
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
              '本章列出的二十多種症狀中，哪幾項最貼近你目前的生活狀態？',
              '你有沒有發現自己對神也存在某種扭曲的圖像（如覺得神在皺眉頭、神的愛是有條件的、對神說不會有罪惡感）？這個圖像可能源自哪段成長經驗？',
              '你比較容易落入「過分負責」還是「過分不負責」的界限問題？具體舉一個最近的例子。',
              '你有沒有經歷過「拖延」或「被動的挑釁行為」——表面說好，實際上用行動說不？背後真正想拒絕卻不敢說出口的是什麼？',
              '重讀本章「我們對自己的看法」中列出的扭曲信念，哪一句最像是你內心真實的聲音？',
              '如果神此刻要糾正你對祂界限的一個誤解，你覺得會是哪一個？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 對照症狀清單自我檢視</h4>
              <p className="text-gray-700 mb-2">
                重讀本章列出的二十多項症狀，圈出你目前正在經歷的幾項，然後追問自己：這些症狀背後，我在哪個界限層面（身體、感覺、態度、行為、思想、能力、選擇、慾望）沒有負起責任？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你對神的圖像</h4>
              <p className="text-gray-700 mb-2">
                誠實寫下你內心深處覺得神是什麼樣子的（嚴厲的、疏離的、隨時生氣的、慈愛的……），然後對照本章列出的扭曲思想，找出哪些需要被真理更新。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 找人核對你的扭曲思想</h4>
              <p className="text-gray-700 mb-2">
                找一位信任的人，分享你發現的一個扭曲信念（對自己、對別人、或對神的），請他誠實地告訴你，從他的角度看，這個信念是否符合事實。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我因為沒有界限而產生的種種症狀——不論是沮喪、焦慮、埋怨，還是過分負責或不負責。求祢也光照我對祢、對自己、對別人扭曲的想法，用祢的真理更新我心中的謊言。幫助我明白，祢不是那位皺著眉頭、隨意限制我的神，而是樂意賜福、也樂意與我建立真實關係的神。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
