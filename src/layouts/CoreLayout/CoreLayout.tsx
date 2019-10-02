import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import Meta from '@jpp/shared/Meta/Meta';
import PushWrapper from '@jpp/shared/PushWrapper/PushWrapper';
import PrimaryMain from '@jpp/shared/PrimaryMain/PrimaryMain';
import PrimaryFooter from '@jpp/shared/PrimaryFooter/PrimaryFooter';
import PrimaryHeader from '@jpp/shared/PrimaryHeader/PrimaryHeader';
import OffCanvas from '@jpp/shared/OffCanvas/OffCanvas';

import ConfigProvider from '../../services/configProvider';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

interface ICoreLayout {
  title: string;
  description: string;
  isMenuOpen: boolean;
  isLoading: boolean;
  onSetMenuState: (value: boolean) => AnyAction;
  primaryMenu: Core.IMenuItem[];
  simpleMenu: Core.IMenuItem[];
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
}

export class CoreLayout extends PureComponent<ICoreLayout> {

  getMeta = () => {
    const {
      title = ConfigProvider.getValue('APP_TITLE'),
      description = ConfigProvider.getValue('SITE_DESCRIPTION')
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
      simpleMenu,
      termsMenu
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
          <PrimaryHeader menuItems={simpleMenu} isMenuOpen={isMenuOpen} setMenuState={onSetMenuState}/>

          <PrimaryMain>
            {children}
          </PrimaryMain>

          <PrimaryFooter footerMenu={termsMenu} termsMenu={termsMenu}/>
        </PushWrapper>
      </>
    );
  }
}

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu,
      termsMenu,
      footerMenu,
      simpleMenu
    }
  }: IReduxState) => (
  {
    isMenuOpen,
    isLoading,
    primaryMenu,
    termsMenu,
    footerMenu,
    simpleMenu
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
