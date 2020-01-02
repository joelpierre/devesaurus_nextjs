import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';
import Icons from '@jpp/atoms/Icon/Icon';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { SearchForm } from '@jpp/molecules/SearchForm/SearchForm';

import styles from './PrimaryHeader.scss';

export interface IPrimaryHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  title: string;
  setMenuState: (value: boolean) => void;
}

export interface IDispatchPrimaryHeaderProps {
  onWordSearch: (searchTerm: string) => void;
}

type TPrimaryHeader = IPrimaryHeaderProps & IDispatchPrimaryHeaderProps;

export const PrimaryHeader: FunctionComponent<TPrimaryHeader> = (
  {
    isMenuOpen,
    setMenuState,
    onWordSearch,
    title
  }
) => {
  const [state, setState] = useState({ searchInput: '' });

  const handleSetMenuState = (): void => {
    setMenuState(!isMenuOpen);
  };

  const handleSearchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = event;
    setState({ searchInput: value });
  };

  const handleSearchSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    const { searchInput } = state;

    if (!searchInput) {
      return;
    }

    onWordSearch(searchInput);
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

      <div className={styles['primary-header__search']}>
        <SearchForm
          className={styles['primary-header__search-form']}
          onSubmit={handleSearchSubmit}
          inputOnChange={handleSearchInputOnChange}
        />
      </div>
    </header>
  );
};
