import React, { PureComponent } from 'react';

import { Meta } from '@jpp/components/_shared/Meta/Meta';
import OffCanvas from '@jpp/components/_shared/OffCanvas/';
import PrimaryFooter from '@jpp/components/_shared/PrimaryFooter';
import PrimaryHeader from '@jpp/components/_shared/PrimaryHeader';
import { PrimaryMain } from '@jpp/components/_shared/PrimaryMain/PrimaryMain';
import { PushWrapper } from '@jpp/components/_shared/PushWrapper/PushWrapper';
import { TFuncValueVoid } from '@jpp/typings/index';

import { APP_TITLE, SITE_DESCRIPTION } from '../../utils/constants';
import styles from './Core.scss';

export interface ICoreProps {
  title: string;
  description: string;
}

export interface IStoreCoreProps {
  isMenuOpen: boolean;
  isLoading: boolean;
  primaryMenu: Core.IMenuItem[];
}

export interface IDispatchCoreProps {
  onSetMenuState: TFuncValueVoid<boolean>;
}

type TCore = ICoreProps & IStoreCoreProps & IDispatchCoreProps;

export class Core extends PureComponent<TCore> {
  get metaData() {
    const { title = APP_TITLE, description = SITE_DESCRIPTION } = this.props;

    return <Meta title={title} description={description} />;
  }

  render() {
    const {
      children,
      isMenuOpen,
      isLoading,
      onSetMenuState,
      primaryMenu,
      title,
    } = this.props;

    return (
      <div className={styles.coreLayout}>
        {this.metaData}

        {isLoading && <></>}

        <OffCanvas
          isMenuOpen={isMenuOpen}
          setMenuState={onSetMenuState}
          menuItems={primaryMenu}
        />

        <PushWrapper isMenuOpen={isMenuOpen} setMenuState={onSetMenuState}>
          <PrimaryHeader
            isMenuOpen={isMenuOpen}
            setMenuState={onSetMenuState}
            title={title}
          />

          <PrimaryMain>{children}</PrimaryMain>

          <PrimaryFooter />
        </PushWrapper>
      </div>
    );
  }
}
