import axios from 'axios';

const dburl = import.meta.env.VITE_DBURL;

export const getQuestions = async () => {
  try {
    const response = await axios.get(`${dburl}/bank-questions`); //TODO config axios tipisation zaprosov
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
