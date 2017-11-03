import styled from 'styled-components/native';

import Platform from 'Platform';
import React from 'React';
import PropTypes from 'prop-types';
import StyleSheet from 'StyleSheet';
import Text from 'components/Text';
import TouchableNativeFeedback from 'TouchableNativeFeedback';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';
import invariant from 'fbjs/lib/invariant';

import { Wrapper, Title } from './styled';

class Button extends React.Component<{}> {
  static propTypes = {
    title: PropTypes.string.isRequired,
    accessibilityLabel: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
    hasTVPreferredFocus: PropTypes.bool,
  };

  render() {
    const { accessibilityLabel, color, onPress, title, hasTVPreferredFocus, disabled, testID } = this.props;
    const accessibilityTraits = ['button'];
    if (disabled) {
      accessibilityTraits.push('disabled');
    }
    invariant(
      typeof title === 'string',
      'The title prop of a Button must be a string',
    );
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        hasTVPreferredFocus={hasTVPreferredFocus}
        testID={testID}
        disabled={disabled}
        onPress={onPress}>
        <Wrapper color={color}>
          <Title centered color={color} disabled={disabled}>{title.toUpperCase()}</Title>
        </Wrapper>
      </Touchable>
    );
  }
}

export default Button;