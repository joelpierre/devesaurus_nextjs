import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { ELayout } from '@jpp/typings/enums';
import { clearPost, getPost } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';
import { IPostStoreState } from '../../src/store/post/reducer';

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
      await store.dispatch(getPost(slug));
    }

    const post: IPostStoreState = store.getState().post;

    if (post.error) {
      res.statusCode = post.error.code;

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

const mapStateToProps = ({ post }: IReduxState) => ({
  post
});

const mapDispatchToProps = {
  onClearPost: () => clearPost()
};

export default connect<IStoreDevegramPageProps, IDispatchDevegramPageProps, IDevegramPageProps>(mapStateToProps, mapDispatchToProps)(DevegramPage);
