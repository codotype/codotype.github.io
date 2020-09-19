const autometa_options = {
  image: true, // regular meta image used by search engines
  twitter: true, // twitter card
  og: true, // open graph: facebook, pinterest, google+
  schema: true, // schema.org for google
  site: {
    name: "Codotype",
    twitter: "codotype"
  },
  author: {
    name: "Alexander Schwartzberg",
    twitter: "aeksco"
  },
  canonical_base: "https://codotype.org"
};

module.exports = {
  title: "Codotype",
  description:
    "Plugin-based framework for generating custom boilerplate code and scaffolding. Open-source under the MIT License.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png"
      }
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/gh/codotype/codotype.github.io@master/js/hotjar.js"
      }
    ]
  ],
  plugins: [
    ["autometa", autometa_options],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],
    [
      "@vuepress/last-updated",
      "@vuepress/google-analytics",
      {
        ga: process.env.GA_TRACKING_ID
      }
    ]
  ],
  themeConfig: {
    logo:
      "https://res.cloudinary.com/codotype/image/upload/v1560045005/tech-logos/codotype.png",
    repo: "codotype/codotype",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/overview/" },
      { text: "Twitter", link: "https://twitter.com/codotype" }
    ],
    sidebar: [
      {
        title: "Hello Codotype", // required
        // path: '/overview/', // which should be a absolute path.
        collapsable: false, // defaults to true
        sidebarDepth: 2, // defaults to 1
        children: [
          "/overview/",
          "/overview/how_it_works",
          "/overview/plugins",
          "/overview/open_source",
          "/overview/connect"
        ]
      },
      {
        title: "Core",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/core/runtime", "/core/cli"]
      },
      {
        title: "Plugins",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/plugins/",
          "/plugins/structure",
          "/plugins/configuration",
          "/core/project",
          "/core/schema",
          "/core/attribute",
          "/core/relation"
        ]
      }
    ]
  }
};
