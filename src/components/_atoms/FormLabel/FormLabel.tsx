import { ESize } from '@jpp/typings/enums';
import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './FormLabel.scss';

interface IFormLabelProps {
  size?: ESize;
  text: string;
  name: string;
}

export const FormLabel: FunctionComponent<IFormLabelProps> = ({ text, name, size = ESize.Md }) => {
  return (
    <label
      id={name}
      data-test="component-label"
      htmlFor={name}
      aria-label={`Label for ${name}`}
      className={classNames(styles.form__label, styles[`form__label--${size}`])}
    >
      {text}
    </label>
  );
};
