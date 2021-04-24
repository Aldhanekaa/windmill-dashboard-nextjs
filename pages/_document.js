import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { GA_TRACKING_ID } from '../utils/gtag';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <script
            type='text/javascript'
            async
            src='https://www.google-analytics.com/analytics.js'
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${GA_TRACKING_ID});
              `,
            }}
          ></script> */}
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/logo192-apple-touch.png' />
          <meta name='application-name' content='windmill dashboard' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta
            name='apple-mobile-web-app-title'
            content='windmill dashbord react'
          />
          <meta name='description' content='Windmill Dashboard' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />

          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          /> */}

          <meta
            name='keywords'
            content='windmill dashboard nextjs,windmill dashboard,windmill ui'
          />
          <meta name='geo.region' content='ID' />
          <meta name='geo.placename' content='Depok, Jawa Barat, Indonesia.' />
          <link rel='shortlink' href={process.env.PUBLIC_URL} />
          <link rel='canonical' href={process.env.PUBLIC_URL} />

          <meta name='og:url' content={process.env.PUBLIC_URL} />
          <meta name='og:type' content='website' />

          <meta name='og:image' content='/open-graph/og-img-small.png' />
          <meta
            property='og:image:alt'
            content='Windmill Dash Log Open Graph Big Version'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='640' />

          <meta
            property='og:image:alt'
            content='Windmill Dashboard Application Log Open Graph Small Version'
          />
          <meta property='og:image:width' content='512' />
          <meta property='og:image:height' content='512' />
          <meta property='og:site_name' content='Windmill Dashboard' />

          <meta name='cannonical' content={process.env.PUBLIC_URL} />

          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MGMF2TJ"
              height="0"
              width="0"
              style="display: none; visibility: hidden"
            ></iframe>
            `,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
