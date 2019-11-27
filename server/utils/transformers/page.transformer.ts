import { IPageStoreState } from '../../../src/store/page/reducer';

export interface IPageAPIState extends IPageStoreState {
  permalink: string;
  author_id: string;
  author_nicename: string;
  category_ids: string[];
  category_names: string[];
  tag_ids: string[];
  tag_names: string[];
}

const pageTransform = (page: IPageAPIState): IPageStoreState => {
  delete page.permalink;
  delete page.author_id;
  delete page.author_nicename;
  delete page.category_ids;
  delete page.category_names;
  delete page.tag_ids;
  delete page.tag_names;

  return page;
};

export default pageTransform;
