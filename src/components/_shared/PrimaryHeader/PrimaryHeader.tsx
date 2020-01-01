import React, { PureComponent } from 'react';

import styles from './PrimaryHeader.scss';

interface IPrimaryHeaderProps {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
}

export class PrimaryHeader extends PureComponent<IPrimaryHeaderProps> {

  handleSetMenuState = (): void => {
    const { isMenuOpen, setMenuState } = this.props;
    setMenuState(!isMenuOpen);
  };

  render() {
    return (
      <header className={styles.primaryHeader}>
        <div>
          Logo here
        </div>

        <button onClick={this.handleSetMenuState}>
          Toggle menu
        </button>
      </header>
    );
  }
}
