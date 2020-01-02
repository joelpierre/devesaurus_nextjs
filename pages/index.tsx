import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { AcfComponents } from '@jpp/components/_shared/AcfComponents/AcfComponents';
import { ELayout } from '@jpp/typings/enums';

import { clearPage, getPage } from '../src/store/page/actions';
import { PageHandler } from '../src/utils/PageHandler/PageHandler';
import { IPageStoreState } from '../src/store/page/reducer';

interface IHomePageProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreHomePageProps {
  page: IPageStoreState;
}

interface IDispatchHomePageProps {
  onClearPage: () => void;
}

type THomePage = IHomePageProps & IStoreHomePageProps & IDispatchHomePageProps;

class HomePage extends PureComponent<THomePage> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getPage('home'));
    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;

      return { error: page.error };
    }

    return { slug: 'home', page };
  }

  componentWillUnmount(): void {
    const { onClearPage } = this.props;
    onClearPage();
  }

  render() {
    const { page: { acf } } = this.props;

    return (
      <PageHandler layout={ELayout.Basic} {...this.props}>
        {acf && <AcfComponents components={acf.components} page_theme={acf.page_theme} />}
      </PageHandler>
    );
  }
}

const mapDispatchToProps = {
  onClearPage: () => clearPage()
};

export default connect<IStoreHomePageProps, IDispatchHomePageProps, IHomePageProps>(
  null,
  mapDispatchToProps
)(HomePage);
