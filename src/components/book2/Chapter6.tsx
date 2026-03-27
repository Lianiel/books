import React from 'react';
import { Sun, Clock, BookOpen, Heart } from 'lucide-react';

export default function Chapter6() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2 border-b-2 border-rose-100 pb-4">
        第 6 章：發現日課與安息日的節奏
      </h1>
      <p className="text-slate-500 italic mb-8">停下腳步，呼吸永恆的空氣</p>
      <div className="space-y-8">

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6 rounded-r-lg">
            <p className="text-rose-900 font-medium m-0">日課與安息日，就是在人生的暴風雪中，把我們帶回上帝身邊的繩索，也是穩固生命的錨。<span className="text-rose-500 text-sm ml-2">(p.165)</span></p>
          </div>
          <div className="flex items-center mb-4 text-rose-700">
            <Clock className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">現有的繩索並不夠用</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>今天，我們教導年輕的基督徒要靈修或維持 QT（quiet time），好與神建立關係。所謂的靈修，通常是每天花半小時讀聖經、禱告或讀靈修文章。我們希望，除了主日上教會做禮拜和參加小組，每天的靈修能幫助他們抵擋生活中的暴風雪。<span className="text-slate-400 text-sm ml-1">(p.169)</span></p>
            <p>但事與願違。通常，早上親近神之後，不到幾個鐘頭，我就已經把神拋在腦後，忘記祂才是生活的主。中午，我開始被大量的需求淹沒。傍晚，我已筋疲力盡，做什麼都懶，包括讀聖經和禱告。<span className="text-slate-400 text-sm ml-1">(p.169)</span></p>
            <p>我認為我們需要的，是一種更豐富、更全面的屬靈操練模式——一種能夠涵蓋整個生命節奏的方式。這就是古代教會所發現的「日課」與「安息日」。<span className="text-slate-400 text-sm ml-1">(p.171)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">第一個古代寶藏：日課</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>大衛每天會在固定的時間禱告，一天禱告七次（詩一一九164）。但以理一天禱告三次（但六10）。在耶穌的時代，虔誠的猶太人每天會禱告兩次到三次。耶穌每天會在固定時間禱告，可能就是依循猶太傳統。<span className="text-slate-400 text-sm ml-1">(p.174)</span></p>
            <p>大約在主後五二五年，有一個名叫本篤（Benedict）的偉人，為修士規畫每天進行八個日課的禱告時間。他在會規裡寫道：「神聖日課的時間一到，一聽到通知的聲音，修士就會立刻放下手邊的工作，以最快的速度趕過去……沒錯，他們最喜歡的就是神的工作（也就是『日課』）。」<span className="text-slate-400 text-sm ml-1">(p.174)</span></p>
            <p>這些修士知道，要從早到晚都能持續並感受到神，祕訣就是停下腳步，透過日課來親近神。這種規律的節奏，使他們的生活在神面前保持開放。<span className="text-slate-400 text-sm ml-1">(p.174)</span></p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mt-4">
              <h3 className="font-bold text-slate-800 mb-3">進入安靜的方式</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {['全神貫注、心靈敞開', '安靜坐著', '身體打直', '緩慢而自然地深呼吸', '眼睛閉上或看地上'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-rose-400">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Sun className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">第二個古代寶藏：守安息日</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>安息日（Sabbath）源自於希伯來文，原意是「停止、暫停工作」，意指每週有二十四小時遠離工作，不做任何與工作有關的事。也就是我們將這段時間的生活定位為「聖」，與其他六天有「分別」或「區別」（創二2-3）。<span className="text-slate-400 text-sm ml-1">(p.180)</span></p>
            <p>今天，安息日提供另一種節奏，讓我們可以重新定位生活，以那位永活的神為中心。在安息日，我們效法神放下工作、好好休息。<span className="text-slate-400 text-sm ml-1">(p.180)</span></p>
            <p>在聖經中，守安息日和不可說謊、不可殺人、不可姦淫並列為神的誡命。安息日是神送給我們的禮物，祂邀請我們緊緊抓住祂預備的繩索。我認為，守安息日不只是神的誡命，也是神對我們的邀請。<span className="text-slate-400 text-sm ml-1">(p.180-181)</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                <h3 className="font-bold text-rose-800 mb-2">安息日是什麼</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  {['二十四小時遠離工作', '讓生活以神為中心', '效法神放下工作休息', '享受在主裡的喜悅'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-rose-400">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">安息日不是什麼</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  {['只是懶惰或休息', '可有可無的選擇', '多加一些宗教活動', '逃避責任的藉口'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-slate-400">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">靜默：最被忽略的操練</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>魏樂德（Dallas Willard）曾說，靜默和獨處是基督徒生活最基本的操練。獨處就是離開人群，不做任何事，單單專注於神。靜默是操練讓內在和外在的聲音都能安靜下來，單單定睛在神的身上。<span className="text-slate-400 text-sm ml-1">(p.177)</span></p>
            <p>盧雲（Henri Nouwen）說：「不獨處，就幾乎不可能過屬靈生活。」對現代基督徒來說，這兩個操練應該是最具挑戰性，也是最少人實行的。我們的世界充斥著噪音和紛擾，我們大部分人害怕寂靜。<span className="text-slate-400 text-sm ml-1">(p.177)</span></p>
          </div>
        </section>

        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：現代人的節奏危機】</h2>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>現代社會最大的屬靈危機，或許不是道德敗壞，而是節奏失序。我們活在一個把「忙碌」等同於「有價值」的文化裡，卻忘記了神創造人類時，也設計了休息的節奏。</p>
            <p>暫停日課與安息日，目的並不是要在已經非常忙碌的生活裡多加一些東西，而是要重新調整生活，重新以神為目標。換言之，那是一種全新的生活方式。<span className="text-slate-400 text-sm ml-1">(p.177)</span></p>
            <p className="text-sm text-amber-700 font-medium">📚 延伸參考：魏樂德《靈性操練的精義》、馬可．布坎南《安息的藝術》</p>
          </div>
        </section>

      </div>
    </div>

      {/* 反思與實踐 */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg text-white mt-4">
        <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-3">
          <span>🧠</span>
          深度反思與行動指南
          <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">延伸應用（非原書內容）</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-indigo-200 mb-4">💭 反思問題</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">1.</span>我目前的日常生活節奏，有多少是以神為中心，有多少是被緊急事務驅動？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">2.</span>我上一次真正「停下腳步」安靜在神面前，是什麼時候？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">3.</span>我對守安息日的態度是什麼？是命令、負擔、還是禮物？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">4.</span>我生活中最大的噪音來源是什麼（手機、社群媒體、人際關係）？我願意為靜默騰出空間嗎？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">5.</span>如果我今天開始守安息日，我最大的阻力是什麼？這阻力反映了什麼信念？</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-emerald-300 mb-4">🎯 生活實踐</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">1.</span>本週嘗試一個「迷你日課」：每天選擇一個固定時間點（如午餐前），暫停兩分鐘，安靜禱告。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">2.</span>計畫下一個安息日：選擇一個二十四小時的時段，遠離工作和螢幕，以喜悅和休息為主。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">3.</span>每天早晨起床後，在看手機之前，先花3分鐘安靜在神面前。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">4.</span>把「守安息日」加入你的行事曆，視之為不可取消的約會。</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
