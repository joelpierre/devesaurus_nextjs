import React, { FunctionComponent } from 'react';
import { SimpleMenu } from '@jpp/organisms/SimpleMenu/SimpleMenu';
import { Hamburger } from '@jpp/atoms/Hamburger/Hamburger';

import styles from './SimpleHeader.scss';

interface ISimpleHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
  menuItems: Core.IMenuItem[];
}

export const SimpleHeader: FunctionComponent<ISimpleHeaderProps> = (
  {
    menuItems,
    isMenuOpen,
    setMenuState
  }
) => {
  const handleSetMenuState = (): void => {
    setMenuState(!isMenuOpen);
  };

  return (
    <header className={styles.simpleHeader}>
      <Hamburger
        theme={'brand'}
        onClick={handleSetMenuState}
        descriptor="Menu"
      />

      <SimpleMenu menuItems={menuItems} />
    </header>
  );
};
