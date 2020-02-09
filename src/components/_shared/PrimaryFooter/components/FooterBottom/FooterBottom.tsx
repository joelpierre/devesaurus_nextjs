import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import TermsMenu from '@jpp/molecules/TermsMenu';

import styles from './FooterBottom.scss';

interface IFooterBottomProps {
  className?: string;
  companyName: string;
}

export const FooterBottom: FunctionComponent<IFooterBottomProps> = (
  {
    className,
    companyName
  }
) => {
  return (
    <article className={classNames(className, styles.FooterBottom)}>
      <Container fluid={true}>
        <Row>
          <Flex colMd={6}>
            <Heading priority={6} className={styles.FooterBottom__heading}>
              {`&copy; ${companyName} 2019-${new Date().getFullYear()}. Created by Joel Pierre-Powell.`}
            </Heading>
          </Flex>

          <Flex colMd={6}>
            <TermsMenu className={styles['FooterBottom__terms-menu']} />
          </Flex>
        </Row>
      </Container>
    </article>
  );
};
