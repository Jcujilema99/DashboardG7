const nccData = {
  macro: {
    title: "Nivel macro: política curricular nacional",
    text: "El Ministerio de Educación establece el currículo nacional obligatorio, los objetivos, las destrezas, los criterios de evaluación y los aprendizajes comunes para el Sistema Nacional de Educación.",
    bullets: [
      "Orienta la política educativa nacional.",
      "Define el marco común de aprendizajes para el país.",
      "En Matemática, establece bloques, competencias, criterios e indicadores."
    ]
  },
  meso: {
    title: "Nivel meso: contextualización institucional",
    text: "Cada institución adapta el currículo mediante la Planificación Curricular Institucional y la Planificación Curricular Anual, considerando identidad, entorno, recursos y características de sus estudiantes.",
    bullets: [
      "Contextualiza sin romper el currículo nacional.",
      "Permite diferenciar una institución rural de una urbana.",
      "Conecta Matemática con problemas reales del contexto."
    ]
  },
  micro: {
    title: "Nivel micro: concreción en el aula",
    text: "El docente concreta la enseñanza en actividades, recursos, estrategias metodológicas, evaluación y adaptaciones curriculares para responder a necesidades reales de aprendizaje.",
    bullets: [
      "Convierte destrezas y competencias en experiencias de aprendizaje.",
      "Integra evaluación formativa e inclusión.",
      "Permite adaptar el tema de funciones para estudiantes con discalculia."
    ]
  }
};

const hitos = [
  {
    year: "1996",
    title: "Reforma Curricular de Educación General Básica",
    tags: ["Destrezas", "Ejes transversales", "Inicio de modernización"],
    summary: "Oficializó un currículo de Educación General Básica fundamentado en destrezas y ejes transversales. Fue un avance inicial, pero posteriormente se identificaron problemas de articulación, precisión y evaluación.",
    math: "Matemática se organizó desde destrezas y contenidos con énfasis procedimental. La relación con Álgebra, Geometría y Estadística era menos explícita que en propuestas posteriores.",
    macro: "Define una base curricular nacional común.",
    meso: "La institución aplica el currículo con menor margen de contextualización.",
    micro: "La clase se centra con frecuencia en procedimientos y ejercicios graduados."
  },
  {
    year: "2010–2011",
    title: "Actualización y Fortalecimiento Curricular",
    tags: ["Destrezas", "Indicadores", "Ordenamiento curricular"],
    summary: "Buscó corregir debilidades de la reforma anterior mediante una organización más clara de habilidades, conocimientos, orientaciones metodológicas e indicadores de evaluación.",
    math: "Mejora la progresión de aprendizajes matemáticos y la relación entre destrezas, conocimientos y evaluación.",
    macro: "Fortalece la coherencia entre niveles y aprendizajes esperados.",
    meso: "Permite organizar mejor la planificación institucional.",
    micro: "Orienta al docente con indicadores más claros para evaluar."
  },
  {
    year: "2011",
    title: "Implementación del Bachillerato General Unificado",
    tags: ["BGU", "Tronco común", "Continuidad educativa"],
    summary: "El Acuerdo Ministerial Nro. 242-11 implementó el Bachillerato General Unificado para brindar una formación general articulada con Educación General Básica y superar la fragmentación por especializaciones.",
    math: "Fortalece la continuidad de Matemática como área básica dentro del tronco común del Bachillerato.",
    macro: "Unifica la estructura del Bachillerato.",
    meso: "La institución reorganiza su oferta y planificación anual.",
    micro: "El docente articula conocimientos de EGB con exigencias de Bachillerato."
  },
  {
    year: "2016",
    title: "Currículo de Matemática EGB y BGU",
    tags: ["Álgebra", "Geometría", "Estadística"],
    summary: "Presentó una propuesta más abierta y flexible, orientada a atender la diversidad de contextos educativos mediante destrezas con criterios de desempeño e indicadores.",
    math: "Matemática se organiza en tres bloques: Álgebra y funciones, Geometría y medida, y Estadística y probabilidad.",
    macro: "Establece bloques curriculares claros y destrezas con criterios de desempeño.",
    meso: "El PCI contextualiza los bloques según necesidades institucionales.",
    micro: "La planificación de aula conecta destreza, actividad, recurso, evaluación e inclusión."
  },
  {
    year: "2023",
    title: "Enfoque competencial y Marco Curricular Competencial",
    tags: ["Competencias", "Perfil de salida", "Currículo 2030"],
    summary: "Fortalece el enfoque competencial, priorizando competencias comunicacionales, matemáticas, digitales y socioemocionales, con énfasis en la aplicación de aprendizajes a contextos reales.",
    math: "La Matemática se orienta hacia resolución de problemas, modelización, interpretación de datos, pensamiento crítico y toma de decisiones.",
    macro: "Precisa competencias y perfiles de salida.",
    meso: "Exige contextualizar competencias en proyectos institucionales coherentes.",
    micro: "Demanda experiencias de aula con evidencia de desempeño y evaluación competencial."
  }
];

