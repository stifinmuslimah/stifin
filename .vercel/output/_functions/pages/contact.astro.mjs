import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B331rUhd.mjs';
import 'clsx';
import { $ as $$HeroSection } from '../chunks/HeroSection_BXucKKop.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="section bg-gray-50 dark:bg-gray-800/50"> <div class="container-custom"> <div class="grid md:grid-cols-2 gap-12"> <div class="slide-up"> <span class="inline-block px-4 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 font-medium text-sm mb-4">
@stifinmuslimah
</span> <h2 class="mb-6 text-gray-900 dark:text-white">Kami Senang Mendengar Kabarmu</h2> <p class="text-gray-600 dark:text-gray-300 mb-8">
Punya pertanyaan tentang STIFIn atau butuh bantuan? Kami siap membantu Kamu di setiap langkah.
</p> <!-- SOCIAL MEDIA --> <div class="mt-8"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3> <div class="flex space-x-4"> <!-- Facebook --> <a href="https://facebook.com/stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Facebook"> <img src="/asetweb/ico-facebook.svg" alt="Facebook" class="w-6 h-6"> </a> <!-- Instagram --> <a href="https://instagram.com/stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Instagram"> <img src="/asetweb/ico-instagram.svg" alt="Instagram" class="w-6 h-6"> </a> <!-- Threads --> <a href="https://www.threads.net/@stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Threads"> <img src="/asetweb/ico-threads.svg" alt="Threads" class="w-6 h-6"> </a> </div> </div> </div> <!-- FORM --> <form x-data="{ name: '', message: '', errors: {} }"> <!-- Nama --> <div class="mb-4"> <label for="name" class="block text-sm font-medium">Nama</label> <input id="name" type="text" x-model="name" @input="errors.name=''" class="w-full px-4 py-2 rounded-lg border" placeholder="Nama lengkap" required> <p class="text-red-500 text-sm mt-1" x-show="errors.name" x-text="errors.name"></p> </div> <!-- Pesan --> <div class="mb-6"> <label for="message" class="block text-sm font-medium">Pesan</label> <textarea id="message" rows="5" x-model="message" @input="errors.message=''" class="w-full px-4 py-2 rounded-lg border" placeholder="Tulis pesanmu" required></textarea> <p class="text-red-500 text-sm mt-1" x-show="errors.message" x-text="errors.message"></p> </div> <!-- Tombol --> <div> <button type="submit" class="w-full btn-primary" x-on:click.prevent="
              errors = {};
              const nm = name.trim();
              const msg = message.trim();

              if (!nm) errors.name = 'Nama wajib diisi';
              if (!msg) errors.message = 'Pesan wajib diisi';

              if (Object.keys(errors).length === 0) {
                const text = encodeURIComponent(\`Halo, saya \${nm}.\n\n\${msg}\`);
                window.location.href = \`https://wa.me/6282164476336?text=\${text}\`;
              }
            ">
Kirim via WhatsApp
</button> </div> </form> </div> </div> </section>`;
}, "D:/GitHub/stifin/src/components/Contact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - STIFIn Muslimah" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Kontak STIFIn Muslimah", "description": "Kami siap membantu menjawab pertanyaan apa pun yang Kamu miliki tentang layanan kami." })} ${renderComponent($$result2, "ContactForm", $$Contact$1, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/contact.astro", void 0);

const $$file = "D:/GitHub/stifin/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
