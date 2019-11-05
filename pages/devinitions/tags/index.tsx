import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CoreLayout from '@jpp/layouts/CoreLayout/CoreLayout';

import { IPageStoreState } from '../../../src/store/page/reducer';
import { IReduxState } from '../../../src/store/createStore';

import ErrorPage from '../../_error';
import { TTemplateInitialProps } from '@jpp/typings/index';
import { ITagStoreState } from '../../../src/store/tags/reducer';
import { getTags } from '../../../src/store/rootActions';

interface IDevinitionsTagsPage {
  error: any;
}

interface IStoreDevinitionsTagsPageProps {
  tags: ITagStoreState[];
}

interface IDispatchDevinitionsTagsPageProps {
  onGetTags: () => void;
}

type TDevinitionsTagsPage =
  IDevinitionsTagsPage
  & IStoreDevinitionsTagsPageProps
  & IDispatchDevinitionsTagsPageProps;

export class DevinitionsTagsPage extends PureComponent<TDevinitionsTagsPage> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getTags());
    const tags: IPageStoreState = store.getState().tags;

    if (tags.error) {
      res.statusCode = tags.error.code;
      return {
        error: tags.error
      };
    }

    return {
      isServer
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetTags, tags } = this.props;

    console.log(tags);

    if (tags.length === 0) {
      await onGetTags();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinition Tags';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <CoreLayout
        title={title}
        description={description}
      >
        DEVINITION TAGS PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayout>
    );
  }
}

const mapStateToProps = ({ tags }: IReduxState) => ({
  tags
});

const mapDispatchToProps = {
  onGetTags: () => getTags()
};

export default connect<IStoreDevinitionsTagsPageProps, IDispatchDevinitionsTagsPageProps, IDevinitionsTagsPage>(mapStateToProps, mapDispatchToProps)(DevinitionsTagsPage);
