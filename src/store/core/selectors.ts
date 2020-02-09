import { TReduxError } from '@jpp/typings/index';
import { IReduxState } from 'src/store/createStore';

export const getAppTitle = (state: IReduxState): string => {
  return state.core && state.core.title;
};

export const getAppDescription = (state: IReduxState): string => {
  return state.core && state.core.description;
};

export const getLoadingState = (state: IReduxState): boolean => {
  return state.core && state.core.isLoading;
};

export const getErrorState = (state: IReduxState): boolean => {
  return state.core && state.core.hasError;
};

export const getError = (state: IReduxState): TReduxError | undefined => {
  return state.core && state.core.error;
};

export const getOptions = (state: IReduxState): Core.ICoreOptions => {
  return state.core && state.core.options;
};

export const getSponsors = (state: IReduxState): Core.ISponsor[] | undefined => {
  const options = getOptions(state);
  return options && options.sponsors;
};

export const getMenuState = (state: IReduxState): boolean => {
  return state.core && state.core.isMenuOpen;
};

export const getPrimaryMenuFromState = (state: IReduxState): Core.IMenuItem[] => {
  return state.core && state.core.primaryMenu;
};

export const getFooterMenuFromState = (state: IReduxState): Core.IMenuItem[] => {
  return state.core && state.core.footerMenu;
};

export const getTermsMenuFromState = (state: IReduxState): Core.IMenuItem[] => {
  return state.core && state.core.termsMenu;
};

export const getSimpleMenuFromState = (state: IReduxState): Core.IMenuItem[] => {
  return state.core && state.core.simpleMenu;
};
