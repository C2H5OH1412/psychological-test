'use client';

import StartPage from '@/component/page/StartPage';
import QuestionPage from '@/component/page/QuestionPage';
import DisplayResultPage from '@/component/page/DisplayResultPage';
import ResultPage from '@/component/page/ResultPage';
import { usePsyStore } from '@/app/store/store';
import MobileFrame from '@/component/layout/MobileFrame';

export default function Home() {
  const psyState = usePsyStore((state) => state);

  const nextStep = () => {
    if (psyState.state >= 3) return;

    if (psyState.state === 1) {
      if (psyState.questionState < psyState.totalQuestions - 1) {
        psyState.updateQuestionState(psyState.questionState + 1);
      } else {
        psyState.updateState(psyState.state + 1);
      }
    } else {
      psyState.updateState(psyState.state + 1);
    }
  };

  const prevStep = () => {
    if (psyState.state <= 0) return;
    psyState.updateState(psyState.state - 1);
  };

  return (
    <div className="w-screen h-screen bg-[#F4F8FC] flex justify-center items-center">
      <MobileFrame>
        {psyState.state === 0 && <StartPage nextStep={nextStep} />}
        {psyState.state === 1 && (
          <QuestionPage nextStep={nextStep} questionIndex={psyState.questionState} />
        )}
        {psyState.state === 2 && <DisplayResultPage nextStep={nextStep} />}
        {psyState.state === 3 && <ResultPage />}
      </MobileFrame>
    </div>
  );
}
