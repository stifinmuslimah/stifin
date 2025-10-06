import { e as createComponent, f as createAstro, h as addAttribute, n as renderScript, r as renderTemplate, m as maybeRenderHead, k as renderComponent, p as renderSlot, q as renderHead } from './astro/server_kVglWhb0.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/GitHub/stifin/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/GitHub/stifin/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Tombol muncul di pojok kanan bawah -->", '<button id="backToTop" class="back-to-top" aria-label="Back to Top" data-astro-cid-wlspcwf4> <!-- Ikon Panah ke Atas --> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wlspcwf4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" data-astro-cid-wlspcwf4></path> </svg> </button> <script is:global>\n  function initBackToTop() {\n    const btn = document.getElementById("backToTop");\n    if (!btn) return;\n\n    function toggleBtn() {\n      if (window.scrollY > 200) {\n        btn.classList.add("show");\n      } else {\n        btn.classList.remove("show");\n      }\n    }\n\n    window.addEventListener("scroll", toggleBtn);\n    document.addEventListener("astro:page-load", toggleBtn);\n\n    btn.addEventListener("click", () => {\n      window.scrollTo({ top: 0, behavior: "smooth" });\n    });\n  }\n\n  document.addEventListener("astro:page-load", initBackToTop);\n  initBackToTop();\n<\/script>'])), maybeRenderHead());
}, "D:/GitHub/stifin/src/components/BackToTop.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Modern SaaS landing page template with responsive design and modular sections."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' }" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))" :class="{ 'dark': darkMode }"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"`, '><meta name="description"', "><title>", '</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet">', '<!-- Alpine.js --><script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script><!-- Font Awesome untuk ikon sosmed --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-vbV3KfRWkW0Ny6XJvKCrWvXX5sY8A2uSAtqnr0TQmxIhtW7NswfOiI3Kbg4K1BpY+Plh5fpICyGU65p+5j1C1w==" crossorigin="anonymous" referrerpolicy="no-referrer">', '</head> <body class="antialiased bg-white dark:bg-secondary-950 text-secondary-900 dark:text-secondary-100 transition-colors duration-300"> <div id="page-wrapper" class="page-transition-wrapper"> ', " </div> <!-- Komponen Back to Top --> ", " ", " ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BackToTop", $$BackToTop, {}), renderScript($$result, "D:/GitHub/stifin/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "D:/GitHub/stifin/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "D:/GitHub/stifin/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const allPages = [
    { text: "Home", url: "/" },
    { text: "Features", url: "/features" },
    { text: "Promotor", url: "/promotor" },
    { text: "FAQ", url: "/faqs" },
    { text: "Changelog", url: "/changelog" },
    { text: "Integrations", url: "/integrations" },
    { text: "Blog", url: "/blog" },
    { text: "Case Studies", url: "/case-study" },
    { text: "About", url: "/about" },
    { text: "Careers", url: "/career" },
    { text: "Contact", url: "/contact" },
    { text: "Reviews", url: "/reviews" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "Terms of Service", url: "/terms-conditions" },
    { text: "404 Pages", url: "/404" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full bg-white/90 dark:bg-secondary-950/90 backdrop-blur-xs z-50 py-4 transition-colors duration-300" data-astro-cid-3ef6ksr2> <div class="container-custom flex items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" aria-label="Go to homepage" data-astro-cid-3ef6ksr2> <img src="/asetweb/logo.png" alt="Stifin Muslimah" class="h-10 w-auto" data-astro-cid-3ef6ksr2> <!-- Elephant Logo SVG 
      <svg class="h-10 w-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> --> <!-- Background circle --> <circle cx="50" cy="50" r="48" fill="#f0f9ff" class="dark:fill-slate-800" data-astro-cid-3ef6ksr2></circle> <!-- Elephant body --> <ellipse cx="55" cy="55" rx="30" ry="25" fill="#64748b" class="dark:fill-slate-600" data-astro-cid-3ef6ksr2></ellipse> <!-- Head --> <ellipse cx="30" cy="45" rx="18" ry="16" fill="#64748b" class="dark:fill-slate-600" data-astro-cid-3ef6ksr2></ellipse> <!-- Ears --> <ellipse cx="35" cy="35" rx="14" ry="12" fill="#94a3b8" class="dark:fill-slate-500" data-astro-cid-3ef6ksr2></ellipse> <ellipse cx="25" cy="35" rx="14" ry="12" fill="#64748b" class="dark:fill-slate-600" data-astro-cid-3ef6ksr2></ellipse> <ellipse cx="35" cy="35" rx="10" ry="9" fill="#64748b" class="dark:fill-slate-600" data-astro-cid-3ef6ksr2></ellipse> <ellipse cx="25" cy="35" rx="10" ry="9" fill="#475569" class="dark:fill-slate-700" data-astro-cid-3ef6ksr2></ellipse> <!-- Trunk --> <path d="M25 50 Q20 60 15 70 Q13 75 18 78 Q23 80 25 75 Q27 70 25 65 Q23 60 27 55 Q29 52 30 50" fill="#64748b" class="dark:fill-slate-600" data-astro-cid-3ef6ksr2></path> <!-- Eyes --> <circle cx="25" cy="42" r="2" fill="#1e293b" class="dark:fill-white" data-astro-cid-3ef6ksr2></circle> <!-- Tusks --> <path d="M20 55 Q18 58 16 60" stroke="white" stroke-width="2" fill="none" class="dark:stroke-slate-300" data-astro-cid-3ef6ksr2></path> <path d="M15 55 Q13 58 11 60" stroke="white" stroke-width="2" fill="none" class="dark:stroke-slate-300" data-astro-cid-3ef6ksr2></path> <!-- Decorative circle --> <circle cx="50" cy="50" r="46" stroke="#0ea5e9" stroke-width="1.5" fill="none" class="dark:stroke-teal-500" stroke-dasharray="3,2" data-astro-cid-3ef6ksr2></circle> <span class="ml-2 text-xl font-display font-semibold text-secondary-900 dark:text-white" data-astro-cid-3ef6ksr2></span> </a> <nav class="hidden md:flex items-center space-x-8" data-astro-cid-3ef6ksr2> <a href="/" class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2>Home</a> <a href="/blog" class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2>Blog</a> <a href="/promotor" class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2>Promotor STIFIn</a> <a href="/contact" class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2>Contact</a> <a href="/about" class="text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors" data-astro-cid-3ef6ksr2>About</a> <!-- All Pages Dropdown --> <!--<div x-data="{ open: false }" class="relative">
        <button 
          @click="open = !open" 
          @click.away="open = false"
          class="flex items-center text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 font-medium transition-colors"
        >
          All Pages
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div 
          x-show="open" 
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-150"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-95"
          class="absolute left-0 mt-2 w-56 bg-white dark:bg-secondary-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden z-50 max-h-96 overflow-y-auto"
          x-cloak
        >
          <div class="py-2 grid grid-cols-1 gap-1">
            {allPages.map(page => (
              <a href={page.url} class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800">
                {page.text}
              </a>
            ))}
          </div>
        </div>
      </div>--> </nav> <div class="flex items-center space-x-4" data-astro-cid-3ef6ksr2> <button x-on:click="darkMode = !darkMode" class="p-2 rounded-full text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-200 focus:outline-hidden focus:ring-2 focus:ring-primary-500" aria-label="Toggle dark mode" data-astro-cid-3ef6ksr2> <svg x-show="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-3ef6ksr2></path> </svg> <svg x-show="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Mobile Menu Button and Dropdown --> <div x-data="{ open: false, showAllPages: false }" data-astro-cid-3ef6ksr2> <button @click="open = !open" class="md:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 dark:text-secondary-300 dark:hover:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg x-show="open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute top-16 right-4 w-48 py-2 bg-white dark:bg-secondary-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden" x-cloak data-astro-cid-3ef6ksr2> <a href="/" class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2>Home</a> <a href="/blog" class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2>Blog</a> <a href="/promotor" class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2>Promotor STIFIn</a> <a href="/contact" class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2>Contact</a> <a href="/about" class="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800" data-astro-cid-3ef6ksr2>About</a> <!-- Mobile All Pages Dropdown --> <!--<button 
            @click="showAllPages = !showAllPages" 
            class="w-full text-left px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 font-semibold border-t border-gray-200 dark:border-gray-700 mt-1 pt-1 flex items-center justify-between"
          >
            All Pages
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{ 'transform rotate-180': showAllPages }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>--> <div x-show="showAllPages" class="py-1 bg-gray-50 dark:bg-secondary-800" data-astro-cid-3ef6ksr2> ${allPages.map((page) => renderTemplate`<a${addAttribute(page.url, "href")} class="block px-6 py-1 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700" data-astro-cid-3ef6ksr2> ${page.text} </a>`)} </div> </div> </div> </div> </div> </header> `;
}, "D:/GitHub/stifin/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [
    {
      title: "STIFIn Muslimah",
      links: [
        { text: "Home", url: "/" },
        { text: "Blog", url: "/blog" },
        { text: "Promotor", url: "/promotor" },
        { text: "Contact", url: "/contact" },
        { text: "About", url: "/about" }
      ]
    },
    {
      title: "Layanan",
      links: [
        { text: "Tes STIFIn", url: "/" },
        { text: "Promotor", url: "/promotor" },
        { text: "FAQ", url: "/faqs" }
      ]
    },
    {
      title: "Hubungi Kami",
      links: [
        { text: "Contact", url: "/contact" },
        { text: "Tentang Kami", url: "/about" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8"> <div class="container-custom"> <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> <div class="md:col-span-2 lg:col-span-2"> <a href="/" class="flex items-center mb-6" aria-label="Go to homepage"> <img src="/asetweb/logo.png" alt="STIFIn Muslimah" class="h-8 w-auto"> </a> <p class="text-gray-400 mb-6 max-w-md">
Membantu Muslimah memahami potensi terbaik dalam dirinya.
</p> <div class="flex space-x-4"> <!-- Facebook --> <a href="https://facebook.com/stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Facebook"> <img src="/asetweb/putih-facebook.png" alt="Facebook" class="w-6 h-6"> </a> <!-- Instagram --> <a href="https://instagram.com/stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Instagram"> <img src="/asetweb/putih-instagram.png" alt="Instagram" class="w-6 h-6"> </a> <!-- Threads --> <a href="https://www.threads.net/@stifinmuslimah" target="_blank" rel="noopener" class="transition-colors hover:opacity-80" aria-label="Threads"> <img src="/asetweb/putih-threads.png" alt="Threads" class="w-6 h-6"> </a> </div> </div> ${footerLinks.map((column) => renderTemplate`<div> <h3 class="text-lg font-semibold mb-4">${column.title}</h3> <ul class="space-y-2"> ${column.links.map((link) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="text-gray-400 hover:text-primary-400 transition-colors">${link.text}</a> </li>`)} </ul> </div>`)} </div> <div class="border-t border-gray-800 pt-8 mt-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-gray-400 text-sm mb-4 md:mb-0">
&copy; ${currentYear} STIFIn Muslimah. All rights reserved.
</p> <div class="flex space-x-6"> <a href="/privacy-policy" class="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a> <!--<a href="/terms-conditions" class="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>--> <a href="/faqs" class="text-gray-400 hover:text-primary-400 text-sm transition-colors">FAQ</a> </div> </div> </div> </div> </footer>`;
}, "D:/GitHub/stifin/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
