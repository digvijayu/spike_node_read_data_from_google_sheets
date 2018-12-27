import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTheme } from './../../styles/Theme';
import { appError } from './../../actions';
import { withRouter } from 'react-router-dom';
import Text from './../../components/Text';

class Home extends Component {
  render() {
    return (
      <div>
        <Text>Page.Page.Name</Text>
      </div>
    );
  }
}

const mapStateToText = state => ({
  serverUrl: state.appReducer.serverUrl
});

export const mapDispatch = dispatch => ({
  appError: message => dispatch(appError(message))
});

export default connect(
  mapStateToText,
  mapDispatch
)(withTheme(withRouter(Home)));
