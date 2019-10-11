// import postsjson from '@/mockup/api.posts.json';

export async function getPosts(): Promise<any> {
  try {
    const req: string = 'http://localhost:8080/mockup/api.posts.json';
    const data: Response = await fetch(req);
    return await data.json();
  } catch (e) {
    return [];
  }
}
