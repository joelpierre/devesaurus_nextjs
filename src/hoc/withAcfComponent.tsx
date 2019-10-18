import React, { Component, ComponentType } from 'react';
import { getDisplayName } from './utils';

interface IWithAcfComponent {
  component: Partial<Core.IAcfComponent>;
  page_theme: Core.TTheme;
}

export type TWithAcfComponentInjectedProps = Core.IAcfComponentCore;

const withAcfComponent = <P extends object>(WrappedComponent: ComponentType<P>) =>
  class WithAcfComponent extends Component<P & IWithAcfComponent> {
    public static displayName = `WithAcfComponent(${getDisplayName(
      WrappedComponent
    )})`;

    render() {
      const { component, ...props } = this.props;

      if (!component) {
        return null;
      }

      return (
        <WrappedComponent
          component={component}
          {...(props as P)}
        />
      );
    }
  };

export default withAcfComponent;
