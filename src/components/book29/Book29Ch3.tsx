import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的工作</h2>
        <p className="text-gray-500 mt-1">地是空虛混沌，淵面黑暗，神的靈運行在水面上　創世記一2</p>
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
              這節聖經，說明地起初的情況，以及聖靈最早的工作。聖靈在這裡的工作與將來聖靈在人身上的工作是相似的。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、地是空虛混沌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                起初的地跟我們今天所生活的地完全不同。起初神創造地的時候，全地都覆蓋著水，而且是很深的水，所以說「淵」面黑暗。這個「淵」在中文或原文都是深海的意思。第二天，可能有一半的水被分到天上，地仍然被水覆蓋。到第三天，神使地從水中上升，或是用海溝使水下降，然後地才露出來，成為可生長各種植物的陸地。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 space-y-3 text-sm">
                <p className="text-gray-700 leading-relaxed">
                  創世記一2的「是」，希伯來文是 הָיָה（hayah），可以翻譯作「是，be」或「成了，become」。創世記二7的「成了」，及創世記十九26的「變成」在原文都是這個字。所以重造論（又稱時溝論）的學者，認為應該翻譯為「地變成了空虛混沌」。這些學者認為是天使叛變，引致審判，地才變成空虛渾沌，這樣的解釋可以與進化論的地質時代相容。但這樣解釋的根據並不充分。這個字比較多的時候，翻譯作「是」，而且整本聖經對於「重造」這麼重要的事完全沒有提及。再一個是文法上的理由，黃儀章指出，創世記一2乃是情況子句，而非次序子句，所以不是描述地變成甚麼，而是在講完神創造天地後，接著講地是怎樣的情況。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  空虛的原文 תֹּהוּ（tohuw），英文是 vain，指沒有形狀、虛無，舊約聖經出現20次，大體都是這個意思。混沌的原文 בֹּהוּ（bohuw），英文是 void，是空洞、荒蕪的意思，在舊約聖經僅出現3次。這兩個字的意思很接近，希伯來文的發音也很相似，產生一
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                種加乘共鳴的效果，讓人感覺真的非常空洞虛無。舊約學者約翰華頓指出，空虛渾沌不是沒有東西，而是沒有次序。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                重造論者認為這是審判後的結果，因為以賽亞書卅四11，耶利米書四23講審判後的光景，都用空虛混沌來形容。雖然如此，也可以解釋說，審判後地變成好像剛被創造時空虛渾沌的樣子，並非一定要將空虛混沌解釋為審判後的光景。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                空虛渾沌應該是創造過程中的第一階段，如同建造聖殿的工地，在聖殿建造好之後是很榮耀的，但在起頭的時候，僅有一些材料在地上，感覺是空洞混亂的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                重造論不宜成立的理由至少還有兩項，一是神完成六日的創造後，看著所造的一切都甚好，若地下有許多屍骨，那就有矛盾。二是神按他的形象造人，要預備成為神兒子的新婦，神只造一個人亞當，並取其肋骨造出夏娃，沒有造其他人。即使有審判，仍會留存這個血脈，不管挪亞時代的洪水之後，或是將來的七年大災難之後，都留存了亞當的後裔及各種動物。而重造論所講的卻是將之前的動物與人類全部滅絕，埋在地裡，這不符合神的慈愛，也不符合神的智慧。關於重造論（時溝論）的基本觀點、根據理由、反對理由、贊成的學者與書籍等，可參看本書末尾的附錄二，那裡有完整的呈現。
              </p>
              <p className="text-gray-700 leading-relaxed">
                若說神首先造了天使，天使有了叛變，純粹是靈界的事，不關乎地球，那或許有可能，但聖經沒有清楚的答案。我們只知道，天使叛變的時間點，一定是在人墮落之前，可能在第一日之前，也可能在第六日之後，第十九章會再詳談這事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、淵面黑暗</h3>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 text-sm">
                <p className="text-gray-700 leading-relaxed">
                  黑暗的原文是 חֹשֶׁךְ（choshek），英文 darkness，意思是黑暗，也可以是隱密處。一般認為黑暗代表罪惡，但黑暗也可以代表神工作的前兆，黑暗也是神藏身之處，如下列經文所呈現。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                申命記四11：「那時你們近前來，站在山下；山上有火焰沖天，並有昏黑、密雲、幽暗。」申命記五23：「那時，火焰燒山，你們聽見從黑暗中出來的聲音；你們支派中所有的首領和長老都來就近我，」詩篇十八11：「他以黑暗為藏身之處，以水的黑暗、天空的厚雲為他四圍的行宮。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                剛開始時，地是空虛跟黑暗，因為還沒有光跟生命，只有地土跟水。這是生命開始前的一個必經過程，如同子宮，在沒有受精卵之前，就是空虛、黑暗的。這事情在屬靈生命的建造上是有對應的。以弗所書四17-18：「所以我說，且在主裡確實的說，你們行事不要再像外邦人存虛妄的心行事。他們心地昏昧，與神所賜的生命隔絕了，都因自己無知，心裡剛硬；」17節的虛妄，意思就是空虛；18節的昏昧，意思就是黑暗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                從生命成長的角度來說，空虛黑暗可能是一個人尚未信主前的光景，也可能是目前所面對的環境，需要靠著聖靈去改變突破。從宣教使命的角度來說，我們面對一個尚未信主的親友，他的心靈是空虛黑暗的，或是一個尚未聽聞福音的未得之民地區，那裡的屬靈狀態是空虛黑暗的。我們需要藉著禱告，讓聖靈動工，而後能產生屬靈的生命、屬靈的突破。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、神的靈運行在水面上</h3>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 text-sm">
                <p className="text-gray-700 leading-relaxed">
                  神的靈應該是有位格的聖靈，三位一體神的第三位。靈這個字，在希伯來文與風是同一個字 רוּחַ（ruach），神 אֱלֹהִים（elohim）
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個字也有能力的意思，因此似乎也可以理解為神的風，或強大的風，某些聖經版本採取這種翻譯。然而從整本聖經的啟示，翻譯為神的靈是最恰當的，因為聖靈真的參與在創造的工作裡，這在本書第二章已有相關的說明。並且，接著的動詞「運行」並不適用於描述風在吹盪，但適用於描述聖靈。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 text-sm">
                <p className="text-gray-700 leading-relaxed">
                  「運行」的原文是 רָחַף（rachaph），可以譯作運行或盤旋，有覆翼、保護的意思。這個字在舊約只有出現三次（創一2，申卅二11，耶廿三9），其中這字在申命記卅二11與在創世記一2的文法詞性是相同的，申命記卅二11：「又如鷹攪動巢窩，在雛鷹以上兩翅搧展，接取雛鷹，背在兩翼之上。」其中的「搧」就是 רָחַף（rachaph）這個字。藉此可看出，「運行」不是靜態的，乃是動態的。一方面好像母雞孵小雞，神的靈在做「孵育」的工作，預備地球上將產生新的生命；另一方面好像老鷹搧展牠的翅膀，要使雛鷹進入牠下一階段的成長過程。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這與我們的代禱工作相似，當我們為一個人或一個城市、國家代禱，神的靈就開始運行其上，而後產生改變，孕育出新的屬靈生命。新約時代，五旬節那天，聖靈降臨，那是因為門徒們照著耶穌的吩咐，十天之久同心合意禱告等候聖靈。以後神的靈繼續運行在耶路撒冷，使耶路撒冷不斷有人歸主得救，同時間耶路撒冷教會的禱告沒有止息，門徒們在殿中、家中都同心合意禱告。這正是禱告與聖靈工作的關聯性，從第一世紀到今天都是這個原則，哪裡有同心合意地禱告，哪裡就有聖靈的工作，並使人得著新生命，帶來屬靈的復興。
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch3-spirit-hovering.png"
                  alt="圖三：神的靈運行，插畫呈現聖靈孵育護翼的意象"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖三：神的靈運行</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                聖靈的工作使創造之工能順利完成，同樣地，救贖之工的完成也是由於聖靈的工作。從傳福音者的角度來看，必須得著聖靈的能力，才能有效傳揚福音、領人歸主。如使徒行傳一8所說：「但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒瑪利亞，直到地極，作我的見證。」從領受福音者的角度來看，人必須受聖靈感動才會來信靠耶穌，如哥林多前書十二3所說：「……被神的靈感動的，沒有說耶穌是可咒詛的；若不是被聖靈感動的，也沒有能說耶穌是主的。」聖靈的工作既然如此重要，我們理當藉著禱告與神同工，使神的靈運行，而後能看到各種豐收的結果。
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
                '「是」（הָיָה，hayah）從文法（情況子句而非次序子句）來看，創世記一2不宜譯為「地變成了空虛混沌」，重造論（時溝論）根據不充分；空虛（תֹּהוּ）混沌（בֹּהוּ）意指沒有次序，是創造過程的第一階段，而非審判後的結果。',
                '黑暗（חֹשֶׁךְ，choshek）不只代表罪惡，也可以是神工作的前兆、神藏身之處；空虛黑暗對應人尚未信主或環境困境的光景，需要藉禱告讓聖靈動工突破。',
                '神的靈（רוּחַ，ruach，與「風」同字）在此應理解為聖靈而非風；「運行」（רָחַף，rachaph）意為孵育、覆翼盤旋，是動態而非靜態的工作，如母雞孵育、老鷹訓練雛鷹飛翔。',
                '聖靈運行與代禱工作相似：哪裡有同心合意的禱告，哪裡就有聖靈的工作，帶來新生命與屬靈復興，五旬節聖靈降臨正是門徒同心禱告的果效。',
                '聖靈的工作使創造之工順利完成，也使救贖之工得以完成；傳福音者需要聖靈的能力，領受福音者需要聖靈的感動，禱告與聖靈工作缺一不可。',
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
              '神創造天地之後，地是空虛渾沌，淵面黑暗。這代表審判後的光景，還是代表創造的過程？在生活實例中，哪些事會有類似空虛黑暗的過程？',
              '神的靈運行在水面上，如同孵育的工作，是為預備後面還有的創造工作。你的工作、事奉，是否經歷過聖靈的運行？請分享一個自己的見證。',
              '你的生命及代禱對象的生命當中，目前有什麼情況需要聖靈來突破？我們可以一起來禱告！',
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
