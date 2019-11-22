import { IReduxState } from '../store/createStore';
import { connect } from 'react-redux';
import SocialMenu, { ISocialMenuProps, IStoreSocialMenuProps } from '@jpp/organisms/SocialMenu/SocialMenu';

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
): IStoreSocialMenuProps => ({
  facebook,
  twitter,
  linkedin,
  instagram,
  youtube
});

export default connect<IStoreSocialMenuProps, never, ISocialMenuProps>(mapStateToProps)(SocialMenu);
