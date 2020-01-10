import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Icons from '@jpp/atoms/Icon/Icon';
import SearchForm from '@jpp/molecules/SearchForm';
import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';
import { Heading } from '@jpp/components/_shared/Heading/Heading';

import styles from './PrimaryHeader.scss';

export interface IPrimaryHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  title: string;
  setMenuState: (value: boolean) => void;
}

type TPrimaryHeader = IPrimaryHeaderProps;

export const PrimaryHeader: FunctionComponent<TPrimaryHeader> = (
  {
    isMenuOpen,
    setMenuState,
    title
  }
) => {

  const handleSetMenuState = (): void => {
    setMenuState(!isMenuOpen);
  };

  return (
    <header className={styles.primaryHeader}>
      <Hamburger onClick={handleSetMenuState} />

      <Link href="/" as="/">
        <a className={classNames(styles.primaryHeaderBrandLink)}>
          <Icons.LogoSymbolDark className={styles.primaryHeaderBrand} />
        </a>
      </Link>

      <Heading className={styles.primaryHeaderHeading} priority={1} innerHTML={true}>
        {title}
      </Heading>

      <section className={styles['primary-header__search']}>
        <SearchForm
          className={styles['primary-header__search-form']}
        />
      </section>
    </header>
  );
};
