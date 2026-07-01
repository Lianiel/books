import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">陸地與植物</h2>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、陸地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一9-10：「神說：天下的水要聚在一處，使旱地露出來。事就這樣成了。神稱旱地為地，稱水的聚處為海。神看著是好的。」神所做的，是聚水露旱地，分旱地與海。神將海水聚在一處，這需要使海溝加深；神要使旱地露出來，需要使陸地上升。創世記本身沒有細節的描述，但詩篇一○四篇與約伯記卅八章有一些細節的敘述。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇一○四5-9：「將地立在根基上，使地永不動搖。你用深水遮蓋地面，猶如衣裳；諸水高過山嶺。你的斥責一發，水便奔逃；你的雷聲一發，水便奔流。諸山升上，諸谷沉下，歸你為他所安定之地。你定了界限，使水不能過去，不再轉回遮蓋地面。」第八節的「諸山升上，諸谷沉下」，很可能是在說海溝加深，陸地上升，這是神所做的。約伯記卅八4-7講神立大地根基，接著8-11節講神為海水定界限：「海水衝出，如出胎胞，那時誰將它關閉呢？是我用雲彩當海的衣服，用幽暗當包裹它的布，為它定界限，又安門和門，說：你只可到這裡，不可越過；你狂傲的浪要到此止住。」這兩段經文一方面可以描述神在創世第三天所做的事，一方面也可以描述洪水後神使海水退去的恢復工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得後書三5：「他們故意忘記，從太古，憑神的命有了天，並從水而出、藉水而成的地。」彼得提醒神起初創造的這個歷史事實，說明陸地是從水而出，藉水而成的。這讓我們聯想到，地土能夠有用，是因為它被水滋潤、蘊含水分。沙漠不能長植物，因為它沒有水分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人（亞當，אָדָם，adam）這個字首先出現是在創世記一26-27：「神按自己的形象造人（אָדָם，adam）」。地（אֲדָמָה，adamah）這個字首先出現是在創世記一25：「地上的昆蟲」，接著是創世記二5：「沒有人（אָדָם，adam）耕地（אֲדָמָה，adamah）」，然後就是創世記二7：「神用地上（אֲדָמָה，adamah）的塵土造人（אָדָם，adam）」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人（亞當，אָדָם，adam）與地（אֲדָמָה，adamah）的字根相同。說明人與地有連結的關係，人身上的成分與地土的成分，按現在的科學分析，幾乎是一樣的。地需要水，人也需要水。神也對亞當說：「你是從土而出的，你本是塵土，仍要歸於塵土。」（創三19）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                謝挺認為，第三日造地與植物，這地乃是指創世記第二章的伊甸園，是亞當與夏娃居住的地方。從亞當、夏娃被趕出伊甸園這件事來看，第三日的地與伊甸園應該是不同的。但從大範圍來看，伊甸園一定是在第三日所造的陸地上，進一步說，當時的陸地是一個完整的盤古大陸，並非今天的五大洲，洪水以前的氣候又非常好，所以整個盤古大陸可算是廣義的伊甸園，具有伊甸園美好的土質、氣候、植物等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人除了需要物質的活水，也需要屬靈的活水，因為人有物質、屬靈雙重的生命。神是活水的泉源，人需要浸泡在神的裡面，讓裡面充滿活水，然後才會成為能祝福、供應別人的人。正如第三天的地是從水而出，藉水而成的，因此能生長植物，供人食用。
              </p>
              <p className="text-gray-700 leading-relaxed">
                水的淹沒也代表死亡，從水而出則代表復活。正如洗禮的樣式，先進入水裡，而後從水裡出來，照羅馬書六4所說：「所以，我們藉著洗禮歸入死，和他一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉著父的榮耀從死裡復活一樣。」水的洗禮是外在的，要表明我們內在的一個經歷，就是聖靈的重生、聖靈的洗、聖靈的充滿。在我們與主同死、同復活的過程中，同時也領受聖靈活水的工作。如耶穌所說：「他（聖靈）既來了，就要叫世人為罪、為義、為審判，自己責備自己。」（約十六8）我們與基督同死同復活，同時也領受聖靈活水的工作，這個一而二的經歷，正在神創造陸地的過程中表明出來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、植物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一11-13：「神說：地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。事就這樣成了。於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類；果子都包著核。神看著是好的。有晚上，有早晨，是第三日。」神在第三日造了多樣化的植物，且各從其類。這些植物是氧氣與食物的供應者，因此第三日的屬靈應用是供應的生命，基督徒的生命應當像植物一樣，成為別人的供應。植物有以下三大功能：
              </p>
              <div className="space-y-3 mb-3">
                {[
                  { title: '吸收光能，提供食物', desc: '神第一日造光，是生命的源頭。但這光的能量除了帶來溫暖之外，大體上並不能由人或動物吸收，必須經由植物行光合作用，將光的能量吸收、轉化，儲存在植物的本體裡。然後由人類及動物以這些植物為糧食，才能得到所需的能量。' },
                  { title: '製造氧氣，吸收二氧化碳', desc: '神第二日造空氣，空氣中的氧氣經由我們呼吸進入到人體，做燃燒的工作，使身體能保持體溫，並有力量做事，進行燃燒後會排出二氧化碳。氧氣是有限的，不斷消耗掉，生物最終就不能呼吸了。二氧化碳太多也會造成我們呼吸困難。大氣中的氧氣為何沒有減少？二氧化碳為何沒有增加？那是因為植物行光合作用時，吸收二氧化碳，排出氧氣，使二者保持穩定的比例，讓氧氣能繼續供應地上的一切生物。' },
                  { title: '儲存水分，供應活水', desc: '第三日神將地上的水分到天上，而有了天上的水，這水以雨水的形式從天而降，能供應地上一切生物。然而若沒有植物，雨水無法蘊含在土裡面，必很快流入海中，陸地上的人及動物將無淡水可喝。地球上的許多森林乃是最好、最大的水庫，人們破壞森林，將使自己失去足夠的水源。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                上述三種功能，都是在進行供應，這是神兒女應有的生命樣式。我們有屬靈的生命，能領受神的真光，而後去供應屬靈的食物。我們在一個屬靈空氣不好的地方，能靠著禱告，使用神的權柄，除去污穢，帶進潔淨。我們也能領受神的活水，然後把活水分享給有需要的人，使人得到滋潤、飽足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有關植物提供食物方面，舊約、新約有更多的啟示：創世記一29-30：「神說：看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。事就這樣成了。」植物的生命是分享、供應的生命，如創世記一29-30所說，神命定各種植物要成為人與動物的食物。植物的生存不是為了自己，乃是為供應別人，為了成為別人的祝福。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在舊約，多次提到五穀、新酒，和油。這是以色列人最主要的食物。三處代表性經文如下：申命記十一14：「我必按時降秋雨春雨在你們的地上，使你們可以收藏五穀、新酒，和油。」尼希米記十三12：「猶大眾人就把五穀、新酒，和油的十分之一送入庫房。」何西阿書二22：「地必應允五穀、新酒，和油，這些必應允耶斯列民。」五穀是全備的主食；新酒，是從葡萄汁剛剛釀出來的酒，可能只有幾個月。葡萄汁或葡萄新酒對身體是很好的，但要避免喝濃酒。另外，最好的油就是橄欖油。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在新約，特別提到麥子、葡萄樹、橄欖樹三種植物。麥子是五穀之中最常食用的，是以色列人的主食；葡萄樹產出葡萄汁或葡萄新酒，是以色列人的餐後飲料；橄欖樹產出橄欖油，橄欖油是重要的營養來源，也是抹身用的油。這三種植物是以色列人最重要的食物來源，與舊約有完整的對應。相關經文如下：約翰福音十二24：「我實實在在的告訴你們，一粒麥子不落在地裡死了，仍舊是一粒，若是死了，就結出許多子粒來。」約翰福音十五1，5，8，16：「我是真葡萄樹，我父是栽培的人。……我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子；……你們多結果子，我父就因此得榮耀，你們也就是我的門徒了。……不是你們揀選了我，是我揀選了你們，並且分派你們去結果子，叫你們的果子常存。」羅馬書十一17-18，24：「若有幾根枝子被折下來，你這野橄欖得接在其中，一同得著橄欖根的肥汁，你就不可向舊枝子誇口；若是誇口，當知道不是你托著根，乃是根托著你。……你是從那天生的野橄欖上砍下來的，尚且逆著性得接在好橄欖上，何況這本樹的枝子，要接在本樹上呢！」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                第三日的創造，預表了第三個信心偉人挪亞。他是一個從水而出的人，他經歷了水淹沒全地，又經歷了從水而出，而後成為新一代人類的祖先。使徒彼得說挪亞時代的洪水像是洗禮：「當時進入方舟，藉著水得救的不多，只有八個人。這水所表明的洗禮，現在藉著耶穌基督復活也拯救你們；……」（彼前三20-21）因此挪亞一家八口，如同經過洗禮，與基督同死同復活，而後開展了新的世代。主耶穌用麥子來形容他自己捨己的生命，也告訴門徒要有這樣的生命；耶穌又用葡萄樹來告訴門徒，與主聯合及結出果子的重要。保羅則用橄欖樹枝子與本樹的關係來說明以色列人、外邦人跟神的關係。植物的生命反映出神的生命乃是供應的生命，我們理當領受神的生命、活出神的生命，而成為生命的供應者。
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
                '神聚水露旱地、分旱地與海，詩篇一○四篇、約伯記卅八章補充了海溝加深、陸地上升的細節，這既描述創世第三天，也可對應洪水後神使海水退去的恢復工作。',
                '「人」（אָדָם，adam）與「地」（אֲדָמָה，adamah）字根相同，人身上的成分與地土成分相似，神對亞當說「你本是塵土，仍要歸於塵土」（創三19），指出人與地緊密連結的關係。',
                '水的淹沒代表死亡，從水而出代表復活，這正是洗禮的樣式（羅六4）；水的洗禮是外在記號，表明內在聖靈重生、充滿的經歷，與陸地從水而出的創造過程相呼應。',
                '植物有三大功能：吸收光能提供食物、製造氧氣吸收二氧化碳、儲存水分供應活水，三者都是「供應」的生命樣式，是神兒女應當效法的榜樣。',
                '舊約以五穀、新酒、油為主要食物代表，新約則以麥子（約十二24）、葡萄樹（約十五）、橄欖樹（羅十一）三種植物比喻捨己、聯合結果、外邦人與以色列人的關係；第三日創造預表挪亞「從水而出」的信心生命。',
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
              '神所造的地土與所造的人有什麼關係？陸地被造與屬靈生命的新造有什麼相似之處？',
              '植物有哪些功能？植物有哪些生存目的是我們可以效法的？',
              '以色列的特產麥子、葡萄樹、橄欖樹三種植物，可以想到哪些聖經經文？請每人選一種來分享其意義與應用？',
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
