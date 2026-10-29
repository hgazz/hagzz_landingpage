/* Shared grant enquiry dialog. Available on demand. */
(function () {
    'use strict';
    let dialog;
    let returnFocus;
    let language;

    function init() {
        if (document.getElementById('grant-popup')) return;

        dialog = document.createElement('dialog');
        dialog.id = 'grant-popup';
        dialog.setAttribute('aria-labelledby', 'grant-popup-title');
        dialog.setAttribute('aria-describedby', 'grant-popup-description');
        dialog.innerHTML = `
          <div class="grant-popup-toolbar">
            <button type="button" class="grant-popup-language"></button>
            <button type="button" class="grant-popup-close" aria-label="Close">×</button>
          </div>
          <img class="grant-popup-emoji" src="/content/assets/images/icon/emoji.png" width="68" height="68" alt="">
          <h2 id="grant-popup-title" data-grant-ar="نموذج التقديم على منحة التحول الرقمي للأكاديميات" data-grant-en="Application Form — Digital Transformation Grant for Sports Academies"></h2>
          <p id="grant-popup-description" data-grant-ar="سجّل بيانات أكاديميتك لتقييم الأهلية والتواصل الفوري معك لاعتماد باقة المنحة والدعم الفني." data-grant-en="Register your academy details to evaluate eligibility and receive the approved grant support and system package."></p>
          <form class="grant-popup-form">
            <label><span data-grant-ar="الاسم الكامل" data-grant-en="Full name"></span><input name="fullName" autocomplete="name" required maxlength="100" placeholder="مثال: محمد الهاجري"></label>
            <label><span data-grant-ar="اسم الأكاديمية أو النادي الرياضي" data-grant-en="Academy or Sports Club Name"></span><input name="academy" autocomplete="organization" required maxlength="150" placeholder="مثال: أكاديمية الدوحة الرياضية"></label>
            <label><span data-grant-ar="نوع الرياضة (كرة قدم، سباحة، بادل، إلخ)" data-grant-en="Sport Type (Football, Swimming, Padel, etc.)"></span><input name="sportType" required maxlength="100" placeholder="مثال: كرة قدم وسلة"></label>
            <label><span data-grant-ar="رقم واتساب للتواصل (مع مفتاح الدولة)" data-grant-en="WhatsApp Phone (with country code)"></span><input name="phone" type="tel" dir="ltr" autocomplete="tel" placeholder="+974 …" required maxlength="25" pattern="[+0-9٠-٩۰-۹() .\\-]{7,25}"></label>
            <label><span data-grant-ar="المدينة / الدولة" data-grant-en="City / Country"></span><input name="city" autocomplete="address-level2" required maxlength="100" value="قطر"></label>
            <p class="grant-popup-note" data-grant-ar="بالضغط على إرسال، يتم فتح محادثة رسمية مع فريق المنحة وتأكيد تسجيل بياناتك فوراً." data-grant-en="Submitting will start a direct conversation with the grant team to confirm your application."></p>
            <button type="submit" class="grant-popup-submit" data-grant-ar="إرسال طلب المنحة الآن" data-grant-en="Submit Grant Application Now"></button>
          </form>`;
        document.body.appendChild(dialog);

        const languageButton = dialog.querySelector('.grant-popup-language');
        const closeButton = dialog.querySelector('.grant-popup-close');

        function translate(lang) {
            language = lang === 'en' ? 'en' : 'ar';
            dialog.lang = language;
            dialog.dir = language === 'ar' ? 'rtl' : 'ltr';
            dialog.querySelectorAll('[data-grant-ar]').forEach(el => {
                el.textContent = el.getAttribute('data-grant-' + language);
            });
            languageButton.textContent = language === 'ar' ? 'English' : 'العربية';
            closeButton.setAttribute('aria-label', language === 'ar' ? 'إغلاق' : 'Close');
        }

        translate(document.documentElement.lang || 'ar');
        document.addEventListener('langChanged', event => translate(event.detail.lang));
        languageButton.addEventListener('click', () => translate(language === 'ar' ? 'en' : 'ar'));
        closeButton.addEventListener('click', () => dialog.close());

        dialog.addEventListener('click', event => {
            const rect = dialog.getBoundingClientRect();
            if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
                dialog.close();
            }
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
                ? ['طلب تقديم على منحة التحول الرقمي — واحة قطر و VLab & Hagzz', 'الاسم', 'الأكاديمية / المؤسسة', 'نوع الرياضة', 'رقم واتساب', 'المدينة / الدولة']
                : ['Application — Digital Transformation Grant (QSTP & VLab & Hagzz)', 'Name', 'Academy / Club', 'Sport', 'WhatsApp', 'City / Country'];

            const fields = ['fullName', 'academy', 'sportType', 'phone', 'city'];
            const message = [labels[0], ...fields.map((key, i) => labels[i + 1] + ': ' + (data.get(key) || ''))].join('\n');
            window.location.assign('https://wa.me/97470542458?text=' + encodeURIComponent(message));
        });

        window.openGrantPopup = function(triggerEl) {
            returnFocus = triggerEl || document.activeElement;
            if (dialog && !dialog.open) {
                try {
                    dialog.showModal();
                } catch (_) {
                    dialog.setAttribute('open', '');
                }
            }
            document.documentElement.classList.add('grant-popup-open');
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
