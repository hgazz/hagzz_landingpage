from pathlib import Path
from html import escape

R = Path(__file__).resolve().parents[3]

def t(tag, ar, en, cls='', extra=''):
    return f'<{tag} class="{cls}" data-ar="{escape(ar, quote=True)}" data-en="{escape(en, quote=True)}" {extra}>{escape(ar)}</{tag}>'

def link(ar, en, href, cls='', extra=''):
    return t('a', ar, en, cls, f'href="{href}" {extra}')

def icon(name):
    paths = {
        'arrow': '<path d="M5 12h14m-6-6 6 6-6 6"/>',
        'layers': '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
        'people': '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-3-5"/>',
        'wallet': '<path d="M20 8V5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16V8H4a2 2 0 0 1 0-4m12 10h4"/>',
        'check': '<path d="m5 12 4 4L19 6"/>',
        'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        'calendar': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-12 4h2m3 0h2"/>',
        'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
        'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
        'document': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
        'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        'award': '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
    }
    return f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{paths.get(name, "")}</svg>'

whatsapp = 'https://wa.me/97470542458'
google_form_url = 'https://forms.gle/xZowCCuAm9nngwT56'

parts = ['''<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>منحة التحول الرقمي للأكاديميات في قطر | VLab & QSTP & Hagzz</title><meta name="description" content="منحة التحول الرقمي وأتمتة الإدارة والتشغيل للأكاديميات الرياضية في قطر: بالتعاون مع واحة قطر للعلوم والتكنولوجيا (QSTP) و VLab & Hagzz. نظام ERP، تطبيق أولياء الأمور، تحصيل إلكتروني وبوابة تسجيل."><meta name="theme-color" content="#101b22"><link rel="canonical" href="https://hagzz.el7lm.com/qatar-grant.html"><meta property="og:type" content="website"><meta property="og:title" content="منحة التحول الرقمي للأكاديميات في قطر | VLab & QSTP & Hagzz"><meta property="og:description" content="فرصة استثنائية لتطوير أكاديميتك الرياضية في قطر بأنظمة إدارة التشغيل والحسابات المعتمدة."><meta property="og:image" content="https://hagzz.el7lm.com/content/assets/qatar-grant/banner-ar.jpg"><meta property="og:url" content="https://hagzz.el7lm.com/qatar-grant.html"><link rel="preload" href="content/assets/qatar-grant/fonts/cairo-variable.woff" as="font" type="font/woff" crossorigin><link rel="stylesheet" href="content/css/qatar-grant.css"><script src="content/js/qatar-grant.js" defer></script><script src="content/js/lang.js" defer></script><link rel="stylesheet" href="/content/css/grant-popup.css"><script src="/content/js/grant-popup.js" defer></script></head><body>''']

parts.append(link('انتقل إلى المحتوى', 'Skip to content', '#main', 'skip-link'))

# Header
parts.append('<header class="site-header"><div class="container header-inner"><a class="brand" href="./index.html" aria-label="Hagzz home"><img src="content/assets/images/icon/logo.svg" width="120" height="44" alt="Hagzz"></a><nav class="desktop-nav" aria-label="Main navigation">'
             + link('الرئيسية', 'Home', './index.html')
             + link('باقات الاشتراكات', 'ERP Packages', './pricing.html')
             + link('منحة قطر', 'Qatar Grant', './qatar-grant.html', 'active-nav')
             + link('عن المنحة', 'About Grant', '#about')
             + link('المميزات', 'Features', '#features')
             + link('التسجيل', 'Apply', '#apply')
             + '</nav><div class="header-actions"><button type="button" id="lang-toggle" class="language" aria-label="Switch to English">English</button>'
             + link('قدّم على المنحة', 'Apply for Grant', google_form_url, 'button small', 'target="_blank" rel="noopener"')
             + '</div></div></header>')

