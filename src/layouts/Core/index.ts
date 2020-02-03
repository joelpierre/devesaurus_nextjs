import { connect } from 'react-redux';
import {
  Core,
  ICoreProps,
  IDispatchCoreProps,
  IStoreCoreProps
} from '@jpp/layouts/Core/Core';
import {
  getLoadingState,
  getMenuState,
  getPrimaryMenuFromState
} from '../../store/core/selectors';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

const mapStateToProps = (state: IReduxState): IStoreCoreProps => (
  {
    isMenuOpen: getMenuState(state),
    isLoading: getLoadingState(state),
    primaryMenu: getPrimaryMenuFromState(state)
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect<IStoreCoreProps, IDispatchCoreProps, ICoreProps>(mapStateToProps, mapDispatchToProps)(Core);
