import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Text extends Component {
  render() {
    const { children, values } = this.props;
    return (
      <FormattedMessage id={children} values={values} defaultMessage={children}>
        {text => text}
      </FormattedMessage>
    );
  }
}

export default Text;
