module.exports = {
  title: 'Codotype',
  description: 'Hand-crafted starter code for the modern web',
  ga: process.env.GA_TRACKING_ID,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/blueprint/' },
      { text: 'GitHub', link: 'https://github.com/codotype' },
    ],
    sidebar: [
      '/',
      '/blueprint/',
      '/blueprint/model.html',
      '/blueprint/attribute.html',
      '/blueprint/relation.html',
      '/generator/',
      ['/generator/structure.html', 'Structure'],
      ['/generator/configuration.html', 'Configuration']
    ]
  }
}
