import { UPDATE_ITEM, LOAD_LIST } from '../actions/constants'

export const INITIAL_STATE = {}

export function blogReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case LOAD_LIST:
            return [
                ...payload
            ]
        case UPDATE_ITEM:
            const post = payload
            const index = state.findIndex((x) => x.id === post.id)
            state.splice(index, 1, post);
            return [
                ...state
            ]
        default:
            return state
    }
}