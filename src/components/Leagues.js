// React
import React, { Component, Fragment } from 'react'

// Helpers
import { apiFunctions } from './../helpers'

// Constants 
import { textsConstants } from './../constants'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import {
   Table,
   TableBody,
   TableCell,
   TableRow,
   Typography
} from '@material-ui/core'

// Styles
const styles = theme => ({
   Typography : {
      fontFamily : 'iranSans',
      padding : '10px',
      textAlign: 'center'
   },
   TableCell : {
      fontFamily: 'iranSans', 
      textAlign: 'right'     
   }
})

// Components
class Leagues extends Component {
   state = {
      leagues : null
   }
   componentDidMount(){
      const { token } = this.props
      apiFunctions.readLeagues(token).then(response => {
         this.setState({
            leagues: response.data
         })
      })
   }
   render() {
      const { leagues } = this.state
      const { classes } = this.props
      return (
         <div>
            {leagues 
            ?
               <Table>
                  <TableBody>
                     {Object.values(leagues).map(league =>
                        <TableRow>
                           <TableCell className={classes.TableCell}>
                              {league.name}
                           </TableCell>
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            :
            <Typography className={classes.Typography}>
               {textsConstants.fetchData}
            </Typography>}
         </div>
      );
   }
}
export default withStyles(styles)(Leagues) 