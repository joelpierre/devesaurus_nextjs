import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AcfComponents from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { clearPage, getPage } from '../src/store/rootActions';
import { IPageStoreState } from '../src/store/page/reducer';

interface IDefaultPageProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreDefaultPageProps {
  page: IPageStoreState;
}

interface IDispatchDefaultPageProps {
  onClearPage: TFuncVoid;
}

export type TDefaultPage = IDefaultPageProps & IStoreDefaultPageProps & IDispatchDefaultPageProps;

class DefaultPage extends PureComponent<TDefaultPage> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getPage(slug));
    }

    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;
      return { error: page.error };
    }

    // Because /home is a page in Wordpress we have to ensure that
    // users cannot navigate to this page
    if (slug === 'home') {
      res.writeHead(301, { Location: '/' });
      res.end();
    }

    return { slug, page };
  }

  componentWillUnmount(): void {
    const { onClearPage } = this.props;
    onClearPage();
  }

  render() {
    const { page } = this.props;

    return (
      <PageHandler
        title={page && page.title || page && page.yoast && page.yoast.yoast_wpseo_title}
        description={page && page.yoast && page.yoast.yoast_wpseo_metadesc}
        {...this.props}
      >
        {page && page.acf && <AcfComponents components={page.acf.components} page_theme={page.acf.page_theme} />}
      </PageHandler>
    );
  }
}

const mapDispatchToProps = {
  onClearPage: () => clearPage()
};

export default connect<IStoreDefaultPageProps, IDispatchDefaultPageProps, IDefaultPageProps>(null, mapDispatchToProps)(DefaultPage);
