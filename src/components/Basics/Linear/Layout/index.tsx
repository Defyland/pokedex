import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {ILinearLayout} from '~/components/Basics/Linear/data';
import C from '~/components/Basics/Linear/Layout/styles';

export const Linear: React.FC<ILinearLayout> = ({
  children,
  color,
  ...props
}) => {
  return (
    // @ts-ignore
    <C.Wrapped
      {...props}
      colors={[color, '#FFFFFF']}
      start={{x: 0, y: 1}}
      end={{x: 5, y: 1}}
    >
      {children}
    </C.Wrapped>
  );
};
