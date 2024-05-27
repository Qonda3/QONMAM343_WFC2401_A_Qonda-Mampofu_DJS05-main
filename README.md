## Overview of the Approach

This project is a simple Tally App that allows you to increment, decrement, and reset a counter. The core idea is to manage the state of the counter using a Redux-inspired pattern, which involves a store, actions, and a reducer. Here's a brief explanation of each part:

### HTML Structure:

- The index.html file provides the basic structure of the app, including buttons to increment, decrement, and reset the counter.

### CSS Styling:

- The styles.css file contains the styles to make the app look nice, with a dark theme and bright blue buttons.

### JavaScript Files:

- **store.js**: This file defines a Store class that holds the state and provides methods to get the state, dispatch actions, and subscribe to state changes.
- **actions.js**: This file defines action types (ADD, SUBTRACT, RESET) and action creator functions that return these actions.
- **reducer.js**: This file defines a reducer function that takes the current state and an action, and returns a new state based on the action type.
- **main.js**: This file sets up the store, connects the store to the UI, and adds event listeners to the buttons to dispatch actions when clicked.

### Challenges Faced and How We Overcame Them

1. Ensuring DOM Elements are Loaded:

- Initially, there was an issue with accessing HTML elements before the DOM was fully loaded, causing errors. I solved this by wrapping our JavaScript code in a DOMContentLoaded event listener to ensure the DOM is fully loaded before running the script.

2. Managing State Updates:

- Another challenge was ensuring the counter display updates correctly whenever the state changes. I addressed this by subscribing a render function to the store, which updates the counter display whenever an action is dispatched.

3. File Organization and Importing:

- Organizing the code into separate files (store.js, actions.js, reducer.js, and main.js) helped keep the code clean and manageable. Using proper import/export statements ensured that each part of the app could communicate correctly.
