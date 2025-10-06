import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, o as renderTransition } from '../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B331rUhd.mjs';
import 'clsx';
import { $ as $$Newsletter } from '../chunks/Newsletter_DfhOnnuG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Paket WSL1",
      price: 9e5,
      oldPrice: 12e5,
      description: "Paket untuk Kelas Lanjutan STIFIn",
      features: [
        "Workshop STIFIn Level 1",
        "1 Hari Pelatihan Online",
        "Materi PDF"
      ],
      cta: "Join WSL1",
      ctaLink: "https://wa.me/6282164476336/?text=Saya%20tertarik%20untuk%20bergabung%20dengan%20Paket%20WSL1",
      popular: false,
      color: "secondary"
    },
    {
      name: "Paket WSL2",
      price: 35e5,
      oldPrice: 45e5,
      description: "Paket untuk Kelas Lanjutan STIFIn",
      features: [
        "Workshop STIFIn Level 2",
        "3 Hari Pelatihan Online",
        "Materi PDF"
      ],
      cta: "Join WSL2",
      ctaLink: "https://wa.me/6282164476336/?text=Saya%20tertarik%20untuk%20bergabung%20dengan%20Paket%20WSL2",
      popular: false,
      color: "secondary"
    },
    {
      name: "Tools Promotor",
      price: 4e6,
      description: "Alat Lengkap untuk Promotor STIFIn",
      features: [
        "ID Promotor",
        "Alat Scan + ID Promotor",
        "Marketing KIT",
        "Buku Pancarona STIFIn Senilai Rp 290.000",
        "Marketing KIT",
        "Group Support Eksklusif"
      ],
      cta: "Dapatkan Tools Promotor",
      ctaLink: "https://wa.me/6282164476336/?text=Saya%20tertarik%20untuk%20mendapatkan%20Tools%20Promotor%20STIFIn",
      popular: false,
      color: "accent"
    },
    {
      name: "Paket Promotor",
      price: 795e4,
      oldPrice: 105e5,
      description: "Paket Lengkap untuk Promotor STIFIn",
      features: [
        "Workshop STIFIn Level 1",
        "Whorkshop STIFIn Level 2",
        "Alat Scan + ID Promotor",
        "Buku Pancarona Senilai Rp 290.000",
        "Marketing KIT",
        "Group Support Eksklusif"
      ],
      cta: "Daftar Sekarang!",
      ctaLink: "https://wa.me/6282164476336/?text=Saya%20tertarik%20untuk%20bergabung%20dengan%20Paket%20Promotor%20STIFIn",
      popular: true,
      color: "primary"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="section bg-gray-50 dark:bg-gray-800/50"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="inline-block px-4 py-1 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300 font-medium text-sm mb-4">
Paket Promotor STIFIn
</span> <h2 class="mb-6 text-gray-900 dark:text-white">Investasi Promotor STIFIn</h2> <p class="text-gray-600 dark:text-gray-300">
Peluang masih luas dan terbuka lebar, dari 271 Juta penduduk Indonesia, baru 650 Ribu orang sudah tes STIFIn. Jadilah bagian dari perubahan besar ini dengan menjadi Promotor STIFIn.
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${plans.map((plan, index) => renderTemplate`<div${addAttribute(`card p-6 border ${plan.popular ? `border-${plan.color}-500 dark:border-${plan.color}-400` : "border-gray-200 dark:border-gray-700"} slide-up relative`, "class")}${addAttribute(`animation-delay: ${index * 150}ms`, "style")}> ${plan.popular && renderTemplate`<div${addAttribute(`absolute top-0 right-0 bg-${plan.color}-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg`, "class")}>
Most Popular
</div>`} <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">${plan.name}</h3> <div class="mb-4"> ${plan.oldPrice && renderTemplate`<span class="text-lg text-gray-500 dark:text-gray-400 line-through block">
Rp ${plan.oldPrice.toLocaleString("id-ID")} </span>`} <span class="text-4xl font-bold text-gray-900 dark:text-white">
Rp ${plan.price.toLocaleString("id-ID")} </span> <span class="text-gray-500 dark:text-gray-400">/orang</span> </div> <p class="text-gray-600 dark:text-gray-300 mb-6">${plan.description}</p> <ul class="space-y-3 mb-8"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start"> <svg${addAttribute(`w-5 h-5 text-${plan.color}-500 mr-2 shrink-0 mt-0.5`, "class")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-600 dark:text-gray-300">${feature}</span> </li>`)} </ul> <a${addAttribute(plan.ctaLink, "href")}${addAttribute(`w-full btn ${plan.popular ? `bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white focus:ring-${plan.color}-500` : "btn-outline"}`, "class")}> ${plan.cta} </a> </div>`)} </div> </div> </section>`;
}, "D:/GitHub/stifin/src/components/Pricing.astro", void 0);

