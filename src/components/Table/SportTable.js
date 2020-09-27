import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Title from '../Title/Title';

import APIServices from '../../services/client/api';

function preventDefault(event) {
  event.preventDefault();
}

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
});


class SportTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            rowsPerPage: 5,
            page: 0,
            matches: []
        };

        this.getSportData = this.getSportData.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        
    }

    getSportData(){
      /*
        id - ._id, 
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

    onDeleteClick(row){
      const id = row._id;
      
      APIServices.delete(id);

      const matches = this.state.matches;
      delete matches[id];
      this.setState({matches:matches})
    }

    handleChangePage(event, newPage){
      this.setState({page:newPage})
    };
  
    handleChangeRowsPerPage(event){
      this.setState({
        rowsPerPage:parseInt(event.target.value, 10),
        page:0
      })
    };
  

    render(){
        const classes = this.props;
        const rows = Object.values(this.state.matches);
        
        const page = this.state.page;
        const rowsPerPage = this.state.rowsPerPage;

        return (
            <React.Fragment>
              <Title>Recent Scoccer Statistics</Title>
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
                  {rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row._id}>
                      <TableCell>{row._id}</TableCell>
                      <TableCell>{row.teams.away.name}</TableCell>
                      <TableCell>{row.teams.home.name}</TableCell>
                      {/*TODO: Date Format*/}
                      <TableCell>{row.time.date}</TableCell>
                      <TableCell>{row.time.time}</TableCell>
                      <TableCell>{row.result.away}:{row.result.home}</TableCell>
                      <TableCell>
                      <IconButton 
                        aria-label="delete" 
                        className={classes.margin}
                        onClick={() =>{this.onDeleteClick(row)}}>
                        <DeleteIcon 
                          color="secondary" 
                          fontSize="small" />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </React.Fragment>
          );
    }
}




export default withStyles(styles)(SportTable);