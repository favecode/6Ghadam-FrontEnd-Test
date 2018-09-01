import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import './public/font.css'
export default class App extends Component {
   render(){
      return(
         <div>
            <BrowserRouter>
               <Home/>
            </BrowserRouter>
         </div>
      );
   }
}

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   ,document.querySelector("#main")
)
