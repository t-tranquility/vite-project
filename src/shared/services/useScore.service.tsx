import { create } from 'zustand';

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
  setQuestions: (questions: Question[]) => void;
  addAnswer: (questionId: number, selectedAnswer: boolean) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  questions: [],
  answers: [],
  setQuestions: (questions) => set({ questions }),

  addAnswer: (questionId, selectedAnswer) =>
    set((state) => ({
      answers: [...state.answers.filter((answer) => answer.questionId !== questionId), { questionId, selectedAnswer }],
    })),
}));
