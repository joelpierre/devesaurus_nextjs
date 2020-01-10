import {
  LabelCloud,
  IDispatchLabelCloudProps,
  ILabelCloudProps,
  IStoreLabelCloudProps
} from '@jpp/molecules/LabelCloud/LabelCloud';
import { connect } from 'react-redux';
import { clearCategories, getCategories } from '../../../store/categories/actions';
import { IReduxState } from '../../../store/createStore';
import { clearTags, getTags } from '../../../store/tags/actions';
import { clearWordCategories, getWordCategories } from '../../../store/word_categories/actions';
import { clearWordTags, getWordTags } from '../../../store/word_tags/actions';

const mapStateToProps = (
  {
    word_categories,
    word_tags,
    categories,
    tags
  }: IReduxState): IStoreLabelCloudProps => {
  return {
    word_categories,
    word_tags,
    categories,
    tags
  };
};

const mapDispatchToProps = {
  onGetWordCategories: () => getWordCategories(),
  onGetWordTags: () => getWordTags(),
  onGetTags: () => getTags(),
  onGetCategories: () => getCategories(),
  onClearWordCategories: () => clearWordCategories(),
  onClearWordTags: () => clearWordTags(),
  onClearCategories: () => clearCategories(),
  onClearTags: () => clearTags()
};

export default connect<IStoreLabelCloudProps, IDispatchLabelCloudProps, ILabelCloudProps>(
  mapStateToProps,
  mapDispatchToProps
)(LabelCloud);
