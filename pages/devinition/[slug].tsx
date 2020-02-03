import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { ELayout } from '@jpp/typings/enums';
import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { clearWord, getWord } from '../../src/store/word/actions';
import { IWordStoreState } from '../../src/store/word/reducer';

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
      await store.dispatch(getWord(slug));
    }

    const word: IWordStoreState = store.getState().word;

    if (word.error) {
      res.statusCode = word.error.code;
      return { error: word.error };
    }

    return { slug, word };
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearWord } = this.props;
    await onClearWord();
  }

  render() {
    const { word } = this.props;
    const { yoast, title } = word;

    return (
      <PageHandler
        layout={ELayout.Basic}
        title={yoast.yoast_wpseo_title || title}
        description={yoast.yoast_wpseo_metadesc}
        {...this.props}
      >
        this is the {word.title} page
      </PageHandler>
    );
  }
}

const mapDispatchToProps = {
  onClearWord: () => clearWord()
};

export default connect<IStoreDevinitionPageProps, IDispatchDevinitionPageProps, IDevinitionPageProps>(
  null,
  mapDispatchToProps
)(DevinitionPage);
