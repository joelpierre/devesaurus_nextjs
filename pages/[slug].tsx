import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';

import { getPage } from '../src/store/rootActions';
import { IReduxState } from '../src/store/createStore';

export class PageTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer }: TTemplateInitialProps) {
    await store.dispatch(getPage(slug));
    return {
      isServer,
      slug
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug } = this.props;
    await onGetPage(slug);
  }

  render() {
    return (
      <>
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
  onGetPage: (slug: string) => getPage(slug)
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
