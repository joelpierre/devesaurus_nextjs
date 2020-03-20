import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  TFuncVoid,
  TReduxError,
  TTemplateInitialProps,
} from '@jpp/typings/index';

import { IReduxState } from '../../src/store/createStore';
import { IPostStoreState } from '../../src/store/post/reducer';
import { TPostsStoreState } from '../../src/store/posts/reducer';
import { getPostsFromState } from '../../src/store/posts/selectors';
import { getPosts } from '../../src/store/rootActions';
import { NOT_FOUND_STATUS_CODE } from '../../src/utils';
import { PageHandler } from '../../src/utils/PageHandler/PageHandler';

interface IDevegramPage {
  error: TReduxError;
}

interface IStoreDevegramPageProps {
  posts: TPostsStoreState;
}

interface IDispatchDevegramPageProps {
  onGetPosts: TFuncVoid;
}

type TDevegramPage = IDevegramPage &
  IStoreDevegramPageProps &
  IDispatchDevegramPageProps;

export class DevegramPage extends PureComponent<TDevegramPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getPosts() as any);
    const state: IReduxState = store.getState();
    const posts: IPostStoreState[] = getPostsFromState(state);

    if (posts.length === 0 && res) {
      res.statusCode = NOT_FOUND_STATUS_CODE;
      return {
        error: posts,
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { onGetPosts } = this.props;

    await onGetPosts();
  }

  render() {
    return (
      <PageHandler
        title="Devegram"
        description="Long description for meta data"
      >
        DEVEGRAM PAGE Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam architecto corporis cum molestiae nisi officia perferendis quam
        reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit
        natus, quas quibusdam quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ posts }: IReduxState): IStoreDevegramPageProps => ({
  posts,
});

const mapDispatchToProps: IDispatchDevegramPageProps = {
  onGetPosts: getPosts,
};

export default connect<
  IStoreDevegramPageProps,
  IDispatchDevegramPageProps,
  IDevegramPage
>(
  mapStateToProps,
  mapDispatchToProps
)(DevegramPage);
