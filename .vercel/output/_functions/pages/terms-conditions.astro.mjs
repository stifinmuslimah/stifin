import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_kVglWhb0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B331rUhd.mjs';
import { $ as $$HeroSection } from '../chunks/HeroSection_BXucKKop.mjs';
export { renderers } from '../renderers.mjs';

const $$TermsConditions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms & Conditions - Sassify" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Terms & Conditions", "highlightText": "Terms", "description": "Please read these terms and conditions carefully before using our service." })} <section class="py-12 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="prose prose-lg dark:prose-invert max-w-4xl mx-auto"> <h2>1. Introduction</h2> <p>
Welcome to Sassify. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
</p> <h2>2. Definitions</h2> <p>
"Service" refers to the Sassify platform and all related services.
            "User" refers to any individual or entity that accesses or uses our Service.
            "Content" refers to all information and materials available on our Service.
</p> <h2>3. Account Registration</h2> <p>
To use certain features of our Service, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.
</p> <h2>4. User Responsibilities</h2> <p>
You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
</p> <h2>5. Intellectual Property</h2> <p>
All content, features, and functionality of our Service are owned by Sassify and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
</p> <h2>6. Privacy Policy</h2> <p>
Your use of our Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms & Conditions.
</p> <h2>7. Limitation of Liability</h2> <p>
In no event shall Sassify be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
</p> <h2>8. Changes to Terms</h2> <p>
We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website. Your continued use of the Service after such modifications will constitute your acknowledgment of the modified Terms.
</p> <h2>9. Governing Law</h2> <p>
These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
</p> <h2>10. Contact Us</h2> <p>
If you have any questions about these Terms, please contact us at support@sassify.com.
</p> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/GitHub/stifin/src/pages/terms-conditions.astro", void 0);

const $$file = "D:/GitHub/stifin/src/pages/terms-conditions.astro";
const $$url = "/terms-conditions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsConditions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
