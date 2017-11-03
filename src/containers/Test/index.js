import React from 'react';

import Text from 'components/Text';

class Test extends React.Component {
  static navigationOptions = {
    title: 'Test'
  };
  render() {
    return <Text centered>Test Screen</Text>
  }
}

export default Test;
