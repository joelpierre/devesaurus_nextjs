import {
  getFooterMenu,
  getPrimaryMenu,
  getSimpleMenu,
  getSiteMeta,
  getTermsMenu,
  setAppError,
  setInitialFetch
} from './rootActions';

export const preloadStore = async (store: any): Promise<void> => {
  const { dispatch } = store;

  try {
    await dispatch(getSiteMeta());
    await dispatch(getPrimaryMenu());
    await dispatch(getSimpleMenu());
    await dispatch(getTermsMenu());
    await dispatch(getFooterMenu());
    await dispatch(setInitialFetch(true));
  } catch (e) {
    await dispatch(setAppError(true));
    await dispatch(setInitialFetch(false));
  }
};
