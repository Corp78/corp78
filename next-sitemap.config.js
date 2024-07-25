// next-sitemap.js

/** @type {import('next-sitemap').IConfig} */

const getPriority = (url) => {
    switch (url) {
        case '/':
            return 1.0;
        case '/cabinet':
            return 0.9;
        default:
            return 0.7;
    }
}

const customTransform = (config, url) => {
    // Set priority to 1 for root URL
    console.log(url);
    return {
        loc: url,
        changefreq: 'daily',
        priority: getPriority(url),
    };
};

module.exports = {
    siteUrl: 'https://ophtalmologie-maurepas.fr',
    generateRobotsTxt: true,
    exclude: ['/admin', '/admin/dashboard', '/admin/dashboard/addArticle', '/quentin', '/karen'],
    transform: customTransform,
};