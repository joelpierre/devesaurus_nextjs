import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';
import { AcfComponents } from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { ELayout } from '@jpp/typings/enums';

import { clearPage, getPage } from '../src/store/page/actions';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';
import { IReduxState } from '../src/store/createStore';
import { IPageStoreState } from '../src/store/page/reducer';

class HomePage extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getPage('home'));
    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;

      return { error: page.error };
    }

    return { slug: 'home' };
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
      <PageHandler layout={ELayout.Basic} {...this.props}>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
