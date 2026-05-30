import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">建造堅固防線</h2>
        <p className="text-sm text-gray-500 mt-2">第二部分：認識撒但的弱點</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">全副軍裝：防禦性爭戰的基礎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書6:10-18是新約中關於屬靈爭戰最完整的教導。在這段經文中，保羅描述了神賜給信徒的全副軍裝，使他們能夠「站立得住」（第11、13、14節中重複三次）面對撒但的一切計謀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「全副軍裝」（panoplia）這個詞在希臘文中指一名重裝步兵的完整裝備，包括進攻性和防禦性武器。保羅用羅馬士兵的裝備作比喻，描述信徒的屬靈裝備。重要的是，這副軍裝不是我們自己製造的，而是神賜給我們的——「穿上神所賜的全副軍裝」（第11節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                清教徒威廉·古諾爾（William Gurnall）花費二十年寫作的巨著《穿戴全副軍裝的基督徒》（The Christian in Complete Armour），是教會歷史上對這段經文最深入的注釋之一。本章的許多洞見來自這部清教徒傑作。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第一件：真理的腰帶（以弗所書6:14a）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「站穩了，用真理束腰」——腰帶（或腰甲）在羅馬士兵的裝備中有雙重功能：它束緊長袍，使士兵行動自如；它也保護腹部，並承托其他武器（如劍）的重量。沒有腰帶的士兵是行動不便、容易受傷的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「真理」在這裡有雙重意義：第一是客觀的真理，即聖經的真道，是一切基督徒生命和爭戰的基礎；第二是主觀的真誠，即內心的誠實和真實——沒有虛偽，對自己、對神都誠實。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但是「謊言之父」（約翰福音8:44），他最有效的武器是謊言。真理是對抗謊言的直接武器。當撒但說「你不被愛」，真理說「神愛世人」；當他說「你的罪太大無法被赦免」，真理說「基督的血洗淨我們一切的罪」；當他說「你的信仰毫無價值」，真理說「你是神所揀選、蒙愛的兒女」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                穿上真理腰帶意味著：深深地認識聖經的真理，活在神話語的現實中，以及內心的誠實——不自欺，不欺騙神，不向謊言妥協。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第二件：公義的胸甲（以弗所書6:14b）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「並穿上公義的護心鏡」——胸甲保護心臟和其他重要器官，是最關鍵的防禦裝備之一。「公義」在這裡同樣有雙重層面：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>稱義之義</strong>：神在基督裡賜給我們的公義地位。撒但最愛攻擊信徒的良知和得救確據——「你沒有資格稱自己是基督徒」、「你的罪使你不再蒙神接納」。胸甲的保護是：我的義不是靠我的行為，而是基督的義歸算給我（哥林多後書5:21）。這個真理保護信徒的心，使他們的得救確據不被撒但的控告所動搖。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>成聖之義</strong>：在日常生活中追求公義，以實際的聖潔生活為武裝。一個在罪中繼續生活的信徒，是沒有穿上胸甲的士兵——在他腹部留了一個致命的漏洞給撒但。清教徒的洞見是：道德的失敗不只是靈命問題，它為撒但提供了攻擊的機會。約翰一書3:8說「犯罪的是屬魔鬼」，我們的行為與我們在哪個陣營是相關的。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第三件：平安的福音鞋（以弗所書6:15）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「又用平安的福音當作預備走路的鞋穿在腳上」——羅馬士兵穿著特殊的釘鞋（caligae），使他們在任何地形上都能穩固站立，也能快速行進。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「平安的福音」是什麼意思？首先，它是「與神和好的平安」（羅馬書5:1）——通過基督的死，我們與神的關係已被和好，我們不再在神的憤怒之下。這個平安給了我們穩固的立足點，使我們能在任何境況中站立得住。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其次，它暗示了傳福音的呼召——穿著鞋的人是準備走路的人。以弗所書2:14-17說基督「使兩下歸為一體，與神和好」，然後「傳和平的福音給你們遠處的人，也給那近處的人」。屬靈爭戰的一部分，正是主動傳揚福音，擴展神的國度，使更多人從撒但的權勢中被解救。
              </p>
              <p className="text-gray-700 leading-relaxed">
                腓立比書4:7說「神所賜出人意外的平安，必在基督耶穌裡保守你們的心懷意念」。這個平安不是沒有困難，而是在困難中的穩定和安全感——它使信徒不被恐懼或絕望所癱瘓，能夠繼續前行。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第四件：信心的盾牌（以弗所書6:16）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「此外，又拿著信德當作藤牌，可以滅盡那惡者一切的火箭」——這裡描述的是羅馬重步兵的大型長方形盾牌（scutum），約120x75厘米，可以從頭到腳保護士兵，也可以與其他士兵的盾牌連接形成「龜殼陣」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「火箭」是當時戰爭中真實使用的武器——箭頭點燃，射向敵方。在屬靈意義上，撒但的「火箭」包括：突然而來的惡念、對神性情的懷疑、恐懼和絕望的攻擊、驕傲的誘惑等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「信德（信心）當作藤牌」——信心在這裡不是對自己的信心，而是對神的信靠，對基督已成就的救贖和神話語應許的倚靠。信心的作用是「滅盡」（quench）撒但的火箭——就像浸透了水的皮革能滅絕火箭，真正的信心能使撒但的試探和謊言失去其傷害力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雅各書4:7說「你們要順服神，務要抵擋魔鬼，魔鬼就必離開你們逃跑了」。信心的抵擋不是自己的力量，而是倚靠神：「那在你們裡面的，比那在世界上的更大」（約翰一書4:4）。每次我們選擇信靠神的話語勝過撒但的謊言，就是舉起了信心的盾牌。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第五件：救恩的頭盔（以弗所書6:17a）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「並戴上救恩的頭盔」——頭盔保護最關鍵的部位：頭部，是思想和理性的所在。在屬靈意義上，救恩的頭盔保護信徒的心智，使他們的思想不被撒但的謊言所征服。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                帖撒羅尼迦前書5:8提到「得救的盼望當作頭盔」，強調了末世盼望的保護作用。知道自己是被神揀選、在基督裡有確定的救恩盼望，保護信徒的心智不被絕望、懷疑和恐懼所征服。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                清教徒特別強調「確知得救」（assurance of salvation）的重要性——一個不確定自己是否真正得救的信徒，在屬靈爭戰中是非常脆弱的，因為撒但最愛攻擊信徒的得救確據。另一方面，驕傲的「我當然得救了」也不是正確的確知，真正的確知是謙卑地倚靠基督，而非自己的功績。
              </p>
              <p className="text-gray-700 leading-relaxed">
                羅馬書8:38-39是救恩頭盔的精髓：「因為我深信無論是死，是生，是天使，是掌權的，是有能的，是現在的事，是將來的事，是高處的，是低處的，是別的受造之物，都不能叫我們與神的愛隔絕。這愛是在我們的主基督耶穌裡的。」這個確信保護我們的心智不被任何攻擊所擊倒。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">穿戴全副軍裝的整體性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                重要的是，以弗所書6:11說要穿上「全副」（complete, whole）軍裝。一個只穿了部分裝備的士兵，在未覆蓋的部位仍然是脆弱的。屬靈爭戰也是如此：一個在真理上強壯但在成聖生活上懈怠的信徒（缺乏胸甲），仍然容易受傷；一個有信心但缺乏得救確據（缺乏頭盔）的信徒，在被攻擊時容易崩潰。
              </p>
              <p className="text-gray-700 leading-relaxed">
                所有的裝備都是神賜的，但信徒的責任是「穿上」——主動地把這些真理應用在自己的生命中，在禱告和信靠中持守這些裝備。這不是一次性的行為，而是每天的功課。以弗所書6:18說「靠著聖靈，隨時多方禱告祈求」——禱告是穿戴軍裝的動力和維持。
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
              <h4 className="font-semibold text-gray-800 mb-2">威廉·古諾爾的《穿戴全副軍裝的基督徒》</h4>
              <p className="text-gray-700 leading-relaxed">
                威廉·古諾爾（William Gurnall，1617-1679）的《穿戴全副軍裝的基督徒》是清教徒文學中最偉大的作品之一。這部作品原本是他在薩福克郡拉文哈姆教堂週日的系列講道，最終成書約二百萬字，分三卷出版（1655-1662年）。該書的主題圍繞以弗所書6:10-20，深入分析每一件屬靈軍裝，配合大量的聖經引用和實際的牧養應用。查爾斯·司布真（C.H. Spurgeon）說：「如果我只能保留一本書（除聖經外），我會選擇古諾爾的《穿戴全副軍裝的基督徒》。」這本書的卓越之處在於它將神學深度與實踐智慧結合，既給信徒堅固的教義基礎，也提供真實可行的屬靈操練指導。它對今天的信徒仍然非常有價值，雖然篇幅龐大，但每一頁都充滿了洞見。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">稱義之義與成聖之義：胸甲的神學深度</h4>
              <p className="text-gray-700 leading-relaxed">
                「公義的胸甲」涉及一個改革宗神學的核心區分：稱義（justification）和成聖（sanctification）。稱義是神的法庭行動——神宣判罪人為義，因為基督的義被算在他身上（歸算之義，imputed righteousness）；成聖是神在信徒生命中持續的工作，使他的行為越來越像基督（注入之義，imparted righteousness）。對許多人而言，這兩個概念混淆了：他們要麼因為自己的行為不夠好而失去得救確據（混淆了稱義和成聖），要麼認為一旦稱義就不需要成聖（誤解了兩者的關係）。聖經的平衡是：稱義是一次性完成的，是我們得救確據的基礎，不依靠我們的表現；成聖是終生的過程，是稱義的自然結果，不是達到稱義的手段。胸甲保護信徒的心免受這兩種錯誤的傷害：既不因成聖的不完全而失去確據，也不因稱義的確據而輕忽成聖的功課。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">盾牌的「龜殼陣」：群體性的屬靈爭戰</h4>
              <p className="text-gray-700 leading-relaxed">
                羅馬步兵的一個著名戰術是「龜殼陣」（Testudo formation）——士兵們將盾牌緊密相連，頂部和四周形成一個防禦性的「殼」，使整個分隊能夠在密集箭雨下推進。這個圖像對屬靈爭戰有深刻的啟示：基督徒的信心盾牌不只是個人的，也是群體的。一個孤立的基督徒（就像一個脫離隊伍的士兵）遠比在教會群體中的基督徒更容易受到撒但的攻擊。傳道書4:12說「有人攻勝孤身一人，若有二人便能敵擋他；三股合成的繩子不容易折斷。」這就是為何教會生活不是可選項，而是屬靈爭戰的必要裝備——在肢體的相互支持、相互代禱中，我們共同舉起信心的盾牌，保護彼此免受撒但的攻擊。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">確知得救：清教徒對頭盔的深入討論</h4>
              <p className="text-gray-700 leading-relaxed">
                清教徒神學家花了大量篇幅討論「確知得救」（assurance of salvation）這個問題，因為他們見到許多信徒因缺乏確據而在屬靈爭戰中失去力量。他們識別出三種確據的基礎：第一，聖經對選民的應許（客觀確據）——「我的羊聽我的聲音……我賜給他們永生，他們永不滅亡」（約翰福音10:27-28）；第二，聖靈在心中的見證（主觀確據）——「聖靈與我們的心同證我們是神的兒女」（羅馬書8:16）；第三，生命中恩典的記號（實際確據）——悔改、信心、對神的愛、對罪的憎恨等。清教徒警告，僅依賴情感確據是危險的，因為情緒會波動；真正穩固的確據建立在客觀的神的話語上，被聖靈印證，並由生命的果子確認。撒但最喜歡攻擊信徒的確據，因為沒有確據的信徒在爭戰中是不穩定的。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">五件防禦性裝備中，哪一件你覺得目前穿戴最不完整？是真理腰帶（神學根基）、公義胸甲（稱義的確據或成聖生活）、平安鞋（與神和好的確知）、信心盾牌（對神話語的倚靠），還是救恩頭盔（得救確據）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但是謊言之父，「真理腰帶」是對抗謊言的武器。你生命中是否有一些謊言（關於你自己、關於神、關於他人）已根深蒂固，以致你有時把它們當成真實？神的話語如何糾正這些謊言？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「公義的胸甲」的兩個層面——稱義之義和成聖之義——你在這兩者之間的平衡如何？你是否常因自己的行為不夠好而懷疑神的接納（混淆了稱義和成聖）？或者你是否有時用「我已稱義」來合理化繼續在罪中的懈怠？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「平安鞋」暗示我們是帶著福音預備走路的人——傳福音是屬靈爭戰的一部分。在你目前的生活中，你是否積極地藉傳福音「擴展陣地」，還是屬靈爭戰對你而言主要是防守性的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「盾牌的龜殼陣」顯示屬靈爭戰是群體性的。你目前的教會生活，是否真的在幫助你抵擋撒但的攻擊？或者你主要是孤立地面對屬靈爭戰，沒有肢體的支持和問責？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「救恩的頭盔」保護我們的心智。你的得救確據目前是建立在什麼基礎上——神的應許、聖靈的見證、生命的果子，還是主要依賴情緒感受？當感受低落時，你的確據如何支撐你？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 每日「穿戴軍裝」的禱告</h4>
              <p className="text-gray-700 mb-2">建立一個每日早晨「穿戴全副軍裝」的禱告習慣，逐一宣告每件裝備。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>腰帶</strong>：「主，我今天選擇束上真理的腰帶——我相信祢的話是真實的，即使我的感受說不是」</li>
                <li><strong>胸甲</strong>：「我穿上公義的胸甲——基督的義是我被神接納的根基，不是我的表現」</li>
                <li><strong>鞋</strong>：「我穿上平安的鞋——我與神和好了，這個平安使我有穩固的立足點」</li>
                <li><strong>盾牌</strong>：「我舉起信心的盾牌——無論撒但今天射來什麼，我倚靠祢的應許」</li>
                <li><strong>頭盔</strong>：「我戴上救恩的頭盔——我是在基督裡被愛、被揀選、被保守的神的兒女」</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別並對抗你最常受到的謊言</h4>
              <p className="text-gray-700 mb-2">寫下撒但最常對你說的三個謊言，並為每個謊言找到對應的聖經真理。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>常見的謊言例子：「你不夠好」、「沒有人真正理解你」、「你的信仰只是習慣」、「神不在乎你的細節」</li>
                <li>為每個謊言，找出一到兩節聖經回應</li>
                <li>把這些真理寫在便利貼上，貼在你每天容易看到的地方</li>
                <li>當那個謊言出現時，大聲宣讀對應的聖經真理</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 深入研讀以弗所書6:10-18</h4>
              <p className="text-gray-700 mb-2">花一周的時間深入研讀這段經文，每天專注於一件裝備。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>第一天：整體閱讀（v.10-18），觀察整體結構和重複的「站立」呼召</li>
                <li>第二天：腰帶（v.14a）——研讀約翰福音17:17，思考「真理」的廣度</li>
                <li>第三天：胸甲（v.14b）——研讀羅馬書5:1-2，思考稱義帶來的和平</li>
                <li>第四天：鞋（v.15）——研讀羅馬書10:14-15，思考傳福音與平安的關係</li>
                <li>第五天：盾牌（v.16）——研讀希伯來書11章，思考信心如何「滅盡」試煉</li>
                <li>第六天：頭盔（v.17a）——研讀羅馬書8:31-39，在紙上寫下你的得救確據理由</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 建立「確據日記」</h4>
              <p className="text-gray-700 mb-2">開始記錄支持你得救確據的具體記號，以加強「救恩頭盔」。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>記錄你對神真實的渴慕——你何時被神的話語感動？何時在禱告中真實地與神相遇？</li>
                <li>記錄你對罪真實的痛悔——什麼罪使你感到真實的悲傷，而不只是後果的懼怕？</li>
                <li>記錄你對他人真實的愛——你何時出於對基督的愛而服事他人，不是為了稱讚？</li>
                <li>當撒但攻擊你的確據時，拿出這個日記，提醒自己真實的屬靈生命的記號</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「天父，感謝祢為我預備了全副軍裝，使我能夠站立得住。今天，我選擇穿上祢所賜的每一件裝備：以祢的真理束腰，以基督的公義護心，以福音的平安穩步，以信心的盾牌迎戰，以救恩的確據保守我的心。不是靠我自己的力量，乃是靠著主的大能大力。在今天的爭戰中，讓我每一刻都緊緊抓住祢，知道祢比一切仇敵更大。奉耶穌的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
