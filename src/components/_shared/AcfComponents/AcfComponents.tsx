import React, { PureComponent } from 'react';

import HeroSplash from '@jpp/organisms/HeroSplash/HeroSplash';
import { EAcfComponentType } from '@jpp/typings/enums';

interface IAcfComponentMap {
  [key: string]: React.ComponentType<any>;
}

type TAcfComponents = Core.IAcfComponentCore;

const ACF_COMPONENT_MAP: IAcfComponentMap = {
  [EAcfComponentType.HeroSplash]: HeroSplash
};

export class AcfComponents extends PureComponent<TAcfComponents> {
  render() {
    const { component, page_theme } = this.props;
    const componentName: string = component.acf_fc_layout!;

    const defaultProps = {
      component,
      page_theme
    };

    const Component = ACF_COMPONENT_MAP[componentName];

    if (Component === undefined) {
      return null;
    }

    return (
      <article className="AcfComponent">
        <Component
          {...defaultProps}
        />
      </article>
    );
  }
}
