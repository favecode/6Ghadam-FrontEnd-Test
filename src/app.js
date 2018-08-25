import React , { Component } from 'react'
import ReactDOM from 'react-dom'
export default class App extends Component {
   render(){
      return(
         <div>App Component</div>
      );
   }
}

ReactDOM.render(
   <App/>,document.querySelector("#main")
)
