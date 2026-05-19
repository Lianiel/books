import React from 'react';
import { Compass, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">二階：日常生活中的靈修</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <Compass className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <p className="text-gray-700 leading-relaxed bg-violet-50 rounded-lg p-4 border-l-4 border-violet-400">
            作為基督的門徒，我們日常生活的每時每刻都要跟隨基督，透過生活與上帝聯合。內室靈修雖然很重要，但亦有其局限之處，因為我們可能會按照自己所想像的去理解話語中的基督。日常生活的靈修使我們在真實的處境中認識基督。
          </p>

          <h3 className="font-bold text-gray-900 text-lg">一、委身教會的生活</h3>
          <p className="text-gray-700 leading-relaxed">
            中世紀影響最深的《本篤會規》在開篇就強調修道生活的兩個關鍵因素：委身與順服。委身就是委身於所加入的群體，並願意終生留在那裡，讓自己在這個群體當中生活。教會傳統指出：「在教會之外沒有生命的成長，不會讓人經歷生命根基的轉變。」
          </p>
          <p className="text-gray-700 leading-relaxed">
            按照委身的緊密程度，委身教會依序有以下四個層面：（1）規律地參加教會的活動，如主日敬拜、周間小組等；（2）比較委身地參與教會某一項服侍；（3）蒙召在教會做某個層面的帶領性服侍；（4）不僅在服侍上，同時自覺地在信約或教會理念上委身教會。
          </p>
          <p className="text-gray-700 leading-relaxed">
            委身教會帶來四種屬靈功課：<strong>在教會操練順服</strong>（學習在關係中捨棄自我中心）、<strong>在教會學習承擔責任</strong>（把自己擺在基督的手上，在他擺放我們的位置忠心服事）、<strong>從服侍他人學習舍己的愛</strong>、<strong>當教會遇到危機時，挑戰我們是否真的認識基督</strong>。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">二、日常生活中的敬虔</h3>
          <p className="text-gray-700 leading-relaxed">
            英國靈修家勞威廉（William Law, 1686-1761）在《敬虔與聖潔生活的嚴肅呼召》中尖銳地指出：許多基督徒的生活不過是「一個異教徒的人生以基督徒的禱告為點綴」——他們在工作時是一套原則，在禱告時又是另一套。這種人格分裂不是基督信仰所講的敬虔。
          </p>
          <p className="text-gray-700 leading-relaxed">
            加爾文對敬虔的定義是：「我們經歷神的恩惠，並因這知識產生我們心裡對神的敬畏和愛。」單單是敬畏，或者單單是愛，都不是加爾文所理解的敬虔。他理解的敬虔是對上帝從內心湧出來的敬畏與愛。
          </p>
          <p className="text-gray-700 leading-relaxed">
            真正的敬虔要求建立「裡外一致的生活秩序」：如果禱告是一個人在上帝面前最為真誠的表達，那麼就當照著這樣的禱告度過每一天，讓個人生活不只在禱告裡面對上帝，也在每件事上面對上帝，為榮耀他而活。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">三、生活中的靈修操練</h3>
          <div className="space-y-3">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2">時間管理與靈修</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                借著禱告，信徒的生活可以被禱告中的光照亮和規範，使生活更有秩序，也被聖經原則規範。當我們做事有了這樣的秩序，心靈就會得享自由和釋放，而不會感到束縛和困乏。
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2">職場生活與靈修</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                工作的首要目標是服侍人。信徒在職場中的靈修，包括：以服侍人的心態投入工作、全心全意地工作（作為對上帝呼召的回應）、在工作中對付心靈中的自義。「與主一同負軛，才是內心最得安息的人生。」
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2">業餘生活與靈修</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                業餘時間同樣是靈修的場域。我們如何使用閒暇，反映了我們真正的優先次序。在業餘生活中操練敬虔，包括管理娛樂和消遣，使之服從生命呼召的方向。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">四、清心致力於一事</h3>
          <p className="text-gray-700 leading-relaxed">
            懶惰是一種生活的慣性。中世紀將懶惰視為七宗大罪之一，其定義不只包括「做太少」，也包括「做太多」——即不分輕重地忙碌，卻沒有朝著清晰的目標前進。
          </p>
          <p className="text-gray-700 leading-relaxed">
            加爾文強調：沒有生命的呼召，特別是沒有服侍的目標，人會變得越來越懶惰。有了服侍主的目標，就會主動朝著這個目標努力奔跑。「清心致力於一事」要求我們操練：邊吃飯不邊看書、行走時專心不看手機、一次只做一件事，讓每件事都在上帝面前完整地完成。
          </p>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">《本篤會規》的當代意義</h4>
            <p className="text-gray-700 leading-relaxed">
              六世紀的本篤（Benedict of Nursia）為修道院制定的生活規則，核心是「祈禱與工作」（Ora et Labora）的平衡。他強調委身於特定群體（而非流浪修士）、在固定時間祈禱、在群體中學習順服。這些原則對今天的信徒同樣適用：委身一個特定的教會群體，比在「各處轉」的屬靈消費主義中更能造就生命。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">勞威廉的挑戰：你是否在生活中真的愛主？</h4>
            <p className="text-gray-700 leading-relaxed">
              勞威廉的洞察犀利但公平：一個人的真實靈命，不是由禱告時的感受決定，而是由他在日常生活中如何對待每一件事所顯示出來的。如果我禱告時說「主啊，我愛你」，但在交通堵塞時卻怒氣衝天，這說明什麼？他不是要我們完美，而是要我們誠實地看見：我們日常生活中的言行，揭示了我們靈魂的真實狀態。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">多工（Multitasking）與靈修的張力</h4>
            <p className="text-gray-700 leading-relaxed">
              現代文化高舉多工能力，但神經科學研究顯示，人類大腦實際上無法真正同時處理多件需要注意力的任務，只是在快速切換。更深的問題是：多工的習慣訓練了心靈無法在任何一件事上真正臨在。靈修所要求的「清心致力於一事」，不只是效率問題，更是心靈操練的問題——學習在每件事上都真正地「在場」。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '你的日常生活和你在禱告/靈修中的表達，有多少是一致的？在哪些領域你感到明顯的「裡外不一致」？',
            '你對教會的委身程度如何？你認為自己目前處於哪個層面？你希望在委身上有什麼改變？',
            '勞威廉說：「如果你願意在凡事上討神喜悅，你就不會再講髒話了。」這個例子對你有什麼衝擊？你有類似的「靈修盲點」嗎？',
            '你的工作（或主要的日常活動）中，有哪些地方你可以更有意識地「以服侍人的心態」去做？',
            '你是否有「清心致力於一事」的習慣？你在哪些情況下最容易分心？',
            '加爾文說生命的呼召給生活帶來秩序和意義。你覺得自己目前的生活有沒有一個清晰的呼召方向？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">⛪ 評估你的教會委身</h4>
            <p className="text-gray-700 mb-2">寫下你目前在教會中的委身狀況：你是否規律參加主日崇拜？你是否有一項你承諾負責的服侍？你是否有一個你可以彼此問責的小組？</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🕐 設計你的一日禱告時段</h4>
            <p className="text-gray-700 mb-2">仿照古代修道傳統，為你的每一天設計3個簡短的禱告時刻（如：早晨起床時、午間休息時、睡前）。每個時段只需3-5分鐘，目的是讓禱告串聯你的一天，而非只在早晨靈修。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📵 操練「清心致力於一事」</h4>
            <p className="text-gray-700 mb-2">選擇一個這週要挑戰的習慣，例如：吃飯時不看手機、和人說話時不同時做其他事、工作時關閉不必要的通知。練習在這一件事上完全臨在。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我承認我的日常生活常常和我在禱告中的表達不一致。求你讓我的敬虔不只停留在靈修的時間，而是滲透到我工作、休息、與人相處的每一個時刻。幫助我在委身的教會群體中，學習愛人如己的功課。使我的生活成為一個活的禱告。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
