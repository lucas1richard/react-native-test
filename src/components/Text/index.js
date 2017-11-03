import { Text } from 'react-native';
import styled from 'styled-components/native';

export default styled(Text)`
  color: ${(props) => props.theme[props.color] || props.theme.blue};
  font-size: ${(props) => props.small ? 15 : 18};
  text-align: ${(props) => props.centered ? 'center' : 'auto'};
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`;
