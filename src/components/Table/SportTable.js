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
import AddRecordButton from './components/AddRecordButton';

import APIServices from '../../services/client/api';
import * as Parser from "../../services/handler/parser";

// Constants
import * as Constants from "../../services/handler/constants";

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
            matchDateFormat: "DD/MM/YY",
            addDialogDateFormat: "DD-MM-YYYY",
            outputDateFormat: "DD.MM.YYYY",

            matches: []
        };

        this.getSportData = this.getSportData.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.addRecord = this.addRecord.bind(this);
        
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
      return APIServices.getAll().then(matches => {
        console.log(matches);
        this.setState({matches:matches})
      });
      
    }

    componentDidMount(){
      this.getSportData();
    }

    onDeleteClick(row){
      const id = row.id;
      //delete object in database with corresponding id
      APIServices.delete(id);

      //normally I would call a refresh of the table when the item is deleted
      const matches = this.state.matches;
      const filtered = matches.filter(function(item) { 
        return item.id !== id;  
      });
      this.setState({matches:filtered})
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

    addRecord(record){
      record.date = Parser.SetDateFormat(
        record.date,
        this.state.addDialogDateFormat,
        this.state.matchDateFormat);
      
      const matches = this.state.matches.concat(record);
      this.setState({matches:matches})
      
    }
  

    render(){
        const classes = this.props;
        const rows = this.state.matches;
        
        const page = this.state.page;
        const rowsPerPage = this.state.rowsPerPage;

        return (
            <React.Fragment>
              <Title>Recent Scoccer Statistics</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {Constants.TABLE_COLUMNS.map(col =>(
                      <TableCell key={col.id}>{col.label}</TableCell>
                    ))}
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.id}>
                      {/*TODO: Dynamically create TableCells with map and TABLE_COLUMNS*/}
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.teamAway}</TableCell>
                      <TableCell>{row.teamHome}</TableCell>
                      {/*TODO: Date Format () =>{Parser.SetDateFormat(row.time.date,"DD/MM/YYYY","DD-MM-YYYY")}*/}
                      <TableCell>{Parser.SetDateFormat(row.date,this.state.matchDateFormat,this.state.outputDateFormat)}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>{row.resultAway}</TableCell>
                      <TableCell>{row.resultHome}</TableCell>
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
              <AddRecordButton onAddClick={this.addRecord}/>
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