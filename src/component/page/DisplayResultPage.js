'use client';

import MobileFrame from '@/component/layout/MobileFrame'

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
      <div className="flex flex-col items-center text-center gap-26">
  {/* 文字區塊 */}
  <p className="text-[#2C3E4E] text-lg font-semibold leading-relaxed">
    找到你的魔法靈藥了！<br />
    快來看看吧！
  </p>

  {/* 按鈕區塊，使用 mt 增加上下距離 */}
  <button
    onClick={nextStep}
    className="mt-4 bg-[#6D5BD1] text-white font-bold text-base px-6 py-3 rounded-full
               hover:bg-[#E3D6FF] hover:text-[#4B2992] hover:scale-105
               active:scale-95 transition-all duration-300 ease-in-out"
  >
    查看結果
  </button>
</div>


      </MobileFrame>
    </>
  );
}
