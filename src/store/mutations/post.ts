import { MutationTree } from 'vuex';
import { SET_ROOTPOSTS, SET_POSTS } from '../types';
import StateModel from '@/models/state';
import PostModel from '@/models/post';

export const postmutations: MutationTree<StateModel> = {
    [SET_POSTS]: (state, payload: PostModel[]) => {
        state.posts = payload;
    },
    [SET_ROOTPOSTS]: (state, payload: PostModel[]) => {
        state.rootPosts = payload;
    },
};
