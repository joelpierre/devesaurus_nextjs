import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import Container from '@jpp/components/_shared/Grid/Container/Container';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { Button } from '@jpp/molecules/Buttons/Button';

import styles from './CtaBanner.scss';

type TCtaBanner = Core.IAcfComponent;

export const CtaBanner: FunctionComponent<TCtaBanner> = (
  {
    heading,
    copy,
    cta,
    cta_text,
    cta_link,
    cta_theme,
    theme,
    page_theme,
    className
  }
) => {
  return (
    <Section
      data-test="component-cta-banner"
      className={classNames(styles.ctaBanner, className)}
      theme={theme || page_theme}
    >
      <Container>
        <Row>
          <Flex colLg={7} colMd={10} className="mx-auto">
            {/*<Brand*/}
            {/*  type={'symbol'}*/}
            {/*  center*/}
            {/*  theme={'tint-alpha'}*/}
            {/*  className={classNames(styles.ctaBannerBrand)}*/}
            {/*/>*/}

            <Heading priority={2} className={styles.ctaBannerHeading}>
              {heading}
            </Heading>
            <p className={styles.ctaBannerCopy}>{copy}</p>

            {cta ? (
              <Button
                caps
                link={cta_link ? `/${cta_link.post_name}` : `/contact`}
                as="[slug]"
                theme={cta_theme}
                behaviour={'router'}
                className={styles.ctaBannerButton}
                icon={{
                  weight: 'far',
                  name: 'angle-double-right'
                }}
              >
                {cta_text}
              </Button>
            ) : (
              <>
                {/*<FormBase*/}
                {/*  className={styles.ctaBannerForm}*/}
                {/*  formName={setForm.formName}*/}
                {/*  buttons={setForm.buttons}*/}
                {/*  successButtonTheme={setForm.successButtonTheme}*/}
                {/*  formGroups={setForm.formGroups}*/}
                {/*/>*/}
              </>
            )}
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};
