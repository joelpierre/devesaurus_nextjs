export {
  getSiteMeta,
  getSiteMetaSuccess,
  getSiteMetaFailed,
  getPrimaryMenu,
  getPrimaryMenuSuccess,
  getPrimaryMenuFailed,
  getSimpleMenu,
  getSimpleMenuSuccess,
  getSimpleMenuFailed,
  getFooterMenu,
  getFooterMenuSuccess,
  getFooterMenuFailed,
  getTermsMenu,
  getTermsMenuSuccess,
  getTermsMenuFailed,
  setInitialFetch,
  setMenuState,
  setAppError,
  setAppLoading
} from './core/actions';

export {
  getPage,
  getPageSuccess,
  getPageFailed,
  clearPage
} from './page/actions';

export {
  getPost,
  getPostSuccess,
  getPostFailed,
  clearPost
} from './post/actions';

export {
  getPosts,
  getPostsSuccess,
  getPostsFailed,
  clearPosts
} from './posts/actions';

export { getTags, getTagsFailed, getTagsSuccess } from './tags/actions';

export { getCategories, getCategoriesFailed, getCategoriesSuccess } from './categories/actions';

export {
  getWord,
  getWordSuccess,
  getWordFailed,
  clearWord
} from './word/actions';

export {
  getWords,
  getCategoryWords,
  getTagWords,
  getWordsFailed,
  getWordsSuccess,
  clearWords
} from './words/actions';

export { getWordTags, getWordTagsFailed, getWordTagsSuccess } from './word_tags/actions';

export { getWordCategories, getWordCategoriesFailed, getWordCategoriesSuccess } from './word_categories/actions';
