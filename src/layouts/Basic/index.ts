import { connect } from 'react-redux';
import {
  Basic,
  IBasicProps,
  IDispatchBasicProps,
  IStoreBasicProps
} from '@jpp/layouts/Basic/Basic';
import {
  getLoadingState,
  getMenuState,
  getPrimaryMenuFromState,
  getSimpleMenuFromState
} from '../../store/core/selectors';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

const mapStateToProps = (state: IReduxState): IStoreBasicProps => (
  {
    isMenuOpen: getMenuState(state),
    isLoading: getLoadingState(state),
    primaryMenu: getPrimaryMenuFromState(state),
    simpleMenu: getSimpleMenuFromState(state)
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect<IStoreBasicProps, IDispatchBasicProps, IBasicProps>(
  mapStateToProps, mapDispatchToProps)(Basic);
