import * as React from 'react';
import {Platform, ScrollView} from 'react-native';
import {IPageLayout} from '../data';
import {Wrapped} from '../../Wrapped';
import * as C from './styles';

export const Page: React.FC<IPageLayout> = ({
  children,
  bg = 'white',
  hasScroll = true,
  ...props
}) => {
  return (
    <C.SafeAreaStyled bg={bg}>
      <C.KeyboardAvoidStyled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {hasScroll ? (
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps={'handled'}
          >
            <Wrapped flexGrow={1} bg={bg} {...props}>
              {children}
            </Wrapped>
          </ScrollView>
        ) : (
          <Wrapped flexGrow={1} bg={bg} {...props}>
            {children}
          </Wrapped>
        )}
      </C.KeyboardAvoidStyled>
    </C.SafeAreaStyled>
  );
};
