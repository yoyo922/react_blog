import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class hello extends React.Component {
  render() {return <div>Hello</div>}
}

class goodBye extends React.Component {
  render() {return <div>goodbye</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path = "/hello" component={hello} />
        <Route path = "/goodbye" component={goodBye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
