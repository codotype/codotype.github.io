module.exports = {
  title: 'Codotype',
  description: 'Hand-crafted starter code for the modern web',
  head: [
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/codotype/image/upload/v1552257221/codotype-icons/favicon.png' }],
    ['script', { src: 'https://raw.githubusercontent.com/codotype/codotype.github.io/master/js/hotjar.js' }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA_TRACKING_ID
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/overview/' },
      { text: 'Twitter', link: 'https://twitter.com/codotype' },
      { text: 'GitHub', link: 'https://github.com/codotype' },
    ],
    sidebar: [
      {
        title: 'Hello Codotype', // required
        // path: '/overview/', // which should be a absolute path.
        collapsable: false, // defaults to true
        sidebarDepth: 2, // defaults to 1
        children: [
          '/overview/',
          '/overview/connect',
        ]
      },
      {
        title: 'Core',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/core/',
          '/core/project',
          '/core/schema',
          '/core/attribute',
          '/core/relation',
        ]
      },
      {
        title: 'Generator',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/generator/',
          '/generator/structure',
          '/generator/configuration',
          '/generator/runtime',
        ]
      },
    ]
  }
}
