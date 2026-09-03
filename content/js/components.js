/**
 * Hagzz Shared Components — Header & Footer Injector
 * Injects an identical header and footer into every page.
 * Add to every page just before </body>:
 *   <script src="./content/js/components.js"></script>
 */
(function () {
  "use strict";

  /* ── Detect active page ── */
  function getActivePage() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    return path;
  }

  /* ── Nav link helper ── */
  function navLink(href, enText, arText, activePage) {
    var isActive = activePage === href ? " class=\"active\"" : "";
    var arAttr = arText;
    return "<li><a href=\"./" + href + "\"" + isActive
      + " data-en=\"" + enText + "\" data-ar=\"" + arAttr + "\">"
      + enText + "</a></li>";
  }

  /* ── Build Header HTML ── */
  function buildHeader(activePage) {
    return [
      '<header id="header">',
      '  <div class="navsbar">',
      '    <div class="navsbar__logo">',
      '      <a href="./index.html" class="d-flex">',
      '        <img src="./content/assets/images/icon/logo.svg" alt="Hagzz logo">',
      '      </a>',
      '    </div>',
      '    <ul class="navsbar__list">',
      navLink("index.html",           "Home",                 "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",         activePage),
      "      <li><a href=\"./pricing.html\"" + (activePage === "pricing.html" ? " class=\"active\"" : "") + " data-en=\"ERP Packages\" data-ar=\"\u0628\u0627\u0642\u0627\u062a <span class='bidi-eng'>ERP</span>\">ERP Packages</a></li>",
      navLink("termsAndConditions.html", "Terms and Conditions", "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645", activePage),
      navLink("privacy.html",         "Privacy Policy",       "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",   activePage),
      navLink("contact.html",         "Contact Us",           "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",             activePage),
      navLink("mesk.html",            "About Developer",      "\u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631",         activePage),
      '    </ul>',
      '    <div class="navsbar__user">',
      '      <a href="https://partner.hagzz.el7lm.com/partner/login" class="navsbar__user__login" data-en="Login" data-ar="\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644">Login</a>',
      '      <button id="lang-toggle" class="lang-toggle-btn" aria-label="Switch language">',
      '        <i class="fa-solid fa-globe"></i> <span>\u0627\u0644\u0639\u0631\u0628\u064a\u0629</span>',
      '      </button>',
      '      <a href="https://wa.me/97470542458?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D9%86%D8%B8%D8%A7%D9%85%20Hagzz%20ERP" target="_blank" class="navsbar__user__partner" data-en="Start Free Trial" data-ar="\u0627\u0628\u062f\u0623 \u062a\u062c\u0631\u0628\u062a\u0643 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629">\u0627\u0628\u062f\u0623 \u062a\u062c\u0631\u0628\u062a\u0643 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629</a>',
      '    </div>',
      '    <button class="navsbar__hamborg-tab navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle menu">',
      '      <i class="fa-solid fa-bars fs-1"></i>',
      '    </button>',
      '  </div>',
      '</header>',
      '<div class="offcanvas navsbar__mobile offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">',
      '  <div class="offcanvas-header ms-auto me-0 pb-0">',
      '    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">',
      '      <i class="fa-solid fa-xmark fs-1 text-white"></i>',
      '    </button>',
      '  </div>',
      '  <div class="offcanvas-body p-0">',
      '    <ul class="navsbar__mobile__list justify-content-end text-center">',
      '      <li class="py-2"><button id="lang-toggle-mobile" class="lang-toggle-btn" style="margin:0 auto" aria-label="Switch language"><i class="fa-solid fa-globe"></i> <span>\u0627\u0644\u0639\u0631\u0628\u064a\u0629</span></button></li>',
      "      <li><a href=\"./index.html\"" + (activePage === "index.html" ? " class=\"active\"" : "") + " data-en=\"Home\" data-ar=\"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629\">Home</a></li>",
      "      <li><a href=\"./pricing.html\"" + (activePage === "pricing.html" ? " class=\"active\"" : "") + " data-en=\"ERP Packages\" data-ar=\"\u0628\u0627\u0642\u0627\u062a <span class='bidi-eng'>ERP</span>\">ERP Packages</a></li>",
      "      <li><a href=\"./termsAndConditions.html\"" + (activePage === "termsAndConditions.html" ? " class=\"active\"" : "") + " data-en=\"Terms and Conditions\" data-ar=\"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645\">Terms and Conditions</a></li>",
      "      <li><a href=\"./privacy.html\"" + (activePage === "privacy.html" ? " class=\"active\"" : "") + " data-en=\"Privacy Policy\" data-ar=\"\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629\">Privacy Policy</a></li>",
      "      <li><a href=\"./contact.html\"" + (activePage === "contact.html" ? " class=\"active\"" : "") + " data-en=\"Contact Us\" data-ar=\"\u0627\u062a\u0635\u0644 \u0628\u0646\u0627\">Contact Us</a></li>",
      "      <li><a href=\"./mesk.html\"" + (activePage === "mesk.html" ? " class=\"active\"" : "") + " data-en=\"About Developer\" data-ar=\"\u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631\">About Developer</a></li>",
      '      <li class="py-2"><a href="https://partner.hagzz.el7lm.com/partner/login" class="navsbar__user__login" data-en="Login" data-ar="\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644">Login</a></li>',
      '      <li class="pt-2"><a href="https://wa.me/97470542458?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D9%86%D8%B8%D8%A7%D9%85%20Hagzz%20ERP" target="_blank" class="navsbar__user__partner" data-en="Start Free Trial" data-ar="\u0627\u0628\u062f\u0623 \u062a\u062c\u0631\u0628\u062a\u0643 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629">\u0627\u0628\u062f\u0623 \u062a\u062c\u0631\u0628\u062a\u0643 \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629</a></li>',
      '    </ul>',
      '  </div>',
      '</div>'
    ].join("\n");
  }

  /* ── Build Footer HTML ── */
  function buildFooter() {
    return [
      '<footer class="site-footer">',
      '  <div class="footer-inner">',
      '    <div class="footer-brand-row">',
      '      <div class="footer-brand-logo">',
      '        <a href="./index.html"><img src="./content/assets/images/icon/logo.svg" alt="Hagzz logo"></a>',
      '        <div class="footer-brand-tagline" data-en="Integrated ERP Platform for Sports Clubs &amp; Academies" data-ar="\u0645\u0646\u0635\u0629 ERP \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0648\u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629">\u0645\u0646\u0635\u0629 ERP \u0645\u062a\u0643\u0627\u0645\u0644\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u0646\u062f\u064a\u0629 \u0648\u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0627\u062a</div>',
      '      </div>',
      '      <div class="footer-social">',
      '        <a href="https://www.facebook.com/hagzzapp/" target="_blank" class="soc-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>',
      '        <a href="https://www.instagram.com/hagzzapp/" target="_blank" class="soc-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>',
      '        <a href="https://wa.me/97470542458" target="_blank" class="soc-btn" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>',
      '        <a href="https://www.linkedin.com/company/hagzz/" target="_blank" class="soc-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>',
      '      </div>',
      '    </div>',
      '    <div class="footer-links-row">',
      '      <nav class="footer-nav" aria-label="Footer navigation">',
      '        <a href="./index.html" data-en="Home" data-ar="\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629">\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629</a>',
      '        <a href="./pricing.html" data-en="ERP Packages" data-ar="\u0628\u0627\u0642\u0627\u062a \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a">\u0628\u0627\u0642\u0627\u062a \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a</a>',
      '        <a href="./privacy.html" data-en="Privacy Policy" data-ar="\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629">\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629</a>',
      '        <a href="./termsAndConditions.html" data-en="Terms &amp; Conditions" data-ar="\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645">\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645</a>',
      '        <a href="./contact.html" data-en="Contact Us" data-ar="\u0627\u062a\u0635\u0644 \u0628\u0646\u0627">\u0627\u062a\u0635\u0644 \u0628\u0646\u0627</a>',
      '        <a href="./mesk.html" data-en="About Developer" data-ar="\u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631">\u0639\u0646 \u0627\u0644\u0645\u0637\u0648\u0631</a>',
      '      </nav>',
      '    </div>',
      '    <div class="footer-copyright" data-en="&copy; All rights reserved to Hagzz 2025 — A product of Mesk LLC" data-ar="&copy; \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0646\u0635\u0629 Hagzz 2025 \u2014 \u0645\u0646\u062a\u062c \u0634\u0631\u0643\u0629 Mesk LLC">&copy; \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0645\u0646\u0635\u0629 Hagzz 2025 \u2014 \u0645\u0646\u062a\u062c \u0634\u0631\u0643\u0629 Mesk LLC</div>',
      '  </div>',
      '</footer>'
    ].join("\n");
  }

  /* ── Inject header if placeholder exists ── */
  function injectComponents() {
    var activePage = getActivePage();

    var headerPlaceholder = document.getElementById("shared-header");
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = buildHeader(activePage);
    }

    var footerPlaceholder = document.getElementById("shared-footer");
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = buildFooter();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectComponents);
  } else {
    injectComponents();
  }
})();

