import React from 'react';
import { render } from 'react-dom';
import ColorComponent from './components/ColorComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import Colors from './constants/Colors';

const initialState = {
    color: Colors.GRAY
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                color: action.color
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
    <ColorComponent/>
  </Provider>
);

render(<App />, document.getElementById('root'));
serviceWorker.unregister();