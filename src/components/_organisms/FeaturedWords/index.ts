import { connect } from 'react-redux';
import { FeaturedWords, IDispatchFeaturedWords, IStoreFeaturedWords } from '@jpp/organisms/FeaturedWords/FeaturedWords';
import { IReduxState } from '../../../store/createStore';
import { getFeaturedWordsFromState } from '../../../store/words/selectors';
import { clearFeaturedWords, getFeaturedWords } from '../../../store/words/actions';

const mapStateToProps = (state: IReduxState): IStoreFeaturedWords => ({
  featuredWords: getFeaturedWordsFromState(state)
});

const mapDispatchToProps: IDispatchFeaturedWords = {
  onGetFeaturedWords: getFeaturedWords,
  onClearFeaturedWords: clearFeaturedWords
};

export default connect<IStoreFeaturedWords, IDispatchFeaturedWords, Core.IAcfComponent>(
  mapStateToProps, mapDispatchToProps
)(FeaturedWords);
