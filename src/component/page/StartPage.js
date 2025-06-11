'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
// import startBtn from '@/../public/0.start/startBtn.png'; // 已不使用
// import circle1Img from '@/../public/0.start/blur-circle-1.png'; // 已不使用

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className="flex justify-center items-center flex-col gap-[30px] px-6 text-center">

        {/* 標題 */}
        <p className="font-myfont text-[#5A6C78] font-[500] text-[24px] leading-loose tracking-wide space-y-4">✨ 測出你的魔法靈藥 ✨</p>

        {/* 介紹文字 */}
        <div className="text-[#5A6C78] font-[500] text-[16px] leading-loose tracking-wide space-y-4">
          <p>
            據說在魔法森林深處，<br />
            沉睡著四瓶古老的魔法靈藥，<br />
            每一瓶，都藏著靈魂的回音和結晶。
          </p>

          <p>
            欲得靈藥者，必須透過心靈試煉，<br />
            進行一場靈魂的召喚。
          </p>

          <p>
            現在，請深呼吸，閉上眼。<br />
            傾聽你靈魂的指引，穿越五道心靈之門，<br />
            找尋屬於你的魔法靈藥吧！
          </p>
        </div>

        <button
          onClick={nextStep}
          className="bg-[#5D3FBF] text-[#E3D6FF] font-bold text-xl px-6 py-2 rounded-full
             shadow-[0_0_25px_rgba(200,150,255,0.5)]
             transition-all duration-300 ease-in-out
             hover:bg-[#E3D6FF] hover:text-[#4B2992] hover:scale-105
             active:scale-95
             animate-[glowPulse_2s_infinite]"
        >
            START
        </button>



      </div>
    </MobileFrame>
  );
}
