// React
import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Components
import Login from './Login'
import Leagues from './Leagues'
import AddLeague from './AddLeague'
import DeleteLeague from './DeleteLeague'
import ChangeLeague from './ChangeLeague'

// Material UI
import {
   Grid,
   Paper,
} from '@material-ui/core'

// Component
class Home extends Component {
   render() {
      return (
         <div>Home</div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      store: state
   }
}

export default connect(mapStateToProps,null)(Home)