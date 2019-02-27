import * as types from './constants';

export const updatePostAction = post => ({ type: types.UPDATE_ITEM, post });
export const storePostsAction = postList => ({ type: types.LOAD_LIST, postList })