import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import Label from '@jpp/atoms/Label/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

import styles from '../LabelCloud.scss';

interface ITagCloud {
  className?: string;
  items?: any[];
}

const TagCloud: FunctionComponent<ITagCloud> = ({ className, items }) => (
  <ul
    data-test="component-tag-cloud"
    className={classNames(styles['label-cloud'], className)}
  >
    {items && items.map(({ id, slug, name }) => (
      <li
        data-test="tag-cloud-item"
        key={id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          className={styles['label-cloud__label']}
          link={'/tag/' + slug}
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

export default TagCloud;
