import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { getWords } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';
import { arrayHasLength } from '../../src/utils';

import { TWordsStoreState } from '../../src/store/words/reducer';

interface IDevinitionsPage {
  error: TReduxError;
}

interface IStoreDevinitionsPageProps {
  words: TWordsStoreState;
}

interface IDispatchDevinitionsPageProps {
  onGetWords: () => void;
}

type TDevinitionsPage =
  IDevinitionsPage
  & IStoreDevinitionsPageProps
  & IDispatchDevinitionsPageProps;

class DevinitionsPage extends PureComponent<TDevinitionsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getWords());
    const words: TWordsStoreState = store.getState().words;

    if (!Array.isArray(words)) {
      res.statusCode = words.code;
      return {
        error: words
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { words, onGetWords } = this.props;

    if (!arrayHasLength(words)) {
      await onGetWords();
    }
  }

  render() {
    return (
      <PageHandler
        title="Devinitions"
        description="Long description for meta data"
        {...this.props}
      >
        DEVINITIONS PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ words }: IReduxState) => ({
  words
});

const mapDispatchToProps = {
  onGetWords: () => getWords()
};

export default connect<IStoreDevinitionsPageProps, IDispatchDevinitionsPageProps, IDevinitionsPage>(mapStateToProps, mapDispatchToProps)(DevinitionsPage);
