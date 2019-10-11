import { ActionTree } from 'vuex';
import { SET_POSTS } from '../types';
import StateModel from '@/models/state';
import PostModel from '@/models/post';
import { getPosts } from '@/services/post';

export const postactions: ActionTree<StateModel, StateModel> = {
  [SET_POSTS]: ({ commit }) => {
    getPosts().then((res: PostModel[]) => {
      const payload: PostModel[] = res;
      commit(SET_POSTS, res);
    });
  },
};
