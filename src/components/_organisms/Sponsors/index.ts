import { connect } from 'react-redux';

import { getSponsors } from '../../../store/core/selectors';
import { IReduxState } from '../../../store/createStore';
import { IStoreSponsorsProps, Sponsors, TSponsors } from './Sponsors';

const mapStateToProps = (state: IReduxState): IStoreSponsorsProps => ({
  sponsors: getSponsors(state) || [],
});

export default connect<IStoreSponsorsProps, never, TSponsors>(mapStateToProps)(
  Sponsors
);
