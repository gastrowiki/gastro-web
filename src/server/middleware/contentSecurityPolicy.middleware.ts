import getConfig from 'next/config';
import helmet from 'helmet';

export const contentSecurityPolicyMiddleware = () => {
  const {
    publicRuntimeConfig: { CDN_ASSET_PREFIX, ALGOLIA_APPLICATION_ID },
  }: { publicRuntimeConfig: { CDN_ASSET_PREFIX: string; ALGOLIA_APPLICATION_ID: string } } =
    getConfig();

  return helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'child-src': ['blob:'],

      'connect-src': [
        "'self'",
        '*.goat.com',
        CDN_ASSET_PREFIX,
        `https://${ALGOLIA_APPLICATION_ID}-dsn.algolia.net`,
        `https://*.branch.io`,
        'https://*.litix.io',
        'https://*.wistia.com',
        'https://embedwistia-a.akamaihd.net',
        'https://stats.g.doubleclick.net',
        '*.bugsnag.com',
        '*.mparticle.com',
        'https://www.google-analytics.com',
        'https://stats.g.doubleclick.net',
        'https://ac.cnstrc.com',
        'https://pwcdauseo-zone.cnstrc.com',
        'https://platform.twitter.com/oct.js',
        'https://static.ads-twitter.com/oct.js ',
        '*.braze.com',
        '*.stripe.com',
        '*.braintreegateway.com',
        '*.affirm.com',
        '*.afterpay.com',
        '*.algolianet.com',
        '*.pndsn.com',
        'analytics.tiktok.com',
        'https://goat.sjv.io/',
        '*.cookielaw.org/',
        '*.onetrust.com/',
      ],

      'font-src': [
        "'self'",
        'data:',
        '*.goat.com',
        CDN_ASSET_PREFIX,
        'https://*.wistia.com',
        'https://fonts.gstatic.com',
      ],

      'frame-src': [
        'https://bid.g.doubleclick.net',
        '*.stripe.com',
        '*.snapchat.com',
        '*.affirm.com',
        '*.afterpay.com',
        'https://www.google.com/recaptcha/',
        'https://recaptcha.google.com/recaptcha/',
      ],

      'img-src': [
        "'self'",
        '*.goat.com',
        CDN_ASSET_PREFIX,
        'https://*.wistia.com',
        'https://*.wistia.net',
        'https://embedwistia-a.akamaihd.net',
        'https://www.google-analytics.com',
        'https://ssl.gstatic.com',
        'https://www.gstatic.com',
        'https://googleads.g.doubleclick.net',
        'https://www.google.com',
        '*.foodsworth.com',
        '*.googletagmanager.com',
        '*.snapchat.com',
        '*.cloudfront.com',
        '*', // there's a ton of images that are loaded as part of third party trackers
        'https://image-preprod.foodsworth.com',
        'https://cms-cdn-staging.foodsworth.com',
        'https://cms-cdn.goat.com',
        'data:',
        '*.cookielaw.org/',
        '*.onetrust.com/',
      ],

      'manifest-src': ["'self'", '*.goateng.com', '*.goat.com'],

      'media-src': [
        "'self'",
        'blob:',
        'data:',
        'https://*.wistia.com',
        'https://*.wistia.net',
        'https://embedwistia-a.akamaihd.net',
        'https://cms-cdn.goat.com',
        'https://cms-cdn-staging.foodsworth.com',
      ],

      'prefetch-src': ["'self'", '*.goat.com', CDN_ASSET_PREFIX],

      'script-src': [
        "'strict-dynamic'",
        "'self'",
        '*.goat.com',
        CDN_ASSET_PREFIX,
        'https://*.wistia.com',
        'https://*.wistia.net',
        'https://src.litix.io',
        '*.mparticle.com',
        'https://www.google-analytics.com',
        'https://ssl.google-analytics.com',
        'https://tagmanager.google.com',
        '*.googletagmanager.com',
        'https://www.googleadservices.com',
        'https://googleads.g.doubleclick.net',
        'https://www.google.com',
        'https://www.google.com/recaptcha/',
        'https://www.gstatic.com/recaptcha/',
        'connect.facebook.net',
        '*.affirm.com',
        '*.afterpay.com',
        'unpkg.com',
        'sc-static.net',
        'analytics.tiktok.com',
        '*.stripe.com',
        '*.braintreegateway.com',
        'https://d.impactradius-event.com/',
        'blob:',
        // @ts-ignore: TEMP. custom Response type sometimes fails build
        (req, res) => `'nonce-${res.locals.cspNonce}'`,
        `'unsafe-inline'`,
        '*.cookielaw.org/',
        '*.onetrust.com/',
      ],

      'style-src': [
        "'self'",
        "https: 'unsafe-inline'",
        'https://tagmanager.google.com',
        'https://fonts.googleapis.com',
        '*.cookielaw.org/',
        '*.onetrust.com/',
      ],

      'worker-src': ["'self'", '*.goateng.com', '*.goat.com', 'blob:'],
    },
  });
};
