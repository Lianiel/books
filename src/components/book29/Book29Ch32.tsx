import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch32() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">完全人挪亞</h2>
        <p className="text-gray-500 mt-1">挪亞的後代記在下面。挪亞是個義人，在當時的世代是個完全人。挪亞與神同行。挪亞生了三個兒子，就是閃、含、雅弗。創世記六9-10</p>
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
              從本章開始，挪亞的故事正式登場。我們要完整介紹挪亞的地位及挪亞的生命，所以要回頭講解創世記五25-29，再講創世記六9-10。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、挪亞的地位</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、挪亞來安慰我們</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五25-29：「25瑪土撒拉活到一百八十七歲，生了拉麥。26瑪土撒拉生拉麥之後，又活了七百八十二年，並且生兒養女。27瑪土撒拉共活了九百六十九歲就死了。28拉麥活到一百八十二歲，生了一個兒子，29給他起名叫挪亞，說：這個兒子必為我們的操作和手中的勞苦安慰我們；這操作勞苦是因為耶和華咒詛地。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                長壽者瑪土撒拉是一個承先啟後的人，他可以同時向他的七代前輩學習：亞當、塞特、以挪士、該南、瑪勒列、雅列、以諾（禰浩榮，《挪亞方舟與滅世洪水》，頁70）。他的前半生，這七位前輩都還在，而他的後半生，則一直幫助、守望著後面三代，也是洪水前的最後三代。其中最特別的是他的孫子挪亞，拉麥「生了一個兒子，給他起名叫挪亞，說：這個兒子必為我們的操作和手中的勞苦安慰我們；這操作勞苦是因為耶和華咒詛地。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞本人代表安息，所以他能帶來安慰，這安慰是為了人們的操作勞苦，而這操作勞苦又是由於神咒詛地。挪亞傳奇的一生，將會解決地受咒詛的問題，整個被咒詛的地將會被毀滅，神會預備新的地給挪亞的後裔來生養治理。挪亞將會經歷很大的安息，整整一年，在方舟裡不太需要做工，有很多時間可以禱告、唱詩、讚美、敬拜神。這是人類歷史的第一個安息年。將來以色列人每七年要守一次安息年，而末後的禧年國度則如同一千年的安息年。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                休息、安息對應操作、勞苦，這是挪亞名字的意義所在，本來神造人就已經定了有安息日的生活模式，要六日工作，第七日安息，這安息不僅是休息，而且是來敬拜神，因為必須敬拜神才可能有真正完整的休息。墮落的人類，早已經把這事丟棄了，只知工作賺錢享樂，所以心靈空虛，生活愈加苦悶，使縱慾強暴更加成為常態。要解決這些問題，要先從到神面前安息開始。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇四十六8-10：「8你們來看耶和華的作為，看他使地怎樣荒涼。9他止息刀兵，直到地極；他折弓、斷槍，把戰車焚燒在火中。10你們要休息，要知道我是神！」這詩篇是在預言未來七年大災難的最後階段，列國圍攻耶路撒冷，那時神會親自來止息刀兵，直到地極，同時神呼召他的子民來休息、認識神、與神親近。這詩篇同樣適用於挪亞的時代，因為會有一個普世洪水的大災難，在那時，挪亞一家在方舟裡享受安息，並且要進入一個清空後重新開始的新世界，不用競爭，不用太勞苦，只要照著安息日原則，有工作、有休息，有操作、有敬拜，就能重新有類似伊甸園的美好日子。這是神藉著挪亞所要給人的恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從亞當到他的十世孫挪亞，他們的希伯來文名字各有其意義，與本人的特質或使命有關，連起來看，似乎有一個特別的啟示（樸潤植，《從神救贖史的經綸看創世記的家譜》，頁113-154）：亞當：人。塞特：被註定，被指派。以挪士：軟弱的，不免一死的。該南：意外得到憐恤。瑪勒列：可稱頌的神。雅列：降下的人。以諾：教師、被獻的人。瑪土撒拉：他的死將帶給。拉麥：剛強的人、禱告的人。挪亞：安慰、安息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                將這十個人名的意思連起來，成為很有啟示的一句話：「人註定軟弱、不免一死，意外得到憐恤。可稱頌的神成為降下的人，作教師，被獻，他的死將帶給禱告的人安慰。」耶穌基督降生使這整句話完全應驗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、挪亞開啟新世代</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記中「後代」的記載，第一次講「天地的來歷（後代）」（創二4），第二次講「亞當的後代」（創五1），第三次講「挪亞的後代」（創六9），第四次講「挪亞的兒子閃、含、雅弗的後代」（創十1）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可以說，創世記裡有好多故事，從創造天地到亞當、夏娃是第一個故事，從亞當到挪亞是第二個故事，從挪亞到閃、含、雅弗是第三個故事。亞當、夏娃的故事應該是到大洪水結束，因為他們的後裔大部分都在大洪水中滅亡了。從此以後，挪亞是新人類的新始祖。不過，挪亞的故事不是從洪水之後開始的，乃是洪水之前就開始了。洪水之前的挪亞，以及他的妻子、三個兒子、三個兒媳婦，還有可能是花了八十年所建造的方舟，都會從洪水以前的世界進到洪水之後的世界，並對洪水後的世界產生影響。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他們住了一年多的方舟，經歷過的大洪水，正預表著我們會藉著基督的救恩，通過死亡，進到將來的新世代。這也預表我們這個世代不只關聯於此時的世代，也會關聯於未來的新世代。你能想像嗎，當我們都死了之後，有一天基督再來，我們又復活出現在將來那個世界，與他一同掌權作王，而且將來所分派的職責，跟今生的工作態度有直接的關係。（太廿五14-30，路十九12-27）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、挪亞的生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六9：「……挪亞是個義人，在當時的世代是個完全人。挪亞與神同行。」這節經文裡有三個短句用來形容挪亞：1.是個義人，2.是個完全人，3.與神同行。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、是個義人</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「義」的原文有公義的、正當的、正確的、合法的、被稱義的等意思。在舊約出現206次，大部分是用在「義人」這個詞，而這裡是第一次出現。挪亞是個義人，他是因好行為而被稱為義人，還是因為信靠神而被稱為義人？他應該兩者都有，但起始點是信靠神。至少有以下三方面的根據：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1. 希伯來書的信心英雄榜，從亞伯開始，接著是以諾，第三位就是挪亞。聖經強調，他們都是因著信，而做出各種信心的行動。（來十一4-7）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                2. 保羅說明，因信稱義是新舊約時代的共通點，而非因行為稱義。他舉了亞伯拉罕及大衛兩個人作例子（羅四1-8），表明因信稱義的原則比摩西的律法更早存在，且不受律法限制，繼續存在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                3. 亞伯獻羊為祭，蒙神悅納，是啟示性的信仰，表明因信稱義。這個啟示性的獻祭行動一直傳承下來。挪亞也如此做，而且他下方舟的第一件事是築壇獻祭（創八20），潔淨的動物七公七母進方舟，正是為了獻祭的需要（創七2-3，八20）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、是個完全人</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                完全的原文（tamim），意思是健康的、無瑕的、全備的、正直的，在舊約出現91次，關於完全，聖經至少有三個強調點：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1. 沒有殘疾的祭物：例如在利未記出現21次，17次譯為沒有殘疾的，1次譯為純全的；在民數記19次，18次譯為沒有殘疾的，1次譯為純的，都是形容預備獻祭的牛羊。這讓我們聯想到耶穌基督的純全，因為他是要被獻為祭的羔羊，必須沒有瑕疵。神要求獻祭的犧牲必須沒有瑕疵時，是在預告有一位沒有瑕疵的神羔羊，將要來為人贖罪。耶穌公開自己彌賽亞身分是在騎驢進耶路撒冷那日，接著五天被檢視，確認是完全沒有瑕疵的，然後才被釘十字架，成為贖罪祭，這過程與牛羊獻祭前必須檢視為沒有瑕疵是一樣的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                2. 神的道是完全的：詩篇十八30：「至於神，他的道是完全的；耶和華的話是煉淨的。凡投靠他的，他便作他們的盾牌。」聖經中神的道與神的兒子基督耶穌是一體的兩面，基督就是神的道，是活出來的道，而聖經是寫下來的道。二者都是完全的，是煉淨的。要成為人生活的指引、生命的動力，去行出完全。這也引出第三點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                3. 聖徒生活要完全：創世記十七1-2：「1亞伯蘭年九十九歲的時候，耶和華向他顯現，對他說：我是全能的神。你當在我面前作完全人，2我就與你立約，使你的後裔極其繁多。」神要求亞伯拉罕作一個完全人，甚至是立約賜福後裔的條件。馬太福音五48：「你們要完全，像你們的天父完全一樣。」耶穌教導門徒要完全，甚至是以天父為榜樣。保羅要求自己要追求完全：「12這不是說我已經得著了，已經完全了；我乃是竭力追求，或者可以得著基督耶穌所以得著我的（或作：所要我得的）。13弟兄們，我不是以為自己已經得著了；我只有一件事，就是忘記背後，努力面前的，14向著標竿直跑，要得神在基督耶穌裡從上面召我來得的獎賞。15所以我們中間，凡是完全人總要存這樣的心；」（腓三12-15）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                完全人也可以說是成熟人，完全人有一個絕對的標竿，是天父自己；完全人也是一個相對的概念，我們每天要親近主，要愛神愛人、榮神益人，使自己更加完全，更加成熟，這是一生之久的事。所以每一位聖徒都要注重成聖生活，不僅因信成為義人，還要有見證顯明在世人面前，如同耶穌所說，你們是世上的鹽、世上的光（太五13、14）；也如同保羅所說：「14凡所行的，都不要發怨言，起爭論，15使你們無可指摘，誠實無偽，在這彎曲悖謬的世代作神無瑕疵的兒女。你們顯在這世代中，好像明光照耀。」（腓二14-15）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、與神同行</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六9-10：「9……挪亞與神同行。10挪亞生了三個兒子，就是閃、含、雅弗。」這個與神同行，是代表著在他稱義的生命以及追求完全的成聖生活之外，還有事奉與使命。神往哪裡走，他就往哪裡走，神怎麼做，他就怎麼做，他要去到全地為主傳義道（彼後二5）。與神同行是耶穌基督事奉的樣式，他按著父的指示去該去的地方，做該做的事；這也是門徒們事奉的樣式，如馬太福音廿八19-20所說：「19所以，你們要去，使萬民作我的門徒，給他們施洗，歸於父、子、聖靈的名。20凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」與神同行包含要去到萬國萬民的地方，將福音帶給他們，並將耶穌所吩咐的一切都教訓他們遵守。
              </p>
              <p className="text-gray-700 leading-relaxed">
                挪亞與以諾相似，與神同行時繼續生養兒女，他生養了閃、含、雅弗三個兒子，長大了都與他一起造方舟。事實上，生養兒女也是與神同行的一部份，包括肉身生養、屬靈生養，都是與神同行。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                挪亞的生命，包含了稱義、成聖、事奉三個層次，這是聖經對他很完整的介紹。這樣的介紹不僅說明了挪亞如何能承擔那個世代末後的使命，也說明了今天的我們如何能承擔末後的大使命，不僅有稱義，也有成聖、事奉。我們為主所做的一切，都會在永恆裡有果效。願主賜福使用我們每一位，都成為像挪亞這樣的完全人，使榮耀歸給神。
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
                '挪亞名字意為「安慰、安息」，他的一生將解決地受咒詛的問題；方舟中的一年是人類歷史第一個安息年，預表禧年國度；真正的安息必須包含敬拜神。',
                '從亞當到挪亞十代名字連起來是一個福音啟示：「人註定軟弱、不免一死，意外得到憐恤。可稱頌的神成為降下的人，作教師，被獻，他的死將帶給禱告的人安慰。」——耶穌基督降生使這句話完全應驗。',
                '挪亞開啟新世代：洪水前的挪亞全家與方舟進到洪水後的世界，預表我們藉基督救恩通過死亡進到將來的新世代；將來的職分與今生的工作態度直接相關。',
                '挪亞是義人——因信稱義（來十一的信心英雄榜、羅四因信稱義原則早於律法、承傳亞伯啟示性的獻祭）。',
                '挪亞是完全人（tamim）——聖經三個強調點：沒有殘疾的祭物（預表無瑕疵的羔羊基督）、神的道是完全的、聖徒生活要完全（創十七1、太五48、腓三12-15）；完全人是一生之久追求成熟的成聖生活。',
                '挪亞與神同行——代表事奉與使命：神怎麼說就怎麼行，去全地傳義道；生養兒女（肉身與屬靈）也是與神同行的一部份。挪亞的生命包含稱義、成聖、事奉三層次。',
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
              '挪亞名字的意義是什麼？這個意義怎麼展現在他的生平事蹟上面？',
              '挪亞是因信稱義的義人，有哪三方面的根據？挪亞是完全人，代表甚麼意義？跟今天的基督徒生活有何相關？',
              '挪亞與神同行，跟耶穌有何相似之處？今天的你可以如何與神同行？',
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
