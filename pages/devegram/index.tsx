import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CoreLayoutContainer from '../../src/containers/CoreLayoutContainer';

import { getPosts } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';

import ErrorPage from '../_error';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
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

    if (Array.isArray(posts) && posts.length === 0) {
      await onGetPosts();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinitions';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayoutContainer
        title={title}
        description={description}
      >
        DEVEGRAM PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayoutContainer>
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
