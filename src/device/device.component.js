import { connect } from 'react-redux';
import { deviceActions } from '../_actions';
import {deviceService} from '../_services/index'
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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Link from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { CSVLink, CSVDownload } from "react-csv";
import { get } from 'https';

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
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


class Device extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(deviceActions.getDevice());
    }
    
      handleChange = event => {
        this.setState({
          anchor: event.target.value,
        });
      };


      handleClick = (event, id) => {
        console.log(id);
        const { dispatch } = this.props;
        dispatch(deviceActions.deleteDevicesDetails(id))
      };

      deleteHandleClick = ( id) => {
        console.log(id);
        // const { dispatch } = this.props;
        // dispatch(deviceActions.deleteDevicesDetails(id))
        deviceService.deleteDetail("devices"+id)
      };

  
    
   render() {
     const { classes } = this.props;
     const { device } = this.props.device;
     
      return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                      <Typography>{'Devices'}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                    <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-device">
                        Add Device
                      </Button> 
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                          <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell >Code</TableCell>
                              <TableCell >Messages</TableCell>
                              <TableCell >Users</TableCell>
                              <TableCell>Action</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {device.map(n => {
                              return (
                              <TableRow key={n._id}>
                                 
                                  <TableCell >{n.name}</TableCell>
                                  <TableCell >{n.code}</TableCell>
                                  <TableCell >   
                                    <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                                      <Link />
                                    </IconButton>
                                    
                                  </TableCell>
                                  <TableCell >users</TableCell>
                                  <TableCell>
                            
                                    <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.deleteHandleClick( n._id)}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </TableCell>
                            
                              </TableRow>
                              );
                          })}
                          </TableBody>
                      </Table>
                  </Paper>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}


Device.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
  return {
    device : state.device
  };
}

const connectedDevicePage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Device)));

export { connectedDevicePage as Device };