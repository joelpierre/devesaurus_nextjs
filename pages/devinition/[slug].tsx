import { PageHandler } from '../../src/utils/PageHandler/PageHandler';
import { ELayout } from '@jpp/typings/enums';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { clearWord, getWord } from '../../src/store/word/actions';
import { IReduxState } from '../../src/store/createStore';
import { IWordStoreState } from '../../src/store/word/reducer';
import { objectHasKeys } from '../../src/utils';

interface IDevinitionPageProps {
  error: TReduxError;
  slug: string;
}

interface IStoreDevinitionPageProps {
  word: IWordStoreState;
}

interface IDispatchDevinitionPageProps {
  onGetWord: (slug: string) => void;
  onClearWord: () => void;
}

type TDevinitionPageProps = IDevinitionPageProps & IStoreDevinitionPageProps & IDispatchDevinitionPageProps;

export class DevinitionPage extends PureComponent<TDevinitionPageProps> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getWord(slug));
    }

    const word: IWordStoreState = store.getState().word;

    if (word.error) {
      res.statusCode = word.error.code;

      return {
        error: word.error
      };
    }

    return {
      slug
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetWord, slug, word } = this.props;

    if (objectHasKeys(word)) {
      await onGetWord(slug);
    }
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

const mapStateToProps = ({ word }: IReduxState) => ({
  word
});

const mapDispatchToProps = {
  onGetWord: (slug: string) => getWord(slug),
  onClearWord: () => clearWord()
};

export default connect(mapStateToProps, mapDispatchToProps)(DevinitionPage);
