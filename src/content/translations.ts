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
      p1: "Dar El Ghalia est une demeure fassie historique, rattachée au XVIIIe siècle, nichée dans la médina de Fès. Autour de son patio central, les boiseries sculptées, les zelliges et le plâtre ciselé témoignent d'un savoir-faire transmis de génération en génération.",
      p2: "Ici, le tumulte des ruelles s'efface derrière une porte ancienne. Reste la lumière douce du patio, le murmure de l'eau et l'hospitalité discrète d'une maison qui accueille ses hôtes comme des invités.",
      quote: "Une maison pour ralentir, au rythme de la médina.",
      factLabel: 'Chambres & suites',
      factValue: '12',
      factNote: "Selon le site officiel — à confirmer avec la propriété.",
      cta: 'Notre histoire',
    },
    rooms: {
      eyebrow: 'Chambres & Suites',
      title: 'DES REFUGES INTIMES AUTOUR DU PATIO.',
      intro: "Chaque chambre et suite se dévoile comme une page d'un carnet de voyage : matières nobles, lumière tamisée, détails d'artisans.",
      items: [
        { name: 'Les Suites du Patio', text: "Volumes généreux ouvrant sur la cour centrale, plafonds sculptés et salon intime.", tag: 'Suites' },
        { name: 'Les Chambres Fassies', text: "Décors d'inspiration andalouse, boiseries peintes et zelliges, au calme de la médina.", tag: 'Chambres' },
        { name: 'La Chambre sur Terrasse', text: "Une atmosphère plus secrète, au plus près des toits de Fès.", tag: 'Terrasse' },
      ],
      statLabel: 'Chambres & suites',
      statValue: '12',
      statNote: 'Catégories, équipements et capacités détaillés à valider avec la propriété avant publication.',
      cta: 'Demander une disponibilité',
      verifyNote: 'Les noms des catégories sont indicatifs, à confirmer.',
    },
    cuisine: {
      eyebrow: 'Gastronomie',
      title: 'LA TABLE FASSIE, ENTRE TRADITION ET RAFFINEMENT.',
      p1: "Fès est reconnue comme la capitale gastronomique du Maroc. Le restaurant de Dar El Ghalia perpétue cet héritage à travers une cuisine marocaine et fassie traditionnelle, servie dans le cadre apaisant du riad.",
      p2: "Tajines mijotés, pastilla, épices fraîches : une expérience à partager, à la lumière chaude du patio.",
      cta: 'Découvrir notre cuisine',
    },
    courtyard: {
      eyebrow: 'Architecture',
      title: 'LE PATIO, CŒUR SILENCIEUX DE LA MAISON.',
      p1: "Zelliges patinés, plâtre sculpté, cèdre peint et fontaine centrale : chaque détail raconte l'art des maâlems de Fès. Un lieu d'intimité, d'authenticité et de calme.",
      terraceTitle: 'La Terrasse',
      terraceText: "Au-dessus de la médina, un espace de repos pour contempler la lumière du soir sur les toits de Fès.",
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
      p1: 'Dar El Ghalia is a historic Fassi residence associated with the 18th century, set in the Medina of Fès. Around its central courtyard, carved woodwork, zellige and chiselled plaster bear witness to craftsmanship passed down through generations.',
      p2: 'Behind an old door, the tumult of the alleys fades. What remains is the soft light of the courtyard, the murmur of water, and the quiet hospitality of a house that welcomes its guests as guests of honour.',
      quote: 'A house to slow down in, at the rhythm of the Medina.',
      factLabel: 'Rooms & suites',
      factValue: '12',
      factNote: 'As listed on the official website — to be confirmed with the property.',
      cta: 'Our story',
    },
    rooms: {
      eyebrow: 'Rooms & Suites',
      title: 'INTIMATE RETREATS AROUND THE COURTYARD.',
      intro: 'Each room and suite unfolds like a page from a travel journal: noble materials, soft light, artisan detail.',
      items: [
        { name: 'The Courtyard Suites', text: 'Generous volumes opening onto the central court, carved ceilings and an intimate sitting area.', tag: 'Suites' },
        { name: 'The Fassi Rooms', text: 'Andalusian-inspired décor, painted woodwork and zellige, in the calm of the Medina.', tag: 'Rooms' },
        { name: 'The Terrace Room', text: 'A more secret atmosphere, closest to the rooftops of Fès.', tag: 'Terrace' },
      ],
      statLabel: 'Rooms & suites',
      statValue: '12',
      statNote: 'Categories, amenities and capacity to be validated with the property before publication.',
      cta: 'Request availability',
      verifyNote: 'Category names are indicative and pending confirmation.',
    },
    cuisine: {
      eyebrow: 'Gastronomy',
      title: 'THE FASSI TABLE, BETWEEN TRADITION AND REFINEMENT.',
      p1: 'Fès is regarded as the culinary capital of Morocco. The restaurant at Dar El Ghalia carries this legacy forward with traditional Moroccan and Fassi cuisine, served in the calming setting of the riad.',
      p2: 'Slow-cooked tagines, pastilla, fresh spices: an experience to share, in the warm light of the courtyard.',
      cta: 'Discover Our Cuisine',
    },
    courtyard: {
      eyebrow: 'Architecture',
      title: 'THE COURTYARD, THE SILENT HEART OF THE HOUSE.',
      p1: 'Aged zellige, sculpted plaster, painted cedar and a central fountain: every detail tells the art of the maâlems of Fès. A place of privacy, authenticity and calm.',
      terraceTitle: 'The Terrace',
      terraceText: 'Above the Medina, a place of rest to watch the evening light settle over the rooftops of Fès.',
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
      p1: 'دار الغالية دار فاسية تاريخية ترتبط بالقرن الثامن عشر، تقع في مدينة فاس العتيقة. حول صحنها المركزي، تشهد الأخشاب المنحوتة والزليج والجبس المنقوش على حرفية توارثتها الأجيال.',
      p2: 'خلف باب قديم، يتلاشى صخب الأزقة. ويبقى ضوء الصحن الهادئ وخرير الماء وكرم الضيافة الهادئ لبيت يستقبل ضيوفه كأعزّ الضيوف.',
      quote: 'بيت للتمهّل، على إيقاع المدينة العتيقة.',
      factLabel: 'غرف وأجنحة',
      factValue: '١٢',
      factNote: 'وفق الموقع الرسمي — يُؤكَّد مع المؤسسة.',
      cta: 'قصتنا',
    },
    rooms: {
      eyebrow: 'الغرف والأجنحة',
      title: 'ملاذات حميمة حول الصحن.',
      intro: 'تتكشّف كل غرفة وجناح كصفحة من دفتر سفر: مواد نبيلة، ضوء هادئ، وتفاصيل الحرفيين.',
      items: [
        { name: 'أجنحة الصحن', text: 'مساحات رحبة تطل على الصحن المركزي، وسقوف منحوتة وركن جلوس حميم.', tag: 'أجنحة' },
        { name: 'الغرف الفاسية', text: 'ديكور بوحي أندلسي، أخشاب مزخرفة وزليج، في هدوء المدينة العتيقة.', tag: 'غرف' },
        { name: 'غرفة السطح', text: 'أجواء أكثر خصوصية، قريبة من أسطح فاس.', tag: 'سطح' },
      ],
      statLabel: 'غرف وأجنحة',
      statValue: '١٢',
      statNote: 'الفئات والتجهيزات والسعة تُؤكَّد مع المؤسسة قبل النشر.',
      cta: 'اطلب التوفر',
      verifyNote: 'أسماء الفئات إرشادية وتنتظر التأكيد.',
    },
    cuisine: {
      eyebrow: 'فن الطهي',
      title: 'المائدة الفاسية، بين الأصالة والرقيّ.',
      p1: 'تُعدّ فاس العاصمة الغذائية للمغرب. ويواصل مطعم دار الغالية هذا الإرث بمطبخ مغربي وفاسي تقليدي، يُقدَّم في أجواء الرياض الهادئة.',
      p2: 'طواجن بطيئة الطهي، بسطيلة، وتوابل طازجة: تجربة للمشاركة في ضوء الصحن الدافئ.',
      cta: 'اكتشف مطبخنا',
    },
    courtyard: {
      eyebrow: 'العمارة',
      title: 'الصحن، القلب الصامت للبيت.',
      p1: 'زليج معتّق، جبس منحوت، أرز مزخرف ونافورة وسطية: كل تفصيل يروي فنّ معلّمي فاس. مكان للخصوصية والأصالة والسكينة.',
      terraceTitle: 'السطح',
      terraceText: 'فوق المدينة العتيقة، مكان للراحة لمتابعة ضوء المساء فوق أسطح فاس.',
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