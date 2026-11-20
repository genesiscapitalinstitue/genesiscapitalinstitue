import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { OFFICIAL_CONTACTS, PageId, buildWhatsAppUrl } from '../data/instituteData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'program', label: 'Programme (7 Modules)' },
  { id: 'formats', label: 'Formats & Tarifs' },
  { id: 'contact', label: 'Contact & Réseaux' },
  { id: 'legal', label: 'Disclaimer & CGV' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="text-base sm:text-lg font-semibold tracking-tight text-slate-50 whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-1 py-1 cursor-pointer"
        >
          {OFFICIAL_CONTACTS.instituteName}
        </button>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSelect(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm ${
                  isActive ? 'text-slate-50' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-emerald-500"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('sales')}
            aria-current={currentPage === 'sales' ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              currentPage === 'sales'
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-emerald-600 text-white hover:bg-emerald-500'
            }`}
          >
            <span>Page de Vente</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-800 bg-[#0F172A] text-slate-200 hover:text-white hover:border-slate-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-slate-800 bg-[#090D16] px-4 py-5 space-y-2"
        >
          <button
            type="button"
            onClick={() => handleSelect('sales')}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
          >
            <span>Page de Vente — Découvrir la Méthode</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="pt-2 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSelect(link.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-emerald-400 border border-slate-800'
                      : 'text-slate-300 hover:bg-[#0F172A] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
              <a
                key={wa.digits}
                href={buildWhatsAppUrl(
                  wa.digits,
                  'Bonjour Genesis Capital Institute, je souhaite des informations sur vos formations.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2.5 text-xs font-medium rounded-lg border border-slate-800 bg-[#0F172A] text-slate-200 hover:border-emerald-500/50 transition-colors"
              >
                <span>WhatsApp</span>
                <span className="font-mono tabular-nums text-emerald-400">{wa.raw}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
