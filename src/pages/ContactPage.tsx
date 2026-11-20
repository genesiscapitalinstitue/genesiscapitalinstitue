import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import {
  FormatId,
  OFFICIAL_CONTACTS,
  TRAINING_FORMATS,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../data/instituteData';

interface ContactPageProps {
  selectedFormat: FormatId;
  onChangeFormat: (format: FormatId) => void;
}

export function ContactPage({ selectedFormat, onChangeFormat }: ContactPageProps) {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [formatId, setFormatId] = useState<FormatId>(selectedFormat);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  useEffect(() => {
    setFormatId(selectedFormat);
  }, [selectedFormat]);

  const chosenFormat = useMemo(
    () => TRAINING_FORMATS.find((f) => f.id === formatId) ?? TRAINING_FORMATS[0],
    [formatId]
  );

  const formattedMessage = useMemo(() => {
    const cleanName = fullName.trim() || '[Nom complet]';
    const cleanContact = contactInfo.trim() || '[Email ou Téléphone]';
    const cleanBody =
      message.trim() ||
      `Je souhaite obtenir les modalités d’inscription pour le format ${chosenFormat.name} (${chosenFormat.priceDisplay}).`;

    return [
      `Bonjour Genesis Capital Institute,`,
      ``,
      `Nom : ${cleanName}`,
      `Contact : ${cleanContact}`,
      `Formule souhaitée : ${chosenFormat.name} (${chosenFormat.priceDisplay})`,
      ``,
      `Message :`,
      cleanBody,
    ].join('\n');
  }, [fullName, contactInfo, chosenFormat, message]);

  const mailSubject = `Inscription / Demande — ${chosenFormat.name} (${chosenFormat.priceDisplay})`;

  const handleFormatChange = (newId: FormatId) => {
    setFormatId(newId);
    onChangeFormat(newId);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      setError('Veuillez saisir votre nom complet.');
      setSubmitted(false);
      return;
    }
    if (contactInfo.trim().length < 5) {
      setError('Veuillez indiquer une adresse email ou un numéro de téléphone valide.');
      setSubmitted(false);
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_CONTACTS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleCopyFormattedMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2500);
    } catch {
      setCopiedPayload(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 space-y-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-medium text-emerald-400">
          Contact & Réseaux Officiels · Genesis Capital Institute
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 leading-[1.12]">
          Préparez votre inscription ou échangez directement avec l’institut
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Complétez le formulaire ci-dessous pour générer votre message structuré et l’envoyer en
          un clic sur nos lignes WhatsApp officielles ou par email.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Form + Generated Dispatch */}
        <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#0F172A] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-slate-50">
              Formulaire d’inscription & demande d’information
            </h2>
            <p className="text-sm text-slate-400">
              Sélectionnez votre formule (Online 250 €, Présentiel 500 €, VIP 750 €) et transmettez
              votre demande directement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block space-y-2">
                <span className="text-xs font-medium text-slate-300">Nom complet *</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex. Karim Benali"
                  className="w-full rounded-lg border border-slate-800 bg-[#090D16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-medium text-slate-300">Email ou Téléphone *</span>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="nom@domaine.com ou +33 6..."
                  className="w-full rounded-lg border border-slate-800 bg-[#090D16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  required
                />
              </label>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-slate-300">Format choisi</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {TRAINING_FORMATS.map((fmt) => {
                  const active = formatId === fmt.id;
                  const activeRing =
                    fmt.id === 'vip'
                      ? 'border-amber-500/70 bg-amber-500/10 text-amber-200'
                      : 'border-emerald-500/70 bg-emerald-500/10 text-emerald-200';
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => handleFormatChange(fmt.id)}
                      className={`rounded-lg border px-3.5 py-3 text-left transition-colors cursor-pointer ${
                        active
                          ? activeRing
                          : 'border-slate-800 bg-[#090D16] text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-semibold">{fmt.name}</p>
                      <p className="mt-0.5 text-sm font-mono tabular-nums font-bold">
                        {fmt.priceDisplay}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="block space-y-2">
              <span className="text-xs font-medium text-slate-300">
                Votre message ou objectif (Prop Firm, marché suivi, disponibilités)
              </span>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Précisez votre expérience actuelle, le marché que vous tradez (Forex, Indices, Futures, Crypto) ou vos questions sur le format choisi..."
                className="w-full rounded-lg border border-slate-800 bg-[#090D16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </label>

            {error && (
              <p role="alert" className="text-xs text-rose-400 font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Valider & Préparer l’envoi direct</span>
            </button>
          </form>

          {submitted && (
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-emerald-300">
                  Message formaté prêt pour envoi immédiat
                </p>
                <p className="text-slate-300">
                  Cliquez ci-dessous sur la ligne WhatsApp de votre choix ou sur l’envoi par email
                  pour transmettre directement votre demande pré-remplie.
                </p>
              </div>
            </div>
          )}

          {/* Live Formatted Message Preview & Direct Send Actions */}
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium text-slate-400">
                Aperçu du message formaté prêt à l’envoi
              </p>
              <button
                type="button"
                onClick={handleCopyFormattedMessage}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-800 bg-[#090D16] text-slate-300 hover:text-white cursor-pointer"
              >
                {copiedPayload ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Message copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copier le texte</span>
                  </>
                )}
              </button>
            </div>

            <pre className="rounded-lg border border-slate-800 bg-[#090D16] p-4 text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
              {formattedMessage}
            </pre>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
                <a
                  key={wa.digits}
                  href={buildWhatsAppUrl(wa.digits, formattedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono tabular-nums">{wa.raw}</span>
                </a>
              ))}

              <a
                href={buildMailtoUrl(mailSubject, formattedMessage)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold rounded-lg border border-slate-700 bg-[#090D16] text-slate-100 hover:border-emerald-500/60 transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Envoyer par Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Coordinates & Social Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 space-y-5">
            <h2 className="text-lg font-semibold text-slate-50">Coordonnées directes</h2>

            <div className="space-y-3">
              {OFFICIAL_CONTACTS.whatsappNumbers.map((wa) => (
                <a
                  key={wa.digits}
                  href={buildWhatsAppUrl(wa.digits, chosenFormat.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-slate-800 bg-[#090D16] p-4 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{wa.label}</span>
                    <MessageSquare className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-base font-semibold font-mono tabular-nums text-slate-100">
                    {wa.raw}
                  </p>
                  <p className="mt-1 text-xs text-emerald-400">
                    Démarrer une conversation WhatsApp →
                  </p>
                </a>
              ))}

              <div className="rounded-lg border border-slate-800 bg-[#090D16] p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">Email officiel</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-800 bg-[#0F172A] text-slate-300 hover:text-white cursor-pointer"
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
                <a
                  href={buildMailtoUrl(mailSubject, formattedMessage)}
                  className="flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-emerald-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{OFFICIAL_CONTACTS.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0F172A] p-6 space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Réseaux sociaux · genesiscapitalinstitute
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Retrouvez nos publications officielles sur nos quatre canaux certifiés.
              </p>
            </div>

            <div className="space-y-3">
              {OFFICIAL_CONTACTS.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-slate-800 bg-[#090D16] p-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-100">{social.name}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span>@{social.handle}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {social.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
