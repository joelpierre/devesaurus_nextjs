import React, { PureComponent } from 'react';
import SimpleMenu from '@jpp/organisms/SimpleMenu/SimpleMenu';

import styles from './PrimaryHeader.module.scss';
import { AnyAction } from 'redux';

interface IPrimaryHeader {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => AnyAction;
  menuItems: Core.IMenuItem[];
}

export class PrimaryHeader extends PureComponent<IPrimaryHeader> {

  handleSetMenuState = (): void => {
    const { isMenuOpen, setMenuState } = this.props;
    setMenuState(!isMenuOpen);
  };

  render() {
    const { menuItems } = this.props;

    return (
      <header className={styles.primaryHeader}>
        <div>
          Logo here
        </div>

        <SimpleMenu menuItems={menuItems}/>

        <button onClick={this.handleSetMenuState}>
          Toggle menu
        </button>
      </header>
    );
  }
}

export default PrimaryHeader;
