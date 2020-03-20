import classNames from 'classnames';
import React, { PureComponent } from 'react';

import { FooterBottom } from './components/FooterBottom/FooterBottom';
import { FooterTop } from './components/FooterTop/FooterTop';
import styles from './PrimaryFooter.scss';

export interface IPrimaryFooterProps {
  className?: string;
}

export interface IStorePrimaryFooterProps {
  footerMenu: Core.IMenuItem[];
  company_name: string;
  company_slogan: string;
  general_email: string;
}

type TPrimaryFooter = IPrimaryFooterProps & IStorePrimaryFooterProps;

export class PrimaryFooter extends PureComponent<TPrimaryFooter> {
  render() {
    const {
      className,
      footerMenu,
      company_name,
      company_slogan,
      general_email,
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
        />
      </footer>
    );
  }
}
