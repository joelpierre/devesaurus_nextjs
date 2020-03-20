import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AcfComponents from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { ELayout, EPageType } from '@jpp/typings/enums';
import {
  TFuncVoid,
  TReduxError,
  TTemplateInitialProps,
} from '@jpp/typings/index';

import { IReduxState } from '../src/store/createStore';
import { clearPage, getPage } from '../src/store/page/actions';
import { IPageStoreState } from '../src/store/page/reducer';
import { getPageFromState } from '../src/store/page/selectors';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';

interface IHomePageProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreHomePageProps {
  page: IPageStoreState;
}

interface IDispatchHomePageProps {
  onClearPage: TFuncVoid;
}

type THomePage = IHomePageProps & IStoreHomePageProps & IDispatchHomePageProps;

class HomePage extends PureComponent<THomePage> {
  static async getInitialProps({
    store,
    isServer,
    res,
  }: TTemplateInitialProps) {
    await store.dispatch(getPage(EPageType.Home) as any);
    const state: IReduxState = store.getState();
    const page: IPageStoreState = getPageFromState(state);

    if (page.error && res) {
      res.statusCode = page.error.code ? page.error.code : (404 as any);

      return { error: page.error };
    }

    return { slug: EPageType.Home, page };
  }

  componentWillUnmount(): void {
    const { onClearPage } = this.props;
    onClearPage();
  }

  render() {
    const { page } = this.props;

    return (
      <PageHandler
        title={
          (page && page.title) || (page.yoast && page.yoast.yoast_wpseo_title)
        }
        description={page && page.yoast && page.yoast.yoast_wpseo_metadesc}
        layout={ELayout.Basic}
        {...this.props}
      >
        {page && page.acf && (
          <AcfComponents
            components={page.acf.components}
            page_theme={page.acf.page_theme}
          />
        )}
      </PageHandler>
    );
  }
}

const mapDispatchToProps: IDispatchHomePageProps = {
  onClearPage: clearPage,
};

export default connect<
  IStoreHomePageProps,
  IDispatchHomePageProps,
  IHomePageProps
>(
  null,
  mapDispatchToProps
)(HomePage);
