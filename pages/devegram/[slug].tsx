import Link from 'next/link';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ELayout } from '@jpp/typings/enums';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { IReduxState } from '../../src/store/createStore';
import { IPostStoreState } from '../../src/store/post/reducer';
import { getPostFromState } from '../../src/store/post/selectors';
import { clearPost, getPost } from '../../src/store/rootActions';
import { NOT_FOUND_STATUS_CODE } from '../../src/utils';
import { PageHandler } from '../../src/utils/PageHandler/PageHandler';

interface IDevegramPageProps {
  error: TReduxError;
  slug: string;
}

interface IStoreDevegramPageProps {
  post: IPostStoreState;
}

interface IDispatchDevegramPageProps {
  onClearPost: TFuncVoid;
}

type TDevegramPageProps = IDevegramPageProps & IStoreDevegramPageProps & IDispatchDevegramPageProps;

class DevegramPage extends PureComponent<TDevegramPageProps> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getPost(slug) as any);
    }

    const state: IReduxState = store.getState();
    const post: IPostStoreState = getPostFromState(state);

    if (post.error && res) {
      res.statusCode = post.error.code ? post.error.code : NOT_FOUND_STATUS_CODE as any;

      return { error: post.error };
    }

    return { slug, post };
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPost } = this.props;
    await onClearPost();
  }

  render() {
    const { post } = this.props;
    const { yoast, title } = post;

    return (
      <PageHandler
        layout={ELayout.Basic}
        title={yoast.yoast_wpseo_title || title}
        description={yoast.yoast_wpseo_metadesc}
        {...this.props}
      >
        This is the {title} page.
        <br />
        <br />
        <Link href="/[slug]" as="/about">
          <a>
            Go to page example
          </a>
        </Link>
        <br /><br />
        <Link href="/[slug]" as="/contact">
          <a>
            Go to contact page example
          </a>
        </Link>
        <br /><br />
        <Link href="/devinitions/[slug]" as="/devinitions/visual-design">
          <a>
            Go to word example
          </a>
        </Link>
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ post }: IReduxState): IStoreDevegramPageProps => ({
  post
});

const mapDispatchToProps: IDispatchDevegramPageProps = {
  onClearPost: clearPost
};

export default connect<IStoreDevegramPageProps, IDispatchDevegramPageProps, IDevegramPageProps>(
  mapStateToProps, mapDispatchToProps
)(DevegramPage);
