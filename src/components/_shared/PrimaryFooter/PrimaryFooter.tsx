import React, { PureComponent } from 'react';
import classNames from 'classnames';
import FooterBottom from '@jpp/components/_shared/PrimaryFooter/components/FooterBottom/FooterBottom';
import FooterTop from '@jpp/components/_shared/PrimaryFooter/components/FooterTop/FooterTop';

import styles from './PrimaryFooter.scss';

export interface IPrimaryFooterProps {
  className?: string;
}

export interface IStorePrimaryFooterProps {
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
  company_name: string;
  company_slogan: string;
  general_email: string;
}

type TPrimaryFooterProps = IPrimaryFooterProps & IStorePrimaryFooterProps;

export class PrimaryFooter extends PureComponent<TPrimaryFooterProps> {
  render() {
    const {
      className,
      footerMenu,
      termsMenu,
      company_name,
      company_slogan,
      general_email
    } = this.props;

    return (
      <footer className={classNames(styles.primaryFooter, className)}>
        <FooterTop
          companySlogan={company_slogan}
          generalEmail={general_email}
          className={styles.primaryFooterTop}
          footerMenu={footerMenu}
        />
        <FooterBottom
          companyName={company_name}
          className={styles.primaryFooterBottom}
          termsMenu={termsMenu}
        />
      </footer>
    );
  }
}
