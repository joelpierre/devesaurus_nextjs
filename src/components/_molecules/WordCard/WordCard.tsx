import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import { mapTaxonomyIcon, mapTaxonomyTheme } from '../../../utils';
import { Label } from '@jpp/atoms/Label/Label';
import { IWordStoreState } from '../../../store/word/reducer';

import styles from './WordCard.scss';

interface IWordCardProps {
  className?: string;
  word: IWordStoreState;
}

class WordCard extends PureComponent<IWordCardProps> {
  render() {
    const { className, word = {} as IWordStoreState } = this.props;
    const { title, slug, acf = {} as Core.IWordAcf, word_tags } = word;
    const { contrast, pronunciation } = acf;

    return (
      <section
        className={classNames([
          styles.WordCard,
          className,
          {
            'theme--tint-alpha': !contrast,
            'theme--tint-beta': contrast
          }
        ])}
      >
        <Link href={`/devinition/[slug]`} as={`/devinition/${slug}`}>
          <a className={styles.WordCard__link}>
            <span className={styles['WordCard__link-text']}>{title}</span>
          </a>
        </Link>

        <header
          className={styles.WordCard__header}
        >
          <Heading
            priority="3"
            className={styles.WordCard__heading}
          >
            {title}
          </Heading>
        </header>

        {(pronunciation) && (
          <div className={styles.WordCard__body}>
            {pronunciation && (
              <p className={styles.WordCard__copy}>
                <strong
                  className={classNames(styles['WordCard__copy--strong'], 'display-block')}
                >Pronunciation:&nbsp;</strong>
                {acf.pronunciation}
              </p>
            )}
          </div>
        )}

        <div className={classNames(styles.WordCard__footer)}>
          {word_tags && (
            <div className={styles.WordCard__tags}>
              {word_tags.map((tag, index) => {
                if (index <= 1) {
                  return (
                    <Label
                      className={styles.WordCard__label}
                      key={tag.slug}
                      as={`/devinitions/tag/${tag.slug}`}
                      link={`/devinitions/tag/${tag.slug}`}
                      theme={mapTaxonomyTheme(tag.slug)}
                    >
                      <FontAwesomeIcon
                        icon={mapTaxonomyIcon(tag.slug)}
                        className={styles.WordCard__icon}
                      />
                      {tag.name}
                    </Label>
                  );
                }

                return null;
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default WordCard;
