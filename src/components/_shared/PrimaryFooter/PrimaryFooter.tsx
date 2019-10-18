import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import Icons from '@jpp/atoms/Icon/Icon';

import { IReduxState } from '../../../store/createStore';

import styles from './PrimaryFooter.scss';

interface IPrimaryFooter {
  className?: string;
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
  company_name: string;
  company_slogan: string;
  general_email: string;
}

export class PrimaryFooter extends PureComponent<IPrimaryFooter> {
  render() {
    const {
      className,
      // footerMenu,
      // termsMenu,
      company_name,
      company_slogan,
      general_email
    } = this.props;

    // console.log(termsMenu);
    // console.log(footerMenu);

    return (
      <footer className={classNames(styles.primaryFooter, className)}>
        <section className={styles.primaryFooterTop}>
          <Container>
            <Row>
              <Flex colLg={3} colMd={12}>
                <Icons.LogoText className={styles.primaryFooterLogo}/>

                <div className={styles.primaryFooterContent}>
                  <p className={styles.primaryFooterCopy}>
                    {company_slogan}
                  </p>
                  <p className={styles.primaryFooterCopy}>
                    {general_email}
                  </p>
                </div>
              </Flex>

              <Flex colLg={3} colMd={6}>
                <div className={styles.primaryFooterContent}>
                  <p className={styles.primaryFooterCopy}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda atque beatae cumque
                    explicabo facere fugit ipsum iusto molestiae nemo, numquam pariatur provident quas quasi quo sint
                    tempora vitae?
                  </p>
                </div>
              </Flex>

              <Flex colLg={3} colMd={6}>
                <div className={styles.primaryFooterContent}>
                  <p className={styles.primaryFooterCopy}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda atque beatae cumque
                    explicabo facere fugit ipsum iusto molestiae nemo, numquam pariatur provident quas quasi quo sint
                    tempora vitae?
                  </p>
                </div>
              </Flex>

              <Flex colLg={3} colMd={6}>
                <div className={styles.primaryFooterContent}>
                  <p className={styles.primaryFooterCopy}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet assumenda atque beatae cumque
                    explicabo facere fugit ipsum iusto molestiae nemo, numquam pariatur provident quas quasi quo sint
                    tempora vitae?
                  </p>
                </div>
              </Flex>
            </Row>
          </Container>
        </section>

        <section className={styles.primaryFooterBottom}>
          <Container>
            <Row>
              <Flex colMd={6}>
                <p className={styles.primaryFooterContent}>
                  {company_name}
                </p>
              </Flex>

              <Flex colMd={6}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis dicta eius eum in itaque
                libero? Ab asperiores beatae dicta est expedita, illum iure nihil provident, reprehenderit repudiandae,
                sed veritatis?
              </Flex>
            </Row>
          </Container>
        </section>
      </footer>
    );
  }
}

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

export default connect(mapStateToProps)(PrimaryFooter);
