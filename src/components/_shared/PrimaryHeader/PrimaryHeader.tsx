import React, { PureComponent } from 'react';

import styles from './PrimaryHeader.scss';

interface IPrimaryHeader {
  className?: string;
  isMenuOpen: boolean;
  setMenuState: (value: boolean) => void;
}

export class PrimaryHeader extends PureComponent<IPrimaryHeader> {

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

export default PrimaryHeader;
