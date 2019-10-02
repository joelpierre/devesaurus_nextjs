import { EIconType } from '@jpp/atoms/Icon/utils/types';

const IconUrls: Record<EIconType, string> = {
  [EIconType.ChevronLeft]: require('../../../../assets/svg/dev-chevron-left.svg'),
  [EIconType.ChevronRight]: require('../../../../assets/svg/dev-chevron-right.svg'),
  [EIconType.Logo]: require('../../../../assets/svg/logo.svg'),
  [EIconType.LogoDark]: require('../../../../assets/svg/logo-inv.svg'),
  [EIconType.LogoCharacter]: require('../../../../assets/svg/logo-character.svg'),
  [EIconType.LogoCharacterDark]: require('../../../../assets/svg/logo-character-inv.svg'),
  [EIconType.LogoSocial]: require('../../../../assets/svg/logo-social.svg'),
  [EIconType.LogoSocialDark]: require('../../../../assets/svg/logo-social-inv.svg'),
  [EIconType.LogoSymbol]: require('../../../../assets/svg/logo-symbol.svg'),
  [EIconType.LogoSymbolDark]: require('../../../../assets/svg/logo-symbol-inv.svg'),
  [EIconType.LogoText]: require('../../../../assets/svg/logo-text.svg'),
  [EIconType.LogoTextDark]: require('../../../../assets/svg/logo-text-inv.svg')
};

export default IconUrls;
