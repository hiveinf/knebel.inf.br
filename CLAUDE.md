# Knebel & Knebel — CLAUDE.md

## Projeto

Site institucional estático da Knebel & Knebel LTDA (CNPJ 43.442.156/0001-35).
Astro v6, output estático, zero JS no cliente, hospedado no GitHub Pages (knebel.inf.br).
Commits sem prefixo Jira.

## Comandos

- `npm run dev` — servidor local em http://localhost:4321
- `npm run build` — gera dist/ (verificação obrigatória antes de commitar)
- `npm run preview` — preview do build estático

## Style Guide

### Paleta (CSS custom properties definidas em src/styles/global.css)

| Variável | Valor | Uso |
|---|---|---|
| `--color-bg` | `#fdfaf4` | Fundo base (creme levíssimo) |
| `--color-primary` | `#0369a1` | Azul-marinho — cor principal |
| `--color-accent` | `#d97706` | Âmbar/dourado — cor de destaque |
| `--color-text` | `#0c1a2e` | Texto principal |
| `--color-text-secondary` | `#64748b` | Texto secundário |
| `--color-text-muted` | `#5f6f82` | Labels, metadados |
| `--color-footer-bg` | `#0c1a2e` | Fundo do footer |
| `--color-card-bg` | `#ffffff` | Fundo de cards |
| `--gradient-brand` | `linear-gradient(90deg, #0369a1, #b45309)` | Gradiente navy→âmbar (tom AA para texto) |
| `--gradient-contact-bg` | `linear-gradient(180deg, #fdfaf4, #f0eade)` | Fundo da seção contato |

### Efeito Aurora Light

Blobs decorativos com `position: absolute`, `border-radius: 50%`, `filter: blur(60px)`, `pointer-events: none`.
Âmbar no canto superior direito, navy no canto inferior esquerdo.

```css
.aurora-amber {
  background: radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 65%);
  width: 400px; height: 400px; top: -100px; right: -80px;
}
.aurora-navy {
  background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 65%);
  width: 380px; height: 380px; bottom: -80px; left: -60px;
}
```

### Tipografia

- Fonte: `system-ui, -apple-system, sans-serif` (sem Google Fonts)
- Títulos de marca: `font-weight: 900`, `letter-spacing: -0.03em`
- Títulos de seção (`h2`): `font-size: 2rem`, `font-weight: 800`, `letter-spacing: -0.03em`
- Hero h1: `font-size: clamp(2.5rem, 6vw, 4.5rem)`, `font-weight: 900`
- Labels de seção: `font-size: 0.65rem`, `letter-spacing: 0.25rem`, `text-transform: uppercase`, cor `--color-text-muted`
- Texto descritivo: `font-size: 1rem`, `line-height: 1.7`, cor `--color-text-secondary`

### Componentes e padrões

- Cada seção é um componente Astro com `<style>` scoped — sem classes globais
- Preferir `.hero h1` / `.section h2` a seletores bare para maior clareza
- Cards: `border: 1px solid rgba(3, 105, 161, 0.1)`, `border-radius: 12px`, `box-shadow: 0 1px 4px rgba(0,0,0,0.04)`, `background: var(--color-card-bg)`
- Botão primário: `background: var(--gradient-brand)`, `border-radius: 20px`, `color: white`, `font-weight: 600`
- Scroll suave: `scroll-behavior: smooth` no `html {}` do global.css — sem JS
- Nav fixa: `backdrop-filter: blur(8px)`, `-webkit-backdrop-filter: blur(8px)`, `background: rgba(253,250,244,0.92)`

### Responsividade

- Grid de serviços: 3 colunas → 1 coluna em `max-width: 768px`
- Grid de parceiros (contato): 2 colunas → 1 coluna em `max-width: 480px`
- Nav mobile (`max-width: 600px`): ocultar logo-full e links não-CTA
- Container máximo: `max-width: 1100px`, `margin: 0 auto`, padding lateral `1.5rem`

### Estrutura de seção padrão

```astro
<section class="[nome]" id="[anchor]">
  <div class="[nome]-inner">
    <p class="section-label">Label em caixa alta</p>
    <h2>Título da Seção</h2>
    <!-- conteúdo -->
  </div>
  <!-- aurora blobs se necessário -->
</section>
```

## Deploy

Push para `main` dispara GitHub Actions (`.github/workflows/deploy.yml`).
`peaceiris/actions-gh-pages@v4` publica `dist/` no branch `gh-pages`.
GitHub Pages configurado para servir `gh-pages` com domínio customizado `knebel.inf.br`.
