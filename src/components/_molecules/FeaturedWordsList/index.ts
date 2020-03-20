import { connect } from 'react-redux';

import { IReduxState } from '../../../store/createStore';
import { getFeaturedWordsFromState } from '../../../store/words/selectors';
import {
  FeaturedWordsList,
  IFeaturedWordsListProps,
  IStoreFeaturedWordsListProps,
} from './FeaturedWordsList';

const mapStateToProps = (state: IReduxState): IStoreFeaturedWordsListProps => ({
  featuredWords: getFeaturedWordsFromState(state),
});

export default connect<
  IStoreFeaturedWordsListProps,
  never,
  IFeaturedWordsListProps
>(mapStateToProps)(FeaturedWordsList);
