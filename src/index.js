import Redux from './redux.js';
import $ from 'jquery';
const INCRESE = "INCRESE";
const DECRESE = "DECRESE";
$(document.body).html(`
    <p id="count"><p>
    <button id="increse">+</button>
    <button id="decrese">-</button>
`)
function reducer(state = {number: 100}, action = {type: null}){
    switch(action.type){
        case INCRESE:
            return {
                number: state.number + action.count
            }
            break;
        case DECRESE: 
            return {
                number: state.number - action.count
            }
            break;
        default:
            return state;
    }
}
const store = Redux.createStore(reducer);
$('#count').html(store.getState().number);
store.subscribe(() => {console.log(store.getState().number);$('#count').html(store.getState().number)});
$('#increse').click(()=>store.dispatch({type: INCRESE, count: 3}));
$('#decrese').click(()=>store.dispatch({type: DECRESE, count: 2}));