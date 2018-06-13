import { createStore } from './redux.js';
import $ from 'jquery';
$(document.body).html(`
    <p id="count"><p>
    <button>+</button>
    <button>-</button>
`)
function reducer(state = {number: 0}, action){
    switch(action.type){
        case INCRESE:
            return {
                number: state.number + action.count
            }
            break;
        case DECRESE: 
            return {
                number: state.number + action.count
            }
            break;
        default:
            return state;
    }
}
const store = createStore(reducer);
console.log(store.getState())