import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from '@jpp/atoms/Label/Label';
import { TCategoryStoreState } from '../../../store/categories/reducer';
import { TTagStoreState } from '../../../store/tags/reducer';
import { TWordCategoryStoreState } from '../../../store/word_categories/reducer';
import { TWordTagStoreState } from '../../../store/word_tags/reducer';
import { getTaxonomySlug, mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils/index';
import { ETaxonomy } from '@jpp/typings/enums';

import styles from './LabelCloud.scss';

export interface ILabelCloudProps {
  className?: string;
  taxonomy?: ETaxonomy;
}

export interface IStoreLabelCloudProps {
  word_categories: TWordCategoryStoreState;
  word_tags: TWordTagStoreState;
  categories: TCategoryStoreState;
  tags: TTagStoreState;
}

type TLabelCloud = ILabelCloudProps & IStoreLabelCloudProps;

export const LabelCloud: FunctionComponent<TLabelCloud> = (
  {
    className,
    taxonomy = ETaxonomy.WordCategory,
    word_categories,
    word_tags,
    categories,
    tags
  }
) => {
  let items;

  switch (taxonomy) {
    case ETaxonomy.Category:
      items = categories;
      break;
    case ETaxonomy.PostTag:
      items = tags;
      break;
    case ETaxonomy.WordTag:
      items = word_tags;
      break;
    default:
    case ETaxonomy.WordCategory:
      items = word_categories;
      break;
  }

  if (!items || items && items.length === 0) {
    return null;
  }

  items = items.splice(0, 10);

  return (
    <nav className={classNames(styles.LabelCloud, styles[`LabelCloud--${taxonomy}`])}>
      <ul
        className={classNames(styles.LabelCloud__list, className)}
      >
        {items && items.map(({ slug, id, name }) => (
          <li
            key={id}
            className={classNames(styles.LabelCloud__item)}
          >
            <Label
              className={styles.LabelCloud__label}
              link={`/${getTaxonomySlug(taxonomy)}/${slug}`}
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
