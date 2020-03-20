import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { PureComponent } from 'react';

import { Label } from '@jpp/atoms/Label/Label';
import { ETaxonomy } from '@jpp/typings/enums';
import { TTaxonomyLabel } from '@jpp/typings/index';

import ConfigProvider from '../../../services/configProvider';
import { ICategoryStoreState } from '../../../store/categories/reducer';
import { ITagStoreState } from '../../../store/tags/reducer';
import { IWordCategoryStoreState } from '../../../store/word_categories/reducer';
import { IWordTagStoreState } from '../../../store/word_tags/reducer';
import {
  getTaxonomySlug,
  mapTaxonomyIcon,
  mapTaxonomyTheme,
  mapTaxonomyToPageType,
} from '../../../utils/index';
import styles from './LabelCloud.scss';

export interface ILabelCloudProps {
  className?: string;
  taxonomy: ETaxonomy;
}

export interface IStoreLabelCloudProps {
  wordCategories: IWordCategoryStoreState[];
  wordTags: IWordTagStoreState[];
  categories: ICategoryStoreState[];
  tags: ITagStoreState[];
}

type TLabelCloud = ILabelCloudProps & IStoreLabelCloudProps;

export class LabelCloud extends PureComponent<TLabelCloud> {
  get items(): TTaxonomyLabel[] {
    const { taxonomy, categories, wordTags, wordCategories, tags } = this.props;

    let items: TTaxonomyLabel[] = [];

    switch (taxonomy) {
      case ETaxonomy.Category:
        items = categories as ICategoryStoreState[];
        break;
      case ETaxonomy.PostTag:
        items = tags as ITagStoreState[];
        break;
      case ETaxonomy.WordTag:
        items = wordTags as IWordTagStoreState[];
        break;
      default:
      case ETaxonomy.WordCategory:
        items = wordCategories as IWordCategoryStoreState[];
        break;
    }

    return items;
  }

  render() {
    const { className, taxonomy } = this.props;

    if (!this.items) {
      return null;
    }

    return (
      <nav
        className={classNames(
          styles.LabelCloud,
          styles[`LabelCloud--${taxonomy}`]
        )}
      >
        <ul className={classNames(styles.LabelCloud__list, className)}>
          {this.items.map(
            ({ slug, id, name, taxonomy: itemTaxonomy }, index) => {
              if (index > ConfigProvider.getValue('ITEMS_PER_PAGE')) {
                return null;
              }

              return (
                <li key={id} className={classNames(styles.LabelCloud__item)}>
                  <Label
                    pageType={mapTaxonomyToPageType[itemTaxonomy]}
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
              );
            }
          )}
        </ul>
      </nav>
    );
  }
}
