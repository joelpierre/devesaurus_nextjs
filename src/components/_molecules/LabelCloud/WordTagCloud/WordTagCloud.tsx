import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Label } from '@jpp/atoms/Label/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../../utils';

import styles from '../LabelCloud.scss';

interface IWordTagCloud {
  className?: string;
  items?: any[];
}

const WordTagCloud: FunctionComponent<IWordTagCloud> = ({ className, items }) => (
  <ul
    data-test="component-word-tag-cloud"
    className={classNames(styles['label-cloud'], className)}
  >
    {items && items.map(({ node }) => (
      <li
        data-test="word-tag-cloud-item"
        key={node.id}
        className={classNames(styles['label-cloud__item'])}
      >
        <Label
          className={styles['label-cloud__label']}
          link={'/devinitions/tag/' + node.slug}
          theme={mapTaxonomyTheme(node.slug)}
        >
          <FontAwesomeIcon
            icon={mapTaxonomyIcon(node.slug)}
            className={styles['label-cloud__icon']}
          />
          {node.name}
        </Label>
      </li>
    ))}
  </ul>
);

export default WordTagCloud;
