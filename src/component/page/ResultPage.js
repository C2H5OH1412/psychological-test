'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';

import result1 from '@/../public/4.result/result-1.png';
import result2 from '@/../public/4.result/result-2.png';
import result3 from '@/../public/4.result/result-3.png';
import result4 from '@/../public/4.result/result-4.png';
import result5 from '@/../public/4.result/result-5.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const getResultImage = () => {
    if (psyState.score < 8) return result1;
    if (psyState.score <= 12) return result2;
    if (psyState.score <= 16) return result3;
    if (psyState.score <= 20) return result4;
    return result5;
  };

  const getBgIndex = () => {
    if (psyState.score < 8) return 1;
    if (psyState.score <= 12) return 2;
    if (psyState.score <= 16) return 3;
    if (psyState.score <= 20) return 4;
    return 5;
  };

  const bgImageUrl = `/4.result/bgresult-${getBgIndex()}.png`;

  const styleMap = [
    {
      restart: { bg: '#B5C5D1', shadow: '#8B9CA9', hover: '#9AAAB8' },
      download: { bg: '#D0D9E2', shadow: '#AAB7C2', hover: '#BAC6D1' }
    },
    {
      restart: { bg: '#CBB8D6', shadow: '#A68FB8', hover: '#B6A2C2' },
      download: { bg: '#E1CDE7', shadow: '#BFAACF', hover: '#D3BDD9' }
    },
    {
      restart: { bg: '#E3B7A0', shadow: '#D29B83', hover: '#DDA78E' },
      download: { bg: '#F2C9B5', shadow: '#D9A992', hover: '#E5BDA9' }
    },
    {
      restart: { bg: '#E4D5A4', shadow: '#C9B87F', hover: '#D6C38F' },
      download: { bg: '#F1E3BD', shadow: '#D5C79A', hover: '#E3D3A6' }
    },
    {
      restart: { bg: '#D6BFD2', shadow: '#B9A0B5', hover: '#CBB2C5' },
      download: { bg: '#E8D3E4', shadow: '#C7AFC6', hover: '#DDC2D8' }
    }
  ];

  const index =
    psyState.score < 8 ? 0 :
    psyState.score <= 12 ? 1 :
    psyState.score <= 16 ? 2 :
    psyState.score <= 20 ? 3 : 4;

  const playAgain = () => {
    window.location.reload();
  };

  const downloadResult = () => {
    const link = document.createElement('a');
    link.href = getResultImage().src;
    link.download = 'result.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MobileFrame className="relative w-screen h-screen overflow-hidden flex flex-col">
      
      {/* 滾動內容區 */}
      <div
        className="flex-1 overflow-y-auto bg-cover bg-center px-4 pt-6 pb-[120px] flex flex-col items-center"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <Image
          src={getResultImage()}
          alt="result"
          width={800}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 固定按鈕區 */}
      <div className="absolute bottom-4 left-0 right-0 flex gap-3 px-6 z-20">
        <button
          onClick={playAgain}
          style={{
            backgroundColor: styleMap[index].restart.bg,
            boxShadow: `0px 4px 0px 1px ${styleMap[index].restart.shadow}`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = styleMap[index].restart.hover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = styleMap[index].restart.bg;
          }}
          className="w-1/2 text-white font-medium text-sm rounded-full py-[14px] 
                     transition-all duration-200 hover:scale-105 active:scale-95"
        >
          再玩一次
        </button>

        <button
          onClick={downloadResult}
          style={{
            backgroundColor: styleMap[index].download.bg,
            boxShadow: `0px 4px 0px 1px ${styleMap[index].download.shadow}`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = styleMap[index].download.hover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = styleMap[index].download.bg;
          }}
          className="w-1/2 text-white font-medium text-sm rounded-full py-[14px] 
                     transition-all duration-200 hover:scale-105 active:scale-95"
        >
          下載結果圖片
        </button>
      </div>
    </MobileFrame>
  );
}
