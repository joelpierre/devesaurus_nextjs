import React, { PureComponent } from 'react';
import Head from 'next/head';
import { TTemplateInitialProps } from '@jpp/typings/index';
import { getPage } from '../src/store/page/actions';
import { IReduxState } from '../src/store/createStore';
import { connect } from 'react-redux';

export class HomePage extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer }: TTemplateInitialProps) {
    await store.dispatch(getPage(slug));
    return {
      isServer
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug } = this.props;
    await onGetPage(slug);
  }

  render() {
    return (
      <>
        <Head>
          <title>Home Page | Next 9 test</title>
        </Head>

        Joel is awesome
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
