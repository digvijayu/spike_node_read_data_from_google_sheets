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
    const { googleLoginUrl } = this.state;
    return (
      <div>
        <Text>Home.Page.Name</Text>
        {googleLoginUrl && <a href={googleLoginUrl}>Login with Google</a>}
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
)(withTheme(withRouter(Page)));
