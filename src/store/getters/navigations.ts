import { GetterTree } from 'vuex';
import navmodel from '../models/navigation';
import RootModel from '../models/models';

export const navigations: GetterTree<RootModel, RootModel> = {
    navigations(state): navmodel[] {
        const { navigations } = state;
        return navigations;
    }
};