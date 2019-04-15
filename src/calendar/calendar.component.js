import { connect } from 'react-redux';
import { messageActions } from '../_actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../events'

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


class CalenderComponent extends Component {

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


    var events1 =[]
    console.log("DEVICE SELECTED CALENDAR "+this.props.idDevice)
    {message.filter(({device}) =>{return device==this.props.idDevice}).map(n => {
      console.log("EVENTS!"+events1)

      return (
      events1.push({
        id: events1.leghth,
        title: n.content,
        start: new Date(n.displayAt),
        end: new Date(n.hiddenAt),
      })

      )

    }
    )}
    const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

    return (

  <div>
            <BigCalendar
               events={events1}
               step={60}
               showMultiDayTimes
               defaultDate={new Date(2019, 3, 6)}
                localizer={localizer}
            />
          </div>

    );
  }
}


CalenderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
}

const connectedMCalendarPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(CalenderComponent)));

export { connectedMCalendarPage as CalendarComponent };