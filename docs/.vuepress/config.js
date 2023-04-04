module.exports = {
    title: 'AI知识库',
    description: '小景哥哥带你上王者',
    dest: './dist',
    base: "./",
    port: '80',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: '关于我',
            link: '/aboutme/'
        }],
        sidebar: {
            '/guide/': [{
                    title: '新手指南',
                    collapsable: true,
                    children: [
                        '/guide/notes/one',
                    ]
                },
                {
                    title: '人工智能',
                    collapsable: true,
                    children: [
                        '/guide/notes/ai',
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}