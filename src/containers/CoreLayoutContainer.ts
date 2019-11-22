import { IReduxState } from '../store/createStore';
import { setMenuState } from '../store/core/actions';
import { connect } from 'react-redux';
import {
  CoreLayout,
  ICoreLayoutProps,
  IDispatchCoreLayoutProps,
  IStoreCoreLayoutProps
} from '@jpp/layouts/CoreLayout/CoreLayout';

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu
    }
  }: IReduxState): IStoreCoreLayoutProps => (
  {
    isMenuOpen,
    isLoading,
    primaryMenu
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect<IStoreCoreLayoutProps, IDispatchCoreLayoutProps, ICoreLayoutProps>(mapStateToProps, mapDispatchToProps)(CoreLayout);
