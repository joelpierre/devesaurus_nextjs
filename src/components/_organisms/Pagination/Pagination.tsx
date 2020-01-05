import React, { FunctionComponent, ReactText } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';

import { Section } from '@jpp/components/_shared/Grid/Section/Section';
import { Container } from '@jpp/components/_shared/Grid/Container/Container';
import { Row } from '@jpp/components/_shared/Grid/Row/Row';
import { Flex } from '@jpp/components/_shared/Grid/Flex/Flex';

import styles from './Pagination.scss';

interface IPaginationProps {
  className?: string;
  location: Location;
  totalPages: number;
  currentPage: number;
}

export const getPages = (totalPages: number, currentPage: number): ReactText[] => {
  if (totalPages <= 7) {
    return [1, 2, 3, 4, 5, 6, 7].slice(0, totalPages);
  }

  const pages: any[] = [];

  let start: number = currentPage - 2;
  let end: number = currentPage + 2;

  if (start < 2) {
    const diff = 2 - start;
    end += diff;
    start += diff;
  }

  if (end > totalPages - 1) {
    const diff = end - (totalPages - 1);
    end -= diff;
    start -= diff;
  }

  const startEllipsis = currentPage > 3;
  const endEllipsis = currentPage < totalPages - 2;

  pages.push(1);
  pages.push(startEllipsis ? '...' : start);

  for (let i = start + 1; i <= end - 1; i += 1) {
    pages.push(i);
  }

  pages.push(endEllipsis ? '...' : end);
  pages.push(totalPages);

  return pages;
};

export const getUrlForPage = (location: Location, page: string | number): string => {
  const currentPath = location.pathname;
  const currentPathArr = currentPath.split('/');
  const lastUrlSegment = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  let finalPath = currentPath;

  if (!isNaN(+lastUrlSegment)) {
    currentPathArr.splice(-1, 1);
    finalPath = currentPathArr.join('/');
  }

  if (page === 1) {
    return finalPath;
  }

  return `${finalPath}/${page}`;
};

export const Pagination: FunctionComponent<IPaginationProps> = (
  {
    className,
    totalPages,
    location,
    currentPage,
    ...props
  }
) => {
  if (location === null) {
    return null;
  }

  if (totalPages < 2) {
    return null;
  }

  const paginationPages = getPages(totalPages, currentPage);

  return (
    <Section className={classNames(styles.pagination, className)}>
      <Container fluid={false}>
        <Row>
          <Flex col={12}>
            <nav className={classNames(styles[`pagination`], className)} {...props}>
              <ul className={classNames(styles[`pagination__list`])}>
                <li
                  className={
                    classNames(
                      [
                        styles[`pagination__prev`],
                        styles[`pagination__item`]
                      ]
                    )
                  }
                >
                  {currentPage > 1 && (
                    <Link
                      href={getUrlForPage(location, currentPage - 1)}
                      aria-label="Previous"
                      data-test="prev-btn"
                    >
                      <a
                        className={classNames(
                          styles[`pagination__btn`],
                          styles[`pagination__prev-btn`],
                          styles[`pagination__prev-text`]
                        )}
                      >
                        Previous
                      </a>
                    </Link>
                  )}
                </li>

                {paginationPages.map((page: string | number, index: number) => {
                  switch (page) {
                    case '...':
                      return (
                        <li
                          className={
                            classNames(
                              [
                                styles[`pagination__pages`],
                                styles[`pagination__item`]
                              ]
                            )
                          }
                          key={index === 1 ? 'e1' : 'e2'}
                        >
                          <span
                            className={styles[`pagination__ellipsis`]}
                            data-test="ellipsis"
                          >
                    ...
                  </span>
                        </li>
                      );
                    case currentPage:
                      return (
                        <li
                          className={
                            classNames(
                              [
                                styles[`pagination__pages`],
                                styles[`pagination__item`]
                              ]
                            )
                          }
                          key={page}
                        >
                          <span
                            data-test="page-active"
                            className={
                              classNames(
                                [
                                  styles[`pagination__btn`],
                                  styles[`pagination__active`]
                                ]
                              )
                            }
                          >
                            <FontAwesomeIcon className={styles.paginationActiveIcon} icon={['far', 'arrow-up']} />
                            {page}
                          </span>
                        </li>
                      );
                    default:
                      return (
                        <li
                          key={page}
                          className={
                            classNames(
                              [
                                styles[`pagination__pages`],
                                styles[`pagination__item`]
                              ]
                            )
                          }
                        >
                          <Link
                            href={getUrlForPage(location, page)} key={page}
                            data-test="page-btn"
                          >
                            <a
                              className={
                                classNames(
                                  [
                                    styles[`pagination__btn`],
                                    {
                                      [styles[`pagination__active`]]: currentPage === page
                                    }
                                  ]
                                )
                              }
                            >
                              {page}
                            </a>
                          </Link>
                        </li>
                      );
                  }
                })}
                <li
                  className={
                    classNames(
                      [
                        styles[`pagination__next`],
                        styles[`pagination__item`]
                      ]
                    )
                  }
                >
                  {currentPage < totalPages && (
                    <Link
                      href={getUrlForPage(location, currentPage + 1)}
                      aria-label="Next"
                      data-test="next-btn"
                    >
                      <a
                        className={classNames(
                          styles[`pagination__btn`],
                          styles[`pagination__next-btn`],
                          styles[`pagination__next-text`]
                        )}
                      >
                        Next
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Flex>
        </Row>
      </Container>
    </Section>
  );
};
