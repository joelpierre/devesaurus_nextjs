import {
  IPrimaryFooterProps,
  IStorePrimaryFooterProps,
  PrimaryFooter
} from '@jpp/components/_shared/PrimaryFooter/PrimaryFooter';
import { connect } from 'react-redux';
import { IReduxState } from '../../../store/createStore';

const mapStateToProps = (
  {
    core: {
      footerMenu,
      termsMenu,
      options: {
        company_name,
        company_slogan,
        general_email
      }
    }
  }: IReduxState) => ({
  footerMenu,
  termsMenu,
  company_name,
  company_slogan,
  general_email
});

export default connect<IStorePrimaryFooterProps, never, IPrimaryFooterProps>(mapStateToProps)(PrimaryFooter);
