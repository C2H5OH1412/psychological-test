'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  };

  const colorMap = {
    0: 'text-[#2C3E4E]',
    1: 'text-[#7E6E9B]',
    2: 'text-[#A03C2F]',
    3: 'text-[#A4B787]',
    4: 'text-[#A48BC9]',
    5: 'text-[#DD3E3E]',
  };

  const getMainColor = (prefix, questionIndex) => {
    const raw = colorMap[questionIndex] || 'text-[#2C3E4E]';
    return raw.replace('text-', `${prefix}-`);
  };

  return (
    <MobileFrame className="relative overflow-hidden">
      {/* 模糊變暗遮罩 */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0" />

      {/* 主要內容加上 z-10 疊在遮罩之上 */}
      <div className="relative z-10 flex flex-col items-center gap-[26px] px-4 py-10">
        <div className="text-[#2C3E4E] border-2 border-[#2C3E4E] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl">
          Q{questionIndex + 1}
        </div>

        <div
          className={`text-center font-extrabold text-[17px] ${getMainColor('text')} mb-[60px]`}
        >
          {questionData.questions[questionIndex + 1].title}
        </div>

        {questionData.questions[questionIndex + 1].options.map((option) => {
          const baseClass =
            'w-[60%] rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium cursor-pointer hover:translate-y-0.5 transition';
          const variants = {
            0: `bg-[#5A6C78] shadow-[0px_4px_0px_1px_#2C3E4E]`,
            1: `bg-[#B296C4] shadow-[0px_4px_0px_1px_#7E6E9B]`,
            2: `bg-[#5A6C78] shadow-[0px_4px_0px_1px_#2C3E4E]`,
            3: `bg-[#B296C4] shadow-[0px_4px_0px_1px_#7E6E9B]`,
            4: `bg-[#5A6C78] shadow-[0px_4px_0px_1px_#2C3E4E]`,
            5: `bg-[#B296C4] shadow-[0px_4px_0px_1px_#7E6E9B]`,
          };

          return (
            <div
              className={`${baseClass} ${variants[questionIndex]}`}
              onClick={() => clickAnswer(option)}
              key={option.title}
            >
              {option.title}
            </div>
          );
        })}
      </div>
    </MobileFrame>
  );
}
