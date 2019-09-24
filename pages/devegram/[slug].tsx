import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { clearPost, getPost } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';
import { TTemplateInitialProps } from '@jpp/typings/index';
import { IPostStoreState } from '../../src/store/post/reducer';
import ErrorPage from '../_error';

export class PostTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getPost(slug));
    }

    const post: IPostStoreState = store.getState().post;

    if (post.error) {
      res.statusCode = post.error.code;

      return {
        error: post.error
      };
    }

    return {
      isServer,
      slug
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPost, slug, post } = this.props;

    if (Object.keys(post).length === 0) {
      await onGetPost(slug);
    }
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPost } = this.props;

    await onClearPost();
  }

  render() {
    if (this.props.error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        This is the {this.props.post.title} page. We are {this.props.isServer ? 'SSR' : 'CSR'}
        <br/>
        <br/>
        <Link href="/[slug]" as="/about">
          <a>
            Go to page example
          </a>
        </Link>
        <br/><br/>
        <Link href="/[slug]" as="/contact">
          <a>
            Go to contact page example
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

const mapStateToProps = ({ post }: IReduxState) => ({
  post
});

const mapDispatchToProps = {
  onGetPost: (slug: string) => getPost(slug),
  onClearPost: () => clearPost()
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTemplate);
