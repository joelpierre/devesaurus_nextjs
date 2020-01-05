import classNames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputField } from '@jpp/atoms/InputField/InputField';
import { Button } from '@jpp/molecules/Buttons/Button';
import { ETheme } from '@jpp/typings/enums';

import styles from './SearchForm.scss';

export interface ISearchFormProps {
  className?: string;
  word?: boolean;
  post?: boolean;
}

export interface IDispatchSearchFormProps {
  onWordSearch: (searchTerm: string) => void;
  onPostSearch: (searchTerm: string) => void;
}

type TSearchForm = ISearchFormProps & IDispatchSearchFormProps;

export const SearchForm: FunctionComponent<TSearchForm> = (
  {
    className,
    onWordSearch,
    onPostSearch,
    post: searchPosts = false,
    word: searchWords = true
  }
) => {
  const [state, setState] = useState({ searchInput: '' });

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value } } = event;
    setState({ searchInput: value });
  };

  const handleOnSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    const { searchInput } = state;

    if (!searchInput || !searchPosts || !searchWords) {
      return;
    }

    if (searchWords) {
      return onWordSearch(searchInput);
    }

    if (searchPosts) {
      return onPostSearch(searchInput);
    }
  };

  return (
    <form
      className={classNames(styles.SearchForm, className)}
      onSubmit={handleOnSubmit}
    >
      <InputField
        className={styles.SearchForm__input}
        name="hero-search"
        type="text"
        placeholder="Enter a search term. e.g. HTML"
        onChange={handleInputOnChange}
      />

      <Button
        behaviour="action"
        theme={ETheme.Brand}
        type="submit"
        className={styles.SearchForm__btn}
      >
        <FontAwesomeIcon
          icon={['fas', 'search']}
          className={styles.SearchForm__icon}
        />
      </Button>
    </form>
  );
};
