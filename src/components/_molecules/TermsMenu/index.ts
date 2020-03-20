import { connect } from 'react-redux';

import {
  IStoreTermsMenuProps,
  ITermsMenuProps,
  TermsMenu,
} from '@jpp/molecules/TermsMenu/TermsMenu';

import { getTermsMenuFromState } from '../../../store/core/selectors';
import { IReduxState } from '../../../store/createStore';

const mapStateToProps = (state: IReduxState) => ({
  termsMenu: getTermsMenuFromState(state),
});

export default connect<IStoreTermsMenuProps, never, ITermsMenuProps>(
  mapStateToProps
)(TermsMenu);
