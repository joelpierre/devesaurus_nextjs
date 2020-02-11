import { connect } from 'react-redux';
import { FeaturedWordsList, IFeaturedWordsListProps, IStoreFeaturedWordsListProps } from './FeaturedWordsList';
import { IReduxState } from '../../../store/createStore';
import { getFeaturedWordsFromState } from '../../../store/words/selectors';

const mapStateToProps = (state: IReduxState): IStoreFeaturedWordsListProps => ({
  featuredWords: getFeaturedWordsFromState(state)
});

export default connect<IStoreFeaturedWordsListProps, never, IFeaturedWordsListProps>(
  mapStateToProps
)(FeaturedWordsList);
