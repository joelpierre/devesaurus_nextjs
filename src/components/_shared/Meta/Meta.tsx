import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import ConfigProvider from '../../../services/configProvider';
import { sanitizeEncodedChar } from '../../../utils';
import { APP_TITLE, SITE_DESCRIPTION } from '../../../utils/constants';

interface IMetaProps {
  description: string;
  meta?: Array<Partial<Core.IMetaTag>>;
  keywords?: string[];
  title: string;
  ogType?: string;
}

export const Meta: FunctionComponent<IMetaProps> = (
  {
    description,
    meta = [],
    keywords = [],
    title,
    ogType = 'website'
  }
) => {
  const metaDescription = description || SITE_DESCRIPTION;
  const pageTitle = title ? sanitizeEncodedChar(title) : sanitizeEncodedChar(APP_TITLE);
  const siteTitle = sanitizeEncodedChar(ConfigProvider.getValue('SITE_TITLE'));
  const siteAuthor = sanitizeEncodedChar(ConfigProvider.getValue('SITE_AUTHOR'));
  const siteKeywords = ConfigProvider.getValue('APP_KEYWORDS');

  const defaultKeywordsMetaTag: Partial<Core.IMetaTag> = {
    name: 'keywords',
    content: keywords.length > 0 ? keywords.join(`, `) : siteKeywords.split(',').join(`, `)
  };

  const defaultMetaTags: Array<Partial<Core.IMetaTag>> = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: ogType
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: siteAuthor
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    {
      ...defaultKeywordsMetaTag
    }
  ];

  const metaTags: Array<Partial<Core.IMetaTag>> = [
    ...defaultMetaTags,
    ...meta
  ];

  return (
    <Head>
      <title>{`${pageTitle} | ${siteTitle}`}</title>
      {metaTags.map((metaTag: Core.IMetaTag, index) => (
        <meta key={index} name={metaTag.name} property={metaTag.property} content={metaTag.content} />
      ))}
    </Head>
  );
};
