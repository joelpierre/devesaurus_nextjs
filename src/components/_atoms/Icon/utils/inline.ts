import { FunctionComponent } from 'react';

import { EIconType, TIconProps } from '@jpp/atoms/Icon/utils/types';

const IconComponents: Record<EIconType, FunctionComponent<TIconProps>> = {
  [EIconType.ChevronLeft]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/dev-chevron-left.svg'),
  [EIconType.ChevronRight]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/dev-chevron-right.svg'),
  [EIconType.Logo]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo.svg'),
  [EIconType.LogoDark]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-inv.svg'),
  [EIconType.LogoCharacter]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-character.svg'),
  [EIconType.LogoCharacterDark]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-character-inv.svg'),
  [EIconType.LogoSocial]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-social.svg'),
  [EIconType.LogoSocialDark]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-social-inv.svg'),
  [EIconType.LogoSymbol]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-symbol.svg'),
  [EIconType.LogoSymbolDark]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-symbol-inv.svg'),
  [EIconType.LogoText]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-text.svg'),
  [EIconType.LogoTextDark]: require('-!svg-react-loader?props[]=class:svg!../../../../assets/svg/logo-text-inv.svg'),
};

export default IconComponents;
