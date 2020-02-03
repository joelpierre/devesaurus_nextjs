import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { ICategoryStoreState } from '../../../src/store/categories/reducer';
import { clearWordCategory, getWordCategory, getWordCategoryWords } from '../../../src/store/rootActions';
import { IWordCategoryStoreState } from '../../../src/store/word_categories/reducer';
import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';

interface IDevinitionCategoryProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreDevinitionCategoryProps {
  word_category: IWordCategoryStoreState;
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
      await store.dispatch(getWordCategory(slug));
      await store.dispatch(getWordCategoryWords(slug));
    }

    const word_category: ICategoryStoreState = store.getState().word_category;

    if (word_category.error) {
      res.statusCode = word_category.error.code;
      return { error: word_category.error };
    }

    return { slug, word_category };
  }

  componentWillUnmount(): void {
    this.props.onClearWordCategory();
  }

  render() {
    const { word_category } = this.props;

    return (
      <PageHandler
        title={word_category && word_category.name}
        description={word_category && word_category.description}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps = {
  onClearWordCategory: () => clearWordCategory()
};

export default connect<IStoreDevinitionCategoryProps, IDispatchDevinitionCategoryProps, IDevinitionCategoryProps>(null, mapDispatchToProps)(DevinitionCategory);
