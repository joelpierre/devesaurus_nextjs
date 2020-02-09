import { connect } from 'react-redux';
import { IStoreSponsorsProps, Sponsors, TSponsors } from './Sponsors';
import { IReduxState } from '../../../store/createStore';
import { getSponsors } from '../../../store/core/selectors';

const mapStateToProps = (state: IReduxState): IStoreSponsorsProps => ({
  sponsors: getSponsors(state) || []
});

export default connect<IStoreSponsorsProps, never, TSponsors>(mapStateToProps)(Sponsors);
