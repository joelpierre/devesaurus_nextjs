import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CoreLayout from '@jpp/layouts/CoreLayout/CoreLayout';

import { IReduxState } from '../../../src/store/createStore';

import ErrorPage from '../../_error';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TTagStoreState } from '../../../src/store/tags/reducer';
import { getTags } from '../../../src/store/rootActions';
import { TPostsStoreState } from '../../../src/store/posts/reducer';

interface IDevinitionsTagsPage {
  error: TReduxError;
}

interface IStoreDevinitionsTagsPageProps {
  tags: TTagStoreState;
}

interface IDispatchDevinitionsTagsPageProps {
  onGetTags: () => void;
}

type TDevinitionsTagsPage =
  IDevinitionsTagsPage
  & IStoreDevinitionsTagsPageProps
  & IDispatchDevinitionsTagsPageProps;

export class DevinitionsTagsPage extends PureComponent<TDevinitionsTagsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getTags());
    const tags: TPostsStoreState = store.getState().tags;

    if (!Array.isArray(tags)) {
      res.statusCode = tags.code;
      return {
        error: tags
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { onGetTags, tags } = this.props;

    if (Array.isArray(tags) && tags.length === 0) {
      await onGetTags();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinition Tags';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayout
        title={title}
        description={description}
      >
        DEVINITION TAGS PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayout>
    );
  }
}

const mapStateToProps = ({ tags }: IReduxState) => ({
  tags
});

const mapDispatchToProps = {
  onGetTags: () => getTags()
};

export default connect<IStoreDevinitionsTagsPageProps, IDispatchDevinitionsTagsPageProps, IDevinitionsTagsPage>(mapStateToProps, mapDispatchToProps)(DevinitionsTagsPage);