const mathRows = [
  {
    hito: "Reforma de 1996",
    organizacion: "Destrezas y ejes transversales.",
    lectura: "Fue un avance inicial, pero presentó limitaciones de precisión, evaluación y articulación.",
    carga: "Carga y organización más rígidas; menor precisión por bloques matemáticos.",
    niveles: "Macro: currículo nacional inicial. Meso: aplicación institucional general. Micro: énfasis en ejercicios y procedimientos."
  },
  {
    hito: "Actualización 2010–2011",
    organizacion: "Destrezas, conocimientos, metodología e indicadores.",
    lectura: "Buscó ordenar el currículo y acercarlo a la práctica docente.",
    carga: "Mejor articulación entre tiempo, destrezas e indicadores de evaluación.",
    niveles: "Macro: actualización curricular. Meso: planificación más organizada. Micro: evaluación con indicadores."
  },
  {
    hito: "BGU 2011",
    organizacion: "Tronco común para Bachillerato.",
    lectura: "Fortaleció la continuidad entre Educación General Básica y Bachillerato.",
    carga: "Matemática se mantiene como área estructural del Bachillerato común.",
    niveles: "Macro: unificación del Bachillerato. Meso: reorganización institucional. Micro: continuidad de aprendizajes."
  },
  {
    hito: "Currículo 2016",
    organizacion: "Tres bloques: Álgebra y funciones, Geometría y medida, Estadística y probabilidad.",
    lectura: "Aportó mayor claridad, secuencia y flexibilidad al aprendizaje matemático.",
    carga: "El Acuerdo MINEDUC-ME-2016-00020-A estableció Matemática en BGU con 5 períodos en primero, 4 en segundo y 3 en tercero.",
    niveles: "Macro: bloques y DCD. Meso: PCI contextualizado. Micro: planificación con recursos, evaluación e inclusión."
  },
  {
    hito: "Enfoque 2023",
    organizacion: "Competencias matemáticas, comunicacionales, digitales y socioemocionales.",
    lectura: "Orientó la Matemática hacia la resolución de problemas y la toma de decisiones.",
    carga: "El Acuerdo MINEDUC-MINEDUC-2023-00008-A estableció para Bachillerato en Ciencias 5 períodos en primero, 5 en segundo y 4 en tercero.",
    niveles: "Macro: competencias y perfil de salida. Meso: proyectos contextualizados. Micro: evidencia de desempeño competencial."
  }
];

