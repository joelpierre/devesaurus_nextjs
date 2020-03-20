import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';
import Icons from '@jpp/atoms/Icon/Icon';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import SearchForm from '@jpp/molecules/SearchForm';
import { TFuncValueVoid } from '@jpp/typings/index';

import { handleSetMenuState } from '../../../store/core/utils';
import styles from './PrimaryHeader.scss';

export interface IPrimaryHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  title: string;
  setMenuState: TFuncValueVoid<boolean>;
}

type TPrimaryHeader = IPrimaryHeaderProps;

export const PrimaryHeader: FunctionComponent<TPrimaryHeader> = ({
  isMenuOpen,
  setMenuState,
  title,
}) => {
  return (
    <header className={styles.PrimaryHeader}>
      <Hamburger
        className={styles.PrimaryHeader__hamburger}
        onClick={() => handleSetMenuState(setMenuState, isMenuOpen)}
      />

      <Link href="/" as="/">
        <a className={classNames(styles['PrimaryHeader__brand-link'])}>
          <Icons.LogoSymbolDark className={styles.PrimaryHeader__brand} />
        </a>
      </Link>

      <Heading
        className={styles.PrimaryHeader__heading}
        priority={1}
        innerHTML={true}
      >
        {title}
      </Heading>

      <section className={styles.PrimaryHeader__search}>
        <SearchForm className={styles['PrimaryHeader__search-form']} />
      </section>
    </header>
  );
};
