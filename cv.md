---
layout: default
title: "Curriculum Vitae"
lang: pt
slug: cv
permalink: /cv/
description: "Curriculum Vitae de Diego Cavalcanti — Doutorando em História, Filosofia e Património da Ciência e Tecnologia."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="cv" page_num=8 total=9 %}
  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">08</span>
    <div>
      <p class="tech-subtitle">DOCUMENTO ACADÉMICO</p>
      <h1>CURRICULUM VITAE</h1>
    </div>
  </div>

  <!-- Layout de duas colunas -->
  <div class="cv-layout">

    <!-- ÍNDICE LATERAL — trilho arquitectónico -->
    <aside class="cv-index" aria-label="Índice do CV">
      <div class="cv-rail" aria-hidden="true">
        <div class="rail-track">
          <!-- Marcador deslizante -->
          <div class="rail-marker" id="rail-marker"></div>
          <!-- Números de escala -->
          <span class="rail-scale" style="top:0px">01</span>
          <span class="rail-scale" style="top:44px">02</span>
          <span class="rail-scale" style="top:88px">03</span>
          <span class="rail-scale" style="top:132px">04</span>
          <span class="rail-scale" style="top:176px">05</span>
          <span class="rail-scale" style="top:220px">06</span>
          <span class="rail-scale" style="top:264px">07</span>
          <span class="rail-scale" style="top:308px">08</span>
          <span class="rail-scale" style="top:352px">09</span>
          <span class="rail-scale" style="top:396px">10</span>
        </div>
      </div>

      <nav aria-label="Secções do CV">
        <ul class="cv-nav-list" role="list">
          {% assign cv_sections = "career,education,awards,editorships,peer_review,conference,stays,memberships,languages,skills" | split: "," %}
          {% for section in cv_sections %}
          <li class="cv-nav-item{% if forloop.first %} active{% endif %}" role="listitem">
            <a href="#cv-{{ section }}" aria-label="{{ t.cv[section] }}">
              <span class="nav-tick" aria-hidden="true"></span>
              {{ t.cv[section] }}
            </a>
          </li>
          {% endfor %}
        </ul>
      </nav>

      <div class="rail-bottom" aria-hidden="true">⊥</div>
    </aside>

    <!-- CONTEÚDO DO CV -->
    <div class="cv-content">

      <div class="cv-header-bar reveal">
        <span class="cv-title-text">CURRICULUM VITAE · <span class="meta-label">{{ t.meta.updated }}: {{ site.time | date: '%B %Y' | upcase }}</span></span>
        <a href="{{ '/assets/cv/diego-cavalcanti-cv.pdf' | relative_url }}"
           class="btn"
           aria-label="Descarregar CV em PDF">
          {% include icons/download.svg %}
          {{ t.meta.download_cv }}
        </a>
      </div>

      <!-- 01 ACTIVIDADE PROFISSIONAL -->
      <section class="cv-section reveal" id="cv-career" aria-labelledby="cv-career-title" scroll-margin-top="32px">
        <h2 class="cv-section-title" id="cv-career-title">
          <span class="section-bg-num" aria-hidden="true">01</span>
          {{ t.cv.career | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period">2023–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Technology and Culture</p>
            <p class="entry-description">Assistant Book Review Editor</p>
            <p class="entry-detail">Society for the History of Technology (SHOT) · Peer-reviewed journal</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2022–2024</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Hi-BicLab – Laboratório de História para Mobilidades Urbanas Sustentáveis</p>
            <p class="entry-description">Investigador colaborador</p>
            <p class="entry-detail">FCT-funded · PI: M. Luísa Sousa · CIUHCT, NOVA FCT</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.career | upcase }}</span>
        </div>
      </section>

      <!-- 02 FORMAÇÃO -->
      <section class="cv-section reveal" id="cv-education" aria-labelledby="cv-education-title">
        <h2 class="cv-section-title" id="cv-education-title">
          <span class="section-bg-num" aria-hidden="true">02</span>
          {{ t.cv.education | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period">2022–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">NOVA School of Science and Technology (NOVA FCT)</p>
            <p class="entry-description">PhD em História, Filosofia e Património da Ciência e Tecnologia</p>
            <p class="entry-detail">CIUHCT · Bolsa FCT · Lisboa, Portugal</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2019–2021</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará (UFC)</p>
            <p class="entry-description">Mestrado em História Social — classificação máxima</p>
            <p class="entry-detail">Bolsa CAPES · Reconhecido pela NOVA University Lisbon · Fortaleza, Brasil</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2014–2018</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará (UFC)</p>
            <p class="entry-description">Licenciatura em História</p>
            <p class="entry-detail">COMTER · PET–História · Fortaleza, Brasil</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.education | upcase }}</span>
        </div>
      </section>

      <!-- 03 PRÉMIOS E BOLSAS -->
      <section class="cv-section reveal" id="cv-awards" aria-labelledby="cv-awards-title">
        <h2 class="cv-section-title" id="cv-awards-title">
          <span class="section-bg-num" aria-hidden="true">03</span>
          {{ t.cv.awards | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period">2022–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Bolsa de Doutoramento — FCT</p>
            <p class="entry-description">Fundação para a Ciência e a Tecnologia</p>
            <p class="entry-detail">Portugal</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2019–2021</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Bolsa de Mestrado — CAPES</p>
            <p class="entry-description">Coordenação de Aperfeiçoamento de Pessoal de Nível Superior</p>
            <p class="entry-detail">Brasil</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.awards | upcase }}</span>
        </div>
      </section>

      <!-- 04 ACTIVIDADE EDITORIAL -->
      <section class="cv-section reveal" id="cv-editorships" aria-labelledby="cv-editorships-title">
        <h2 class="cv-section-title" id="cv-editorships-title">
          <span class="section-bg-num" aria-hidden="true">04</span>
          {{ t.cv.editorships | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period">2023–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Technology and Culture</p>
            <p class="entry-description">Assistant Book Review Editor</p>
            <p class="entry-detail">Johns Hopkins University Press · SHOT · ISSN 0040-165X</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.editorships | upcase }}</span>
        </div>
      </section>

      <!-- 05 REVISÃO POR PARES -->
      <section class="cv-section reveal" id="cv-peer_review" aria-labelledby="cv-peer-title">
        <h2 class="cv-section-title" id="cv-peer-title">
          <span class="section-bg-num" aria-hidden="true">05</span>
          {{ t.cv.peer_review | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period"></span>
          <div class="cv-entry-content">
            <p class="entry-institution">Technology and Culture · Análise Social · Urban History</p>
            <p class="entry-description">Revisor ad hoc</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.peer_review | upcase }}</span>
        </div>
      </section>

      <!-- 06 COMUNICAÇÕES -->
      <section class="cv-section reveal" id="cv-conference" aria-labelledby="cv-conference-title">
        <h2 class="cv-section-title" id="cv-conference-title">
          <span class="section-bg-num" aria-hidden="true">06</span>
          {{ t.cv.conference | upcase }}
        </h2>

        <div class="cv-entry">
          <span class="cv-entry-period">2024</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Annual Meeting — Society for the History of Technology (SHOT)</p>
            <p class="entry-description">Comunicação em painel</p>
            <p class="entry-detail">Tema: Planeamento urbano, ciência e exclusão em Lisboa, 1934–1977</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2023</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Congresso Internacional de História — CIUHCT</p>
            <p class="entry-description">Comunicação</p>
            <p class="entry-detail">Lisboa, Portugal</p>
          </div>
        </div>

        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.conference | upcase }}</span>
        </div>
      </section>

      <!-- 07 ESTADIAS -->
      <section class="cv-section reveal" id="cv-stays" aria-labelledby="cv-stays-title">
        <h2 class="cv-section-title" id="cv-stays-title">
          <span class="section-bg-num" aria-hidden="true">07</span>
          {{ t.cv.stays | upcase }}
        </h2>
        <div class="cv-entry">
          <span class="cv-entry-period"></span>
          <div class="cv-entry-content">
            <p class="entry-description" style="color:var(--text-meta);font-style:italic;">A preencher conforme estadias realizadas.</p>
          </div>
        </div>
        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.stays | upcase }}</span>
        </div>
      </section>

      <!-- 08 FILIAÇÕES -->
      <section class="cv-section reveal" id="cv-memberships" aria-labelledby="cv-memberships-title">
        <h2 class="cv-section-title" id="cv-memberships-title">
          <span class="section-bg-num" aria-hidden="true">08</span>
          {{ t.cv.memberships | upcase }}
        </h2>
        <div class="cv-entry">
          <span class="cv-entry-period">2022–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Society for the History of Technology (SHOT)</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">2022–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">CIUHCT — Centro Interuniversitário de História das Ciências e da Tecnologia</p>
          </div>
        </div>
        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.memberships | upcase }}</span>
        </div>
      </section>

      <!-- 09 LÍNGUAS -->
      <section class="cv-section reveal" id="cv-languages" aria-labelledby="cv-languages-title">
        <h2 class="cv-section-title" id="cv-languages-title">
          <span class="section-bg-num" aria-hidden="true">09</span>
          {{ t.cv.languages | upcase }}
        </h2>
        <div class="cv-entry">
          <span class="cv-entry-period">NATIVO</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Português</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">AVANÇADO</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Inglês</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">LEITURA</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Espanhol · Francês</p>
          </div>
        </div>
        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.languages | upcase }}</span>
        </div>
      </section>

      <!-- 10 COMPETÊNCIAS -->
      <section class="cv-section reveal" id="cv-skills" aria-labelledby="cv-skills-title">
        <h2 class="cv-section-title" id="cv-skills-title">
          <span class="section-bg-num" aria-hidden="true">10</span>
          {{ t.cv.skills | upcase }}
        </h2>
        <div class="cv-entry">
          <span class="cv-entry-period">DIGITAL</span>
          <div class="cv-entry-content">
            <p class="entry-institution">QGIS · Zotero · LaTeX · Jekyll</p>
            <p class="entry-description">Investigação histórica com fontes digitalizadas; análise espacial</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">ARQUIVO</span>
          <div class="cv-entry-content">
            <p class="entry-institution">AML · ANTT · BNP · Arquivo do Ministério do Ultramar</p>
            <p class="entry-description">Experiência extensa em pesquisa arquivística</p>
          </div>
        </div>
        <div class="cv-section-end" aria-hidden="true">
          <span class="end-label">{{ t.meta.end_section }} / {{ t.cv.skills | upcase }}</span>
        </div>
      </section>

    </div><!-- /cv-content -->
  </div><!-- /cv-layout -->

</div>
