import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from 'lucide-react';
import {
  CURRICULUM_MODULES,
  DIAGNOSTIC_PILLARS,
  FAQ_ITEMS,
  FormatId,
  INSTITUTE_ASSETS,
  OFFICIAL_CONTACTS,
  PageId,
  SALES_PAIN_HOOKS,
  buildWhatsAppUrl,
} from '../data/instituteData';
import { ResilientImage } from '../components/ResilientImage';
import { PricingSection } from '../components/PricingSection';

interface SalesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectFormat: (format: FormatId) => void;
}

export function SalesPage({ onNavigate, onSelectFormat }: SalesPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToOffers = () => {
    const el = document.getElementById('offres-tarifs-sales');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero & Main Opening Hook */}
      <section className="pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-emerald-400">
                Genesis Capital Institute · Programme Officiel en 7 Modules
              </p>

              <p className="text-base sm:text-lg text-amber-300/95 font-medium leading-relaxed border border-amber-500/25 bg-amber-500/5 rounded-xl p-5">
                « Ce n’est pas le marché qui te fait perdre de l’argent. C’est ce que tu fais quand
                le prix bouge vite, que ton compte passe dans le rouge et que ton cerveau réclame une
                revanche. »
              </p>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-[1.12]">
                Maîtrise la lecture de marché, l’exécution chirurgicale et la psychologie du trader
                professionnel.
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Une formation complète couvrant le Pure Price Action, la mécanique des marchés CFD &
                Futures, les Sessions et Killzones, la cartographie SMC avancée, la gestion du
                risque (règle des 1 %), la psychologie & le journaling, et les stratégies de réussite
                en Prop Firms — disponible en format Online (250 €), Présentiel (500 €) et VIP
                (750 €).
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToOffers}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Choisir mon format (250 € · 500 € · 750 €)</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
                  <a
                    key={wa.digits}
                    href={buildWhatsAppUrl(
                      wa.digits,
                      'Bonjour Genesis Capital Institute, je souhaite m’inscrire suite à la lecture de la page de présentation.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-200 hover:border-emerald-500/50 hover:text-white transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="font-mono tabular-nums">{wa.raw}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResilientImage
                src={INSTITUTE_ASSETS.heroTradingDesk}
                alt="Poste d’exécution institutionnel Genesis Capital Institute"
                caption="Pure Price Action · Killzones · SMC · Gestion du Risque"
                aspectClassName="aspect-video lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Targeted Pain-Point Hooks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-medium text-emerald-400">Réalité opérationnelle du desk</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Ce qui sépare l’analyse théorique de la constance en capital réel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SALES_PAIN_HOOKS.map((hook) => (
            <div
              key={hook.category}
              className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-7 space-y-3"
            >
              <p className="text-xs font-semibold text-emerald-400">{hook.category}</p>
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                {hook.quote}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed pt-1">{hook.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Le Diagnostic : Pourquoi la majorité échouent */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-amber-400">Le Diagnostic</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                Les 4 failles structurelles qui détruisent la majorité des comptes
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Les pertes répétées ne proviennent pas d’un manque d’indicateurs, mais de quatre
                ruptures précises dans votre chaîne de décision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIAGNOSTIC_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-slate-800 bg-[#0F172A] p-5 space-y-2.5"
                >
                  <p className="text-xs font-mono tabular-nums font-semibold text-emerald-400">
                    {pillar.number}.
                  </p>
                  <h3 className="text-base font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResilientImage
              src={INSTITUTE_ASSETS.executionJournal}
              alt="Journal de trading structuré avec calcul Risk-Reward et suivi de position"
              caption="Journal de Trading · Winrate, Profit Factor & Drawdown sous contrôle"
              aspectClassName="aspect-[4/3] lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* 4. Le Mécanisme Unique : La progression des 7 Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-emerald-400">Le Mécanisme Unique</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              La progression des 7 Modules : de l’anatomie du prix au payout Prop Firm
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Un système intégré qui relie la lecture de marché, l’horloge des sessions, la gestion
              du risque, la maîtrise psychologique et les règles des sociétés de financement.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('program')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Voir le syllabus intégral (7 Modules)</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-[#0F172A]">
          {CURRICULUM_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
            >
              <div className="lg:col-span-4 space-y-1">
                <p className="text-xs font-mono tabular-nums text-emerald-400 font-semibold">
                  Module {mod.code} · {mod.phaseLabel}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-slate-50">{mod.title}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-sm text-slate-300 leading-relaxed">{mod.summary}</p>
              </div>
              <div className="lg:col-span-2 lg:text-right">
                <button
                  type="button"
                  onClick={() => onNavigate('program')}
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  {mod.items.length} points détaillés →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Recadrage de Valeur & Transformation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-medium text-amber-400">Recadrage de valeur</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 leading-snug">
              « Combien te coûte déjà un seul trade impulsif, un mauvais calcul de lot ou un
              challenge Prop Firm perdu par manque de cadre ? »
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              À l’échelle d’un compte réel ou de frais d’évaluation répétés sans méthode, l’absence de
              protocole coûte bien plus cher qu’une formation structurée. L’objectif de Genesis
              Capital Institute est de remplacer l’improvisation par des processus mesurables.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {[
              'Filtrer vos prises de position grâce aux Killzones (Asie, Londres, New York) plutôt que de sur-trader les ranges morts.',
              'Identifier les vraies empreintes institutionnelles (Order Blocks, FVG/IFVG, Breaker Blocks, CISD, AMD) et éviter les SMC Traps.',
              'Appliquer strictement la règle des 1 % et comprendre mathématiquement la rentabilité à 40 % de winrate.',
              'Maîtriser les règles critiques des Prop Firms : Trailing vs EOD Drawdown, annonces NFP/CPI/FOMC, Black Days et Consistency Rule.',
              'Piloter votre évolution du compte démo au compte réel ou financé à travers un Journal de Trading objectif.',
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-slate-800 bg-[#090D16] p-4"
              >
                <CheckCircle2
                  className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Offres & Tarifs */}
      <section
        id="offres-tarifs-sales"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24"
      >
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-medium text-emerald-400">Offres & Tarifs Officiels</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Intégrez Genesis Capital Institute selon votre format
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Trois formules transparentes pour accéder à l’intégralité des 7 modules et structurer
            votre pratique.
          </p>
        </div>

        <PricingSection onSelectFormat={onSelectFormat} showComparisonTable={true} />
      </section>

      {/* 7. FAQ Détaillée */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-medium text-emerald-400">Questions fréquentes</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Précisions sur le programme, les Prop Firms et les formats
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-800 bg-[#0F172A] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-100">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Risk Disclaimer Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-500/30 bg-[#0F172A] p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400">
            <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <h3 className="text-base font-semibold">
              Risk Disclaimer — Avertissement légal sur les risques financiers
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Le trading sur les marchés financiers (Forex, Indices, Actions, Cryptomonnaies, CFD et
            contrats Futures) avec effet de levier comporte un risque élevé de perte en capital et
            ne convient pas à tous les profils. Les performances passées ne préjugent jamais des
            résultats futurs. Genesis Capital Institute délivre exclusivement une formation
            pédagogique et méthodologique : aucune garantie de profit, aucun signal d’achat ou de
            vente et aucun conseil financier personnalisé ne sont fournis.
          </p>
          <div>
            <button
              type="button"
              onClick={() => onNavigate('legal')}
              className="text-xs font-medium text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              Lire l’intégralité du Risk Disclaimer et des CGV →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
