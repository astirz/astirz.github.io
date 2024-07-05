const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "Enabled because you've set `config.strictNuxtContentPaths: true`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about"
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/",
            "/categories",
            {
                "loc": "/blogs"
            },
            {
                "loc": "/about",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/q_50&amp;s_125x115/riyad.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/q_50&amp;s_450x500/riyad.jpg"
                    }
                ]
            },
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog6.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog5.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog4.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog2.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/blogs/connect-namecheap-to-vercel",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog1.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs/create-namespace-subdomain-connect-to-vercel",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs/vue3-awesome-library",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog5.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs/fetch-content-data-render-pages",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs/how-to-fix-vuex-type-issue",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog6.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs/fix-tailwindcss-intellisense-in-nuxt3",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_600/blogs-img/blog2.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/vue",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog5.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog6.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/vuex",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog6.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/javascript",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog5.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/nuxt",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog2.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog3.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/nuxt-content",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/namecheap",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/vercel",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/categories/tailwindcss",
                "images": [
                    {
                        "loc": "https://astirz.github.io/_ipx/w_300/blogs-img/blog2.jpg"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
