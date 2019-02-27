import { updatePostAction } from '../actions/blogActions';
import { store } from '../store';

export function getBlogPostList() {
    return store.getState().posts;
}

export function updateItemCount(selectedPost) {
    if (selectedPost) {
        store.dispatch(updatePostAction(selectedPost));
    }
}