# Hero Section
parts.append('<main id="main"><section class="hero"><div class="container"><div class="hero-header-box"><div class="eyebrow"><span class="qatar-mark" aria-hidden="true"></span>'
             + t('span', 'فرصة استثنائية لتطوير أكاديميتك الرياضية في قطر', 'Exceptional Opportunity to Elevate Your Sports Academy in Qatar')
             + '</div>'
             + t('h1', 'منحة التحول الرقمي وأتمتة الإدارة والتشغيل', 'Digital Transformation & Operations Automation Grant')
             + t('p', 'لأنظمة إدارة التشغيل والحسابات للأكاديميات والفرق الرياضية في قطر — مقدمة من VLab بالتعاون مع واحة قطر للعلوم والتكنولوجيا (QSTP)', 'For operations management and accounting systems in sports academies and teams in Qatar — Powered by VLab in collaboration with Qatar Science & Technology Park (QSTP)', 'hero-lead')
             + '<div class="hero-cta">'
             + link('رابط التقديم على المنحة (Google Form)', 'Apply for the Grant (Google Form)', google_form_url, 'button', 'target="_blank" rel="noopener"')
             + link('تواصل مباشرة عبر واتساب', 'Chat on WhatsApp', whatsapp, 'button button-outline whatsapp', 'target="_blank" rel="noopener"')
             + '</div></div>'
             + '<div class="grant-banner-wrapper">'
             + '<img id="grant-banner-img" src="content/assets/qatar-grant/banner-ar.jpg" width="1200" height="400" alt="منحة التحول الرقمي للأكاديميات الرياضية في قطر">'
             + '</div></div></section>')

# Section 1: الجهات الداعمة والمنفذة
parts.append('<section id="about" class="section section-entities"><div class="container"><div class="section-heading">'
             + t('span', '1. الشراكة والجهات الداعمة والمنفذة', '1. Supporting & Executing Entities', 'eyebrow')
             + t('h2', 'تحالف استراتيجي لتمكين الرياضة القطرية رقمياً', 'A Strategic Alliance Empowering Qatari Sports Digitally')
             + t('p', 'مبادرة وطنية مشتركة تستند إلى خبرات واحة قطر للعلوم والتكنولوجيا في الابتكار وحلول VLab التكنولوجية المتخصصة.', 'A collaborative national initiative combining QSTP innovation expertise with VLab specialized sports-tech solutions.')
             + '</div><div class="grant-entities-grid">'
             + '<article class="grant-entity-card">'
             + '<div class="entity-logo-box"><img src="content/assets/qatar-grant/qstp.png" width="220" height="78" alt="Qatar Science & Technology Park"></div>'
             + '<span class="grant-entity-badge" data-ar="الشراكة الاستراتيجية" data-en="Strategic Partnership">الشراكة الاستراتيجية</span>'
             + t('h3', 'واحة قطر للعلوم والتكنولوجيا (QSTP)', 'Qatar Science & Technology Park (QSTP)')
             + t('p', 'بالتعاون الاستراتيجي مع واحة قطر للعلوم والتكنولوجيا (عضو مؤسسة قطر)، الحاضنة الرائدة للبحوث والتطوير التكنولوجي والابتكار الرياضي في دولة قطر.', 'In strategic collaboration with Qatar Science & Technology Park (Member of Qatar Foundation), the premier hub for tech R&D and sports innovation in Qatar.')
             + '</article>'
             + '<article class="grant-entity-card">'
             + '<div class="entity-logo-box"><div class="company-wordmark" dir="ltr">Mesk <span>|</span> <b>vlab<span>Ai</span></b></div></div>'
             + '<span class="grant-entity-badge badge-green" data-ar="الجهة المنفذة المعتمدة" data-en="Executing Entity">الجهة المنفذة المعتمدة</span>'
             + t('h3', 'شركة VLab & Hagzz المتخصصة', 'VLab & Hagzz Sports Technology')
             + t('p', 'شركة VLab & Hagzz المتخصصة في حلول التكنولوجيا الرياضية وأتمتة الأكاديميات (وليست وكالة تسويق إعلاني، بل مزود معتمد لأنظمة التشغيل والإدارة المتكاملة).', 'VLab & Hagzz, specialized in sports tech solutions and academy automation (Not an ad agency, but an official operations and management software provider).')
             + '</article>'
             + '</div></div></section>')

