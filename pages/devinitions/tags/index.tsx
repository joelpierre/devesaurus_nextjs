import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';
import { ELayout } from '@jpp/typings/enums';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { IReduxState } from '../../../src/store/createStore';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TTagsStoreState } from '../../../src/store/tags/reducer';
import { getTags } from '../../../src/store/rootActions';
import { getWordTagsFromState } from '../../../src/store/word_tags/selectors';
import { IWordTagStoreState } from '../../../src/store/word_tags/reducer';
import { NOT_FOUND_STATUS_CODE } from '../../../src/utils';

interface IDevinitionsTagsPage {
  error: TReduxError;
}

interface IStoreDevinitionsTagsPageProps {
  tags: TTagsStoreState;
}

interface IDispatchDevinitionsTagsPageProps {
  onGetTags: TFuncVoid;
}

type TDevinitionsTagsPage =
  IDevinitionsTagsPage
  & IStoreDevinitionsTagsPageProps
  & IDispatchDevinitionsTagsPageProps;

class DevinitionsTagsPage extends PureComponent<TDevinitionsTagsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getTags());
    const state: IReduxState = store.getState();
    const tags: IWordTagStoreState[] = getWordTagsFromState(state);

    if (tags.length === 0) {
      res.statusCode = NOT_FOUND_STATUS_CODE;
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
): IStoreDevinitionsTagsPageProps => ({
  tags
});

const mapDispatchToProps: IDispatchDevinitionsTagsPageProps = {
  onGetTags: getTags
};

export default connect<IStoreDevinitionsTagsPageProps, IDispatchDevinitionsTagsPageProps, IDevinitionsTagsPage>(
  mapStateToProps, mapDispatchToProps
)(DevinitionsTagsPage);
