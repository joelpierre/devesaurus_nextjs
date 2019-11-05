import { IPostStoreState } from './reducer';

const postTransform = (data): IPostStoreState => {
  delete data.permalink;
  delete data.author_id;
  delete data.author_nicename;
  delete data.category_ids;
  delete data.category_names;
  delete data.tag_ids;
  delete data.tag_names;

  return data;
};

export default postTransform;