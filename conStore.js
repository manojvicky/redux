import {createStore} from 'redux';
import todos from './index';

export default function conStore(){
    return createStore(
        todos
    )
}