const innovationContent = {
  meso: `
    <h3>Nivel meso: contextualización institucional rural y urbana</h3>
    <p>El nivel meso no cambia el currículo nacional, sino que lo contextualiza. Así, Matemática deja de enseñarse como un conjunto de procedimientos aislados y se convierte en una herramienta para interpretar la realidad.</p>
    <div class="cards-2">
      <article class="info-card">
        <h4>Zona rural</h4>
        <p><strong>Estándar:</strong> el estudiante aplica geometría y medida para calcular áreas, perímetros y distribución de espacios productivos.</p>
        <ul>
          <li>Cálculo de áreas de cultivo.</li>
          <li>Medición de terrenos y comparación de parcelas.</li>
          <li>Estimación de semillas, costos y rendimiento.</li>
        </ul>
      </article>
      <article class="info-card">
        <h4>Zona urbana</h4>
        <p><strong>Estándar:</strong> el estudiante utiliza geometría y estadística para analizar espacios, movilidad, consumo y organización de datos.</p>
        <ul>
          <li>Cálculo de áreas comunitarias.</li>
          <li>Análisis de rutas y tiempos de movilidad.</li>
          <li>Interpretación de datos de consumo y educación financiera.</li>
        </ul>
      </article>
    </div>
  `,
  micro: `
    <h3>Nivel micro: adaptación para discalculia en funciones</h3>
    <p>La adaptación microcurricular responde al principio de inclusión, porque facilita la comprensión de funciones mediante representaciones visuales, progresivas y contextualizadas.</p>
    <div class="micro-grid">
      <article><span>Tema</span>Introducción a funciones lineales.</article>
      <article><span>Necesidad educativa</span>Dificultad para comprender relaciones numéricas, secuencias y representación simbólica.</article>
      <article><span>Estrategias</span>Tablas de valores, gráficos con colores, material concreto, ejemplos cotidianos y ejercicios graduados.</article>
      <article><span>Actividad inicial</span>Relacionar cantidad y costo: “si un cuaderno cuesta 1 dólar, ¿cuánto cuestan 2, 3 o 4 cuadernos?”.</article>
      <article><span>Representación visual</span>Completar una tabla y ubicar pares ordenados en el plano cartesiano con apoyo de colores.</article>
      <article><span>Evaluación diferenciada</span>Permitir uso de tabla, calculadora básica, explicación oral y ejercicios con menor carga simbólica.</article>
    </div>
  `,
  prompts: `
    <h3>Prompts aplicados y finalidad académica</h3>
    <p>Las herramientas de IA se utilizaron como apoyo metodológico, pero la decisión pedagógica final corresponde al equipo.</p>
    <div class="prompt-block"><strong>ChatGPT nivel meso:</strong><br>“Propón un estándar de aprendizaje de Matemática para una zona rural donde se use la geometría aplicada al cálculo de áreas de cultivo, versus una zona urbana.”</div>
    <div class="prompt-block"><strong>MagicSchool.ai / ChatGPT nivel micro:</strong><br>“Diseña una adaptación microcurricular para un estudiante con discalculia en el tema de funciones. Incluye actividades visuales, recursos concretos, evaluación diferenciada y una secuencia progresiva de aprendizaje.”</div>
  `
};

const entropyData = [
  { year: "1996", x: 2.0, y: 1.6, note: "Menor flexibilidad; currículo con limitaciones de precisión y articulación." },
  { year: "2010–2011", x: 3.0, y: 2.7, note: "Aumenta la organización curricular y la claridad de indicadores." },
  { year: "2011", x: 3.3, y: 3.0, note: "El BGU fortalece continuidad y tronco común." },
  { year: "2016", x: 4.2, y: 3.8, note: "Bloques curriculares y destrezas con criterios de desempeño." },
  { year: "2023", x: 4.9, y: 4.8, note: "Mayor complejidad y flexibilidad por enfoque competencial." }
];

const aiRows = [
  ["Hitos curriculares y Matemática", "ChatGPT y Perplexity AI", "Organización comparativa y verificación en fuentes oficiales.", "Captura del prompt y enlaces consultados."],
  ["Nivel meso", "ChatGPT", "Propuesta de contextualización rural y urbana.", "Captura del prompt y tabla adaptada."],
  ["Nivel micro", "MagicSchool.ai y ChatGPT", "Adaptación para discalculia en funciones.", "Captura de la sugerencia IEP o adaptación generada."],
  ["Dashboard", "Claude.ai, HTML, CSS, JavaScript y GitHub Pages", "Diseño, codificación y publicación del recurso interactivo.", "Captura del prototipo, repositorio y enlace publicado."],
  ["Gráfico de entropía", "Napkin.ai", "Elaboración visual de complejidad vs. flexibilidad.", "Imagen exportada o captura del gráfico."],
  ["Reflexión crítica", "Consensus.app y Perplexity AI", "Búsqueda académica y análisis crítico sobre reformas y aprendizaje.", "Captura de artículos y síntesis del equipo."],
  ["Publicación", "GitHub Pages", "Publicación del dashboard interactivo en un enlace web.", "Enlace publicado: https://jcujilema99.github.io/DashboardG7/"]
];

