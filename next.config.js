const withPWA = require('next-pwa');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withPlugins = require('next-compose-plugins');
const {
  monthConversion,
  dayConversion,
  timeConversion,
} = require('./utils/timeconversion');

const NODE_ENV = process.env.NODE_ENV;
const dualENV = {
  production: {
    PUBLIC_URL: 'https://mts-tn.vercel.app',
  },
  development: {
    PUBLIC_URL: 'http://localhost:3000',
  },
};

const getDate = new Date();

const env = {
  ...dualENV[NODE_ENV],
  isProduction: NODE_ENV === 'production',
  contactURL: process.env.contactURL,
};

// next.js configuration
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'If-Modified-Since',
            value: `${dayConversion(
              getDate.getDay(),
            )}, ${getDate.getDate()} ${monthConversion(
              getDate.getMonth(),
            )} ${getDate.getFullYear()} ${timeConversion(
              getDate.getHours(),
            )}:${timeConversion(getDate.getMinutes())}:${timeConversion(
              getDate.getSeconds(),
            )} GMT`, // <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
          },
        ],
      },
    ];
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  env,
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          dest: 'public',
        },
      },
    ],
    [
      withCss,
      [
        withPurgeCss({
          purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
          purgeCssPaths: ['pages/**/*', 'components/**/*'],
          purgeCss: {
            whitelist: () => whitelist,
          },
        }),
      ],
    ],
  ],
  nextConfig,
);
