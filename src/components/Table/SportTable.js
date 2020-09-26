import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';

import APIServices from '../../services/client/api';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


class SportTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            matches: []
        };

        this.getSportData = this.getSportData.bind(this);
        
    }

    getSportData(){
      /*
        id - .id, 
        away team - .teams.away.name,
        home team - .teams.home.name,
        Date - .time.date, 
        Time - .time.time, , 
        Result - [.result.away,result.home] (optional: result.winner), 
        Actions - delete
      */
      return APIServices.getAll().then(data => {
        const matches = data.doc[0].data.matches
        this.setState({matches:matches})
      });
      
    }

    componentDidMount(){
      this.getSportData();
    }

    render(){
        const classes = this.props;

        const matches = Object.values(this.state.matches)

        console.log(matches);

        return (
            <React.Fragment>
              <Title>Recent Orders</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Team Away</TableCell>
                    <TableCell>Team Home</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Result</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matches.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.teams.away.name}</TableCell>
                      <TableCell>{row.teams.home.name}</TableCell>
                      <TableCell>{row.time.date}</TableCell>
                      <TableCell>{row.time.time}</TableCell>
                      <TableCell>{row.result.away}:{row.result.home}</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                  See more orders
                </Link>
              </div>
            </React.Fragment>
          );
    }
}




export default withStyles(styles)(SportTable);