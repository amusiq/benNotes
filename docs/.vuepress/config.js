const fs = require('fs');
const path = require('path');
const cateArrange = require('../category');

// * -------------------------------- sidebar generator

const articleFolder = path.resolve(process.cwd(), './docs');

const hasFile = (e) => fs.existsSync(path.resolve(articleFolder, e));

// * ----------------

const articleSidebar = Object.entries(cateArrange)
  .map(([groupName, list]) => [
    groupName,
    list.map((e) => e.replace(/^.\//, '')).filter(hasFile),
  ])
  .filter(([, list]) => list.length > 0)
  .map(([title, children]) => ({ title, children, collapsable: true }));

// * -------------------------------- config

module.exports = {
  base: '/benNotes/',
  title: "Ben's Notes",
  description: '前端大龙凤',
  head: [['link', { rel: 'icon', href: `/img/logo.png` }]],
  port: '1217',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'profile', link: '/profile/' },
      { text: 'GitHub', link: 'https://github.com/amusiq/benNotes' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/refs': false,
      '/': articleSidebar,
    },
    // sidebar: ['/', '/page-a', ['/page-b', 'Explicit link text']],
  },
};
