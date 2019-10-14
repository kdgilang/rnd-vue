import { ActionTree } from 'vuex';
import { INIT_POSTS, SET_POSTS } from '../types';
import StateModel from '@/models/state';
import PostModel from '@/models/post';
import { getPosts } from '@/services/post';

export const postactions: ActionTree<StateModel, StateModel> = {
  [SET_POSTS]: ({ commit }, payload: PostModel) => {
    commit(SET_POSTS, payload);
  },
  [INIT_POSTS]: ({ commit }) => {
    getPosts().then((res: PostModel) => {
      commit(INIT_POSTS, res);
    });
  },
};
