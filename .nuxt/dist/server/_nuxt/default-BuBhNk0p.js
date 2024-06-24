import { _ as __nuxt_component_0 } from "./nuxt-link-bJNpUmJ5.js";
import { _ as __nuxt_component_1 } from "./client-only-BWPHYnFW.js";
import __nuxt_component_0$1 from "./Icon-rHNiUpLb.js";
import { p as useState, v as navbarData, w as footerData, b as useRoute } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ufo";
import "hookable";
import "./index-BNaLTCrF.js";
import "klona";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "devalue";
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 border-b dark:border-gray-800 font-semibold" }, _attrs))}><div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline"><ul class="flex items-baseline space-x-5"><li class="text-base sm:text-2xl font-bold">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(navbarData).homeTitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(navbarData).homeTitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blogs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blogs `);
          } else {
            return [
              createTextVNode(" Blogs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/categories" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Categories `);
          } else {
            return [
              createTextVNode(" Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li title="About Me">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        "aria-label": "About me"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "svg-spinners:180-ring",
              size: "20"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "svg-spinners:180-ring",
                size: "20"
              })
            ];
          }
        })
      }, _parent));
      _push(`</li></ul></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "site",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-black dark:text-zinc-300 text-base py-1 font-semibold"> About This Site </p><p class="py-2 dark:text-zinc-300">${ssrInterpolate(unref(footerData).aboutTheSite)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/site.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "developer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-black dark:text-zinc-300 text-2xl py-1 font-semibold">${ssrInterpolate(unref(footerData).author)}</p><p class="py-2 dark:text-zinc-300">${ssrInterpolate(unref(footerData).aboutAuthor)}</p><div class="my-3 space-x-3 pb-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://github.com/nurRiyad",
        target: "_blank",
        class: "p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]",
        "aria-label": "Github"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa:github",
              size: "1em"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa:github",
                size: "1em"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/in/nur-riyad/",
        target: "_blank",
        class: "p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]",
        "aria-label": "LinkedIn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa:linkedin-square",
              size: "1em"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa:linkedin-square",
                size: "1em"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://twitter.com/qdnvubp",
        target: "_blank",
        class: "p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]",
        "aria-label": "Twitter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa:twitter-square",
              size: "1em"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa:twitter-square",
                size: "1em"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://stackoverflow.com/users/16781395/nur-riyad",
        target: "_blank",
        class: "p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]",
        "aria-label": "StackOverflow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa:stack-overflow",
              size: "1em"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "fa:stack-overflow",
                size: "1em"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/developer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center" }, _attrs))}><p class="text-black dark:text-zinc-300 text-base font-semibold"> Quick Link </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blogs",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Blogs `);
      } else {
        return [
          createTextVNode(" Blogs ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/categories",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Categories `);
      } else {
        return [
          createTextVNode(" Categories ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About Me `);
      } else {
        return [
          createTextVNode(" About Me ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/link.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "connect",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-black dark:text-zinc-300 text-base font-semibold"> Connect With Me </p><p class="dark:text-zinc-300">${ssrInterpolate(unref(footerData).authorInterest)}</p><a href="mailto: alasadnurriyad4@gmail.com" class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm"> Sent Mail </a></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/connect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const path = computed(() => route.fullPath.replace("/", ""));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FooterSite = _sfc_main$5;
      const _component_FooterDeveloper = _sfc_main$4;
      const _component_FooterLink = __nuxt_component_2;
      const _component_FooterConnect = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300" }, _attrs))}><div class="px-6 container max-w-5xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-3">`);
      if (unref(path) === "about") {
        _push(ssrRenderComponent(_component_FooterSite, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_FooterDeveloper, null, null, _parent));
      }
      _push(ssrRenderComponent(_component_FooterLink, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterConnect, null, null, _parent));
      _push(`</div><div class="border-t dark:border-gray-800 mt-5 text-center p-2"> © 2020-2024 No Right is reserved. Who cares 🤷‍♂️? It&#39;s <a href="https://github.com/nurriyad/blog" target="_blank" rel="nofollow" class="underline">open source</a> anyway. </div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainHeader = _sfc_main$6;
  const _component_MainFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "gd-container font-spacegrotesk" }, _attrs))} data-v-b140e7b7><header class="fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10" data-v-b140e7b7>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`</header><main data-v-b140e7b7><div class="p-9" data-v-b140e7b7></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer data-v-b140e7b7>`);
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`</footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b140e7b7"]]);
export {
  _default as default
};
//# sourceMappingURL=default-BuBhNk0p.js.map
