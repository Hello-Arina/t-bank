import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const demoRounds = [
  {
    id: 0,
    questions: [
      { id: 'r0-q1', title: 'Что это за марка?', image: './img/rounds/r0/q1.jpg', options: ['Geely','JAC','LADA','Belgee'], correctIndex: 0 },
      { id: 'r0-q2', title: 'Что это за марка?', image: './img/rounds/r0/q2.jpg', options: ['EXEED','Chery','Geely','Haval'], correctIndex: 0 },
      { id: 'r0-q3', title: 'Что это за марка?', image: './img/rounds/r0/q3.jpg', options: ['Geely','Jetour','Changan','Voyah'], correctIndex: 0 },
      { id: 'r0-q4', title: 'Что это за марка?', image: './img/rounds/r0/q4.jpg', options: ['LADA','Chery','Haval','TANK'], correctIndex: 0 },
      { id: 'r0-q5', title: 'Что это за марка?', image: './img/rounds/r0/q5.jpg', options: ['Geely','Haval','TANK','KNEWSTAR'], correctIndex: 2 },
      { id: 'r0-q6', title: 'Что это за марка?', image: './img/rounds/r0/q6.jpg', options: ['Citroën','LADA','Peugeot','Chery'], correctIndex: 2 },
    ],
  },
  {
    id: 1,
    questions: [
      { id: 'r1-q1', title: 'Что это за марка?', image: './img/rounds/r1/q1.jpg', options: ['Belgee','Kaiyi','Москвич','Omoda'], correctIndex: 0 },
      { id: 'r1-q2', title: 'Что это за марка?', image: './img/rounds/r1/q2.jpg', options: ['EXEED','Lada','Changan','Jetour'], correctIndex: 2 },
      { id: 'r1-q3', title: 'Что это за марка?', image: './img/rounds/r1/q3.jpg', options: ['JAECOO','Haval','Voyah','KNEWSTAR'], correctIndex: 3 },
      { id: 'r1-q4', title: 'Что это за марка?', image: './img/rounds/r1/q4.jpg', options: ['Geely','Москвич','JAC','LADA'], correctIndex: 3 },
      { id: 'r1-q5', title: 'Что это за марка?', image: './img/rounds/r1/q5.jpg', options: ['JAECOO','TANK','Geely','Chery'], correctIndex: 1 },
      { id: 'r1-q6', title: 'Что это за марка?', image: './img/rounds/r1/q6.jpg', options: ['EXEED','Geely','Jetour','Changan'], correctIndex: 1 },
    ],
  },
  {
    id: 2,
    questions: [
      { id: 'r2-q1', title: 'Что это за марка?', image: './img/rounds/r2/q1.jpg', options: ['Chery','Lada','Changan','Jetour'], correctIndex: 0 },
      { id: 'r2-q2', title: 'Что это за марка?', image: './img/rounds/r2/q2.jpg', options: ['EXEED','JAC','Changan','Jetour'], correctIndex: 0 },
      { id: 'r2-q3', title: 'Что это за марка?', image: './img/rounds/r2/q3.jpg', options: ['JAECOO','Haval','Voyah','Changan'], correctIndex: 3 },
      { id: 'r2-q4', title: 'Что это за марка?', image: './img/rounds/r2/q4.jpg', options: ['JAECOO','Haval','JAC','Voyah'], correctIndex: 1 },
      { id: 'r2-q5', title: 'Что это за марка?', image: './img/rounds/r2/q5.jpg', options: ['JAECOO','Peugeot','Geely','LADA'], correctIndex: 3 },
      { id: 'r2-q6', title: 'Что это за марка?', image: './img/rounds/r2/q6.jpg', options: ['EXEED','Geely','Jetour','Changan'], correctIndex: 2 },
    ],
  },
  {
    id: 3,
    questions: [
      { id: 'r3-q1', title: 'Что это за марка?', image: './img/rounds/r3/q1.jpg', options: ['Haval','Citroën','JAECOO','JAC'], correctIndex: 0 },
      { id: 'r3-q2', title: 'Что это за марка?', image: './img/rounds/r3/q2.jpg', options: ['Kaiyi','Chery','Geely','Haval'], correctIndex: 0 },
      { id: 'r3-q3', title: 'Что это за марка?', image: './img/rounds/r3/q3.jpg', options: ['Jetour','Geely','Changan','Peugeot'], correctIndex: 3 },
      { id: 'r3-q4', title: 'Что это за марка?', image: './img/rounds/r3/q4.jpg', options: ['Haval','Chery','LADA','TANK'], correctIndex: 2 },
      { id: 'r3-q5', title: 'Что это за марка?', image: './img/rounds/r3/q5.jpg', options: ['Geely','JAC','Москвич','Citroën'], correctIndex: 2 },
      { id: 'r3-q6', title: 'Что это за марка?', image: './img/rounds/r3/q6.jpg', options: ['JAC','Chery','Peugeot','Voyah'], correctIndex: 0 },
    ],
  },
  {
    id: 4,
    questions: [
      { id: 'r4-q1', title: 'Что это за марка?', image: './img/rounds/r4/q1.jpg', options: ['KNEWSTAR','Haval','Chery','TANK'], correctIndex: 1 },
      { id: 'r4-q2', title: 'Что это за марка?', image: './img/rounds/r4/q2.jpg', options: ['LADA','Omoda','Citroën','Changan'], correctIndex: 0 },
      { id: 'r4-q3', title: 'Что это за марка?', image: './img/rounds/r4/q3.jpg', options: ['Geely','KNEWSTAR','Omoda','Belgee'], correctIndex: 2 },
      { id: 'r4-q4', title: 'Что это за марка?', image: './img/rounds/r4/q4.jpg', options: ['JAECOO','Haval','Jetour','TANK'], correctIndex: 0 },
      { id: 'r4-q5', title: 'Что это за марка?', image: './img/rounds/r4/q5.jpg', options: ['JAC','LADA','Chery','Jetour'], correctIndex: 0 },
      { id: 'r4-q6', title: 'Что это за марка?', image: './img/rounds/r4/q6.jpg', options: ['Citroën','LADA','Peugeot','Chery'], correctIndex: 2 },
    ],
  },
  {
    id: 5,
    questions: [
      { id: 'r5-q1', title: 'Что это за марка?', image: './img/rounds/r5/q1.jpg', options: ['Omoda','Geely','Chery','Voyah'], correctIndex: 0 },
      { id: 'r5-q2', title: 'Что это за марка?', image: './img/rounds/r5/q2.jpg', options: ['JAECOO','Omoda','Haval','Changan'], correctIndex: 2 },
      { id: 'r5-q3', title: 'Что это за марка?', image: './img/rounds/r5/q3.jpg', options: ['Geely','Jac','LADA','Belgee'], correctIndex: 0 },
      { id: 'r5-q4', title: 'Что это за марка?', image: './img/rounds/r5/q4.jpg', options: ['JAECOO','Haval','Voyah','Changan'], correctIndex: 3 },
      { id: 'r5-q5', title: 'Что это за марка?', image: './img/rounds/r5/q5.jpg', options: ['EXEED','JAC','Changan','Jetour'], correctIndex: 0 },
      { id: 'r5-q6', title: 'Что это за марка?', image: './img/rounds/r5/q6.jpg', options: ['Kaiyi','Chery','Geely','Haval'], correctIndex: 0 },
    ],
  },
];

