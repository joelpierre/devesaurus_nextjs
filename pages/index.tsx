import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { TTemplateInitialProps } from '@jpp/typings/index';
import CoreLayout from '@jpp/layouts/CoreLayout/CoreLayout';

import { clearPage, getPage } from '../src/store/page/actions';
import { IReduxState } from '../src/store/createStore';
import { IPageStoreState } from '../src/store/page/reducer';

import ErrorPage from './_error';
import Section from '@jpp/components/_shared/Grid/Section/Section';
import Row from '@jpp/components/_shared/Grid/Row/Row';
import Flex from '@jpp/components/_shared/Grid/Flex/Flex';

export class HomePage extends PureComponent<TTemplateInitialProps> {
  static async getInitialProps({ store, isServer, res }: TTemplateInitialProps) {
    await store.dispatch(getPage('home'));
    const page: IPageStoreState = store.getState().page;

    if (page.error) {
      res.statusCode = page.error.code;

      return {
        error: page.error
      };
    }

    return {
      isServer,
      slug: 'home'
    };
  }

  async componentDidMount(): Promise<void> {
    const { onGetPage, slug, page } = this.props;

    if (Object.keys(page).length === 0) {
      await onGetPage(slug);
    }
  }

  async componentWillUnmount(): Promise<void> {
    const { onClearPage, page } = this.props;

    if (Object.keys(page).length === 0) {
      await onClearPage();
    }
  }

  render() {
    const { page, page: { yoast = {} }, error } = this.props;
    const title = yoast.yoast_wpseo_title || page.title;
    const description = yoast.yoast_wpseo_metadesc;

    if (error) {
      return (<ErrorPage {...this.props.error} />);
    }

    return (
      <>
        <CoreLayout
          title={title}
          description={description}
          useSimpleHeader={true}
        >
          <Section>
            <Row>
              <Flex>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque cupiditate deserunt dignissimos
                distinctio dolor dolorem doloremque enim minima, molestiae nulla obcaecati qui reiciendis reprehenderit,
                tempora tenetur vero voluptates voluptatibus!
              </Flex>
            </Row>
          </Section>
        </CoreLayout>
      </>
    );
  }
}

const mapStateToProps = ({ page }: IReduxState) => ({
  page
});

const mapDispatchToProps = {
  onGetPage: (slug: string) => getPage(slug),
  onClearPage: () => clearPage()
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
