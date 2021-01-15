import {createStore} from 'redux';
import { foodreducer } from './book/reducer';



const store = createStore(foodreducer);

export default store;