# Section 2: فكرة المنحة وهدفها
parts.append('<section class="section section-concept"><div class="container">'
             + '<div class="grant-concept-card">'
             + '<div class="eyebrow text-lime">' + t('span', '2. فكرة المنحة وهدفها', '2. Grant Concept & Objective') + '</div>'
             + t('h2', 'تحول رقمي حقيقي يخفف الأعباء وينهي الهدر الإداري', 'True Digital Transformation That Eliminates Administrative Burdens', 'concept-title')
             + t('p', 'المنحة ليست لدعم الإعلانات أو الحملات التسويقية، بل هي منحة تقنية متكاملة تستهدف التحول الرقمي الكامل للأكاديميات الرياضية في قطر. هدفها الرئيسي هو تخفيف العبء الإداري والمالي عن إدارات الأكاديميات عبر توفير أنظمة برمجية متطورة تدير العمل اليومي بالكامل.', 'The grant is not for advertising or marketing campaigns; rather, it is a comprehensive technical grant aimed at achieving full digital transformation for sports academies in Qatar. Its main objective is to relieve administrative and financial burdens by providing advanced software systems that manage daily operations seamlessly.')
             + '</div></div></section>')

# Section 3: ما الذي تقدمه المنحة لأكاديميتك؟ (المميزات الأساسية)
parts.append('<section id="features" class="section"><div class="container"><div class="section-heading">'
             + t('span', '3. ما الذي تقدمه المنحة لأكاديميتك؟ (المميزات الأساسية)', '3. What Does the Grant Offer Your Academy? (Key Features)', 'eyebrow')
             + t('h2', 'حزمة تقنية شاملة ومتكاملة لإدارة احترافية', 'A Comprehensive Tech Suite for Professional Management')
             + t('p', 'تمنحك المنحة منظومة تشغيلية برمجية متطورة تغطي جميع متطلبات عمل الأكاديمية اليومية وتلغي التعاملات الورقية.', 'The grant provides an advanced operational software system covering all daily academy needs, fully eliminating paperwork.')
             + '</div><div class="grant-features-grid">'
             + '<article class="grant-feature-item">'
             + '<div class="grant-feature-icon">' + icon('settings') + '</div>'
             + t('h3', 'نظام إدارة وتشغيل متكامل (ERP)', 'Integrated ERP Management System')
             + t('p', 'يربط جميع أقسام الأكاديمية ببعضها البعض ويتحكم في بيانات اللاعبين والمدربين والجدولة اليومية وتوزيع المجموعات بدقة ومرونة.', 'Connects all academy departments and manages player/coach data, daily scheduling, and group allocations with accuracy and flexibility.')
             + '</article>'
             + '<article class="grant-feature-item">'
             + '<div class="grant-feature-icon">' + icon('phone') + '</div>'
             + t('h3', 'تطبيق مخصص لأولياء الأمور (Parent App)', 'Custom Parent App')
             + t('p', 'يتيح لأولياء الأمور متابعة حضور أبنائهم، مستوى أدائهم، ومواعيد التمارين بكل سهولة، مما يرفع من ثقة واحترافية الأكاديمية أمامهم.', 'Allows parents to easily track their children\'s attendance, performance levels, and training schedules, boosting trust and professionalism.')
             + '</article>'
             + '<article class="grant-feature-item">'
             + '<div class="grant-feature-icon">' + icon('wallet') + '</div>'
             + t('h3', 'نظام التحصيل الإلكتروني والمالي', 'Electronic Collection & Financial System')
             + t('p', 'يسهل متابعة المدفوعات، الاشتراكات الشهرية، وإصدار الفواتير بدقة، مما ينظم التدفقات المالية ويقضي على الهدر الإداري والمحاسبي.', 'Simplifies payment tracking, monthly subscriptions, and precise invoicing, organizing cash flow and eliminating administrative and financial waste.')
             + '</article>'
             + '<article class="grant-feature-item">'
             + '<div class="grant-feature-icon">' + icon('document') + '</div>'
             + t('h3', 'بوابة تسجيل ذكية', 'Smart Registration Portal')
             + t('p', 'لتسجيل اللاعبين الجدد عبر الإنترنت بسهولة دون الحاجة للمعاملات الورقية التقليدية مع ربط مباشر بملفات الاشتراكات.', 'Enables online player registration effortlessly without traditional paperwork, directly linked to subscription profiles.')
             + '</article>'
             + '</div></div></section>')

