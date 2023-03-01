import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
} from 'styled-system';

import {withChildren} from '~/utils/interfaces/customTypes';

export interface ILinear
  extends BorderProps,
    withChildren,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {
  color: string;
  testID?: string;
  center?: boolean;
  onPress?(): void;
}

export interface ILinearLayout extends ILinear {}
