import {
  getFooterMenu,
  getPrimaryMenu,
  getSiteMeta,
  getTermsMenu,
  setAppError,
  setAppLoading,
  setInitialFetch
} from '../rootActions';

const preloadPageContent = async (store: any): Promise<void> => {
  const { dispatch } = store;

  try {
    await dispatch(getSiteMeta());
    await dispatch(getPrimaryMenu());
    await dispatch(getTermsMenu());
    await dispatch(getFooterMenu());
    await dispatch(setAppError(false));
    await dispatch(setAppLoading(false));
    await dispatch(setInitialFetch(true));
    await Promise.resolve();
  } catch (e) {
    await dispatch(setAppError(true));
    await dispatch(setInitialFetch(false));
    await Promise.reject(e);
  }
};

export default preloadPageContent;
