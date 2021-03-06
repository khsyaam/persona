module.exports = {

    author: "@hisyamk",
    siteTitle: "Holaa! My Personal Site - Khusnul Hisyam",
    siteShortTitle: "kh.", // Used as logo text in header, footer, and splash screen
    siteDescription: "Let's talk about interface design and life.",
    siteUrl: "https://hisyamk.now.sh/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hisyamk",
    shownArticles: 3,

    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [{
            name: "Linkedin",
            url: "https://www.linkedin.com/in/khsyaam/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@hisyamk"
        },
        {
            name: "Github",
            url: "https://github.com/khsyaam"
        },
        {
            name: "Behance",
            url: "https://www.behance.net/hisyamk_"
        },
    ],

    navLinks: {
        menu: [{
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Project",
                url: "/#projects",
            },
            {
                name: "Contact",
                url: "/#contact",
            }
        ]
    },

    footerLinks: [{
        name: "Privacy",
        url: "/privacy"
    }, ]
}