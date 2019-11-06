import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getWords } from '../../src/store/rootActions';
import { IReduxState } from '../../src/store/createStore';

import ErrorPage from '../_error';
import { TReduxError, TTemplateInitialProps } from '@jpp/typings/index';
import { TWordsStoreState } from '../../src/store/words/reducer';
import CoreLayoutContainer from '../../src/containers/CoreLayoutContainer';

interface IDevinitionsPage {
  error: TReduxError;
}

interface IStoreDevinitionsPageProps {
  words: TWordsStoreState;
}

interface IDispatchDevinitionsPageProps {
  onGetWords: () => void;
}

type TDevinitionsPage =
  IDevinitionsPage
  & IStoreDevinitionsPageProps
  & IDispatchDevinitionsPageProps;

export class DevinitionsPage extends PureComponent<TDevinitionsPage> {
  static async getInitialProps({ store, res }: TTemplateInitialProps) {
    await store.dispatch(getWords());
    const words: TWordsStoreState = store.getState().words;

    if (!Array.isArray(words)) {
      res.statusCode = words.code;
      return {
        error: words
      };
    }

    return {};
  }

  async componentDidMount(): Promise<void> {
    const { words, onGetWords } = this.props;

    if (Array.isArray(words) && words.length === 0) {
      await onGetWords();
    }
  }

  render() {
    const { error } = this.props;
    const title = 'Devinitions';
    const description = 'Long description for meta data';

    if (error) {
      return (<ErrorPage {...error} />);
    }

    return (
      <CoreLayoutContainer
        title={title}
        description={description}
      >
        DEVINITIONS PAGE

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum molestiae nisi officia
        perferendis quam reprehenderit similique vitae! Assumenda dolore eveniet fuga fugit natus, quas quibusdam
        quisquam tempora.
      </CoreLayoutContainer>
    );
  }
}

const mapStateToProps = ({ words }: IReduxState) => ({
  words
});

const mapDispatchToProps = {
  onGetWords: () => getWords()
};

export default connect<IStoreDevinitionsPageProps, IDispatchDevinitionsPageProps, IDevinitionsPage>(mapStateToProps, mapDispatchToProps)(DevinitionsPage);
