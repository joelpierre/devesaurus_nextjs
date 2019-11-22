import Icons from '@jpp/atoms/Icon/Icon';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './FooterTop.scss';
import footerStyles from '../../PrimaryFooter.scss';

interface IFooterTopProps {
  className?: string;
  companySlogan: string;
  generalEmail: string;
  footerMenu: Core.IMenuItem[];
}

const FooterTop: FunctionComponent<IFooterTopProps> = ({ className, companySlogan, generalEmail }) => {
  return (
    <article className={classNames(className, styles.FooterTop)}>
      <Container>
        <Row>
          <Flex colLg={3} colMd={12}>
            <Icons.LogoText className={footerStyles.primaryFooterLogo} />

            <div className={footerStyles.primaryFooterContent}>
              <p className={footerStyles.primaryFooterCopy}>
                {companySlogan}
              </p>
              <p className={footerStyles.primaryFooterCopy}>
                {generalEmail}
              </p>
            </div>
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.primaryFooterContent} />
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.primaryFooterContent} />
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.primaryFooterContent} />
          </Flex>
        </Row>
      </Container>
    </article>
  );
};

export default FooterTop;
