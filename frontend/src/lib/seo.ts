import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    title: seoTitle,
    description,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: seoTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
      images: [image],
      creator: '@gvsrgh',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
  };
}

export function generateArticleSEO({
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  tags = [],
}: SEOProps & {
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    ...generateSEO({ title, description, image, url }),
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title: seoTitle,
      description,
      siteName: siteConfig.name,
      publishedTime,
      modifiedTime,
      authors: [siteConfig.author.name],
      tags,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
  };
}