import { IWordStoreState } from '../../../src/store/word/reducer';
import { ETaxonomy } from '../../../src/typings/enums';

export interface IWordAPIState extends IWordStoreState {
  permalink: string;
  author_id: number;
  author_nicename: string;
  category_ids: number[];
  category_names: string[];
  tag_ids: number[];
  tag_names: string[];
  terms: Core.ITaxonomyTerm[];
}

export const wordTransform = (word: IWordAPIState): IWordStoreState => {
  delete word.permalink;
  delete word.author_id;
  delete word.author_nicename;
  delete word.category_ids;
  delete word.category_names;
  delete word.tag_ids;
  delete word.tag_names;

  if (word.terms) {
    word.word_categories = word.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.WordCategory;
    });

    word.word_tags = word.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.WordTag;
    });
  }

  return word;
};

export default wordTransform;
