import { TFuncValueVoid } from '@jpp/typings/index';

export const handleSetMenuState = (setMenuState: TFuncValueVoid<boolean>, isMenuOpen: boolean): void => {
  setMenuState(!isMenuOpen);
};
