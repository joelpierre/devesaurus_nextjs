import { connect } from 'react-redux';
import {
  Core,
  ICoreProps,
  IDispatchCoreProps,
  IStoreCoreProps
} from '@jpp/layouts/Core/Core';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu
    }
  }: IReduxState): IStoreCoreProps => (
  {
    isMenuOpen,
    isLoading,
    primaryMenu
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect<IStoreCoreProps, IDispatchCoreProps, ICoreProps>(mapStateToProps, mapDispatchToProps)(Core);
