import React, { PureComponent, ReactNode } from 'react';

import { Meta } from '@jpp/components/_shared/Meta/Meta';
import { OffCanvas } from '@jpp/components/_shared/OffCanvas/OffCanvas';
import PrimaryFooter from '@jpp/components/_shared/PrimaryFooter';
import { PrimaryMain } from '@jpp/components/_shared/PrimaryMain/PrimaryMain';
import { PushWrapper } from '@jpp/components/_shared/PushWrapper/PushWrapper';
import { SimpleHeader } from '@jpp/components/_shared/SimpleHeader/SimpleHeader';
import { TFuncValueVoid } from '@jpp/typings/index';

import { APP_TITLE, SITE_DESCRIPTION } from '../../utils/constants';
import styles from './Basic.scss';

export interface IBasicProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export interface IStoreBasicProps {
  isMenuOpen: boolean;
  isLoading: boolean;
  simpleMenu: Core.IMenuItem[];
  primaryMenu: Core.IMenuItem[];
}

export interface IDispatchBasicProps {
  onSetMenuState: TFuncValueVoid<boolean>;
}

type TBasic = IBasicProps & IStoreBasicProps & IDispatchBasicProps;

export class Basic extends PureComponent<TBasic> {
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
      simpleMenu,
    } = this.props;

    return (
      <div className={styles.basicLayout}>
        {this.metaData}

        {isLoading && <></>}

        <OffCanvas
          isMenuOpen={isMenuOpen}
          setMenuState={onSetMenuState}
          menuItems={primaryMenu}
        />

        <PushWrapper isMenuOpen={isMenuOpen} setMenuState={onSetMenuState}>
          <SimpleHeader
            menuItems={simpleMenu}
            isMenuOpen={isMenuOpen}
            setMenuState={onSetMenuState}
          />

          <PrimaryMain>{children}</PrimaryMain>

          <PrimaryFooter />
        </PushWrapper>
      </div>
    );
  }
}
