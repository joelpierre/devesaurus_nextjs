import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import ErrorPage from './_error';
import { clearPage, getPage } from '../src/store/rootActions';
import { IReduxState } from '../src/store/createStore';
import { IPageStoreState } from '../src/store/page/reducer';
import { APP_TITLE, SITE_DESCRIPTION } from '../src/utils/constants';
import CoreLayoutContainer from '../src/containers/CoreLayoutContainer';

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

type TDefaultPageProps = IDefaultPageProps & IStoreDefaultPageProps & IDispatchDefaultPageProps;

export class DefaultPage extends PureComponent<TDefaultPageProps> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
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
    const { page, error } = this.props;
    const { yoast } = page;
    const title = yoast && yoast.yoast_wpseo_title || page.title || APP_TITLE;
    const description = yoast && yoast.yoast_wpseo_metadesc || SITE_DESCRIPTION;

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayoutContainer title={title} description={description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda ea, natus, nesciunt obcaecati
        perspiciatis praesentium provident quia saepe tempore vero? Commodi est expedita ipsum iure nisi nostrum
        voluptas.
      </CoreLayoutContainer>
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
