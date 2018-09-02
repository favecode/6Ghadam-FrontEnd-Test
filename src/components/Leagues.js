// React
import React, { Component, Fragment } from 'react'

// Helpers
import { apiFunctions } from './../helpers'

// Constants 
import { textsConstants } from './../constants'

// Icon
import {
   Add,
   Delete,
   Edit
} from '@material-ui/icons';

// Components
import AddLeague from './AddLeague'
import DeleteLeague from './DeleteLeague'
import ChangeLeague from './ChangeLeague'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import {
   Table,
   TableBody,
   TableCell,
   TableRow,
   Typography,
   TextField,
} from '@material-ui/core'

// Styles
const styles = theme => ({
   Typography : {
      fontFamily : 'iranSans',
      padding : '1rem',
      marginTop : '1rem',
      textAlign: 'center',
      color: '#322e2e'
   },
   TableCell : {
      fontFamily: 'iranSans',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'  
   },
   DeleteIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
      cursor: 'pointer'
   },
   EditIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
      cursor: 'pointer',
      margin:'auto .5rem'
   },
   Input : {
      display : 'flex',
      margin: '1rem 1rem',
      justifyContent : 'space-between',
      alignItems : 'center'
   },
   AddCircle : {
      color: 'rgba(0, 0, 0, 0.54)',
      cursor: 'pointer',
   },
   Add : {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      cursor : 'pointer'
   }
})

// Components
class Leagues extends Component {
   state = {
      leagues : null,
      Add : false,
      Change : false,
      Delete : false,
      id : '',
      name : ''
   }
   componentDidMount(){
      this.Read();
   }
   Read = () => {
      const { token } = this.props
      apiFunctions.readLeagues(token).then(response => {
         this.setState({
            leagues: response.data,
            Change: false,
            Add: false,
            Delete: false,
         })
      })
   }
   Change = (id,name) => {
      this.setState({
         Change: true,
         Add: false,
         Delete: false,
         id,
         name
      })
   }
   Delete = (id) => {
      this.setState({
         Delete: true,
         Change: false,
         Add: false,
         id
      })
   }
   Add = () => {
      this.setState({
         Add : true,
         Change : false,
         Delete : false
      })
   }
   render() {
      const { leagues } = this.state
      const { classes , token } = this.props
      return (
         <div>
            {leagues 
            ?
               <Fragment>
                  <AddLeague token={token} open={this.state.Add} read={this.Read}/>
                  <DeleteLeague token={token} id={this.state.id} read={this.Read} open={this.state.Delete}/>
                  <ChangeLeague token={token} id={this.state.id} read={this.Read} 
                  name={this.state.name} open={this.state.Change}/>
                  <div className={classes.Input}>
                     <Typography variant="display1" className={classes.Typography} >
                        {textsConstants.Leagues}
                     </Typography>
                     
                  </div>
                  <Table>
                     <TableBody>
                        <TableRow>
                           <TableCell className={classes.TableCell} onClick={this.Add}>
                              <div className={classes.Add}>
                                 <Add className={classes.AddCircle} />
                                 {textsConstants.Create}
                              </div>
                           </TableCell>
                        </TableRow>
                        {Object.values(leagues).map(league =>
                           <TableRow>
                              <TableCell className={classes.TableCell}>
                                 {league.name}
                                 <div>
                                    <Edit className={classes.EditIcon} onClick={() => { this.Change(league.id,league.name) }} />
                                    <Delete className={classes.DeleteIcon} onClick={() => { this.Delete(league.id) }} />
                                 </div>
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </Fragment>
            :
            <Typography className={classes.Typography}>
               {textsConstants.fetchData}
            </Typography>}
         </div>
      );
   }
}
export default withStyles(styles)(Leagues) 