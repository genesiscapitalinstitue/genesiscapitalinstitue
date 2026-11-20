import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import {
  CURRICULUM_MODULES,
  FormatId,
  INSTITUTE_ASSETS,
  OFFICIAL_CONTACTS,
  PageId,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../data/instituteData';
import { ResilientImage } from '../components/ResilientImage';
import { PricingSection } from '../components/PricingSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectFormat: (format: FormatId) => void;
}

export function HomePage({ onNavigate, onSelectFormat }: HomePageProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_CONTACTS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-emerald-400">
                Genesis Capital Institute · Formation au Trading Institutionnel
              </p>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-[1.12]">
                Rigueur d’analyse, discipline d’exécution et maîtrise psychologique sur les marchés.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Un cursus structuré en 7 modules couvrant le Pure Price Action, la mécanique CFD et
                Futures, les Killzones, les Smart Money Concepts, la règle des 1 %, le journaling et
                la validation durable des Prop Firms.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('sales')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Découvrir la Page de Vente</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('program')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-200 hover:text-white hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Voir les 7 Modules</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResilientImage
                src={INSTITUTE_ASSETS.heroTradingDesk}
                alt="Poste de trading institutionnel Genesis Capital Institute avec structure de prix en chandelier"
                caption="Lecture structurelle · Temps, Liquidité & Gestion du Risque"
                aspectClassName="aspect-video lg:h-full"
              />
            </div>
          </div>

          {/* Below-Hero Structural Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-5">
              <p className="text-xs text-slate-400">Architecture pédagogique</p>
              <p className="mt-1.5 text-xl font-semibold font-mono tabular-nums text-slate-50">
                07 Modules Complets
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Des fondations Price Action jusqu’aux Prop Firms
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-5">
              <p className="text-xs text-slate-400">Formats d’accompagnement</p>
              <p className="mt-1.5 text-xl font-semibold font-mono tabular-nums text-slate-50">
                250 € · 500 € · 750 €
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Online, Présentiel ou Mentoring VIP 1-on-1
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-5">
              <p className="text-xs text-slate-400">Environnements traités</p>
              <p className="mt-1.5 text-xl font-semibold text-slate-50">Spot, CFD & Futures</p>
              <p className="mt-1 text-xs text-slate-400">
                Spread, marge, swap, carnet d’ordres Level 2
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-5">
              <p className="text-xs text-slate-400">Norme d’exécution</p>
              <p className="mt-1.5 text-xl font-semibold font-mono tabular-nums text-emerald-400">
                Règle des 1 %
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Protection du capital & métriques de journal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Module Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-emerald-400">Progression méthodologique</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Un système complet en 7 modules, sans raccourcis
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Chaque module élimine une zone d’ombre technique ou psychologique avant de passer au
              palier suivant.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('program')}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Explorer le programme détaillé</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRICULUM_MODULES.map((mod, idx) => (
            <button
              key={mod.id}
              type="button"
              onClick={() => onNavigate('program')}
              className={`text-left rounded-xl border border-slate-800 bg-[#0F172A] p-6 hover:border-emerald-500/40 transition-colors flex flex-col justify-between cursor-pointer ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono tabular-nums text-emerald-400 font-semibold">
                    Module {mod.code}
                  </span>
                  <span>{mod.phaseLabel}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-50">{mod.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{mod.summary}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono tabular-nums">{mod.items.length} sections détaillées</span>
                <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                  Voir le détail <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Formats & Institutional Session Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8">
          <div className="lg:col-span-6">
            <ResilientImage
              src={INSTITUTE_ASSETS.sessionRoom}
              alt="Salle de formation présentielle et de mentoring Genesis Capital Institute"
              aspectClassName="aspect-video lg:h-full"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
            <p className="text-xs font-medium text-amber-400">
              Trois formats · Même exigence académique
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Choisissez votre cadre d’apprentissage : Online, Présentiel ou VIP
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Que vous préfériez avancer de façon autonome à distance (250 €), pratiquer en salle
              avec correction directe sur les marchés (500 €) ou bénéficier d’un suivi individuel
              orienté Prop Firms (750 €), l’intégralité des 7 modules reste identique.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('formats')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-slate-700 bg-[#090D16] text-slate-100 hover:border-emerald-500/60 transition-colors cursor-pointer"
              >
                <span>Comparer les 3 formats</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('sales')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                <span>Lire la Page de Vente complète</span>
              </button>
            </div>
          </div>
        </div>

        <PricingSection onSelectFormat={onSelectFormat} showComparisonTable={false} />
      </section>

      {/* Direct Channels & Socials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-medium text-emerald-400">Canaux officiels vérifiés</p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Échanger directement avec Genesis Capital Institute
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Posez vos questions sur les prérequis, les prochaines sessions présentielles ou le
              programme VIP directement par WhatsApp ou email officiel.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
              <span>Aucune promesse de gains faciles · Approche 100 % méthodologique</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
              <a
                key={wa.digits}
                href={buildWhatsAppUrl(
                  wa.digits,
                  'Bonjour Genesis Capital Institute, je souhaite m’informer sur vos formations (Online 250 €, Présentiel 500 €, VIP 750 €).'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-[#090D16] p-4 hover:border-emerald-500/50 transition-colors flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{wa.label}</span>
                  <MessageSquare className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </div>
                <p className="text-base font-semibold font-mono tabular-nums text-slate-100">
                  {wa.raw}
                </p>
                <span className="text-xs text-emerald-400 font-medium">Ouvrir WhatsApp →</span>
              </a>
            ))}

            <div className="rounded-lg border border-slate-800 bg-[#090D16] p-4 flex flex-col justify-between gap-2 sm:col-span-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">Email officiel de l’institut</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-800 bg-[#0F172A] text-slate-200 hover:border-slate-700 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copier l’email</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={buildMailtoUrl(
                  'Renseignements — Genesis Capital Institute',
                  'Bonjour Genesis Capital Institute,\n\nJe souhaite des précisions sur vos formations.'
                )}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-100 hover:text-emerald-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{OFFICIAL_CONTACTS.email}</span>
              </a>
            </div>

            <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {OFFICIAL_CONTACTS.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-800 bg-[#090D16] px-3.5 py-3 hover:border-slate-700 transition-colors flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-200 truncate">{social.name}</p>
                    <p className="text-[11px] font-mono text-slate-400 truncate">{social.handle}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
