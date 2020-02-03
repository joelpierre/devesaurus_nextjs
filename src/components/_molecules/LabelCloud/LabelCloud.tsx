import { TFuncVoid } from '@jpp/typings/index';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from '@jpp/atoms/Label/Label';
import classNames from 'classnames';
import { TCategoriesStoreState } from '../../../store/categories/reducer';
import { ITagStoreState, TTagsStoreState } from '../../../store/tags/reducer';
import { IWordStoreState } from '../../../store/word/reducer';
import { IWordCategoryStoreState, TWordCategoriesStoreState } from '../../../store/word_categories/reducer';
import { IWordTagStoreState, TWordTagsStoreState } from '../../../store/word_tags/reducer';
import { ETaxonomy } from '@jpp/typings/enums';
import { getTaxonomySlug, mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils/index';

import styles from './LabelCloud.scss';

export interface ILabelCloudProps {
  className?: string;
  taxonomy: ETaxonomy;
}

export interface IStoreLabelCloudProps {
  word_categories: TWordCategoriesStoreState;
  word_tags: TWordTagsStoreState;
  categories: TCategoriesStoreState;
  tags: TTagsStoreState;
}

export interface IDispatchLabelCloudProps {
  onGetWordCategories: TFuncVoid;
  onGetWordTags: TFuncVoid;
  onGetTags: TFuncVoid;
  onGetCategories: TFuncVoid;
  onClearWordCategories: TFuncVoid;
  onClearWordTags: TFuncVoid;
  onClearTags: TFuncVoid;
  onClearCategories: TFuncVoid;
}

type TLabelCloud = ILabelCloudProps & IStoreLabelCloudProps & IDispatchLabelCloudProps;

export class LabelCloud extends PureComponent<TLabelCloud> {

  componentDidMount(): void {
    const { taxonomy, onGetCategories, onGetWordCategories, onGetTags, onGetWordTags } = this.props;

    switch (taxonomy) {
      case ETaxonomy.Category:
        return onGetCategories();
      case ETaxonomy.PostTag:
        return onGetTags();
      case ETaxonomy.WordTag:
        return onGetWordTags();
      default:
      case ETaxonomy.WordCategory:
        return onGetWordCategories();
    }
  }

  componentWillUnmount(): void {
    const { taxonomy, onClearCategories, onClearTags, onClearWordCategories, onClearWordTags } = this.props;

    switch (taxonomy) {
      case ETaxonomy.Category:
        return onClearCategories();
      case ETaxonomy.PostTag:
        return onClearTags();
      case ETaxonomy.WordTag:
        return onClearWordTags();
      default:
      case ETaxonomy.WordCategory:
        return onClearWordCategories();
    }
  }

  get items(): any[] {
    const { taxonomy, categories, word_tags, word_categories, tags } = this.props;

    switch (taxonomy) {
      case ETaxonomy.Category:
        return categories as unknown as IWordStoreState[];
      case ETaxonomy.PostTag:
        return tags as unknown as ITagStoreState[];
      case ETaxonomy.WordTag:
        return word_tags as unknown as IWordTagStoreState[];
      default:
      case ETaxonomy.WordCategory:
        return word_categories as unknown as IWordCategoryStoreState[];
    }
  }

  render() {
    const { className, taxonomy } = this.props;

    const splicedItems = this.items.splice(0, 10);

    if (!this.items || this.items && Array.isArray(this.items) && this.items.length === 0) {
      return null;
    }

    return (
      <nav className={classNames(styles.LabelCloud, styles[`LabelCloud--${taxonomy}`])}>
        <ul
          className={classNames(styles.LabelCloud__list, className)}
        >
          {splicedItems && splicedItems.map((
            {
              slug,
              id,
              name,
              taxonomy: itemTaxonomy
            }
            ) => (
              <li
                key={id}
                className={classNames(styles.LabelCloud__item)}
              >
                <Label
                  taxonomy={itemTaxonomy}
                  className={styles.LabelCloud__label}
                  link={`${getTaxonomySlug(taxonomy)}/${slug}`}
                  theme={mapTaxonomyTheme(slug)}
                >
                  <FontAwesomeIcon
                    icon={mapTaxonomyIcon(slug)}
                    className={styles.LabelCloud__icon}
                  />
                  {name}
                </Label>
              </li>
            )
          )}
        </ul>
      </nav>
    );
  }
}
