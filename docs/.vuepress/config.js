module.exports = {
  title: 'Codotype',
  description: 'Hand-crafted starter code for the modern web',
  head: [
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/codotype/image/upload/v1552257221/codotype-icons/favicon.png' }]
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
      { text: 'Guide', link: '/project/' },
      { text: 'GitHub', link: 'https://github.com/codotype' },
    ],
    sidebar: [
      '/project/',
      '/blueprint/',
      '/blueprint/schema.html',
      '/blueprint/attribute.html',
      '/blueprint/relation.html',
      '/generator/',
      ['/generator/structure.html', 'Structure'],
      ['/generator/configuration.html', 'Configuration'],
      ['/generator/runtime.html', 'Runtime']
    ]
  }
}
