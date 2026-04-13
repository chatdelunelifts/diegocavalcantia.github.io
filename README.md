# Diego Cavalcanti — Site Académico Pessoal

**Arquivo Vivo** · diegocavalcanti.github.io

Site académico pessoal de Diego Cavalcanti, doutorando em História, Filosofia e
Património da Ciência e Tecnologia na NOVA FCT, investigador do CIUHCT.

Concebido como um *arquivo técnico municipal dos anos 1950–60 que ganhou vida* —
brutalismo digital, metálico, denso, idiossincrático.

---

## Instalação e desenvolvimento local

### Pré-requisitos

- Ruby ≥ 3.0
- Bundler (`gem install bundler`)
- Git

### Instalar dependências

```bash
git clone https://github.com/diegocavalcanti/diegocavalcanti.github.io.git
cd diegocavalcanti.github.io
bundle install
```

### Servidor local

```bash
bundle exec jekyll serve --livereload
```

Abre em `http://localhost:4000`

Para forçar regeneração completa:

```bash
bundle exec jekyll serve --livereload --force_polling
```

---

## Deploy no GitHub Pages

1. No GitHub, criar repositório com o nome exacto: `diegocavalcanti.github.io`
2. Fazer push do conteúdo para o branch `main`
3. Em Settings → Pages → Source: seleccionar `main` / `root`
4. O site estará disponível em `https://diegocavalcanti.github.io`

O repositório usa `github-pages` gem que gere automaticamente os plugins
compatíveis. Não é necessário CI/CD adicional.

---

## Estrutura de ficheiros

```
.
├── _config.yml              # Configuração Jekyll
├── _layouts/                # Templates de página
│   ├── default.html         # Layout base (sidebar + main)
│   ├── home.html            # Página inicial (hero + cards)
│   ├── publication.html     # Publicação individual
│   └── project.html         # Projecto individual
├── _includes/               # Componentes reutilizáveis
│   ├── sidebar.html         # Sidebar principal
│   ├── footer.html          # Rodapé
│   ├── stamp.html           # Carimbo "VERIFICADO" SVG
│   ├── cursor.html          # Cursor personalizado
│   ├── page-file-header.html# Cabeçalho de ficha
│   ├── svg/
│   │   └── building-pombalino.svg  # SVG do edifício
│   └── icons/               # Ícones SVG (book, article, email, etc.)
├── _sass/                   # SCSS modular
│   ├── _variables.scss      # Tokens de design (paleta, tipografia)
│   ├── _reset.scss          # Reset + base
│   ├── _typography.scss     # Hierarquia tipográfica
│   ├── _layout.scss         # Grelha, estrutura, régua
│   ├── _sidebar.scss        # Sidebar + mobile nav
│   ├── _header.scss         # Cabeçalho de publicação
│   ├── _hero.scss           # Hero + contribution graph
│   ├── _cards.scss          # Cards de publicação
│   ├── _publications.scss   # Lista bibliográfica
│   ├── _cv.scss             # CV layout + trilho
│   ├── _contact.scss        # Página de contacto
│   ├── _ornaments.scss      # About + timeline
│   ├── _animations.scss     # Keyframes + revelação
│   ├── _accessibility.scss  # WCAG, focus, skip link
│   └── _responsive.scss     # Breakpoints
├── _collections/            # Dados das publicações
│   ├── _books/              # Livros (.md por livro)
│   ├── _articles/           # Artigos (.md por artigo)
│   ├── _chapters/           # Capítulos (.md por capítulo)
│   └── _projects/           # Projectos (.md por projecto)
├── _data/
│   └── translations.yml     # Strings PT/EN
├── assets/
│   ├── css/main.scss        # Ponto de entrada SCSS
│   ├── js/
│   │   ├── main.js          # Orquestração principal
│   │   ├── sidebar.js       # Nav indicator + mobile
│   │   ├── scroll-reveal.js # IntersectionObserver
│   │   └── cursor.js        # Cursor personalizado
│   ├── svg/
│   │   └── city-block.svg   # Planta do footer
│   └── img/                 # Imagens (foto, capas)
└── pages/                   # Páginas de secção
    ├── sobre.md
    ├── livros.md
    ├── artigos.md
    ├── capitulos.md
    ├── projectos.md
    ├── ensino.md
    ├── cv.md
    └── contacto.md
```

---

## Adicionar publicações

### Novo artigo

Criar `_collections/_articles/slug-do-artigo.md`:

