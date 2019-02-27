import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { data } from './dummy';

const enhancerArgs = [
    applyMiddleware(
        thunk
    )
];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (devTools) {
    enhancerArgs.push(devTools);
}
let enhancers = compose(...enhancerArgs);

export const store = createStore(
    rootReducer,
    { posts: data },
    enhancers
);