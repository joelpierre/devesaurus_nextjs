import React, { PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import Meta from '@jpp/components/_shared/Meta/Meta';
import PushWrapper from '@jpp/components/_shared/PushWrapper/PushWrapper';
import PrimaryMain from '@jpp/components/_shared/PrimaryMain/PrimaryMain';
import PrimaryFooter from '@jpp/components/_shared/PrimaryFooter/PrimaryFooter';
import OffCanvas from '@jpp/components/_shared/OffCanvas/OffCanvas';
import SimpleHeader from '@jpp/components/_shared/SimpleHeader/SimpleHeader';

import ConfigProvider from '../../services/configProvider';
import { IReduxState } from '../../store/createStore';
import { setMenuState } from '../../store/rootActions';

interface IBasicLayoutProps {
  title: string;
  description: string;
  isMenuOpen: boolean;
  isLoading: boolean;
  onSetMenuState: (value: boolean) => AnyAction;
  primaryMenu: Core.IMenuItem[];
  simpleMenu: Core.IMenuItem[];
  children: ReactNode;
}

export class BasicLayout extends PureComponent<IBasicLayoutProps> {

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

const mapStateToProps = (
  {
    core: {
      isMenuOpen,
      isLoading,
      primaryMenu,
      simpleMenu
    }
  }: IReduxState) => (
  {
    isMenuOpen,
    isLoading,
    primaryMenu,
    simpleMenu
  }
);

const mapDispatchToProps = {
  onSetMenuState: (value: boolean) => setMenuState(value)
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
