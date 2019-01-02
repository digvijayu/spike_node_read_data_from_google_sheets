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
      serverJson: null,
      googleLoginUrl: null
    };
  }

  componentDidMount() {
    this.getUrl();
  }

  getUrl() {
    return fetch('/api/login-url')
    .then(response => response.json())
    .then(res => {
      console.log('res', res);
      this.setState({
        ...this.state,
        googleLoginUrl: res.url
      });
    });
  }

  render() {
    const { serverJson, googleLoginUrl } = this.state;
    return (
      <div>
        <Text>Home.Page.Name</Text>
        <button onClick={this.handleOnClick.bind(this)}>
          Load Sheet Details
        </button>

        {googleLoginUrl && <a href={googleLoginUrl}>Login with Google</a>}

        {serverJson && (
          <div>
            <pre>{JSON.stringify(serverJson, null, 2)}</pre>
          </div>
        )}
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