// тут адаптивчик под экран 1080×1920
function useStageScale(baseW = 1080, baseH = 1920, topOffset = 0) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / baseW, vh / (baseH + topOffset));
      setScale(s);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [baseW, baseH, topOffset]);
  return scale;
}

function useIsWide(threshold = 1080 / 1920) {
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth / window.innerHeight > threshold);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [threshold]);
  return isWide;
}

// все возможные варианты ответа
function AnswerOption({ text, index, checkedIndex, setCheckedIndex, mode, correctIndex }) {
  const isChecked = checkedIndex === index;
  const isCorrect = index === correctIndex;
  const showResult = mode === "review"; // показываем верно/неверно
  const showCorrect = showResult && isCorrect; // правильно
  const showWrong = showResult && isChecked && !isCorrect; // выбранно, но неверно

  // Цвет большого кружка
  const outerColor = showCorrect
    ? "bg-[#57C868]"
    : showWrong
    ? "bg-[#F02A2A]"
    : isChecked
    ? "bg-[#FFDD2D]"
    : "bg-[#EFF1F5]";

  // цвет маленького кружка
  const showDot = isChecked || showCorrect || showWrong;

  return (
    <button
      onClick={() => mode === "idle" && setCheckedIndex(index)}
      className={
        "w-[930.906px] h-[79.168px] mx-auto flex items-center text-left px-6 rounded-2xl bg-white transition hover:bg-white flex-shrink-0"
      }
    >
      <div className="flex items-center gap-6">
        <span
          className={
            "w-7 h-7 rounded-full inline-flex flex-none items-center justify-center " +
            outerColor
          }
        >
          {showDot && <span className="w-3 h-3 rounded-full bg-black" />}
        </span>
        <span className="text-[24px] font-normal">{text}</span>
      </div>
    </button>
  );
}

