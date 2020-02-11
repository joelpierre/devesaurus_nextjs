import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { ICategoryStoreState } from '../../../src/store/categories/reducer';
import { clearCategory, getCategory } from '../../../src/store/rootActions';

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
      await store.dispatch(getCategory(slug));
    }

    const category: ICategoryStoreState = store.getState().category;

    if (category.error) {
      res.statusCode = category.error.code;
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
