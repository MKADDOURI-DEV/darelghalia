export type Lang = 'fr' | 'en' | 'ar';

export interface Dictionary {
  nav: {
    discover: string;
    rooms: string;
    cuisine: string;
    experiences: string;
    gallery: string;
    contact: string;
    book: string;
    menu: string;
    close: string;
    location: string;
  };
  hero: {
    line1: string;
    line2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  heritage: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    quote: string;
    factLabel: string;
    factValue: string;
    factNote: string;
    cta: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; text: string; tag: string }[];
    statLabel: string;
    statValue: string;
    statNote: string;
    cta: string;
    verifyNote: string;
  };
  cuisine: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
  };
  courtyard: {
    eyebrow: string;
    title: string;
    p1: string;
    terraceTitle: string;
    terraceText: string;
  };
  experiences: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    confirmNote: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    open: string;
    close: string;
    prev: string;
    next: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    sub: string;
    arrival: string;
    departure: string;
    guests: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
    errRequired: string;
    errEmail: string;
    errDates: string;
    errPhone: string;
    fallback: string;
    noteNoLive: string;
  };
  contact: {
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
    accessTitle: string;
    accessText: string;
    mapTitle: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    explore: string;
    stay: string;
    reach: string;
  };
}

export const translations: Record<Lang, Dictionary> = {
  fr: {
    nav: {
      discover: 'Découvrir',
      rooms: 'Chambres & Suites',
      cuisine: 'Cuisine marocaine',
      experiences: 'Expériences',
      gallery: 'Galerie',
      contact: 'Contact',
      book: 'Réserver',
      menu: 'Menu',
      close: 'Fermer',
      location: 'Fès, Maroc',
    },
    hero: {
      line1: "L'ÂME DE FÈS.",
      line2: "L'ART DE VIVRE.",
      sub: "Découvrez l'élégance intemporelle d'une demeure marocaine historique au cœur de l'ancienne médina.",
      ctaPrimary: 'Découvrir le Riad',
      ctaSecondary: 'Chambres & Suites',
      scroll: 'Défiler',
    },
    heritage: {
      eyebrow: 'Patrimoine',
      title: 'UN HÉRITAGE VIVANT, PRÉSERVÉ À TRAVERS LE TEMPS.',
      p1: "Située au cœur de la médina de Fès, dans un quartier andalou, la maison d'hôtes Dar El Ghalia est une adresse historique et de prestige. Ce palais du XVIIIe siècle, qui appartient à une famille de la ville, dévoile ses décors et son architecture.",
      p2: "L'âme des anciens occupants est toujours présente à travers les 12 chambres et suites donnant sur le patio central. Chacune porte le nom des femmes de la famille ayant résidé dans la demeure entre 1920 et 1950.",
      quote: "Chaque chambre porte le nom d'une femme de la maison.",
      factLabel: 'Chambres & suites',
      factValue: '12',
      factNote: "Chacune porte le nom d'une femme de la famille ayant vécu ici entre 1920 et 1950.",
      cta: 'Notre histoire',
    },
    rooms: {
      eyebrow: 'Chambres & Suites',
      title: "QUATRE HISTOIRES DE FEMMES, AUTOUR DU PATIO.",
      intro: "La maison compte 12 chambres et suites. Chacune porte le nom d'une femme de la famille Lebbar ayant résidé dans la demeure. En voici quatre.",
      items: [
        { name: "El Guamra", text: "« La Lune » était le surnom de Fatna Lebbar, épouse du fils aîné de Hadj Omar Lebbar, connue pour sa grande beauté, sa grâce et sa générosité.", tag: "Suite Sénior" },
        { name: "Laaziza", text: "Veuve de plusieurs maris qui lui avaient légué une grande fortune, elle s'installa chez Hadj Omar Lebbar et vécut plusieurs années parmi la famille, qui la considérait comme l'une des siennes.", tag: "Suite Sénior" },
        { name: "Al Anbar", text: "D'origine subsaharienne, seule à avoir donné une fille à feu Hadj Omar Lebbar, prénommée Fatna, elle enrichit la cuisine de Fès des saveurs de son enfance passée au Mali.", tag: "Suite Sénior" },
        { name: "Lalla Rkya", text: "Mère de feu Omar Lebbar, fondateur de Dar El Ghalia. Trois chambres, un salon central avec cheminée et deux salles de bain.", tag: "Suite Royale" },
      ],
      statLabel: 'Chambres & suites',
      statValue: '12',
      statNote: "Quatre unités sont présentées ici ; les autres chambres et suites seront détaillées prochainement.",
      cta: 'Demander une disponibilité',
      verifyNote: "Chaque nom raconte une histoire de la famille Lebbar.",
    },
    cuisine: {
      eyebrow: 'Gastronomie',
      title: 'LA TABLE FASSIE, ENTRE TRADITION ET RAFFINEMENT.',
      p1: "Fidèle à sa tradition culinaire, l'ancien palais abrite un restaurant de renom et propose une table d'hôtes raffinée.",
      p2: "Une occasion de découvrir la véritable cuisine fassie, la plus réputée du Maroc, dans le décor d'un palais du XVIIIe siècle.",
      cta: 'Découvrir notre cuisine',
    },
    courtyard: {
      eyebrow: 'Architecture',
      title: "LE PATIO, CŒUR DE LA DEMEURE.",
      p1: "Les chambres s'articulent harmonieusement autour du patio central, véritable lieu de vie où se retrouvaient autrefois les familles et leurs invités lors des fêtes religieuses et des événements festifs.",
      terraceTitle: 'La Terrasse',
      terraceText: "De la terrasse, profitez de la vue sur la médina et de son coucher de soleil. Les appels à la prière des muezzins retentissent de toutes parts.",
    },
    experiences: {
      eyebrow: 'Expériences',
      title: 'FÈS, VÉCUE DE L\'INTÉRIEUR.',
      intro: "Une sélection d'expériences pour pénétrer l'âme de la ville.",
      items: [
        { title: 'La médina historique', text: "Souks, médersas et ruelles classées à l'UNESCO, à explorer avec un guide." },
        { title: 'Cuisine marocaine', text: "Dégustations et découvertes autour des saveurs de Fès." },
        { title: 'Visites & excursions', text: "Circuits guidés dans la ville et ses environs, sur demande." },
        { title: 'Terrasse & détente', text: "Pauses calmes face aux toits de la médina." },
        { title: 'Hammam & massages', text: "Soins traditionnels, selon disponibilité." },
      ],
      confirmNote: 'Les services proposés sont à confirmer avec la propriété.',
    },
    gallery: {
      eyebrow: 'Galerie',
      title: "L'ATMOSPHÈRE EN IMAGES.",
      open: 'Agrandir',
      close: 'Fermer',
      prev: 'Précédent',
      next: 'Suivant',
    },
    booking: {
      eyebrow: 'Réservation',
      title: 'VOTRE ESCAPADE PRIVÉE À FÈS',
      sub: "Vivez l'hospitalité intemporelle de Dar El Ghalia.",
      arrival: 'Arrivée',
      departure: 'Départ',
      guests: 'Voyageurs',
      name: 'Nom complet',
      email: 'E-mail',
      phone: 'Téléphone',
      message: 'Votre message (facultatif)',
      submit: 'Envoyer ma demande',
      sending: 'Envoi en cours…',
      successTitle: 'Demande préparée',
      successText: "Merci. Pour finaliser votre demande, contactez-nous directement par e-mail ou téléphone ci-dessous : votre séjour n'est pas confirmé tant que la propriété n'a pas répondu.",
      errRequired: 'Ce champ est obligatoire.',
      errEmail: 'Veuillez saisir une adresse e-mail valide.',
      errDates: 'La date de départ doit être postérieure à l\'arrivée.',
      errPhone: 'Veuillez saisir un numéro valide.',
      fallback: 'Ou contactez-nous directement :',
      noteNoLive: "Aucune disponibilité ni tarif en direct : la propriété vous répondra personnellement.",
    },
    contact: {
      title: 'Nous trouver',
      addressLabel: 'Adresse',
      address: '13–15 Ross Rhi, Ras Jnane, Rcif, Médina, Fès, Maroc',
      phoneLabel: 'Téléphone',
      emailLabel: 'E-mail',
      accessTitle: 'Accès',
      accessText: "Une partie de la médina est piétonne. Contactez la maison pour les indications d'accès et de stationnement officielles.",
      mapTitle: 'Carte de Dar El Ghalia à Fès',
    },
    footer: {
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      explore: 'Explorer',
      stay: 'Séjour',
      reach: 'Contact',
    },
  },
  en: {
    nav: {
      discover: 'Discover',
      rooms: 'Rooms & Suites',
      cuisine: 'Moroccan Cuisine',
      experiences: 'Experiences',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Your Stay',
      menu: 'Menu',
      close: 'Close',
      location: 'Fès, Morocco',
    },
    hero: {
      line1: 'THE SOUL OF FÈS.',
      line2: 'THE ART OF LIVING.',
      sub: 'Discover the timeless elegance of a historic Moroccan residence in the heart of the ancient Medina.',
      ctaPrimary: 'Discover the Riad',
      ctaSecondary: 'Explore Rooms & Suites',
      scroll: 'Scroll',
    },
    heritage: {
      eyebrow: 'Heritage',
      title: 'A LIVING HERITAGE, PRESERVED THROUGH TIME.',
      p1: "Set in the heart of the Medina of Fès, in an Andalusian quarter, the guesthouse Dar El Ghalia is a historic and prestigious address. This 18th-century palace, owned by a Fès family, reveals its decoration and architecture.",
      p2: "The spirit of its former occupants is still present in the 12 rooms and suites opening onto the central patio. Each one bears the name of a woman of the family who lived in the house between 1920 and 1950.",
      quote: "Every room bears the name of a woman of the house.",
      factLabel: 'Rooms & suites',
      factValue: '12',
      factNote: "Each bears the name of a woman of the family who lived here between 1920 and 1950.",
      cta: 'Our story',
    },
    rooms: {
      eyebrow: 'Rooms & Suites',
      title: "FOUR WOMEN'S STORIES, AROUND THE PATIO.",
      intro: "The house has 12 rooms and suites. Each bears the name of a woman of the Lebbar family who lived in the house. Here are four.",
      items: [
        { name: "El Guamra", text: "“The Moon” was the nickname of Fatna Lebbar, wife of Hadj Omar Lebbar's eldest son, known for her great beauty, grace and generosity.", tag: "Senior Suite" },
        { name: "Laaziza", text: "Widow of several husbands who left her a great fortune, she moved in with Hadj Omar Lebbar and lived for years among the family, who regarded her as one of their own.", tag: "Senior Suite" },
        { name: "Al Anbar", text: "Of sub-Saharan origin, the only one to give a daughter, Fatna, to the late Hadj Omar Lebbar, she enriched Fès cuisine with the flavours of her childhood in Mali.", tag: "Senior Suite" },
        { name: "Lalla Rkya", text: "Mother of the late Omar Lebbar, founder of Dar El Ghalia. Three bedrooms, a central lounge with fireplace and two bathrooms.", tag: "Royal Suite" },
      ],
      statLabel: 'Rooms & suites',
      statValue: '12',
      statNote: "Four units are presented here; the other rooms and suites will be detailed soon.",
      cta: 'Request availability',
      verifyNote: "Each name tells a story of the Lebbar family.",
    },
    cuisine: {
      eyebrow: 'Gastronomy',
      title: 'THE FASSI TABLE, BETWEEN TRADITION AND REFINEMENT.',
      p1: "True to its culinary tradition, the former palace houses a renowned restaurant and offers a refined table d'hôtes.",
      p2: "A chance to discover genuine Fassi cuisine, the most renowned in Morocco, in the setting of an 18th-century palace.",
      cta: 'Discover Our Cuisine',
    },
    courtyard: {
      eyebrow: 'Architecture',
      title: "THE PATIO, HEART OF THE HOUSE.",
      p1: "The rooms are arranged harmoniously around the central patio, the living heart of the house, where families and their guests once gathered during religious feasts and celebrations.",
      terraceTitle: 'The Terrace',
      terraceText: "From the terrace, enjoy the view over the medina and its sunset. The muezzins' calls to prayer ring out from every side.",
    },
    experiences: {
      eyebrow: 'Experiences',
      title: 'FÈS, LIVED FROM WITHIN.',
      intro: 'A selection of experiences to enter the soul of the city.',
      items: [
        { title: 'The historic Medina', text: 'Souks, madrasas and UNESCO-listed alleys, best explored with a guide.' },
        { title: 'Moroccan cuisine', text: 'Tastings and discoveries around the flavours of Fès.' },
        { title: 'Visits & excursions', text: 'Guided circuits in the city and beyond, on request.' },
        { title: 'Terrace & relaxation', text: 'Quiet pauses facing the rooftops of the Medina.' },
        { title: 'Hammam & massages', text: 'Traditional treatments, subject to availability.' },
      ],
      confirmNote: 'Services shown are subject to confirmation by the property.',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'THE ATMOSPHERE IN IMAGES.',
      open: 'Enlarge',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    booking: {
      eyebrow: 'Reservation',
      title: 'YOUR PRIVATE ESCAPE IN FÈS',
      sub: 'Experience the timeless hospitality of Dar El Ghalia.',
      arrival: 'Arrival',
      departure: 'Departure',
      guests: 'Guests',
      name: 'Full name',
      email: 'Email',
      phone: 'Telephone',
      message: 'Your message (optional)',
      submit: 'Send my request',
      sending: 'Sending…',
      successTitle: 'Request prepared',
      successText: 'Thank you. To complete your request, please contact us directly by email or telephone below: your stay is not confirmed until the property has replied.',
      errRequired: 'This field is required.',
      errEmail: 'Please enter a valid email address.',
      errDates: 'Departure must be after arrival.',
      errPhone: 'Please enter a valid number.',
      fallback: 'Or contact us directly:',
      noteNoLive: 'No live availability or rates are shown: the property will reply personally.',
    },
    contact: {
      title: 'Find us',
      addressLabel: 'Address',
      address: '13–15 Ross Rhi, Ras Jnane, Rcif, Medina, Fès, Morocco',
      phoneLabel: 'Telephone',
      emailLabel: 'Email',
      accessTitle: 'Access',
      accessText: 'Parts of the Medina are pedestrian only. Please contact the house for official access and parking guidance.',
      mapTitle: 'Map of Dar El Ghalia in Fès',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      explore: 'Explore',
      stay: 'Stay',
      reach: 'Contact',
    },
  },
  ar: {
    nav: {
      discover: 'اكتشف',
      rooms: 'الغرف والأجنحة',
      cuisine: 'المطبخ المغربي',
      experiences: 'التجارب',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
      book: 'احجز إقامتك',
      menu: 'القائمة',
      close: 'إغلاق',
      location: 'فاس، المغرب',
    },
    hero: {
      line1: 'روح فاس.',
      line2: 'فنّ العيش.',
      sub: 'اكتشف الأناقة الخالدة لدار مغربية تاريخية في قلب المدينة العتيقة.',
      ctaPrimary: 'اكتشف الرياض',
      ctaSecondary: 'الغرف والأجنحة',
      scroll: 'مرّر',
    },
    heritage: {
      eyebrow: 'التراث',
      title: 'إرث حيّ، محفوظ عبر الزمن.',
      p1: "دار الغالية بيت ضيافة تاريخي في قلب مدينة فاس العتيقة، في حيّ أندلسي. هذا القصر العائد إلى القرن الثامن عشر تملكه أسرة فاسية، ويكشف عن زخارفه وعمارته.",
      p2: "روح الساكنين القدامى حاضرة في 12 غرفة وجناحًا تطل على الصحن الأوسط. تحمل كل واحدة اسم إحدى نساء الأسرة اللواتي أقمن في الدار بين 1920 و1950.",
      quote: "كل غرفة تحمل اسم امرأة من البيت.",
      factLabel: 'غرف وأجنحة',
      factValue: '١٢',
      factNote: "تحمل كل غرفة اسم امرأة من الأسرة أقامت هنا بين 1920 و1950.",
      cta: 'قصتنا',
    },
    rooms: {
      eyebrow: 'الغرف والأجنحة',
      title: "أربع حكايات نسائية حول الصحن.",
      intro: "تضم الدار 12 غرفة وجناحًا، تحمل كل منها اسم امرأة من أسرة لبّار أقامت في الدار. إليكم أربعًا منها.",
      items: [
        { name: "الڭمرة", text: "«القمر» لقب فاطنة لبّار، زوجة الابن الأكبر للحاج عمر لبّار، اشتهرت بجمالها ولطفها وكرمها.", tag: "جناح سينيور" },
        { name: "العزيزة", text: "أرملة عدة أزواج تركوا لها ثروة كبيرة، أقامت لدى الحاج عمر لبّار سنوات عدة، وعدّتها الأسرة واحدة منها.", tag: "جناح سينيور" },
        { name: "العنبر", text: "من أصول جنوب صحراوية، وهي الوحيدة التي أنجبت للمرحوم الحاج عمر لبّار ابنة اسمها فاطنة، وأغنت مطبخ فاس بنكهات طفولتها في مالي.", tag: "جناح سينيور" },
        { name: "للا رقية", text: "والدة المرحوم عمر لبّار مؤسس دار الغالية. ثلاث غرف وصالون مركزي بمدفأة وحمّامان.", tag: "جناح ملكي" },
      ],
      statLabel: 'غرف وأجنحة',
      statValue: '١٢',
      statNote: "نعرض هنا أربع وحدات؛ وستُفصَّل بقية الغرف والأجنحة لاحقًا.",
      cta: 'اطلب التوفر',
      verifyNote: "كل اسم يحكي قصة من أسرة لبّار.",
    },
    cuisine: {
      eyebrow: 'فن الطهي',
      title: 'المائدة الفاسية، بين الأصالة والرقيّ.',
      p1: "وفيّةً لتقاليدها في الطبخ، يحتضن هذا القصر القديم مطعمًا مشهورًا ومائدة ضيوف راقية.",
      p2: "فرصة لاكتشاف المطبخ الفاسي الأصيل، الأشهر في المغرب، في أجواء قصر من القرن الثامن عشر.",
      cta: 'اكتشف مطبخنا',
    },
    courtyard: {
      eyebrow: 'العمارة',
      title: "الصحن، قلب الدار.",
      p1: "تتوزع الغرف بانسجام حول الصحن الأوسط، قلب الدار النابض، حيث كانت الأسر وضيوفها تلتقي في الأعياد الدينية والمناسبات.",
      terraceTitle: 'السطح',
      terraceText: "من السطح، استمتعوا بمنظر المدينة العتيقة وغروب الشمس، وأصوات المؤذنين تتردد من كل جانب.",
    },
    experiences: {
      eyebrow: 'التجارب',
      title: 'فاس، كما تُعاش من الداخل.',
      intro: 'مجموعة من التجارب للولوج إلى روح المدينة.',
      items: [
        { title: 'المدينة العتيقة', text: 'أسواق ومدارس وأزقة مصنّفة لدى اليونسكو، تُستكشف مع مرشد.' },
        { title: 'المطبخ المغربي', text: 'تذوّق واكتشاف حول نكهات فاس.' },
        { title: 'زيارات ورحلات', text: 'جولات مصحوبة بمرشد في المدينة وما حولها عند الطلب.' },
        { title: 'السطح والاسترخاء', text: 'لحظات هادئة أمام أسطح المدينة العتيقة.' },
        { title: 'الحمام والتدليك', text: 'عناية تقليدية، حسب التوفر.' },
      ],
      confirmNote: 'الخدمات المعروضة تخضع لتأكيد المؤسسة.',
    },
    gallery: {
      eyebrow: 'المعرض',
      title: 'الأجواء في صور.',
      open: 'تكبير',
      close: 'إغلاق',
      prev: 'السابق',
      next: 'التالي',
    },
    booking: {
      eyebrow: 'الحجز',
      title: 'ملاذك الخاص في فاس',
      sub: 'اختبر ضيافة دار الغالية الخالدة.',
      arrival: 'الوصول',
      departure: 'المغادرة',
      guests: 'عدد الضيوف',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'رسالتك (اختياري)',
      submit: 'إرسال طلبي',
      sending: 'جارٍ الإرسال…',
      successTitle: 'تم تجهيز الطلب',
      successText: 'شكراً لك. لإتمام طلبك، يرجى التواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف أدناه: إقامتك غير مؤكدة حتى ترد المؤسسة.',
      errRequired: 'هذا الحقل مطلوب.',
      errEmail: 'يرجى إدخال بريد إلكتروني صالح.',
      errDates: 'يجب أن يكون تاريخ المغادرة بعد الوصول.',
      errPhone: 'يرجى إدخال رقم صالح.',
      fallback: 'أو تواصل معنا مباشرة:',
      noteNoLive: 'لا تُعرض توفرات أو أسعار فورية: ستردّ عليك المؤسسة شخصياً.',
    },
    contact: {
      title: 'موقعنا',
      addressLabel: 'العنوان',
      address: '13–15 روس الرهي، رأس الجنان، الرصيف، المدينة العتيقة، فاس، المغرب',
      phoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      accessTitle: 'الوصول',
      accessText: 'أجزاء من المدينة العتيقة للمشاة فقط. تواصل مع البيت للحصول على إرشادات الوصول ومواقف السيارات الرسمية.',
      mapTitle: 'خريطة دار الغالية في فاس',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      explore: 'استكشف',
      stay: 'الإقامة',
      reach: 'تواصل',
    },
  },
};