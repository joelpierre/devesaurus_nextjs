import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';

import { ICategoryStoreState } from '../../../src/store/categories/reducer';
import { getCategoryFromState } from '../../../src/store/category/selectors';
import { IReduxState } from '../../../src/store/createStore';
import { clearCategory, getCategory } from '../../../src/store/rootActions';
import { NOT_FOUND_STATUS_CODE } from '../../../src/utils';

interface IDevinitionCategoryProps {
  slug: string;
  error?: TReduxError;
}

interface IStoreDevinitionCategoryProps {
  category: ICategoryStoreState;
}

interface IDispatchDevinitionCategoryProps {
  onClearCategory: TFuncVoid;
}

export type TDevinitionCategory =
  IDevinitionCategoryProps
  & IStoreDevinitionCategoryProps
  & IDispatchDevinitionCategoryProps;

class DevinitionCategory extends PureComponent<TDevinitionCategory> {
  static async getInitialProps({ query: { slug }, store, res }: TTemplateInitialProps) {
    if (slug) {
      await store.dispatch(getCategory(slug) as any);
    }

    const state: IReduxState = store.getState();
    const category: ICategoryStoreState = getCategoryFromState(state);

    if (category.error && res) {
      res.statusCode = category.error.code ? category.error.code : NOT_FOUND_STATUS_CODE as any;
      return { error: category.error };
    }

    return { slug, category };
  }

  componentWillUnmount(): void {
    this.props.onClearCategory();
  }

  render() {
    const { category } = this.props;
    console.log(category);
    // <PageHandler
    //   title={category && category.title || category && category.yoast && category.yoast.yoast_wpseo_title}
    //   description={category && category.yoast && category.yoast.yoast_wpseo_metadesc}
    //   {...this.props}
    // />
    return (
      <>
        Category Page
      </>
    );
  }
}

const mapDispatchToProps: IDispatchDevinitionCategoryProps = {
  onClearCategory: clearCategory
};

export default connect<never, IDispatchDevinitionCategoryProps, IDevinitionCategoryProps>(
  null, mapDispatchToProps
)(DevinitionCategory);
