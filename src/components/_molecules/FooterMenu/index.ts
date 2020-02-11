import { connect } from 'react-redux';
import { FooterMenu, IFooterMenuProps, IStoreFooterMenuProps } from './FooterMenu';
import { IReduxState } from '../../../store/createStore';
import { getFooterMenuFromState } from '../../../store/core/selectors';

const mapStateToProps = (state: IReduxState): IStoreFooterMenuProps => ({
  footerMenu: getFooterMenuFromState(state)
});

export default connect<IStoreFooterMenuProps, never, IFooterMenuProps>(
  mapStateToProps
)(FooterMenu);
