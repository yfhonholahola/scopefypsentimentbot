import * as React from 'react';
import Navigation from 'navigation';
import createStore from 'stores'
import { Provider } from 'react-redux'

const { store } = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider> 
    )
  }
}