import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { AcfComponents } from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

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
  onClearPage: () => void;
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

    return { slug, page };
  }

  componentWillUnmount(): void {
    const { onClearPage } = this.props;
    onClearPage();
  }

  render() {
    const { page: { acf } } = this.props;

    return (
      <PageHandler {...this.props}>
        {acf && <AcfComponents components={acf.components} page_theme={acf.page_theme} />}
      </PageHandler>
    );
  }
}

const mapDispatchToProps = {
  onClearPage: () => clearPage()
};

export default connect<IStoreDefaultPageProps, IDispatchDefaultPageProps, IDefaultPageProps>(null, mapDispatchToProps)(DefaultPage);
