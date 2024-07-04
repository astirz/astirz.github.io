import _Highlight from 'C:/Users/Phong/Desktop/Materials/astirz.github.io/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"dracula"}