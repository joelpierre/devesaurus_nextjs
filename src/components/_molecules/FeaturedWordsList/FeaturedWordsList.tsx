import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import { MenuItem } from '@jpp/atoms/MenuItem/MenuItem';
import { EPageType } from '@jpp/typings/enums';

import { IWordStoreState } from '../../../store/word/reducer';
import styles from './FeaturedWordsList.scss';

export interface IFeaturedWordsListProps {
  className?: string;
}

export interface IStoreFeaturedWordsListProps {
  featuredWords: IWordStoreState[];
}

type TFeaturedWordsList = IFeaturedWordsListProps &
  IStoreFeaturedWordsListProps;

export const FeaturedWordsList: FunctionComponent<TFeaturedWordsList> = ({
  className,
  featuredWords,
}) => (
  <section className={classNames(className, styles.FeaturedWordList)}>
    <ul className={classNames(styles.FeaturedWordList__list)}>
      {featuredWords.map(({ id, title, slug }) => {
        return (
          <MenuItem
            key={id}
            className={styles.FeaturedWordList__item}
            linkClassName={styles.FeaturedWordList__link}
            title={title}
            pageType={EPageType.Devinition}
            slug={slug}
          />
        );
      })}
    </ul>
  </section>
);
