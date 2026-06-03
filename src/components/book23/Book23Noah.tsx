import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Noah() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">塞特的子孫</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Noah</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">挪亞</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">塞特的子孫</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              我因蒙受上帝恩惠，於大洪水中倖免於難
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>創世記 6–9章</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              上帝從大洪水中揀選的義人
            </h3>
            <p className="text-gray-700 leading-relaxed">
              塞特（→塞特，p.28）後代拉麥（→以挪士等，p.30）的兒子，活到九百五十歲。從亞當（→亞當，p.24）和夏娃（→夏娃，p.25）起算，挪亞是第十代。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              那時期地上的人類數量增加，暴力等的惡行不絕。上帝後悔創造人，決意用大洪水清除人類。挪亞對上帝的信仰特別堅定，上帝因而事先告知挪亞大洪水的計畫，指示他建造一艘巨大的船。挪亞按照上帝的指示，與三個兒子閃（→閃雅弗，p.34）、含（→含，p.35）、雅弗一起建造方舟，獲准上船的人只有挪亞夫婦、三名兒子及妻婦共八人（創世記 6–8章）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              洪水後的事件：醉酒與詛咒
            </h3>
            <p className="text-gray-700 leading-relaxed">
              大洪水過後，據說有一次，挪亞喝葡萄酒喝到爛醉，赤身裸體睡覺。看到後含（→含，p.35）告知其他兩兄弟，兩人不脫衣服輕輕走近，並以父親的衣料蓋上，沒有直視父親的裸露。挪亞醒醒後得知含的作為，詛咒含的兒子迦南日後為閃和雅弗的僕役（創世記 9章）。
            </p>
          </div>

          {/* Episode 03 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">episode 03</span>
              <h3 className="font-semibold text-red-800">世界知名的挪亞方舟傳說</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              相傳挪亞和三個兒子為洪水預作準備所建造的船，是一艘長約一百三十七公尺、寬約二十三公尺、高約十三點五公尺的方舟。除了挪亞他們以外，獲准進入方舟的有所有種類的動物各一隻，及所有糧食。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              大雨持續四十個晝夜，雨量多到將高山完全淹沒，未能搭上方舟的生物全都滅絕，除了魚以外。開始下雨過了一百五十天，上帝讓風起，水面就逐漸落退。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              挪亞放鴿子，不久鴿子叼著橄欖樹枝回來。又過了七天，他再度放飛鴿子，結果鴿子一去不回。大地已乾，挪亞帶所有生物下方舟來到地面，隨即向上帝獻祭，感謝上帝讓自己死裡逃生。上帝應允不會再用洪水滅絕人類，並以彩虹為記號立約（創世記 6–9章）。
            </p>
          </div>

          {/* Let's read */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Let's read</div>
              <h3 className="font-semibold text-red-800">鴿子為何成為「和平的象徵」</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              相傳挪亞大洪水後三度放飛鴿子。第一次鴿子很快就飛回來；第二次衘著一枝橄欖樹枝回來——挪亞由此得知洪水已退去，外面有陸地且有植物生長。因此「衘著橄欖樹枝的鴿子」便成為上帝與人和解、太平之世降臨的證明（創世記 8章）。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>相傳方舟最後漂流到聳立於土耳其、標高五一三七公尺的亞拉拉特山。
          </div>
        </div>
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '挪亞是塞特的後代，在全人類道德敗壞的時代，因「在那世代是個完全人，常與上帝同行」而蒙上帝恩惠。',
            '他按照上帝的指示建造方舟，帶著家人和各類動物躲過大洪水，成為人類和動物界的第二個「起點」。',
            '方舟的尺寸（約137m × 23m × 13.5m）龐大驚人，建造這樣的船需要極大的信心和毅力，因為當時還沒有下雨的跡象。',
            '大洪水後，上帝以彩虹為記號與挪亞立約，應許不再用洪水滅絕人類——這是聖經中第一個「上帝的立約」記錄。',
            '洪水後的醉酒事件顯示：即使是義人挪亞，在得救之後也不能免於人性的軟弱，這是聖經對人類真實性的誠實記載。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">彩虹之約：上帝主動立的恩典之約</h4>
            <p className="text-gray-700 leading-relaxed">
              上帝在洪水後對挪亞說：「我與你們並你們後裔立約……我把虹放在雲彩中，這就可作我與地立約的記號了。」（創世記9:9,13）這是聖經中第一個明確記載的「契約」（covenant），而且是上帝主動立的——不是人類的道德表現換來的，而是上帝單方面的恩典承諾。這一模式貫穿整本聖經：亞伯拉罕之約、摩西之約、大衛之約、新約——都是上帝主動發起的恩典關係。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">方舟作為基督的預表</h4>
            <p className="text-gray-700 leading-relaxed">
              早期教會父老將方舟解讀為基督的預表（typology）：方舟是在洪水（審判）中唯一的救生之所；基督是在上帝的審判中唯一的救恩之道。「進入方舟」對應「歸入基督」；方舟外的毀滅對應基督以外的滅亡。彼得前書3:20–21明確做出這個連結，稱洗禮是方舟之水的對應，代表藉著基督的復活得救。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">大洪水的考古與地質學探討</h4>
            <p className="text-gray-700 leading-relaxed">
              大洪水的歷史性問題一直是學者討論的焦點。古美索不達米亞文明中有多個類似的洪水傳說（如《吉爾伽美什史詩》中的烏特那比什提姆故事），顯示這一地區確曾發生重大水災事件。地質學研究也在黑海地區發現了約七千年前大規模海水倒灌的地質證據。神學上，無論洪水的地理範圍大小，故事的核心信息是：人類的罪有嚴重後果，上帝的恩典揀選了一個家庭，並在審判後立約保證了新的開始。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '挪亞在沒有任何先例（從未下過大雨）的情況下，按照上帝的話建造方舟。你有沒有過在沒有充分「看得見的依據」的情況下，仍然選擇信任上帝的經驗？',
            '上帝對挪亞說：「我眼中唯有你是義人」——在一個集體道德崩潰的環境中，要與眾不同需要什麼樣的代價？你有沒有類似的處境？',
            '即使是義人挪亞，在得救之後也犯了醉酒的錯。這對你理解「聖化」（成為更像基督的過程）有什麼影響？',
            '彩虹現在是多元性別的象徵，但在聖經中是上帝立約的記號。看到彩虹時，你想到的是什麼？',
            '上帝在洪水後命挪亞：「你們要生養眾多，遍滿地面。」這個命令與創世記1:28的命令相同。你認為這有什麼神學意義？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">在等待中持守信心</h4>
            <p className="text-gray-700 text-sm mb-2">挪亞建造方舟的過程可能長達數十年，在那段時間裡，他每天繼續做上帝吩咐他做的事，哪怕周圍的人都嘲笑他。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>辨識你生命中一個上帝吩咐你做的事，但還沒有看到結果——繼續做，不放棄</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>下次看到彩虹時，停下來感謝上帝的信實和憐憫</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>記住：挪亞不是因為比別人更好才得救，而是「在上帝眼前蒙恩」——得救是恩典，不是功績</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 6–7章', desc: '方舟的建造與大洪水' },
                { ref: '創世記 8–9章', desc: '洪水退去與彩虹之約' },
                { ref: '希伯來書 11:7', desc: '挪亞：信心英雄' },
                { ref: '彼得前書 3:20–21', desc: '方舟與洗禮的對應' },
              ].map(item => (
                <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="font-semibold text-green-700">{item.ref}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '以諾', desc: '祖父' }, { name: '閃', desc: '長男' }, { name: '含', desc: '次男' }, { name: '雅弗', desc: '三男' }, { name: '亞伯拉罕', desc: '後代' }].map(p => (
            <span key={p.name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
              <span className="font-semibold text-amber-700">{p.name}</span>
              <span className="mx-1 text-gray-300">·</span>{p.desc}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
