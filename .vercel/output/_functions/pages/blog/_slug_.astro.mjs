import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, h as addAttribute } from '../../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CuRfGUrV.mjs';
import { s as sanityClient } from '../../chunks/sanityClient_D1-zcEns.mjs';
import { jsx } from 'react/jsx-runtime';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../../renderers.mjs';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const components = {
  types: {
    image: ({ value }) => /* @__PURE__ */ jsx(
      "img",
      {
        src: urlFor(value).width(1200).url(),
        alt: value?.alt || "Image",
        className: "my-6 rounded-lg",
        loading: "lazy"
      }
    )
  }
};
function PortableBody({ value }) {
  return /* @__PURE__ */ jsx(PortableText, { value, components });
}

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const posts = await sanityClient.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return posts.filter((p) => p.slug).map((p) => ({ params: { slug: p.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    mainImage{asset->{url}},
    publishedAt,
    body,
    "category": categories[0]->title
  }`,
    { slug }
  );
  const formatDate = (d) => d ? new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post?.title ?? "Artikel", "description": post?.description ?? "" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container-custom py-12"> <article class="max-w-3xl mx-auto"> <!-- Header Artikel --> <div class="mb-8"> <a href="/blog" class="text-sm text-primary-600 hover:underline">&larr; Kembali ke Blog</a> <div class="flex items-center gap-2 mt-4 text-sm text-gray-500"> ${post?.category && renderTemplate`<span class="px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium"> ${post.category} </span>`} ${post?.publishedAt && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span>•</span> <span>${formatDate(post.publishedAt)}</span> ` })}`} </div> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mt-4">${post?.title}</h1> ${post?.mainImage?.asset?.url && renderTemplate`<img${addAttribute(post.mainImage.asset.url, "src")}${addAttribute(post.title, "alt")} class="w-full h-80 object-cover rounded-xl mt-6">`} </div> <!-- Konten Artikel --> <div class="prose dark:prose-invert max-w-none"> ${renderComponent($$result2, "PortableBody", PortableBody, { "client:load": true, "value": post?.body, "client:component-hydration": "load", "client:component-path": "D:/GitHub/stifin/src/components/PortableBody", "client:component-export": "default" })} </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/blog/[slug].astro", void 0);

const $$file = "D:/GitHub/stifin/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
