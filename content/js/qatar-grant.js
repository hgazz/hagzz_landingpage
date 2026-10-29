(function () {
    'use strict';
    var params = new URLSearchParams(window.location.search);
    var requested = params.get('lang');
    try {
        if (requested === 'ar' || requested === 'en') localStorage.setItem('hagzz-lang', requested);
        var stored = localStorage.getItem('hagzz-lang');
        if (stored !== 'ar' && stored !== 'en') localStorage.setItem('hagzz-lang', 'ar');
    } catch (_) {}

    function updateLanguage(lang) {
        var ar = lang === 'ar';
        document.title = ar ? 'منحة التحول الرقمي للأكاديميات في قطر | VLab & QSTP & Hagzz' : 'Digital Transformation Grant for Sports Academies in Qatar | VLab & QSTP & Hagzz';
        var description = ar
            ? 'منحة التحول الرقمي وأتمتة الإدارة والتشغيل للأكاديميات الرياضية في قطر: بالتعاون مع واحة قطر للعلوم والتكنولوجيا (QSTP) و VLab & Hagzz. نظام ERP، تطبيق أولياء الأمور، تحصيل إلكتروني وبوابة تسجيل.'
            : 'Digital Transformation & Operations Automation Grant for Sports Academies in Qatar: In collaboration with Qatar Science & Technology Park (QSTP) and VLab & Hagzz. Integrated ERP, Parent App, e-collection, and smart registration.';
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = description;
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = document.title;
        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = description;

        // Switch banner image
        var bannerImg = document.getElementById('grant-banner-img');
        if (bannerImg) {
            bannerImg.src = ar ? 'content/assets/qatar-grant/banner-ar.jpg' : 'content/assets/qatar-grant/banner-en.jpg';
            bannerImg.alt = ar ? 'منحة التحول الرقمي للأكاديميات الرياضية في قطر' : 'Digital Transformation Grant for Sports Academies in Qatar';
        }

        var message = ar
            ? 'مرحبًا، أود التقديم والاستفسار عن منحة التحول الرقمي للأكاديميات الرياضية في قطر مع واحة قطر للعلوم والتكنولوجيا (QSTP) و VLab.'
            : 'Hello, I would like to apply and enquire about the Digital Transformation Grant for Sports Academies in Qatar with QSTP and VLab.';
        document.querySelectorAll('a.whatsapp').forEach(function (a) {
            a.href = 'https://wa.me/97470542458?text=' + encodeURIComponent(message);
        });
        try {
            var url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            history.replaceState(null, '', url);
        } catch (_) {}
        var copyStatus = document.getElementById('copy-status');
        if (copyStatus) copyStatus.textContent = '';
    }

    document.addEventListener('langChanged', function (event) { updateLanguage(event.detail.lang); });

    // Open grant form popup dialog
    document.querySelectorAll('.open-grant-form').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof window.openGrantPopup === 'function') {
                window.openGrantPopup(button);
            } else {
                var dialog = document.getElementById('grant-popup');
                if (dialog && typeof dialog.showModal === 'function') {
                    dialog.showModal();
                    document.documentElement.classList.add('grant-popup-open');
                }
            }
        });
    });

    // Copy link
    var copyBtn = document.getElementById('copy-link');
    if (copyBtn) {
        copyBtn.addEventListener('click', async function () {
            var status = document.getElementById('copy-status');
            var ar = document.documentElement.lang === 'ar';
            try {
                await navigator.clipboard.writeText(window.location.href);
                if (status) status.textContent = ar ? 'تم نسخ رابط الصفحة بنجاح.' : 'Page link copied successfully.';
            } catch (_) {
                if (status) status.textContent = ar ? 'يمكنك نسخ رابط الصفحة من شريط عنوان المتصفح.' : 'Copy the page URL from your browser’s address bar.';
            }
        });
    }

    // Run initial language setup if needed
    var initialLang = localStorage.getItem('hagzz-lang') || 'ar';
    updateLanguage(initialLang);
})();
