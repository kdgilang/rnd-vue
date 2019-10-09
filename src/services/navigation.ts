import navjson from '@/mockup/api.navigation.json';

export async function getNavigations(): Promise<any> {
    try {
        // disabled since json imported directly.
        // const req: string = 'http://localhost:8080/mockup/api.navigation.json';
        // const data: Response = await fetch(req);
        return await navjson;
    } catch (e) {
        console.error(e);
        return [];
    }
}
