import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Test",
  __ssrInlineRender: true,
  props: {
    title: { default: "title" },
    description: { default: "description" },
    headline: { default: "headline" },
    link: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const formattedTitle = computed(() => props.title.length > 70 ? `${props.title.slice(0, 60)}...` : props.title);
    const formattedDescription = computed(() => props.description.length > 100 ? `${props.description}...` : props.description);
    const formattedLink = computed(() => {
      if (props.link.endsWith("jpg") || props.link.endsWith("png"))
        return props.link;
      else return "/blogs-img/blog.jpg";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col justify-center bg-[#020420]" }, _attrs))}><svg class="absolute right-0 top-0" width="629" height="593" viewBox="0 0 629 593" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_199_94966)"><path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#00DC82"></path></g><defs><filter id="filter0_f_199_94966" x="0.873535" y="-659" width="1255.25" height="1251.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966"></feGaussianBlur></filter></defs></svg><div class="w-[600px] pl-[100px]">`);
      if (_ctx.headline) {
        _push(`<p class="uppercase text-[24px] text-[#00DC82] mb-4 font-semibold">${ssrInterpolate(_ctx.headline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="w-[600px] m-0 text-[40px] font-semibold mb-4 text-white flex items-center"><span>${ssrInterpolate(formattedTitle.value)}</span></h1><p class="text-[25px] text-[#E4E4E7] leading-tight">${ssrInterpolate(formattedDescription.value)}</p></div>`);
      if (formattedLink.value) {
        _push(`<div class="absolute top-[200px] right-[70px]"><img${ssrRenderAttr("src", formattedLink.value)}${ssrRenderAttr("alt", _ctx.title)} class="w-96 h-52 rounded-lg object-cover"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OgImage/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Test-Blqcvs0i.js.map
