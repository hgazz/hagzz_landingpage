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
        document.title = ar ? 'منحة التحول الرقمي للأكاديميات في قطر | Hagzz' : 'Digital transformation for Qatar’s academies | Hagzz';
        var description = ar
            ? 'اكتشف منحة Hagzz للأكاديميات في قطر: خصومات وأشهر مجانية، وتشغيل أكثر تنظيمًا وخيارات دفع وتقسيط.'
            : 'Explore Hagzz’s grant for academies in Qatar: discounts, complimentary months, clearer operations and payment options.';
        document.querySelector('meta[name="description"]').content = description;
        document.querySelector('meta[property="og:title"]').content = document.title;
        document.querySelector('meta[property="og:description"]').content = description;
        var message = ar
            ? 'مرحبًا، أود معرفة تفاصيل منحة Hagzz للتحول الرقمي لأكاديميتي في قطر.'
            : 'Hello, I would like to learn about the Hagzz digital transformation grant for my academy in Qatar.';
        document.querySelectorAll('a.whatsapp').forEach(function (a) {
            a.href = 'https://wa.me/97470542458?text=' + encodeURIComponent(message);
        });
        try {
            var url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            history.replaceState(null, '', url);
        } catch (_) {}
        document.getElementById('copy-status').textContent = '';
    }
    document.addEventListener('langChanged', function (event) { updateLanguage(event.detail.lang); });

    document.querySelectorAll('[data-focus]').forEach(function (button) {
        button.addEventListener('click', function () {
            var selected = button.dataset.focus;
            document.querySelectorAll('[data-focus]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
            document.querySelectorAll('[data-panel]').forEach(function (panel) { panel.hidden = panel.dataset.panel !== selected; });
        });
    });
    document.getElementById('copy-link').addEventListener('click', async function () {
        var status = document.getElementById('copy-status');
        var ar = document.documentElement.lang === 'ar';
        try {
            await navigator.clipboard.writeText(window.location.href);
            status.textContent = ar ? 'تم نسخ رابط العرض.' : 'Page link copied.';
        } catch (_) {
            status.textContent = ar ? 'يمكنك نسخ رابط العرض من شريط عنوان المتصفح.' : 'Copy the page URL from your browser’s address bar.';
        }
    });
})();
