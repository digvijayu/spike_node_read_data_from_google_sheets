import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { withTheme } from './../../styles/Theme';
import { appError } from './../../actions';
import { withRouter } from 'react-router-dom';
import Text from './../../components/Text';
import { QUERY_STRINGS } from './../../utils/constants';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    const parsedQueryParams = queryString.parse(this.props.location.search);
    const code = !!parsedQueryParams[QUERY_STRINGS.CODE]
      ? parsedQueryParams[QUERY_STRINGS.CODE]
      : '';

    const scope = !!parsedQueryParams[QUERY_STRINGS.SCOPE]
      ? parsedQueryParams[QUERY_STRINGS.SCOPE]
      : '';

    console.log('code', code);
    console.log('scope', scope);

    if(! (code && scope)){
      this.props.history.push('/');
    }

    this.state = {
      code,
      scope,
      serverJson: null,
      token: null
    };

    this.getToken();
  }

  getToken() {
    const { code, scope } = this.state;
    return fetch('/api/get-token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code,
        scope
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('token', response);
        this.setState({
          ...this.state,
          token: response
        });
      });
  }

  handleOnClick() {
    const { token } = this.state;
    fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token.token
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

  render() {
    const { serverJson, token } = this.state;
    return (
      <div>
        {(!token) && <div>Loading....</div>}
        { token && <button onClick={this.handleOnClick.bind(this)}>
          Load Sheet Details
          </button>
        }
        {serverJson && (
          <div>
            <pre>{JSON.stringify(serverJson, null, 2)}</pre>
          </div>
        )}
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
)(withTheme(withRouter(LoggedIn)));
