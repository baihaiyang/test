const createStore = (reducer) => {
    let state;
    let listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.map((listener, index) => {
            listener();
        })
    }
    const subscribe = () => {
        listeners.push(listener);
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default { createStore }