import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { getPosts } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';
import { arrayHasLength } from '../../src/utils';
import { TPostsStoreState } from '../../src/store/posts/reducer';

interface IDevegramPage {
  error: TReduxError;
}

interface IStoreDevegramPageProps {
  posts: TPostsStoreState;
}

interface IDispatchDevegramPageProps {
  onGetPosts: () => void;
}

type TDevegramPage =
  IDevegramPage
  & IStoreDevegramPageProps
  & IDispatchDevegramPageProps;

export class DevegramPage extends PureComponent<TDevegramPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getPosts());
    const posts: TPostsStoreState = store.getState().posts;

    if (!Array.isArray(posts)) {
      res.statusCode = posts.code;
      return {
        error: posts
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { posts, onGetPosts } = this.props;

    if (!arrayHasLength(posts)) {
      await onGetPosts();
    }
  }

  render() {
    return (
      <PageHandler
        title="Devinitions"
        description="Long description for meta data"
      >
        DEVEGRAM PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ posts }: IReduxState) => ({
  posts
});

const mapDispatchToProps = {
  onGetPosts: () => getPosts()
};

export default connect<IStoreDevegramPageProps, IDispatchDevegramPageProps, IDevegramPage>(mapStateToProps, mapDispatchToProps)(DevegramPage);
