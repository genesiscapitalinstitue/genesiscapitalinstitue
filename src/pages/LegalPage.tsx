import { AlertTriangle, Shield } from 'lucide-react';
import { OFFICIAL_CONTACTS, PageId } from '../data/instituteData';

interface LegalPageProps {
  onNavigate: (page: PageId) => void;
}

export function LegalPage({ onNavigate }: LegalPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-medium text-amber-400">
          Conformité & Cadre contractuel · Genesis Capital Institute
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50 leading-tight">
          Risk Disclaimer & Conditions Générales de Vente (CGV)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Veuillez lire attentivement l’avertissement complet sur les risques financiers ainsi que
          les conditions encadrant l’accès aux formations de {OFFICIAL_CONTACTS.instituteName}.
        </p>
      </header>

      {/* Part 1: Risk Disclaimer */}
      <section className="rounded-xl border border-amber-500/30 bg-[#0F172A] p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 text-amber-400">
          <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <h2 className="text-xl font-semibold">
            1. Risk Disclaimer — Avertissement sur les risques liés au trading
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>Risque de perte en capital :</strong> La négociation de produits financiers à
            effet de levier — incluant notamment le marché des changes (Forex), les contrats sur la
            différence (CFD), les contrats à terme (Futures), les indices boursiers, les actions et
            les crypto-actifs — comporte un degré de risque élevé et peut ne pas convenir à tous les
            investisseurs. L’effet de levier amplifie aussi bien les pertes que les gains potentiels
            et peut entraîner la perte rapide de la totalité du capital engagé. Vous ne devez jamais
            engager sur les marchés financiers des fonds dont la perte affecterait votre situation
            personnelle, familiale ou financière.
          </p>

          <p>
            <strong>Caractère strictement éducatif :</strong> L’ensemble des contenus dispensés au
            sein des 7 modules de {OFFICIAL_CONTACTS.instituteName} (cours théoriques, analyses de
            structure, Killzones, Smart Money Concepts, modèles de journal de trading, règles de
            gestion du risque et études de cas) a une vocation exclusivement pédagogique et
            méthodologique. {OFFICIAL_CONTACTS.instituteName} n’est pas un conseiller en
            investissements financiers, ni un gestionnaire de portefeuille, ni un courtier régulé.
            Aucune information délivrée pendant les sessions Online, Présentielles ou VIP ne saurait
            être interprétée comme une recommandation d’achat ou de vente, un signal de trading
            automatisé ou une sollicitation d’investissement.
          </p>

          <p>
            <strong>Absence de promesse de performance :</strong> Aucune méthode, aucun ratio
            Risque/Rendement ni aucune lecture institutionnelle ne garantit de profits futurs. Les
            résultats dépendent exclusivement de l’application rigoureuse par l’apprenant de son
            plan d’exécution, de son contrôle émotionnel, des conditions réelles de liquidité, des
            spreads, des commissions et de la volatilité des marchés.
          </p>

          <p>
            <strong>Avertissement spécifique aux Prop Firms :</strong> Les sociétés de financement
            (Prop Firms) sont des entités tierces indépendantes appliquant leurs propres règlements
            contractuels (Max Drawdown, Daily Drawdown, Trailing ou EOD Drawdown, restrictions liées
            aux annonces économiques NFP/CPI/FOMC, jours de faible liquidité ou Black Days,
            Consistency Rule, taille maximale des lots). {OFFICIAL_CONTACTS.instituteName} forme
            l’apprenant à comprendre et respecter ces paramètres techniques mais ne garantit en
            aucun cas la réussite d’une évaluation, l’obtention d’un compte financé ou le versement
            de payouts par un prestataire tiers.
          </p>
        </div>
      </section>

      {/* Part 2: CGV */}
      <section className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 text-emerald-400">
          <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
          <h2 className="text-xl font-semibold text-slate-50">
            2. Conditions Générales de Vente (CGV)
          </h2>
        </div>

        <div className="space-y-5 text-sm text-slate-300 leading-relaxed">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 1 — Objet et formules proposées</h3>
            <p>
              Les présentes Conditions Générales de Vente régissent l’inscription et l’accès aux
              programmes de formation professionnelle dispensés par {OFFICIAL_CONTACTS.instituteName}
              selon trois formats distincts :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400 pt-1">
              <li>
                <strong className="text-slate-200">Formation Online (250 €) :</strong> accès à
                distance à l’intégralité du programme en 7 modules et aux supports pédagogiques.
              </li>
              <li>
                <strong className="text-slate-200">Formation Présentiel (500 €) :</strong> accès au
                cursus complet en 7 modules accompagné de sessions de formation encadrées en salle.
              </li>
              <li>
                <strong className="text-slate-200">Formation VIP (750 €) :</strong> accès complet
                aux 7 modules associé à un mentoring individuel sur mesure, l’audit du journal de
                trading et l’élaboration du plan d’attaque Prop Firm.
              </li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 2 — Modalités d’inscription et tarifs</h3>
            <p>
              Les tarifs affichés sont exprimés en euros (250 €, 500 € et 750 €). L’inscription est
              confirmée après échange direct via les canaux officiels de l’institut (WhatsApp
              +97430908236 / +213797387026 ou email {OFFICIAL_CONTACTS.email}) et règlement effectif
              de la formule sélectionnée selon les instructions transmises lors de la validation.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 3 — Accès aux contenus et propriété intellectuelle</h3>
            <p>
              Tous les supports écrits, schémas, méthodologies SMC, checklists d’exécution, modèles
              de journal de trading et enregistrements pédagogiques demeurent la propriété
              intellectuelle exclusive de {OFFICIAL_CONTACTS.instituteName}. L’accès délivré est
              strictement personnel et non transférable : toute reproduction, revente, diffusion
              publique ou partage d’accès à des tiers est formellement interdit.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 4 — Conditions d’annulation et assiduité</h3>
            <p>
              Pour la Formation Online, l’ouverture des accès aux ressources numériques rend
              l’inscription définitive. Pour les formats Présentiel et VIP, toute demande de report
              de session doit être notifiée à l’avance via les coordonnées officielles afin de
              reprogrammer le créneau selon le calendrier de l’institut.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 5 — Responsabilité de l’apprenant</h3>
            <p>
              Chaque participant demeure seul responsable de ses décisions sur compte de
              démonstration, compte réel ou compte d’évaluation Prop Firm, ainsi que de la conformité
              fiscale et réglementaire de son activité dans sa juridiction de résidence.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-100">Article 6 — Réclamations et contact officiel</h3>
            <p>
              Pour toute question relative aux présentes CGV ou au Risk Disclaimer, contactez
              l’administration de {OFFICIAL_CONTACTS.instituteName} à l’adresse{' '}
              <span className="font-mono text-emerald-400">{OFFICIAL_CONTACTS.email}</span> ou via
              WhatsApp aux numéros +97430908236 et +213797387026.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('formats')}
          className="px-5 py-2.5 text-sm font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-200 hover:border-slate-700 transition-colors cursor-pointer"
        >
          ← Retour aux Formats & Tarifs
        </button>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
        >
          Contacter l’institut
        </button>
      </div>
    </div>
  );
}
