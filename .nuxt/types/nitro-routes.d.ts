// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/__og-image__/font/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/font').default>>>>
    }
    '/__og-image__/image/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/image').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/highlighter/event-handler').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/server/middleware').default>>>>
    }
    '/__sitemap__/nuxt-content-urls.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/__sitemap__/nuxt-content-urls').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-simple-sitemap/dist/runtime/routes/sitemap.xml').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.1720152310346.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
  }
}
export {}