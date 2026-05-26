# SafetyZ° — Landing Page

Landing page editorial-dark da plataforma SafetyZ°.

**Live:** [safetyzteste-app.surge.sh](https://safetyzteste-app.surge.sh)

---

## Stack

- **React 18** + **Vite 5**
- **Fraunces** (variable serif, eixos `opsz` / `SOFT` / `WONK`) + **DM Sans** + **JetBrains Mono**
- Sem framework de UI — tudo em JSX + CSS puro com variáveis
- ~220 KB JS gzipped

## Estrutura

```
src/
├── App.jsx                       # Orquestra as seções
├── main.jsx                      # Entry Vite
├── components/
│   ├── sections/                 # Hero, Navbar, Marquee, FeatureEditorial, Download, Mobile, Impact, GetInTouch, Footer
│   ├── ui/                       # Logo, Sphere, Asterisk, BrowserFrame, PhoneFrame
│   └── mockups/                  # Dashboard, Inventory, Calendar, Mobile mockups (em SVG)
├── hooks/                        # useReveal, useCountUp
├── styles/globals.css            # Sistema de design: cores, fontes, animations, atmosphere
└── data/content.js
```

## Desenvolvimento

```bash
npm install
npm run dev          # Vite dev server em :5175
npm run build        # Build de produção em dist/
npm run preview      # Preview do build local
```

## Sistema de design

- **Atmosfera densa**: grain SVG overlay + vignette + crosshatch sutil
- **Tipografia em camadas**: mistura DM Sans bold com Fraunces italic wonky em headlines
- **Composição assimétrica**: rail editorial à esquerda, mockups com perspective 3D
- **Animações refinadas**: staggered word reveals, asterisk rotation, magnetic hovers
- **Paleta**: deep navy `#06070C` + accent azul `#4DA3FF`

## Deploy

Atualmente hospedada via [Surge.sh](https://surge.sh):

```bash
npm run build
surge dist/ safetyzteste-app.surge.sh
```

## Roadmap

- [ ] Migrar download do `.exe` para uma URL externa (S3/Bunny) — fora do repo
- [ ] Adicionar página de privacidade/termos
- [ ] Lighthouse > 95 em mobile

---

Desenhado em São Paulo · v3.1
