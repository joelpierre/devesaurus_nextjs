import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TPageInitialProps } from '@jpp/typings/index';

import { getPage } from '../src/store/rootActions';
import { IReduxState } from '../src/store/createStore';

export class PageTemplate extends PureComponent<TPageInitialProps> {
  static async getInitialProps({ query: { slug }, store }: TPageInitialProps) {
    await store.dispatch(getPage(slug));
  }

  render() {
    return (
      <>
        This is the {this.props.page.title} page
      </>
    );
  }
}

const mapStateToProps = ({ page }: IReduxState) => ({
  page
});

const mapDispatchToProps = (dispatch: any) => ({
  onGetPage: (slug: string) => dispatch(getPage(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageTemplate);
