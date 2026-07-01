import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命的真光</h2>
        <p className="text-gray-500 mt-1">神說：要有光，就有了光。神看光是好的，就把光暗分開了。神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日　創世記一3-5</p>
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

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、生命的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一3：「神說，要有光，就有了光。」光是從神來的，神本身就是光。神創造自然界的光，是為了啟示他自己。這光將成為自然界所有生命的能源，正如屬靈生命的能源乃是神自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以約翰壹書一5-7寫到：「神就是光，在他毫無黑暗。這是我們從主所聽見、又報給你們的信息。我們若說是與神相交，卻仍在黑暗裡行，就是說謊話，不行真理了。我們若在光明中行，如同神在光明中，就彼此相交，他兒子耶穌的血也洗淨我們一切的罪。」主耶穌的工作，使我們罪得赦免，進入光明中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本書第三章解釋「神的靈運行在水面上」時，強調禱告的重要，因為禱告促使聖靈運行。聖靈運行之後，神開始造光，這是生命的第一要素。聖靈在一個人身上運行，所要發生的第一件事，也是使他黑暗的生命有了光。這是約翰福音一4-12所說的：「生命在他裡頭，這生命就是人的光。光照在黑暗裡，黑暗卻不接受光。……凡接待他的，就是信他名的人，他就賜他們權柄，作神的兒女。」這世界在黑暗裡，耶穌把光帶進這世界，有人不接受這光，仍活在黑暗中；有人接受這光，就成為神的兒女。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、光暗的分別</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一4：「神看光是好的，就把光暗分開了。」在創世記一章的六日創造裡面，總共有六次說：「神看……是好的」，中間的四次都說：「神看著是好的」，這四次都是指著當天全部的創造內容，而最後一次是說：「神看著一切所造的都甚好」，也是包含全部。唯獨第一天，聖經說：「神看光是好的」，並接著把光暗分開，沒有說全部都是好的。這讓我們看到，光是好的，是非常重要的。至於暗好不好呢？神沒有說，至少暗示，暗可能是不好的，或者相對於光，乃是在配角的地位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡的「暗」，是延續前面淵面黑暗的「暗」，有三種可能：1. 代表罪惡，2. 代表神預備要工作，3. 神藏身之處。所以暗可以是罪惡，可以是磨練逼迫，也可以是神隱藏的地方。神能使萬事互相效力，叫愛神的人得益處（羅八28）。多數人不喜歡黑暗，覺得會被黑暗遮蔽，但詩篇一三九11-12說到黑暗不能真正遮蔽我，關鍵在於是否有神的同在：「我若說：黑暗必定遮蔽我，我周圍的亮光必成為黑夜；黑暗也不能遮蔽我，使你不見，黑夜卻如白晝發亮。黑暗和光明，在你看都是一樣。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有黑暗是暫時的，新天新地就沒有黑暗了，因此值得我們從三方面去理解黑暗在整個人類歷史中的意義。若暗代表罪惡，則光代表光明、聖潔；若暗代表尚未有生命，則光代表生命及生命的成長；若暗代表神的藏身，則光代表神的顯現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                黑暗與光明的交替，跟人的成長有很大的關係，可分身體與屬靈兩方面來看。以身體的層面來說，暗乃是休息的時候，光則是工作的時候。休息與工作的交替，使人成長與重新得力。夜晚與白天的交替，與人的成長有關，台灣話說：「一眠大一寸」，意思是睡覺使小孩長大，晚上睡覺時身體的確在做修復及促進成長的工作。晚上不睡覺，會造成身體的虧損。這是今生今世的事，若在新天新地，就不需要光暗交替來進行修復，因那時的身體是不朽壞的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從屬靈生命的層面來講，我們沒信耶穌以前，裡面是黑暗的；信耶穌後，裡面就有了耶穌的光，但還會有光暗的交替，如同詩篇三十5所說：「一宿雖然有哭泣，早晨便必歡呼。」這是靈性成長的描述，黑夜之後會有清晨，乃是生命成長的過程。人的生命會經歷黑暗與光明，黑暗代表犯罪、管教或苦難、逼迫等，這樣的經歷使我們更謙卑、更倚靠神。只要我們還在地上，就一定有黑暗與光明的交替，並在其中成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                信耶穌前，我們的生命全部是黑暗的；信耶穌後，生命中就有光明與黑暗，而離世見主後，就進入永遠的光明中。今生有黑暗與光明的交替，乃是國度人才的磨練、操練，我們要好好把握，讓我們的生命成長、成熟，合乎主的樣式。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在創世記人物方面，光暗的分別，可以用亞伯與該隱來作代表，亞伯在光明中，該隱在黑暗中，二者是分開的。亞當犯罪，代表了起初的空虛、黑暗。但亞伯蒙神揀選，成為信心英雄榜的第一人（來十一4），他如同第一日的光，並且是與暗分開的。從此以後，整個人類歷史的發展，就一直有暗有光。該隱的後裔活在罪惡、黑暗之中，塞特（代替殉道的亞伯）的後裔活在光明之中，特別是以挪士、以諾、瑪土撒拉、挪亞這些被神記載下來的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、時間的起點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一5：「神看光是好的，神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日。」神造光，將光暗分開，分晝與夜，有晚上，有早晨，並且強調是頭一日，所以這裡是時間的起點，因為有光有暗、有晝有夜，才有時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                分光暗、晝夜是在有限的時間內，起點在創世記一3，之前有多久的黑暗，我們不知道。終點在啟示錄廿一23及廿二5，之後是永遠的光明。那裡說到，不再有黑夜，也不用日頭、月亮，因為神自己在其中成為光的來源。在中文裡面，時間用「光陰」這兩個字來表達，這是很獨特的，在其他國家的文字看不到。用「光陰」來描述時間，與聖經真理完全相合，因為的確是有光有暗才有時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於時間的起點，有一處經文很重要，在十誡的第四誡裡面。出埃及記二十11說到：「六日之內，耶和華造天、地、海，和其中的萬物。」根據這節經文，可知道整個神所創造的宇宙，是有年齡的，且是年輕的。如果區別靈界與物質界，或許天使可以在時間之前被造，但至少物質的宇宙乃是在有限不多的時間內被造的。根據這節經文，也可以指出重造論／時溝論是不合宜的，因為這裡所說的六天，包含了天地的創造，而非僅有地的創造或重造。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神以短時間創造天地的真理，一直受到很大的挑戰。因為科學家推測宇宙有一百卅八億年，地球有四十五億年，聖經的創造記載被冠以不合科學的罪名。我們可以消極的說，聖經不是科學性的文字，將信仰與科學作切割，這是多數福音派學者的立場。但我們可以積極地以創造神蹟的本質來說明聖經不與科學衝突。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多人懷疑神怎麼可能只用六天就把天地都造好了。我們要用創造神蹟的本質來說明這事。耶穌的第一個神蹟示範了神的創造，他將水變為酒，水與酒的成份不同，所以是創造性的神蹟。從葡萄的種子到上好的葡萄酒，過程至少數十年，但就在一剎那，酒就變出來了。耶穌示範了神如何創造天地萬物——神所創造的都是成熟的，是包含時間的。我們本來看不懂創世記第一章，或不相信其可能性。但耶穌用行動讓我們知道創造神蹟的本質，並且讓我們知道他曾經參與在神創造天地的行動之中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                用科學儀器去檢驗陳年好酒，可看出有幾十年的年齡；用科學儀器去觀測宇宙，可推測有一百卅八億年的年齡。但神的創造超越科學，如果不相信有神，不相信神創造，就只能接受所謂科學的答案。但如果相信神及神的創造，那麼我們就可以超越科學的答案，去認識神的偉大、奇妙，並願意緊緊來跟隨他。科學有其價值，萬有引力定律、反作用定律，營養學、遺傳學，都是科學，我們也都活在其中，不隨便去對抗科學所提供給我們的知識與智慧。但科學不代表全部真理，我們在領受科學好處的同時，不必去受到科學的限制。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                吳勇長老末期癌症得醫治，是全然的神蹟。這事好像違反科學，其實是超越科學。基督徒對待科學的態度，要如同對待金錢，可以使用它正面的好處，而不受到它的限制。正確的科學，屬於神的左手；而超自然神蹟乃是神的右手，我們要同時活在神的左手與右手之中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                回來談創世的時間起點，根據舊約聖經所記載各人的年齡及歷史上可確定的時間，推算大約在六千多年前，但因為有長子、非長子的年代差距，還有家譜可能省略，有些年代可能遺漏計算。所以地球真正的年齡會更長一些，但可能不到一萬歲。科學上也有許多證據，可以說明地球是年輕的，這方面請參看孫大程博士所寫的《創世以來的奧秘》這本書。那裡提供不少資料，讓我們知道地球、宇宙都是年輕的。本書末尾附錄六、附錄七是筆者曾經在基督教論壇報發表過的兩篇文章，也提供有關地球年輕的論說。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                彼得後書三8-12：「親愛的弟兄啊，有一件事你們不可忘記，就是主看一日如千年，千年如一日。主所應許的尚未成就，有人以為他是耽延，其實不是耽延，乃是寬容你們，不願有一人沉淪，乃願人人都悔改。但主的日子要像賊來到一樣。那日，天必大有響聲廢去，有形質的都要被烈火銷化，地和其上的物都要燒盡了。這一切既然都要如此銷化，你們為人該當怎樣聖潔，怎樣敬虔，切切仰望神的日子來到。……」被聖經記載的六千年過去了，在神看如同六日一般，基督迫切要再來，讓世界進入如同安息日的千禧年國度。但他還在等候更多人悔改歸主，讓我們每天領受神的生命，勝過黑暗一切的挑戰，把人從黑暗的國度帶到光明的國度，一起迎接基督的再來！
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
                '光是從神來的，神本身就是光（約壹一5）；聖靈運行之後神開始造光，這是生命的第一要素，也對應人信主後黑暗生命有了光（約一4-12）。',
                '創世記一章六次「神看……是好的」中，唯獨第一天只說「光是好的」，未提暗，暗示暗可能不好；暗可代表罪惡、神預備工作、或神藏身之處三種可能。',
                '黑暗與光明的交替跟人身體與屬靈成長都有關係：身體藉夜晚休息而修復成長，屬靈生命也藉黑夜哭泣、早晨歡呼（詩三十5）而更謙卑倚靠神；創世記中亞伯代表光、該隱代表暗，二者分道發展。',
                '有光有暗才有時間，時間的起點在創世記一3，終點在啟示錄廿一23、廿二5的永遠光明；出埃及記二十11「六日」造天地萬物的記載，否定了重造論／時溝論。',
                '神創造神蹟的本質是超越科學而非違反科學，如同耶穌變水為酒的神蹟；地球年齡按聖經家譜推算約六千多年，可能不到一萬歲，孫大程博士《創世以來的奧秘》提供相關科學佐證。',
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
              '生命的起源與光有何關係？請從物質世界與屬靈世界兩方面來分享。',
              '在人類歷史及個人經驗中，黑暗與光明可以分別代表哪些意義？與你的生命成長有何關係？',
              '時間的起點是在多久以前？神的創造一定包含時間，可以用哪些聖經例子來說明？對你個人的意義是甚麼？',
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
