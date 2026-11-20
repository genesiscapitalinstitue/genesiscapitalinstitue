import { ArrowRight } from 'lucide-react';
import { PricingSection } from '../components/PricingSection';
import { ResilientImage } from '../components/ResilientImage';
import { FormatId, INSTITUTE_ASSETS, PageId } from '../data/instituteData';

interface FormatsPageProps {
  onSelectFormat: (format: FormatId) => void;
  onNavigate: (page: PageId) => void;
}

export function FormatsPage({ onSelectFormat, onNavigate }: FormatsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <p className="text-sm font-medium text-emerald-400">
            Formats & Tarifs · Genesis Capital Institute
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-[1.12]">
            Trois formules transparentes pour maîtriser les 7 modules
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Que vous choisissiez l’autonomie à distance (250 €), la pratique encadrée en salle
            (500 €) ou le mentoring individuel VIP (750 €), chaque parcours vous transmet
            l’intégralité du cursus institutionnel sans frais cachés.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('program')}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              <span>Consulter le détail des 7 modules inclus</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ResilientImage
            src={INSTITUTE_ASSETS.sessionRoom}
            alt="Environnement de formation présentielle et VIP Genesis Capital Institute"
            caption="Sessions Présentielles & Mentoring VIP sur mesure"
            aspectClassName="aspect-video lg:h-full"
          />
        </div>
      </div>

      <PricingSection onSelectFormat={onSelectFormat} showComparisonTable={true} />
    </div>
  );
}
