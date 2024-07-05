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
                "loc": "/about",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/q_50&amp;s_125x115/riyad.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/q_50&amp;s_450x500/riyad.jpg"
                    }
                ]
            },
            {
                "loc": "/blogs"
            },
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog6.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog5.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog4.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog2.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/categories"
            },
            {
                "loc": "/astirz.github.io/about",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/q_50&amp;s_125x115/riyad.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/q_50&amp;s_450x500/riyad.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories"
            },
            {
                "loc": "/astirz.github.io/",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog6.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog5.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog4.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog2.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs"
            },
            {
                "loc": "/astirz.github.io/blogs/connect-namecheap-to-vercel",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog1.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs/create-namespace-subdomain-connect-to-vercel",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs/vue3-awesome-library",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog5.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs/fetch-content-data-render-pages",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs/how-to-fix-vuex-type-issue",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog6.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/blogs/fix-tailwindcss-intellisense-in-nuxt3",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_600/blogs-img/blog2.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/nuxt",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog2.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog3.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/javascript",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog5.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/namecheap",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/vercel",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog1.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog3.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/tailwindcss",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog2.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/vuex",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog6.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/nuxt-content",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog4.jpg"
                    }
                ]
            },
            {
                "loc": "/astirz.github.io/categories/vue",
                "images": [
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog5.jpg"
                    },
                    {
                        "loc": "https://blog.nurriyad.xyz/_ipx/w_300/blogs-img/blog6.jpg"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