```yaml
---
title: "Título do Artigo"
layout: publication
pub_type: article
year: 2024
journal: "Nome da Revista"
volume: "10"
issue: "2"
pages: "1–20"
doi: "10.xxxx/xxxxx"
language: "English"          # ou "Portuguese"
area: urban-history          # urban-history | mobility | social-history | science-technology
citations: 0
tags:
  - History of Technology
  - Social History
abstract: >
  Resumo do artigo em inglês ou português.
description: >
  Descrição curta (usada nos cards).
---

Conteúdo adicional em Markdown (opcional — notas, contexto).
```

### Novo livro

Criar `_collections/_books/slug-do-livro.md` com os mesmos campos, mais:

```yaml
pub_type: book
publisher: "Nome da Editora"
isbn: "978-x-xxxx-xxxx-x"
cover: "/assets/img/covers/nome-do-livro.jpg"
series: "Nome da Série"
```

### Novo capítulo

Criar `_collections/_chapters/slug-do-capitulo.md`:

```yaml
pub_type: chapter
book_title: "Título do Livro"
editors:
  - "Nome do Editor"
publisher: "Editora"
```

### Novo projecto

Criar `_collections/_projects/slug-do-projecto.md`:

```yaml
layout: project
pub_type: project
year_start: 2022
year_end: 2024        # omitir se em curso
status: completed     # ongoing | completed | review
pi: "Nome do IP"
funding: "FCT"
institutions:
  - "CIUHCT / NOVA FCT"
output: "Descrição do output"
```

---

## Configuração bilingue (PT/EN)

As strings da interface estão em `_data/translations.yml`. Para adicionar nova string:

1. Adicionar a key em `pt:` e `en:` no ficheiro
2. Usar no template: `{{ t.meta.minha_key }}`

Para activar a versão EN de uma página, adicionar `lang: en` no front matter
e criar uma versão paralela do ficheiro.

---

## Personalização visual

### Paleta de cores

Editar as variáveis CSS em `_sass/_variables.scss`:

```scss
$color-rust:       #B7410E;   // acento principal — usar com parcimónia
$color-steel-blue: #3A4A52;   // sidebar
$color-bg:         #0A0A0A;   // fundo principal
```

### Tipografia

As fontes são carregadas do Google Fonts em `_layouts/default.html`.
Pesos usados: Archivo Narrow 800 (títulos), IBM Plex Mono 400/500 (corpo/meta).

### Animações

Para desactivar animações globalmente (além do `prefers-reduced-motion`),
adicionar ao `_sass/_animations.scss`:

```scss
* { animation: none !important; transition: none !important; }
```

---

## Acessibilidade

- Contraste WCAG AA verificado (#E8E8E8 sobre #0A0A0A: ratio ≈ 17.5:1)
- Focus rings 2px #B7410E em todos os elementos interactivos
- Skip link no topo de cada página
- `aria-label` em todos os ícones e controlos
- `prefers-reduced-motion` desactiva animações de entrada, SVG draw e deslize
- `prefers-contrast: more` com paleta alternativa de alto contraste
- Cursor personalizado desactivável via toggle no footer

---

## Decisões de design

**Paleta metálica:** Grafite profundo como fundo — evita o cansaço visual do
preto puro. O azul-aço da sidebar (#3A4A52) cria separação espacial sem
competir com o conteúdo. A ferrugem (#B7410E) é usada com extrema parcimónia
— quando aparece, o olho vai imediatamente.

**Tipografia em contraste extremo:** Archivo Narrow 800 em caixa alta para
títulos monumentais; IBM Plex Mono para corpo — o mono reforça a metáfora do
arquivo técnico/cadastral. Sem meios-termos: ou muito grande ou muito pequeno.

**SVG do edifício:** Animado com stroke-dasharray — o edifício "constrói-se"
linha a linha ao carregar a página, como se fosse um levantamento técnico em
curso. Visível apenas em desktop para não sobrecarregar mobile.

**Contribution graph:** Reinterpretação do GitHub contribution graph como
calendário de actividade académica — publicações, conferências, trabalho de
arquivo — com a escala de cores em ferrugem.

**Carimbo "VERIFICADO":** Referência directa aos carimbos administrativos
portugueses, com rotação de -8° para simular aplicação manual. O pulso de
opacidade subtil (4s) dá vida ao elemento sem o tornar distractor.

**Trilho arquitectónico do CV:** Inspirado em escalas de alçado arquitectónico
— o marcador que desliza pelo trilho é como um "elevador industrial" a percorrer
a estrutura vertical do edifício-CV.

---

## Licença

Código: MIT  
Conteúdo académico: © Diego Cavalcanti, todos os direitos reservados.
