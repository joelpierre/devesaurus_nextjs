import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Icons from '@jpp/atoms/Icon/Icon';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';

import footerStyles from '../../PrimaryFooter.scss';
import styles from './FooterTop.scss';
import FeaturedWordsList from '@jpp/molecules/FeaturedWordsList';
import FooterMenu from '@jpp/molecules/FooterMenu';

interface IFooterTopProps {
  className?: string;
  companySlogan: string;
  generalEmail: string;
  footerMenu: Core.IMenuItem[];
}

export const FooterTop: FunctionComponent<IFooterTopProps> = (
  {
    className,
    companySlogan,
    generalEmail
  }
) => {
  return (
    <article className={classNames(className, styles.FooterTop)}>
      <Container fluid={true}>
        <Row>
          <Flex colLg={3} colMd={12}>
            <Link href="/" as="/">
              <a>
                <Icons.LogoText className={footerStyles.PrimaryFooter__logo} />
              </a>
            </Link>
          </Flex>

          <Flex colLg={2} colMd={12} className="ml-auto">
            <div className={footerStyles.PrimaryFooter__content}>
              <FeaturedWordsList />
            </div>
          </Flex>

          <Flex colLg={2} colMd={12}>
            <div className={footerStyles.PrimaryFooter__content}>
              <FooterMenu />
            </div>
          </Flex>

          <Flex colLg={3} colMd={12} className="ml-auto">
            <div className={footerStyles.PrimaryFooter__content}>
              <p className={footerStyles.PrimaryFooter__copy}>
                {companySlogan}
              </p>
              <p className={footerStyles.PrimaryFooter__copy}>
                {generalEmail}
              </p>
            </div>
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.PrimaryFooter__content} />
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.PrimaryFooter__content} />
          </Flex>

          <Flex colLg={3} colMd={6}>
            <div className={footerStyles.PrimaryFooter__content} />
          </Flex>
        </Row>
      </Container>
    </article>
  );
};
