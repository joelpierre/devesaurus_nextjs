import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';
import { ELayout } from '@jpp/typings/enums';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { IReduxState } from '../../../src/store/createStore';

import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TTagsStoreState } from '../../../src/store/tags/reducer';
import { getTags } from '../../../src/store/rootActions';
import { TPostsStoreState } from '../../../src/store/posts/reducer';

interface IDevinitionsTagsPage {
  error: TReduxError;
}

interface IStoreDevinitionsTagsPageProps {
  tags: TTagsStoreState;
}

interface IDispatchDevinitionsTagsPageProps {
  onGetTags: () => void;
}

type TDevinitionsTagsPage =
  IDevinitionsTagsPage
  & IStoreDevinitionsTagsPageProps
  & IDispatchDevinitionsTagsPageProps;

class DevinitionsTagsPage extends PureComponent<TDevinitionsTagsPage> {
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
    const { onGetTags } = this.props;
    await onGetTags();
  }

  render() {
    return (
      <PageHandler
        layout={ELayout.Basic}
        title="Devinition Tags"
        description="Long description for meta data"
        {...this.props}
      >
        DEVINITION TAGS PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = (
  { tags }: IReduxState
) => ({
  tags
});

const mapDispatchToProps = {
  onGetTags: () => getTags()
};

export default connect<IStoreDevinitionsTagsPageProps, IDispatchDevinitionsTagsPageProps, IDevinitionsTagsPage>(mapStateToProps, mapDispatchToProps)(DevinitionsTagsPage);
