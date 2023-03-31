import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import css from './page.module.css';




const Page = ({
}) => {
  return (
    <div className={css.main}>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6536656/7922012/css/fonts.css" />
      </Head>

      <div className={css.container}>

      <img src="/images/join-our-story.png" alt="Vercel Logo" width={1080} height={1920} />

      <Link href="/"><a className={css.back}><img src="/images/Exit_join.png" alt="Vercel Logo" width={40} height={40} /></a></Link>


       </div>
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};
Page.defaultProps = {
  className: null,
};

export default Page;
