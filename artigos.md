---
layout: default
title: "Artigos"
lang: pt
slug: artigos
permalink: /artigos/
description: "Artigos científicos publicados por Diego Cavalcanti."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="artigos" page_num=4 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">04</span>
    <div>
      <p class="tech-subtitle">ARTIGOS EM REVISTAS COM ARBITRAGEM</p>
      <h1>{{ t.nav.articles | upcase }}</h1>
    </div>
  </div>

  <!-- Filtros -->
  <div class="pub-filters" role="group" aria-label="Filtrar por área">
    <button class="filter-btn active" data-filter="all" aria-pressed="true">{{ t.meta.filter_all }}</button>
    <button class="filter-btn" data-filter="urban-history" aria-pressed="false">Hist. Urbana</button>
    <button class="filter-btn" data-filter="mobility" aria-pressed="false">Mobilidade</button>
    <button class="filter-btn" data-filter="social-history" aria-pressed="false">Hist. Social</button>
    <button class="filter-btn" data-filter="science-technology" aria-pressed="false">Ciência e Tec.</button>
  </div>

  <div class="pub-list" role="list" aria-label="Lista de artigos">
    {% assign articles_sorted = site.articles | sort: 'year' | reverse %}
    {% for article in articles_sorted %}
    <article class="pub-entry reveal" role="listitem" data-type="{{ article.area | default: 'urban-history' }}"
             aria-labelledby="article-{{ forloop.index }}">

      <span class="pub-num" aria-label="Referência A.{{ forloop.index | prepend: '00' | slice: -3, 3 }}">
        A.{{ forloop.index | prepend: '00' | slice: -3, 3 }}
      </span>

      <div class="pub-content">
        <p class="pub-citation" id="article-{{ forloop.index }}">
          <strong>Cavalcanti, Diego</strong>{% if article.authors %}, {{ article.authors | join: ', ' }}{% endif %}.
          "{{ article.title }}."
          {% if article.journal %}<em>{{ article.journal }}</em>{% endif %}
          {% if article.volume %} {{ article.volume }}{% endif %}{% if article.issue %}, no. {{ article.issue }}{% endif %}
          {% if article.year %} ({{ article.year }}){% endif %}
          {% if article.pages %}: {{ article.pages }}{% endif %}.
        </p>

        {% if article.doi %}
        <a href="https://doi.org/{{ article.doi }}" class="pub-doi"
           target="_blank" rel="noopener"
           aria-label="DOI: {{ article.doi }}">
          {{ article.doi }}
        </a>
        {% endif %}

        {% if article.tags %}
        <div class="pub-tags" role="list" aria-label="Áreas temáticas">
          {% for tag in article.tags %}
          <span class="research-tag" role="listitem">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}

        {% if article.abstract %}
        <button class="abstract-toggle" data-target="abstract-{{ forloop.index }}"
                aria-expanded="false" aria-controls="abstract-{{ forloop.index }}">
          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" aria-hidden="true">
            <polyline points="2,3 5,7 8,3"/>
          </svg>
          {{ t.meta.abstract }}
        </button>

        <div class="pub-abstract" id="abstract-{{ forloop.index }}"
             aria-hidden="true" role="region" aria-label="Resumo">
          <div class="abstract-inner">{{ article.abstract }}</div>
        </div>
        {% endif %}
      </div>

    </article>
    {% endfor %}
  </div>

</div>
