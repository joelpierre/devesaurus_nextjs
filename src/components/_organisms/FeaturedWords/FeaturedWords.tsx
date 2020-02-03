import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Settings } from 'react-slick';
import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { TFuncVoid } from '@jpp/typings/index';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';
import { Heading } from '@jpp/components/_shared/Heading/Heading';
import Carousel from '@jpp/molecules/Carousel/Carousel';
import WordCard from '@jpp/molecules/WordCard/WordCard';
import { Button } from '@jpp/molecules/Buttons/Button';
import Icons from '@jpp/atoms/Icon/Icon';
import { CarouselNextArrow, CarouselPrevArrow } from '@jpp/molecules/Carousel/components/CarouselArrows';
import { TWordsStoreState } from '../../../store/words/reducer';

import styles from './FeaturedWords.scss';

export interface IStoreFeaturedWords {
  featuredWords: TWordsStoreState;
}

export interface IDispatchFeaturedWords {
  onGetFeaturedWords: TFuncVoid;
  onClearFeaturedWords: TFuncVoid;
}

type TFeaturedWords = Core.IAcfComponent & IStoreFeaturedWords & IDispatchFeaturedWords;

const carouselSettings: Settings = {
  dots: false,
  speed: 500,
  className: styles.FeaturedWords__slider,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselPrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export class FeaturedWords extends PureComponent<TFeaturedWords> {
  componentDidMount(): void {
    this.props.onGetFeaturedWords();
  }

  componentWillUnmount(): void {
    this.props.onClearFeaturedWords();
  }

  render() {
    const { className, heading, copy, featuredWords } = this.props;

    if (!Array.isArray(featuredWords)) {
      return null;
    }

    const featuredWordsLength = featuredWords && featuredWords.length > 0;

    return (
      <Section
        className={
          classNames(styles.FeaturedWords, className, {
            [styles['FeaturedWords--is-loaded']]: featuredWordsLength
          })
        }
        theme={'gradient-brand'}
      >
        <Container fluid={false}>
          <Row>
            <Flex col={6}>
              {heading && (
                <Heading priority={2} className={styles.FeaturedWords__heading}>
                  {heading}
                </Heading>
              )}

              {copy && (
                <p className={styles.FeaturedWords__copy}>
                  {copy}
                </p>
              )}
            </Flex>
          </Row>

          {featuredWordsLength && (
            <>
              <Row>
                <Flex col={12}>
                  <Carousel settings={carouselSettings}>
                    {featuredWords.map((word) => (
                      <div className={styles['FeaturedWords__word-card']}>
                        <WordCard key={word.slug} word={word} />
                      </div>
                    ))}
                  </Carousel>
                </Flex>
              </Row>

              <Row className={classNames('mt-4')}>
                <Flex col={12}>
                  <Button
                    behaviour={'router'}
                    link={'devinitions'}
                    className={classNames('mb-0', styles.FeaturedWords__button)}
                  >
                    View all word categories

                    <Icons.ChevronRight className={styles['FeaturedWords__button-icon']} />
                  </Button>
                </Flex>
              </Row>
            </>
          )}

        </Container>
      </Section>
    );
  }
}
