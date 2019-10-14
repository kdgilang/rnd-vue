import StateModel from '@/models/state';
import PostModel from '@/models/post';

export const state: StateModel = {
   rootPosts: new PostModel(),
   posts: new PostModel(),
};
