import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ELayout } from '@jpp/typings/enums';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { IReduxState } from '../../src/store/createStore';
import { clearWord, getWord } from '../../src/store/word/actions';
import { IWordStoreState } from '../../src/store/word/reducer';
import { getWordFromState } from '../../src/store/word/selectors';
import { NOT_FOUND_STATUS_CODE } from '../../src/utils';
import { PageHandler } from '../../src/utils/PageHandler/PageHandler';

interface IDevinitionPageProps {
  error: TReduxError;
  slug: string;
}

interface IStoreDevinitionPageProps {
  word: IWordStoreState;
}

interface IDispatchDevinitionPageProps {
  onClearWord: TFuncVoid;
}

type TDevinitionPageProps = IDevinitionPageProps & IStoreDevinitionPageProps & IDispatchDevinitionPageProps;

class DevinitionPage extends PureComponent<TDevinitionPageProps> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getWord(slug) as any);
    }

    const state: IReduxState = store.getState();
    const word: IWordStoreState = getWordFromState(state);

    if (word.error && res) {
      res.statusCode = word.error.code ? word.error.code : NOT_FOUND_STATUS_CODE as any;
      return { error: word.error };
    }

    return { slug, word };
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearWord } = this.props;
    await onClearWord();
  }

  render() {
    const { word = {} as IWordStoreState } = this.props;

    return (
      <PageHandler
        layout={ELayout.Core}
        title={word && word.yoast && word.yoast.yoast_wpseo_title}
        description={word && word.yoast && word.yoast.yoast_wpseo_metadesc}
        {...this.props}
      >
        this is the {word.title} page
      </PageHandler>
    );
  }
}

const mapDispatchToProps: IDispatchDevinitionPageProps = {
  onClearWord: clearWord
};

export default connect<never, IDispatchDevinitionPageProps, IDevinitionPageProps>(
  null,
  mapDispatchToProps
)(DevinitionPage);
