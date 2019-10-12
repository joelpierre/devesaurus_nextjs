import React, { FunctionComponent, ReactText } from 'react';
import classNames from 'classnames';

import styles from './Pagination.module.scss';
import Section from 'src/components/grid/Section/Section';
import Container from 'src/components/grid/Container/Container';
import Row from 'src/components/grid/Row/Row';
import Flex from 'src/components/grid/Flex/Flex';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const pages = [];

  let start = currentPage - 2;
  let end = currentPage + 2;

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

const Pagination: FunctionComponent<IPaginationProps> = (
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
                        styles[`pagination__item`],
                      ]
                    )
                  }
                >
                  {currentPage > 1 && (
                    <Link
                      to={getUrlForPage(location, currentPage - 1)}
                      aria-label="Previous"
                      data-test="prev-btn"
                      className={classNames(
                        styles[`pagination__btn`],
                        styles[`pagination__prev-btn`],
                        styles[`pagination__prev-text`]
                      )}
                    >
                      Previous
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
                                styles[`pagination__item`],
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
                                styles[`pagination__item`],
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
                                  styles[`pagination__active`],
                                ]
                              )
                            }
                          >
                            <FontAwesomeIcon className={styles.paginationActiveIcon} icon={['far', 'arrow-up']}/>
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
                                styles[`pagination__item`],
                              ]
                            )
                          }
                        >
                          <Link
                            to={getUrlForPage(location, page)} key={page}
                            data-test="page-btn"
                            className={
                              classNames(
                                [
                                  styles[`pagination__btn`],
                                  {
                                    [styles[`pagination__active`]]: currentPage === page,
                                  },
                                ]
                              )
                            }
                          >
                            {page}
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
                        styles[`pagination__item`],
                      ]
                    )
                  }
                >
                  {currentPage < totalPages && (
                    <Link
                      to={getUrlForPage(location, currentPage + 1)}
                      role="button"
                      aria-label="Next"
                      className={classNames(
                        styles[`pagination__btn`],
                        styles[`pagination__next-btn`],
                        styles[`pagination__next-text`]
                      )}
                      data-test="next-btn"
                    >
                      Next
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

export default Pagination;
