import React, { PureComponent } from 'react';

interface IPrimaryMenu {
  className?: string;
  isMenuOpen: boolean;
  menuItems: Core.IMenuItem[];
  setMenuState: () => void;
}

export class PrimaryMenu extends PureComponent<IPrimaryMenu> {
  render() {
    return (
      <nav>
        Primary Menu
      </nav>
    );
  }
}

export default PrimaryMenu;
