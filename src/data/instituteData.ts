export type PageId =
  | 'home'
  | 'sales'
  | 'program'
  | 'formats'
  | 'contact'
  | 'legal';

export type FormatId = 'online' | 'presentiel' | 'vip';

export interface ModuleItem {
  title: string;
  subpoints?: string[];
}

export interface CurriculumModule {
  id: number;
  code: string;
  phase: 'fondations' | 'structure' | 'execution';
  phaseLabel: string;
  title: string;
  summary: string;
  items: ModuleItem[];
}

export interface TrainingFormat {
  id: FormatId;
  name: string;
  priceEur: number;
  priceDisplay: string;
  subtitle: string;
  audience: string;
  accent: 'slate' | 'emerald' | 'amber';
  highlightText: string;
  features: string[];
  whatsappMessage: string;
}

export interface ComparisonRow {
  criterion: string;
  online: string;
  presentiel: string;
  vip: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const INSTITUTE_ASSETS = {
  heroTradingDesk: '/src/assets/images/hero_trading_desk_1795131498848.jpg',
  sessionRoom: '/src/assets/images/institutional_session_room_1795131499043.jpg',
  executionJournal: '/src/assets/images/risk_execution_journal_1795131499240.jpg',
} as const;

export const OFFICIAL_CONTACTS = {
  instituteName: 'Genesis Capital Institute',
  email: 'genesiscapitalinstitute@gmail.com',
  whatsappNumbers: [
    {
      label: 'WhatsApp International',
      display: '+974 3090 8236',
      raw: '+97430908236',
      digits: '97430908236',
    },
    {
      label: 'WhatsApp Afrique du Nord / Europe',
      display: '+213 797 38 70 26',
      raw: '+213797387026',
      digits: '213797387026',
    },
  ],
  socials: [
    {
      id: 'youtube',
      name: 'YouTube',
      handle: 'genesiscapitalinstitue',
      url: 'https://youtube.com/@genesiscapitalinstitue?si=WFG6PAUl2DATIsNW',
      description: 'Analyses structurelles, décryptages SMC et retours sur la psychologie d’exécution.',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'genesiscapitalinstitute',
      url: 'https://www.facebook.com/share/1DGffMbcCR/',
      description: 'Actualités de l’institut, annonces de sessions présentielles et ressources éducatives.',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: 'genesiscapitalinstitue',
      url: 'https://www.instagram.com/genesiscapitalinstitue?gwpx=NDB5OHAxZmk4Y3Ex',
      description: 'Rappels de discipline, checklists Killzones et règles clés des Prop Firms.',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: 'genesiscapitalinstitue',
      url: 'https://www.tiktok.com/@genesiscapitalinstitue?_r=1&_t=ZS-9BY2qJ4F8Mu',
      description: 'Formats courts sur les pièges de liquidité, le Risk Management et le mental du trader.',
    },
  ],
} as const;

export function buildWhatsAppUrl(digits: string, message: string): string {
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${OFFICIAL_CONTACTS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 1,
    code: '01',
    phase: 'fondations',
    phaseLabel: 'Fondations & Mécanique',
    title: 'Les Fondations & Pure Price Action Classique',
    summary:
      'Construire un socle net sur les classes d’actifs, le rôle réel des acteurs institutionnels et la lecture brute du prix sans indicateurs superflus.',
    items: [
      {
        title: '1. Définition simple : Acheter, vendre et la différence entre investir et trader.',
      },
      {
        title: '2. Les marchés : Où s’échange l’argent (Actions, Forex, Crypto, Indices) expliqués simplement.',
      },
      {
        title: '3. Les acteurs du marché : Les "gros poissons" (banques/institutions) vs les "petits poissons" (traders retail).',
      },
      {
        title: '4. Analyse technique classique & Lecture graphique :',
        subpoints: [
          'Comment lire un graphique et anatomie d’un chandelier japonais (corps, mèches, prix d’ouverture, de clôture, plus haut, plus bas).',
          'Les mouvements du marché : Tendance haussière (sommets et creux plus hauts), tendance baissière (sommets et creux plus bas) et Range (marché neutre/horizontal).',
          'Supports et Résistances : Comprendre et tracer les "planchers" et les "plafonds" du prix.',
        ],
      },
    ],
  },
  {
    id: 2,
    code: '02',
    phase: 'fondations',
    phaseLabel: 'Fondations & Mécanique',
    title: 'La Mécanique du Marché (Le vocabulaire technique indispensable)',
    summary:
      'Maîtriser les unités de cotation, la structure de coûts réels, la mécanique des marges et les différences critiques entre comptes CFD et comptes Futures.',
    items: [
      {
        title: '1. Pip, Point et Tick : Comment on mesure le déplacement du prix (avec exemples concrets).',
      },
      {
        title: '2. Le Spread : La commission du courtier expliquée simplement.',
      },
      {
        title: '3. La Marge et l’Effet de levier : La caution nécessaire et le prêt du courtier (avantages et pièges).',
      },
      {
        title: '4. Le Swap : Ce qui se passe quand on garde une position ouverte la nuit.',
      },
      {
        title: '5. Spot vs Futures : Acheter "sur place" au prix comptant vs s’engager sur un contrat futur.',
      },
      {
        title: '6. Compte CFD vs Compte Futures :',
        subpoints: [
          'Définition et fonctionnement de chaque type de compte.',
          'Différences clés (exécution, commissions, carnet d’ordres/Level 2, régulation et transparence des volumes).',
        ],
      },
    ],
  },
  {
    id: 3,
    code: '03',
    phase: 'structure',
    phaseLabel: 'Temps & Cartographie SMC',
    title: 'Le Temps et l’Horloge du Trader (Sessions & Killzones)',
    summary:
      'Synchroniser chaque décision sur la liquidité temporelle des grandes places financières plutôt que de subir le bruit hors session.',
    items: [
      {
        title: '1. Pourquoi le temps est plus important que le prix (les moments où les grands acteurs échangent).',
      },
      {
        title: '2. Les grandes sessions : Asie, Londres, New York.',
      },
      {
        title: '3. Les Killzones : Définition des plages horaires clés où les mouvements explosifs se produisent.',
      },
    ],
  },
  {
    id: 4,
    code: '04',
    phase: 'structure',
    phaseLabel: 'Temps & Cartographie SMC',
    title: 'La Cartographie Avancée et les SMC (Smart Money Concepts)',
    summary:
      'Lire l’intention institutionnelle, distinguer les véritables déséquilibres des pièges tendus aux particuliers et modéliser le cycle complet du prix.',
    items: [
      {
        title: '1. La vraie structure du marché :',
        subpoints: [
          'BOS (Break of Structure) : La confirmation de la poursuite de la tendance.',
          'CHoCH (Change of Character) : Le premier signal d’un retournement de tendance.',
        ],
      },
      {
        title: '2. L’Order Block : La vraie empreinte d’achat/vente des banques.',
      },
      {
        title: '3. Les types de liquidité (les pièges tendus aux petits portefeuilles).',
      },
      {
        title: '4. FVG (Fair Value Gap) & IFVG (Inversion Fair Value Gap) : Les déséquilibres du marché.',
      },
      {
        title: '5. Breaker Block : Transformer une défaite en opportunité.',
      },
      {
        title: '6. Buy to Sell & Sell to Buy : Manipuler pour mieux exécuter.',
      },
      {
        title: '7. CISD (Change in Story Delivery) : La première étincelle d’un changement d’intention.',
      },
      {
        title: '8. IPA & EPA (Inefficient Price Action & Efficient Price Action) : L’équilibre du marché.',
      },
      {
        title: '9. Schéma AMD (Accumulation, Manipulation, Distribution) : Le scénario parfait des institutions.',
      },
      {
        title: '10. SMC Trap : Comment repérer et éviter les fausses configurations institutionnelles.',
      },
    ],
  },
  {
    id: 5,
    code: '05',
    phase: 'execution',
    phaseLabel: 'Risque, Psychologie & Financement',
    title: 'Le Bouclier (Gestion du risque et du capital)',
    summary:
      'Protéger le capital contre les biais émotionnels par des paramètres mathématiques stricts et une asymétrie de rendement mesurée.',
    items: [
      {
        title: '1. Stop Loss et Take Profit : La ceinture de sécurité automatique.',
      },
      {
        title: '2. La règle des 1 % : Comment ne jamais cramer son compte sur une émotion.',
      },
      {
        title: '3. Le ratio Risque/Rendement (Risk-Reward) : Pourquoi avoir raison 40 % du temps suffit pour être rentable.',
      },
    ],
  },
  {
    id: 6,
    code: '06',
    phase: 'execution',
    phaseLabel: 'Risque, Psychologie & Financement',
    title: 'Plan d’Exécution, Journaling et Psychologie',
    summary:
      'Transformer la théorie en protocole exécutable sous pression, neutraliser la peur et la gourmandise et piloter sa progression par la donnée.',
    items: [
      {
        title: '1. Checklist de prise de position étape par étape (alignement des Killzones + SMC).',
      },
      {
        title: '2. Gérer la Peur et la Gourmandise (FOMO).',
      },
      {
        title: '3. Le Journal de Trading & le suivi des métriques essentielles (Winrate, Profit Factor, Drawdown).',
      },
      {
        title: '4. Feuille de route : Du compte démo au compte réel professionnel.',
      },
    ],
  },
  {
    id: 7,
    code: '07',
    phase: 'execution',
    phaseLabel: 'Risque, Psychologie & Financement',
    title: 'Le Guide Ultime des Prop Firms (Financement & Challenges)',
    summary:
      'Maîtriser l’architecture réglementaire et technique des sociétés de financement pour passer les évaluations et sécuriser des payouts durables.',
    items: [
      {
        title: '1. Comprendre l’univers Prop Firm : Qu’est-ce qu’une société de financement et comment ça marche.',
      },
      {
        title: '2. Règles strictes et Pièges à éviter :',
        subpoints: [
          'Gestion du Drawdown (Max Drawdown vs Daily Drawdown / Trailing Drawdown vs EOD Drawdown).',
          'Interdiction de trading lors des Annonces Économiques à haut impact (NFP, CPI, FOMC, taux d’intérêt).',
          'Jours noirs & Dates d’interdiction (Black Day Trading, vacances bancaires, Thanks Giving, fin d’année/fêtes, jours de faible liquidité à hauts risques).',
          'Règle de consistance (Consistency Rule) et taille maximale des lots.',
        ],
      },
      {
        title: '3. Plan d’attaque pour réussir un Challenge :',
        subpoints: [
          'Stratégie de gestion du risque calibrée spécifiquement pour la phase d’évaluation.',
          'Comment sécuriser un compte financé une fois l’évaluation réussie (premiers retraits / payouts).',
        ],
      },
    ],
  },
];

export const TRAINING_FORMATS: TrainingFormat[] = [
  {
    id: 'online',
    name: 'Formation Online',
    priceEur: 250,
    priceDisplay: '250 €',
    subtitle: 'Accès structuré à distance aux 7 modules complets',
    audience: 'Traders autonomes souhaitant acquérir une méthode complète à leur rythme.',
    accent: 'slate',
    highlightText: 'Socle intégral à distance',
    features: [
      'Intégralité des 7 Modules (Price Action, Mécanique CFD/Futures, Killzones, SMC, Risque, Psychologie, Prop Firms)',
      'Checklist d’exécution étape par étape (Killzones + SMC)',
      'Modèle structuré de Journal de Trading (Winrate, Profit Factor, Drawdown)',
      'Guide complet des règles Prop Firms (Trailing vs EOD, News NFP/CPI/FOMC, Black Days)',
      'Support pédagogique à distance et cadre d’entraînement du compte démo au réel',
    ],
    whatsappMessage:
      'Bonjour Genesis Capital Institute, je souhaite m’inscrire à la Formation Online (250 €). Merci de m’indiquer les modalités d’accès.',
  },
  {
    id: 'presentiel',
    name: 'Formation Présentiel',
    priceEur: 500,
    priceDisplay: '500 €',
    subtitle: 'Immersion en salle avec mise en pratique guidée',
    audience: 'Apprenants recherchant la correction directe sur graphiques et l’ancrage en groupe restreint.',
    accent: 'emerald',
    highlightText: 'Format recommandé · Immersion directe',
    features: [
      'Tout le contenu intégral de la Formation Online (7 Modules complets)',
      'Sessions de formation en présentiel avec lecture graphique en temps réel',
      'Ateliers pratiques : traçage de structure (BOS/CHoCH), Order Blocks, FVG/IFVG et repérage des SMC Traps',
      'Exercices calibrés de calcul de lot, règle des 1 % et simulation de gestion du Drawdown',
      'Correction immédiate des erreurs d’exécution, d’impulsivité et de lecture des Killzones',
    ],
    whatsappMessage:
      'Bonjour Genesis Capital Institute, je souhaite réserver ma place pour la Formation Présentiel (500 €). Quelles sont les prochaines dates ?',
  },
  {
    id: 'vip',
    name: 'Formation VIP',
    priceEur: 750,
    priceDisplay: '750 €',
    subtitle: 'Accompagnement individuel sur mesure & suivi Prop Firm',
    audience: 'Traders visant une transition rigoureuse vers le compte financé et la constance opérationnelle.',
    accent: 'amber',
    highlightText: 'Mentoring individuel · Niveau VIP',
    features: [
      'Accès intégral aux 7 Modules + sessions individuelles privées 1-on-1',
      'Audit personnalisé de votre Journal de Trading et de vos métriques (Profit Factor, Winrate, Drawdown)',
      'Construction et validation de votre plan d’attaque Prop Firm sur mesure (évaluation & payouts)',
      'Travail ciblé sur la psychologie d’exécution (FOMO, revanche, respect strict de la règle des 1 %)',
      'Suivi prioritaire direct avec l’équipe Genesis Capital Institute',
    ],
    whatsappMessage:
      'Bonjour Genesis Capital Institute, je souhaite intégrer le programme Formation VIP (750 €) avec accompagnement individuel. Pouvons-nous échanger sur mon profil ?',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: 'Programme intégral en 7 Modules (Modules 1 à 7)',
    online: 'Inclus (complet)',
    presentiel: 'Inclus (complet)',
    vip: 'Inclus (complet)',
  },
  {
    criterion: 'Mécanique CFD vs Futures & Carnet d’ordres (Level 2)',
    online: 'Cours structuré',
    presentiel: 'Cours + étude dirigée',
    vip: 'Adapté à votre courtier / marché',
  },
  {
    criterion: 'Cartographie SMC, Killzones & Détection des SMC Traps',
    online: 'Études de cas vidéo',
    presentiel: 'Ateliers en salle sur graphiques',
    vip: 'Revue personnalisée de vos graphiques',
  },
  {
    criterion: 'Checklist d’exécution & Journal de Trading',
    online: 'Modèles fournis',
    presentiel: 'Paramétrage encadré en session',
    vip: 'Audit complet de vos trades & métriques',
  },
  {
    criterion: 'Stratégie Prop Firms (Drawdown, NFP/CPI/FOMC, Black Days)',
    online: 'Module 7 complet',
    presentiel: 'Simulation & cas pratiques',
    vip: 'Plan d’attaque Challenge & Payout sur mesure',
  },
  {
    criterion: 'Interaction avec les formateurs',
    online: 'Support pédagogique',
    presentiel: 'Correction en direct en présentiel',
    vip: 'Mentoring individuel prioritaire 1-on-1',
  },
];

export const SALES_PAIN_HOOKS = [
  {
    category: 'Psychologie & Exécution',
    quote:
      '« Tu sais souvent où le marché va… mais tu cliques trop tôt, tu coupes trop tard ou tu casses tes règles dès que l’émotion monte. »',
    detail:
      'Sans protocole d’exécution séquentiel, l’analyse devient secondaire face à l’impulsivité et au biais de revanche.',
  },
  {
    category: 'Temps & Killzones',
    quote:
      '« Trader à n’importe quelle heure sur un marché mort ou piégé, c’est donner un avantage gratuit aux acteurs qui dictent la liquidité. »',
    detail:
      'Le prix ne prend tout son sens qu’à l’intérieur des plages horaires où les volumes institutionnels s’engagent réellement.',
  },
  {
    category: 'SMC & Pièges',
    quote:
      '« Un Order Block ou un FVG sans contexte temporel ni lecture des pièges (SMC Traps) n’est pas un setup : c’est une pièce lancée en l’air. »',
    detail:
      'Comprendre Buy to Sell, Sell to Buy, CISD et schémas AMD évite de devenir la contrepartie de liquidité des institutions.',
  },
  {
    category: 'Prop Firms & Drawdown',
    quote:
      '« Combien de challenges as-tu perdus non pas parce que ta lecture était fausse, mais à cause du Trailing/EOD Drawdown, d’une annonce NFP/CPI/FOMC, d’un jour noir ou d’une mauvaise gestion de la consistance ? »',
    detail:
      'Réussir une évaluation et sécuriser un payout exige une ingénierie du risque dédiée aux règles des sociétés de financement.',
  },
];

export const DIAGNOSTIC_PILLARS = [
  {
    number: '01',
    title: 'Confondre information et exécution',
    description:
      'Accumuler des vidéos sans disposer d’une checklist claire alignant Killzones, cartographie SMC, règle des 1 % et calcul objectif du ratio Risque/Rendement mène à une prise de décision erratique.',
  },
  {
    number: '02',
    title: 'Ignorer la mécanique réelle des instruments',
    description:
      'Traiter Spot, CFD et Futures de la même façon expose à des erreurs coûteuses : méconnaissance du spread, du swap nocturne, de la marge, de l’effet de levier, des commissions, du carnet d’ordres (Level 2) et de la transparence des volumes.',
  },
  {
    number: '03',
    title: 'Subir la pression émotionnelle en direct',
    description:
      'Sans cadre écrit ni journal de suivi (Winrate, Profit Factor, Drawdown), le trader cède au FOMO avant le départ du mouvement, hésite à couper sa perte au Stop Loss ou sur-risque pour se refaire après un trade perdant.',
  },
  {
    number: '04',
    title: 'Aborder les Prop Firms sans stratégie de survie',
    description:
      'Échouer malgré une bonne direction arrive dès qu’on ignore la distinction Max vs Daily Drawdown, Trailing vs EOD Drawdown, les fenêtres d’annonces NFP/CPI/FOMC, les jours noirs (Black Days, fêtes, faible liquidité), la Consistency Rule ou la taille maximale des lots.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Quel niveau est requis pour intégrer Genesis Capital Institute ?',
    answer:
      'La progression en 7 modules est conçue pour bâtir des bases solides dès le Module 1 (définition des marchés, anatomie du chandelier, tendances, supports et résistances) tout en conduisant les traders déjà actifs jusqu’à la lecture institutionnelle avancée (SMC, CISD, schémas AMD, SMC Traps) et la gestion professionnelle des Prop Firms.',
  },
  {
    question: 'Comment sont abordés la gestion du risque et le journaling ?',
    answer:
      'Les Modules 5 et 6 y sont entièrement consacrés. Vous maîtrisez le placement logique du Stop Loss et du Take Profit, la règle stricte des 1 % par position, les mathématiques du Risk-Reward (pourquoi 40 % de réussite suffit à être rentable) et la tenue rigoureuse d’un Journal de Trading suivant Winrate, Profit Factor et Drawdown.',
  },
  {
    question: 'Le programme couvre-t-il réellement les règles spécifiques des Prop Firms ?',
    answer:
      'Oui. Le Module 7 détaille le fonctionnement complet des sociétés de financement : calcul du Max Drawdown vs Daily Drawdown, Trailing Drawdown vs EOD Drawdown, gestion des annonces macroéconomiques à haut impact (NFP, CPI, FOMC, taux d’intérêt), identification des jours noirs et périodes de faible liquidité (Black Days, vacances bancaires, Thanksgiving, fêtes de fin d’année), Consistency Rule, taille maximale des lots, plan d’attaque d’évaluation et sécurisation des premiers payouts.',
  },
  {
    question: 'Quelles sont les différences concrètes entre les formats Online (250 €), Présentiel (500 €) et VIP (750 €) ?',
    answer:
      'Les trois formules donnent accès à l’intégralité des 7 modules. Le format Online (250 €) vous permet de suivre le cursus complet à distance à votre rythme avec nos supports et modèles. Le format Présentiel (500 €) ajoute des sessions en salle avec pratique dirigée, lecture graphique en temps réel et correction directe. Le format VIP (750 €) inclut un accompagnement individuel 1-on-1, l’audit complet de votre journal de trading et la construction sur mesure de votre plan d’attaque Prop Firm.',
  },
  {
    question: 'Comment procéder à l’inscription ou poser une question avant de choisir ?',
    answer:
      'Vous pouvez sélectionner directement votre formule depuis la page Formats & Tarifs ou utiliser le formulaire de la page Contact & Réseaux. Votre demande est générée avec vos informations pour un envoi immédiat via WhatsApp (+97430908236 ou +213797387026) ou par email à genesiscapitalinstitute@gmail.com.',
  },
];
