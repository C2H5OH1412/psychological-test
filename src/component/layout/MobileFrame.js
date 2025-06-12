'use client';

import Image from 'next/image';

export default function MobileFrame({ children }) {
  return (
    <div
      className="w-[418px] h-[725px] bg-white 
      rounded-[30px] shadow-lg relative overflow-hidden"
    >
      {/* 背景影片層 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/0.start/startbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 裝飾圖片層（影片之上、內容之下） */}
      <Image
        src="/0.start/bg.png"
        alt="decoration"
        width={9999}
        height={1000}
        className="absolute bottom-0 right-0 z-5 pointer-events-none"
      />

      {/* 子內容層（最上面） */}
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
