import { PageHandler } from '../../../src/utils/PageHandler/PageHandler';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../../src/store/rootActions';
import { IReduxState } from '../../../src/store/createStore';

import { ICategoryStoreState, TCategoriesStoreState } from '../../../src/store/categories/reducer';
import { TFuncVoid, TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { getCategoriesFromState } from '../../../src/store/categories/selectors';
import { NOT_FOUND_STATUS_CODE } from '../../../src/utils';

interface IDevinitionsCategoriesPage {
  error: TReduxError;
}

interface IStoreDevinitionsCategoriesPageProps {
  categories: TCategoriesStoreState;
}

interface IDispatchDevinitionsCategoriesPageProps {
  onGetCategories: TFuncVoid;
}

type TDevinitionsCategoriesPage =
  IDevinitionsCategoriesPage
  & IStoreDevinitionsCategoriesPageProps
  & IDispatchDevinitionsCategoriesPageProps;

export class DevinitionsCategoriesPage extends PureComponent<TDevinitionsCategoriesPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getCategories());
    const state: IReduxState = store.getState();
    const categories: ICategoryStoreState[] = getCategoriesFromState(state);

    if (categories.length === 0) {
      res.statusCode = NOT_FOUND_STATUS_CODE;
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

const mapStateToProps = ({ categories }: IReduxState): IStoreDevinitionsCategoriesPageProps => ({
  categories
});

const mapDispatchToProps: IDispatchDevinitionsCategoriesPageProps = {
  onGetCategories: getCategories
};

export default connect<IStoreDevinitionsCategoriesPageProps, IDispatchDevinitionsCategoriesPageProps, IDevinitionsCategoriesPage>(
  mapStateToProps, mapDispatchToProps
)(DevinitionsCategoriesPage);
