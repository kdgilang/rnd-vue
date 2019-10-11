import axios from 'axios';

export async function getCurrency(): Promise<any> {
  try {
    const req: string = './mockup/api.currency.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}
