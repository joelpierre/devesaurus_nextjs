import { IDispatchSearchFormProps, ISearchFormProps, SearchForm } from '@jpp/molecules/SearchForm/SearchForm';
import { connect } from 'react-redux';
import { getPostsSearch, getWordsSearch } from '../../../store/rootActions';

const mapDispatchToProps = {
  onWordSearch: (searchTerm: string) => getWordsSearch(searchTerm),
  onPostSearch: (searchTerm: string) => getPostsSearch(searchTerm)
};

export default connect<never, IDispatchSearchFormProps, ISearchFormProps>(
  null,
  mapDispatchToProps
)(SearchForm);
