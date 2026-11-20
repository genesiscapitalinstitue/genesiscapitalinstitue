import { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react';
import {
  OFFICIAL_CONTACTS,
  PageId,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../data/instituteData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
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
    <footer className="border-t border-slate-800 bg-[#070A11] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-100 font-[family-name:var(--font-display)]">
              {OFFICIAL_CONTACTS.instituteName}
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Formation professionnelle structurée autour du Pure Price Action, de la mécanique CFD & Futures,
              des Killzones, des Smart Money Concepts, de la gestion du risque et des exigences des Prop Firms.
            </p>
            <p className="text-xs text-slate-500">
              Online 250 € · Présentiel 500 € · VIP 750 €
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-200">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sales')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Page de Vente
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('program')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Programme (7 Modules)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('formats')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Formats & Tarifs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Contact & Réseaux
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('legal')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Risk Disclaimer & CGV
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-200">Contact Direct</p>
            <div className="space-y-2.5 text-sm">
              {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
                <a
                  key={wa.digits}
                  href={buildWhatsAppUrl(
                    wa.digits,
                    'Bonjour Genesis Capital Institute, je souhaite obtenir des renseignements sur vos formations.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span className="font-mono tabular-nums">{wa.raw}</span>
                </a>
              ))}

              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href={buildMailtoUrl(
                    'Demande d’information — Genesis Capital Institute',
                    'Bonjour Genesis Capital Institute,\n\nJe souhaite obtenir des renseignements sur le programme en 7 modules.'
                  )}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{OFFICIAL_CONTACTS.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copier l'adresse email officielle"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-800 bg-[#0F172A] text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-200">Réseaux Officiels</p>
            <ul className="space-y-2.5 text-sm">
              {OFFICIAL_CONTACTS.socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <span>{social.name}</span>
                    <span className="text-slate-500">·</span>
                    <span className="font-mono text-xs text-slate-400">{social.handle}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <p className="text-xs leading-relaxed text-slate-500">
            Avertissement sur les risques : Le trading sur devises (Forex), indices, cryptomonnaies, CFD et
            contrats Futures comporte un niveau de risque élevé et peut entraîner la perte totale ou partielle
            du capital investi. Les formations dispensées par {OFFICIAL_CONTACTS.instituteName} ont une portée
            strictement éducative et méthodologique ; elles ne constituent ni un conseil en investissement, ni une
            promesse de performance ou d’obtention de financement Prop Firm.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {OFFICIAL_CONTACTS.instituteName}. Tous droits réservés.</p>
            <button
              type="button"
              onClick={() => onNavigate('legal')}
              className="text-left sm:text-right text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Consulter le Risk Disclaimer complet et les CGV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
