import React from 'react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Preface() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">自序</h1>
      </div>

      <div className="border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="p-5 bg-white space-y-4">

          <PageTag page={7} />
          <p className="text-gray-700 leading-relaxed">
            華人慕道朋友考慮是否接受基督信仰，常會面對一個問題：中華民族五千年的歷史留給我們許多寶貴的文化遺產，有關倫理道德、四書五經的教導也不輸給聖經，我們為什麼要相信一個外來的宗教呢？信上帝或信耶穌會不會違背華人祖先固有的文化與信仰呢？
          </p>
          <p className="text-gray-700 leading-relaxed">
            為回應這個需要，筆者於2009年出版《跨越鴻溝——在華人文化處境中詮釋罪》。這書能幫助讀者看見，中華文化與基督信仰的關係是互利多於互斥，基督教思想可以光照與成全中華文化，中華文化也可以使基督教思想得到很好的擴展之效。
          </p>
          <p className="text-gray-700 leading-relaxed">
            筆者所研究的內容，不僅說明華人祖先相信一位創造萬有
          </p>

          <PageTag page={8} />
          <p className="text-gray-700 leading-relaxed">
            的上帝，知道這位上帝是公義、慈愛的，並且進一步說明，華人祖先與這位上帝的關係有因信稱義的精神。這在甲骨文、金文、五經、論語、孟子等資料中，都有鮮明的呈現。
          </p>
          <p className="text-gray-700 leading-relaxed">
            《跨越鴻溝——在華人文化處境中詮釋罪》這書的資料與論述很豐富，若能完整閱讀，會有很好的開啟。但因為內容較多，相對地也使一般讀者不容易完整閱讀，因此有呼聲鼓勵筆者寫出通俗版或精簡版。本書《華人回家——創世記與華人先祖》就是為此而寫的。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本書可單獨閱讀，也可成為《跨越鴻溝——在華人文化處境中詮釋罪》的前導書，閱讀完本書，能幫助人更容易去閱讀《跨越鴻溝——在華人文化處境中詮釋罪》。若不閱讀《跨越鴻溝——在華人文化處境中詮釋罪》，也能從本書得到一些基本的重要概念，幫助基督徒知道如何分享基督信仰與華人文化的正向關係。
          </p>
          <p className="text-gray-700 leading-relaxed">
            筆者曾在《恩福》雜誌總47-50四期連載〈華人回家：創世記與華人先祖〉一文<sup>1</sup><span style={cite}>（莊東傑，〈華人回家——創世記與先祖〉，《恩福》雜誌，總47-50，2013.4、2013.7、2013.10、2014.1）</span>，本書前四章的內容與這四期所刊的內容相似。本書第六章第二節則大致採用筆者所寫〈羌人與羊文化〉一文，曾刊載於《恩福》雜誌總57期，皆經《恩福》雜誌同意採用。為何先投稿於《恩福》雜誌，除了能先與《恩福》雜誌
          </p>

          <PageTag page={9} />
          <p className="text-gray-700 leading-relaxed">
            讀者分享外，主要目的之一也是為累積本書內容。今能成書，除了感謝上帝，也要感謝《恩福》雜誌。
          </p>

        </div>
      </div>
    </div>
  );
}
