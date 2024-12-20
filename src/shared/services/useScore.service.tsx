import { create } from 'zustand';

interface GameStore {
  answers: { questionId: number; answer: boolean }[];
  correctAnswersCount: number;
  sunCount: number;
  totalQuestions: number; // Количество вопросов
  addAnswer: (questionId: number, answer: boolean) => void;
  setCorrectAnswersCount: (count: number) => void;
  setSunCount: (count: number) => void;
  setTotalQuestions: (count: number) => void; // Функция для обновления количества вопросов
  incrementSunCount: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  answers: [],
  correctAnswersCount: 0,
  sunCount: 0,
  totalQuestions: 0, // Инициализация общего количества вопросов
  addAnswer: (questionId, answer) =>
    set((state) => ({
      answers: [...state.answers, { questionId, answer }],
    })),
  setCorrectAnswersCount: (count) =>
    set(() => ({
      correctAnswersCount: count,
    })),
  setSunCount: (count) =>
    set(() => ({
      sunCount: count,
    })),
  setTotalQuestions: (count) =>
    set(() => ({
      totalQuestions: count, // Обновление количества вопросов
    })),
  incrementSunCount: () =>
    set((state) => ({
      sunCount: state.sunCount + 1,
    })),
}));
