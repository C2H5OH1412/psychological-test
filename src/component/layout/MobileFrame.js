'use client';

export default function MobileFrame({ children }) {
  return (
    <div
      className="w-[33%] min-w-[380px] max-w-[420px] h-[78%] bg-white 
      rounded-2xl flex justify-center items-center relative overflow-hidden"
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

      {/* 子內容層（在影片之上） */}
      <div className="relative z-10 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
