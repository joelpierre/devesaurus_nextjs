import { TFuncBooleanVoid } from '@jpp/typings/index';
import React, { FunctionComponent } from 'react';
import { SimpleMenu } from '@jpp/organisms/SimpleMenu/SimpleMenu';
import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';
import { handleSetMenuState } from '../../../store/core/utils';

import styles from './SimpleHeader.scss';

interface ISimpleHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: TFuncBooleanVoid;
  menuItems: Core.IMenuItem[];
}

export const SimpleHeader: FunctionComponent<ISimpleHeaderProps> = (
  {
    menuItems,
    isMenuOpen,
    setMenuState
  }
) => {

  return (
    <header className={styles.simpleHeader}>
      <Hamburger
        theme={'brand'}
        onClick={() => handleSetMenuState(setMenuState, isMenuOpen)}
        descriptor="Menu"
      />

      <SimpleMenu menuItems={menuItems} />
    </header>
  );
};
