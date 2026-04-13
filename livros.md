---
layout: default
title: "Livros"
lang: pt
slug: livros
permalink: /livros/
description: "Livros publicados por Diego Cavalcanti."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="livros" page_num=3 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">03</span>
    <div>
      <p class="tech-subtitle">MONOGRAFIAS · OBRAS COLECTIVAS</p>
      <h1>{{ t.nav.books | upcase }}</h1>
    </div>
  </div>

  <div aria-label="Lista de livros" role="list">
    {% for book in site.books %}
    <article class="book-entry reveal" role="listitem" aria-labelledby="book-{{ forloop.index }}">
      <div class="card-corner-bl"></div>
      <div class="card-corner-br"></div>

      <div class="book-cover">
        {% if book.cover %}
        <img src="{{ book.cover | relative_url }}"
             alt="Capa: {{ book.title }}"
             loading="lazy">
        {% else %}
        <div style="width:100%;height:100%;min-height:280px;background:var(--bg-3);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 48 64" width="48" style="opacity:0.2">
            <rect x="2" y="2" width="44" height="60" rx="2" stroke="#E8E8E8" stroke-width="1" fill="none"/>
            <line x1="8" y1="2" x2="8" y2="62" stroke="#E8E8E8" stroke-width="1"/>
          </svg>
        </div>
        {% endif %}
      </div>

      <div class="book-divider" aria-hidden="true"></div>

      <div class="book-info">
        <h2 class="book-title" id="book-{{ forloop.index }}">
          <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
        </h2>

        <div class="book-meta-grid" role="table" aria-label="Informação bibliográfica">
          {% if book.authors %}
          <span class="meta-key" role="rowheader">{{ t.meta.co_authors }}</span>
          <span class="meta-val" role="cell">{{ book.authors | join: '; ' }}</span>
          {% endif %}
          {% if book.publisher %}
          <span class="meta-key" role="rowheader">{{ t.meta.publisher }}</span>
          <span class="meta-val" role="cell">{{ book.publisher }}</span>
          {% endif %}
          {% if book.year %}
          <span class="meta-key" role="rowheader">{{ t.meta.year }}</span>
          <span class="meta-val" role="cell">{{ book.year }}</span>
          {% endif %}
          {% if book.isbn %}
          <span class="meta-key" role="rowheader">{{ t.meta.isbn }}</span>
          <span class="meta-val" role="cell">{{ book.isbn }}</span>
          {% endif %}
          {% if book.language %}
          <span class="meta-key" role="rowheader">{{ t.meta.language }}</span>
          <span class="meta-val" role="cell">{{ book.language }}</span>
          {% endif %}
        </div>

        {% if book.description %}
        <p class="card-description">{{ book.description }}</p>
        {% endif %}

        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="{{ book.url | relative_url }}" class="btn">Ver ficha completa</a>
          {% if book.doi %}
          <a href="https://doi.org/{{ book.doi }}" class="btn" target="_blank" rel="noopener">DOI</a>
          {% endif %}
          {% if book.url_external %}
          <a href="{{ book.url_external }}" class="btn" target="_blank" rel="noopener">
            {% include icons/external.svg %} Ver publicação
          </a>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>

</div>
