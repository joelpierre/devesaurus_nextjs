import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ELayout } from '@jpp/typings/enums';
import {
  TFuncVoid,
  TReduxError,
  TTemplateInitialProps,
} from '@jpp/typings/index';

import { IReduxState } from '../../../src/store/createStore';
import { getTags } from '../../../src/store/rootActions';
import { TTagsStoreState } from '../../../src/store/tags/reducer';
import { IWordTagStoreState } from '../../../src/store/word_tags/reducer';
import { getWordTagsFromState } from '../../../src/store/word_tags/selectors';
import { NOT_FOUND_STATUS_CODE } from '../../../src/utils';
import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';

interface IDevinitionsTagsPage {
  error: TReduxError;
}

interface IStoreDevinitionsTagsPageProps {
  tags: TTagsStoreState;
}

interface IDispatchDevinitionsTagsPageProps {
  onGetTags: TFuncVoid;
}

type TDevinitionsTagsPage = IDevinitionsTagsPage &
  IStoreDevinitionsTagsPageProps &
  IDispatchDevinitionsTagsPageProps;

class DevinitionsTagsPage extends PureComponent<TDevinitionsTagsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getTags() as any);
    const state: IReduxState = store.getState();
    const tags: IWordTagStoreState[] = getWordTagsFromState(state);

    if (tags.length === 0 && res) {
      res.statusCode = NOT_FOUND_STATUS_CODE;
      return {
        error: tags,
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
        DEVINITION TAGS PAGE Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam architecto corporis cum molestiae nisi officia perferendis
        quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit
        natus, quas quibusdam quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = ({
  tags,
}: IReduxState): IStoreDevinitionsTagsPageProps => ({
  tags,
});

const mapDispatchToProps: IDispatchDevinitionsTagsPageProps = {
  onGetTags: getTags,
};

export default connect<
  IStoreDevinitionsTagsPageProps,
  IDispatchDevinitionsTagsPageProps,
  IDevinitionsTagsPage
>(
  mapStateToProps,
  mapDispatchToProps
)(DevinitionsTagsPage);
