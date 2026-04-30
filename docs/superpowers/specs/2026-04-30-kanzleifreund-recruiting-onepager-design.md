# Kanzleifreund Recruiting OnePager — Design Spec
**Date:** 2026-04-30

## Ziel
OnePager-Website für Kanzleifreund Recruiting-Lösung. Zielgruppe: Inhaber/Partner von Steuerkanzleien. Primäres Ziel: Erstgespräch (Anruf) buchen. Sekundär: Kontaktformular-Lead erfassen.

## Tech Stack
- **Frontend:** Next.js 15 App Router, TypeScript, Tailwind CSS
- **Hosting:** Vercel (Preview URL zunächst, eigene Domain später)
- **Backend:** Railway — Node.js/Express API für Kontaktformular-Leads
- **Repo:** GitHub `reinkobercom/kanzleifreund-recruiting` (neu, ersetzt `steuerkanzlei-recruiting-neu`)

## Design-System
| Token | Wert |
|-------|------|
| Navy | `#1a2744` |
| Gold | `#c9943a` |
| Off-white | `#f5f0e8` |
| White | `#ffffff` |
| Gray text | `#6b7280` |
| Headline Font | Playfair Display (serif) |
| Body Font | Inter (sans-serif) |
| Label Font | Inter, spaced uppercase, small |

Kein Header-Menü. Kein Footer-Menü. Nur Markenzeile unten.

## Sections (1:1 aus PDF)

### 1. Hero (Seite 1)
- **Bg:** Navy
- Overline: "FÜR INHABER UND PARTNER VON STEUERKANZLEIEN" — gold, spaced uppercase
- H1: "Die Fachkraft, die Sie suchen, *sucht nicht* — noch nicht." (`sucht nicht` kursiv gold)
- Subtext: "Spezialisierte Personalgewinnung für Steuerkanzleien. Karriereportal, Employer Branding und gezielte Recruiting-Kampagnen — aus einer Hand, statt aus drei Agenturen."
- 3 Stats (horizontal): 98% Besetzungsquote · 170+ Betreute Kanzleien · Ø 28 Tage bis zur Besetzung
- CTA: "Jetzt anrufen" Button (gold, tel: placeholder)
- Deko: großer Kreis-Outline rechts (wie PDF)

### 2. Problem (Seite 2)
- **Bg:** Off-white
- Overline: "KAPITEL 01"
- H2: "Sie kennen das wahrscheinlich."
- Lead: "In den meisten Steuerkanzleien Deutschlands läuft gerade dasselbe Bild ab. Drei Beobachtungen..."
- 3 Cards nebeneinander (desktop) / gestapelt (mobil):
  - BEOBACHTUNG 01: Mandate, die Sie ablehnen müssen.
  - BEOBACHTUNG 02: Stellenanzeigen, die nicht greifen.
  - BEOBACHTUNG 03: Ein Team, das die Lücke trägt.
- Stat-Block (Navy bg): "60%" groß gold + Erklärtext

### 3. Warum klassisches Recruiting versagt (Seite 3)
- **Bg:** White
- Overline: "KAPITEL 02"
- H2: "Es liegt nicht an Ihnen. Es liegt am Kanal."
- Lead-Text mit kursiv-Hervorhebung
- Tabelle: Kanal / Was passiert / Was es kostet (4 Zeilen: Stellenportale, Headhunter, Karriereseite, Social Media)
- Quote-Block (gold): "70 % der qualifizierten Steuerfachkräfte sind *wechselbereit, aber nicht aktiv auf Suche.*..."

### 4. Drei Säulen (Seite 4)
- **Bg:** Off-white
- Overline: "KAPITEL 03"
- H2: "Drei Säulen. Ein System."
- Lead-Text
- 3 Cards mit linker gold Border:
  - Säule i. — Ein eigenes Karriereportal
  - Säule ii. — Authentisches Employer Branding
  - Säule iii. — Gezielte Recruiting-Kampagnen
