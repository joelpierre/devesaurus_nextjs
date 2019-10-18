import { IReduxState } from '../store/createStore';
import { connect } from 'react-redux';
import SocialMenu from '@jpp/organisms/SocialMenu/SocialMenu';

const mapStateToProps = (
  {
    core: {
      options: {
        facebook,
        twitter,
        linkedin,
        instagram,
        youtube
      }
    }
  }: IReduxState
) => ({
  facebook,
  twitter,
  linkedin,
  instagram,
  youtube
});

export default connect(mapStateToProps)(SocialMenu);
