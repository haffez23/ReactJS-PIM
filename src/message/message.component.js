import { connect } from 'react-redux';
import { messageActions } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { CSVLink, CSVDownload } from "react-csv";
import { get } from 'https';
import { Paper, Grid, Button, TextField } from '@material-ui/core';

const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  button: {
    margin: theme.spacing.unit,

  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit *2,
    marginRight: theme.spacing.unit *2 ,

  },
});


class MSG extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(messageActions.getMessage());
  }

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };


  handleClick = (event, id) => {
    console.log(id);
    const { dispatch } = this.props;
    dispatch(messageActions.deleteMessageById(id))
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;
    const { message } = this.props.message;



    return (

      <main className={classes.content}>

        <Grid container spacing={24}>
        <Grid item xs={12}>
        <Paper className={classes.paper} center>Messages</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>History Message</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Add new message</Paper>
        </Grid>
        <Grid item xs={6}>



          <Table className={classes.table}>

          <TableBody>

            {message.filter(({device}) =>{return device==this.props.idDevice}).map(n => {
                          console.log("SELECTED DEVICE ID MESSAGE"+this.props.idDevice)

              return (
                <TableRow key={n._id}>
                  <TableCell >{n.content}</TableCell>
                </TableRow>

              )
            }
            )}
          </TableBody>
          </Table>



        </Grid>
        <Grid item xs={6}   justify="flex-end">

            <Grid item xs={6}>
            <TextField
                    id="outlined-multiline-static"
                    label="New Message"
                    multiline
                    rows="8"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                  />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
<Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
              Send
      </Button>


        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
      </main>

    );
  }
}


MSG.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
}

const connectedMessagePage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(MSG)));

export { connectedMessagePage as MSG };