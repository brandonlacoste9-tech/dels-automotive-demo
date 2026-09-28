/* EN-only i18n for Del's Automotive demo */
const i18n = {
  en: {
    "services.s1t": "Engine repair",
    "services.s1d": "Diagnostics and repair for all makes and models, done right the first time.",
    "services.s2t": "Brake service",
    "services.s2d": "Pads, rotors and complete brake work to keep you stopping safely.",
    "services.s3t": "Wheel alignment",
    "services.s3d": "Precise alignments for even tire wear and straighter handling.",
    "services.s4t": "Oil changes &amp; maintenance",
    "services.s4d": "Fast oil changes and factory-scheduled maintenance.",
    "services.s5t": "Transmission service",
    "services.s5d": "Service and repair for automatic and manual transmissions.",
    "services.s6t": "Steering &amp; suspension",
    "services.s6d": "Shocks, struts and steering work for a smooth, safe ride.",
    "nav.call": "(478) 743-7907",
    "hero.kicker": "Macon, Georgia · Full-service auto repair · Mon–Fri 7 AM–5 PM",
    "hero.title": "Macon&#8217;s trusted auto repair<br>— for over 35 years.",
    "hero.sub": "Rated 4.8 out of 5 from 185 reviews: engine repair, brakes, alignment and maintenance on Vineville Ave.",
    "hero.cta1": "Call __PHONE__",
    "trust.t1t": "Engine specialists",
    "trust.t1d": "Diagnostics to major repairs",
    "trust.t2t": "35+ years experience",
    "trust.t2d": "Serving Macon drivers",
    "trust.t3t": "Fair prices",
    "trust.t3d": "Honest work, no surprises",
    "stats.s1n": "4.8\\u2605",
    "stats.s1l": "from 185 reviews",
    "stats.s2n": "35+ years",
    "stats.s2l": "of repair experience",
    "stats.s3n": "Macon",
    "stats.s3l": "&amp; surrounding areas",
    "stats.s4n": "Mon–Fri",
    "stats.s4l": "7:00 AM – 5:00 PM",
    "services.title": "Everything your car needs",
    "why.title": "Why Macon drivers choose Del&#8217;s",
    "why.intro": "For more than 35 years, drivers across Macon have trusted Del&#8217;s Automotive to keep their cars safe and running strong.",
    "why.l1t": "Experienced technicians",
    "why.l1d": "Decades of hands-on repair know-how.",
    "why.l2t": "Honest diagnostics",
    "why.l2d": "We find the real problem before we quote.",
    "why.l3t": "Fair pricing",
    "why.l3d": "You approve every repair first.",
    "why.l4t": "One-stop shop",
    "why.l4d": "Engine, brakes, alignment and more.",
    "gallery.kicker": "In the shop",
    "gallery.title": "Real work, real results",
    "gallery.c1": "Brake service done right",
    "gallery.c2": "Thorough inspections, top to bottom",
    "reviews.title": "Rated 4.8 out of 5 by Macon drivers",
    "reviews.more": "See what customers say about us — 4.8 stars from 185 reviews",
    "faq.q1": "Do I need an appointment?",
    "faq.a1": "Calling ahead at (478) 743-7907 gets you in faster, but walk-ins are welcome during our open hours.",
    "faq.q2": "Do you work on transmissions?",
    "faq.a2": "Yes — we service and repair automatic and manual transmissions.",
    "faq.q3": "What does a diagnostic include?",
    "faq.a3": "A full check of the reported problem, with an upfront quote before any work begins.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday, 7:00 AM to 5:00 PM. We&#8217;re closed Saturday and Sunday.",
    "contact.hoursVal": "Mon – Fri: 7:00 AM – 5:00 PM<br>Sat – Sun: Closed",
    "footer.tag": "Auto repair · Macon, Georgia",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.cta2": "See services",
    "services.kicker": "What we do",
    "why.kicker": "Why choose us",
    "reviews.kicker": "Word on the street",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.cta": "Call now",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
