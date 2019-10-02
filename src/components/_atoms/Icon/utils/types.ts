import { ImgHTMLAttributes } from 'react';

export type TIconProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  inline?: boolean;
};

export enum EIconType {
  ChevronLeft = 'ChevronLeft',
  ChevronRight = 'ChevronRight',
  Logo = 'Logo',
  LogoDark = 'LogoDark',
  LogoCharacter = 'LogoCharacter',
  LogoCharacterDark = 'LogoCharacterDark',
  LogoSocial = 'LogoSocial',
  LogoSocialDark = 'LogoSocialDark',
  LogoSymbol = 'LogoSymbol',
  LogoSymbolDark = 'LogoSymbolDark',
  LogoText = 'LogoText',
  LogoTextDark = 'LogoTextDark'
}

export enum EIconTheme {
  Light = 'Light',
  Dark = 'Dark'
}
