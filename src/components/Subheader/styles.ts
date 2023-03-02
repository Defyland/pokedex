import styled from 'styled-components/native';
import {Wrapped} from '~/components/Basics';
import {theme} from '~/styles/theme';

export default {
  Filter: styled.View`
    height: 44px;
    margin: 0px ${theme.space[1]}px;
    margin-bottom: ${theme.space[1]}px;
    flex-direction: row;
  `,
  Button: styled(Wrapped)<{isSelected: boolean}>`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-bottom-width: ${({isSelected}) => (isSelected ? 2 : 0)}px;
  `,
  ButtonText: styled.Text``,
};
