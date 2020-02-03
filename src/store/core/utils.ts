import { TFuncBooleanVoid } from '@jpp/typings/index';

export const handleSetMenuState = (setMenuState: TFuncBooleanVoid, isMenuOpen: boolean): void => {
  setMenuState(!isMenuOpen);
};
