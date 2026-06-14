# PW-festivalen – nettsted med redigeringspanel (CMS)

Nettsted for PW-festivalen (Peter Wessel Festivalen), med et eget admin-panel der
PW-styret kan logge inn og endre datoer, priser og tekster – uten å røre kode.

## Slik er det bygd

- `templates/` – sidene (HTML) med «felt-koder» som `{{dateDisplay}}`
- `data/site.json` – alle redigerbare verdier (datoer, priser, tekster)
- `build.js` – setter verdiene inn i sidene og lager ferdige sider i `public/`
- `.pages.yml` – oppsett for redigeringspanelet (Pages CMS)
- `vercel.json` – sier til Vercel hvordan siden bygges

Når noen endrer en verdi i panelet, lagres det i `data/site.json`, Vercel bygger
siden på nytt, og endringen er live på et par minutter. Datoene bakes inn i HTML
og i Google/AI-dataene (schema), så søkemotor-synligheten beholdes.

## Engangsoppsett (gjøres én gang)

### 1. Legg disse filene i GitHub-repoet
Erstatt innholdet i repoet med disse filene/mappene (`templates/`, `data/`,
`build.js`, `.pages.yml`, `vercel.json`, `README.md`). De gamle løse HTML-filene
på toppnivå skal fjernes – de ligger nå i `templates/`.

### 2. Sett byggeoppsett i Vercel
Vercel leser `vercel.json` automatisk. Kontroller i prosjektet under
**Settings → Build & Development**:
- Build Command: `node build.js`
- Output Directory: `public`
(Ingen ekstra pakker trengs – `build.js` bruker bare innebygd Node.)

### 3. Koble på redigeringspanelet (Pages CMS)
1. Gå til **https://app.pagescms.org** og **logg inn med GitHub**.
2. Godkjenn tilgang til repoet `Abcfallsikring/pw-festivalen` (du kan velge kun dette repoet).
3. Åpne prosjektet – du ser nå **«Festivalinnstillinger»** i menyen.

Ingen OAuth eller servere å sette opp – innloggingen håndteres av Pages CMS via GitHub.

### 4. Gi styret tilgang
To måter:
- **Enklest:** Legg styremedlemmene til som *collaborators* på GitHub-repoet
  (GitHub → Settings → Collaborators). Da kan de logge inn i Pages CMS med egen GitHub-konto.
- Eller bruk Pages CMS sin egen «Collaborators»-funksjon i prosjektet.

## Slik redigerer styret

1. Logg inn på https://app.pagescms.org
2. Åpne prosjektet → **Festivalinnstillinger**
3. Endre felt (f.eks. nytt år, nye datoer, ny pris)
4. Klikk **Save** → endringen publiseres automatisk via Vercel

Tips ved nytt år: oppdater `Festivalår`, `Datoer (vises)`, `Startdato`,
`Sluttdato`, `Betalingsfrist`, og programdagene. Da følger hele siden med –
inkludert tittel, Google-data og påmeldingsteksten.

## Nyhetsbrev
Nyhetsbrev-verktøyet ligger på `/nyhetsbrev`. Den øverste delen (påmelding for
abonnenter) er åpen for alle. Selve «skriv og send ut»-verktøyet er ment for
styret. Vil dere låse den delen bak innlogging, kan det gjøres med Vercel sin
passordbeskyttelse (Settings → Deployment Protection) – si fra hvis dere ønsker det.

## Legge til flere redigerbare felt senere
1. Bytt ut en tekst i en fil i `templates/` med en kode, f.eks. `{{nyTekst}}`.
2. Legg `"nyTekst": "verdi"` i `data/site.json`.
3. Legg feltet til i `.pages.yml` under `fields`.
