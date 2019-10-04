import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { AnyAction } from 'redux';
import PrimaryMenu from '@jpp/organisms/PrimaryMenu/PrimaryMenu';
import OffCanvasHeader from '@jpp/molecules/OffCanvasHeader/OffCanvasHeader';
import OffCanvasFooter from '@jpp/molecules/OffCanvasFooter/OffCanvasFooter';

import styles from './OffCanvas.scss';

interface IOffCanvas {
  className?: string;
  isMenuOpen: boolean;
  menuItems: Core.IMenuItem[];
  setMenuState: (value: boolean) => AnyAction;
}

export class OffCanvas extends PureComponent<IOffCanvas> {

  handleSetMenuState = (event): void => {
    const { setMenuState, isMenuOpen } = this.props;
    setMenuState(!isMenuOpen);
    event.preventDefault();
  };

  render() {
    const { menuItems, isMenuOpen, className, setMenuState } = this.props;

    return (
      <aside className={classNames(
        styles.offCanvas,
        className,
        {
          [styles.offCanvasIsActive]: isMenuOpen
        }
      )}>

        <div
          role="button"
          className={
            classNames(styles.offCanvasOverlayToggle, {
              [styles.offCanvasOverlayToggleIsActive]: isMenuOpen
            })
          }
          onClick={this.handleSetMenuState}
        />

        <div className={styles.offCanvasInner}>
          <OffCanvasHeader
            className={styles.offCanvasHeader}
            isMenuOpen={isMenuOpen}
            setMenuState={setMenuState}
          />

          <PrimaryMenu
            className={styles.offCanvasMenu}
            menuItems={menuItems}
            isMenuOpen={isMenuOpen}
            setMenuState={this.handleSetMenuState}
          />

          <OffCanvasFooter className={styles.offCanvasFooter}/>
        </div>

      </aside>
    );
  }
}

export default OffCanvas;
