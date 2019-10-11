import axios from 'axios';

export async function getPosts(): Promise<any> {
  try {
    const req: string = './mockup/api.posts.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}
