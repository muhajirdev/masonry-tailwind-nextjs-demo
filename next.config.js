const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

// next.config.js
module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
    purgeCss: {
      whitelist: ["html", "body"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "css", "tsx"]
        }
      ]
    }
  })
);
