/**
 * @type {import('vitepress').UserConfig}
 */

import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default {
    title: 'My knowledge',
    description: 'Welcome to my repository, where I store my personal knowledge base!',
    srcDir: '../src/',
    themeConfig: {
        nav: [
            { text: 'Example', link: '/example' },
        ],
        sidebar: getSidebar({ contentRoot: '/src', collapsible: true, collapsed: false })
    }
}
