import { connect } from 'react-redux';

import {
  ILabelCloudProps,
  IStoreLabelCloudProps,
  LabelCloud,
} from '@jpp/molecules/LabelCloud/LabelCloud';

import { getCategoriesFromState } from '../../../store/categories/selectors';
import { IReduxState } from '../../../store/createStore';
import { getTagsFromState } from '../../../store/tags/selectors';
import { getWordCategoriesFromState } from '../../../store/word_categories/selectors';
import { getWordTagsFromState } from '../../../store/word_tags/selectors';

const mapStateToProps = (state: IReduxState): IStoreLabelCloudProps => {
  return {
    wordCategories: getWordCategoriesFromState(state),
    wordTags: getWordTagsFromState(state),
    categories: getCategoriesFromState(state),
    tags: getTagsFromState(state),
  };
};

export default connect<IStoreLabelCloudProps, never, ILabelCloudProps>(
  mapStateToProps
)(LabelCloud);
