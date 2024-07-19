import Head from 'next/head';

import { IS_STAGING_ENV } from 'config';

const Seo = ({
  title = 'ISWAD',
  keywords = 'develop, app, ai, mobile, service, company, business',
  description = `Empower your business with ISWAD's cutting-edge AI focused development services. Our software solutions, including MVP development, web and app development, team augmentation, coaching, and advisory services, are designed to transform your vision into reality. Explore how ISWAD can elevate your business with quality content and a user-friendly experience.`,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        {IS_STAGING_ENV && <meta name="robots" content="nofollow" />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      {children}
    </>
  );
};

export default Seo;
