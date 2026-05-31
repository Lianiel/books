import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第2章</h1>
        <h2 className="text-xl font-semibold text-gray-700">靈性的本質與需求</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">靈性：人與生俱來的生命力</h3>
              <p className="text-gray-700 leading-relaxed">綜合多方學者研究，靈性乃是「人與生俱來內在真實存有的生命力」，貫穿人的一生。它不是宗教活動本身，而是一種深層的內在傾向，驅使人追求連結、意義、超越和盼望。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">靈性的六大特質</h3>
              <div className="space-y-3">
                {[
                  { title: '連結性', desc: '引導個人傾聽內在和世界的聲音，幫助人與自己、他人、上帝（至高者）的關係經驗愛與被愛。' },
                  { title: '和諧性', desc: '引導個人透過尊重、寬恕化解衝突，與自己、他人、上帝及世界萬物平衡、和睦共處。' },
                  { title: '意義性', desc: '驅使個人統整生理、心理和社會環境，追求永恆中非物質向度的生命意義與價值。' },
                  { title: '道德性', desc: '引導個體展現感恩、謙虛、智慧、勇氣、正直、憐憫、公義、愛、和平、喜悅等美善品格。' },
                  { title: '超越性', desc: '引領個人超越自我中心、恐懼、苦難、身心靈軟弱，最終能接納死亡的事實。' },
                  { title: '盼望性', desc: '引導個人對信仰有確據，對來生有把握，知道身體雖然朽壞，但靈魂有歸處而感到平安。' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <span className="font-semibold text-purple-800">{item.title}：</span>
                    <span className="text-gray-700 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">靈性需求的四個面向</h3>
              <p className="text-gray-700 leading-relaxed mb-2">根據靈性的六大特質，人的靈性需求可歸納為：</p>
              <div className="space-y-2">
                {[
                  '在與自己、他人、上帝的關係連結中，經驗愛、互信、互諒，展現良善性情，感到幸福和諧的需求',
                  '在生理、心理和社會環境的統整中，探索生命意義與目的的需求',
                  '渴望透過超然力量，超越自我中心、身心靈軟弱和對死亡恐懼的需求',
                  '完成地上的責任義務，盼望死後靈魂擁有歸處的需求',
                ].map((n, i) => (
                  <div key={i} className="flex gap-2 p-2">
                    <span className="text-pink-500 flex-shrink-0">◆</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{n}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">靈性照顧的本質與目標</h3>
              <p className="text-gray-700 leading-relaxed">靈性照顧提供人身心靈的醫治，支持受傷害的人忍耐或超越逆境，在關係破裂之處予以修復，引導人慎思明辨作出好的選擇，朝向整全、和諧、靈性成熟前進。靈性照顧者可以是教師、醫師、諮商師、社工師、神職人員——任何願意以愛陪伴的人。</p>
              <p className="text-gray-700 leading-relaxed mt-2">靈性照顧還有一個重要的相互性：照顧者必須先親身經歷過愛和寬恕，才能從真實的道德轉化中同理他人，透過信任的陪伴和開放式對話，協助被照顧者探索困境、建構統整的人生觀。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">末期病人的靈性需求特點</h3>
              <p className="text-gray-700 leading-relaxed">末期病人的靈性需求往往更為急迫，因為時間壓縮，加上死亡的未知與恐懼。他們的靈性需求包括：身體舒適、深度同理、處理懸而未決的恩怨、追問死後去向、完成心願、面對親人托付、以及最終的信仰選擇。靈性較健康的病人，因為希望感、勇氣和「在苦難中找到意義」的能力，能以更寬廣的心態面對死亡。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">靈性 vs 宗教：兩者的關係與分別</h4>
              <p className="text-gray-700 leading-relaxed">靈性（Spirituality）比宗教（Religion）更廣。宗教是靈性的一種具體表達形式（儀式、信條、群體），但靈性可以存在於任何人身上，包括無宗教信仰者。研究中的兩位靈性關懷師雖具基督信仰，但在陪伴非基督徒病人時，她們聚焦在靈性的普遍性——每個人都有向善、向上、渴望連結的靈性需求，不論信仰背景。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">靈性照顧的「相互性」：照顧者的自我照顧</h4>
              <p className="text-gray-700 leading-relaxed">靈性照顧不是單向輸出。照顧者必須定期檢視自己的靈性狀態——與自己、他人、上帝的關係是否健康——才能真正同理並支持病人。長期面對死亡而缺乏自我照顧的靈性關懷師，容易陷入同情疲勞（Compassion Fatigue）。因此，個人靈性操練、督導支持和同儕群體，是靈性關懷師的重要支撐系統。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「全人照顧」模型：BIOPSYCHOSOCIAL-SPIRITUAL</h4>
              <p className="text-gray-700 leading-relaxed">現代安寧照顧採用「身體—心理—社會—靈性」的全人照顧模型。靈性需求不只是臨終才有，但在末期情境下往往最為凸顯，且常常與其他需求相互牽動。例如身體疼痛若無法控制，靈性會談就難以進行；社會關係的衝突，也可能直接引發或加重靈性困擾。因此靈性關懷師需要有跨專業視野，懂得轉介也懂得整合。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「盼望」在臨終關懷中的角色</h4>
              <p className="text-gray-700 leading-relaxed">盼望（Hope）對末期病人至關重要，但「盼望治癒」往往需要轉化為「盼望善終」、「盼望關係和好」或「盼望永生」。靈性關懷師的功夫，在於幫助病人找到適合自己靈性處境的盼望，而不是給予不切實際的保證，也不是在病人信仰軟弱時急著神學說教。西西里．桑德斯所說的「陪伴死亡還是陪伴生命」，正是提醒我們：關懷師的目光始終朝向生命，即使在死亡門口。</p>
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
              '靈性的六大特質（連結、和諧、意義、道德、超越、盼望）中，哪一個在你自己生命中目前最需要被滋養？',
              '你如何向一個不信教的朋友解釋「靈性」是什麼？你會用什麼語言？',
              '「靈性照顧的相互性」說照顧者要先親身經歷過愛和寬恕。你覺得你在哪個層面還需要被醫治，才能更真實地給予靈性關懷？',
              '你見過或經歷過「在苦難中找到意義」的例子嗎？那個意義是如何被找到的？',
              '如果你必須現在回答「死後我的靈魂去哪裡」，你的答案是什麼？這個答案帶給你平安還是焦慮？',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌿 「靈性特質」個人評估練習</h4>
              <p className="text-gray-700 mb-2">用 1-5 分評估自己目前六大靈性特質的狀況（5=非常豐盛，1=十分匱乏）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>連結：我與上帝、他人的關係有多深？</li>
                <li>和諧：我心中有沒有未解的衝突或怨恨？</li>
                <li>意義：我感受到自己生命的意義與目的嗎？</li>
                <li>道德：我的生命樣貌在展現哪些美善？</li>
                <li>超越：我能超越恐懼和自我中心嗎？</li>
                <li>盼望：我對未來有確據和平安嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 學習「靈性評估問句」</h4>
              <p className="text-gray-700 mb-2">練習用開放式問句探索一個人的靈性狀態（不急著給答案）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>「在這段艱難中，什麼給了你力量？」</li>
                <li>「你覺得自己的生命有什麼意義嗎？」</li>
                <li>「有什麼事是你一直想做但還沒做的？」</li>
                <li>「你對未來有什麼盼望嗎？」</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium text-sm">禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「天父，感謝祢創造我們有靈性，讓我們與祢連結。求祢幫助我認識自己靈性的缺乏，在那缺乏中向祢敞開。讓我的生命成為一個能連結他人、帶來盼望的管道。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
