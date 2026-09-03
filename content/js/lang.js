/**
 * Hagzz Unified Language Switcher (AR / EN)
 * Works across all pages with global icons and persistent state.
 */
(function () {
    "use strict";
    var STORAGE_KEY = "hagzz-lang";

    function applyLang(lang) {
        var isAr = (lang === "ar");
        var html = document.documentElement;
        html.dir = isAr ? "rtl" : "ltr";
        html.lang = lang;
        if (isAr) {
            document.body.classList.add("lang-ar");
            document.body.classList.remove("lang-en");
        } else {
            document.body.classList.remove("lang-ar");
            document.body.classList.add("lang-en");
        }

        document.querySelectorAll("[data-ar]").forEach(function (el) {
            var arText = el.getAttribute("data-ar");
            var enText = el.getAttribute("data-en");
            if (arText !== null && enText !== null) {
                if (el.tagName.toLowerCase() === "option") {
                    el.textContent = isAr ? arText : enText;
                } else {
                    el.innerHTML = isAr ? arText : enText;
                }
            }
        });

        document.querySelectorAll("[data-ar-placeholder]").forEach(function (el) {
            el.placeholder = isAr ? el.getAttribute("data-ar-placeholder") : el.getAttribute("data-en-placeholder");
        });

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.innerHTML = isAr 
                ? '<i class="fa-solid fa-globe"></i> <span>English</span>' 
                : '<i class="fa-solid fa-globe"></i> <span>العربية</span>';
            btn.setAttribute("aria-label", isAr ? "Switch to English" : "التبديل للعربية");
        }
        var btnM = document.getElementById("lang-toggle-mobile");
        if (btnM) {
            btnM.innerHTML = isAr 
                ? '<i class="fa-solid fa-globe"></i> <span>English</span>' 
                : '<i class="fa-solid fa-globe"></i> <span>العربية</span>';
        }

        try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}

        // Dispatch event for page-specific dynamic handlers
        document.dispatchEvent(new CustomEvent("langChanged", { detail: { lang: lang, isAr: isAr } }));
    }

    function toggleLang() {
        var current = document.documentElement.lang || "ar";
        applyLang(current === "ar" ? "en" : "ar");
    }

    function init() {
        var btn = document.getElementById("lang-toggle");
        if (btn) btn.addEventListener("click", toggleLang);
        var btnM = document.getElementById("lang-toggle-mobile");
        if (btnM) btnM.addEventListener("click", toggleLang);

        var saved;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch(e) { saved = null; }
        // Default to Arabic or saved choice
        applyLang(saved ? saved : "ar");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else { init(); }
})();
