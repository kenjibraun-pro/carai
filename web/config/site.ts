export type SiteConfig = typeof siteConfig

const siteConfig = {
    name: 'Carai',
    title: 'Carai - Write, Test, and Share Code Online',
    author: 'Success Kingsley <hello@xosnrdev.com>',
    description:
        'An online platform to easily write, test, and share code with others. Carai is your all-in-one open-source platform for coding, testing, and collaboration.',
    opengraph: '/opengraph-image.png',
    favicon: '/favicon.ico',
    repo: 'https://github.com/xosnrdev/carai',
    siteUrl:
        process.env.NODE_ENV === 'production'
            ? 'https://codespacex.com'
            : 'http://localhost:3000',
    keywords: [
        'online code editor',
        'code sharing platform',
        'collaborative coding',
        'code testing tool',
        'online programming environment',
        'code playground',
        'real-time code execution',
        'multi-language code editor',
        'code snippet sharing',
        'interactive coding platform',
        'online compiler',
        'code collaboration tool',
        'remote pair programming',
        'code review platform',
        'live code sharing',
        'instant code execution',
        'web-based IDE',
        'coding practice platform',
        'programming learning tool',
        'code debugging online',
        'carai',
        'carai code editor',
        'carai code sharing',
        'carai code testing',
    ],
    categories: [
        'Online Code Editor',
        'Code Sharing Platform',
        'Programming Tools',
        'Developer Collaboration',
        'Software Development',
        'Educational Technology',
        'Coding Practice',
        'Web-based IDE',
        'Code Testing',
        'Programming Learning',
        'Code Execution Platform',
        'Open Source Tools',
    ],
}

export default siteConfig
