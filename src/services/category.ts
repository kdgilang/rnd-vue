import axios from 'axios';

export async function getCategories(): Promise<any> {
  try {
    const req: string = './mockup/api.categories.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}
