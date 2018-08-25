import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
   render(){
      return(
         <div>App Component</div>
      );
   }
}

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   ,document.querySelector("#main")
)
