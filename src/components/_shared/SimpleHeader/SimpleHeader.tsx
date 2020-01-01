import React, { PureComponent } from 'react';
import { SimpleMenu } from '@jpp/organisms/SimpleMenu/SimpleMenu';

import styles from './SimpleHeader.scss';
import Hamburger from '@jpp/atoms/Hamburger/Hamburger';

interface ISimpleHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
  menuItems: Core.IMenuItem[];
}

export class SimpleHeader extends PureComponent<ISimpleHeaderProps> {
  handleSetMenuState = (): void => {
    const { isMenuOpen, setMenuState } = this.props;
    setMenuState(!isMenuOpen);
  };

  render() {
    const { menuItems } = this.props;

    return (
      <header className={styles.simpleHeader}>
        <Hamburger
          theme={'brand'}
          onClick={this.handleSetMenuState}
          descriptor="Menu"
        />

        <SimpleMenu menuItems={menuItems} />
      </header>
    );
  }
}

export default SimpleHeader;
