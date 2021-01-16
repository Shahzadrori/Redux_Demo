import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { foodreducer } from './book/reducer';



const store = createStore(foodreducer,applyMiddleware(logger));

export default store;