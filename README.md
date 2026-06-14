# PW-festivalen (Peter Wessel Festivalen)

Nettsted for PW-festivalen 2026 – juniorkorpsfestival for skolekorps i Tjodalyng, Larvik.
Arrangeres av Tjodalyng Skolekorps, 12.–14. juni 2026.

## Innhold
- `index.html` – forside (med AI-SEO: Event-, FAQPage- og Organization-schema)
- `informasjon.html` – informasjon, priser, festivalkorps
- `pamelding.html` – påmeldingsskjema
- `nyhetsbrev.html` – påmelding + verktøy for å sende ut nyhetsbrev
- `llms.txt` – strukturert oppsummering for AI-modeller
- `vercel.json` – rene URL-er (cleanUrls)

## Deploy (Vercel)
Statisk nettsted. Koble dette repoet til Vercel (Add New → Project), eller kjør:

    npm i -g vercel
    vercel --prod

Domene `pw-festivalen.no` kobles under Settings → Domains i Vercel-prosjektet.
