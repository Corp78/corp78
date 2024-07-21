// next-sitemap.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ophtalmologie-maurepas.fr/',
    generateRobotsTxt: true, // (optional)
    exclude: ['/admin', '/admin/dashboard', '/admin/dashboard/addArticle'], // (optional)
}