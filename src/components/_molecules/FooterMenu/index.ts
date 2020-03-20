import { connect } from 'react-redux';

import { getFooterMenuFromState } from '../../../store/core/selectors';
import { IReduxState } from '../../../store/createStore';
import {
  FooterMenu,
  IFooterMenuProps,
  IStoreFooterMenuProps,
} from './FooterMenu';

const mapStateToProps = (state: IReduxState): IStoreFooterMenuProps => ({
  footerMenu: getFooterMenuFromState(state),
});

export default connect<IStoreFooterMenuProps, never, IFooterMenuProps>(
  mapStateToProps
)(FooterMenu);
