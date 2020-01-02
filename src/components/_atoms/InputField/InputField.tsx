import { ESize } from '@jpp/typings/enums';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { FormLabel } from '../FormLabel/FormLabel';
import styles from './InputField.scss';

interface IInputFieldProps {
  className?: string;
  label?: string;
  type?: Core.TInputType;
  size?: ESize;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const InputField: FunctionComponent<IInputFieldProps> = (
  {
    className,
    name,
    label,
    type,
    placeholder,
    disabled,
    min,
    max,
    size,
    onChange,
    ...props
  }
) => {
  let inputField;

  const defaultProps = {
    className: classNames([
      styles['input-field'],
      {
        [styles['input-field--sm']]: size === ESize.Sm,
        [styles['input-field--md']]: size === ESize.Md,
        [styles['input-field--lg']]: size === ESize.Lg
      },
      className
    ]),
    type,
    name,
    placeholder,
    disabled,
    onChange,
    ['aria-label']: `Input for ${name}`
  };

  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
    default:
      inputField = (
        <input
          {...defaultProps}
          {...props}
        />
      );
      break;
    case 'number':
      inputField = (
        <input
          {...defaultProps}
          minLength={min}
          maxLength={max}
          {...props}
        />
      );
      break;
  }
  return (
    <>
      {label && <FormLabel text={label} name={name} />}
      {inputField}
    </>
  );
};
