import React from 'react';
import classNames from 'classnames';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Sponsor } from '@jpp/molecules/Sponsor/Sponsor';
import { Heading } from '@jpp/components/_shared/Heading/Heading';

import styles from './Sponsors.scss';

export interface IStoreSponsorsProps {
  sponsors: Core.ISponsor[];
}

export type TSponsors = Core.IAcfComponent & IStoreSponsorsProps;

export const Sponsors: React.FunctionComponent<TSponsors> = (
  {
    className,
    theme,
    page_theme,
    sponsors
  }
) => {
  const sponsorsLength = sponsors.length;

  if (sponsorsLength === 0) {
    return null;
  }

  return (
    <Section
      className={
        classNames(styles.Sponsors, className, `theme--${theme || page_theme}`)
      }
    >
      <Container fluid={true}>
        <Row>
          <Flex colLg={3}>
            <Heading priority={2} className={styles.Sponsors__heading}>
              Proudly sponsored by:
            </Heading>
          </Flex>

          <Flex colLg={9} className={classNames(styles['Sponsors__sponsor-wrapper'])}>
            {sponsors.map((sponsor, index) => (
              <Sponsor
                key={index}
                className={styles.Sponsors__sponsor}
                sponsor={sponsor}
              />
            ))}
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};
