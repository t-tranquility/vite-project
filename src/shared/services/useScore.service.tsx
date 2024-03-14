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
  answers: Answer[];
  addAnswer: (questionId: number, selectedAnswer: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  questions: [
    { id: 1, content: 'Банк платит проценты вкладчикам' },
    { id: 2, content: 'Банк продает деньги, которые вышли из употребления' },
    { id: 3, content: 'Банк дает возможность получить виртуальную карту' },
    { id: 4, content: 'Банк может хранить ваши ценные бумаги' },
    { id: 5, content: 'Банк продает лотерейные билеты' },
  ],
  answers: [],

  addAnswer: (questionId, selectedAnswer) =>
    set((state) => ({
      answers: [...state.answers.filter((answer) => answer.questionId !== questionId), { questionId, selectedAnswer }],
    })),
}));
