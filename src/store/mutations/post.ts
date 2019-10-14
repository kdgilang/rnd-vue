import { MutationTree } from 'vuex';
import { INIT_POSTS, SET_POSTS } from '../types';
import StateModel from '@/models/state';
import PostModel from '@/models/post';

export const postmutations: MutationTree<StateModel> = {
    [SET_POSTS]: (state, payload: PostModel) => {
        state.posts = payload;
    },
    [INIT_POSTS]: (state, payload: PostModel) => {
        state.rootPosts = payload;
        state.posts = state.rootPosts;
    },
};
