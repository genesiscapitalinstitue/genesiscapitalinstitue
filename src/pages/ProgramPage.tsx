import { ArrowRight } from 'lucide-react';
import { CurriculumExplorer } from '../components/CurriculumExplorer';
import { PageId } from '../data/instituteData';

interface ProgramPageProps {
  onNavigate: (page: PageId) => void;
}

export function ProgramPage({ onNavigate }: ProgramPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 space-y-12">
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-medium text-emerald-400">
          Programme complet · 7 Modules structurés
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-[1.12]">
          Architecture pédagogique de Genesis Capital Institute
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Retrouvez ci-dessous l’intégralité des chapitres enseignés dans nos trois formats
          (Online 250 €, Présentiel 500 €, VIP 750 €) : de la lecture brute du prix jusqu’aux
          exigences réglementaires et psychologiques des Prop Firms.
        </p>
      </header>

      <CurriculumExplorer />

      <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <h2 className="text-xl font-semibold text-slate-50">
            Prêt à intégrer ce programme de 7 modules ?
          </h2>
          <p className="text-sm text-slate-400">
            Comparez l’accompagnement Online (250 €), Présentiel (500 €) et VIP (750 €) ou contactez
            l’institut directement.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('formats')}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Voir Formats & Tarifs</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-slate-700 bg-[#090D16] text-slate-200 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Poser une question</span>
          </button>
        </div>
      </div>
    </div>
  );
}
