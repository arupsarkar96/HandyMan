

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://handymanexpert24.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    // additionalPaths: async (config) => {
    //     const posts = await getPosts(); // Fetch posts from your database or API
    //     const paths = posts.map((post) => ({
    //         loc: `/post/${post.slug}`,
    //         lastmod: post.updatedAt, // or post.date if available
    //     }));

    //     return paths;
    // },
}