import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B331rUhd.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BXucKKop.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - STIFIn Muslimah" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Tentang STIFIn Muslimah", "highlightText": "STIFIn Muslimah", "description": "Membantu Muslimah mengenal potensi genetik untuk hidup lebih selaras dan SuksesMulia." })} <section class="py-16"> <div class="container-custom"> <div class="max-w-3xl mx-auto prose dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-lg"> <p class="lead"> <strong>STIFIn Muslimah</strong> hadir sebagai platform edukasi dan layanan tes kepribadian berbasis genetik (STIFIn) yang dirancang khusus untuk membantu Muslimah memahami potensi terbaik dalam dirinya.
</p> <br> <h4>✅ Mengapa Kami Hadir</h4> <p>
Banyak Muslimah yang merasa belum menemukan arah hidup, potensi unik, dan cara terbaik untuk berkembang. Kami percaya setiap orang diciptakan dengan <strong>genetik dominan</strong> yang bisa menjadi panduan dalam karier, peran keluarga, pengembangan diri, hingga hubungan sosial.
</p> <p>
Dengan pemahaman yang tepat, Muslimah dapat mengambil keputusan lebih selaras dengan fitrah dirinya, hidup penuh kebermaknaan, dan mencapai <strong>SuksesMulia</strong>.
</p> <br> <h4>✅ Apa yang Kami Tawarkan</h4> <ul> <li><strong>Tes STIFIn</strong> — Mengungkap tipe genetik utama yang memengaruhi cara berpikir, merasa, dan bertindak.</li> <li><strong>Konsultasi Personal</strong> — Membantu memahami hasil tes dan menyusunnya menjadi rencana pengembangan diri.</li> <li><strong>Artikel & Konten Edukasi</strong> — Inspirasi, tips parenting, karier, hubungan, dan pengembangan diri sesuai kepribadian.</li> <li><strong>Program Komunitas</strong> — Menghubungkan Muslimah yang ingin bertumbuh bersama dan saling menguatkan.</li> </ul> <br> <h4>✅ Visi & Misi</h4> <p> <strong>Visi:</strong> Menjadi pusat edukasi dan pengembangan potensi Muslimah berbasis ilmu kepribadian genetik.
</p> <p> <strong>Misi:</strong> </p> <ul> <li>Membantu Muslimah mengenali potensi unik sejak dini.</li> <li>Memberikan edukasi yang aplikatif dan mudah dipahami.</li> <li>Mendukung peran Muslimah dalam keluarga, karier, dan masyarakat.</li> </ul> <br> <h4>✅ Komitmen Kami</h4> <p>
Kami berkomitmen memberikan pengalaman tes yang akurat, data yang terjaga privasinya, dan edukasi yang dapat diimplementasikan langsung dalam kehidupan sehari-hari.
</p> <p class="mt-8">
Ingin mengenal dirimu lebih dalam? <a href="/contact">Hubungi kami</a> dan mulailah perjalanan menemukan potensi terbaikmu hari ini.
</p> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/about.astro", void 0);

const $$file = "D:/GitHub/stifin/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
