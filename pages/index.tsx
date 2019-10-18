import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';
import CoreLayout from '@jpp/layouts/CoreLayout/CoreLayout';
import { AcfComponents } from '@jpp/components/_shared/AcfComponents/AcfComponents';

import { clearPage, getPage } from '../src/store/page/actions';
import { IReduxState } from '../src/store/createStore';
import { IPageStoreState } from '../src/store/page/reducer';

import ErrorPage from './_error';

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
    const { page, page: { yoast = {}, acf = {} }, error } = this.props;
    const { page_theme, components } = acf;
    const title = yoast.yoast_wpseo_title || page.title;
    const description = yoast.yoast_wpseo_metadesc;

    if (error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        <CoreLayout
          title={title}
          description={description}
          useSimpleHeader={true}
        >
          {components && components.map(
            (component: Core.IAcfComponent, index: number) => (
              <AcfComponents component={component} page_theme={page_theme} key={index}/>
            )
          )}
        </CoreLayout>
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
