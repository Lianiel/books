import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">為門徒下定義</h2>
        <p className="text-gray-500 mt-1">作耶穌的門徒是什麼意義？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">潛在的未爆彈：什麼是門徒？</h3>
              <p className="text-gray-700 leading-relaxed">在作者卜冀曼的訓練研討會中，他常給領導團隊兩個問題：第一個問題——「教會存在的目的是什麼？」幾乎所有人都回答：門徒訓練。但第二個問題——「何謂門徒？」卻往往讓整個領導團隊陷入分歧。在多年的訓練中，他只遇到兩間教會是整個團隊在這個定義上有完全共識的。</p>
              <p className="text-gray-700 leading-relaxed mt-3">不同的同工可能有截然不同的答案：宣教部牧師認為門徒是「向外接觸失落者的人」；教導牧師認為「靈命成熟就是深入了解聖經」；敬拜部牧師強調「崇拜能夠吸引人」；社關同工認為「真正的門徒愛貧窮人和邊緣人」。這些答案聽起來都不錯，也都符合聖經，但當一個教會在基本定義上無法有共識時，問題就大了——不同的同工往往在各自的方向用力，造成教會資源分散，沒有合力的果效。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">帶人歸主與帶出門徒的差異</h3>
              <p className="text-gray-700 leading-relaxed">悔改信主是作門徒過程中的第一步，但不是終點。作門徒是一個永無止盡的學習過程。現今教會面臨的問題，是充滿了信徒，卻缺少真正的門徒。信徒和門徒的差別在於：信徒接受了救恩，但門徒在接受救恩後，繼續全心全意地學習跟隨耶穌，被耶穌改變，並加入耶穌的使命。</p>
              <p className="text-gray-700 leading-relaxed mt-3">聖經提到「門徒」一詞約有270次，但只有3次提到「基督徒」。這告訴我們，聖經關注的核心是門徒生命，而不只是如何讓人作出決志的禱告。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">馬太福音四章19節的框架</h3>
              <p className="text-gray-700 leading-relaxed">作者以馬太福音四章19節為框架來定義門徒：「耶穌對他們說：『來跟從我，我要叫你們得人如得魚一樣。』」這節簡單的經文勾勒出三個核心特徵，涵蓋了門徒生命的頭腦、心靈和雙手三個層面。</p>
              <div className="space-y-3 mt-3">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="font-bold text-blue-800 mb-1">1. 「來跟從我」— 頭腦層面（知識與委身）</p>
                  <p className="text-gray-700">耶穌的門徒必須跟從耶穌。這代表在頭腦層面接受耶穌的主權和真理。「跟從」意味著承認並接受耶穌是我們的主、領導、及生活的主宰。這不是說跟從耶穌的路很輕鬆——馬太福音十六章告訴我們必須捨己、背起十架——但耶穌應許祂將永遠與我們同在（太二十八20）。跟從耶穌是一個理智層面的邀請：來學習並相信關於耶穌的真理，容許祂以真理取代這世界給我們的謊言。</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                  <p className="font-bold text-teal-800 mb-1">2. 「我要叫你們」— 心靈層面（轉化與改變）</p>
                  <p className="text-gray-700">這五個字講到轉化的過程。作門徒不只要作理智上的決定，也需要在心中和情感上有轉化。羅馬書八章29節告訴我們，我們會被轉化成為基督的模樣；哥林多後書三章應許神會將我們轉化成主的形狀，榮上加榮。重要的是：神在我們還沒有任何改變之前，就邀請我們成為祂的門徒。我們不需要先清理好自己，才能去找耶穌。在福音書中，耶穌的門徒也常常表現出自私、無禮、搞不清楚狀況——耶穌揀選他們是看到他們能成為什麼，而不是他們已經是什麼。</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <p className="font-bold text-indigo-800 mb-1">3. 「得人如得魚一樣」— 雙手層面（使命與行動）</p>
                  <p className="text-gray-700">這個邀請指出了行動上的回應。耶穌的門徒是為了一個目的得救的——加入耶穌的宣教，伸手去愛失落傷痛的世界。彼得和安得烈一生都是漁夫，捕魚是他們唯一會做的事。現在耶穌改變了一切：「從此，他們要成為得人的漁夫。」今天耶穌的門徒也以類似的方式回應——當我們花時間與耶穌相處時，過去驅動我們的熱情（財產、名聲、權力）不再重要，我們開始從耶穌的眼光看這個世界，開始關心神所關心的，尤其是未信者。</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">門徒的完整定義</h3>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4">
                <p className="font-bold text-blue-800 text-lg mb-2">門徒 = 跟從基督（頭腦）+ 被基督改變（心靈）+ 委身於基督的使命（雙手）</p>
                <p className="text-gray-700">這就是教會要試著培育的人。根據美國大部分教會的現況，要做到這一點需要轉化：從只是帶人歸主，轉到接觸人並帶領他們成為門徒。我們的目標是要把人完完全全引到基督面前（西一28）。</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">真實案例：斯伯堪真生命事工的經驗</h3>
              <p className="text-gray-700 leading-relaxed">蕭理齊在離開教牧工作、心灰意冷之後，應卜冀曼之邀到斯伯堪植堂。他從三十個人、三個小組開始，面對一群對「合乎聖經的教會DNA」一無所知的人。他們從聖經中替真正的門徒帶領和關係下定義，並在生活中付諸行動。</p>
              <p className="text-gray-700 leading-relaxed mt-3">衝突馬上浮現：有些人想把教會弄得像從前記憶中的那樣，有些人不願意為了福音調整自己的生活。但當他們為合一而戰時，有意想不到的事情發生——小組從三個倍增到六個，再到十二個，最後發展到近八百人，有四十個正在成長和倍增的小組散佈在城市各處，超過一百人受洗。這就是當一間教會對門徒有共同定義時所產生的果效。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '教會領導團隊對「何謂門徒」必須有共同的定義，否則各同工各自努力，資源分散，毫無合力果效。',
                '悔改信主是門徒之旅的起點，而非終點；真正的門徒訓練是一個持續且永無止盡的過程。',
                '馬太福音四章19節提供了門徒的三個核心特徵：跟從基督（頭腦）、被基督改變（心靈）、委身基督的使命（雙手）。',
                '耶穌揀選門徒，是看到他們能成為什麼，而不是他們已經是什麼——神在我們改變之前就邀請我們，恩典貫穿整個過程。',
                '大使命（太二十八18-20）不只是領人歸主，而是要人成為真實的門徒，學習遵守耶穌一切的吩咐。',
                '好的門徒定義需要符合聖經、夠清楚、簡單到小孩都聽得懂，又複雜到涵蓋耶穌的所有教導。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「基督徒」和「門徒」的歷史意義</h4>
              <p className="text-gray-700 leading-relaxed">在初代教會，第一批跟隨耶穌的人被稱為「門徒」。後來他們因為和基督的連結而被稱為「基督徒」（徒十一26）——這個稱號最初是外人給他們的，帶有諷刺意味，意思是「屬基督的人」。但今天，「基督徒」這個詞的定義已經大大擴展——超過80%的美國人自稱為基督徒，但其中許多人從未認真跟隨過耶穌。這正是為什麼聖經提到「門徒」270次而只提到「基督徒」3次：門徒是更準確的表達。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">大使命的正確詮釋</h4>
              <p className="text-gray-700 leading-relaxed">太多教會在提到大使命時，指的只是「領人歸主」。但馬太福音二十八章18-20節明確說：「使萬民作我的門徒，奉父子聖靈的名給他們施洗，凡我所吩咐你們的，都教訓他們遵守。」門徒不僅是信徒，更是實踐者、學習者、跟隨基督者，是「耶穌的學徒」。大使命包含兩個不可分割的動作：施洗（接受信仰）和教導遵守（在生命中活出來）。只做其中一項，是不完整的門徒訓練。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">定義共識的實際意義</h4>
              <p className="text-gray-700 leading-relaxed">當一個教會對門徒有共同的定義時，所有的事工、小組、崇拜、兒童事工都可以朝著同一個目標前進。這種對齊帶來的力量是巨大的。反之，若每個同工對「成功」有不同的定義，就像一支球隊裡的球員各自奔向不同的方向——力量相互抵消，甚至互相妨礙。作者強調：定義必須簡單到教會每個人都記得住，並且可以以其為服事準則。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '如果你現在問你的教會領導團隊「何謂門徒」，你預測會得到什麼樣的答案？這些答案之間有共識嗎？',
              '在「跟從基督、被基督改變、委身基督使命」三個層面中，你認為你個人目前最強的是哪一個？最需要成長的是哪一個？',
              '你在帶領人進入信仰後，有沒有繼續陪伴他們成長？還是接受了他們的信主決定後就讓他們自生自滅？',
              '你如何向一個初信者解釋「成為門徒」的意義？你能用簡單的語言讓一個十歲的孩子理解嗎？',
              '「耶穌揀選門徒是看到他們能成為什麼，而不是他們已經是什麼」——這個真理對你個人的信心有什麼鼓勵？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 領導團隊定義門徒</h4>
              <p className="text-gray-700 mb-2">安排一次領導團隊會議，請每位成員事先各自寫下「何謂門徒」的定義，不討論。會議上收集所有答案，一起閱讀並比較，然後共同用聖經建立一個所有人都認同的定義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 馬太福音四章19節的個人默想</h4>
              <p className="text-gray-700 mb-2">每天早上用五分鐘，反思以下三個問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天我怎樣「跟從」耶穌？（頭腦：我願意接受耶穌的主權嗎？）</li>
                <li>今天耶穌要在我哪裡「作工」改變我？（心靈：我向聖靈敞開嗎？）</li>
                <li>今天我怎樣「得人」？（雙手：我有沒有機會愛一個未信者？）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的門徒定義</h4>
              <p className="text-gray-700">根據本章的學習，用一到兩句話寫下你個人對「門徒」的定義，貼在你每天看得到的地方。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，謝謝你不是因為我已經成熟才來邀請我，而是在我還不完全的時候就呼召了我。求你幫助我不只是一個「基督徒」，更要成為你真正的門徒——一個跟從你、被你改變、並委身於你使命的人。也求你幫助我的教會，能夠對門徒有清晰的共同定義，並且朝著這個目標一起努力。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
