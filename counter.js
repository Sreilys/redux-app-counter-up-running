// Reducer: are pure functions and usually are switch statements
// it takes two argument, the currentAppState and and the action that get dispatched
//the redure switch is gonna specify exactly how the action is gonna change the app state
function counter(currentState, action) {

  // we create a nexState, because we don't modify the current state, but we create a copy, so the app can hold a history
  const nextState = {
    count: currentState.count
  }

  switch (action.type) {
    case 'ADD':
      console.log('add', action);
      nextState.count = currentState.count + 1;
      // and then we return it!
      return nextState;
      break;
    case 'MINUS':
      console.log('minus', action);
      nextState.count = currentState.count - 1;
      // and then we return it!
      return nextState;
      break;
    case 'RESET':
      console.log('reset', action);
      nextState.count = 0;
      // and then we return it!
      return nextState;
      break;
    default:
      console.log('In default'); // actually redux does look in here even before we commit a action, because it needs to set the currentState
      return currentState;
      break;
  }
}

// Store: brings actions and reducer together. They hold the App STATE. Store has listeners which will listen for actions (changes)
// createStore method it takes 2 arguments: reducer and state.
// the Store will subscribe for state change, this is like an observer.

// STATE
const state = {
  count: 0
}

// STORE
const store = Redux.createStore(counter, state);

console.log('Store', store);

const counterEl = document.getElementById('counter');

// takes a single argument: a listener.
store.subscribe(render);

function render() {
  console.log('render');
  // get a new state and parse to a UI
  console.log(store.getState());
  const state = store.getState();
  counterEl.innerHTML = state.count.toString();
}


// ACTIONS: just a js object that has a type, payloads of informations that send data from our application to the store
document.getElementById('add').addEventListener('click', function() {
  // now that we have the event listener, we need to dispatch/emmit the action
  console.log('click');
  // the dispatch action live in a store
  store.dispatch({type: 'ADD'})
});

document.getElementById('minus').addEventListener('click', function() {
  // now that we have the event listener, we need to dispatch/emmit the action
  console.log('click');
  // the dispatch action live in a store
  store.dispatch({type: 'MINUS'})
});

document.getElementById('reset').addEventListener('click', function() {
  // now that we have the event listener, we need to dispatch/emmit the action
  console.log('click');
  // the dispatch action live in a store
  store.dispatch({type: 'RESET'})
});



{
  type: 'ADD'
}
