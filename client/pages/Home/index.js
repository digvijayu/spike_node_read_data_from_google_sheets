import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from './../../styles/Theme';
import { appError } from './../../actions';
import Text from './../../components/Text';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverJson: null
    };
  }

  render() {
    const { serverJson } = this.state;
    return (
      <div>
        <Text>Home.Page.Name</Text>
        <button onClick={this.handleOnClick.bind(this)}>
          Load Sheet Details
        </button>

        { serverJson && <div><pre>{JSON.stringify(serverJson, null, 2) }</pre></div> }
      </div>
    );
  }

  handleOnClick() {
    fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        ...this.state,
        serverJson: response
      });
    });
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
)(withTheme(withRouter(Page)));
