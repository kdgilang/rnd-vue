import { MutationTree } from 'vuex';
import { SET_NAVIGATIONS } from '../types';
import rootmodel from '../models/models';

export const navigations: MutationTree<rootmodel> = {
    [SET_NAVIGATIONS]: (state, payload) => {
        state.navigations = payload;
    },
};