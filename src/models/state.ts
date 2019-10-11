import PostModel from './post';

export default interface RootModel {
    filterPosts: PostModel[];
    posts: PostModel[];
 }
