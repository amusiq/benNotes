module.exports = {
  base: '/',
  title: "Ben's Notes",
  description: '随便写写',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  port: '1217',
  dest: '.vuepress/dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'profile', link: '/profile/' },
      { text: 'GitHub', link: 'https://github.com/amusiq/benNotes' },
    ],
    sidebar: ['/', '/page-a', ['/page-b', 'Explicit link text']],
  },
};
