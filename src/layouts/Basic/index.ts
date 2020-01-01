import { connect } from 'react-redux';
import {
  Basic,
  IBasicProps,
  IDispatchBasicProps,
  IStoreBasicProps
} from '@jpp/layouts/Basic/Basic';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu,
      simpleMenu
    }
  }: IReduxState): IStoreBasicProps => (
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

export default connect<IStoreBasicProps, IDispatchBasicProps, IBasicProps>(
  mapStateToProps, mapDispatchToProps)(Basic);
