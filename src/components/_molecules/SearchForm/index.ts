import { connect } from 'react-redux';
import { IDispatchSearchFormProps, ISearchFormProps, SearchForm } from '@jpp/molecules/SearchForm/SearchForm';
import { getPostsSearch, getWordsSearch } from '../../../store/rootActions';

const mapDispatchToProps: IDispatchSearchFormProps = {
  onWordSearch: getWordsSearch,
  onPostSearch: getPostsSearch
};

export default connect<never, IDispatchSearchFormProps, ISearchFormProps>(
  null,
  mapDispatchToProps
)(SearchForm);
