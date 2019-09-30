import React, { FunctionComponent } from 'react';

import Meta from '@jpp/shared/Meta/Meta';

import ConfigProvider from '../../services/configProvider';
import PushWrapper from '@jpp/shared/PushWrapper/PushWrapper';
import { connect } from 'react-redux';
import { IReduxState } from '../../store/createStore';

interface ICoreLayout {
  title: string;
  description: string;
  isMenuOpen: boolean;
  isLoading: boolean;
}

const CoreLayout: FunctionComponent<ICoreLayout> = (
  {
    children,
    title = ConfigProvider.getValue('APP_TITLE'),
    description = ConfigProvider.getValue('SITE_DESCRIPTION'),
    isMenuOpen,
    isLoading
  }
) => (
  <>
    <Meta title={title} description={description}/>

    {console.log('CoreLayout', isLoading)}

    <PushWrapper isMenuOpen={isMenuOpen}>
      <header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius molestiae odio rem similique. Ab at
        beatae dolor illo incidunt laudantium, minus porro praesentium quod sit? Dolores, enim, quo! Tempore.
      </header>

      <main>
        {children}
      </main>

      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum eligendi esse et hic iure
        laudantium maiores odit repellat tempora! Dolore esse laboriosam magni odit provident reiciendis rerum tenetur
        ullam.
      </footer>
    </PushWrapper>
  </>
);

const mapStateToProps = ({ core: { isMenuOpen, isLoading } }: IReduxState) => ({
  isMenuOpen,
  isLoading
});

export default connect(mapStateToProps)(CoreLayout);
