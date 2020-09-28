import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import * as Parser from "../../services/handler/parser";


const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
});
/**
 * This table enhances the normal material-ui table with pagination.
 */
class EnhancedTable extends Component {
    constructor(props){
        super(props);
        
        this.state = {

            open: true,
            rowsPerPage: 5,
            page: 0,
            columns: props.columns
        };

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        
    }
    /**
     * Pagination Helper Function to change the page.
     *
     * @param {event} event
     * @param {newPage} number
     * @public
     */
    handleChangePage(event, newPage){
      this.setState({page:newPage})
    };
    
    /**
     * Pagination Helper Function to change the number of shown rows.
     *
     * @param {event} event
     * @public
     */
    handleChangeRowsPerPage(event){
      this.setState({
        rowsPerPage:parseInt(event.target.value, 10),
        page:0
      })
    };

    
  

    render(){
      /* ... */
      const classes = this.props;
      const {page, rowsPerPage, columns } = this.state;
      const { data } = this.props;

      return (
          <React.Fragment>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {columns.map(col =>(
                    <TableCell key={col.id}>{col.label}</TableCell>
                  ))}
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage).map(row => (
                  <TableRow key={row.id}>
                    {/*TODO: Dynamically create TableCells with map and MATCH_TABLE_COLUMNS*/}
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.teamAway}</TableCell>
                    <TableCell>{row.teamHome}</TableCell>
                    {/*TODO: Date Format () =>{Parser.SetDateFormat(row.time.date,"DD/MM/YYYY","DD-MM-YYYY")}*/}
                    <TableCell>{Parser.SetDateFormat(row.date,this.props.dataDateFormat,this.props.outputDateFormat)}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.resultAway}</TableCell>
                    <TableCell>{row.resultHome}</TableCell>
                    <TableCell>
                    <IconButton 
                      aria-label="delete" 
                      className={classes.margin}
                      onClick={() =>{this.props.onDeleteClick(row)}}>
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
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
          </React.Fragment>
        );
    }
}

EnhancedTable.propTypes = {
  /** data of the table rows */
  data: PropTypes.array.isRequired,
  /** table columns with metadata */
  columns: PropTypes.array.isRequired,
  /** function that is called if the the delete action is pressed */
  onDeleteClick: PropTypes.func.isRequired,
  /** date format of the data */
  dataDateFormat: PropTypes.string.isRequired,
  /** date format of the table */
  outputDateFormat: PropTypes.string.isRequired,
};


export default withStyles(styles)(EnhancedTable);