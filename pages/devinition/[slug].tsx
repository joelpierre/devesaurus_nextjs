import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import CoreLayoutContainer from '../../src/containers/CoreLayoutContainer';
import { clearWord, getWord } from '../../src/store/word/actions';
import { IReduxState } from '../../src/store/createStore';
import { IWordStoreState } from '../../src/store/word/reducer';
import ErrorPage from '../_error';

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

    if (Object.keys(word).length === 0) {
      await onGetWord(slug);
    }
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearWord } = this.props;
    await onClearWord();
  }

  render() {
    const { error, word } = this.props;
    const { yoast } = word;
    // const { page_theme, components } = acf;
    const title = yoast.yoast_wpseo_title || word.title;
    const description = yoast.yoast_wpseo_metadesc;

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayoutContainer
        title={title}
        description={description}
      >
        this is the {word.title} page
      </CoreLayoutContainer>
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
