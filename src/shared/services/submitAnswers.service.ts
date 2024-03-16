import axios from 'axios';

import { useGameStore } from './useScore.service';

const dburl = import.meta.env.VITE_DBURL;

export const submitAnswers = async () => {
  const gameStore = useGameStore.getState();
  const answers = gameStore.answers;

  try {
    const response = await axios.post(`${dburl}/bank-questions/submit-answers`, answers);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
