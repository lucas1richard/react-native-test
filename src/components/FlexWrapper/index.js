import { View } from 'react-native';
import styled from 'styled-components/native';

export default styled(View)`
  flex: 1;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: space-between;
`;