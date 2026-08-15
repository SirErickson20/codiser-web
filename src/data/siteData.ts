import { ServiceItem, ProjectItem, ValueItem, DistinctionItem, MarketTarget } from '../types';

export const COMPANY_INFO = {
  name: 'CODISEr',
  fullName: 'CODISEr Servicios Digitales',
  tagline: 'Integrando estrategias tradicionales y digitales para impulsar el crecimiento real de tu negocio en el mercado actual.',
  heroHeadline: 'La comunicación conecta marcas con personas. Nosotros creamos esa conexión.',
  aboutBrief: 'Somos una empresa de comunicación y marketing que integra medios tradicionales y digitales para potenciar marcas, empresas e instituciones. Entendemos el pulso del mercado y traducimos tus objetivos en estrategias claras, medibles y orientadas a resultados.',
  aboutFull: 'En CODISEr Servicios Digitales, no solo creamos contenido; construimos puentes entre los medios de comunicación tradicionales y el vasto ecosistema digital. Entendemos que la autoridad de los canales corporativos clásicos debe fluir sin fricción hacia la agilidad y el alcance de las plataformas modernas. Nuestro enfoque es pragmático, orientado a resultados y diseñado para fortalecer la relación entre su marca y su audiencia en cada punto de contacto.',
  address: 'San Martín 639, 5° Piso',
  city: 'San Salvador de Jujuy, Argentina',
  email: 'codisersrl@gmail.com.ar',
  phone: '+54 9 388 123 4567',
  phoneClean: '5493881234567',
  schedule: 'Lunes a Viernes de 9 a 18hs',
  social: {
    instagram: 'https://instagram.com/codiser',
    facebook: 'https://facebook.com/codiser',
    linkedin: 'https://linkedin.com/company/codiser',
  }
};

export const DISTINCTIONS: DistinctionItem[] = [
  {
    title: 'Innovación constante',
    description: 'Nos adaptamos a las últimas tendencias para mantener tu marca relevante.',
    icon: 'Lightbulb'
  },
  {
    title: 'Conocimiento del mercado',
    description: 'Análisis profundo para tomar decisiones basadas en datos reales.',
    icon: 'TrendingUp'
  },
  {
    title: 'Estrategias personalizadas',
    description: 'Soluciones a medida diseñadas para tus objetivos específicos.',
    icon: 'Sliders'
  },
  {
    title: 'Servicio de calidad',
    description: 'Atención cercana, accesible y comprometida con tu éxito.',
    icon: 'ShieldCheck'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Confiabilidad y responsabilidad',
    description: 'Cumplimos nuestros compromisos con precisión arquitectónica. Su proyecto es gestionado con la máxima seriedad y dedicación, garantizando entregas puntuales y de calidad.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Honestidad y transparencia',
    description: 'Mantenemos una comunicación clara en cada etapa del proceso. Sin sorpresas, solo resultados medibles y estrategias fundamentadas en datos reales.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Disciplina y perseverancia',
    description: 'El éxito digital requiere constancia. Aplicamos un enfoque sistemático y disciplinado para optimizar continuamente el rendimiento de sus campañas.',
    icon: 'TrendingUp'
  }
];