const references = [
  ["González, J., Castillo-Canales, D., Creamer, M., & Ramos Jarrin, M. (2023). Misalignments and Incoherencies within Ecuador’s Education System: How Well Are Key Actors and Public Efforts Aligned towards Better Learning Outcomes? Research on Improving Systems of Education (RISE).", "https://doi.org/10.35489/BSG-RISE-WP_2023/137"],
  ["Herrera-Pavo, M. Á., Jaramillo-Baquerizo, C., & Valencia, V. H. (2025). Ecuador: Inserting the Country into the PISA Experience. En N. Crato & H. A. Patrinos (Eds.), Improving National Education Systems After COVID-19: Moving Forward After PIRLS 2021 and PISA 2022 (pp. 37-50). Springer Nature Switzerland.", "https://doi.org/10.1007/978-3-031-69284-0_3"],
  ["Ministerio de Educación del Ecuador. (2010). Actualización y Fortalecimiento Curricular de la Educación General Básica.", "https://educacion.gob.ec/wp-content/uploads/downloads/2013/03/ACLL.pdf"],
  ["Ministerio de Educación del Ecuador. (2011). Acuerdo Ministerial Nro. 242-11. Normativa para la implementación del nuevo currículo del Bachillerato.", "https://educacion.gob.ec/wp-content/uploads/downloads/2014/02/ACUERDO-242-11.pdf"],
  ["Ministerio de Educación del Ecuador. (2016a). Currículo de EGB y BGU. Área de Matemática.", "https://educacion.gob.ec/wp-content/uploads/downloads/2016/03/M1.pdf"],
  ["Ministerio de Educación del Ecuador. (2016b). Instructivo: planificaciones curriculares para el Sistema Nacional de Educación.", "https://www.educacion.gob.ec/wp-content/uploads/downloads/2016/03/planificaciones-curriculares.pdf"],
  ["Ministerio de Educación del Ecuador. (2016). Acuerdo Nro. MINEDUC-ME-2016-00020-A. Currículos de Educación General Básica y Bachillerato General Unificado.", "https://www.educacion.gob.ec/wp-content/uploads/downloads/2016/04/codificacion-acuerdo_mineduc-me-2016-00020.pdf"],
  ["Ministerio de Educación del Ecuador. (2023). Acuerdo Nro. MINEDUC-MINEDUC-2023-00008-A.", "https://educacion.gob.ec/wp-content/uploads/downloads/2023/03/MINEDUC-MINEDUC-2023-00008-A.pdf"],
  ["Ministerio de Educación del Ecuador. (2023). Acuerdo Nro. MINEDUC-MINEDUC-2023-00086-A. Marco Curricular Competencial de Aprendizajes.", "https://educacion.gob.ec/wp-content/uploads/downloads/2023/11/MINEDUC-MINEDUC-2023-00086-A.pdf"]
];

let chartProgress = 1;
let chartPoints = [];

document.addEventListener("DOMContentLoaded", () => {
  renderNcc("macro");
  renderTimeline(0);
  renderMathTable(mathRows);
  renderInnovation("meso");
  renderAiTable();
  renderReferences();
  drawEntropyChart(1);
  setupInteractions();
  setupNavSpy();
});

