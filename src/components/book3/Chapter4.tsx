import React from 'react';
import { HeartHandshake, Star, ShieldCheck, Users } from 'lucide-react';

export default function Chapter4() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        第三章：牧者保羅
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的教導與關顧</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅賴以建立教會的根基，也就是保羅所教導的內容，這些內容在他的書信中展現無遺。保羅的教導不僅是神學理論，更是針對各個教會的實際處境所提出的牧養指引。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 132</span>
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 保羅看「教會」：在基督裡的新群體</h3>
            <p>
              保羅對教會的理解，超越了當時猶太會堂或希臘社團的概念。他將教會視為「在基督裡的新群體」，這個群體是由蒙神呼召、被聖靈重生的人所組成。不論是猶太人或外邦人、為奴的或自主的、男的或女的，在基督耶穌裡都成為一了（加三28）。這個新群體的特徵是彼此相愛、互相建立，並且共同承擔傳揚福音的使命。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 134-135</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 保羅與「教會」的關係：隱喻的表達</h3>
            <p>
              為了說明他與教會的關係，保羅使用了多種生動的隱喻。他用「代表」的隱喻，說明自己是基督的使者；他用農夫和建築師的隱喻，強調自己栽種、建造，但唯有神叫他生長（林前三6-10）。他將教會形容為一個「家」，信徒是神家裡的人（弗二19）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 136</span>
            </p>
            <p>
              最常用且最深刻的，是「親子關係」的隱喻。保羅常稱信徒為他「親愛的兒女」（林前四14），他如同父親般勸勉、安慰他們（帖前二11），也如同母親般為他們經歷生產之難，直到基督成形在他們心裡（加四19）。這種充滿情感的表達，展現了保羅作為牧者的深切關懷。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 137-138</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Star className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的生命典範</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅以各樣方式和他所建立的教會保持緊密關係，他對教會的成長與關懷之心溢於言表。他不僅用言語教導，更用自己的生命作為信徒的榜樣。他大膽地呼籲信徒：「你們該效法我，像我效法基督一樣。」（林前十一1）
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 140</span>
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 不隨從世俗</h3>
            <p>
              在當時充滿異教風俗和道德敗壞的羅馬帝國中，保羅堅持聖潔的生活，不隨從世俗的價值觀。他教導信徒要「心意更新而變化」（羅十二2），並在生活中活出基督的樣式。他的清廉、正直和對真理的堅持，成為初代教會在黑暗時代中的明燈。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 141</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 親手做工</h3>
            <p>
              保羅為了不成為教會的負擔，經常親手做工（織帳棚）來維持生活和宣教的需要（徒十八3；帖前二9）。這在當時輕視勞動的希臘羅馬社會中，是一個極具顛覆性的見證。他以此教導信徒要勤奮工作，不可游手好閒，並樹立了自給自足、不貪圖利益的牧者典範。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 142-143</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <ShieldCheck className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的權柄與領導</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅親手做工以支持他的福音事工，固然對許多信徒樹立典範，但是面對當時社會上的「超人」氛圍（崇尚演說家、哲學家接受供養），保羅的作法也使他受到一些質疑，甚至有人因此懷疑他的使徒權柄。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 144</span>
            </p>
            <p>
              然而，保羅對權柄的理解與世俗截然不同。他深知自己的權柄是主所賜的，目的是為了「造就人，並不是要敗壞人」（林後十三10）。固然保羅可以訴諸這樣的使徒權柄來命令信徒，但是他卻經常限制自己的權柄。他情願「勸」而非「命令」。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 146</span>
            </p>
            <p>
              在處理腓利門與逃奴阿尼西母的事件中，保羅展現了這種柔和謙卑的領導風格。他對腓利門說：「我雖然靠著基督能放膽吩咐你合宜的事，然而像我這有年紀的保羅...寧可憑著愛心求你。」（門8-9）這種以愛和尊重為基礎的領導，比強硬的命令更能贏得人心。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 147</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HeartHandshake className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅對同工的關顧</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅對教會付出真心的關懷與牧養，他不僅關注教會整體的發展，也對信徒和同工個人的需要給予實際的關注和照顧。他的書信中充滿了對同工的問候、稱讚和代禱。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 148</span>
            </p>
            <p>
              在健康方面，保羅展現了細膩的關懷。例如，保羅提醒年輕的同工提摩太，他「胃口不清、屢次患病...可以稍微用點酒。」（提前五23）這顯示保羅不僅關心同工的靈命，也關心他們的身體健康。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 149</span>
            </p>
            <p>
              保羅對個人的關顧也可以表現在個別的信徒之間。他寫給腓利門的信，就是為了請求腓利門饒恕並重新接納他「在捆鎖中所生的兒子阿尼西母」（門10）。保羅甚至願意為阿尼西母償還虧欠（門18），這種為了挽回一個卑微奴隸而付出的代價，深刻體現了基督十字架的救贖與復和之愛。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 149-151</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">延伸探討：牧者的心腸</h2>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 text-slate-700">
            <div className="mb-4 text-sm font-medium text-indigo-700 bg-indigo-100/50 p-3 rounded border border-indigo-200">
              【延伸探討來源：參照莊新泉《牧師保羅》與 Ernest Best《Paul and his convert》對保羅牧養心腸之分析】
            </div>
            <h3 className="font-bold text-indigo-900 mb-4 text-lg">牧者的心腸：生命榜樣、權柄的限制與細膩的關顧</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800 mb-2">一、 生命的榜樣：以「效法基督」為核心的牧養</h4>
                <p className="mb-2">
                  莊新泉在《牧師保羅》一書中深刻指出，保羅的牧養哲學並非建立在華麗的演說技巧或繁複的教會管理學上，而是深深扎根於他那「效法基督」的真實生命榜樣。在一個充斥著異教風俗、道德標準低落的希羅社會中，保羅大膽地向信徒發出呼籲：「你們該效法我，像我效法基督一樣。」（林前十一1）他不僅用言語教導聖潔，更在生活中展現出不隨從世俗、清廉正直的品格；他為了不成為教會的經濟重擔，甚至放下使徒接受供養的權利，選擇親手織帳棚維持生計。
                </p>
                <p>
                  這對現代的教牧人員與教會領袖提出了極其嚴肅的挑戰。在資訊爆炸的時代，信徒不缺乏獲取神學知識或聆聽精彩講道的管道，他們真正渴望看見的，是道成肉身的真實信仰生活。現代牧者面臨的最大危機，往往不是缺乏創新的事工策略，而是生命見證的匱乏。如果領袖在金錢、權力或人際關係上無法展現出基督的聖潔與捨己，再多的教導也顯得蒼白無力。真正的牧養，是領袖願意敞開自己的生命，讓信徒看見一個不斷被十字架對付、努力活出基督樣式的真實榜樣。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">二、 權柄的正確使用：為了「造就」而非「轄制」</h4>
                <p className="mb-2">
                  學者 Ernest Best 在探討保羅與其歸信者的關係時，特別關注保羅如何處理「屬靈權柄」的議題。作為由復活之主親自設立的使徒，保羅無疑擁有初代教會中最高的屬靈權柄。然而，令人動容的是，他極少以高高在上的姿態使用這份權柄來發號施令。相反地，他選擇了「限制權柄」。在處理腓利門與逃奴阿尼西母的棘手事件時，他明明可以「放膽吩咐」，卻選擇「憑著愛心求你」（門8-9）。他深知，出於愛心的順服，遠比出於恐懼的屈從更有屬靈價值。
                </p>
                <p>
                  這種「柔和謙卑」的領導風格，對現代教會的權力運作是一記當頭棒喝。在某些教會傳統中，牧者的權柄被無限上綱，甚至演變成對信徒生活各層面的過度干預與屬靈轄制。保羅的榜樣提醒我們，教會中的任何職分與權柄，其唯一正當的目的都是為了「造就人，並不是要敗壞人」（林後十三10）。屬靈領袖應當效法基督「洗門徒的腳」的僕人式領導，用愛心勸勉代替強硬命令，用真理的引導代替威權的壓迫，使信徒在自由與愛中甘心樂意地成長。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">三、 細膩的關顧：看見每一個「人」的價值與需要</h4>
                <p className="mb-2">
                  保羅雖然肩負著向廣大外邦世界傳福音的宏大異象，但他從未因此忽略對個體生命細微的關顧。他的牧養心腸如同為父為母一般，充滿了溫暖與細膩。他會在書信中特別叮囑年輕同工提摩太注意胃病，建議他「稍微用點酒」（提前五23），展現了對同工身體健康的實質關懷；他更願意為了一個在當時社會毫無地位可言的逃奴阿尼西母，親自寫信懇求，甚至承諾代償債務，只為了挽回這個在捆鎖中所生的屬靈兒子。
                </p>
                <p>
                  在追求大型化、組織化的現代教會中，信徒很容易淪為聚會人數統計表上的一個數字，或是推動事工的工具。保羅的細膩關顧呼喚我們回歸牧養的本質：看見每一個「人」在神眼中的無價之寶。真正的牧養，是願意走入信徒與同工的日常生活中，體恤他們的軟弱，關心他們的疾病與家庭困境，甚至願意為那些被社會邊緣化、不可愛的人付上極大的代價。唯有當教會充滿了這種道成肉身、不計代價的愛與關懷時，才能真正彰顯出基督那長闊高深的愛。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Note: Added BookOpen import to fix missing icon issue.
