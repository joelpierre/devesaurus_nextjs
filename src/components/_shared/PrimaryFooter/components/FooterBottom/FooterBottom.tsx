import Container from '@jpp/components/_shared/Grid/Container/Container';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './FooterBottom.scss';
import footerStyles from '../../PrimaryFooter.scss';

interface IFooterBottomProps {
  className?: string;
  companyName: string;
  termsMenu: Core.IMenuItem[];
}

const FooterBottom: FunctionComponent<IFooterBottomProps> = ({ className, companyName }) => {
  return (
    <article className={classNames(className, styles.FooterBottom)}>
      <Container>
        <Row>
          <Flex colMd={6}>
            <div className={footerStyles.primaryFooterContent}>
              <p className={footerStyles.primaryFooterCopy}>
                {companyName}
              </p>
            </div>
          </Flex>

          <Flex colMd={6}>
            Menu here
          </Flex>
        </Row>
      </Container>
    </article>
  );
};

export default FooterBottom;
