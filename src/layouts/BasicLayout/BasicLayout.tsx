import React, { PureComponent, ReactNode } from 'react';

import Meta from '@jpp/components/_shared/Meta/Meta';
import PushWrapper from '@jpp/components/_shared/PushWrapper/PushWrapper';
import PrimaryMain from '@jpp/components/_shared/PrimaryMain/PrimaryMain';
import PrimaryFooter from '@jpp/components/_shared/PrimaryFooter/PrimaryFooter';
import OffCanvas from '@jpp/components/_shared/OffCanvas/OffCanvas';
import SimpleHeader from '@jpp/components/_shared/SimpleHeader/SimpleHeader';

import { APP_TITLE, SITE_DESCRIPTION } from '../../utils/constants';

export interface IBasicLayoutProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export interface IStoreBasicLayoutProps {
  isMenuOpen: boolean;
  isLoading: boolean;
  simpleMenu: Core.IMenuItem[];
  primaryMenu: Core.IMenuItem[];
}

export interface IDispatchBasicLayoutProps {
  onSetMenuState: (value: boolean) => void;
}

type TBasicLayoutProps = IBasicLayoutProps & IStoreBasicLayoutProps & IDispatchBasicLayoutProps;

export class BasicLayout extends PureComponent<TBasicLayoutProps> {

  getMeta = () => {
    const {
      title = APP_TITLE,
      description = SITE_DESCRIPTION
    } = this.props;

    return <Meta title={title} description={description}/>;
  };

  render() {
    const {
      children,
      isMenuOpen,
      isLoading,
      onSetMenuState,
      primaryMenu,
      simpleMenu
    } = this.props;

    if (isLoading) {
      return (
        <>
          {this.getMeta()}

          The site is loading
        </>
      );
    }

    return (
      <>
        {this.getMeta()}

        <OffCanvas isMenuOpen={isMenuOpen} setMenuState={onSetMenuState} menuItems={primaryMenu}/>

        <PushWrapper isMenuOpen={isMenuOpen} setMenuState={onSetMenuState}>
          <SimpleHeader
            menuItems={simpleMenu}
            isMenuOpen={isMenuOpen}
            setMenuState={onSetMenuState}
          />

          <PrimaryMain>
            {children}
          </PrimaryMain>

          <PrimaryFooter/>
        </PushWrapper>
      </>
    );
  }
}

export default BasicLayout;
