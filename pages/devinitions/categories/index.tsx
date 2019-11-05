import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CoreLayout from '@jpp/layouts/CoreLayout/CoreLayout';

import { getCategories } from '../../../src/store/rootActions';
import { IPageStoreState } from '../../../src/store/page/reducer';
import { IReduxState } from '../../../src/store/createStore';

import ErrorPage from '../../_error';
import { ICategoryStoreState } from '../../../src/store/categories/reducer';
import { TTemplateInitialProps } from '@jpp/typings/index';

interface IDevinitionsCategoriesPage {
  error: any;
}

interface IStoreDevinitionsCategoriesPageProps {
  categories: ICategoryStoreState[];
}

interface IDispatchDevinitionsCategoriesPageProps {
  onGetCategories: () => void;
}

type TDevinitionsCategoriesPage =
  IDevinitionsCategoriesPage
  & IStoreDevinitionsCategoriesPageProps
  & IDispatchDevinitionsCategoriesPageProps;

export class DevinitionsCategoriesPage extends PureComponent<TDevinitionsCategoriesPage> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getCategories());
    const categories: IPageStoreState = store.getState().categories;

    if (categories.error) {
      res.statusCode = categories.error.code;
      return {
        error: categories.error
      };
    }

    return {
      isServer
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetCategories, categories } = this.props;

    if (categories.length === 0) {
      await onGetCategories();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinition Categories';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <CoreLayout
        title={title}
        description={description}
      >
        DEVINITION CATEGORIES PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayout>
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
