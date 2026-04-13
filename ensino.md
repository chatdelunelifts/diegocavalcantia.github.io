---
layout: default
title: "Ensino"
lang: pt
slug: ensino
permalink: /ensino/
description: "Actividade de ensino de Diego Cavalcanti."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="ensino" page_num=7 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">07</span>
    <div>
      <p class="tech-subtitle">DOCÊNCIA · TUTORIA · WORKSHOPS</p>
      <h1>{{ t.nav.teaching | upcase }}</h1>
    </div>
  </div>

  <div class="section-block reveal" style="max-width:560px;">
    <div style="
      border: 1px dashed var(--border);
      padding: 48px 40px;
      position: relative;
    ">
      <!-- Marcadores de corte -->
      <div style="position:absolute;top:-1px;left:-1px;width:10px;height:10px;border-top:1px solid var(--rust);border-left:1px solid var(--rust);"></div>
      <div style="position:absolute;top:-1px;right:-1px;width:10px;height:10px;border-top:1px solid var(--rust);border-right:1px solid var(--rust);"></div>
      <div style="position:absolute;bottom:-1px;left:-1px;width:10px;height:10px;border-bottom:1px solid var(--rust);border-left:1px solid var(--rust);"></div>
      <div style="position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-bottom:1px solid var(--rust);border-right:1px solid var(--rust);"></div>

      <p class="meta-label" style="margin-bottom:16px;color:var(--rust);">EM CONSTRUÇÃO</p>
      <p style="font-family:var(--font-mono);font-size:14px;color:var(--text-meta);line-height:1.7;">
        Esta secção está a ser preparada. Em breve serão listadas unidades curriculares,
        seminários e workshops lecionados.
      </p>
      <p style="font-family:var(--font-mono);font-size:11px;color:var(--border);margin-top:24px;letter-spacing:0.08em;text-transform:uppercase;">
        — Arquivo em actualização contínua
      </p>
    </div>
  </div>
</div>
