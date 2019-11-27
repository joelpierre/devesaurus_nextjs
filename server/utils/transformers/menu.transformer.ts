export interface IMenuAPIState extends Core.IMenuItem {
  ID: number;
  menu_order: number;
  target: string;
}

const menuItemTransform = (menuItem: IMenuAPIState): Core.IMenuItem => {
  delete menuItem.ID;
  delete menuItem.menu_order;
  delete menuItem.target;

  return menuItem;
};

export const menuTransform = (menu: IMenuAPIState[]): Core.IMenuItem[] => {
  return menu.map(menuItem => {
    return menuItemTransform(menuItem);
  });
};

export default menuTransform;
