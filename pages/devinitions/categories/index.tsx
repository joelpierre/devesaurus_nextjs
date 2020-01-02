import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../../src/store/rootActions';
import { IReduxState } from '../../../src/store/createStore';

import { TCategoryStoreState } from '../../../src/store/categories/reducer';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TPostsStoreState } from '../../../src/store/posts/reducer';

interface IDevinitionsCategoriesPage {
  error: TReduxError;
}

interface IStoreDevinitionsCategoriesPageProps {
  categories: TCategoryStoreState;
}

interface IDispatchDevinitionsCategoriesPageProps {
  onGetCategories: () => void;
}

type TDevinitionsCategoriesPage =
  IDevinitionsCategoriesPage
  & IStoreDevinitionsCategoriesPageProps
  & IDispatchDevinitionsCategoriesPageProps;

export class DevinitionsCategoriesPage extends PureComponent<TDevinitionsCategoriesPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getCategories());
    const categories: TPostsStoreState = store.getState().categories;

    if (!Array.isArray(categories)) {
      res.statusCode = categories.code;
      return {
        error: categories
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { onGetCategories } = this.props;

    await onGetCategories();
  }

  render() {
    return (
      <PageHandler
        title="Devinition Categories"
        description="Long description for meta data"
        {...this.props}
      >
        DEVINITION CATEGORIES PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </PageHandler>
    );
  }
}

const mapStateToProps = ({ categories }: IReduxState) => ({
  categories
});

const mapDispatchToProps = {
  onGetCategories: () => getCategories()
};

export default connect<IStoreDevinitionsCategoriesPageProps, IDispatchDevinitionsCategoriesPageProps, IDevinitionsCategoriesPage>(mapStateToProps, mapDispatchToProps)(DevinitionsCategoriesPage);
