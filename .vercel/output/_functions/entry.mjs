import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bpf9nvst.mjs';
import { manifest } from './manifest_CUDXOF_Y.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/career.astro.mjs');
const _page6 = () => import('./pages/case-study.astro.mjs');
const _page7 = () => import('./pages/changelog.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/faqs.astro.mjs');
const _page10 = () => import('./pages/features.astro.mjs');
const _page11 = () => import('./pages/integrations.astro.mjs');
const _page12 = () => import('./pages/privacy-policy.astro.mjs');
const _page13 = () => import('./pages/promotor.astro.mjs');
const _page14 = () => import('./pages/reviews.astro.mjs');
const _page15 = () => import('./pages/terms-conditions.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/career.astro", _page5],
    ["src/pages/case-study.astro", _page6],
    ["src/pages/changelog.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/faqs.astro", _page9],
    ["src/pages/features.astro", _page10],
    ["src/pages/integrations.astro", _page11],
    ["src/pages/privacy-policy.astro", _page12],
    ["src/pages/promotor.astro", _page13],
    ["src/pages/reviews.astro", _page14],
    ["src/pages/terms-conditions.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4badb15c-aa10-42c6-bd0a-f2ea30bcdb94",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
