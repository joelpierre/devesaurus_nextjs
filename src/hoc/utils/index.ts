import { ComponentType } from 'react';

export const getDisplayName = <T extends object>(
  WrappedComponent: ComponentType<T>,
) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
