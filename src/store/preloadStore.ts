import {
  getCategories,
  getFeaturedWords,
  getFooterMenu,
  getPrimaryMenu,
  getSimpleMenu,
  getSiteMeta,
  getTags,
  getTermsMenu,
  getWordCategories,
  getWordTags,
  setAppError,
  setInitialFetch
} from './rootActions';

export const preloadStore = async (store: any): Promise<void> => {
  const { dispatch } = store;

  try {
    await Promise.all([
      dispatch(getSiteMeta()),
      dispatch(getPrimaryMenu()),
      dispatch(getSimpleMenu()),
      dispatch(getTermsMenu()),
      dispatch(getFooterMenu()),
      dispatch(getCategories()),
      dispatch(getTags()),
      dispatch(getWordCategories()),
      dispatch(getWordTags()),
      dispatch(getFeaturedWords())
    ]);
    await dispatch(setInitialFetch(true));

  } catch (e) {
    await dispatch(setAppError(true));
    await dispatch(setInitialFetch(false));
  }
};
