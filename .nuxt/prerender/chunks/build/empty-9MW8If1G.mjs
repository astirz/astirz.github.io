import { _ as __nuxt_component_0 } from './nuxt-link-bJNpUmJ5.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-img-CpxQxjce.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_3 } from './tag-BXt0q8Nz.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'file://C:/Users/Phong/Desktop/Materials/repo/nuxt-blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-500"
  }, _attrs))}><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo/arrow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    path: { default: "/" },
    title: { default: "no-title" },
    date: { default: "no-date" },
    description: { default: "no-description" },
    image: { default: "/blogs-img/blog.jpg" },
    alt: { default: "no-alt" },
    ogImage: { default: "/blogs-img/blog.jpg" },
    tags: { default: () => [] },
    published: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1$1;
      const _component_LogoDate = __nuxt_component_2$1;
      const _component_LogoTag = __nuxt_component_3;
      const _component_LogoArrow = __nuxt_component_4;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: _ctx.path }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500",
              width: "300",
              src: _ctx.image,
              alt: _ctx.alt
            }, null, _parent2, _scopeId));
            _push2(`<div class="px-3 pb-4"${_scopeId}><div class="text-black dark:text-zinc-300 pt-3 pb-2"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogoDate, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.date)}</div><div class="flex items-center gap-1 flex-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LogoTag, null, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.tags, (tag) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div></div><h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"${_scopeId}>${ssrInterpolate(_ctx.title)}</h2><p class="text-ellipsis line-clamp-2 text-base"${_scopeId}>${ssrInterpolate(_ctx.description)}</p><div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2"${_scopeId}><p${_scopeId}>Read More</p>`);
            _push2(ssrRenderComponent(_component_LogoArrow, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                class: "lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500",
                width: "300",
                src: _ctx.image,
                alt: _ctx.alt
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "px-3 pb-4" }, [
                createVNode("div", { class: "text-black dark:text-zinc-300 pt-3 pb-2" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_LogoDate),
                    createTextVNode(" " + toDisplayString(_ctx.date), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-1 flex-wrap" }, [
                    createVNode(_component_LogoTag),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tags, (tag) => {
                      return openBlock(), createBlock("span", { key: tag }, toDisplayString(tag), 1);
                    }), 128))
                  ])
                ]),
                createVNode("h2", { class: "text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400" }, toDisplayString(_ctx.title), 1),
                createVNode("p", { class: "text-ellipsis line-clamp-2 text-base" }, toDisplayString(_ctx.description), 1),
                createVNode("div", { class: "flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2" }, [
                  createVNode("p", null, "Read More"),
                  createVNode(_component_LogoArrow)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 500 500",
    width: "100%",
    height: "100%"
  }, _attrs))}><defs><clipPath id="freepik--clip-path--inject-47"><path d="M351.92,265.46s-12.78,6.39-21.79,13.9-20.29,6.76-20.29,6.76,4.13,4.51,3.75,7.89-1.88,9.77-1.88,9.77-9.76,31.94-10.89,35-.75,9,0,15-1.88,13.53-4.14,16.91,1.13,14.28,1.13,20.66-4.88,13.53-10.14,14.66a15,15,0,0,1-9.77-1.51s-.38,1.13-5.64.38-5.63-3.38-5.63-3.38-5.27-1.88-5.27-5.26,3-9,9.4-10.9,9.77-8.26,10.52-14.65,5.64-34.2,6.39-44-2.26-22.54-2.63-21.41-13.91,25.17-19.54,35.32-6,9.39-6,13.15-4.14,9-8.27,10.52-4.89,7.51-7.14,11.65-8.64,7.14-14.65,9-9.4,0-9.4,0a9.13,9.13,0,0,1-5.26-1.88,10.2,10.2,0,0,1-3-4.14,6.39,6.39,0,0,1-.38-9.39c4.51-5.26,15.78-4.88,20.29-5.64s2.63-.75,8.64-6.76,21.8-47.34,21.8-53.73-28.94-46.22-31.57-52.61,3-19.53,1.13-25.55S214,201.58,214,201.58l38.33-10.52s8.64,12.4,17.28,14.65,21,6.77,34.19.76,28.94-16.91,44-18.79" style="${ssrRenderStyle({ "fill": "#fff", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path></clipPath></defs><g id="freepik--background-simple--inject-47"><path d="M81.28,287.58c5.82,8.22-3.18-20.07-3.18-20.07L88,283.79V255c0-16.27,19.26-45.7,19.26-45.7s1.1,19.41,1.65,33.81-5,41.32-5,41.32a59.69,59.69,0,0,1,14.31-30.05C130.92,240,136.43,235,136.43,235s1.1,19.41-4.4,30.68-16,35.05-16,35.05l14.85-13.14-7.7,17.53,18.71-18.16,6.6,14.4,1.65-13.15L154,298.82s2.2-15,0-21.29-4.41-13.77-4.41-13.77,11.56,8.14,14.31,15,4.4,18.78,4.4,18.78,1.1-17.52,10.46-29.42S208,245,208,245s-1.1,21.28-5.5,29.42-12.1,25-12.1,25L208,287.55l-7.15,13.14s1.1-2.5,6.05-4.38,13.76-1.88,13.76-1.88l-1.65,10,7.15-12.52,7.16,10.64-.55-14.4,5,9.39s3.85-8.13,5.5-12.52,8.81-8.13,8.81-8.13-2.76,14.39-2.76,17.52V302l6.06-10.65,3.85,9.39.55-8.13,5.5,8.13.55-10.64L300.41,307l3.3-15.66L314.17,307l8.25-12.53,1.1,10.65,8.26-10,2.2,10,7.15-10.65,2.2,7.52,8.26-6.89s6-71.69-14.71-176.12c0,0-35.92,16.48-65.08,5.84S152.94,95.36,102.31,137.3c-21.06,17.45-31.64,45.23-34.24,74.09C65.79,236.6,66.58,266.84,81.28,287.58Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M81.28,287.58c5.82,8.22-3.18-20.07-3.18-20.07L88,283.79V255c0-16.27,19.26-45.7,19.26-45.7s1.1,19.41,1.65,33.81-5,41.32-5,41.32a59.69,59.69,0,0,1,14.31-30.05C130.92,240,136.43,235,136.43,235s1.1,19.41-4.4,30.68-16,35.05-16,35.05l14.85-13.14-7.7,17.53,18.71-18.16,6.6,14.4,1.65-13.15L154,298.82s2.2-15,0-21.29-4.41-13.77-4.41-13.77,11.56,8.14,14.31,15,4.4,18.78,4.4,18.78,1.1-17.52,10.46-29.42S208,245,208,245s-1.1,21.28-5.5,29.42-12.1,25-12.1,25L208,287.55l-7.15,13.14s1.1-2.5,6.05-4.38,13.76-1.88,13.76-1.88l-1.65,10,7.15-12.52,7.16,10.64-.55-14.4,5,9.39s3.85-8.13,5.5-12.52,8.81-8.13,8.81-8.13-2.76,14.39-2.76,17.52V302l6.06-10.65,3.85,9.39.55-8.13,5.5,8.13.55-10.64L300.41,307l3.3-15.66L314.17,307l8.25-12.53,1.1,10.65,8.26-10,2.2,10,7.15-10.65,2.2,7.52,8.26-6.89s6-71.69-14.71-176.12c0,0-35.92,16.48-65.08,5.84S152.94,95.36,102.31,137.3c-21.06,17.45-31.64,45.23-34.24,74.09C65.79,236.6,66.58,266.84,81.28,287.58Z" style="${ssrRenderStyle({ "fill": "#fff", "opacity": "0.7000000000000001" })}"></path></g><g id="freepik--Shadow--inject-47"><path d="M343.61,363.49l-9.86-7.9-3.95,5.13-3.55-5.13-6.71,7.5-2-7.89-1.19,7.5a18.87,18.87,0,0,0-9.47-7.11c-6.09-1.83-13.81-.79-13.81-.79l11.44,6.71L293.49,358l-.39,5.13-5.92-3.94-1.58,4.34S284,358,284,356s.4-7.5.4-7.5-4.34,4.34-4.34,7.89v9.08s-.4-5.13-6.71-6.71a52.48,52.48,0,0,0-11.45-1.58l4.74,5.53H260L254,369.8l-3.16-7.1-4.34,5.13-7.1-3.95-1.58,3.95-9.07-5.92-2-5.13v5.52a8.31,8.31,0,0,0-4.73-1.18c-3.16,0-18.94.39-18.94.39l7.89,3.55L206.68,369s-5.53-1.58-7.9-3.55-12.23-4.34-12.23-4.34l5.53,8.68-4.35-1.58-3.15,7.5L182.21,367l-.39,6.71L176.69,369l-.79,4.34-.79-7.5a33.34,33.34,0,0,0-2,5.13,59.69,59.69,0,0,1-3.15,7.5l1.58-9.47v-7.1l-2,6.71-3.94,7.1-7.11-4,2.77,5.13H153l2,4.34-11.84.4s-9.07,1.58-11.44,2-8.29,2.37-8.29,2.37l18.15-.79-7.49,4.34,20.12,3.55-9.47,4.34,15-.39-1.19-2.37,5.92,4.74,4-5.92,1.18,5.52,2.37-3.94,1.58,5.92,9.07-10.27-3.15,11.45,7.1-3.55,2,5.92,3.95-5.13,9.08,6.31V395.45l7.1,4.74.39-4.35s7.5,0,9.08,2.77,2.76,5.13,2.76,5.13l2.47-6.48.69-1.81,7.1-7.89A20.56,20.56,0,0,0,228,397c-.4,5.52-.79,9.08-.79,9.08l7.1-11.05.79,7.1,6.31-4,7.9,6.71.39-6.71,5.53,4.74,2-3.16,3.16,3.16,7.89-2.76.79,3.94,3.55-3.15,1.58,5.13s.39-5.13.39-8.69v-4.73l6.71,16.57L288,399.4l2,5.52,2.76-7.5v6.32l4.35-7.11.39,5.13,8.68-6.31-.79,5.92,9.08-3.55-1.18,5.52,7.49-5.13V403H329l15.39,1.58-10.65-5.13,23.43.2s8.92,2.16,10.11,2.16-22.5-8.28-22.5-8.28l-11-2,13-.79-9.47-3.55S340.85,372.56,343.61,363.49Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M343.61,363.49l-9.86-7.9-3.95,5.13-3.55-5.13-6.71,7.5-2-7.89-1.19,7.5a18.87,18.87,0,0,0-9.47-7.11c-6.09-1.83-13.81-.79-13.81-.79l11.44,6.71L293.49,358l-.39,5.13-5.92-3.94-1.58,4.34S284,358,284,356s.4-7.5.4-7.5-4.34,4.34-4.34,7.89v9.08s-.4-5.13-6.71-6.71a52.48,52.48,0,0,0-11.45-1.58l4.74,5.53H260L254,369.8l-3.16-7.1-4.34,5.13-7.1-3.95-1.58,3.95-9.07-5.92-2-5.13v5.52a8.31,8.31,0,0,0-4.73-1.18c-3.16,0-18.94.39-18.94.39l7.89,3.55L206.68,369s-5.53-1.58-7.9-3.55-12.23-4.34-12.23-4.34l5.53,8.68-4.35-1.58-3.15,7.5L182.21,367l-.39,6.71L176.69,369l-.79,4.34-.79-7.5a33.34,33.34,0,0,0-2,5.13,59.69,59.69,0,0,1-3.15,7.5l1.58-9.47v-7.1l-2,6.71-3.94,7.1-7.11-4,2.77,5.13H153l2,4.34-11.84.4s-9.07,1.58-11.44,2-8.29,2.37-8.29,2.37l18.15-.79-7.49,4.34,20.12,3.55-9.47,4.34,15-.39-1.19-2.37,5.92,4.74,4-5.92,1.18,5.52,2.37-3.94,1.58,5.92,9.07-10.27-3.15,11.45,7.1-3.55,2,5.92,3.95-5.13,9.08,6.31V395.45l7.1,4.74.39-4.35s7.5,0,9.08,2.77,2.76,5.13,2.76,5.13l2.47-6.48.69-1.81,7.1-7.89A20.56,20.56,0,0,0,228,397c-.4,5.52-.79,9.08-.79,9.08l7.1-11.05.79,7.1,6.31-4,7.9,6.71.39-6.71,5.53,4.74,2-3.16,3.16,3.16,7.89-2.76.79,3.94,3.55-3.15,1.58,5.13s.39-5.13.39-8.69v-4.73l6.71,16.57L288,399.4l2,5.52,2.76-7.5v6.32l4.35-7.11.39,5.13,8.68-6.31-.79,5.92,9.08-3.55-1.18,5.52,7.49-5.13V403H329l15.39,1.58-10.65-5.13,23.43.2s8.92,2.16,10.11,2.16-22.5-8.28-22.5-8.28l-11-2,13-.79-9.47-3.55S340.85,372.56,343.61,363.49Z" style="${ssrRenderStyle({ "fill": "#fff", "opacity": "0.5" })}"></path></g><g id="freepik--Dog--inject-47"><path d="M351.92,265.46s-12.78,6.39-21.79,13.9-20.29,6.76-20.29,6.76,4.13,4.51,3.75,7.89-1.88,9.77-1.88,9.77-9.76,31.94-10.89,35-.75,9,0,15-1.88,13.53-4.14,16.91,1.13,14.28,1.13,20.66-4.88,13.53-10.14,14.66a15,15,0,0,1-9.77-1.51s-.38,1.13-5.64.38-5.63-3.38-5.63-3.38-5.27-1.88-5.27-5.26,3-9,9.4-10.9,9.77-8.26,10.52-14.65,5.64-34.2,6.39-44-2.26-22.54-2.63-21.41-13.91,25.17-19.54,35.32-6,9.39-6,13.15-4.14,9-8.27,10.52-4.89,7.51-7.14,11.65-8.64,7.14-14.65,9-9.4,0-9.4,0a9.13,9.13,0,0,1-5.26-1.88,10.2,10.2,0,0,1-3-4.14,6.39,6.39,0,0,1-.38-9.39c4.51-5.26,15.78-4.88,20.29-5.64s2.63-.75,8.64-6.76,21.8-47.34,21.8-53.73-28.94-46.22-31.57-52.61,3-19.53,1.13-25.55S214,201.58,214,201.58l38.33-10.52s8.64,12.4,17.28,14.65,21,6.77,34.19.76,28.94-16.91,44-18.79" style="${ssrRenderStyle({ "fill": "#fff" })}"></path><g style="${ssrRenderStyle({ "clip-path": "url(#freepik--clip-path--inject-47)" })}"><path d="M265.5,340.61c5.63-10.15,19.16-34.2,19.54-35.32.08-.26.31.23.6,1.25-.44-5.54-8.37-7.94-12.89-9.55-5.55-2-12.68-8.72-18.63-17.05S242.23,259.72,241,251.4s-1.19-26.17,7.53-34.1,9.51-16.65,9.51-16.65a90.09,90.09,0,0,0-8.64-8.79L214,201.58s15.78,17.66,17.66,23.67-3.76,19.17-1.13,25.55,31.57,46.22,31.57,52.61-15.79,47.72-21.8,53.73-4.13,6-8.64,6.76c-2.16.36-5.89.47-9.68,1.06a2.84,2.84,0,0,0,1.59,1c9.12,2.38,13.08,4,14.67,8.33.74,2-.15,5-1.2,7.58,3.12-1.62,5.74-3.6,7-5.95,2.25-4.14,3-10.15,7.14-11.65s8.27-6.76,8.27-10.52S259.86,350.75,265.5,340.61Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M265.5,340.61c5.63-10.15,19.16-34.2,19.54-35.32.08-.26.31.23.6,1.25-.44-5.54-8.37-7.94-12.89-9.55-5.55-2-12.68-8.72-18.63-17.05S242.23,259.72,241,251.4s-1.19-26.17,7.53-34.1,9.51-16.65,9.51-16.65a90.09,90.09,0,0,0-8.64-8.79L214,201.58s15.78,17.66,17.66,23.67-3.76,19.17-1.13,25.55,31.57,46.22,31.57,52.61-15.79,47.72-21.8,53.73-4.13,6-8.64,6.76c-2.16.36-5.89.47-9.68,1.06a2.84,2.84,0,0,0,1.59,1c9.12,2.38,13.08,4,14.67,8.33.74,2-.15,5-1.2,7.58,3.12-1.62,5.74-3.6,7-5.95,2.25-4.14,3-10.15,7.14-11.65s8.27-6.76,8.27-10.52S259.86,350.75,265.5,340.61Z" style="${ssrRenderStyle({ "fill": "#fff", "opacity": "0.5" })}"></path><path d="M343.84,272.28c5.84-4.31,11.77-7.8,11.77-7.8s4.36,0,2.38-19-4.76-58.68-4.76-58.68c-12.9-.29-23.4,5-28,7.85C331.35,204.07,348.36,234.29,343.84,272.28Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M343.84,272.28c5.84-4.31,11.77-7.8,11.77-7.8s4.36,0,2.38-19-4.76-58.68-4.76-58.68c-12.9-.29-23.4,5-28,7.85C331.35,204.07,348.36,234.29,343.84,272.28Z" style="${ssrRenderStyle({ "fill": "#fff", "opacity": "0.5" })}"></path></g><path d="M351.92,265.46s-12.78,6.39-21.79,13.9-20.29,6.76-20.29,6.76,4.13,4.51,3.75,7.89-1.88,9.77-1.88,9.77-9.76,31.94-10.89,35-.75,9,0,15-1.88,13.53-4.14,16.91,1.13,14.28,1.13,20.66-4.88,13.53-10.14,14.66a15,15,0,0,1-9.77-1.51s-.38,1.13-5.64.38-5.63-3.38-5.63-3.38-5.27-1.88-5.27-5.26,3-9,9.4-10.9,9.77-8.26,10.52-14.65,5.64-34.2,6.39-44-2.26-22.54-2.63-21.41-13.91,25.17-19.54,35.32-6,9.39-6,13.15-4.14,9-8.27,10.52-4.89,7.51-7.14,11.65-8.64,7.14-14.65,9-9.4,0-9.4,0a9.13,9.13,0,0,1-5.26-1.88,10.2,10.2,0,0,1-3-4.14,6.39,6.39,0,0,1-.38-9.39c4.51-5.26,15.78-4.88,20.29-5.64s2.63-.75,8.64-6.76,21.8-47.34,21.8-53.73-28.94-46.22-31.57-52.61,3-19.53,1.13-25.55S214,201.58,214,201.58l38.33-10.52s8.64,12.4,17.28,14.65,21,6.77,34.19.76,28.94-16.91,44-18.79" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M247.46,259.45s-2.63,6,1.51,13.15S261.36,291,268.5,295.14s15.79,6,16.54,10.15" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M320,198.12c-5.66,3-11.14,6-16.22,8.35-9.88,4.51-19.33,3.09-27.09,1.15,2.68,2.47,5.65,7.13,6,15.75.75,16.16-4.88,23.3,0,30.82s10.9,9.77,15,17.28,7.52,12,13.53,12,22.92-18,25.93-37.19C340.21,227.56,326.62,202.72,320,198.12Z" style="${ssrRenderStyle({ "fill": "#263238", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M220,385s1.88-11.65,9.4-12" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M211.77,378.93s5.63-9.77,12-9" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M266.63,401.48s-.38-7.89,7.89-13.9" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M277.9,404.48s-.38-9.76,5.26-14.27" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M329.65,85.34s44.45,178.42,10,296.74" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M365.42,203.11c.29,4.17.48,8.15.54,11.82" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M353.44,117.27s8.25,43.42,11.37,78.19" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M372.85,164.85s8.76,55.71,6.88,105.17" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M369.09,245.6s.54,50-4.38,78.26" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M394.53,285.59c-.28,3-.62,6-1,8.84" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M392.88,192.39s4.56,45.1,2.4,83.22" style="${ssrRenderStyle({ "fill": "none", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2px" })}"></path><path d="M265,151.59s-38.76-16.54-42.07-16.54S218.69,145.45,213,154s-15.6,9.92-17.49,17,3.31,26.94,8.51,32.62,13.7-2.37,18.43,1.89,6.62,10.87,14.18,9,25.53-9.93,27.89-15.6-1.42-17-1.42-26.47S266.9,156.32,265,151.59Z" style="${ssrRenderStyle({ "fill": "#263238", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M227.48,166.87c-7,0-12.51-5.15-12.74-5.36a1.14,1.14,0,0,1,0-1.6,1.12,1.12,0,0,1,1.59,0c.05,0,5.09,4.74,11.19,4.74a1.13,1.13,0,0,1,0,2.26Z" style="${ssrRenderStyle({ "fill": "#fff" })}"></path><path d="M252.46,169.79a1.19,1.19,0,0,1-.37-.06,1.13,1.13,0,0,1-.69-1.44,6,6,0,0,0-2-6.46c-3.25-2.6-7.49.44-7.67.57a1.14,1.14,0,0,1-1.58-.25,1.13,1.13,0,0,1,.24-1.57c.24-.17,5.81-4.19,10.42-.51a8.27,8.27,0,0,1,2.75,9A1.14,1.14,0,0,1,252.46,169.79Z" style="${ssrRenderStyle({ "fill": "#fff" })}"></path><path d="M246.88,178.23a2.13,2.13,0,1,1-2.13-2.12A2.13,2.13,0,0,1,246.88,178.23Z" style="${ssrRenderStyle({ "fill": "#fff" })}"></path><path d="M220.83,168.4a2.13,2.13,0,1,1-2.13-2.13A2.12,2.12,0,0,1,220.83,168.4Z" style="${ssrRenderStyle({ "fill": "#fff" })}"></path><path d="M212.61,204.31s5.92,5.35,11.84,6.2,3.94-4.23,1.41-6.2S210.92,197.54,212.61,204.31Z" style="${ssrRenderStyle({ "fill": "#fff", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M239.7,185.94s.54-6.38-1.59-10.63-6.12-5.58-10.1-2.39-3.72,3.19-14.09,7.17c-8,3.07-13.71,5.82-16,10.66,1.66,5.46,3.87,10.43,6.08,12.84,5.2,5.67,13.7-2.37,18.43,1.89s6.62,10.87,14.18,9a63,63,0,0,0,7.59-2.59,14.71,14.71,0,0,0,1.58-12.1C244,194.72,240.77,191,239.7,185.94Z" style="${ssrRenderStyle({ "fill": "#fff", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M230.93,189.66s-10.1-5-13.56-2.92,1.07,13,6.12,14.89,13.56-.53,14.62-3.46S233.86,191.26,230.93,189.66Z" style="${ssrRenderStyle({ "fill": "#263238", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M230.93,192.32s-6.64-4-6.91-1.86,6.91,5.58,8.24,4.26S230.93,192.32,230.93,192.32Z" style="${ssrRenderStyle({ "fill": "#fff", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M199.3,124.54s-1.33,11.16,1.86,18.6,4.52,12.76,8.77,12.5,19.14-10.9,22.06-17.28,2.13-11.43-1.86-13.29-10.9-1.6-17.28-2.66S200.89,119.75,199.3,124.54Z" style="${ssrRenderStyle({ "fill": "#263238", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M232,138.36s-5.79,14.07-17.71,17.48" style="${ssrRenderStyle({ "fill": "none", "stroke": "#fff", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M276.39,152.18s-6.38-6.64-11.17-8.24-9,4.79-9.3,10.63,1.06,21,5.85,23.93,13-2.92,21-7.18,9-8.24,5.58-12.23S276.39,152.18,276.39,152.18Z" style="${ssrRenderStyle({ "fill": "#263238", "stroke": "#263238", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path><path d="M256.85,148.46s-4.92,16.95,4.92,30" style="${ssrRenderStyle({ "fill": "none", "stroke": "#fff", "stroke-linecap": "round", "stroke-linejoin": "round" })}"></path></g><g id="freepik--Plants--inject-47"><path d="M389.64,338.49s3.06-7.34,5.51-7.34,9.18,7.34,9.18,7.34-2.45-8.57,1.83-14.07,22,8.56,22.64,11-9.18-1.22-14.07,4.89A39.71,39.71,0,0,0,408,353.17s6.73-8.56,14.07,0,9.79,24.47,9.79,24.47-12.85-10.4-17.74-10.4H401.88s6.12,6.12,6.12,12.85a104,104,0,0,0,.61,11.62l-7.95-11.62-1.84,13.46s-9.18-7.95-11.62-10.4-8.57-9.79-8.57-9.79-1.83,3.06-.61,10.4-5.51,22-5.51,22-1.22-6.73-3.67-15.3a96.39,96.39,0,0,1-3.06-17.13,54.41,54.41,0,0,1-6.73,19c-5.5,9.17-14.07,20.8-14.07,20.8l4.29-23.25s-4.29,3.06-8.57,5.5S326,400.89,326,400.89L341.92,377s-13.46-.61-16.51,2.45-14.08,11.62-14.08,11.62,5.51-20.19,11.63-26.92,23.25-10.4,23.25-10.4l-18.36-2.44s12.85-11.63,19.58-12.24,17.74,1.22,17.74,1.22Z" style="${ssrRenderStyle({ "fill": "#263238" })}"></path><path d="M359.05,339.71S347.43,325,335.19,325s-16.51,36.09-16.51,36.09S345.59,339.71,359.05,339.71Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M359.05,339.71s12.85-11,24.48-10.4,15.9,22,11.62,31.2a153.38,153.38,0,0,1-8.57,15.91S374.35,345.22,359.05,339.71Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M367,351.34s-9.18-10.4-16.52-10.4-11.63,9.17-12.24,21.41-.61,25.69-.61,25.69,27.53-28.14,30.59-29.36S367,351.34,367,351.34Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path><path d="M406.16,324.42s2.45-6.73,7.34-6.73,18.36.61,19,12.23.61,23.86.61,23.86S419.62,323.19,406.16,324.42Z" style="${ssrRenderStyle({ "fill": "#92e3a9" })}"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo/confused.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_LogoConfused = __nuxt_component_1;
  const _component_LogoArrow = __nuxt_component_4;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LogoConfused, null, null, _parent2, _scopeId));
        _push2(`</div><div class="p-5"${_scopeId}><h2 class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"${_scopeId}> No Post Available </h2><div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"${_scopeId}><p${_scopeId}>Back To Home</p>`);
        _push2(ssrRenderComponent(_component_LogoArrow, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500" }, [
            createVNode(_component_LogoConfused)
          ]),
          createVNode("div", { class: "p-5" }, [
            createVNode("h2", { class: "text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400" }, " No Post Available "),
            createVNode("div", { class: "flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2" }, [
              createVNode("p", null, "Back To Home"),
              createVNode(_component_LogoArrow)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$2 as _, __nuxt_component_2 as a, __nuxt_component_4 as b };
//# sourceMappingURL=empty-9MW8If1G.mjs.map