- Hinweis-Text unten

### 5. Karriereportal Detail (Seite 5)
- **Bg:** White
- Overline: "SÄULE 01 · KARRIEREPORTAL"
- H2: "Ihre eigene Karriereseite. Nicht ein Profil auf einem Portal."
- 2-spaltig (desktop): Text links, Feature-Liste rechts (mit "–" Dashes)
- 3 Info-Blöcke unten: Setup / Laufender Betrieb / Skalierbar

### 6. Employer Branding Detail (Seite 6)
- **Bg:** Off-white
- Overline: "SÄULE 02 · EMPLOYER BRANDING"
- H2: "Wer Sie sind, sieht man — wenn man es zeigt."
- Lead
- 3 Cards: 01 Mitarbeiter-Interviews · 02 Imagefilm · 03 Fotoreportage
- Preis-Block (Navy): "KOMPLETTES BRANDING-PAKET · EINMALIG — 5.000 € einmalig zzgl. MwSt."

### 7. Recruiting-Kampagnen Detail (Seite 7)
- **Bg:** White
- Overline: "SÄULE 03 · RECRUITING-KAMPAGNEN"
- H2: "Da, wo die Fachkräfte sind. Nicht da, wo sie suchen."
- Lead
- 2-spaltig (desktop): 3-Step-Ablauf links · Ergebnis-Stats rechts (8–15 Bewerbungen, 98%)

### 8. Preise (Seite 8)
- **Bg:** Off-white
- Overline: "KAPITEL 04"
- H2: "Was kostet das?"
- Lead
- Karriereportal: Setup 1.000€ einmalig + 3 Pricing Cards (Klein/Mittel/Groß, Mittel highlighted Navy)
- Recruiting-Kampagne: 3 Cards (Bis 2 Stellen / Bis 4 Stellen / Ab 5 Stellen)
- Werbebudget-Hinweis + Flexibilität-Hinweis
- Employer Branding einmalig 5.000€ + Vergleich Headhunter

### 9. Ablauf (Seite 9)
- **Bg:** White
- Overline: "KAPITEL 05"
- H2: "Vom ersten Gespräch zur ersten Einstellung."
- Lead: "Sechs Schritte. Drei bis fünf Wochen..."
- 6-Step-Liste mit kursiven Nummern (01–06) und Trennlinien

### 10. Warum wir (Seite 10)
- **Bg:** Off-white
- Overline: "KAPITEL 06"
- H2: "Was uns von einer Standard-Agentur unterscheidet."
- 4 Cards (2x2 Grid): 01 Spezialisierung · 02 Aus einer Hand · 03 Klare Preise · 04 Persönliche Betreuung
- Quote unten (gold kursiv)

### 11. CTA Final (Seite 11)
- **Bg:** Navy
- Overline: "BEREIT, DAS PROBLEM ZU LÖSEN?"
- H2: "Lassen Sie uns ein 30-minütiges Gespräch *führen*."
- Subtext
- 3 Stats (wie Hero)
- CTA: "Jetzt anrufen" Button (gold)
- Kontaktformular: Name, Kanzlei, Telefon, E-Mail → POST /api/contact → Railway

## Railway API
- Node.js + Express
- `POST /api/contact` — validiert Felder, speichert Lead (JSON-File oder später DB), antwortet 200/400
- CORS: nur Vercel-Domain
- Env var: `CONTACT_EMAIL` für spätere E-Mail-Versandlogik

## Responsive
- Mobile-first Tailwind
- Cards: `grid-cols-1` mobile → `grid-cols-3` desktop
- Tabelle: horizontal scrollbar auf mobil
- Schriften skalieren mit `clamp()`

## Deployment
1. GitHub Repo `reinkobercom/kanzleifreund-recruiting` erstellen
2. Next.js Projekt pushen → Vercel auto-deploy
3. Railway Service für API erstellen, Env Vars setzen
4. `NEXT_PUBLIC_API_URL` in Vercel auf Railway-URL setzen
