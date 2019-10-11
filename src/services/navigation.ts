import axios from 'axios';

export async function getNavigations(): Promise<any> {
  try {
    const req: string = './mockup/api.navigation.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}

export async function getExploreLocations(): Promise<any> {
  try {
    const req: string = './mockup/api.explorelocation.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}

export async function getOtherStuff(): Promise<any> {
  try {
    const req: string = './mockup/api.otherstuff.json';
    const res = await axios.get(req);
    return await res.data;
  } catch (e) {
    return [];
  }
}
