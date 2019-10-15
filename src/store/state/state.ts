import StateModel from '@/models/state';
import PostModel from '@/models/post';
import PostListModel from '@/models/postlist';

export const state: StateModel = {
   rootPosts: new PostModel(),
   posts: new PostModel(),
};
