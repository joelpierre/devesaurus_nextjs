import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { IReduxState } from '../../../src/store/createStore';
import { clearWordCategory, getWordCategory, getWordCategoryWords } from '../../../src/store/rootActions';
import { IWordCategoryStoreState } from '../../../src/store/word_categories/reducer';
import { getWordCategoryFromState } from '../../../src/store/word_category/selectors';
import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';

interface IDevinitionCategoryProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreDevinitionCategoryProps {
  wordCategory: IWordCategoryStoreState;
}

interface IDispatchDevinitionCategoryProps {
  onClearWordCategory: TFuncVoid;
}

export type TDevinitionCategory =
  IDevinitionCategoryProps
  & IStoreDevinitionCategoryProps
  & IDispatchDevinitionCategoryProps;

class DevinitionCategory extends PureComponent<TDevinitionCategory> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getWordCategory(slug) as any);
      await store.dispatch(getWordCategoryWords(slug) as any);
    }

    const state: IReduxState = store.getState();
    const wordCategory: IWordCategoryStoreState = getWordCategoryFromState(state);

    if (wordCategory.error && res) {
      res.statusCode = wordCategory.error.code ? wordCategory.error.code : 404 as any;
      return { error: wordCategory.error };
    }

    return { slug, wordCategory };
  }

  componentWillUnmount(): void {
    this.props.onClearWordCategory();
  }

  render() {
    const { wordCategory } = this.props;

    return (
      <PageHandler
        title={wordCategory && wordCategory.name}
        description={wordCategory && wordCategory.description}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps: IDispatchDevinitionCategoryProps = {
  onClearWordCategory: clearWordCategory
};

export default connect<IStoreDevinitionCategoryProps, IDispatchDevinitionCategoryProps, IDevinitionCategoryProps>(
  null, mapDispatchToProps
)(DevinitionCategory);
