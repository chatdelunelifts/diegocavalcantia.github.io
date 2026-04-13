---
layout: default
title: "Sobre"
lang: pt
slug: sobre
description: "Diego Cavalcanti — Investigador na intersecção da história social, estudos urbanos e história da ciência e tecnologia."
---
{% assign t = site.data.translations[page.lang | default: site.lang | default: 'pt'] %}

<div class="page-inner">
  {% include page-file-header.html slug="sobre" page_num=2 total=9 %}

  <div class="page-ruler" aria-hidden="true"></div>

  <div class="section-header reveal">
    <span class="section-num-display" aria-hidden="true">02</span>
    <div>
      <p class="tech-subtitle">FICHA DE IDENTIFICAÇÃO</p>
      <h1>{{ t.nav.about | upcase }}</h1>
    </div>
  </div>

  <div class="about-layout">

    <!-- Ficha de identificação -->
    <aside class="id-card reveal" aria-label="Ficha de identificação">
      <div class="id-photo">
        <img src="{{ '/assets/img/diego-cavalcanti.jpg' | relative_url }}"
             alt="Fotografia de Diego Cavalcanti"
             loading="lazy"
             width="280" height="280">
      </div>

      <div class="id-field">
        <span class="id-key">NOME</span>
        <span class="id-val">Diego Cavalcanti</span>
      </div>
      <hr class="id-separator">
      <div class="id-field">
        <span class="id-key">GRAU</span>
        <span class="id-val">Doutorando</span>
      </div>
      <div class="id-field">
        <span class="id-key">PROGRAMA</span>
        <span class="id-val">Hist., Fil. e Patr. da Ciência e Tecnologia</span>
      </div>
      <div class="id-field">
        <span class="id-key">INSTITUIÇÃO</span>
        <span class="id-val">NOVA FCT</span>
      </div>
      <div class="id-field">
        <span class="id-key">CENTRO</span>
        <span class="id-val">CIUHCT</span>
      </div>
      <hr class="id-separator">
      <div class="id-field">
        <span class="id-key">PERÍODO</span>
        <span class="id-val">1934–1977</span>
      </div>
      <div class="id-field">
        <span class="id-key">LUGAR</span>
        <span class="id-val">Lisboa</span>
      </div>
      <hr class="id-separator">
      <div class="id-field">
        <span class="id-key">BOLSA</span>
        <span class="id-val">FCT</span>
      </div>
      <div class="id-field">
        <span class="id-key">ORCID</span>
        <span class="id-val">
          <a href="{{ site.author.orcid }}" target="_blank" rel="noopener">
            0000-0000-0000-0000
          </a>
        </span>
      </div>
    </aside>

    <!-- Bio longa -->
    <div class="about-bio">
      <div class="prose reveal">
        <p>
          Diego Cavalcanti é doutorando em História, Filosofia e Património da Ciência e Tecnologia
          na NOVA School of Science and Technology (NOVA FCT), com bolsa da Fundação para a Ciência
          e a Tecnologia (FCT). É investigador do Centro Interuniversitário de História das Ciências
          e da Tecnologia (CIUHCT). A sua investigação situa-se no cruzamento da história social,
          dos estudos urbanos e da história da ciência e tecnologia, com particular atenção à relação
          entre planeamento urbano, infraestrutura e desigualdade social.
        </p>
        <p>
          A sua investigação doutoral examina as políticas de planeamento urbano e regulação do uso
          do solo em Lisboa entre 1934 e 1977, focando-se em como o conhecimento científico e técnico
          foi mobilizado nas práticas de planeamento e na agência das populações marginalizadas que
          habitavam assentamentos informais na modelação da cidade.
        </p>
        <p>
          É detentor de um grau de Mestre em História Social pela Universidade Federal do Ceará
          (UFC, Brasil), obtido com bolsa CAPES e formalmente reconhecido pela Universidade NOVA de
          Lisboa com a classificação máxima. A sua investigação de mestrado centrou-se na escravatura
          e nas relações sociais no Ceará colonial, tendo contribuído para políticas públicas e justiça
          histórica através da co-autoria de um laudo histórico pericial utilizado em processos judiciais
          relacionados com a demarcação de territórios quilombolas no Brasil.
        </p>
        <p>
          Entre 2022 e 2024, participou no projecto Hi-BicLab — Laboratório de História para
          Mobilidades Urbanas Sustentáveis (financiado pela FCT, IP: M. Luísa Sousa), contribuindo
          para a investigação interdisciplinar que resultou na publicação <em>Cycling Cities: The
          Lisbon Experience</em>, parte da série internacional <em>Cycling Cities</em> editada pela
          Foundation for the History of Technology (Eindhoven University of Technology).
        </p>
        <p>
          Desempenha actualmente as funções de Assistant Book Review Editor na <em>Technology and
          Culture</em>, a principal revista em história da tecnologia, publicada pela Society for the
          History of Technology (SHOT), onde contribui para os fluxos editoriais e actividades de
          disseminação académica da revista.
        </p>
        <p>
          A sua trajectória académica foi moldada por ambientes de investigação colaborativos e
          interdisciplinares, tendo trabalhado com historiadores, geógrafos, economistas, sociólogos
          e investigadores de políticas urbanas, conectando a investigação histórica com desafios
          societais contemporâneos.
        </p>
      </div>

      <div class="divider-numbered reveal" aria-hidden="true">
        <span class="divider-label">{{ t.meta.research_areas }}</span>
      </div>

      <nav class="research-tags reveal" aria-label="{{ t.meta.research_areas }}">
        <a class="research-tag">History of Technology</a>
        <a class="research-tag">Housing Policies and Urban Planning</a>
        <a class="research-tag">Sustainable Urban Mobilities</a>
        <a class="research-tag">History of Urban Mobility</a>
        <a class="research-tag">Social History</a>
      </nav>
    </div>

  </div>

  <!-- Timeline de formação -->
  <div class="section-block reveal">
    <div class="divider-numbered" aria-hidden="true">
      <span class="divider-label">{{ t.meta.education_timeline }}</span>
    </div>

    <div class="education-timeline" role="list">

      <div class="timeline-item reveal" role="listitem">
        <p class="timeline-date">2022 – PRESENTE</p>
        <h3 class="timeline-title">Doutoramento em História, Filosofia e Património da Ciência e Tecnologia</h3>
        <p class="timeline-institution">NOVA School of Science and Technology (NOVA FCT) · Lisboa, Portugal</p>
        <p class="timeline-institution">Bolsa FCT · Investigador CIUHCT</p>
      </div>

      <div class="timeline-item reveal" role="listitem">
        <p class="timeline-date">2019 – 2021</p>
        <h3 class="timeline-title">Mestrado em História Social</h3>
        <p class="timeline-institution">Universidade Federal do Ceará (UFC) · Fortaleza, Brasil</p>
        <p class="timeline-institution">Bolsa CAPES · Reconhecido pela NOVA University Lisbon com classificação máxima</p>
      </div>

      <div class="timeline-item reveal" role="listitem">
        <p class="timeline-date">2014 – 2018</p>
        <h3 class="timeline-title">Licenciatura em História</h3>
        <p class="timeline-institution">Universidade Federal do Ceará (UFC) · Fortaleza, Brasil</p>
        <p class="timeline-institution">COMTER · Bolseiro PET–História</p>
      </div>

    </div>
  </div>

</div>
