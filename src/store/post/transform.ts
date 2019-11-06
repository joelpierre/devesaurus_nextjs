import { IPostStoreState } from './reducer';

interface IPostAPIState extends IPostStoreState {
  permalink: string;
  author_id: number;
  author_nicename: string;
  category_ids: number[];
  category_names: string[];
  tag_ids: number[];
  tag_names: string[];
  terms: Core.ITaxonomyTerm[];
}

export const postTransform = (data: IPostAPIState): IPostStoreState => {
  delete data.permalink;
  delete data.author_id;
  delete data.author_nicename;
  delete data.category_ids;
  delete data.category_names;
  delete data.tag_ids;
  delete data.tag_names;

  data.categories = data.terms.filter((term: Core.ITaxonomyTerm) => {
    return term.taxonomy === Core.ETaxonomy.Category;
  });

  data.tags = data.terms.filter((term: Core.ITaxonomyTerm) => {
    return term.taxonomy === Core.ETaxonomy.Tag;
  });

  return data;
};

export const postsTransform = (posts: IPostAPIState[]): IPostStoreState[] => {
  return posts.map(post => {
    return postTransform(post);
  });
};
