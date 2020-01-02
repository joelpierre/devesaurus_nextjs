import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from '@jpp/atoms/Label/Label';

import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

import styles from '../LabelCloud.scss';

interface ICategoryCloud {
  className?: string;
  items?: any[];
}

const CategoryCloud: FunctionComponent<ICategoryCloud> = (
  { className, items }
) => (
  <ul
    data-test="component-category-cloud"
    className={classNames(styles['label-cloud'], className)}
  >
    {items && items.map(({ slug, id, name }) => (
      <li
        data-test="category-cloud-item"
        key={id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          className={styles['label-cloud__label']}
          link={'/category/' + slug}
          theme={mapTaxonomyTheme(slug)}
        >
          <FontAwesomeIcon
            icon={mapTaxonomyIcon(slug)}
            className={styles['label-cloud__icon']}
          />
          {name}
        </Label>
      </li>
    ))}
  </ul>
);

export default CategoryCloud;
