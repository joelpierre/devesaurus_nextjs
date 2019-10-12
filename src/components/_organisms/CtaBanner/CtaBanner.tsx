import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Container from 'src/components/grid/Container/Container';
import Flex from 'src/components/grid/Flex/Flex';
import Section from 'src/components/grid/Section/Section';
import Brand from 'src/components/molecules/Brand/Brand';
import Button from 'src/components/molecules/Buttons/Button';
import FormBase, { IFormBaseProps } from 'src/components/molecules/FormBase/FormBase';
import Heading from 'src/components/shared/Heading/Heading';
import { IAcfComponentProps } from 'src/utils/interfaces';
import { TTheme } from 'src/utils/types';
import Row from 'src/components/grid/Row/Row';
import styles from './CtaBanner.module.scss';

const CtaBanner: FunctionComponent<Partial<IAcfComponentProps>> = (
  {
    module = { ...defaultModule },
    pageTheme = 'brand',
    ...props
  },
) => {
  const { heading, copy, cta, cta_text, cta_link, cta_theme, theme } = module;

  return (
    <Section
      data-test="component-cta-banner"
      className={styles.ctaBanner}
      theme={theme as TTheme}
      {...props}
    >
      <Container>
        <Row>
          <Flex colLg={7} colMd={10} className="mx-auto">
            <Brand
              type={'symbol'}
              center
              theme={'tint-alpha'}
              className={classNames(styles.ctaBannerBrand)}
            />

            <Heading priority={2} className={styles.ctaBannerHeading}>
              {heading}
            </Heading>
            <p className={styles.ctaBannerCopy}>{copy}</p>

            {cta ? (
              <Button
                caps
                link={cta_link ? `/${cta_link.post_name}` : `/contact`}
                theme={cta_theme as TTheme}
                behaviour={'router'}
                className={styles.ctaBannerButton}
                icon={{
                  weight: 'far',
                  name: 'angle-double-right',
                }}
              >
                {cta_text}
              </Button>
            ) : (
              <FormBase
                className={styles.ctaBannerForm}
                formName={setForm.formName}
                buttons={setForm.buttons}
                successButtonTheme={setForm.successButtonTheme}
                formGroups={setForm.formGroups}
              />
            )}
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};

export default CtaBanner;

const defaultModule = {
  acf_fc_layout: 'cta_banner',
  heading: 'Let\'s get started on your project',
  copy:
    'We create online experiences that inspire and motivate potential clients to interact and make contact.',
  cta: false,
  cta_text: 'Let\'s start something',
  cta_link: {
    post_title: 'Contact',
    post_name: 'contact',
  },
  cta_theme: 'tint-alpha',
  theme: 'brand',
};

const setForm: Partial<IFormBaseProps> = {
  formName: 'cta-form',
  successButtonTheme: 'tint-omega',
  buttons: [
    {
      type: 'submit',
      text: 'Let\'s start something',
      theme: 'tint-alpha',
      size: 'lg',
    },
  ],
  formGroups: [
    {
      fieldSet: {
        fields: [
          {
            type: 'input',
            columns: {
              colMd: 6,
            },
            input: {
              label: 'Name',
              name: 'full-name',
              type: 'text',
              placeholder: 'Enter your full name',
            },
          },
          {
            type: 'input',
            columns: {
              colMd: 6,
            },
            input: {
              label: 'Contact Number',
              name: 'contact-number',
              type: 'text',
              min: 0,
              max: 21,
              placeholder: 'Enter your contact number',
            },
          },
          {
            type: 'input',
            columns: {
              colMd: 6,
            },
            input: {
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'Enter your email address',
            },
          },
          {
            type: 'select',
            columns: {
              colMd: 6,
            },
            input: {
              label: 'Service Required',
              name: 'service-required',
              placeholder: 'Please select an option',
              type: 'select',
              options: [
                {
                  name: 'Website Development',
                  value: 'Website Development',
                },
                {
                  name: 'Graphic Design',
                  value: 'Graphic Design',
                },
                {
                  name: 'Branding',
                  value: 'Branding',
                },
                {
                  name: 'Hosting',
                  value: 'Hosting',
                },
                {
                  name: 'SEO',
                  value: 'SEO',
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
