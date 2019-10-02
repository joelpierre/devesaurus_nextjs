import React, { PureComponent } from 'react';

interface ISimpleMenu {
  className?: string;
  menuItems: Core.IMenuItem[];
}

export class SimpleMenu extends PureComponent<ISimpleMenu> {
  render() {
    return (
      <nav>
        Simple Menu
      </nav>
    );
  }
}

export default SimpleMenu;
