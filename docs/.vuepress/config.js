module.exports = {
    title: 'MeEdu开发文档',
    description: 'MeEdu插件和模板开发文档',
    themeConfig: {
        nav: [
            { text: '文档首页', link: '/' },
            { text: '官网', link: 'https://meedu.vip' },
            { text: 'Github', link: 'https://github.com/Qsnh/meedu' },
            { text: '插件开发', link: '/addons/' },
            { text: '模板开发', link: '/template/' },
        ],
        sidebar: {
            '/addons/': [
                '',
                '快速开始',
                '约定',
                '服务注册',
                '路由注册',
                '视图注册',
                '命令注册',
                '事件监听',
                '中间件注册'
            ],
            '/template/': [
                '',
                '快速开始',
                '目录结构',
                '全局变量',
                '静态资源',
                '模板打包'
            ]
        },
        lastUpdated: 'Last Updated'
    }
}