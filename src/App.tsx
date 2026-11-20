import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FormatId, PageId } from './data/instituteData';
import { ContactPage } from './pages/ContactPage';
import { FormatsPage } from './pages/FormatsPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { ProgramPage } from './pages/ProgramPage';
import { SalesPage } from './pages/SalesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedFormat, setSelectedFormat] = useState<FormatId>('presentiel');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFormat = (format: FormatId) => {
    setSelectedFormat(format);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Genesis Capital Institute — Formation Trading Institutionnel',
      sales: 'Page de Vente — Genesis Capital Institute',
      program: 'Programme (7 Modules) — Genesis Capital Institute',
      formats: 'Formats & Tarifs (250 € / 500 € / 750 €) — Genesis Capital Institute',
      contact: 'Contact & Réseaux — Genesis Capital Institute',
      legal: 'Risk Disclaimer & CGV — Genesis Capital Institute',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-slate-100">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 pt-16">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onSelectFormat={handleSelectFormat} />
        )}
        {currentPage === 'sales' && (
          <SalesPage onNavigate={handleNavigate} onSelectFormat={handleSelectFormat} />
        )}
        {currentPage === 'program' && <ProgramPage onNavigate={handleNavigate} />}
        {currentPage === 'formats' && (
          <FormatsPage onSelectFormat={handleSelectFormat} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage selectedFormat={selectedFormat} onChangeFormat={setSelectedFormat} />
        )}
        {currentPage === 'legal' && <LegalPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
