import { ArrowRight, Check, MessageSquare } from 'lucide-react';
import {
  COMPARISON_ROWS,
  FormatId,
  OFFICIAL_CONTACTS,
  TRAINING_FORMATS,
  buildWhatsAppUrl,
} from '../data/instituteData';

interface PricingSectionProps {
  onSelectFormat: (format: FormatId) => void;
  showComparisonTable?: boolean;
}

export function PricingSection({
  onSelectFormat,
  showComparisonTable = true,
}: PricingSectionProps) {
  return (
    <div className="space-y-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {TRAINING_FORMATS.map((format) => {
          const isPresentiel = format.accent === 'emerald';
          const isVip = format.accent === 'amber';

          const cardBorder = isVip
            ? 'border-amber-500/40 bg-[#0F172A]'
            : isPresentiel
              ? 'border-emerald-500/50 bg-[#0F172A]'
              : 'border-slate-800 bg-[#0F172A]';

          const ctaClass = isVip
            ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
            : isPresentiel
              ? 'bg-emerald-600 text-white hover:bg-emerald-500'
              : 'bg-slate-800 text-slate-100 hover:bg-slate-700';

          const checkColor = isVip
            ? 'text-amber-400'
            : isPresentiel
              ? 'text-emerald-400'
              : 'text-emerald-500';

          return (
            <div
              key={format.id}
              className={`rounded-xl border ${cardBorder} p-7 flex flex-col justify-between transition-colors`}
            >
              <div>
                <p
                  className={`text-xs font-medium tracking-wide ${
                    isVip
                      ? 'text-amber-400'
                      : isPresentiel
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                  }`}
                >
                  {format.highlightText}
                </p>

                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-50">{format.name}</h3>
                  <span
                    className={`text-3xl font-bold font-mono tabular-nums whitespace-nowrap ${
                      isVip ? 'text-amber-400' : 'text-slate-50'
                    }`}
                  >
                    {format.priceDisplay}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{format.subtitle}</p>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{format.audience}</p>

                <div className="my-6 h-px bg-slate-800" />

                <ul className="space-y-3">
                  {format.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <Check className={`w-4 h-4 mt-1 shrink-0 ${checkColor}`} aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
                <button
                  type="button"
                  onClick={() => onSelectFormat(format.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${ctaClass}`}
                >
                  <span>Choisir {format.name} ({format.priceDisplay})</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  {OFFICIAL_CONTACTS.whatsappNumbers.map((wa, index) => (
                    <a
                      key={wa.digits}
                      href={buildWhatsAppUrl(wa.digits, format.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-slate-800 bg-[#090D16] text-slate-300 hover:text-white hover:border-slate-700 transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                      <span className="font-mono tabular-nums">
                        {index === 0 ? '+974 3090...' : '+213 797...'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showComparisonTable && (
        <div className="rounded-xl border border-slate-800 bg-[#0F172A] overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800">
            <h3 className="text-lg font-semibold text-slate-100">
              Comparatif détaillé des 3 formats
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Les 7 modules sont intégralement inclus dans chaque formule ; le niveau d’encadrement et de
              personnalisation évolue selon le format sélectionné.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-800 bg-[#090D16]/60 text-xs font-semibold text-slate-300">
                  <th className="py-4 px-6 w-[37%]">Pilier pédagogique</th>
                  <th className="py-4 px-4 w-[21%] font-mono tabular-nums">Online · 250 €</th>
                  <th className="py-4 px-4 w-[21%] font-mono tabular-nums text-emerald-400">
                    Présentiel · 500 €
                  </th>
                  <th className="py-4 px-4 w-[21%] font-mono tabular-nums text-amber-400">
                    VIP · 750 €
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">{row.criterion}</td>
                    <td className="py-4 px-4 text-slate-400">{row.online}</td>
                    <td className="py-4 px-4 text-slate-200">{row.presentiel}</td>
                    <td className="py-4 px-4 text-amber-200/90 font-medium">{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