export const MARKET_TARGETS: MarketTarget[] = [
  {
    id: 'medios',
    title: 'Radio, TV y Gráfica',
    badge: 'MEDIOS TRADICIONALES',
    description: 'Modernización y extensión digital para medios tradicionales que buscan amplificar su audiencia y mantener relevancia.',
    icon: 'Radio',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80',
    type: 'large-image'
  },
  {
    id: 'redes',
    title: 'Redes Sociales',
    badge: 'ECOSISTEMA DIGITAL',
    description: 'Gestión estratégica, creación de contenido de alto impacto y campañas publicitarias segmentadas para máxima conversión.',
    icon: 'Share2',
    type: 'standard'
  },
  {
    id: 'empresas',
    title: 'Empresas y Comercios',
    badge: 'SECTOR CORPORATIVO',
    description: 'Transformación digital integral para negocios establecidos que buscan consolidar su liderazgo de mercado.',
    icon: 'Building2',
    type: 'split'
  },
  {
    id: 'emergentes',
    title: 'Marcas Emergentes',
    badge: 'STARTUPS & INNOVACIÓN',
    description: 'Identidad visual sólida y estrategias de lanzamiento efectivas para proyectos en fase de aceleración.',
    icon: 'Rocket',
    type: 'split'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'marketing-redes',
    title: 'Marketing en redes sociales',
    shortDescription: 'Gestión profesional de comunidades, generación de contenidos de alto valor y engagement con audiencias clave.',
    fullDescription: 'Diseñamos estrategias integrales de Social Media orientadas a construir comunidades activas y leales. Planificamos calendarios editoriales, creamos contenidos visuales y audiovisuales cautivantes y monitoreamos la interacción para convertir seguidores en clientes.',
    icon: 'Share2',
    category: 'digital',
    deliverables: [
      'Estrategia de contenidos y calendario mensual',
      'Producción gráfica y audiovisual (Reels, Carruseles, Stories)',
      'Gestión de comunidad y moderación de consultas',
      'Monitoreo de reputación y métricas de alcance'
    ]
  },
  {
    id: 'diseno-grafico',
    title: 'Diseño gráfico',
    shortDescription: 'Creación de piezas visuales estratégicas que transmiten la esencia y profesionalismo de su marca.',
    fullDescription: 'El diseño es la cara visible de su empresa. Desarrollamos identidades visuales memorables, papelería corporativa, folletería, manuales de marca y piezas digitales con un riguroso estándar estético.',
    icon: 'PenTool',
    category: 'branding',
    deliverables: [
      'Identidad corporativa y manuales de marca',
      'Piezas publicitarias para vía pública y gráfica',
      'Material institucional (brochures, presentaciones, catálogos)',
      'Diseño para soportes digitales y banners web'
    ]
  },
  {
    id: 'pauta-publicitaria',
    title: 'Pauta publicitaria y medios',
    shortDescription: 'Campañas de anuncios optimizadas para maximizar el retorno de inversión y la captación de clientes.',
    fullDescription: 'Gestionamos presupuestos publicitarios en Meta Ads, Google Ads, TikTok Ads y medios programáticos con segmentación hiper-precisa y optimización continua de costos por adquisición.',
    icon: 'Megaphone',
    category: 'digital',
    deliverables: [
      'Configuración y segmentación de audiencias',
      'Campañas de tráfico, generación de leads y conversiones',
      'A/B Testing de copys y creatividades',
      'Optimización de CPA y reportes de rendimiento'
    ]
  },
  {
    id: 'campanas-tradicionales',
    title: 'Campañas tradicionales',
    shortDescription: 'Planificación y pautado en medios masivos con alto impacto territorial y alcance masivo.',
    fullDescription: 'Articulamos presencia de alto impacto en diarios, revistas, cartelería en vía pública y eventos estratégicos, consolidando la presencia de su marca en el mundo físico.',
    icon: 'Calendar',
    category: 'traditional',
    deliverables: [
      'Plan de medios impresos y publicaciones especiales',
      'Cartelería en vía pública y mobiliario urbano',
      'Cobertura fotográfica y de prensa en eventos',
      'Alianzas y activaciones de marca BTL'
    ]
  },
  {
    id: 'estrategia-contenido',
    title: 'Estrategia de contenido',
    shortDescription: 'Desarrollo de narrativas de marca que educan, inspiran y generan autoridad en el sector.',
    fullDescription: 'La comunicación sin estrategia es solo ruido. Diseñamos planes editoriales basados en investigación de mercado, definiendo pilares de comunicación, tono de voz y formatos adecuados para conectar con el público objetivo.',
    icon: 'FileText',
    category: 'strategy',
    isHighlighted: true,
    deliverables: [
      'Definición de pilares comunicacionales y Brand Voice',
      'Investigación de audiencias y Customer Journey',
      'Storytelling corporativo y redacción persuasiva',
      'Guías de estilo para comunicación interna y externa'
    ]
  },
  {
    id: 'gestion-crm',
    title: 'Gestión de relaciones (CRM)',
    shortDescription: 'Implementación y optimización de flujos de contacto para una atención al cliente ágil y efectiva.',
    fullDescription: 'Centralizamos las conversaciones de WhatsApp, redes sociales y formularios web en sistemas ordenados para que su equipo comercial no pierda ninguna oportunidad de venta.',
    icon: 'Users',
    category: 'digital',
    deliverables: [
      'Automatización de respuestas y chatbots inteligentes',
      'Integración de WhatsApp Business multiagente',
      'Segmentación de bases de datos de prospectos',
      'Pipelines de seguimiento comercial y post-venta'
    ]
  },
  {
    id: 'estadisticas-informes',
    title: 'Estadísticas e informes',
    shortDescription: 'Métricas claras y análisis mensual de performance para la toma de decisiones informadas.',
    fullDescription: 'Transformamos datos complejos en dashboards claros y ejecutivos. Evaluamos el rendimiento de cada canal para detectar oportunidades de crecimiento y optimizar el presupuesto.',
    icon: 'BarChart3',
    category: 'strategy',
    deliverables: [
      'Informes mensuales ejecutivos con KPIs clave',
      'Análisis de ROI y Costo por Adquisición (CAC)',
      'Dashboards en tiempo real con Looker Studio',
      'Reuniones periódicas de seguimiento estratégico'
    ]
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital',
    shortDescription: 'Ecosistemas integrales para captar, nutrir y fidelizar clientes a través de múltiples canales online.',
    fullDescription: 'Integramos SEO, Email Marketing, Funnels de conversión y pauta digital para crear un motor constante de generación de clientes potenciales para su negocio.',
    icon: 'MousePointerClick',
    category: 'digital',
    deliverables: [
      'Funnels de ventas y páginas de aterrizaje (Landing Pages)',
      'Estrategias de Email Marketing y automatizaciones',
      'Optimización para motores de búsqueda (SEO local y orgánico)',
      'Estrategias omnicanal de atracción de clientes'
    ]
  },
  {
    id: 'publicidad-movil',
    title: 'Publicidad móvil',
    shortDescription: 'Campañas dinámicas en transportes públicos, flotas comerciales y soportes móviles.',
    fullDescription: 'Llegue a miles de personas diariamente en las arterias principales de la ciudad mediante ploteos integrales de unidades de transporte, vehículos comerciales y circuitos móviles.',
    icon: 'Bus',
    category: 'traditional',
    deliverables: [
      'Ploteo integral y semi-integral de colectivos y flotas',
      'Circuitos de recorrido urbano e interurbano',
      'Materiales de alta durabilidad y resistencia climática',
      'Permisos y gestión municipal de espacios móviles'
    ]
  },
  {
    id: 'medios-tradicionales',
    title: 'Medios tradicionales',
    shortDescription: 'Pauta publicitaria en emisoras de radio líderes, programas de TV y espacios informativos de referencia.',
    fullDescription: 'Contamos con convenios directos con las principales emisoras radiales y canales de televisión abierta y por cable para pautar spots, menciones en vivo, PNTs y entrevistas institucionales.',
    icon: 'Tv',
    category: 'traditional',
    deliverables: [
      'Producción de spots radiales y piezas televisivas',
      'Pauta rotativa y menciones especiales en programas líderes',
      'Gestión de entrevistas y vocería institucional',
      'Auditoría y control de emisiones'
    ]
  },
  {
    id: 'pantallas-led',
    title: 'Pantallas LED',
    shortDescription: 'Circuitos de pantallas digitales de gran formato en puntos neurálgicos y de alto tránsito vehicular y peatonal.',
    fullDescription: 'Impacte al público en movimiento con spots animados de alta resolución en las esquinas y avenidas más transitadas. Máxima visibilidad diurna y nocturna para posicionar su marca con fuerza.',
    icon: 'MonitorPlay',
    category: 'traditional',
    isWide: true,
    deliverables: [
      'Producción y adaptación de animaciones en alta resolución',
      'Selección estratégica de esquinas y nodos de alto tráfico',
      'Programación con alta frecuencia de repetición diaria',
      'Reportes de visualización y monitoreo de funcionamiento'
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'guiaza-arrendamientos',
    title: 'Guiaza Arrendamientos',
    tag: 'DESARROLLO WEB & MARKETING',
    category: 'Desarrollo Web & Marketing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    summary: 'Desarrollo de plataforma inmobiliaria moderna con catálogo interactivo y campañas de captación de leads de alto valor.',
    client: 'Guiaza Arrendamientos S.A.',
    year: '2024',
    challenge: 'La empresa contaba con procesos de contacto desarticulados y un sitio web desactualizado que no permitía una búsqueda ágil de propiedades ni la adecuada captación de consultas corporativas.',
    solution: 'Diseñamos y desarrollamos un nuevo portal web responsive con filtros de búsqueda avanzados, optimización SEO y conectividad directa con WhatsApp y CRM. Paralelamente, implementamos campañas de Meta y Google Ads segmentadas a inversores y arrendatarios calificados.',
    metrics: [
      { label: 'Incremento de consultas', value: '+140%' },
      { label: 'Tiempo de carga web', value: '< 1.2s' },
      { label: 'Costo por lead calificado', value: '-35%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
    ],
    testimonial: {
      quote: 'CODISER transformó radicalmente nuestra presencia en el mercado. Hoy nuestro portal es una verdadera herramienta de generación de negocios.',
      author: 'Ing. Carlos Guiaza',
      role: 'Director General'
    }
  },
  {
    id: 'crystal-desarrollo',
    title: 'Crystal Desarrollo',
    tag: 'PLATAFORMA CORPORATIVA',
    category: 'Plataforma Corporativa',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Ecosistema digital corporativo con panel de métricas y estrategia de comunicación institucional multicanal.',
    client: 'Crystal Grupo Desarrollista',
    year: '2023 - 2024',
    challenge: 'Requerían consolidar la identidad de sus diferentes desarrollos urbanísticos bajo una arquitectura de marca unificada y profesionalizar los informes para inversionistas.',
    solution: 'Desarrollamos una plataforma institucional escalable, integrando recorridos virtuales de proyectos, dashboards interactivos de avance de obra y una estrategia de contenidos B2B en LinkedIn y medios especializados.',
    metrics: [
      { label: 'Autoridad de marca', value: 'Líder regional' },
      { label: 'Visualizaciones de proyectos', value: '+250.000' },
      { label: 'Tasa de conversión B2B', value: '4.8%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80'
    ],
    testimonial: {
      quote: 'La rigurosidad técnica y la visión estratégica de CODISER nos permitió comunicar la magnitud de nuestros desarrollos con un estándar de clase mundial.',
      author: 'Arq. Mariana Morales',
      role: 'Gerente de Proyectos'
    }
  },
  {
    id: 'piedra-de-luna-joyas',
    title: 'Piedra de Luna Joyas',
    tag: 'E-COMMERCE & BRANDING',
    category: 'E-Commerce & Branding',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    summary: 'Renovación de identidad visual de lujo, tienda online de alto rendimiento y campañas de pauta con alto retorno.',
    client: 'Piedra de Luna Joyas',
    year: '2024',
    challenge: 'La marca poseía productos de excelencia artesanal pero su presencia digital no transmitía la exclusividad de las piezas ni permitía ventas online fluidas.',
    solution: 'Rediseñamos la identidad de marca completa (packaging, tipografía, paleta cromática), creamos una tienda virtual con experiencia de compra premium y ejecutamos campañas de Meta Ads enfocadas en ticket promedio elevado.',
    metrics: [
      { label: 'Aumento en ventas online', value: '+210%' },
      { label: 'Retorno sobre inversión (ROAS)', value: '5.2x' },
      { label: 'Ticket promedio', value: '+45%' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80'
    ],
    testimonial: {
      quote: 'Lograron capturar la esencia de nuestras joyas en cada detalle visual. Nuestras ventas online crecieron mes a mes de forma sostenida.',
      author: 'Florencia Benítez',
      role: 'Fundadora & Diseñadora'
    }
  }
];