# Section 4: لمن هذه المنحة؟
parts.append('<section class="section section-target"><div class="container"><div class="section-heading">'
             + t('span', '4. لمن هذه المنحة؟', '4. Who is This Grant For?', 'eyebrow')
             + t('h2', 'مصممة خصيصاً للأكاديميات والفرق الرياضية في قطر', 'Tailored Specifically for Sports Academies & Teams in Qatar')
             + t('p', 'موجهة لجميع الأكاديميات الرياضية في دولة قطر (كرة القدم وبقية الألعاب الرياضية) التي تبحث عن الاحترافية، توفير الوقت، وأتمتة عملياتها الإدارية والمالية بالكامل.', 'Targeted at all sports academies in Qatar (football and all other sports) seeking professionalism, time-saving, and full automation of administrative and financial operations.')
             + '</div><div class="sport-pills-wrap">'
             + '<span class="sport-pill">⚽ ' + t('span', 'أكاديميات كرة القدم', 'Football Academies') + '</span>'
             + '<span class="sport-pill">🏊 ' + t('span', 'أكاديميات السباحة والرياضات المائية', 'Swimming & Aquatics') + '</span>'
             + '<span class="sport-pill">🎾 ' + t('span', 'التنس والبادل والسكواش', 'Tennis & Padel & Squash') + '</span>'
             + '<span class="sport-pill">🥋 ' + t('span', 'فنون القتال والدفاع عن النفس', 'Martial Arts') + '</span>'
             + '<span class="sport-pill">🏀 ' + t('span', 'كرة السلة والطائرة واليد', 'Basketball, Volleyball & Handball') + '</span>'
             + '<span class="sport-pill">🤸 ' + t('span', 'الجمباز واللياقة والرياضات المتنوعة', 'Gymnastics, Fitness & All Sports') + '</span>'
             + '</div></div></section>')

# Section 5: كيف يتم الاستفادة منها؟ + الملاحظة الهامة
parts.append('<section class="section section-how"><div class="container"><div class="section-heading">'
             + t('span', '5. كيف يتم الاستفادة منها؟', '5. How to Benefit?', 'eyebrow')
             + t('h2', 'خطوات ميسرة وسريعة للبدء الفوري', 'Straightforward Steps to Get Started Immediately')
             + t('p', 'بما أن الأماكن والدعم المقدم من خلال المنحة محدود، يتم التسجيل الأولي عبر نموذج مخصص (Google Form) لتقييم الأكاديمية وتأهيلها للحصول على الدعم التقني والمالي لتطبيق النظام.', 'Since slots and support provided through the grant are limited, initial registration is done via a dedicated Google Form to evaluate and qualify academies for technical and financial support.')
             + '</div><div class="grant-steps-grid">'
             + '<div class="grant-step-box"><div class="step-number">1</div>'
             + t('h3', 'التسجيل وتعبئة النموذج', 'Fill Initial Application')
             + t('p', 'تسجيل بيانات الأكاديمية الأساسية وحجم الفرق واللاعبين عبر النموذج المخصص في أقل من دقيقة.', 'Submit basic academy information, team size, and player count via the designated form in under a minute.')
             + '</div>'
             + '<div class="grant-step-box"><div class="step-number">2</div>'
             + t('h3', 'التقييم واعتماد المنحة', 'Evaluation & Qualification')
             + t('p', 'مراجعة طلب الأكاديمية وتحديد نسبة الدعم والخصومات والأشهر المجانية المعتمدة للأكاديمية.', 'Review academy needs to determine the approved support scope, discounts, and complimentary period.')
             + '</div>'
             + '<div class="grant-step-box"><div class="step-number">3</div>'
             + t('h3', 'التهيئة والتشغيل والتدريب', 'Onboarding & Deployment')
             + t('p', 'تهيئة النظام وربط التطبيقات وتدريب فريق عمل الأكاديمية للبدء فوراً بالتشغيل الرقمي الكامل.', 'Configure the system, connect apps, and train your staff to immediately launch full digital operations.')
             + '</div></div>'
             # Note box from PDF
             + '<div class="grant-note-box"><div class="note-icon">💡</div><div>'
             + t('h4', 'ملاحظة تشغيلية هامة:', 'Important Operating Note:')
             + t('p', 'النظام يعمل بكفاءة جنباً إلى جنب مع أي وكالة تسويق قد تستعين بها الأكاديمية لجلب اللاعبين، حيث يهتم هو بكل ما يحدث "خلف الكواليس" من إدارة وتشغيل وتحصيل.', 'The system works efficiently hand-in-hand with any marketing agency your academy uses to acquire players, managing all "behind-the-scenes" operations, administration, and collection.')
             + '</div></div>'
             + '</div></section>')

