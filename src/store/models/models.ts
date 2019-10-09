import navmodel from './navigation';

export default interface RootModel {
   navigations: navmodel[],
};

export const state: RootModel = {
   navigations: [],
};
