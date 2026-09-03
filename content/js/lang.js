/**
 * Hagzz Unified Language Switcher (AR / EN)
 * Works across all pages with persistent state via localStorage.
 *
 * Default: Arabic (ar) — respects saved user preference.
 * Images inside data-ar/data-en elements are preserved on toggle.
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

        // Translate all [data-ar] / [data-en] elements
        document.querySelectorAll("[data-ar]").forEach(function (el) {
            var arText = el.getAttribute("data-ar");
            var enText = el.getAttribute("data-en");
            if (arText === null || enText === null) return;

            if (el.tagName.toLowerCase() === "option") {
                el.textContent = isAr ? arText : enText;
            } else {
                // Preserve any child <img> elements before replacing innerHTML
                var imgs = el.querySelectorAll("img");
                var savedImgs = [];
                imgs.forEach(function(img) {
                    savedImgs.push({ clone: img.cloneNode(true), placeholder: img });
                });

                el.innerHTML = isAr ? arText : enText;

                // Re-append images if text didn't include them
                if (savedImgs.length > 0 && el.querySelectorAll("img").length === 0) {
                    savedImgs.forEach(function(saved) {
                        el.appendChild(saved.clone);
                    });
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll("[data-ar-placeholder]").forEach(function (el) {
            el.placeholder = isAr
                ? el.getAttribute("data-ar-placeholder")
                : (el.getAttribute("data-en-placeholder") || "");
        });

        // Update lang-toggle button text
        var toggleText = isAr
            ? '<i class="fa-solid fa-globe"></i> <span>English</span>'
            : '<i class="fa-solid fa-globe"></i> <span>\u0627\u0644\u0639\u0631\u0628\u064a\u0629</span>';

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.innerHTML = toggleText;
            btn.setAttribute("aria-label", isAr ? "Switch to English" : "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0644\u0644\u0639\u0631\u0628\u064a\u0629");
        }
        var btnM = document.getElementById("lang-toggle-mobile");
        if (btnM) {
            btnM.innerHTML = toggleText;
        }

        // Save preference
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

        // Notify page-specific handlers
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

        // Determine start language:
        // 1. User's saved choice  2. Default: Arabic
        var saved;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
        applyLang(saved ? saved : "ar");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
