import Store from './store.js';
import reducer from './reducer.js';
import { add, subtract, reset } from './actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(reducer, { count: 0 });
  const counterDisplay = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const resetButton = document.getElementById('reset');

  const render = () => {
    counterDisplay.textContent = store.getState().count;
  };

  store.subscribe(render);

  incrementButton.addEventListener('click', () => {
    store.dispatch(add());
  });

  decrementButton.addEventListener('click', () => {
    store.dispatch(subtract());
  });

  resetButton.addEventListener('click', () => {
    store.dispatch(reset());
  });

  render();
});