// экран вопроса
function QuestionScreen({ question, onSubmit, timeLeft, mode, checkedIndex, setCheckedIndex }) {
  const correctIndex = question.correctIndex;

  return (
    <div className="h-full grid place-items-center">
      <div className="w-full px-10 max-w-[1000px] mx-auto transform -translate-y-[40px]">
        <div className="flex flex-col gap-4">
          {/* Таймер */}
          <div>
            <div className="bg-[#E2ECFF] rounded-2xl px-4 py-3 text-[20px] text-[#000000] flex items-center gap-3">
              <span
                className="inline-flex w-7 h-7 rounded-full items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #438CF9 0%, #7DACFB 100%)' }}
              >
                <span className="text-white font-brand text-[20px] leading-[20px] tracking-[-0.4px] font-medium">!</span>
              </span>
              <span>
                На прохождение вопроса осталось: <span className="font-medium">{timeLeft} сек</span>
              </span>
            </div>
          </div>

          {/* Изображение */}
          {question.image && (
            <div className="mx-auto w-[933px] h-[605px] flex-shrink-0">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img src={question.image} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          <h3 className="text-[32px] font-medium text-center mt-4">{question.title}</h3>

          <div className="flex flex-col space-y-[19px] mt-[24px]">
            {question.options.map((o, i) => (
              <AnswerOption
                key={i}
                text={o}
                index={i}
                checkedIndex={checkedIndex}
                setCheckedIndex={setCheckedIndex}
                mode={mode}
                correctIndex={correctIndex}
              />
            ))}

            <div className="w-full flex justify-center">
              <button
                onClick={onSubmit}
                disabled={mode !== "idle" || checkedIndex == null}
                className={
                  "min-w-[260px] px-8 py-5 rounded-2xl text-[32px] font-normal  transition " +
                  (mode !== "idle" || checkedIndex == null
                    ? "bg-[#E4E3DF] text-black/40 cursor-not-allowed"
                    : "bg-[#FFDD2D] hover:brightness-95 text-[#000000]")
                }
              >
                Ответить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// начало и конец
function StartScreen({ onStart }) {
  const isWide = useIsWide();
  return (
    <div className="h-full relative">
      {/* Контент */}
      <div className="h-full">
        <div className="text-center px-10 pt-[286px] pb-[340px]">
          <h1 className="font-bold mb-6 text-[76px] leading-tight">Игра «Угадай марку»</h1>

          <div className="text-[24px] font-normal max-w-[720px] mx-auto opacity-80 mb-8 space-y-6">
            <p>Мы собрали автомобили, которые можно приобрести в T-Авто.</p>
            <p>Пройди игру, ответь правильно на 4 вопроса и получи кофе от нас.</p>
          </div>

          <button
            onClick={onStart}
            className="mx-auto px-8 py-4 rounded-2xl bg-[#FFDD2D] text-[32px] font-normal hover:brightness-95 text-[#000000]"
          >
            Начать игру
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 pointer-events-none flex justify-center" style={{ bottom: 176 }}>
        <img
          src="./img/start-hero.png"
          alt=""
          className="h-[1064px] w-auto max-w-none object-contain transform-gpu"
        />
      </div>
    </div>
  );
}


//финал
function FinalScreen({ isWin }) {
  const isWide = useIsWide();
  const title = isWin ? "Ура! Победа!" : "Упс.. попробуй ещё!";
  const subtitle = isWin ? "Получи кофе на стойке Топливо" : "";
  const image = isWin ? "./img/car-happy.png" : "./img/NoCar-unhappy.png";

  return (
    <div className="h-full relative">
      <div className="h-full">
        <div className="text-center px-10 pt-[286px]">
          <h2 className="font-bold text-[76px] mb-4">{title}</h2>
          {subtitle && (<p className="text-[24px] font-normal opacity-80">{subtitle}</p>)}
        </div>
      </div>

      <div className="absolute inset-x-0 pointer-events-none flex justify-center" style={{ bottom: 176 }}>
        <img
          src={image}
          alt=""
          className="h-[1064px] w-auto max-w-none object-contain mx-auto transform-gpu"
        />
      </div>
    </div>
  );
}

export default function App() {
  const BASE_W = 1080;
  const BASE_H = 1920;
  const TOP_BAR = 84;
  const scale = useStageScale(BASE_W, BASE_H, TOP_BAR);

  const [roundIndex, setRoundIndex] = useState(0);
  const rounds = demoRounds;

  const [phase, setPhase] = useState("start");
  const [qIndex, setQIndex] = useState(0);
  const currentRound = rounds[roundIndex];
  const currentQuestion = currentRound.questions[qIndex];

  const [checkedIndex, setCheckedIndex] = useState(null);
  const [mode, setMode] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);

  // Таймер
  useEffect(() => {
    if (phase !== "question") return;
    if (mode === "review") return;
    setTimeLeft(10);
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          setMode("review");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase, qIndex, mode]);

  // Автопереход после показа результата
  useEffect(() => {
    if (phase !== "question" || mode !== "review") return;
    const id = setTimeout(() => {
      goNextQuestion();
    }, 1200);
    return () => clearTimeout(id);
  }, [phase, mode]);

  //пауза на финальном экране, дальше новый раунд
  useEffect(() => {
    if (phase !== "final") return;
    const id = setTimeout(() => {
      nextRound();
    }, 4000); 
    return () => clearTimeout(id);
  }, [phase]);

  function startRound() {
    setScore(0);
    setQIndex(0);
    setCheckedIndex(null);
    setMode("idle");
    setTimeLeft(10);
    setPhase("question");
  }

  function submitAnswer() {
    if (mode === "review") return;
    const isCorrect = checkedIndex === currentQuestion.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setMode("review");
  }

  function goNextQuestion() {
    if (qIndex < currentRound.questions.length - 1) {
      setQIndex((i) => i + 1);
      setCheckedIndex(null);
      setMode("idle");
      setTimeLeft(10);
    } else {
      setPhase("final");
    }
  }

  function nextRound() {
    const next = (roundIndex + 1) % rounds.length; // 6 кругов
    setRoundIndex(next);
    setPhase("start");
    setScore(0);
    setQIndex(0);
    setCheckedIndex(null);
    setMode("idle");
    setTimeLeft(10);
  }

  const isWin = score >= 4;

  return (
    <div className="w-screen h-screen bg-[#F6F7F8] text-[#000000] font-brand overflow-hidden grid items-start justify-center" style={{ paddingTop: TOP_BAR * scale }}>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 grid place-items-center" style={{ height: TOP_BAR * scale }}>
        <img src="./img/logo.png" alt="Логотип" style={{ height: 44 * scale }} className="w-auto" />
      </div>

      <div className="relative"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          backgroundColor: "#f5f6f7",
        }}
      >
        
        
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {phase === "start" && (
              <motion.div key="start" className="h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <StartScreen onStart={startRound} />
              </motion.div>
            )}

            {phase === "question" && (
              <motion.div key={currentQuestion.id} className="h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <QuestionScreen
                  question={currentQuestion}
                  onSubmit={submitAnswer}
                  timeLeft={timeLeft}
                  mode={mode}
                  checkedIndex={checkedIndex}
                  setCheckedIndex={setCheckedIndex}
                />
              </motion.div>
            )}

            {phase === "final" && (
              <motion.div key="final" className="h-full" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                <FinalScreen isWin={isWin} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
