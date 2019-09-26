import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';

import ErrorPage from './_error';
import { clearPage, getPage } from '../src/store/rootActions';
import { IReduxState } from '../src/store/createStore';
import { IPageStoreState } from '../src/store/page/reducer';
import ConfigProvider from '../src/services/configProvider';
import Meta from '@jpp/shared/Meta/Meta';

export class PageTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer, res }: TTemplateInitialProps) {

    if (slug) {
      await store.dispatch(getPage(slug));
    }

    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;

      return {
        error: page.error
      };
    }

    return {
      isServer,
      slug
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug, page } = this.props;

    if (Object.keys(page).length === 0) {
      await onGetPage(slug);
    }
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPage } = this.props;
    await onClearPage();
  }

  render() {
    const { page } = this.props;
    const { yoast = {} } = page;
    const title = yoast.yoast_wpseo_title || page.title || ConfigProvider.getValue('APP_TITLE');
    const description = yoast.yoast_wpseo_metadesc || ConfigProvider.getValue('SITE_DESCRIPTION');

    console.log(yoast.yoast_wpseo_title);
    console.log(page.title);
    console.log(ConfigProvider.getValue('APP_TITLE'));

    if (this.props.error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        <Meta title={title} description={description}/>
        This is the {this.props.page.title} page. We are {this.props.isServer ? 'SSR' : 'CSR'}
        <br/>
        <br/>
        <Link href="/devegram/[slug]" as="/devegram/hello-world">
          <a>
            Go to post example
          </a>
        </Link>
        <br/><br/>
        <Link href="/devinitions/[slug]" as="/devinitions/visual-design">
          <a>
            Go to word example
          </a>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
