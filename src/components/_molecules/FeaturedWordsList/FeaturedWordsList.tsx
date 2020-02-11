import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './FeaturedWordsList.scss';
import { IWordStoreState } from '../../../store/word/reducer';
import AnchorLink from '@jpp/atoms/AnchorLink/AnchorLink';
import { EPageType } from '@jpp/typings/enums';

export interface IFeaturedWordsListProps {
  className?: string;
}

export interface IStoreFeaturedWordsListProps {
  featuredWords: IWordStoreState[];
}

type TFeaturedWordsList = IFeaturedWordsListProps & IStoreFeaturedWordsListProps;

export const FeaturedWordsList: FunctionComponent<TFeaturedWordsList> = (
  { className, featuredWords }
) => (
  <section
    className={classNames(className, styles.FeaturedWordList)}
  >
    <ul
      className={classNames(styles.FeaturedWordList__list)}
    >
      {featuredWords.map((word) => {
        return (
          <li
            key={word.id}
            className={classNames(styles.FeaturedWordList__item)}
          >
            <AnchorLink
              pageType={EPageType.Devinition}
              link={word.slug}
              className={classNames(styles.FeaturedWordList__link)}
            >
              {word.title}
            </AnchorLink>
          </li>
        );
      })}
    </ul>
  </section>
);
