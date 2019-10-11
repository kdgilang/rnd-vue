import { MutationTree } from 'vuex';
import { SET_POSTS } from '../types';
import StateModel from '@/models/state';

export const postmutations: MutationTree<StateModel> = {
    [SET_POSTS]: (state, payload) => {
        state.posts = payload;
    },
};
