---
layout: default
title: "Projectos"
lang: pt
slug: projectos
permalink: /projectos/
description: "Projectos de investigação em que Diego Cavalcanti participou."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="projectos" page_num=6 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">06</span>
    <div>
      <p class="tech-subtitle">INVESTIGAÇÃO FINANCIADA · COLABORAÇÕES</p>
      <h1>{{ t.nav.projects | upcase }}</h1>
    </div>
  </div>

  <div class="cards-grid" role="list" aria-label="Lista de projectos">
    {% assign projects_sorted = site.projects | sort: 'year_end' | reverse %}
    {% for project in projects_sorted %}
    <article class="pub-card type-project reveal" role="listitem"
             style="transition-delay: {{ forloop.index0 | times: 100 }}ms"
             aria-labelledby="proj-{{ forloop.index }}">
      <div class="card-corner-bl"></div>
      <div class="card-corner-br"></div>
      <div class="card-type-bar"></div>

      <div class="card-body">
        <!-- Período em destaque -->
        <div class="project-period" aria-label="Período do projecto">
          <span class="meta-label" style="color:var(--rust);font-size:13px;">
            {{ project.year_start }}{% if project.year_end %}–{{ project.year_end }}{% else %}–PRES.{% endif %}
          </span>
        </div>

        <div class="card-header">
          <span class="card-type-icon" aria-hidden="true">{% include icons/project.svg %}</span>
          <h3 class="card-title" id="proj-{{ forloop.index }}">
            <a href="{{ project.url | relative_url }}" class="card-link">{{ project.title }}</a>
          </h3>
        </div>

        {% if project.description %}
        <p class="card-description">{{ project.description | truncate: 160 }}</p>
        {% endif %}

        <!-- Meta do projecto -->
        <div style="display:flex;flex-direction:column;gap:6px;margin-top:auto;">
          {% if project.pi %}
          <div style="display:flex;gap:8px;">
            <span class="meta-label" style="flex-shrink:0;">{{ t.meta.pi }}</span>
            <span style="font-family:var(--font-mono);font-size:12px;color:var(--text);">{{ project.pi }}</span>
          </div>
          {% endif %}
          {% if project.funding %}
          <div style="display:flex;gap:8px;">
            <span class="meta-label" style="flex-shrink:0;">{{ t.meta.funding }}</span>
            <span style="font-family:var(--font-mono);font-size:12px;color:var(--text);">{{ project.funding }}</span>
          </div>
          {% endif %}
        </div>
      </div>

      <footer class="card-footer">
        <div class="card-meta">
          {% if project.status %}
          <span class="status-badge status-{{ project.status | downcase | replace: ' ', '-' }}">
            {% if project.status == 'ongoing' %}{{ t.meta.status_ongoing }}
            {% elsif project.status == 'completed' %}{{ t.meta.status_completed }}
            {% elsif project.status == 'review' %}{{ t.meta.status_review }}
            {% endif %}
          </span>
          {% endif %}
        </div>
      </footer>
    </article>
    {% endfor %}
  </div>
</div>
