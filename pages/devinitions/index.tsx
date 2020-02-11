import React, { PureComponent } from 'react';
import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { getWords } from '../../src/store/rootActions';
import { TWordsStoreState } from '../../src/store/words/reducer';
import { IReduxState } from '../../src/store/createStore';
import { getWordsFromState } from '../../src/store/words/selectors';
import { IWordStoreState } from '../../src/store/word/reducer';
import { NOT_FOUND_STATUS_CODE } from '../../src/utils';

interface IDevinitionsPage {
  error: TReduxError;
}

interface IStoreDevinitionsPageProps {
  words: TWordsStoreState;
}

interface IDispatchDevinitionsPageProps {
  onGetWords: TFuncVoid;
}

type TDevinitionsPage =
  IDevinitionsPage
  & IStoreDevinitionsPageProps
  & IDispatchDevinitionsPageProps;

class DevinitionsPage extends PureComponent<TDevinitionsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getWords());
    const state: IReduxState = store.getState();
    const words: IWordStoreState[] = getWordsFromState(state);

    if (words.length === 0) {
      res.statusCode = NOT_FOUND_STATUS_CODE;
      return {
        error: words
      };
    }

    return { words };
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

export default DevinitionsPage;
