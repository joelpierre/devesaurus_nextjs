import { IPostStoreState } from '../../../src/store/post/reducer';
import { ETaxonomy } from '../../../src/typings/enums';

export interface IPostAPIState extends IPostStoreState {
  permalink: string;
  author_id: number;
  author_nicename: string;
  category_ids: number[];
  category_names: string[];
  tag_ids: number[];
  tag_names: string[];
  terms: Core.ITaxonomyTerm[];
}

export const postTransform = (post: IPostAPIState): IPostStoreState => {
  delete post.permalink;
  delete post.author_id;
  delete post.author_nicename;
  delete post.category_ids;
  delete post.category_names;
  delete post.tag_ids;
  delete post.tag_names;

  if (post.terms) {
    post.categories = post.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.Category;
    });

    post.tags = post.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.PostTag;
    });
  }

  return post;
};

export default postTransform;
