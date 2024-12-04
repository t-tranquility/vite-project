import axios from 'axios';

const dburl = import.meta.env.VITE_DBURL;

export async function getAllTheories() {
  try {
    const response = await axios.get(`${dburl}/theory`);
    return response.data;
  } catch (error) {
    console.error('Error fetching theories:', error);
    throw error;
  }
}
