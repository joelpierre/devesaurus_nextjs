import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './FeaturedWordsList.scss';

interface IFeaturedWordsList {
  className?: string;
  words: any[];
}

const FeaturedWordsList: FunctionComponent<IFeaturedWordsList> = ({ className, words }) => (
  <section
    className={classNames(className, styles.featuredWordsList)}
  >
    <ul
      className={classNames(styles.featuredWordsListList)}
    >
      {words.map(({ word }) => {
        return (
          <li
            data-test="component-pure-featured-words-list"
            key={word.id}
            className={classNames(styles['featured-words-list__item'])}
          >
            <Link
              href={`/devinition/[slug]`}
              as={`/devinition/${word.slug}`}
            >
              <a
                className={classNames(styles['featured-words-list__link'])}
              >
                {word.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default FeaturedWordsList;
