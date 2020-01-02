import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputField } from '@jpp/atoms/InputField/InputField';
import { Button } from '@jpp/molecules/Buttons/Button';
import { ETheme } from '@jpp/typings/enums';

import styles from './SearchForm.scss';

interface ISearchFormProps {
  onSubmit: (event: React.FormEvent<EventTarget>) => void;
  className?: string;
  inputOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm: FunctionComponent<ISearchFormProps> = (
  {
    onSubmit,
    className,
    inputOnChange
  }
) => {
  return (
    <form
      className={classNames(styles.SearchForm, className)}
      onSubmit={onSubmit}
    >
      <InputField
        className={styles['SearchForm__input']}
        name="hero-search"
        type="text"
        placeholder="Enter a search term. e.g. HTML"
        onChange={inputOnChange}
      />

      <Button
        behaviour="action"
        theme={ETheme.Brand}
        type="submit"
        className={styles['SearchForm__btn']}
      >
        <FontAwesomeIcon
          icon={['fas', 'search']}
          className={styles['SearchForm__icon']}
        />
      </Button>
    </form>
  );
};
