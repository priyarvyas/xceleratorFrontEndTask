import { updatePostAction } from '../actions/blogActions';
import { store } from '../store';

export function getBlogPostList() {
    return store.getState().posts;
}

export function updatePostData(selectedPost) {
    console.log(selectedPost);
    if (selectedPost) {
        store.dispatch(updatePostAction(selectedPost));
    }
}