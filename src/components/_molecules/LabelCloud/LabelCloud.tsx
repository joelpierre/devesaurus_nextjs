import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from '@jpp/atoms/Label/Label';
import React, { FunctionComponent, memo } from 'react';
import classNames from 'classnames';
import { TCategoriesStoreState } from '../../../store/categories/reducer';
import { TTagsStoreState } from '../../../store/tags/reducer';
import { TWordCategoriesStoreState } from '../../../store/word_categories/reducer';
import { TWordTagsStoreState } from '../../../store/word_tags/reducer';
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

type TLabelCloud = ILabelCloudProps & IStoreLabelCloudProps;

export const LabelCloud: FunctionComponent<TLabelCloud> = (
  {
    className,
    taxonomy,
    word_categories,
    word_tags,
    categories,
    tags
  }
) => {
  const getItems = () => {
    switch (taxonomy) {
      case ETaxonomy.Category:
        return categories;
      case ETaxonomy.PostTag:
        return tags;
      case ETaxonomy.WordTag:
        return word_tags;
      default:
      case ETaxonomy.WordCategory:
        return word_categories;
    }
  };

  const items: any = getItems();

  if (!items || items && Array.isArray(items) && items.length === 0) {
    return null;
  }

  const splicedItems = items.splice(0, 10);

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
          },
          index
        ) => (
          <li
            key={`${slug}_${index}`}
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
        ))}
      </ul>
    </nav>
  );
};

export default memo(LabelCloud);
