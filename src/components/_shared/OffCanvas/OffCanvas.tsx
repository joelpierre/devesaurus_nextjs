import classNames from 'classnames';
import React, { PureComponent } from 'react';

import OffCanvasFooter from '@jpp/molecules/OffCanvasFooter/OffCanvasFooter';
import OffCanvasHeader from '@jpp/molecules/OffCanvasHeader/OffCanvasHeader';
import { PrimaryMenu } from '@jpp/organisms/PrimaryMenu/PrimaryMenu';
import { TFuncValueVoid } from '@jpp/typings/index';

import styles from './OffCanvas.scss';

interface IOffCanvasProps {
  className?: string;
  isMenuOpen: boolean;
  menuItems: Core.IMenuItem[];
  setMenuState: TFuncValueVoid<boolean>;
}

export class OffCanvas extends PureComponent<IOffCanvasProps> {
  handleSetMenuState = (event): void => {
    const { setMenuState, isMenuOpen } = this.props;
    setMenuState(!isMenuOpen);
    event.preventDefault();
  };

  render() {
    const { menuItems, isMenuOpen, className, setMenuState } = this.props;

    return (
      <aside
        className={classNames(styles.OffCanvas, className, {
          [styles.offCanvasIsActive]: isMenuOpen,
        })}
      >
        <div
          role="button"
          className={classNames(styles.offCanvasOverlayToggle, {
            [styles.offCanvasOverlayToggleIsActive]: isMenuOpen,
          })}
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

          <OffCanvasFooter className={styles.offCanvasFooter} />
        </div>
      </aside>
    );
  }
}
