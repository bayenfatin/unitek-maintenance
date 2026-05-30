"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const DEMANDE_TYPES = [
  { value: "",            label: "Sélectionnez le type de demande" },
  { value: "urgence",     label: "Arrêt machine — urgence immédiate" },
  { value: "hydraulique", label: "Diagnostic hydraulique / groupe de fermeture" },
  { value: "thermique",   label: "Dérive thermique / zones de chauffe" },
  { value: "preventive",  label: "Maintenance préventive & AMDEC" },
  { value: "retrofit",    label: "Rétrofit CN ou IHM" },
  { value: "supervision", label: "Supervision & Data 4.0" },
  { value: "autre",       label: "Autre demande" },
];

interface Fields {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  type: string;
  message: string;
}

const EMPTY: Fields = {
  nom: "",
  entreprise: "",
  email: "",
  telephone: "",
  type: "",
  message: "",
};

// ─── Input / Select / Textarea base styles ───────────────────────────────────

const inputBase =
  "w-full px-4 py-3 text-sm outline-none transition-colors duration-150 focus:ring-1";

const inputStyle: React.CSSProperties = {
  backgroundColor: "oklch(18% 0.065 240)",
  border: "1px solid oklch(30% 0.082 240)",
  color: "oklch(90% 0.008 240)",
};

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold uppercase tracking-[0.12em] mb-2"
      style={{ color: "oklch(65% 0.012 240)" }}
    >
      {children}
      {required && (
        <span className="ml-1" style={{ color: "oklch(60% 0.20 25)" }}>
          *
        </span>
      )}
    </label>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Fields>>({});

  function set(key: keyof Fields) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
    };
  }

  function validate(): boolean {
    const next: Partial<Fields> = {};
    if (!fields.nom.trim())     next.nom     = "Requis";
    if (!fields.email.trim())   next.email   = "Requis";
    if (!fields.type)           next.type    = "Requis";
    if (!fields.message.trim()) next.message = "Requis";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const typeLabel =
      DEMANDE_TYPES.find((t) => t.value === fields.type)?.label ?? fields.type;

    const subject = encodeURIComponent(
      `[Unitek] ${typeLabel}${fields.entreprise ? ` — ${fields.entreprise}` : ""}`
    );

    const body = encodeURIComponent(
      [
        `Nom : ${fields.nom}`,
        `Entreprise : ${fields.entreprise || "—"}`,
        `Email : ${fields.email}`,
        `Téléphone : ${fields.telephone || "—"}`,
        `Type de demande : ${typeLabel}`,
        "",
        "Message :",
        fields.message,
      ].join("\n")
    );

    window.location.href = `mailto:contact@unitek-automation.fr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  // ── État de confirmation ──────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-6 py-8">
        <div
          className="flex items-center justify-center w-12 h-12"
          style={{ backgroundColor: "oklch(22% 0.08 240)", border: "1px solid oklch(55% 0.13 240)" }}
        >
          <CheckCircle2 size={22} style={{ color: "oklch(55% 0.13 240)" }} />
        </div>
        <div>
          <h3
            className="text-xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-space, system-ui, sans-serif)",
              color: "oklch(97% 0.005 240)",
              letterSpacing: "-0.02em",
            }}
          >
            Votre client email s&apos;est ouvert
          </h3>
          <p className="text-sm mb-2" style={{ color: "oklch(62% 0.013 240)", lineHeight: "1.75" }}>
            Le message est pré-rempli — vérifiez-le et envoyez-le depuis votre
            messagerie. Si rien ne s&apos;est ouvert, contactez-nous directement à{" "}
            <a
              href="mailto:contact@unitek-automation.fr"
              className="underline"
              style={{ color: "oklch(55% 0.13 240)" }}
            >
              contact@unitek-automation.fr
            </a>
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setFields(EMPTY); }}
          className="text-sm font-semibold transition-colors duration-150"
          style={{ color: "oklch(55% 0.13 240)" }}
        >
          ← Nouvelle demande
        </button>
      </div>
    );
  }

  // ── Formulaire ────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* Nom + Entreprise */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="nom" required>Nom complet</Label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            value={fields.nom}
            onChange={set("nom")}
            placeholder="Jean Dupont"
            className={inputBase}
            style={{
              ...inputStyle,
              ...(errors.nom ? { borderColor: "oklch(60% 0.20 25)" } : {}),
            }}
          />
          {errors.nom && (
            <p className="mt-1 text-xs" style={{ color: "oklch(60% 0.20 25)" }}>
              {errors.nom}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="entreprise">Entreprise</Label>
          <input
            id="entreprise"
            type="text"
            autoComplete="organization"
            value={fields.entreprise}
            onChange={set("entreprise")}
            placeholder="Industriel SAS"
            className={inputBase}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email + Téléphone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email" required>Email professionnel</Label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="jean.dupont@entreprise.fr"
            className={inputBase}
            style={{
              ...inputStyle,
              ...(errors.email ? { borderColor: "oklch(60% 0.20 25)" } : {}),
            }}
          />
          {errors.email && (
            <p className="mt-1 text-xs" style={{ color: "oklch(60% 0.20 25)" }}>
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="telephone">Téléphone</Label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            value={fields.telephone}
            onChange={set("telephone")}
            placeholder="04 XX XX XX XX"
            className={inputBase}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Type de demande */}
      <div>
        <Label htmlFor="type" required>Type de demande / panne</Label>
        <div className="relative">
          <select
            id="type"
            value={fields.type}
            onChange={set("type")}
            className={`${inputBase} appearance-none pr-10`}
            style={{
              ...inputStyle,
              ...(errors.type ? { borderColor: "oklch(60% 0.20 25)" } : {}),
            }}
          >
            {DEMANDE_TYPES.map(({ value, label }) => (
              <option
                key={value}
                value={value}
                style={{ backgroundColor: "oklch(18% 0.065 240)", color: "oklch(90% 0.008 240)" }}
              >
                {label}
              </option>
            ))}
          </select>
          {/* Chevron */}
          <div
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "oklch(48% 0.012 240)" }}
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </div>
        </div>
        {errors.type && (
          <p className="mt-1 text-xs" style={{ color: "oklch(60% 0.20 25)" }}>
            {errors.type}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" required>Description de la situation</Label>
        <textarea
          id="message"
          rows={6}
          value={fields.message}
          onChange={set("message")}
          placeholder="Décrivez la panne, la machine concernée, les symptômes observés et vos contraintes de production..."
          className={`${inputBase} resize-none`}
          style={{
            ...inputStyle,
            lineHeight: "1.75",
            ...(errors.message ? { borderColor: "oklch(60% 0.20 25)" } : {}),
          }}
        />
        {errors.message && (
          <p className="mt-1 text-xs" style={{ color: "oklch(60% 0.20 25)" }}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Urgence indicator */}
      {fields.type === "urgence" && (
        <div
          className="flex items-start gap-3 p-4 text-sm"
          style={{
            backgroundColor: "oklch(16% 0.07 25)",
            border: "1px solid oklch(52% 0.21 25)",
            color: "oklch(78% 0.015 25)",
          }}
        >
          <span style={{ color: "oklch(60% 0.20 25)" }}>⚠</span>
          <span>
            Pour une urgence immédiate, appelez directement le{" "}
            <a
              href="tel:+33XXXXXXXXX"
              className="font-bold underline"
              style={{ color: "oklch(60% 0.20 25)" }}
            >
              04 XX XX XX XX
            </a>{" "}
            — astreinte 24h/7j.
          </span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-3 font-bold text-sm px-8 py-4 w-full sm:w-auto transition-colors duration-150 disabled:opacity-60"
        style={{
          backgroundColor: sending ? "oklch(48% 0.19 25)" : "oklch(52% 0.21 25)",
          color: "white",
        }}
      >
        {sending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Ouverture de votre messagerie…
          </>
        ) : (
          <>
            Envoyer la demande
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-xs" style={{ color: "oklch(42% 0.010 240)" }}>
        * Champs obligatoires — Réponse sous 48h ouvrées (urgences : immédiat par téléphone)
      </p>
    </form>
  );
}
