import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './WordCard.scss';
import Link from 'next/link';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils';
import { Label } from '@jpp/atoms/Label/Label';

interface IWordCard {
  title: string;
  slug: string;
  className?: string;
  contrast?: boolean;
  acf: any;
  tags: any[];
  category: any;
}

class WordCard extends PureComponent<IWordCard> {
  render() {
    const {
      title,
      slug,
      className,
      contrast = false,
      acf = {},
      tags,
      category
    } = this.props;

    return (
      <section
        className={classNames([
          styles['word-card'],
          className,
          {
            'theme--tint-alpha': !contrast,
            'theme--tint-beta': contrast
          }
        ])}
      >
        {category && (
          <div
            data-test="word-card-category"
            className={classNames(
              styles['word-card__category'],
              styles[`word-card--theme--${mapTaxonomyTheme(category.slug)}`]
            )}
          >
            <Link
              href={`/devinitions/category/[slug]`}
              as={`/devinitions/category/${category.slug}`}
            >
              <a
                className={styles['word-card__category-link']}
              >
              <span className={styles['word-card__category-text']}>
                {category.name}
              </span>

                <span className={styles['word-card__category-icon']}>
                <FontAwesomeIcon icon={mapTaxonomyIcon(category.slug)}/>
              </span>
              </a>
            </Link>
          </div>
        )}

        <Link
          href={`/devinition/[slug]`}
          as={`/devinition/${slug}`}
        >
          <a
            className={styles['word-card__link']}
          >
            <span className={styles['word-card__link-text']}>{title}</span>
          </a>
        </Link>

        <header
          className={styles['word-card__header']}
        >
          <Heading
            priority="3"
            data-test="word-card-heading"
            className={styles['word-card__heading']}
          >
            {title}
          </Heading>
        </header>

        {acf && (
          <div data-test="word-card-body" className={styles['word-card__body']}>
            <p className={styles['word-card__copy']}>
              <strong>Origin:</strong> {acf.origin.label} ({acf.origin.value})
            </p>
            <p className={styles['word-card__copy']}>
              <strong>Pronunciation:</strong> {acf.pronunciation}
            </p>
          </div>
        )}

        <footer className={classNames(styles['word-card__footer'])}>
          {tags && (
            <div className={styles['word-card__tags']}>
              {tags.map((tag, index) => {
                if (index <= 2) {
                  return (
                    <Label
                      data-test="word-card-tag"
                      className={styles['word-card__label']}
                      key={tag.slug}
                      as={`/devinitions/tag/${tag.slug}`}
                      link={`/devinitions/tag/${tag.slug}`}
                      theme={mapTaxonomyTheme(tag.slug)}
                    >
                      <FontAwesomeIcon
                        icon={mapTaxonomyIcon(tag.slug)}
                        className={styles['word-card__icon']}
                      />
                      {tag.name}
                    </Label>
                  );
                }

                return null;
              })}
            </div>
          )}
        </footer>
      </section>
    );
  }
}

export default WordCard;
