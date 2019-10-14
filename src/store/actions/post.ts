import { ActionTree } from 'vuex';
import { SET_ROOTPOSTS, SET_POSTS } from '../types';
import StateModel from '@/models/state';
import PostModel from '@/models/post';
import { getPosts } from '@/services/post';

export const postactions: ActionTree<StateModel, StateModel> = {
  [SET_POSTS]: ({ commit }, payload: PostModel[]) => {
    commit(SET_POSTS, payload);
  },
  [SET_ROOTPOSTS]: ({ commit }) => {
    getPosts().then((res: PostModel[]) => {
      commit(SET_ROOTPOSTS, res);
    });
  },
};
