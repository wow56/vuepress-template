module.exports = {
  title: 'Xxx 的个人知识库',
  description: 'Keep on going',
  port: 8003, // 本地启动端口号
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav:[ // 导航栏配置
      {
        text: '前端',
        items: [
          {text: 'HTML', link: '/frontend/html/HTML'},
          {text: 'CSS', link: '/frontend/css/CSS'},
        ]
      },
      {
        text: '后端',
        items: [
          {text: 'Java', link: '/backend/java/Java'},
          {text: 'Spring', link: '/backend/spring/Spring Core'},
        ]
      },
      {text: 'GitHub', link: 'https://github.com/wow56/vuepress-template'},
      {text: 'Gitee', link: 'https://gitee.com/wow56/vuepress-template'}
    ],
    sidebar: 'auto', // 侧边栏配置，当前为自动生成侧边栏
  }
}
