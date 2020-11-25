import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './reducers';

const middlewares = [];

export function configureStore(initialState) {
    
    return createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares))
    );
    
}
