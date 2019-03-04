import { connect } from 'react-redux';
import { userActions, deviceActions } from '../_actions';
import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import { withRouter } from 'react-router-dom';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import Device from '../_components/device'
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
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getUser())
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
    dispatch(userActions.getUserById(id))
  };

  render() {
    var myEventsList = [{
      title: "Hello World",
      start: Date.now,
      end: Date.UTC,
      allDay: true,
      resource: "ay"
    }]

    const { classes } = this.props;
    const { user } = this.props.user;
    const { device } = this.props.device;

    const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Devices</ListSubheader>
              </GridListTile>
              {device.map(n => {
                return (
                  <Device title={n.name} message={n.code} />
                )}
              )}
            </GridList>
          </main>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    device: state.device
  };
}

const connectedFormPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(Home)));

export { connectedFormPage as Home };