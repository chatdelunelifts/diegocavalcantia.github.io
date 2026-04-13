---
layout: default
title: "Contacto"
lang: pt
slug: contacto
permalink: /contacto/
description: "Contactar Diego Cavalcanti — CIUHCT, NOVA FCT, Lisboa."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="contacto" page_num=9 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="contact-layout">

    <div class="contact-num" aria-hidden="true">09</div>

    <div class="contact-content">

      <div class="reveal">
        <p class="tech-subtitle">{{ t.meta.contact_title }}</p>
        <a href="mailto:{{ site.author.email }}"
           class="contact-email-link"
           aria-label="Enviar email para {{ site.author.email }}">
          {{ site.author.email }}
        </a>
      </div>

      <div class="contact-postal reveal" aria-label="Endereço institucional">
        <p class="postal-label">ENDEREÇO INSTITUCIONAL</p>
        <address>
          Diego Cavalcanti<br>
          CIUHCT — Centro Interuniversitário de<br>
          História das Ciências e da Tecnologia<br>
          NOVA School of Science and Technology<br>
          Campus de Caparica<br>
          2829-516 Caparica<br>
          Portugal
        </address>
        <div class="postal-stamp" aria-hidden="true">
          {% include stamp.html %}
        </div>
      </div>

      <nav class="contact-links-grid reveal" aria-label="Perfis académicos">
        <a href="{{ site.author.orcid }}" class="academic-link" target="_blank" rel="noopener"
           aria-label="Perfil ORCID (abre em nova janela)">
          {% include icons/orcid.svg %}
          <span class="link-label">ORCID</span>
        </a>
        <a href="{{ site.author.academia }}" class="academic-link" target="_blank" rel="noopener"
           aria-label="Perfil Academia.edu (abre em nova janela)">
          {% include icons/academia.svg %}
          <span class="link-label">Academia</span>
        </a>
        <a href="https://scholar.google.com" class="academic-link" target="_blank" rel="noopener"
           aria-label="Google Scholar (abre em nova janela)">
          {% include icons/institution.svg %}
          <span class="link-label">Scholar</span>
        </a>
        <a href="{{ site.author.github }}" class="academic-link" target="_blank" rel="noopener"
           aria-label="GitHub (abre em nova janela)">
          {% include icons/github.svg %}
          <span class="link-label">GitHub</span>
        </a>
        <a href="{{ site.author.linkedin }}" class="academic-link" target="_blank" rel="noopener"
           aria-label="LinkedIn (abre em nova janela)">
          {% include icons/linkedin.svg %}
          <span class="link-label">LinkedIn</span>
        </a>
        <a href="{{ site.author.ciuhct }}" class="academic-link" target="_blank" rel="noopener"
           aria-label="CIUHCT (abre em nova janela)">
          {% include icons/institution.svg %}
          <span class="link-label">CIUHCT</span>
        </a>
      </nav>

    </div>
  </div>
</div>
