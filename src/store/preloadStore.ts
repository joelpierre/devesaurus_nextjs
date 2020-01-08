import {
  getCategories,
  getFooterMenu,
  getPrimaryMenu,
  getSimpleMenu,
  getSiteMeta, getTags,
  getTermsMenu, getWordCategories, getWordTags,
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
    await dispatch(getWordCategories());
    await dispatch(getCategories());
    await dispatch(getWordTags());
    await dispatch(getTags());
    await dispatch(getWordCategories());
    await dispatch(setInitialFetch(true));
  } catch (e) {
    await dispatch(setAppError(true));
    await dispatch(setInitialFetch(false));
  }
};