function renderNcc(key) {
  const data = nccData[key];
  document.getElementById("nccDetail").innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    <ul>${data.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
  `;
  document.querySelectorAll(".ncc-node").forEach(node => node.classList.toggle("active", node.dataset.ncc === key));
}

function renderTimeline(index) {
  const tabs = document.getElementById("timelineTabs");
  const content = document.getElementById("timelineContent");
  tabs.innerHTML = hitos.map((hito, i) => `
    <button class="timeline-tab ${i === index ? "active" : ""}" data-index="${i}">
      <strong>${hito.year}</strong>
      <span>${hito.title}</span>
    </button>
  `).join("");
  const hito = hitos[index];
  content.innerHTML = `
    <p class="eyebrow">Hito ${index + 1} de 5</p>
    <h3>${hito.year} · ${hito.title}</h3>
    <div class="badge-row">${hito.tags.map(tag => `<span class="badge">${tag}</span>`).join("")}</div>
    <p>${hito.summary}</p>
    <ul>
      <li><strong>Pertinencia matemática:</strong> ${hito.math}</li>
      <li><strong>Macro:</strong> ${hito.macro}</li>
      <li><strong>Meso:</strong> ${hito.meso}</li>
      <li><strong>Micro:</strong> ${hito.micro}</li>
    </ul>
  `;
  document.querySelectorAll(".timeline-tab").forEach(btn => btn.addEventListener("click", () => renderTimeline(Number(btn.dataset.index))));
}

function renderMathTable(rows) {
  document.getElementById("mathTableBody").innerHTML = rows.map(row => `
    <tr>
      <td><strong>${row.hito}</strong></td>
      <td>${row.organizacion}</td>
      <td>${row.lectura}</td>
      <td>${row.carga}</td>
      <td>${row.niveles}</td>
    </tr>
  `).join("");
}

function renderInnovation(key) {
  document.getElementById("innovationPanel").innerHTML = innovationContent[key];
  document.querySelectorAll("#innovationTabs button").forEach(btn => btn.classList.toggle("active", btn.dataset.innovation === key));
}

function renderAiTable() {
  document.getElementById("aiTableBody").innerHTML = aiRows.map(row => `
    <tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>
  `).join("");
}

function renderReferences() {
  document.getElementById("referencesList").innerHTML = references.map(([title, url]) => `
    <article class="ref-item">
      <strong>${title}</strong>
      <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
    </article>
  `).join("");
}

function setupInteractions() {
  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");
  const topButton = document.getElementById("topButton");
  const mathSearch = document.getElementById("mathSearch");
  const chartCanvas = document.getElementById("entropyChart");

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

  document.querySelectorAll(".ncc-node").forEach(btn => btn.addEventListener("click", () => renderNcc(btn.dataset.ncc)));
  document.querySelectorAll("#innovationTabs button").forEach(btn => btn.addEventListener("click", () => renderInnovation(btn.dataset.innovation)));

  mathSearch.addEventListener("input", event => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = mathRows.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(query)));
    renderMathTable(filtered);
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        showToast("Prompt copiado");
      } catch (error) {
        showToast("No se pudo copiar automáticamente");
      }
    });
  });

  document.getElementById("animateChart").addEventListener("click", animateChart);
  document.getElementById("resetChart").addEventListener("click", () => {
    drawEntropyChart(0.01);
    showToast("Gráfico reiniciado");
    setTimeout(animateChart, 250);
  });

  chartCanvas.addEventListener("mousemove", showChartTooltip);
  chartCanvas.addEventListener("mouseleave", () => document.getElementById("chartTooltip").style.display = "none");

  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    updateProgress();
    topButton.classList.toggle("show", window.scrollY > 650);
  });
  updateProgress();
}

function setupNavSpy() {
  const links = document.querySelectorAll(".nav-links a");
  const sections = [...links].map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-25% 0px -60% 0px" });
  sections.forEach(section => observer.observe(section));
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function animateChart() {
  let progress = 0;
  const timer = setInterval(() => {
    progress += 0.025;
    drawEntropyChart(Math.min(progress, 1));
    if (progress >= 1) clearInterval(timer);
  }, 16);
}

function drawEntropyChart(progress = 1) {
  chartProgress = progress;
  const canvas = document.getElementById("entropyChart");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const p = { left: 86, right: 58, top: 64, bottom: 82 };
  ctx.clearRect(0, 0, width, height);

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#ffffff");
  bg.addColorStop(1, "#edf6fa");
  ctx.fillStyle = bg;
  roundRect(ctx, 0, 0, width, height, 26);
  ctx.fill();

  drawGrid(ctx, width, height, p);
  drawAxes(ctx, width, height, p);

  const visible = entropyData.slice(0, Math.max(1, Math.ceil(entropyData.length * progress)));
  chartPoints = visible.map(item => ({
    ...item,
    px: map(item.x, 1, 5, p.left, width - p.right),
    py: map(item.y, 1, 5, height - p.bottom, p.top)
  }));

  ctx.strokeStyle = "#f5ae21";
  ctx.lineWidth = 5;
  ctx.beginPath();
  chartPoints.forEach((point, index) => index === 0 ? ctx.moveTo(point.px, point.py) : ctx.lineTo(point.px, point.py));
  ctx.stroke();

  chartPoints.forEach(point => {
    ctx.fillStyle = "#062f43";
    ctx.beginPath();
    ctx.arc(point.px, point.py, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f5ae21";
    ctx.beginPath();
    ctx.arc(point.px, point.py, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#062f43";
    ctx.font = "bold 16px Segoe UI, Arial";
    ctx.fillText(point.year, point.px + 18, point.py - 12);
    ctx.fillStyle = "#61758b";
    ctx.font = "13px Segoe UI, Arial";
    ctx.fillText(`E=${(point.x * point.y).toFixed(1)}`, point.px + 18, point.py + 8);
  });

  ctx.fillStyle = "#062f43";
  ctx.font = "bold 26px Segoe UI, Arial";
  ctx.fillText("Gráfico de entropía curricular", p.left, 34);
  ctx.fillStyle = "#61758b";
  ctx.font = "14px Segoe UI, Arial";
  ctx.fillText("Complejidad pedagógica vs. flexibilidad curricular · Escala cualitativa 1–5", p.left, 56);
}

function drawGrid(ctx, width, height, p) {
  ctx.strokeStyle = "rgba(6,47,67,.13)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#61758b";
  ctx.font = "13px Segoe UI, Arial";
  for (let i = 1; i <= 5; i++) {
    const x = map(i, 1, 5, p.left, width - p.right);
    const y = map(i, 1, 5, height - p.bottom, p.top);
    ctx.beginPath(); ctx.moveTo(x, p.top); ctx.lineTo(x, height - p.bottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(p.left, y); ctx.lineTo(width - p.right, y); ctx.stroke();
    ctx.fillText(String(i), x - 4, height - p.bottom + 24);
    ctx.fillText(String(i), p.left - 26, y + 4);
  }
}

function drawAxes(ctx, width, height, p) {
  ctx.strokeStyle = "#062f43";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(p.left, height - p.bottom);
  ctx.lineTo(width - p.right, height - p.bottom);
  ctx.moveTo(p.left, height - p.bottom);
  ctx.lineTo(p.left, p.top);
  ctx.stroke();

  ctx.fillStyle = "#062f43";
  ctx.font = "bold 18px Segoe UI, Arial";
  ctx.fillText("Complejidad", width / 2 - 50, height - 28);
  ctx.save();
  ctx.translate(30, height / 2 + 110);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Flexibilidad", 0, 0);
  ctx.restore();
}

function showChartTooltip(event) {
  const canvas = document.getElementById("entropyChart");
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const tooltip = document.getElementById("chartTooltip");
  const hit = chartPoints.find(point => Math.hypot(point.px - x, point.py - y) < 24);

  if (!hit) {
    tooltip.style.display = "none";
    return;
  }

  tooltip.innerHTML = `<strong>${hit.year}</strong><br>${hit.note}<br><small>Complejidad: ${hit.x} · Flexibilidad: ${hit.y}</small>`;
  tooltip.style.display = "block";
  tooltip.style.left = `${event.clientX - rect.left + 18}px`;
  tooltip.style.top = `${event.clientY - rect.top + 18}px`;
}

function map(value, min, max, start, end) {
  return start + ((value - min) * (end - start)) / (max - min);
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
