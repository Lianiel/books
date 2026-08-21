import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">讓枯骨得著氣息</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、「沉睡的老爺爺」事件</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶中學時，教會查經班只有三個男孩，主日學老師安排他們每週日晚上探訪療養院的老年人——一人讀經、一人帶禱告，陸可鐸負責預備聖餐。有一晚老師不在，三人獨自行動，遇到一位怎麼叫也叫不醒、鼾聲比電視還響的老先生。他們沒想到請護士幫忙，卻也不可能掉頭離開——任務還沒完成！於是他們照樣完成流程：禱告、讀經，輪到陸可鐸時，他把一片聖餐餅放在老先生舌頭上、用一杯葡萄汁沖下去，接著轉身跑出房間，老先生全程都在睡覺。
              </p>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸說：我們有時也是這樣，不是嗎？在靈性上昏昏沉沉，任由倦怠吞吃我們的活力。他強調自己說的不是拒絕上帝、冷酷悖逆的人，而是那些善良的基督徒——心靈已經乾涸、心中的愛已經減退，感覺與上帝距離愈來愈遠。他直言：我說的很有可能就是你。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、以西結的枯骨異象——巴比倫的流亡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引約翰福音六章63節：「叫人活著的乃是靈」，指出三位一體神分配職責時，天父選擇保護和供應，聖子選擇救贖，聖靈則選擇賜下生命——充滿活力、堅韌、愉快和盼望的生命。他以先知以西結為證：西元前六世紀，以西結不斷責備希伯來人遠離外邦偶像，族人卻不聽從，國家在西元前587年被巴比倫徹底摧毀——耶路撒冷被洗劫、聖殿被毀，猶太人被流放時哀嘆：「我們的骨頭枯乾了，我們的指望失去了，我們滅絕淨盡了」（以西結書三十七章11節），詩篇作者也寫下：「我們曾在巴比倫的河邊坐下，一追想錫安就哭了」（詩篇一百三十七篇1節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但上帝有其他計畫——祂應許：「我必用清水灑在你們身上，你們就潔淨了……我也要賜給你們一個新心，將新靈放在你們裡面……我必將我的靈放在你們裡面，使你們順從我的律例」（以西結書三十六章24-28節）。陸可鐸提醒：這次救援行動的大英雄是上帝——祂會親自拯救、聚集、潔淨百姓，賜給人一顆新心，最重要的是，把祂的靈放在他們裡面。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、「這些骸骨能復活嗎？」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸描述以西結三十七章的異象：「耶和華的靈降在我身上……將我放在平原中；這平原遍滿骸骨……而且極其枯乾」——死亡谷裡一片死寂，沒有孩子玩耍、沒有情人親吻、沒有音樂與舞蹈，只有乾枯的骸骨。上帝問：「人子啊，這些骸骨能復活嗎？」陸可鐸坦言，自己雖沒到過那座山谷，卻曾遇見生活喪失意義的乘客、有自殺念頭的母親、鴉片成癮的年輕人、驕傲的人在葬禮上被提醒生死無常、鏡中一位信心枯竭的自己——他問：骸骨能復活嗎？以西結面對這個難題，只能推辭：「主耶和華啊，你是知道的。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                然後上帝下了命令，要以西結向骸骨發預言：「我必使氣息進入你們裡面，你們就要活了……」以西結照做了，骨頭咔嗒作響重新組合、筋絡無中生有、皮膚重新覆蓋——但這些身體仍沒有氣息、沒有心跳、沒有呼吸。上帝要他再次宣告，向風發預言：「氣息啊，要從四方而來，吹在這些被殺的人身上，使他們活了。」以西結遵命說預言，氣息就進入骸骨，「骸骨便活了，並且站起來，成為極大的軍隊」（三十七章9-10節）。陸可鐸總結：沒有聖靈，我們可能有骨頭、血肉、頭皮和牙齒，但不可能有生命——唯有聖靈能賜我們生命。希伯來人大約七十年後果然重返家鄉，上帝信守了承諾。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、你只需仿效以西結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說：聖靈當時做的事，在你身上也可以發生——你婚姻枯竭了嗎？聖靈能讓它重生。事業苦無進展？聖靈能夠往前推動。過往的夢想破碎？上帝的靈能再一次點燃。他鼓勵讀者：你只需仿效以西結——這不是要改名換姓、搬到以色列或留鬍子，而是關乎你願不願意邀請聖靈走進生命乾涸和死寂之處。他特別指出一個容易被忽略的細節：上帝邀請以西結去促成骸骨的復活，要他發預言，他真的這麼做了，天國的風才開始吹拂——如果以西結拒絕，說「這對我來說太超自然了」「我太渺小了」，會怎樣呢？但以西結沒有拒絕，他答應了。陸可鐸問：那你呢？天國的風正等著你喚起，只要真誠地說：「聖靈，我歡迎祢。」聖靈不強迫、哄騙或逼迫你接受祂，只在我們的邀請下進入我們的生命。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、馬可樓的復活節之夜——「你們受聖靈」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸講述第一次復活節晚上，門徒因怕逮捕耶穌的領袖搜捕，把門緊緊鎖上——「耶穌來，站在當中，對他們說：『願你們平安！』」（約翰福音二十章19節）。他指出，即便天使說話、石頭裂開、大地震動、墳墓突然空了、聖殿幔子撕裂成兩半，門徒仍像沒有母雞保護的小雞般瑟瑟顫抖，但耶穌仍然出現了，無人能躲避復活的主。耶穌在這段經文中說了三次「願你們平安」，復活後對使徒說的第一句話是安慰——這就是全然的恩典。
              </p>
              <p className="text-gray-700 leading-relaxed">
                賜下平安之後，祂接著賜能力：「『父怎樣差遣了我，我也照樣差遣你們。』說了這話，就向他們吹一口氣，說：『你們受聖靈！』」（二十章21-22節）陸可鐸說：耶穌吐氣，門徒吸氣，正如神對亞當吹氣使他有生命一樣（創世記二章7節）——他喜歡另一個版本的翻譯：「就向他們吹一口氣，說：『歡迎聖靈！』」他強調：沒有任何條件，不需要任何準備，領受聖靈不用跳火圈或跨越任何障礙物，這是一份純粹且不配得的禮物。他引保羅對加拉太人的提問：「你們受了聖靈，是因行律法呢？是因聽信福音呢？」（加拉太書三章2節）答案是：唯有信心——福音從來不是「先潔淨自己，好讓神進入你的生命」，而是「接受基督，聖靈就能潔淨你」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、單純憑信心，一而再、再而三地領受</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回應一個常見的問題：「一個人是否需要再次領受祝福、在歸信後有一次聖靈充滿的經歷？」他的回答是：「沒錯！但不只要被祝福第二次，還要有第三次、第十次，甚至第千次！」他坦言，自己在開始寫這一章之前，又領受了聖靈新鮮的恩膏。他鼓勵讀者每一天、每一時渴慕主耶穌應許的聖靈，聽從基督的命令：領受聖靈——無論聖靈是像復活節那樣以輕柔氣息來到，還是像五旬節那樣以大風顯現，都樂意接待祂；但要小心，別以為這需要滿足複雜的要求或條件——聖靈和救恩一樣，需要的唯有單純憑信心領受。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他引耶穌的話：「你們中間作父親的，誰有兒子求餅，反給他石頭呢？……你們雖然不好，尚且知道拿好東西給兒女；何況天父，豈不更將聖靈給求他的人嗎？」（路加福音十一章11-13節）他總結：在神的眼中，聖靈就是最好的禮物。你所需要的幫助就在這裡——請求聖靈來充滿你，敞開你的心門，大大敞開，說：「進來吧！」吸入耶穌所吐的氣息，用力深呼吸，領受神的同在與能力，就是現在，然後一而再、再而三地反覆領受。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">七、結語——別讓聖餐在你熟睡時錯過</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸以一首禱告詩作結：「又真又活的靈啊，請賜下祢的氣息。請賜下來自至高天國的氣息，吹拂在我們疲憊不堪的世界，吹拂在我們枯槁的夢想，吹拂在我們骨瘦如柴的身軀上，親愛的聖靈啊，求祢吹一口氣，好讓我們活過來。」他回到開頭「沉睡的老爺爺」的故事：他不知道那位老先生後來怎麼了，也不知道他醒來發現舌頭上有一塊濕透的餅是什麼感受——但他鄭重提醒：在療養院因熟睡而錯過聖餐是一回事，在與又真又活的上帝相交時陷入沉睡，兩者完全不同。他以全書最後的呼籲作結：別錯過上帝，別犯下這樣的錯，大膽邀請聖靈，對你乾枯的骸骨吹氣吧。你疲憊嗎？領受聖靈的氣息吧。生活的壓力壓得你喘不過氣嗎？領受聖靈的氣息吧。張狂的恐懼就要把你拖入萬丈深淵嗎？深呼吸，領受聖靈的生命氣息吧。慢慢來，一次一點點，你很快會發現，聖靈源源不絕的生命氣息已經完全充滿在你的生命裡。
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
                '「沉睡的老爺爺」提醒我們：許多基督徒不是拒絕上帝，而是在靈性上昏昏沉沉、任由倦怠吞吃活力——這正是全書要處理的核心處境。',
                '以西結枯骨異象的核心信息是：唯有聖靈能賜生命——沒有聖靈，我們可能有骨頭血肉，卻沒有真正的生命與活力。',
                '上帝邀請以西結參與骸骨復活的過程（發預言），這說明神渴望人主動回應、邀請聖靈進入生命乾涸之處，而非被動等待。',
                '耶穌在復活節夜晚向門徒吹氣說「你們受聖靈」，說明領受聖靈不需要任何條件或準備，是單純憑信心領受的禮物。',
                '領受聖靈不是一次性的事件，而應是每天、每時反覆渴慕、反覆敞開心門領受的持續操練——「第二次、第三次、甚至第千次」。',
                '全書的核心呼籲：無論你此刻多麼疲憊、枯乾、被恐懼籠罩，聖靈——那位隨時的幫助，此刻就願意向你吹氣，讓你活過來。',
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
              <h4 className="font-semibold text-gray-800 mb-2">以西結三十七章的枯骨異象，原本的歷史背景與今日的靈修應用如何平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                以西結三十七章11節明確指出，這個異象最初的解釋是「這些骸骨就是以色列全家」，指向以色列民族從巴比倫被擄之地復國歸回的應許，而非泛指個人靈性的枯竭。陸可鐸這一章把這段經文延伸應用到個人屬靈生命的復甦，是常見且合理的靈修應用方式（原則性的真理——唯有聖靈能賜生命——可以合理延伸），但讀者也值得認識這段經文原本更具體的民族性、歷史性意涵，這能幫助我們更完整地理解這段經文的豐富層次，而不只停留在個人化的讀法上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">約翰福音二十章耶穌「向門徒吹氣」與使徒行傳二章五旬節的聖靈降臨，是同一次領受聖靈，還是兩個不同事件？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是新約研究中一個歷史悠久的問題：路加（使徒行傳作者）與約翰對「門徒何時領受聖靈」的敘述順序不同，學者對此有不同的協調方式——有人認為約翰福音二十章22節是一種預表性或象徵性的授予（正式的降臨仍在五旬節），有人認為這是門徒在不同階段對聖靈不同程度的領受與充滿。陸可鐸這一章的重點顯然不在解決這個學術爭議，而在於強調「耶穌親自、直接、毫無條件地賜下聖靈」這個核心真理——讀者不必被這個學術問題困擾，可以把兩段經文都當作聖靈白白賜下、隨時可以持續領受的例證來領受。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">回顧全書：如何整合陸可鐸十三章豐富的內容與比喻？</h4>
              <p className="text-gray-700 leading-relaxed">
                通讀全書會發現，陸可鐸擅長用大量生活化的比喻（划艇與帆船、雲柱火柱、精油、火與煉金、以便以謝石、颶風避難所）來闡述聖靈的不同面向，這些比喻各自獨立卻又彼此呼應，共同指向一個核心信息：聖靈是「隨時的幫助」，祂願意在我們軟弱、疲憊、迷茫、罪中、枯乾的每一個時刻，以我們能理解的方式臨到我們。讀者在整合閱讀時，可以把這些比喻當作反覆提醒自己「聖靈願意介入」的記憶錨點，而不必要求每個比喻都能精確對應到嚴謹的神學命題——這本書的文體本質上更接近牧養性的靈修寫作，而非系統神學論述。
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
              '你的生命中是否有任何「枯骨」讓你感到絕望？這些枯骨具體是什麼——婚姻、事業、夢想，還是與神的關係本身？',
              '以西結向骸骨、又向氣息發預言，才使枯骨真正活過來。這對你如何主動邀請聖靈介入你的「枯骨」，有什麼提醒？',
              '耶穌向門徒吹氣說「你們受聖靈」，沒有任何條件或準備。你是否願意接受上帝白白賜下的這份禮物？如果還沒有，是什麼攔阻了你？',
              '陸可鐸說，領受聖靈不是一次性的，而要「第二次、第三次、甚至第千次」。你上一次刻意、主動邀請聖靈充滿是什麼時候？',
              '深吸一口氣，在這麼做的同時，請求聖靈向你身上每一處枯骨吹進生命氣息。回顧整本《隨時的幫助》十三章，哪一章對你觸動最深？你打算如何具體回應？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌬️ 每天一次「深呼吸禱告」</h4>
              <p className="text-gray-700 mb-2">仿照本章結尾的禱告詩，每天找一個安靜的時刻，深呼吸，同時默禱：「聖靈，請賜下祢的氣息，吹進我枯乾的地方」，持續一週，記錄你的感受變化。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 完整默想以西結書三十七章1-14節</h4>
              <p className="text-gray-700 mb-2">
                找一段時間讀完整段枯骨異象，寫下你生命中的「骸骨谷」具體指的是什麼，並仿照以西結，向這個處境「發預言」——用具體的話語向神述說你所渴望看見的復甦。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 回顧整本書，寫一段總結</h4>
              <p className="text-gray-700 mb-2">
                花時間回顧《隨時的幫助》全書十三章的內容，寫下一段屬於自己的總結與委身禱告，具體列出你想要在生活中持續操練與聖靈同行的一到兩件事。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「又真又活的聖靈啊，請賜下祢的氣息。求祢吹拂在我疲憊不堪的生命裡，吹拂在我枯槁的夢想上，吹拂在我骨瘦如柴的信心裡。求祢吹一口氣，好讓我活過來。我大大敞開我的心門，說：進來吧！我願意一次又一次地領受祢，因為祢是我隨時的幫助。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
