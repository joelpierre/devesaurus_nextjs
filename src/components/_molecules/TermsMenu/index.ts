import { connect } from 'react-redux';
import { IStoreTermsMenuProps, ITermsMenuProps, TermsMenu } from '@jpp/molecules/TermsMenu/TermsMenu';
import { IReduxState } from '../../../store/createStore';
import { getTermsMenuFromState } from '../../../store/core/selectors';

const mapStateToProps = (state: IReduxState) => ({
  termsMenu: getTermsMenuFromState(state)
});

export default connect<IStoreTermsMenuProps, never, ITermsMenuProps>(mapStateToProps)(TermsMenu);
