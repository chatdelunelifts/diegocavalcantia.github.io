---
layout: default
title: "Capítulos de Livro"
lang: pt
slug: capitulos
permalink: /capitulos/
description: "Capítulos de livro publicados por Diego Cavalcanti."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="capitulos" page_num=5 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">05</span>
    <div>
      <p class="tech-subtitle">CONTRIBUIÇÕES EM OBRAS COLECTIVAS</p>
      <h1>{{ t.nav.chapters | upcase }}</h1>
    </div>
  </div>

  <div class="pub-filters" role="group" aria-label="Filtrar por área">
    <button class="filter-btn active" data-filter="all" aria-pressed="true">{{ t.meta.filter_all }}</button>
    <button class="filter-btn" data-filter="urban-history" aria-pressed="false">Hist. Urbana</button>
    <button class="filter-btn" data-filter="mobility" aria-pressed="false">Mobilidade</button>
  </div>

  <div class="pub-list" role="list" aria-label="Lista de capítulos">
    {% assign chapters_sorted = site.chapters | sort: 'year' | reverse %}
    {% for chapter in chapters_sorted %}
    <article class="pub-entry reveal" role="listitem"
             data-type="{{ chapter.area | default: 'urban-history' }}"
             aria-labelledby="chapter-{{ forloop.index }}">

      <span class="pub-num" aria-label="Referência C.{{ forloop.index | prepend: '00' | slice: -3, 3 }}">
        C.{{ forloop.index | prepend: '00' | slice: -3, 3 }}
      </span>

      <div class="pub-content">
        <p class="pub-citation" id="chapter-{{ forloop.index }}">
          <strong>Cavalcanti, Diego</strong>{% if chapter.authors %}, {{ chapter.authors | join: ', ' }}{% endif %}.
          "{{ chapter.title }}."
          In <em>{{ chapter.book_title }}</em>{% if chapter.editors %}, edited by {{ chapter.editors | join: ', ' }}{% endif %}.
          {% if chapter.publisher %}{{ chapter.publisher }}{% endif %}{% if chapter.year %}, {{ chapter.year }}{% endif %}
          {% if chapter.pages %}: {{ chapter.pages }}{% endif %}.
        </p>

        {% if chapter.doi %}
        <a href="https://doi.org/{{ chapter.doi }}" class="pub-doi"
           target="_blank" rel="noopener">{{ chapter.doi }}</a>
        {% endif %}

        {% if chapter.tags %}
        <div class="pub-tags" role="list">
          {% for tag in chapter.tags %}
          <span class="research-tag" role="listitem">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}

        {% if chapter.abstract %}
        <button class="abstract-toggle" data-target="abstract-c-{{ forloop.index }}"
                aria-expanded="false" aria-controls="abstract-c-{{ forloop.index }}">
          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true">
            <polyline points="2,3 5,7 8,3"/>
          </svg>
          {{ t.meta.abstract }}
        </button>
        <div class="pub-abstract" id="abstract-c-{{ forloop.index }}" aria-hidden="true">
          <div class="abstract-inner">{{ chapter.abstract }}</div>
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</div>
