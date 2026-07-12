import React from 'react';

export default function Book29Appendix5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">附錄五</h1>
        <h2 className="text-xl font-semibold text-gray-700">科學創造論</h2>
      </div>

      <div className="border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-bold text-indigo-800 text-lg mb-2">一、基本觀點</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-2">
              <li>與聖經六日論相同。</li>
              <li>進一步以科學觀點解釋聖經之事實，包括成熟說、大天災說、智慧設計等。</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-indigo-800 text-lg mb-2">二、根據理由</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
              <li>
                以聖經之創造觀點解釋科學上已發現之事實。
                <ol className="list-decimal list-inside ml-6 mt-1 space-y-0.5">
                  <li>創造比進化更能解釋地質與化石。</li>
                  <li>創造比進化更符合熱力學諸定律。</li>
                  <li>大天災（即聖經所說之洪水）造成化石與地質，比古今一致說（即時期論者所承認之模式）更能符合已知的事實。</li>
                  <li>地球年輕之證據多於地球年老之證據，且更合理。</li>
                  <li>天地在六日創造之後，便已具備成熟年齡之表徵。</li>
                </ol>
              </li>
              <li>
                從聖經本身觀點否定聖經六日論以外之創造論。
                <ol className="list-decimal list-inside ml-6 mt-1 space-y-0.5">
                  <li>時期論或漸進論都接受進化論之時代架構，暗示著上帝在進化過程，不斷插手糾正，加些創造，此與上帝之能力與特性不同。</li>
                  <li>畫景說除了有和時溝論相同之誤外，並以創世記為詩體或寓言，等於動搖了聖經之歷史基礎。</li>
                  <li>時溝說等於承認進化體系，而將之安插在時溝中，神無需如此作。</li>
                </ol>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-indigo-800 text-lg mb-2">三、贊成的學者與書籍</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-2">
              <li>亨利·莫瑞士（Henry M. Morris），《科學創造論》、《創造論——神話抑科學》。</li>
              <li>季禧（Duane T. Gish），《化石否定進化》。</li>
              <li>海恩次（Thomas Heinze），《創造與進化》。</li>
              <li>何天擇，《人從哪裡來——進化論與創造論初探》。</li>
              <li>孫大程，《創世以來的奧秘》。</li>
              <li>威爾斯（Jonathan Wells），《進化論的聖像——課本教的錯在那裡？》。</li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}
