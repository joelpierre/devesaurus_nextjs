import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../../src/store/rootActions';
import { IReduxState } from '../../../src/store/createStore';

import ErrorPage from '../../_error';
import { TCategoryStoreState } from '../../../src/store/categories/reducer';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TPostsStoreState } from '../../../src/store/posts/reducer';
import CoreLayoutContainer from '../../../src/containers/CoreLayoutContainer';

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
    const { onGetCategories, categories } = this.props;

    if (Array.isArray(categories) && categories.length === 0) {
      await onGetCategories();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinition Categories';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayoutContainer
        title={title}
        description={description}
      >
        DEVINITION CATEGORIES PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayoutContainer>
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
