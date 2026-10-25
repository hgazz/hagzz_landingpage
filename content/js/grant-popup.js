/* Shared grant enquiry dialog. Data stays in the browser until the visitor sends on WhatsApp. */
(function () {
    'use strict';
    function init() {
        const dialog = document.createElement('dialog');
        dialog.id = 'grant-popup';
        dialog.setAttribute('aria-labelledby', 'grant-popup-title');
        dialog.setAttribute('aria-describedby', 'grant-popup-description');
        dialog.innerHTML = `
          <div class="grant-popup-toolbar"><button type="button" class="grant-popup-language"></button><button type="button" class="grant-popup-close">×</button></div>
          <img class="grant-popup-emoji" src="/content/assets/images/icon/emoji.png" width="68" height="68" alt="">
          <h2 id="grant-popup-title" data-grant-ar="سجّل بياناتك للحصول على منحة التحول الرقمي" data-grant-en="Register your interest in the digital transformation grant"></h2>
          <p id="grant-popup-description" data-grant-ar="عرّفنا بأكاديميتك لنتواصل معك بتفاصيل المنحة والعرض المناسب لك." data-grant-en="Tell us about your academy so we can share the grant details and an offer for you."></p>
          <form class="grant-popup-form">
            <label><span data-grant-ar="الاسم الكامل" data-grant-en="Full name"></span><input name="fullName" autocomplete="name" required maxlength="100"></label>
            <label><span data-grant-ar="اسم الأكاديمية أو المؤسسة" data-grant-en="Academy or organisation name"></span><input name="academy" autocomplete="organization" required maxlength="150"></label>
            <label><span data-grant-ar="رقم واتساب مع رمز الدولة" data-grant-en="WhatsApp number with country code"></span><input name="phone" type="tel" dir="ltr" autocomplete="tel" placeholder="+974 …" required maxlength="25" pattern="[+0-9٠-٩۰-۹() .\\-]{7,25}"></label>
            <label><span data-grant-ar="المدينة / الدولة" data-grant-en="City / country"></span><input name="city" autocomplete="address-level2" required maxlength="100"></label>
            <p class="grant-popup-note" data-grant-ar="بالضغط تفتح واتساب برسالة تحتوي بياناتك؛ اضغط إرسال هناك لإتمام الطلب." data-grant-en="Continue to WhatsApp with your details in a draft. Tap Send there to complete your enquiry."></p>
            <button type="submit" class="grant-popup-submit" data-grant-ar="إرسال الطلب عبر واتساب" data-grant-en="Continue on WhatsApp"></button>
          </form>`;
        document.body.appendChild(dialog);
        const languageButton = dialog.querySelector('.grant-popup-language');
        const closeButton = dialog.querySelector('.grant-popup-close');
        let language;
        let returnFocus;
        function translate(lang) {
            language = lang === 'en' ? 'en' : 'ar';
            dialog.lang = language;
            dialog.dir = language === 'ar' ? 'rtl' : 'ltr';
            dialog.querySelectorAll('[data-grant-ar]').forEach(el => { el.textContent = el.getAttribute('data-grant-' + language); });
            languageButton.textContent = language === 'ar' ? 'English' : 'العربية';
            closeButton.setAttribute('aria-label', language === 'ar' ? 'إغلاق' : 'Close');
        }
        translate(document.documentElement.lang);
        document.addEventListener('langChanged', event => translate(event.detail.lang));
        languageButton.addEventListener('click', () => translate(language === 'ar' ? 'en' : 'ar'));
        closeButton.addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', event => {
            const rect = dialog.getBoundingClientRect();
            if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
        });
        dialog.addEventListener('close', () => {
            document.documentElement.classList.remove('grant-popup-open');
            if (returnFocus && returnFocus.isConnected) returnFocus.focus();
        });
        dialog.querySelector('form').addEventListener('submit', event => {
            event.preventDefault();
            const form = event.currentTarget;
            for (const input of form.querySelectorAll('input')) {
                input.value = input.value.trim();
            }
            if (!form.reportValidity()) return;
            const data = new FormData(form);
            const labels = language === 'ar'
                ? ['طلب منحة التحول الرقمي — Hagzz', 'الاسم', 'الأكاديمية / المؤسسة', 'رقم واتساب', 'المدينة / الدولة']
                : ['Digital transformation grant enquiry — Hagzz', 'Name', 'Academy / organisation', 'WhatsApp number', 'City / country'];
            const message = [labels[0], ...['fullName', 'academy', 'phone', 'city'].map((key, i) => labels[i + 1] + ': ' + data.get(key))].join('\n');
            window.location.assign('https://wa.me/97470542458?text=' + encodeURIComponent(message));
        });
        window.setTimeout(() => {
            returnFocus = document.activeElement;
            dialog.showModal();
            document.documentElement.classList.add('grant-popup-open');
        }, 1000);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
