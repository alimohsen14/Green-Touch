// ─── Services Data ────────────────────────────────────────────
export const servicesData = [
  {
    id: 'garden-design',
    title: 'تصميم الحدائق',
    desc: 'نصمم حدائق استثنائية تناسب ذوقك ومساحتك بلمسة إبداعية فريدة',
    bgClass: 'si-1',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5">
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 8 10 8zm0 0c0-5 5-8 10-8 0 5-3 8-10 8"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V12m0 0C12 7 7 4 2 4c0 5 3 8 10 8zm0 0c0-5 5-8 10-8 0 5-3 8-10 8"/>
      </svg>
    ),
  },

  {
    id: 'lighting',
    title: 'الإضاءة الخارجية',
    desc: 'أنظمة إضاءة ذكية تمنح حديقتك سحراً ليلياً لا يُنسى',
    bgClass: 'si-3',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,220,100,0.95)" strokeWidth="1.5">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.1 4.7-2.8 6.2A3 3 0 0114 18H10a3 3 0 01-2.2-2.8A7 7 0 015 9a7 7 0 017-7z"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.1 4.7-2.8 6.2A3 3 0 0114 18H10a3 3 0 01-2.2-2.8A7 7 0 015 9a7 7 0 017-7z"/>
      </svg>
    ),
  },
  {
    id: 'irrigation',
    title: 'أنظمة الري',
    desc: 'حلول ري ذكية وموفّرة للمياه تضمن خضرة دائمة طوال العام',
    bgClass: 'si-4',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(144,224,239,0.95)" strokeWidth="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
      </svg>
    ),
  },
  {
    id: 'seating',
    title: 'جلسات خارجية',
    desc: 'تصميم مساحات استرخاء فاخرة تمزج الراحة بجمال الطبيعة',
    bgClass: 'si-5',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(233,196,106,0.95)" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/>
      </svg>
    ),
  },
  {
    id: 'palms',
    title: 'أشجار النخيل',
    desc: 'توريد وزراعة وصيانة أجود أصناف النخيل بأيدي خبراء متخصصين',
    bgClass: 'si-6',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(183,228,199,0.95)" strokeWidth="1.5">
        <path d="M12 22V10M12 10C12 5 8 2 3 3c1 4 4 7 9 7M12 10c0-5 4-8 9-7-1 4-4 7-9 7"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V10M12 10C12 5 8 2 3 3c1 4 4 7 9 7M12 10c0-5 4-8 9-7-1 4-4 7-9 7"/>
      </svg>
    ),
  },
  {
    id: 'natural-grass',
    title: 'العشب الطبيعي',
    desc: 'تمديد وزراعة العشب الطبيعي عالي الجودة مع ضمان الخضرة الدائمة',
    bgClass: 'si-7',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(149,213,178,0.95)" strokeWidth="1.5">
        <path d="M2 22h20M7 22V10c0-4 4-8 5-8s5 4 5 8v12"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 22h20M7 22V10c0-4 4-8 5-8s5 4 5 8v12"/>
      </svg>
    ),
  },
  {
    id: 'artificial-grass',
    title: 'العشب الصناعي',
    desc: 'أحدث تقنيات العشب الصناعي الفائق الجودة للمظهر الأخضر الدائم',
    bgClass: 'si-8',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(216,243,220,0.95)" strokeWidth="1.5">
        <rect x="2" y="18" width="20" height="3" rx="1"/><path d="M5 18V8m4 10V6m4 12V9m4 9V7"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="18" width="20" height="3" rx="1"/><path d="M5 18V8m4 10V6m4 12V9m4 9V7"/>
      </svg>
    ),
  },

  {
    id: 'maintenance',
    title: 'صيانة الحدائق',
    desc: 'برامج صيانة دورية شاملة تحافظ على جمال حديقتك طوال العام',
    bgClass: 'si-10',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(183,228,199,0.95)" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    badgeIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
]

