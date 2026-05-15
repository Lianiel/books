export default function Chapter3() {
  return (
    <div className="space-y-6 text-slate-700">
      <h2 className="text-3xl font-bold text-violet-900 mb-6 border-b-4 border-violet-300 pb-2">
        第三篇：第一層天禱告
      </h2>

      <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded">
        <p className="text-violet-900 text-base">
          第一層天則是我們<strong>日常生活需要</strong>的層面。包括家庭、親子、人、事、物、環境等，是我們天天接觸的層面。
        </p>
      </div>

      {/* 1. 為個人禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">👤</span> 1. 為個人禱告
        </h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">恩寵宣言</h4>
            <div className="space-y-2 text-base">
              <p>• 藉著十架寶血，我得以進入恩寵的嶄新時期</p>
              <p>• 藉著耶穌的血，我行走在神的恩寵中</p>
              <p>• 我是大蒙神眷顧與恩寵的</p>
              <p>• 因著神的恩寵，我必得勝</p>
              <p>• 因著神的恩寵，祂必為我爭戰</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">基督眼中的我</h4>
            <div className="space-y-2 text-base">
              <p>✓ <strong>我是被揀選的</strong> — 弗 1:4</p>
              <p>✓ <strong>我得了兒子的名份</strong> — 弗 1:5</p>
              <p>✓ <strong>我是新造的人</strong> — 林後 5:17</p>
              <p>✓ <strong>我是聖潔的</strong> — 弗 1:4</p>
              <p>✓ <strong>我已蒙救贖</strong> — 詩 103:4</p>
              <p>✓ <strong>我已被赦免</strong> — 約壹 2:12</p>
              <p>✓ <strong>我已得醫治</strong> — 賽 53:5</p>
              <p>✓ <strong>我已得釋放</strong> — 西 1:13</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">以基督的心為心</h4>
            <div className="space-y-2 text-sm text-slate-700">
              <p>• 求主賜給我禱告的靈，成為代禱勇士</p>
              <p>• 求主幫助我，凡事謝恩，嘴唇常結頌讚果子</p>
              <p>• 求主保守我遠離試探，脫離兇惡，成為清心禱告的人</p>
              <p>• 求主使我日日更新，被聖靈充滿，治死老我，過得勝的生活</p>
              <p>• 求主讓我專心愛你，每日操練敬虔生活，以你為樂</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">交託禱告（詩篇 37:4-5）</h4>
            <p className="text-base italic">
              「又要以耶和華為樂，他就將你心裡所求的賜給你。當將你的事交託耶和華，並倚靠他，他就必成全。」
            </p>
          </div>
        </div>
      </section>

      {/* 2. 為家庭禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🏠</span> 2. 為家庭禱告
        </h3>
        
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-2">為未信主家人</h4>
            <div className="space-y-2 text-sm">
              <p>• 求主使______的眼睛得開，從黑暗中歸向光明，從撒但權下歸向真神</p>
              <p>• 求主捆綁迷惑______的黑暗權勢，攻破仇敵在心中所設下的堅固營壘</p>
              <p>• 奉主耶穌基督名祝福______凡事興盛、身體健壯、靈魂興盛</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-2">為已信主家人</h4>
            <div className="space-y-2 text-sm">
              <p>• 求主堅固______的信心，在真道上站立得穩</p>
              <p>• 求主使______結出聖靈的果子，生命日日更新</p>
              <p>• 求主保守______全家在主裡合一，彼此相愛</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-2">經文應許</h4>
            <div className="space-y-2 text-sm">
              <p><strong>徒 16:31</strong> — 當信主耶穌，你和你一家都必得救</p>
              <p><strong>詩 145:16</strong> — 你張手，使有生氣的都隨願飽足</p>
              <p><strong>詩 113:9</strong> — 他使不能生育的婦人安居家中，為多子的樂母</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 為教會禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">⛪</span> 3. 為教會禱告
        </h3>
        
        <div className="bg-purple-50 p-4 rounded-lg space-y-2 text-base">
          <p>• 求主賜下復興，讓聖靈大大充滿我們的教會</p>
          <p>• 求主興起更多代禱勇士，為教會守望禱告</p>
          <p>• 求主給我們開傳道的門，能以講基督的奧秘（西 4:3）</p>
          <p>• 求主賜下合一的心，弟兄姊妹彼此相愛</p>
          <p>• 求主保守牧者有智慧、能力，按正意分解真理的道</p>
        </div>
      </section>

      {/* 4. 為社區禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
        <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🌆</span> 4. 為社區禱告
        </h3>
        
        <div className="bg-amber-50 p-4 rounded-lg space-y-2 text-base">
          <p>• 求主使我們成為社區的光和鹽</p>
          <p>• 求主賜下平安，保守社區遠離災害和兇惡</p>
          <p>• 求主打開福音的門，讓更多鄰舍認識耶穌</p>
          <p>• 求主祝福社區的學校、商家、家庭都蒙恩</p>
        </div>
      </section>

      {/* 5. 為國家禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🇹🇼</span> 5. 為國家禱告
        </h3>
        
        <div className="bg-red-50 p-4 rounded-lg space-y-2 text-base">
          <p>• 求主賜智慧給國家領袖，按公義治理國家</p>
          <p>• 求主保守國家平安，免於戰爭和災難</p>
          <p>• 求主興起敬畏神的領袖，帶領國家走義路</p>
          <p>• 求主祝福我們的國家經濟、教育、醫療都蒙恩</p>
          <p>• 求主使福音廣傳，讓更多百姓歸向真神</p>
        </div>
      </section>

      {/* 6. 為以色列禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">✡️</span> 6. 為以色列禱告
        </h3>
        
        <div className="bg-indigo-50 p-4 rounded-lg space-y-3 text-base">
          <p className="font-semibold text-indigo-900">詩篇 122:6</p>
          <p className="italic">「你們要為耶路撒冷求平安！耶路撒冷啊，愛你的人必然興旺！」</p>
          
          <div className="mt-4 space-y-2">
            <p>• 求主保守以色列平安，四境安穩</p>
            <p>• 求主賜智慧給以色列領袖，按神心意治理</p>
            <p>• 求主使以色列全家都要得救（羅 11:26）</p>
            <p>• 求主祝福列國愛以色列的必蒙福</p>
          </div>
        </div>
      </section>

      {/* 7. 進入幔內的禱告 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-violet-100">
        <h3 className="text-xl font-bold text-violet-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span> 7. 進入幔內的禱告
        </h3>
        
        <div className="bg-violet-50 p-4 rounded-lg text-base">
          <p className="mb-3 font-semibold text-violet-900">希伯來書 10:19-22</p>
          <p className="italic mb-4">
            「弟兄們，我們既因耶穌的血得以坦然進入至聖所，是藉著他給我們開了一條又新又活的路，從幔子經過，這幔子就是他的身體。」
          </p>
          <p>主啊，感謝你為我開了一條又新又活的路，我可以坦然無懼來到施恩寶座前，領受恩惠，得著幫助。</p>
        </div>
      </section>

      {/* 8. 主禱文 */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-yellow-100">
        <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📿</span> 8. 主禱文的禱告
        </h3>
        
        <div className="bg-yellow-50 p-5 rounded-lg">
          <div className="space-y-3 text-base leading-relaxed">
            <p>我們在天上的父：</p>
            <p>願人都尊你的名為聖。</p>
            <p>願你的國降臨；</p>
            <p>願你的旨意行在地上，如同行在天上。</p>
            <p>我們日用的飲食，今日賜給我們。</p>
            <p>免我們的債，如同我們免了人的債。</p>
            <p>不叫我們遇見試探；救我們脫離兇惡。</p>
            <p className="font-bold text-yellow-900 mt-4">
              因為國度、權柄、榮耀，全是你的，直到永遠。阿們！
            </p>
          </div>
        </div>
      </section>

      {/* 總結 */}
      <div className="bg-blue-100 p-5 rounded-lg mt-8">
        <p className="text-blue-900 font-semibold text-center">
          🙏 第一層天禱告的核心：為日常生活各層面代求，從個人到家庭、教會、社區、國家、列邦。
        </p>
      </div>
    </div>
  );
}
