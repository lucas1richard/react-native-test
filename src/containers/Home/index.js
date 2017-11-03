import React from 'react';

import FlexWrapper from 'components/FlexWrapper';
import Text from 'components/Text';
import Button from 'components/Button';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Weee'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlexWrapper>
        <Text centered>Home Screen</Text>
        <Button
          onPress={() => navigate('Test')}
          title="Go to Test Page"
        />
      </FlexWrapper>
    );
  }
}

export default Home;