const $$Promotor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Promotor STIFIn Muslimah" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="relative pt-32 pb-20 md:pt-40 overflow-hidden hero-section"> <div class="container-custom relative z-10"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="slide-up"${addAttribute(renderTransition($$result2, "of72pgjy", "slide"), "data-astro-transition-scope")}> <h1 class="mb-6 text-secondary-900 dark:text-white leading-tight">
Peluang Bisnis <span class="text-primary-600 dark:text-primary-400">Promotor</span> STIFIn<br> </h1> <p class="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-lg">
Dengan menjadi seorang Licensed Promotor STIFIn, kamu bisa melakukan tes STIFIn dan membuka sesi private atau konsultasi penjelasan hasil tes STIFIn loh😄
</p> <div class="flex flex-wrap gap-4"> <a href="#apaitu" class="btn-primary">
Ambil Peluang Ini Sekarang!
</a> </div> </div> <div class="relative fade-in"${addAttribute(renderTransition($$result2, "um2qfs5k", "fade"), "data-astro-transition-scope")}> <!-- Animated Elephant SVG Hero Image --> <div class="w-full max-w-lg mx-auto"> <!-- Ganti animasi SVG dengan gambar statis --> <img src="/asetweb/promotor.svg" alt="Hero Image" class="w-full h-auto rounded-xl shadow-xl"> </div> </div> </div> </div> </section>  <section id="apaitu" class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="text-center mb-16"> <h1 class="text-center mb-6 text-secondary-900 dark:text-white leading-tight">
Apa itu <span class="text-primary-600 dark:text-primary-400">Promotor</span> STIFIn?
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Promotor STIFIn adalah peserta Workshop Level 1 & 2 yang telah tersertifikasi. Mereka berhak mensosialisasikan konsep STIFIn dan menjelaskan hasil tes, dengan pola kerja fleksibel sesuai kode etik Asosiasi Promotor STIFIn.
</p> <!-- Tambahkan gambar di bawah paragraf --> <img src="/asetweb/career.svg" alt="Ilustrasi Promotor STIFIn" class="mx-auto mt-8 w-full max-w-md md:max-w-lg lg:max-w-3xl rounded-lg shadow-lg"> </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="text-center mb-16"> <h1 class="text-center mb-6 text-secondary-900 dark:text-white leading-tight">
Manfaat <span class="text-primary-600 dark:text-primary-400">Pribadi </span>Menjadi Promotor STIFIn
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Promotor STIFIn: gabungan edukasi, pengembangan diri, dan bisnis sosial. Bukan cuma pekerjaan — ini gerakan untuk membantu orang memahami potensi terbaiknya.
</p> </div> </div> </section>  <section class="py-1 bg-white dark:bg-gray-800"> <div class="container-custom"> <!-- Integration Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/potensi-diri.png" alt="Slack" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mengenal Diri Lebih Dalam & Mengoptimalkan Potensi</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Menjadi promotor STIFIn bukan hanya belajar teori, tapi benar-benar memahami cara kerja otak dan karakter unik kita. Hasilnya? Lebih percaya diri dalam mengambil keputusan, merancang karier, berkomunikasi, dan membangun hubungan yang sehat.
</p> </div> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/help.png" alt="Google Workspace" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Membantu Orang Lain Menemukan Jati Diri</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Setiap kali Kamu membantu anak, guru, atau orang tua mengenal potensi genetik mereka, ada rasa puas yang tak tergantikan — kebahagiaan emosional sekaligus spiritual.
Kamu menjadi bagian dari misi besar: memanusiakan manusia sejak dini.
</p> </div> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/employee.png" alt="Salesforce" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Menjadi Figur Inspiratif & Role Model Positif</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Promotor sering dipandang sebagai sosok edukatif yang membawa dampak nyata di sekolah, komunitas, atau bahkan kota mereka.
Kamu tidak hanya memberi ilmu, tetapi juga menjadi teladan yang menginspirasi perubahan positif.
</p> </div> </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="text-center mb-16"> <h1 class="text-center mb-6 text-secondary-900 dark:text-white leading-tight">
Peluang Profesional dan <span class="text-primary-600 dark:text-primary-400">Finansial</span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Berikut adalah alasan kenapa orang perlu menjadi promotor STIFIn, ditinjau dari peluang profesional dan manfaat finansial.
</p> </div> </div> </section>  <section class="py-1 bg-white dark:bg-gray-800"> <div class="container-custom"> <!-- Integration Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/family.png" alt="Slack" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bisnis Edukasi yang Memberi Dampak</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
STIFIn bukan hanya tes kepribadian, tapi alat pengembangan manusia yang dibutuhkan di sekolah, bimbel, parenting, perusahaan, bahkan pasangan sebelum menikah.
</p> </div> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/teacher.png" alt="Google Workspace" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pasar Luas & Terbuka</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Ribuan sekolah, bimbel, dan komunitas parenting mencari cara belajar yang lebih personal dan efektif. STIFIn hadir dengan pendekatan ilmiah berbasis kecerdasan genetik — lebih dalam daripada teori kepribadian biasa.
</p> </div> <!-- Integration Card --> <div class="card p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"> <img src="/asetweb/profit.png" alt="Salesforce" class="w-16 h-16 mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sumber Penghasilan Nyata</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Promotor mendapat komisi dari tes, seminar, training, dan layanan lanjutan. Bisa jadi karier profesional atau penghasilan tambahan yang stabil. Pasarnya terus tumbuh karena makin banyak orang ingin tahu potensi genetiknya.
</p> </div> </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="text-center mb-16"> <h1 class="text-center mb-6 text-secondary-900 dark:text-white leading-tight"> <span class="text-primary-600 dark:text-primary-400">Keunggulan</span> Unik STIFIn Dibanding Tes Lain
</h1> <div class="grid md:grid-cols-2 gap-8 mb-10 mt-10"> <div class="card p-6 border border-gray-200 dark:border-gray-700"> <div class="flex items-center mb-4"> <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3 mr-4"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">1x Tes Seumur Hidup</h3> </div> <p class="text-gray-600 dark:text-gray-300">
STIFIn hanya butuh 1 kali seumur hidup
</p> </div> <div class="card p-6 border border-gray-200 dark:border-gray-700"> <div class="flex items-center mb-4"> <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3 mr-4"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Akurat</h3> </div> <p class="text-gray-600 dark:text-gray-300">
Akurat karena berbasis sistem operasi otak (bukan sekadar perilaku).
</p> </div> <div class="card p-6 border border-gray-200 dark:border-gray-700"> <div class="flex items-center mb-4"> <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3 mr-4"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Semua Umur</h3> </div> <p class="text-gray-600 dark:text-gray-300">
Digunakan dari usia anak-anak hingga dewasa → jangkauan pasarnya luas
</p> </div> <div class="card p-6 border border-gray-200 dark:border-gray-700"> <div class="flex items-center mb-4"> <div class="rounded-full bg-primary-100 dark:bg-primary-900 p-3 mr-4"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Dukungan Komunitas</h3> </div> <p class="text-gray-600 dark:text-gray-300">
Didukung oleh komunitas dan sistem pembinaan bagi promotor
</p> </div> </div> </div> </div> </section>  <section class="section bg-linear-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white py-12 md:py-16"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto px-4"> <h2 class="text-2xl md:text-3xl mb-4 md:mb-6 text-white">Menjadi Promotor STIFIn</h2> <p class="text-primary-100 mb-6 md:mb-8">
Artinya kamu bukan hanya jualan tes, tapi sedang mengubah hidup banyak orang lewat ilmu yang ilmiah, spiritual, dan berdampak nyata.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#pricing" class="btn-accent text-sm md:text-base px-4 py-2 md:px-6 md:py-3 w-full sm:w-auto">
Daftar Sekarang
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </section> <section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <!-- Case Study 1 --> <div class="mb-24"> <div class="grid md:grid-cols-2 gap-12 items-center mb-12"> <div> <span class="inline-block px-4 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 font-medium text-sm mb-4">
Paket
</span> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Apa Saja isi Paket Promotor?</h2> <p class="text-gray-600 dark:text-gray-300 mb-6">
Untuk menjadi promotor STIFIn, kamu perlu mengikuti Workshop Level 1 & 2 dan mendapatkan sertifikasi resmi. Setelah itu, kamu akan menerima berbagai materi pendukung untuk memulai perjalananmu sebagai promotor STIFIn.
</p> <div class="flex flex-wrap gap-4 mb-6"> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Workshop STIFIn Level 1</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Workshop STIFIn Level 2</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Alat Scan + ID Promotor</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Marketing Kit (Soft Copy brosur, Slide, Lanyard, ID Card)</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Buku Panca Rona STIFIn (Rp 290.000)</span> </div> </div> </div> <div class="rounded-lg overflow-hidden shadow-xl"> <img src="/asetweb/benefit.svg" alt="ShopWave Dashboard" class="w-full h-auto"> </div> </div> </div> <!-- Case Study 2 --> <div class="mb-24"> <div class="grid md:grid-cols-2 gap-12 items-center mb-12"> <div class="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"> <img src="/asetweb/paket-stifin.svg" alt="TechNova Team" class="w-full h-auto"> </div> <div class="order-1 md:order-2"> <span class="inline-block px-4 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 font-medium text-sm mb-4">
Benefit
</span> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Benefit Setelah Lulus</h2> <p class="text-gray-600 dark:text-gray-300 mb-6">
Setelah menjadi promotor STIFIn, kamu akan mendapatkan berbagai benefit yang mendukung kesuksesanmu, seperti akses ke komunitas promotor, pelatihan lanjutan, dan peluang kolaborasi dengan berbagai institusi pendidikan dan perusahaan.
</p> <div class="flex flex-wrap gap-4 mb-6"> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Peluang Penghasilan +10jt per-Bulan</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Mampu Melakukan Tes STIFIn</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Bergabung Komunitas STIFIn Genetic Indonesia</span> </div> <div class="flex items-center"> <svg class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Free Mentoring Exclusif di STIFIn Muslimah</span> </div> </div> </div> </div> </div> ${renderComponent($$result2, "PricingCmp", $$Pricing, {})} <div class="mt-16 text-center"> <!-- Tambahkan video di sini --> <div class="mb-8"> <iframe class="mx-auto w-full max-w-2xl aspect-video" src="https://www.youtube.com/embed/_ByC2StPqmI?si=Iv2cJlMfEQn7aMYZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
Siap Ambil Peluang Promotor STIFIn?
</h3> <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
Bergabunglah Bersama STIFIn Muslimah. Kami akan membersamai Kamu dalam menemukan versi terbaik Kamu dan Lingkungan Kamu dalam menuju Jalan yang SuksesMulia.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a href="#pricing" class="btn-primary">Daftar Sekarang!</a> </div> </div> </div> </section> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/promotor.astro", "self");

const $$file = "D:/GitHub/stifin/src/pages/promotor.astro";
const $$url = "/promotor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Promotor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
