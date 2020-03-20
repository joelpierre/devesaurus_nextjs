import { connect } from 'react-redux';

import {
  ISocialMenuProps,
  IStoreSocialMenuProps,
  SocialMenu,
} from '@jpp/organisms/SocialMenu/SocialMenu';

import { IReduxState } from '../../../store/createStore';

const mapStateToProps = ({
  core: {
    options: { facebook, twitter, linkedin, instagram, youtube },
  },
}: IReduxState): IStoreSocialMenuProps => ({
  facebook,
  twitter,
  linkedin,
  instagram,
  youtube,
});

export default connect<IStoreSocialMenuProps, never, ISocialMenuProps>(
  mapStateToProps
)(SocialMenu);