# Section 6: Payment Partners in Qatar
parts.append('<section class="payments-section section"><div class="container"><div class="section-heading">'
             + t('span', 'خيارات الدفع والتقسيط في قطر', 'PAYMENT & INSTALMENT PROVIDERS IN QATAR', 'eyebrow')
             + t('h2', 'بوابات دفع معتمدة وميسرة لأولياء الأمور', 'Reliable Payment Options Supporting Parents & Academies')
             + '</div><div class="provider-grid">'
             + '<article><div class="provider-mark"><img src="content/assets/qatar-grant/skipcash.svg" alt="SkipCash" width="166" height="52" loading="lazy"></div>' + t('h3', 'SkipCash', 'SkipCash') + t('p', 'حلول الدفع الرقمي والبطاقات في قطر.', 'Digital payments and card gateways in Qatar.') + '</article>'
             + '<article><div class="provider-mark"><span class="paylater-name" dir="ltr">PayLater</span></div>' + t('h3', 'PayLater', 'PayLater') + t('p', 'خيارات تقسيط اشتراكات الأكاديمية.', 'Academy subscription installment solutions.') + '</article>'
             + '<article><div class="provider-mark"><img src="content/assets/qatar-grant/geidea.svg" alt="Geidea" width="140" height="78" loading="lazy"></div>' + t('h3', 'Geidea', 'Geidea') + t('p', 'بوابة نقاط البيع والدفع الإلكتروني.', 'POS & e-payment processing solutions.') + '</article>'
             + '</div></div></section>')

# Section 7: Call to Action (CTA) matching PDF page 2
parts.append('<section id="apply" class="section section-cta"><div class="container">'
             + '<div class="grant-cta-card">'
             + '<div class="eyebrow text-maroon">' + t('span', 'المقاعد محدودة', 'LIMITED SPOTS AVAILABLE') + '</div>'
             + t('h2', 'الأماكن محدودة! سجل اهتمامك الآن في أقل من دقيقة', 'Limited spots available! Register your interest now in under a minute')
             + t('p', 'لا تفوت فرصة الاستفادة من المنحة المعتمدة لتطوير البنية التقنية لأكاديميتك الرياضية.', 'Don\'t miss the opportunity to elevate your sports academy\'s technology infrastructure.')
             + '<div class="cta-actions">'
             + link('رابط التقديم على المنحة (Google Form)', 'Apply for the Grant (Google Form)', google_form_url, 'button button-large', 'target="_blank" rel="noopener"')
             + link('تواصل معنا عبر واتساب', 'Chat on WhatsApp', whatsapp, 'button button-large button-whatsapp whatsapp', 'target="_blank" rel="noopener"')
             + '</div>'
             + '<div class="cta-subtext">'
             + '<button class="copy-link" data-ar="نسخ رابط الصفحة لمشاركته" data-en="Copy page link to share" type="button" id="copy-link">نسخ رابط الصفحة لمشاركته</button>'
             + '<span id="copy-status" role="status" aria-live="polite"></span>'
             + '</div>'
             + '</div></div></section>')

# Footer
parts.append('</main><footer class="site-footer"><div class="container"><a href="./index.html"><img src="content/assets/images/icon/logo.svg" width="112" height="42" alt="Hagzz"></a>'
             + t('p', '© Hagzz 2026 · منتج Mesk | vlabAi · واحة قطر للعلوم والتكنولوجيا · قطر', '© Hagzz 2026 · A Mesk | vlabAi product · QSTP · Qatar')
             + '<div>'
             + link('الرئيسية', 'Home', './index.html')
             + link('باقات الاشتراكات', 'ERP Packages', './pricing.html')
             + link('الخصوصية', 'Privacy', './privacy.html')
             + link('الشروط', 'Terms', './termsAndConditions.html')
             + link('اتصل بنا', 'Contact', './contact.html')
             + '</div></div></footer></body></html>')

output_html = ''.join(parts)
(R / 'qatar-grant.html').write_text(output_html, encoding='utf-8')
print("Successfully generated qatar-grant.html with size:", len(output_html))
