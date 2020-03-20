import React, { FunctionComponent } from 'react';

import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';
import { SimpleMenu } from '@jpp/organisms/SimpleMenu/SimpleMenu';
import { TFuncValueVoid } from '@jpp/typings/index';

import { handleSetMenuState } from '../../../store/core/utils';
import styles from './SimpleHeader.scss';

interface ISimpleHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: TFuncValueVoid<boolean>;
  menuItems: Core.IMenuItem[];
}

export const SimpleHeader: FunctionComponent<ISimpleHeaderProps> = ({
  menuItems,
  isMenuOpen,
  setMenuState,
}) => {
  const handleOnClick = () => {
    handleSetMenuState(setMenuState, isMenuOpen);
  };

  return (
    <header className={styles.simpleHeader}>
      <Hamburger theme={'brand'} onClick={handleOnClick} descriptor="Menu" />

      <SimpleMenu menuItems={menuItems} />
    </header>
  );
};
