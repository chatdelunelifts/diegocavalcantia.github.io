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
          <span class="cv-entry-period">2025–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Society for the History of Technology (SHOT)</p>
            <p class="entry-description">Assistant Book Review Editor</p>
            <p class="entry-detail">Johns Hopkins University Press</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2024–2027</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Faculdade de Ciências e Tecnologia da Universidade NOVA</p>
            <p class="entry-description">Bolseiro de investigação — Doutoramento</p>
            <p class="entry-detail">FCT — Fundação para a Ciência e a Tecnologia</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2022–2023</span>
          <div class="cv-entry-content">
            <p class="entry-institution">CIUHCT — Centro Interuniversitário de História das Ciências e da Tecnologia</p>
            <p class="entry-description">Investigador (Research Fellow)</p>
            <p class="entry-detail">Associação para a Inovação e Desenvolvimento da FCT</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2022</span>
          <div class="cv-entry-content">
            <p class="entry-institution">EEM Nailton Cavalcante Lima</p>
            <p class="entry-description">Professor ensino secundário</p>
            <p class="entry-detail">Secretaria de Estado de Educação do Ceará, Brasil</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2018–2021</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará</p>
            <p class="entry-description">Investigador (Research)</p>
            <p class="entry-detail">CNPq — Conselho Nacional de Desenvolvimento Científico e Tecnológico, Brasil</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2015–2018</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará</p>
            <p class="entry-description">Investigador (Research)</p>
            <p class="entry-detail">Ministério da Educação, Brasil</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2014–2016</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará</p>
            <p class="entry-description">Investigador (Research)</p>
            <p class="entry-detail">Universidade Federal do Ceará, Brasil</p>
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
          <span class="cv-entry-period">2023–2027</span>
          <div class="cv-entry-content">
            <p class="entry-institution">CIUHCT / NOVA School of Science and Technology (NOVA FCT)</p>
            <p class="entry-description">Doutoramento em História, Filosofia e Património da Ciência e Tecnologia</p>
            <p class="entry-detail">Bolsa FCT (2023.01509.BD) · Lisboa, Portugal</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2024–2025</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Centro Universitário Anhanguera Pitágoras / Unopar de Niterói</p>
            <p class="entry-description">Pós-Graduação — Prescrição de Treinos e Exercícios</p>
            <p class="entry-detail">Classificação: 9.8/10 · Brasil</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2022</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Nova de Lisboa</p>
            <p class="entry-description">Mestrado em História (reconhecimento)</p>
            <p class="entry-detail">Classificação: 20 valores · Lisboa, Portugal</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2018–2021</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Universidade Federal do Ceará (UFC)</p>
            <p class="entry-description">Mestrado em História Social</p>
            <p class="entry-detail">Classificação: 9,73/10 · Fortaleza, Brasil</p>
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
          <span class="cv-entry-period">2024–2027</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Bolsa de Doutoramento — FCT</p>
            <p class="entry-description">Fundação para a Ciência e a Tecnologia</p>
            <p class="entry-detail">Ref. 2023.01509.BD · Portugal</p>
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
          <span class="cv-entry-period">2025–PRES.</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Society for the History of Technology (SHOT)</p>
            <p class="entry-description">Assistant Book Review Editor</p>
            <p class="entry-detail">Johns Hopkins University Press</p>
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
            <p class="entry-description" style="color:var(--text-meta);font-style:italic;">A preencher.</p>
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
          <span class="cv-entry-period">2025</span>
          <div class="cv-entry-content">
            <p class="entry-institution">SHOT Annual Meeting</p>
            <p class="entry-description">Bicycles and the City: Reimagining accessibility and informal housing in 1950s-1960s Lisbon</p>
            <p class="entry-detail">Belval Campus, University of Luxembourg (Esch-sur-Alzette, Luxembourg)</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2025</span>
          <div class="cv-entry-content">
            <p class="entry-institution">8.º Encontro Nacional de História das Ciências e Tecnologia / 3.º Encontro Nacional de História da Química</p>
            <p class="entry-description">'Uma cidade saudável, cómoda e agradável': Circulação de ideias e o dilema das "concentrações urbanas" no plano de Étienne Groër (1938-1948)</p>
            <p class="entry-detail">Universidade de Aveiro (Aveiro, Portugal)</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2023</span>
          <div class="cv-entry-content">
            <p class="entry-institution">2023 GMHC and T²M Annual Conference</p>
            <p class="entry-description">Beyond outreach: interdisciplinarity and public engagement for a history lab on low cycling maturity cities</p>
            <p class="entry-detail">Academy of Mobility Humanities, Konkuk University (Seoul, South Korea)</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2023</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Cycling and Society Research Group Annual Symposium 2023</p>
            <p class="entry-description">(Re)discovering the past, imagining the future: a History Lab for Lisbon's cycling policies</p>
            <p class="entry-detail">Cycling and Society Research Group (Dublin, Ireland)</p>
          </div>
        </div>

        <div class="cv-entry">
          <span class="cv-entry-period">2023</span>
          <div class="cv-entry-content">
            <p class="entry-institution">I Congresso História Pública em Portugal: práticas, experiências e desafios</p>
            <p class="entry-description">Envolvimento societal no resgate de um "passado utilizável". O caso do laboratório de história sobre mobilidade ciclável da cidade de Lisboa.</p>
            <p class="entry-detail">Laboratório Associado IN2PAST (Lisboa, Portugal)</p>
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
          <span class="cv-entry-period">C1</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Inglês</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">A2/B1</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Francês</p>
          </div>
        </div>
        <div class="cv-entry">
          <span class="cv-entry-period">A1/A2</span>
          <div class="cv-entry-content">
            <p class="entry-institution">Macedónio</p>
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
