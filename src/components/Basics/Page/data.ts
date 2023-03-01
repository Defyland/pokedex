import {IWrappedSystem} from '~/utils';

export interface IPage extends Omit<IWrappedSystem, 'onPress'> {
  hasScroll?: boolean;
}
export interface IPageLayout extends IPage {}
