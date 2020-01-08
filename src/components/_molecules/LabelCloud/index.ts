import { ILabelCloudProps, IStoreLabelCloudProps, LabelCloud } from '@jpp/molecules/LabelCloud/LabelCloud';
import { connect } from 'react-redux';
import { IReduxState } from '../../../store/createStore';

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

export default connect<IStoreLabelCloudProps, never, ILabelCloudProps>(mapStateToProps)(LabelCloud);
