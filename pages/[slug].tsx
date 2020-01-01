import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { AcfComponents } from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { clearPage, getPage } from '../src/store/rootActions';
import { IReduxState } from '../src/store/createStore';
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
  onGetPage: (slug: string) => void;
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

    return { slug };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug } = this.props;
    await onGetPage(slug);
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPage } = this.props;
    await onClearPage();
  }

  render() {
    const { page } = this.props;

    return (
      <PageHandler {...this.props}>
        {page && page.acf && <AcfComponents components={page.acf.components} page_theme={page.acf.page_theme} />}
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ page }: IReduxState) => ({
  page
});

const mapDispatchToProps = {
  onGetPage: (slug: string) => getPage(slug),
  onClearPage: () => clearPage()
};

export default connect<IStoreDefaultPageProps, IDispatchDefaultPageProps, IDefaultPageProps>(mapStateToProps, mapDispatchToProps)(DefaultPage);
