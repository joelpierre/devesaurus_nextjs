import { IWordStoreState } from './reducer';
import { ETaxonomy } from '@jpp/typings/enums';

interface IWordAPIState extends IWordStoreState {
  permalink: string;
  author_id: number;
  author_nicename: string;
  category_ids: number[];
  category_names: string[];
  tag_ids: number[];
  tag_names: string[];
  terms: Core.ITaxonomyTerm[];
}

export const wordTransform = (data: IWordAPIState): IWordStoreState => {
  delete data.permalink;
  delete data.author_id;
  delete data.author_nicename;
  delete data.category_ids;
  delete data.category_names;
  delete data.tag_ids;
  delete data.tag_names;

  if (data.terms) {
    data.word_categories = data.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.WordCategory;
    });

    data.word_tags = data.terms.filter((term: Core.ITaxonomyTerm) => {
      return term.taxonomy === ETaxonomy.WordTag;
    });
  }

  return data;
};

export const wordsTransform = (words: IWordAPIState[]): IWordStoreState[] => {
  return words.map(word => {
    return wordTransform(word);
  });
};
