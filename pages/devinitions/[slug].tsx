import React, { PureComponent } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';
import { getWord } from '../../src/store/word/actions';
import { IReduxState } from '../../src/store/createStore';

export class WordTemplate extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ query: { slug }, store }: TTemplateInitialProps) {
    await store.dispatch(getWord(slug));

    return {
      slug
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetWord, slug } = this.props;
    await onGetWord(slug);
  }

  render() {
    return (
      <>
        This is the {this.props.word.title} page
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
  onGetWord: (slug: string) => getWord(slug)
};

export default connect(mapStateToProps, mapDispatchToProps)(WordTemplate);
