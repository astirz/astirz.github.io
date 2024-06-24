import { useSSRContext, defineComponent, withAsyncContext, ref, computed, resolveDirective, mergeProps, unref, withCtx, createVNode, resolveComponent } from 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderStyle } from 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useHead, g as useSiteConfig, f as blogsPage } from './server.mjs';
import { _ as __nuxt_component_1 } from './client-only-BWPHYnFW.mjs';
import { ContentLoader } from 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue-content-loader/dist/vue-content-loader.cjs.js';
import __nuxt_component_0$1 from './Icon-rHNiUpLb.mjs';
import { u as useAsyncData, q as queryContent } from './asyncData-BvyDTr1W.mjs';
import { d as defineOgImage } from './defineOgImage-lzaJaaBW.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/ofetch/dist/node.mjs';
import '../_/renderer3.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/devalue/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/nitropack/dist/runtime/plugin.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/shiki/dist/core.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unified/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/micromark/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/slugify/slugify.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/remark-parse/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/github-slugger/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/detab/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/remark-emoji/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue-router/dist/vue-router.node.mjs';
import './index-BNaLTCrF.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/@iconify/vue/dist/iconify.mjs';
import './preview-BUNLsAFg.mjs';
import 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 500 500"
  }, _attrs))}><g id="freepik--background-simple--inject-24"><path d="M267.69,52.19c37.37,7.52,79.84,28.31,97.2,64.35,26.24,54.46,73.44,53.91,85.57,157a209.06,209.06,0,0,1,.59,45.34,173,173,0,0,1-3.59,21.93c-14.65,63.73-63,103.49-118.41,115C256.18,471.05,213,425.43,187.16,395.42S75.52,338,62.8,236.71a202.32,202.32,0,0,1-.64-46.6c3.74-35.37,18.51-73.07,45-97.85q3-2.79,6.15-5.4C154.45,52.78,216.74,41.94,267.69,52.19Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M267.69,52.19c37.37,7.52,79.84,28.31,97.2,64.35,26.24,54.46,73.44,53.91,85.57,157a209.06,209.06,0,0,1,.59,45.34,173,173,0,0,1-3.59,21.93c-14.65,63.73-63,103.49-118.41,115C256.18,471.05,213,425.43,187.16,395.42S75.52,338,62.8,236.71a202.32,202.32,0,0,1-.64-46.6c3.74-35.37,18.51-73.07,45-97.85q3-2.79,6.15-5.4C154.45,52.78,216.74,41.94,267.69,52.19Z" style="${ssrRenderStyle({ "fill": "#fff", "opacity": "0.7000000000000001" })}"></path></g><g id="freepik--paw-prints--inject-24"><g style="${ssrRenderStyle({ "opacity": "0.30000000000000004" })}"><path d="M363.29,46.88a120.86,120.86,0,0,1-20.83,9c-11.6,3.72-21.36,14-15,27.73s12.68,27,18.06,35.31,19,13.36,28.94,5.38,6.72-15.48,11.39-30,13.61-20.38,14.73-29-5.25-22.44-17.26-23.77A28.33,28.33,0,0,0,363.29,46.88Z"></path><path d="M307.71,101.31s-9.95,1.12-15.11,7.37S296,123.34,304.33,128s22.37,1.83,28-5,.93-17.78-4.43-19.93S307.71,101.31,307.71,101.31Z"></path><path d="M272.5,73.62S279.24,87,288.68,92.84s20.39,6,26.68-2,.14-18.31-6.9-24-21.28-9-29-7.87S271.61,70.61,272.5,73.62Z"></path><path d="M282.44,42.88s4.64,5.56,16.28,10.68,21.37,4.66,27.35.91,8.51-13.63,3-21.47-21.23-11.22-28.49-9.39-16.92,7-19,10.86S279.86,40.49,282.44,42.88Z"></path><path d="M327.9,21.08s8.26,14,17.36,18.66,19.49-.42,21.42-5.85.88-14.87-9.76-22.82-26.48-4-28.67-.63S327.9,21.08,327.9,21.08Z"></path></g><g style="${ssrRenderStyle({ "opacity": "0.30000000000000004" })}"><path d="M450.14,367.06a120.54,120.54,0,0,1-9.24-20.73c-3.84-11.56-14.19-21.21-27.88-14.69s-26.89,13-35.11,18.45-13.15,19.14-5.07,29,15.56,6.55,30.11,11.06,20.53,13.38,29.2,14.41,22.38-5.5,23.58-17.53A28.34,28.34,0,0,0,450.14,367.06Z"></path><path d="M395.09,312.08s-1.23-9.94-7.53-15-14.62,3.52-19.22,11.94-1.58,22.38,5.3,27.92,17.8.73,19.89-4.65S395.09,312.08,395.09,312.08Z"></path><path d="M422.39,276.57s-13.33,6.88-19,16.39-5.8,20.45,2.32,26.65,18.31-.06,23.92-7.16,8.79-21.37,7.55-29.12S425.39,275.64,422.39,276.57Z"></path><path d="M453.24,286.17s-5.51,4.7-10.5,16.4-4.41,21.41-.6,27.35,13.72,8.37,21.5,2.74,11-21.35,9.08-28.59-7.15-16.84-11.08-18.92S455.6,283.57,453.24,286.17Z"></path><path d="M475.54,331.38S461.68,339.8,457.08,349s.63,19.48,6.09,21.36,14.87.71,22.7-10,3.73-26.53.32-28.67S475.54,331.38,475.54,331.38Z"></path></g><g style="${ssrRenderStyle({ "opacity": "0.30000000000000004" })}"><path d="M138.05,372.16a120.85,120.85,0,0,0-9.14,20.77c-3.78,11.58-14.09,21.27-27.82,14.81S74.15,394.89,65.9,389.45s-13.23-19.09-5.19-29,15.53-6.63,30.06-11.19,20.47-13.48,29.14-14.54,22.4,5.4,23.65,17.42A28.32,28.32,0,0,1,138.05,372.16Z"></path><path d="M83.25,427.38s-1.18,9.94-7.46,15.06S61.15,439,56.52,430.58s-1.68-22.38,5.18-27.94,17.79-.82,19.9,4.55S83.25,427.38,83.25,427.38Z"></path><path d="M110.71,462.77s-13.37-6.83-19.11-16.31S85.72,426,93.81,419.8s18.31,0,24,7.06,8.89,21.33,7.67,29.08S113.71,463.68,110.71,462.77Z"></path><path d="M141.52,453S136,448.36,131,436.68s-4.52-21.39-.73-27.35,13.68-8.42,21.49-2.84,11.08,21.31,9.2,28.56-7.07,16.87-11,19S143.89,455.63,141.52,453Z"></path><path d="M163.62,407.72s-13.9-8.35-18.54-17.48.54-19.49,6-21.39,14.88-.77,22.75,9.92,3.85,26.51.45,28.67S163.62,407.72,163.62,407.72Z"></path></g></g><g id="freepik--paw-2--inject-24"><path d="M235.41,195.61s-.1-14.37,3.12-15.45,7.88,7.16,8.95,9.67S235.41,195.61,235.41,195.61Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M234.92,196.25v-.64c0-2.46.07-14.79,3.47-15.92,3.83-1.28,8.75,8.05,9.56,9.94a1.29,1.29,0,0,1-.05,1.13c-1.24,2.5-11.22,5.05-12.36,5.34Zm4.22-15.69a1.42,1.42,0,0,0-.45.08c-2,.67-2.76,8.88-2.78,14.33,4.14-1.08,10.34-3.16,11.09-4.66a.32.32,0,0,0,0-.28C245.84,187.26,241.79,180.56,239.14,180.56Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M280.38,162.92s3.1-14,6.48-14.37,6.09,8.73,6.57,11.42S280.38,162.92,280.38,162.92Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M279.76,163.43l.13-.62c.53-2.4,3.36-14.41,6.92-14.76,4-.38,6.75,9.8,7.12,11.83a1.33,1.33,0,0,1-.3,1.08c-1.78,2.17-12.07,2.43-13.24,2.46ZM287,149h-.13c-2.12.2-4.67,8-5.9,13.35,4.28-.13,10.78-.78,11.84-2.07a.32.32,0,0,0,.09-.27C292.38,157,289.74,149,287,149Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M349.48,196.93s3.1-14,6.48-14.37,6.09,8.74,6.58,11.42S349.48,196.93,349.48,196.93Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M348.86,197.44l.13-.62c.53-2.4,3.36-14.41,6.92-14.75,4-.4,6.75,9.8,7.12,11.82a1.32,1.32,0,0,1-.3,1.08c-1.78,2.17-12.07,2.44-13.24,2.46Zm7.28-14.39H356c-2.12.21-4.67,8.05-5.9,13.35,4.28-.13,10.78-.77,11.84-2.07a.32.32,0,0,0,.09-.27C361.48,191,358.84,183.05,356.14,183.05Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M312.6,159.34s3.1-14,6.48-14.37,6.09,8.73,6.58,11.42S312.6,159.34,312.6,159.34Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M312,159.85l.13-.62c.53-2.4,3.36-14.41,6.92-14.76,4-.39,6.75,9.8,7.12,11.83a1.33,1.33,0,0,1-.3,1.08c-1.77,2.17-12.07,2.43-13.24,2.46Zm7.28-14.39h-.13c-2.11.2-4.67,8-5.9,13.35,4.28-.13,10.78-.78,11.84-2.07a.34.34,0,0,0,.1-.27C324.6,153.39,322,145.46,319.26,145.46Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M255.71,487.47s7.08-82.5,7.08-92.72S258.07,361,258.07,361s-3.93-13.35-5.5-17.28-7.86-14.93-4.71-19.65,7.07,1.57,7.07,1.57a79.71,79.71,0,0,0-1.57-14.92c-1.58-7.08-2-18-2-18-3.86-11.59-4.83-34.28-5.8-36.7s-9.65-11.59-14-26.56,3.86-33.8,3.86-33.8-.48-4.83,6.28-7.24S260,197.06,260,197.06s6.74-29,20.74-37.66,19.25,6.72,20.7,10.1c0,0,11.2-16.87,19.89-14.45s19.32,18.35,22.21,25.11,1.94,16.42,1.94,16.42,8.69-11.11,16.41-3.38,11.59,26.07,9.18,40.56-16.9,25.11-16.9,25.11,2.9,26.08-4.35,37.67q-1.29,2.07-2.34,3.85s-2.23,18.93-3,29.14,1.58,50.29,1.58,67.58,9.42,88.79,9.42,88.79" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M256.21,487.51l-1-.08c.07-.83,7.07-82.6,7.07-92.68s-4.66-33.45-4.71-33.69c0-.09-3.93-13.34-5.47-17.2-.28-.69-.71-1.62-1.21-2.7-2.47-5.3-6.19-13.3-3.46-17.4a3.8,3.8,0,0,1,3.11-2c1.56,0,3,1.28,3.85,2.29a78.07,78.07,0,0,0-1.53-13.29c-1.5-6.73-2-17.06-2-18-2.54-7.68-3.83-20.16-4.69-28.42a66.18,66.18,0,0,0-1.07-8.18,23,23,0,0,0-2-3.08c-3.06-4.3-8.76-12.32-12-23.53-4.17-14.37,3.17-32.43,3.84-34,0-.85.12-5.31,6.61-7.62,6.13-2.2,15.68,5.9,18.24,8.21,1.23-4.9,7.91-29.16,20.76-37.14,4.11-2.55,7.87-3.29,11.2-2.22,5.75,1.87,8.61,8.64,9.87,11.71,2.36-3.35,12-16.1,19.92-13.9,8.56,2.38,19.37,18,22.53,25.4,2.27,5.28,2.23,12.17,2.08,15.17,1.65-1.74,5.19-4.9,9.3-5.15a8.75,8.75,0,0,1,6.87,2.86c7.63,7.63,11.81,26,9.31,41-2.25,13.51-15,23.8-16.86,25.26.31,3,2.48,26.61-4.45,37.7-.85,1.35-1.6,2.59-2.28,3.75-.18,1.53-2.26,19.33-3,29-.45,5.83.14,21.72.72,37.08.42,11.35.86,23.08.86,30.46,0,17.06,9.33,88,9.42,88.72l-1,.13c-.1-.71-9.43-71.73-9.43-88.85,0-7.36-.44-19.08-.86-30.42-.58-15.39-1.17-31.31-.71-37.19.77-10.11,3-29,3-29.17l.07-.2c.7-1.19,1.48-2.47,2.35-3.86,7.07-11.31,4.3-37.09,4.27-37.34l0-.29.23-.17c.15-.11,14.35-10.68,16.71-24.79,2.45-14.7-1.61-32.7-9-40.13a7.79,7.79,0,0,0-6.1-2.57c-5.12.3-9.53,5.85-9.57,5.9l-1.06,1.36.17-1.71c0-.1.92-9.61-1.9-16.18-3.09-7.22-13.62-22.53-21.88-24.82S302,169.61,301.9,169.78l-.52.77-.36-.85-.29-.7c-1.17-2.86-3.91-9.54-9.32-11.3-3-1-6.52-.26-10.36,2.12-13.67,8.48-20.45,37.06-20.52,37.35l-.2.86-.63-.61c-.12-.11-11.44-10.86-17.84-8.58s-6,6.54-6,6.72v.13l0,.12c-.08.19-8.08,18.84-3.84,33.46,3.21,11,8.84,19,11.87,23.23a22.14,22.14,0,0,1,2.12,3.29c.34.85.62,3.48,1.14,8.45.85,8.24,2.14,20.7,4.66,28.28l0,.13c0,.11.45,11,2,17.92a80.75,80.75,0,0,1,1.59,15v1.74l-.93-1.47s-1.94-3.06-4-3.09h0a2.81,2.81,0,0,0-2.24,1.53c-2.42,3.63,1.31,11.64,3.53,16.43.51,1.09.95,2,1.23,2.75,1.57,3.91,5.36,16.79,5.52,17.33.06.28,4.74,23.78,4.74,33.93S256.28,486.69,256.21,487.51Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M260.33,309.27a.87.87,0,0,1-.28,0c-1.15-.38-4.39-7.29-6.22-11.38l.91-.41c2.15,4.8,4.75,10,5.57,10.78a11.06,11.06,0,0,0,.51-3.91v-1l2.79,2.1-.36-2.54,3.86,2.71v-3.12h1v5L264.57,305l.38,2.65-3.15-2.36c-.06,1.39-.27,3.3-1,3.81A.83.83,0,0,1,260.33,309.27Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><polygon points="326.63 327.15 327.05 320.95 321.91 322.79 321.91 314.3 322.91 314.3 322.91 321.37 328.15 319.5 327.82 324.41 332.08 319.82 334.13 322.55 337.67 313.91 338.69 317.34 340.45 311.2 341.41 311.48 338.72 320.89 337.52 316.91 334.39 324.56 332 321.38 326.63 327.15" style="${ssrRenderStyle({ "fill": "#263238" })}"></polygon><path d="M333.45,245.75A120.71,120.71,0,0,1,318,229.14c-7.38-9.69-20.3-15.46-31.15-4.85s-21.22,21-27.22,28.84-6.23,22.38,4.61,29.07,16.84,1.15,32.07.69,23.76,6,32.3,4.16,19.38-12.46,16.61-24.23A28.34,28.34,0,0,0,333.45,245.75Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M263.55,211.61s-4.38-9-12-11.77-12.68,8.07-14.3,17.53,5.77,21.69,14.07,24.69,17.08-5.08,17.31-10.84S263.55,211.61,263.55,211.61Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M277.85,169.16S267.47,180,265.17,190.84s1.15,21.23,10.84,24.46,17.3-6,20.3-14.54,1.39-23.07-2.31-30S280.39,167.31,277.85,169.16Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M310.15,168.23s-3.69,6.23-4.61,18.92,2.77,21.69,8.3,26.07,15.69,3.46,21.23-4.38,3.46-23.77-.69-30-12.23-13.62-16.61-14.31S311.54,165,310.15,168.23Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M345.91,203.76s-10.38,12.46-11.76,22.61,6.92,18.23,12.69,18.23,14.3-4.16,18.22-16.85-5.07-26.3-9-27.22S345.91,203.76,345.91,203.76Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path></g><g id="freepik--paw-1--inject-24"><path d="M112,300.56s5.16,7.29,7.9,7.29,4-7.59,4-8.81S112,300.56,112,300.56Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M161.21,319.7s5.17,7.3,7.9,7.3,3.95-7.6,3.95-8.82S161.21,319.7,161.21,319.7Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M192.2,306.33s5.17,7.3,7.9,7.3,4-7.6,4-8.82S192.2,306.33,192.2,306.33Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M215.6,264.4s5.17,7.29,7.9,7.29,3.95-7.59,3.95-8.81S215.6,264.4,215.6,264.4Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M127.6,16.28S153.92,116.76,156.19,124s21.31,50.32,27.65,55.76,27.66,33.1,35.37,43.07,10,25.85,8.61,37.63-10.43,6.35-10.43,6.35v5.89c0,2.72.46,2.72-3.17,14.06s-6.8,19-13.15,22.21-18.59-3.62-18.59-3.62-4.53,12.69-12.24,16.32-23.57-5.9-28.56-9.07-11.79-15.41-11.79-15.41-7.24,8.09-15.53,5.32-17.28-19.35-21.43-28.33,7.6-22.12,9.68-40.1-6.22-47.69-6.22-47.69-5.94-25.21-8.66-31.56-6.8-2.72-7.25-17.23S46.28,55,43.56,50.42" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M166.14,323c-8.09,0-19.56-6.66-24.73-10-4.46-2.84-10.18-12.49-11.62-15-1.78,1.77-8.22,7.43-15.59,5-9.34-3.12-19-22.68-21.72-28.6-2.37-5.14.13-11.3,3.31-19.09,2.53-6.21,5.39-13.24,6.32-21.27,2-17.67-6.12-47.21-6.21-47.5s-6-25.27-8.63-31.5a10.36,10.36,0,0,0-3-4c-2.07-1.9-4-3.7-4.33-13.43C79.53,123.36,45.75,55,43.13,50.68l.86-.52c2.68,4.47,36.52,72.62,37,87.44.29,9.31,2.1,11,4,12.72a11.37,11.37,0,0,1,3.2,4.32c2.71,6.32,8.44,30.61,8.68,31.65.08.27,8.29,30,6.23,47.86-.94,8.17-3.83,15.27-6.39,21.54-3.08,7.57-5.51,13.55-3.33,18.29,5.55,12,14,25.7,21.14,28.07,7.87,2.62,14.93-5.11,15-5.19l.47-.52.34.61c.07.13,6.8,12.17,11.62,15.24,6,3.84,20.88,12.43,28.08,9,7.43-3.5,11.94-15.92,12-16l.2-.56.52.29c.12.07,12.08,6.63,18.12,3.62,5.88-3,9.07-10,12.89-21.92,3.22-10.07,3.2-11.08,3.16-13.11,0-.25,0-.51,0-.8v-6.77l.76.45s3.53,2.08,6.28.72c1.84-.91,3-3.16,3.39-6.69,1.32-11.37-.81-27.3-8.51-37.27l-.62-.81c-7.8-10.09-28.53-36.92-34.67-42.19-6.34-5.43-25.39-48.25-27.81-56-2.24-7.18-28.33-106.75-28.6-107.75l1-.26c.26,1,26.35,100.55,28.59,107.71,2.35,7.54,21.45,50.35,27.5,55.54,6.22,5.33,26.26,31.26,34.81,42.33l.62.81c7.88,10.19,10.05,26.42,8.72,38-.45,3.89-1.78,6.41-3.95,7.48-2.42,1.19-5.17.23-6.48-.37v5.07c0,.29,0,.54,0,.78,0,2.14.07,3.21-3.2,13.43s-6.58,19.1-13.4,22.51c-5.84,2.92-16.12-2.09-18.55-3.36-1,2.51-5.31,12.78-12.29,16.06A10.13,10.13,0,0,1,166.14,323Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M112.93,183.23l-5.26-8.32-2.89,2.68-3.18-5.9c-.65.89-1.87,2.26-3.18,2.29a2.1,2.1,0,0,1-1.85-1.12c-1.92-2.87-2.4-9.29-2.42-9.56l1-.08c0,.07.48,6.44,2.25,9.09.45.68.86.67,1,.67,1.08,0,2.43-1.87,2.82-2.52l.45-.75L105,176l2.84-2.62,4.05,6.41v-3.7h1Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><polygon points="148.42 125.1 144.55 124.61 144.67 123.62 147 123.91 144.29 115.4 147.74 115.78 144.52 107.03 149.02 111.54 143.76 98.72 144.68 98.34 151.83 115.77 147.03 110.96 149.24 116.95 145.71 116.56 148.42 125.1" style="${ssrRenderStyle({ "fill": "#263238" })}"></polygon><path d="M125.66,245.62c-.29-3.08-.35-5.06-.35-5.08l1,0s.06,2,.34,5Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M130.35,297.4l-.91-.4c.06-.15,6.2-14.48,1.35-27.28a87.31,87.31,0,0,1-4.56-19.09l1-.13a86.36,86.36,0,0,0,4.5,18.86C136.72,282.55,130.42,297.25,130.35,297.4Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M182,296.65a61.05,61.05,0,0,0-2.27-11.55c-2.27-7.66-6.79-17.32-10.43-25.08-2.15-4.59-3.85-8.22-4.53-10.27-1.79-5.39-6.3-20.72-6.35-20.87l1-.28c0,.15,4.55,15.46,6.34,20.83.66,2,2.44,5.78,4.49,10.17,3.65,7.79,8.19,17.48,10.48,25.21A62.38,62.38,0,0,1,183,296.56Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M183,305.44l-1-.17a33.3,33.3,0,0,0,.21-5.88l1,0A33.38,33.38,0,0,1,183,305.44Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M198.51,227.33c-1.22-1.54-2.42-2.92-3.47-4.14a34.06,34.06,0,0,1-4.84-6.47l-2.72-5.44.89-.45,2.72,5.44a34.07,34.07,0,0,0,4.71,6.27c1.06,1.22,2.25,2.61,3.5,4.16Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M216.91,266.94c0-.1-2.34-9.66-9-24.39a70.06,70.06,0,0,0-7.55-12.88l.8-.59a70.49,70.49,0,0,1,7.66,13c6.74,14.84,9.08,24.48,9.1,24.57Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path></g></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo/dogpow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LogoDogpow = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mb-5" }, _attrs))}><div class="grid grid-cols-1 sm:grid-cols-2 items-center"><div class="px-6"><h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">${ssrInterpolate(unref(blogsPage).title)}</h1><p class="dark:text-zinc-300">${ssrInterpolate(unref(blogsPage).description)}</p></div><div class="px-6 justify-self-center">`);
      _push(ssrRenderComponent(_component_LogoDogpow, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/archive/hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  components: { ContentLoader }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContentLoader = resolveComponent("ContentLoader");
  _push(ssrRenderComponent(_component_ContentLoader, mergeProps({
    viewBox: "0 0 400 160",
    speed: 2,
    "primary-color": "#c9c9c9",
    "secondary-color": "#ecebeb"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<rect x="10" y="13" rx="0" ry="0" width="95" height="86"${_scopeId}></rect><rect x="119" y="19" rx="0" ry="0" width="219" height="16"${_scopeId}></rect><rect x="119" y="49" rx="0" ry="0" width="277" height="16"${_scopeId}></rect><rect x="119" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect><rect x="195" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect><rect x="272" y="82" rx="0" ry="0" width="56" height="14"${_scopeId}></rect>`);
      } else {
        return [
          createVNode("rect", {
            x: "10",
            y: "13",
            rx: "0",
            ry: "0",
            width: "95",
            height: "86"
          }),
          createVNode("rect", {
            x: "119",
            y: "19",
            rx: "0",
            ry: "0",
            width: "219",
            height: "16"
          }),
          createVNode("rect", {
            x: "119",
            y: "49",
            rx: "0",
            ry: "0",
            width: "277",
            height: "16"
          }),
          createVNode("rect", {
            x: "119",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          }),
          createVNode("rect", {
            x: "195",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          }),
          createVNode("rect", {
            x: "272",
            y: "82",
            rx: "0",
            ry: "0",
            width: "56",
            height: "14"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("home", () => queryContent("/blogs").sort({ _id: -1 }).find())), __temp = await __temp, __restore(), __temp);
    const elementPerPage = ref(5);
    const pageNumber = ref(1);
    const searchTest = ref("");
    const formattedData = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.map((articles) => {
        return {
          path: articles._path,
          title: articles.title || "no-title available",
          description: articles.description || "no-description available",
          image: articles.image || "/not-found.jpg",
          alt: articles.alt || "no alter data available",
          ogImage: articles.ogImage || "/not-found.jpg",
          date: articles.date || "not-date-available",
          tags: articles.tags || [],
          published: articles.published || false
        };
      })) || [];
    });
    const searchData = computed(() => {
      return formattedData.value.filter((data2) => {
        const lowerTitle = data2.title.toLocaleLowerCase();
        if (lowerTitle.search(searchTest.value) !== -1)
          return true;
        else
          return false;
      }) || [];
    });
    computed(() => {
      return searchData.value.filter((data2, idx) => {
        const startInd = (pageNumber.value - 1) * elementPerPage.value;
        const endInd = pageNumber.value * elementPerPage.value - 1;
        if (idx >= startInd && idx <= endInd)
          return true;
        else
          return false;
      }) || [];
    });
    const totalPage = computed(() => {
      const ttlContent = searchData.value.length || 0;
      const totalPage2 = Math.ceil(ttlContent / elementPerPage.value);
      return totalPage2;
    });
    useHead({
      title: "Archive",
      meta: [
        {
          name: "description",
          content: "Here you will find all the blog posts I have written & published on this site."
        }
      ],
      titleTemplate: "Riyad's Blog - %s"
    });
    const siteData = useSiteConfig();
    defineOgImage({
      props: {
        title: "Archive",
        description: "Here you will find all the blog posts I have written & published on this site.",
        siteName: siteData.url
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArchiveHero = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_BlogLoader = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0$1;
      resolveDirective("auto-animate");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container max-w-5xl mx-auto text-zinc-600" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ArchiveHero, null, null, _parent));
      _push(`<div class="px-6"><input${ssrRenderAttr("value", unref(searchTest))} placeholder="Search" type="text" class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BlogLoader, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BlogLoader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BlogLoader),
              createVNode(_component_BlogLoader)
            ];
          }
        })
      }, _parent));
      _push(`<div class="flex justify-center items-center space-x-6"><button${ssrIncludeBooleanAttr(unref(pageNumber) <= 1) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:code-less-than",
        size: "30",
        class: { "text-sky-700 dark:text-sky-400": unref(pageNumber) > 1 }
      }, null, _parent));
      _push(`</button><p>${ssrInterpolate(unref(pageNumber))} / ${ssrInterpolate(unref(totalPage))}</p><button${ssrIncludeBooleanAttr(unref(pageNumber) >= unref(totalPage)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:code-greater-than",
        size: "30",
        class: { "text-sky-700 dark:text-sky-400": unref(pageNumber) < unref(totalPage) }
      }, null, _parent));
      _push(`</button></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B1IypkDW.mjs.map
