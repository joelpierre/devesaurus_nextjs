import { connect } from 'react-redux';
import {
  IDispatchPrimaryHeaderProps,
  IPrimaryHeaderProps,
  PrimaryHeader
} from '@jpp/components/_shared/PrimaryHeader/PrimaryHeader';
import { getWordsSearch } from '../../../store/search/words/actions';

const mapDispatchToProps = {
  onWordSearch: (searchTerm: string) => getWordsSearch(searchTerm)
};

export default connect<never, IDispatchPrimaryHeaderProps, IPrimaryHeaderProps>(
  null, mapDispatchToProps
)(PrimaryHeader);
