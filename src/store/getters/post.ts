import { GetterTree } from 'vuex';
import StateModel from '@/models/state';
import PostModel from '@/models/post';

export const postgetters: GetterTree<StateModel, StateModel> = {
    posts(state): PostModel[] {
        const { posts } = state;
        return posts;
    },
    rootPosts(state): PostModel[] {
        const { rootPosts } = state;
        return rootPosts;
    },
};
