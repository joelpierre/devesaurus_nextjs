import React, { PureComponent, ReactNode } from 'react';

import Meta from '@jpp/components/_shared/Meta/Meta';
import PushWrapper from '@jpp/components/_shared/PushWrapper/PushWrapper';
import PrimaryMain from '@jpp/components/_shared/PrimaryMain/PrimaryMain';
import PrimaryHeader from '@jpp/components/_shared/PrimaryHeader/PrimaryHeader';
import OffCanvas from '@jpp/components/_shared/OffCanvas/OffCanvas';
import FooterContainer from '../../containers/FooterContainer';

import { APP_TITLE, SITE_DESCRIPTION } from '../../utils/constants';

export interface ICoreLayoutProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export interface IStoreCoreLayoutProps {
  isMenuOpen: boolean;
  isLoading: boolean;
  primaryMenu: Core.IMenuItem[];
}

export interface IDispatchCoreLayoutProps {
  onSetMenuState: (value: boolean) => void;
}

type TCoreLayoutProps = ICoreLayoutProps & IStoreCoreLayoutProps & IDispatchCoreLayoutProps;

export class CoreLayout extends PureComponent<TCoreLayoutProps> {
  getMeta = () => {
    const {
      title = APP_TITLE,
      description = SITE_DESCRIPTION
    } = this.props;

    return <Meta title={title} description={description} />;
  };

  render() {
    const {
      children,
      isMenuOpen,
      isLoading,
      onSetMenuState,
      primaryMenu
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

        <OffCanvas isMenuOpen={isMenuOpen} setMenuState={onSetMenuState} menuItems={primaryMenu} />

        <PushWrapper isMenuOpen={isMenuOpen} setMenuState={onSetMenuState}>
          <PrimaryHeader
            isMenuOpen={isMenuOpen}
            setMenuState={onSetMenuState}
          />

          <PrimaryMain>
            {children}
          </PrimaryMain>

          <FooterContainer />
        </PushWrapper>
      </>
    );
  }
}

export default CoreLayout;
