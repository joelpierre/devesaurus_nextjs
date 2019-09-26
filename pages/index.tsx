import React, { PureComponent } from 'react';
import { TTemplateInitialProps } from '@jpp/typings/index';
import { clearPage, getPage } from '../src/store/page/actions';
import { IReduxState } from '../src/store/createStore';
import { connect } from 'react-redux';
import Meta from '@jpp/shared/Meta/Meta';

import ConfigProvider from '../src/services/configProvider';
import ErrorPage from './_error';
import { IPageStoreState } from '../src/store/page/reducer';

export class HomePage extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getPage('home'));

    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;

      return {
        error: page.error
      };
    }

    return {
      isServer,
      slug: 'home'
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug, page } = this.props;

    if (Object.keys(page).length === 0) {
      await onGetPage(slug);
    }
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPage, page } = this.props;

    if (Object.keys(page).length === 0) {
      await onClearPage();
    }
  }

  render() {
    const { page, page: { yoast = {} } } = this.props;
    const title = yoast.yoast_wpseo_title || page.title || ConfigProvider.getValue('APP_TITLE');
    const description = yoast.yoast_wpseo_metadesc || ConfigProvider.getValue('SITE_DESCRIPTION');

    if (this.props.error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        <Meta title={title} description={description}/>

        Joel is awesome This is the homepage it is static at the moment... Should we make it dynamic? hmm... maybe.
      </>
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
