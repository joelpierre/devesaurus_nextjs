import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { getPost } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';
import { TTemplateInitialProps } from '@jpp/typings/index';

export class PostTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer }: TTemplateInitialProps) {
    await store.dispatch(getPost(slug));
    return { isServer, slug };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPost, slug } = this.props;
    await onGetPost(slug);
  }

  render() {
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
  onGetPost: (slug: string) => getPost(slug)
};

export default connect(mapStateToProps, mapDispatchToProps)(PostTemplate);
