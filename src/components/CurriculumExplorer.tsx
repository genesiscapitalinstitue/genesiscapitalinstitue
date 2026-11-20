import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CURRICULUM_MODULES, CurriculumModule } from '../data/instituteData';

type PhaseFilter = 'all' | CurriculumModule['phase'];

const PHASE_FILTERS: { id: PhaseFilter; label: string }[] = [
  { id: 'all', label: 'Tous les modules (01–07)' },
  { id: 'fondations', label: 'Fondations & Mécanique' },
  { id: 'structure', label: 'Temps & Cartographie SMC' },
  { id: 'execution', label: 'Risque, Psychologie & Prop Firms' },
];

export function CurriculumExplorer() {
  const [phaseFilter, setPhaseFilter] = useState<PhaseFilter>('all');
  const [expandedIds, setExpandedIds] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  // Interactive Module 5 Risk & R:R Simulator state
  const [accountCapital, setAccountCapital] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [winrate, setWinrate] = useState<number>(40);
  const [rewardRatio, setRewardRatio] = useState<number>(2.5);

  const visibleModules = useMemo(() => {
    if (phaseFilter === 'all') return CURRICULUM_MODULES;
    return CURRICULUM_MODULES.filter((mod) => mod.phase === phaseFilter);
  }, [phaseFilter]);

  const toggleModule = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => setExpandedIds(CURRICULUM_MODULES.map((m) => m.id));
  const collapseAll = () => setExpandedIds([]);

  // Mathematical expectation over 20 trades
  const simulation = useMemo(() => {
    const trades = 20;
    const riskAmount = (accountCapital * riskPercent) / 100;
    const wins = Math.round((trades * winrate) / 100);
    const losses = trades - wins;
    const grossGain = wins * riskAmount * rewardRatio;
    const grossLoss = losses * riskAmount;
    const netResult = grossGain - grossLoss;
    const netPct = (netResult / accountCapital) * 100;
    const expectancyR = (winrate / 100) * rewardRatio - (1 - winrate / 100) * 1;
    const maxTenLossesDrawdownPct = 10 * riskPercent;

    return {
      riskAmount,
      wins,
      losses,
      netResult,
      netPct,
      expectancyR,
      maxTenLossesDrawdownPct,
    };
  }, [accountCapital, riskPercent, winrate, rewardRatio]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0F172A] border border-slate-800 rounded-lg">
          {PHASE_FILTERS.map((filter) => {
            const active = phaseFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setPhaseFilter(filter.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={expandAll}
            className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Tout déplier
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Tout replier
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {visibleModules.map((mod) => {
          const isOpen = expandedIds.includes(mod.id);
          return (
            <article
              key={mod.id}
              className="rounded-xl border border-slate-800 bg-[#0F172A] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleModule(mod.id)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-6 hover:bg-slate-800/30 transition-colors cursor-pointer"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-mono tabular-nums font-semibold text-emerald-400">
                      Module {mod.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{mod.phaseLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{mod.items.length} chapitres</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">{mod.title}</h3>
                  <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">{mod.summary}</p>
                </div>
                <span className="mt-1 p-2 rounded-lg border border-slate-800 bg-[#090D16] text-slate-300 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-[#090D16]/40">
                  <div className="space-y-4 pt-3">
                    {mod.items.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-sm sm:text-[15px] font-medium text-slate-200 leading-relaxed">
                          {item.title}
                        </p>
                        {item.subpoints && item.subpoints.length > 0 && (
                          <ul className="pl-6 space-y-1.5 list-disc marker:text-emerald-500/70">
                            {item.subpoints.map((sub, subIdx) => (
                              <li
                                key={subIdx}
                                className="text-sm text-slate-400 leading-relaxed pl-1"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Interactive Module 5 Mathematical Proof Tool */}
      <section className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-medium text-emerald-400">
              Démonstration interactive · Module 05 : Le Bouclier
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-50">
              Simulateur Règle des 1 % & Ratio Risque/Rendement
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Vérifiez mathématiquement pourquoi avoir raison seulement 40 % du temps suffit pour
              générer une espérance positive durable sur 20 prises de position, tout en maintenant
              votre drawdown sous les seuils critiques des Prop Firms.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block space-y-2">
                <span className="flex items-center justify-between text-xs text-slate-300">
                  <span>Capital de référence</span>
                  <span className="font-mono tabular-nums text-slate-100">
                    {accountCapital.toLocaleString('fr-FR')} €
                  </span>
                </span>
                <select
                  value={accountCapital}
                  onChange={(e) => setAccountCapital(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-800 bg-[#090D16] px-3 py-2.5 text-sm text-slate-100 font-mono tabular-nums focus:outline-none focus:border-emerald-500"
                >
                  <option value={10000}>10 000 €</option>
                  <option value={25000}>25 000 €</option>
                  <option value={50000}>50 000 €</option>
                  <option value={100000}>100 000 € (Challenge type)</option>
                  <option value={200000}>200 000 €</option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="flex items-center justify-between text-xs text-slate-300">
                  <span>Risque par trade (Règle des 1 %)</span>
                  <span className="font-mono tabular-nums text-emerald-400">
                    {riskPercent.toFixed(2)} %
                  </span>
                </span>
                <input
                  type="range"
                  min={0.25}
                  max={2}
                  step={0.25}
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </label>

              <label className="block space-y-2">
                <span className="flex items-center justify-between text-xs text-slate-300">
                  <span>Taux de réussite (Winrate)</span>
                  <span className="font-mono tabular-nums text-slate-100">{winrate} %</span>
                </span>
                <input
                  type="range"
                  min={25}
                  max={65}
                  step={5}
                  value={winrate}
                  onChange={(e) => setWinrate(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </label>

              <label className="block space-y-2">
                <span className="flex items-center justify-between text-xs text-slate-300">
                  <span>Ratio Risque / Rendement (1 : R)</span>
                  <span className="font-mono tabular-nums text-slate-100">
                    1 : {rewardRatio.toFixed(1)}
                  </span>
                </span>
                <input
                  type="range"
                  min={1}
                  max={4}
                  step={0.5}
                  value={rewardRatio}
                  onChange={(e) => setRewardRatio(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800">
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-3.5">
                <p className="text-xs text-slate-400">Risque / Position</p>
                <p className="mt-1 text-base font-semibold font-mono tabular-nums text-slate-100">
                  {simulation.riskAmount.toLocaleString('fr-FR')} €
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-3.5">
                <p className="text-xs text-slate-400">Espérance / Trade</p>
                <p
                  className={`mt-1 text-base font-semibold font-mono tabular-nums ${
                    simulation.expectancyR >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {simulation.expectancyR >= 0 ? '+' : ''}
                  {simulation.expectancyR.toFixed(2)} R
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-3.5">
                <p className="text-xs text-slate-400">Résultat (20 trades)</p>
                <p
                  className={`mt-1 text-base font-semibold font-mono tabular-nums ${
                    simulation.netResult >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {simulation.netResult >= 0 ? '+' : ''}
                  {simulation.netPct.toFixed(1)} %
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-3.5">
                <p className="text-xs text-slate-400">10 pertes d’affilée</p>
                <p
                  className={`mt-1 text-base font-semibold font-mono tabular-nums ${
                    simulation.maxTenLossesDrawdownPct <= 10
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }`}
                >
                  -{simulation.maxTenLossesDrawdownPct.toFixed(1)} %
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
