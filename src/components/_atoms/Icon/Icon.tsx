import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { EIconType, TIconProps } from '@jpp/atoms/Icon/utils/types';
import IconComponents from '@jpp/atoms/Icon/utils/inline';
import IconUrls from '@jpp/atoms/Icon/utils/external';

const Icon = (type: EIconType) => ({ className, inline, ...rest }: TIconProps): JSX.Element => {

  const classes = classNames('Icon', className);

  if (inline) {
    const Component = IconComponents[type];

    return (
      <Component className={classes}/>
    );
  }

  return (
    // @ts-ignore
    <img src={IconUrls[type]} className={classes} {...rest} />
  );
};

const Icons: Record<EIconType, FunctionComponent<TIconProps>> = {
  [EIconType.ChevronLeft]: Icon(EIconType.ChevronLeft),
  [EIconType.ChevronRight]: Icon(EIconType.ChevronRight),
  [EIconType.Logo]: Icon(EIconType.Logo),
  [EIconType.LogoDark]: Icon(EIconType.LogoDark),
  [EIconType.LogoCharacter]: Icon(EIconType.LogoCharacter),
  [EIconType.LogoCharacterDark]: Icon(EIconType.LogoCharacterDark),
  [EIconType.LogoSymbol]: Icon(EIconType.LogoSymbol),
  [EIconType.LogoSymbolDark]: Icon(EIconType.LogoSymbolDark),
  [EIconType.LogoSocial]: Icon(EIconType.LogoSocial),
  [EIconType.LogoSocialDark]: Icon(EIconType.LogoSocialDark),
  [EIconType.LogoText]: Icon(EIconType.LogoText),
  [EIconType.LogoTextDark]: Icon(EIconType.LogoTextDark)
};

export default Icons;
