import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';
import { clearWord, getWord } from '../../src/store/word/actions';
import { IReduxState } from '../../src/store/createStore';
import { IWordStoreState } from '../../src/store/word/reducer';
import ErrorPage from '../_error';

export class WordTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store, isServer, res }: TTemplateInitialProps) {
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
      isServer,
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
    if (this.props.error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        This is the {this.props.word.title} page. We are {this.props.isServer ? 'SSR' : 'CSR'}
        <br/>
        <br/>
        <Link href="/devegram/[slug]" as={'/devegram/hello-world'}>
          <a>
            Go to post example
          </a>
        </Link>
        <br/><br/>
        <Link href="/[slug]" as={'/about'}>
          <a>
            Go to page example
          </a>
        </Link>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(WordTemplate);
