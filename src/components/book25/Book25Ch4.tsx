import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命成長的四個領域</h2>
        <p className="text-gray-500 mt-1">門徒需要在哪些領域成長？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">四個領域的根源：以弗所書的藍圖</h3>
              <p className="text-gray-700 leading-relaxed">作者從保羅寫給以弗所信徒的信中，找出了門徒生命的「四個領域」框架。這不是人為發明的分類，而是保羅在門徒帶領上的聖經藍圖。保羅在以弗所書中循序漸進地展開這四個領域，反映了門徒生命應該如何從內到外、從個人到群體、從家庭到職場全面地被基督改變。</p>
              <p className="text-gray-700 leading-relaxed mt-3">許多基督徒知道應該愛神家中的其他成員，但卻忽略了自己的家庭；很多人說「教會是教會、職場是職場」，結果在職場上便不是耶穌真正的門徒。這種分裂的信仰是不健康的，四個領域的框架提醒我們，耶穌的主權應該延伸到生命的每一個角落。</p>
            </div>

            {/* 四個領域 */}
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">領域一：與神的關係（以弗所書1-3章）</h3>
                <p className="text-gray-700 mb-3">這是四個領域的核心，把其他領域連結起來的樞紐。保羅在以弗所書前兩章提醒我們，因著福音，我們被天父收納為屬靈孩子。我們不是意外，我們的生命早在創世以前就被計畫好了。若我們忘記自己是因著恩典得救，安全感與力量是來自於神，就會掉入靠著行為得救的謬誤，也可能被罪疚感壓垮，放棄想要成長得更像耶穌的渴望。約翰福音十五章告訴我們，若想要結果子，必須住在基督裡——我們最重要的領域是個人與耶穌的關係。</p>
                <div className="space-y-1">
                  <p className="font-semibold text-blue-700">三個評估問題（頭腦、心靈、雙手）：</p>
                  <p className="text-gray-600">• 頭腦：這人知道耶穌教導關於與祂在關係上成長的事嗎？他願意降服於基督嗎？</p>
                  <p className="text-gray-600">• 心靈：他的生命有看得見的改變嗎？他在愛神與愛人上有穩定的成長模式嗎？</p>
                  <p className="text-gray-600">• 雙手：他願意跟隨基督所帶領的方向嗎？他使用恩賜幫助別人與耶穌和好嗎？</p>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                <h3 className="font-bold text-teal-800 mb-2">領域二：與神的家（教會）的關係（以弗所書4章）</h3>
                <p className="text-gray-700 mb-3">保羅在第四章把焦點轉向，討論與基督的關係會如何影響我們與其他信徒的關係。我們重生時便成為神家中的一分子，有屬靈的天父以及在基督裡的兄弟姐妹。我們很容易接受有一位愛我們的天父這樣的好消息，卻沒有和其他信徒建立弟兄姐妹的關係，但這兩者是密不可分的。教會是神對人際孤立的回應——一個有牧者心腸的牧師照顧成長中信徒的家庭。保羅在信中指示人如何處理衝突和怒氣，以及如何使用神給的恩賜彼此服事。</p>
                <div className="space-y-1">
                  <p className="font-semibold text-teal-700">三個評估問題：</p>
                  <p className="text-gray-600">• 頭腦：他知不知道聖經關於教會及與其他信徒關係重要性的教導？</p>
                  <p className="text-gray-600">• 心靈：他對基督身體中其他人的愛，是否有增長？</p>
                  <p className="text-gray-600">• 雙手：他有沒有運用自己的恩賜服事有需要的信徒？</p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <h3 className="font-bold text-indigo-800 mb-2">領域三：家庭內的關係（以弗所書5-6章）</h3>
                <p className="text-gray-700 mb-3">保羅談到對信徒來說，家庭應該是什麼樣子：丈夫應該領導並愛妻子，妻子應該尊重丈夫；父母在主裡養育孩子的責任，以及子女如何對待父母。保羅清楚：我們不能把關係分門別類，聖靈希望能影響信徒生活的每一個領域，而帶領門徒的最佳場合就是自己的家庭。不是每個基督徒都有領導恩賜，但每個信徒都應該要帶領門徒，最應該重視的地方就是我們的家。作者深信：若他贏得了全世界卻失喪了自己的孩子，那會是最大的失敗。</p>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
                <h3 className="font-bold text-cyan-800 mb-2">領域四：與世界的關係（以弗所書6章）</h3>
                <p className="text-gray-700 mb-3">保羅談論奴僕和主人的意義——在今天的應用，就是我們的工作和社會關係。保羅指出：信徒在世上代表基督，無論做什麼都不只是為人做，是為主做的。我們的工作影響上帝的名聲。保羅希望我們了解，我們和耶穌的關係必然影響我們在世的生活和工作。他教導門徒要有道德心，始終如一，即使別人不以同樣態度回應，非信徒仍然可以看到我們的好行為而榮耀神。換句話說：職場是宣教禾場。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 mb-2">四個領域的應用：以翠喜的故事為例</h3>
              <p className="text-gray-700 leading-relaxed">翠喜是社會心理復健師，剛成為基督徒，在小組中學到與耶穌的關係。她知道耶穌希望在她生命的每個領域作主——包括工作中的關係。在一次主日崇拜，她感覺上帝呼召她在工作機構開始查經班，而不只是一個手工藝班。她猶豫不決，但順服之後，督導居然批准了。查經班從兩個人開始，慢慢成長，最後成為機構裡最多人參加的課程。這就是讓耶穌在「與世界的關係」這個領域作主的結果。</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 mb-2">屬靈爭戰的現實</h3>
              <p className="text-gray-700 leading-relaxed">帶領門徒的過程是在屬靈爭戰的風暴中發生的。我們不是在安全、中立的領土上帶領門徒；總是有仗要打。當我們幫助別人對付他們的罪性和不斷纏擾的罪時，魔鬼會抗拒我們。但好消息是，保羅在以弗所書六章告訴我們，我們不是手無寸鐵、毫無保護地在打這場仗——我們需要穿上神給的全副軍裝，準備好堅守陣地。</p>
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
                '門徒生命的四個領域——與神、與教會、與家庭、與世界的關係——都需要被耶穌的主權影響和轉化。',
                '第一領域（與神的關係）是核心，是其他三個領域的根基；若沒有紮實的與神同行，其他領域的成長將是建在沙土上。',
                '許多基督徒把信仰和職場、家庭分開，這是不健康的——耶穌的主權應該延伸到生命的每一個角落。',
                '家庭是最重要的門徒帶領禾場；每個信徒都應該先照顧好自己的家庭，再向外延伸服事。',
                '職場（與世界的關係）是宣教禾場——我們的工作倫理和行為見證，直接影響非信徒對耶穌的觀感。',
                '帶領門徒是在屬靈爭戰中進行的；需要穿戴神的全副軍裝，才能站立得住。',
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼保羅要刻意涵蓋這四個領域？</h4>
              <p className="text-gray-700 leading-relaxed">保羅非常清楚：真正的門徒生命是全面性的，不能只停留在屬靈領域。他在以弗所書中，從宇宙層面（神的宏大計畫）到教會（肢體關係）、到家庭（婚姻、親子）、到職場（奴僕與主人關係），一層一層地展開，目的是讓信徒明白：信仰不是「週日的活動」，而是滲透到生活每個角落的生命方式。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">頭腦、心靈、雙手的三重評估的意義</h4>
              <p className="text-gray-700 leading-relaxed">作者為每個領域提出三個評估維度：頭腦（知識與委身）、心靈（內在轉化）、雙手（外在行動）。這三重評估防止了幾個常見的失衡：只有知識沒有改變、只有情感沒有行動、只有行動沒有根基。真正的門徒成長必須在這三個層面同時進行，缺少任何一個都是不完全的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">職場宣教的神學根基</h4>
              <p className="text-gray-700 leading-relaxed">以弗所書六章提到奴僕與主人的關係，保羅說：「無論做什麼，都要從心裡做，像是給主做的，不是給人做的。」（歌羅西書三章23節有類似的教導）這是對職場宣教的神學根基——我們的工作不只是謀生，更是服事神、見證神。每一個信徒都是在工作場所的「宣教士」，只是大多數人從未這樣看待自己的職場身分。</p>
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
              '在四個領域中，你目前哪個領域的門徒生命最健康？哪個最需要成長？',
              '你有沒有把信仰和某個生活領域分開的傾向？例如工作中不提信仰，或在家裡不實踐在教會學到的教導？',
              '你的家庭是你門徒帶領的「首要禾場」嗎？你怎樣在家裡活出信仰，作你孩子或配偶的屬靈榜樣？',
              '翠喜的故事讓你想到什麼？你的職場有沒有讓你看見宣教機會的人或情境？',
              '你認為你的教會目前有沒有系統性地幫助會眾在這四個領域中成長？還是主要只集中在某一個領域？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 四個領域的個人健康評估</h4>
              <p className="text-gray-700 mb-2">用1-10分評估你在每個領域的健康程度，然後選擇最低分的領域，制定一個具體的成長計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>與神的關係（____分）：你的每日靈修習慣如何？</li>
                <li>與教會的關係（____分）：你有固定投入的小組和屬靈朋友嗎？</li>
                <li>與家庭的關係（____分）：你在家裡如何活出信仰？</li>
                <li>與世界的關係（____分）：你在職場的言行如何見證耶穌？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每週的四領域反思</h4>
              <p className="text-gray-700">每週日晚上，用10分鐘反思過去一週，問自己：「耶穌要我在哪個領域做些什麼？有沒有我需要解開的心結？需要服事的人？需要主動帶領的家人？需要改進的職場行為？」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 在你的小組中引入四個領域</h4>
              <p className="text-gray-700">下次小組聚會，分享這四個領域的框架，邀請組員一起討論：我們的小組目前最關注哪個領域？哪個領域是我們最少談到的？如何在小組中加入這個部分？</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，你是我生命一切的主。求你幫助我不只在教會聚會時跟從你，而是在家庭、職場、和每一個關係中，都讓你的主權彰顯。求你帶領我在每一個領域都越來越像你。使我的家庭成為門徒訓練的禾場，使我的職場成為宣教的場域。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
