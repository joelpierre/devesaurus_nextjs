import { IReduxState } from '../store/createStore';
import { setMenuState } from '../store/core/actions';
import { connect } from 'react-redux';
import {
  BasicLayout,
  IBasicLayoutProps,
  IDispatchBasicLayoutProps,
  IStoreBasicLayoutProps
} from '@jpp/layouts/BasicLayout/BasicLayout';

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu,
      simpleMenu
    }
  }: IReduxState): IStoreBasicLayoutProps => (
  {
    isMenuOpen,
    isLoading,
    primaryMenu,
    simpleMenu
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect<IStoreBasicLayoutProps, IDispatchBasicLayoutProps, IBasicLayoutProps>(mapStateToProps, mapDispatchToProps)(BasicLayout);
