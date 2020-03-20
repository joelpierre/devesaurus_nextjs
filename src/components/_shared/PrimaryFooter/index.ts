import { connect } from 'react-redux';

import {
  IPrimaryFooterProps,
  IStorePrimaryFooterProps,
  PrimaryFooter,
} from '@jpp/components/_shared/PrimaryFooter/PrimaryFooter';

import {
  getFooterMenuFromState,
  getOptions,
} from '../../../store/core/selectors';
import { IReduxState } from '../../../store/createStore';

const mapStateToProps = (state: IReduxState) => {
  const options = getOptions(state);

  return {
    footerMenu: getFooterMenuFromState(state),
    company_name: options.company_name,
    company_slogan: options.company_slogan,
    general_email: options.general_email,
  };
};

export default connect<IStorePrimaryFooterProps, never, IPrimaryFooterProps>(
  mapStateToProps
)(PrimaryFooter);
