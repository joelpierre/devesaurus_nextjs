import React, { FunctionComponent } from 'react';

import { ELayout } from '@jpp/typings/enums';

import ErrorPage from '../../../pages/_error';
import BasicLayout from '../../layouts/Basic';
import CoreLayout from '../../layouts/Core';
import { APP_TITLE, SITE_DESCRIPTION } from '../constants';

interface IPageHandlerProps {
  className?: string;
  title?: string;
  description?: string;
  layout?: ELayout;
}

type TPageHandler = IPageHandlerProps & any;

export const PageHandler: FunctionComponent<TPageHandler> = ({
  layout = ELayout.Core,
  title,
  description,
  children,
  ...props
}) => {
  const { error } = props;
  const LayoutComponent = layout === ELayout.Basic ? BasicLayout : CoreLayout;

  const defaultProps = {
    title: title || APP_TITLE,
    description: `${APP_TITLE} - ${description || SITE_DESCRIPTION}`,
  };

  if (error) {
    return <ErrorPage {...error} />;
  }

  return <LayoutComponent {...defaultProps}>{children}</LayoutComponent>;
};
