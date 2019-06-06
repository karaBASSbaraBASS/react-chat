import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello World</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
