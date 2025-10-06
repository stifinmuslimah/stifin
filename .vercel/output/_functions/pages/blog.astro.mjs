import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B331rUhd.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BXucKKop.mjs';
import { s as sanityClient } from '../chunks/sanityClient_D1-zcEns.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  description,
  mainImage{
    asset->{url}
  },
  publishedAt,
  "authorName": author->name,
  "authorRole": author->role,
  "authorImage": author->image{
    asset->{url}
  }
}`);
  const categories = [...new Set(posts.map((p) => p.category || "Uncategorized"))];
  const formatDate = (d) => d ? new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "";
  const slugify = (s) => String(s ?? "Uncategorized").trim().toLowerCase().replace(/\s+/g, "-");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - STIFIn Muslimah", "description": "Temukan wawasan STIFIn, potensi genetik, dan pengembangan diri untuk hidup lebih selaras dan SuksesMulia." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Blog ", "highlightText": "STIFIn Muslimah", "description": "Temukan wawasan STIFIn, potensi genetik, dan pengembangan diri untuk hidup lebih selaras dan SuksesMulia." })} <!-- Category Filter --> <div class="container-custom py-8"> <div class="flex flex-wrap gap-4 justify-center mb-12"> <a href="#" class="px-4 py-2 rounded-full bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors">
All Posts
</a> ${categories.map((category) => {
    const cat = category ?? "Uncategorized";
    return renderTemplate`<a${addAttribute("#" + slugify(cat), "href")} class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"> ${cat} </a>`;
  })} </div> <!-- GRID LIST BLOG --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post, index) => {
    const image = post.mainImage?.asset?.url ?? "/images/default.jpg";
    return renderTemplate`<div class="card border border-gray-200 dark:border-gray-700 overflow-hidden slide-up"${addAttribute("animation-delay: " + index * 100 + "ms", "style")}> <a${addAttribute("/blog/" + post.slug, "href")} class="block"> <img${addAttribute(image, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover" loading="lazy"> </a> <div class="p-6"> <div class="flex items-center mb-4"> <span class="text-sm font-medium text-primary-600 dark:text-primary-400">${post.category ?? "Uncategorized"}</span> <span class="mx-2 text-gray-300 dark:text-gray-600">•</span> <span class="text-sm text-gray-500 dark:text-gray-400">${formatDate(post.publishedAt)}</span> </div> <a${addAttribute("/blog/" + post.slug, "href")} class="block mb-3"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">${post.title}</h2> </a> <p class="text-gray-600 dark:text-gray-300 mb-6"> ${post.description ?? ""} </p> <!-- AUTHOR INFO --> ${post.authorName && renderTemplate`<div class="flex items-center"> ${post.authorImage?.asset?.url && renderTemplate`<img${addAttribute(post.authorImage.asset.url, "src")}${addAttribute(post.authorName, "alt")} class="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy">`} <div> <p class="font-medium text-gray-900 dark:text-white">${post.authorName}</p> <p class="text-sm text-gray-500 dark:text-gray-400"> ${post.authorRole ?? "Author"} </p> </div> </div>`} </div> </div>`;
  })} </div> <div class="mt-12 flex justify-center"> <a href="#" class="btn-outline">
Load More Articles
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/blog/index.astro", void 0);

const $$file = "D:/GitHub/stifin/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