// ─── Why Choose Us Data ──────────────────────────────────────
export const whyData = [
  {
    id: 'team',
    title: 'فريق محترف',
    desc: 'كوادر مؤهلة ذات خبرة عالية في تصميم المناظر الطبيعية والهندسة الزراعية',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    id: 'quality',
    title: 'جودة عالية',
    desc: 'نستخدم أفضل المواد والنباتات المستوردة لضمان نتائج تفوق التوقعات',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  },
  {
    id: 'experience',
    title: 'خبرة ١٥ عاماً',
    desc: 'تاريخ حافل من المشاريع الناجحة في جميع أنحاء المملكة والخليج',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  },
  {
    id: 'design',
    title: 'تصاميم عصرية',
    desc: 'نواكب أحدث الاتجاهات العالمية في تصميم المناظر الطبيعية الفاخرة',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    id: 'satisfaction',
    title: 'رضا العملاء',
    desc: 'نسبة رضا تتجاوز ٩٨٪ تعكس التزامنا بتحقيق رؤية كل عميل',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
  {
    id: 'delivery',
    title: 'التسليم في الموعد',
    desc: 'نلتزم بالمواعيد المحددة دون تنازل عن أدق تفاصيل الجودة',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v4h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>,
  },
  {
    id: 'materials',
    title: 'مواد فاخرة',
    desc: 'اختيار دقيق لأجود المواد والنباتات لضمان جمال يدوم لسنوات',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
]

// ─── Projects Data ────────────────────────────────────────────
export const projectsData = [
  {
    id: 'proj-1',
    image: '/images/project1.png',
    alt: 'فيلا الرياض الخضراء',
    category: 'حديقة فيلا فاخرة',
    title: 'فيلا الرياض الخضراء',
    location: 'الرياض، المملكة العربية السعودية',
    desc: 'حديقة فاخرة بمساحة ٢٠٠٠ م² تشمل مسطحات مائية وعشب طبيعي وإضاءة ذكية',
    large: true,
  },
  {
    id: 'proj-2',
    image: '/images/project2.png',
    alt: 'مجمع تجاري جدة',
    category: 'مشروع تجاري',
    title: 'مجمع الياسمين التجاري',
    location: 'جدة، المملكة العربية السعودية',
    desc: 'تنسيق بيئي شامل للمداخل والمساحات الخارجية بتصميم معماري معاصر',
    large: false,
  },
  {
    id: 'proj-3',
    image: '/images/project3.png',
    alt: 'روف تراس الدمام',
    category: 'حديقة سطحية',
    title: 'روف تراس النخيل',
    location: 'الدمام، المملكة العربية السعودية',
    desc: 'حديقة سطحية عصرية بإطلالة بانورامية مع جلسات خارجية وإضاءة محيطية',
    large: false,
  },
]

// ─── Process Steps Data ───────────────────────────────────────
export const processData = [
  {
    id: 'step-1',
    num: '١',
    title: 'الاستشارة',
    desc: 'نستمع لرؤيتك ونفهم احتياجاتك وتفضيلاتك بشكل كامل',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  },
  {
    id: 'step-2',
    num: '٢',
    title: 'زيارة الموقع',
    desc: 'نزور موقعك لمعاينة المساحة وتقييمها بدقة لضمان أفضل حلول',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    id: 'step-3',
    num: '٣',
    title: 'التصميم',
    desc: 'نبتكر تصميماً ثلاثي الأبعاد مفصّلاً يُجسّد حديقة أحلامك',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  },
  {
    id: 'step-4',
    num: '٤',
    title: 'التنفيذ',
    desc: 'ننفّذ التصميم بأعلى معايير الجودة والدقة باستخدام أفضل المواد',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    id: 'step-5',
    num: '٥',
    title: 'التسليم',
    desc: 'نسلّمك مشروعك مكتملاً في الموعد المحدد مع ضمان الجودة',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
]

// ─── Testimonials Data ────────────────────────────────────────
export const testimonialsData = [
  {
    id: 'test-1',
    text: '"لمسة خضراء حوّلت حديقتي من أرض فضاء مهجورة إلى جنة خضراء رائعة. الفريق محترف جداً والتنفيذ كان مثالياً من أول يوم."',
    name: 'م. محمد العتيبي',
    role: 'صاحب فيلا — الرياض',
    initials: 'م',
    featured: false,
  },
  {
    id: 'test-2',
    text: '"تعاملنا مع لمسة خضراء لتنسيق المجمع التجاري بأكمله. النتيجة فاقت كل توقعاتنا. الالتزام بالمواعيد والجودة في التنفيذ يجعلهم الخيار الأمثل."',
    name: 'سلطان الغامدي',
    role: 'مدير عام — مجموعة النخيل العقارية',
    initials: 'س',
    featured: true,
  },
  {
    id: 'test-3',
    text: '"خدمة صيانة الحدائق التي تقدمها لمسة خضراء ممتازة. الفريق منضبط ومهني وحديقتنا تبدو رائعة في كل وقت. أنصح بهم بشدة."',
    name: 'نورة الشمري',
    role: 'صاحبة منزل — جدة',
    initials: 'ن',
    featured: false,
  },
]

// ─── Nav Links ────────────────────────────────────────────────
export const navLinks = [
  { id: 'home',     label: 'الرئيسية' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'projects', label: 'مشاريعنا' },
  { id: 'contact',  label: 'تواصل معنا' },
]

// ─── Contact Methods ──────────────────────────────────────────
export const contactMethods = [
  {
    id: 'phone',
    label: 'الهاتف',
    value: '+972 59 769 6749',
    href: 'tel:+972597696749',
    ltr: true,
    iconPath: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.003 4.85 2 2 0 012 2.69h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
    whatsapp: false,
  },
  {
    id: 'whatsapp',
    label: 'واتساب',
    value: '+972 59 769 6749',
    href: 'https://wa.me/972597696749',
    ltr: true,
    iconPath: null,
    whatsapp: true,
  },

]
