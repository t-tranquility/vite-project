import create from 'zustand';

interface Question {
  id: number;
  content: string;
}

interface Answer {
  questionId: number;
  selectedAnswer: boolean;
}

interface GameStore {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Answer[];
  allQuestionsAnswered: boolean;
  setQuestions: (questions: Question[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  addAnswer: (questionId: number, selectedAnswer: boolean) => void;
  nextQuestion: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  questions: [
    { id: 1, content: 'Банк платит проценты вкладчикам' },
    { id: 2, content: 'Банк продает деньги, которые вышли из употребления' },
    { id: 3, content: 'Банк дает возможность получить виртуальную карту' },
    { id: 4, content: 'Банк может хранить ваши ценные бумаги' },
    { id: 5, content: 'Банк продает лотерейные билеты' },
  ],
  currentQuestionIndex: 0,
  answers: [],
  allQuestionsAnswered: false,
  setQuestions: (questions) => set({ questions }),
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  addAnswer: (questionId, selectedAnswer) => {
    const oldArray: { questionId: number; selectedAnswer: boolean }[] = [];
    const newArray = oldArray.map((data) => (data.questionId === questionId ? { ...data, selectedAnswer } : data));
    console.log('old array', oldArray);
    console.log('new array', newArray);
  },
  nextQuestion: () => {
    set((state) => {
      const nextIndex = state.currentQuestionIndex + 1;
      const allQuestionsAnswered = nextIndex === state.questions.length;

      return {
        currentQuestionIndex: nextIndex,
        allQuestionsAnswered,
      };
    });
  },
}));
