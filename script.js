const hitos = [
  {
    year: "1996",
    title: "Reforma Curricular Consensuada",
    focus: "Transición hacia una base nacional común con énfasis en contenidos mínimos y destrezas fundamentales.",
    badges: ["Contenido", "Secuencia prescrita", "Flexibilidad baja"],
    macro: "El nivel macro define orientaciones nacionales, contenidos mínimos y destrezas fundamentales. La lógica curricular se aproxima más a la cobertura temática que a la demostración de competencias complejas.",
    meso: "La institución contextualiza de forma limitada: el PCI tiende a organizar la ejecución de contenidos más que a diseñar experiencias institucionales diferenciadas.",
    micro: "El aula prioriza explicación, ejercitación y verificación de procedimientos. La atención a NEE aparece menos integrada al diseño didáctico ordinario.",
    math: "Predomina el aprendizaje procedimental. Álgebra, Geometría y Estadística se trabajan como contenidos con menor articulación hacia modelización, lectura de datos y competencias."
  },
  {
    year: "2010",
    title: "Actualización y Fortalecimiento Curricular",
    focus: "Respuesta a problemas de desarticulación, desactualización e incongruencia entre contenidos, tiempo y secuencia.",
    badges: ["Destrezas", "Fortalecimiento", "Articulación"],
    macro: "El macro currículo reorganiza aprendizajes y fortalece la progresión. El propósito es corregir vacíos y mejorar coherencia entre áreas y años.",
    meso: "El PCI gana relevancia para secuenciar destrezas y organizar tiempos según necesidades institucionales.",
    micro: "La planificación de aula empieza a vincular destreza, actividad, recurso y evaluación con mayor claridad que en el modelo anterior.",
    math: "Matemática se orienta más a resolución de problemas y progresión de destrezas; crece la importancia de relaciones, patrones, medición e interpretación de información."
  },
  {
    year: "2016",
    title: "Currículo EGB y BGU",
    focus: "Ajuste curricular flexible, abierto y organizado por destrezas con criterios de desempeño, indicadores y bloques curriculares.",
    badges: ["DCD", "Bloques", "Flexibilidad"],
    macro: "El currículo nacional organiza áreas, objetivos, bloques, destrezas con criterios de desempeño e indicadores de evaluación.",
    meso: "La institución toma decisiones en PEI/PCI para contextualizar, priorizar y articular destrezas según su proyecto educativo.",
    micro: "El docente diseña experiencias de aula con actividades, recursos, criterios de evaluación, adaptación y retroalimentación.",
    math: "El área de Matemática se estructura explícitamente en Álgebra y Funciones, Geometría y Medida, y Estadística y Probabilidad, desde EGB hasta BGU."
  },
  {
    year: "2021",
    title: "Currículo Priorizado con énfasis en competencias",
    focus: "Priorización de aprendizajes esenciales y recuperación de competencias comunicacionales, matemáticas, digitales y socioemocionales.",
    badges: ["Priorización", "Competencias", "Aprendizajes esenciales"],
    macro: "El macro currículo prioriza aprendizajes fundamentales para sostener continuidad educativa y fortalecer competencias clave.",
    meso: "La institución adapta la priorización según brechas reales de aprendizaje, modalidad de atención y recursos disponibles.",
    micro: "La clase se enfoca en actividades de alto impacto, evaluación formativa y recuperación de aprendizajes esenciales.",
    math: "La competencia matemática se expresa en resolver problemas, interpretar información, usar datos y conectar el aprendizaje con situaciones reales."
  },
  {
    year: "2023",
    title: "Marco Curricular Competencial de Aprendizajes",
    focus: "Precisa competencias, perfiles de salida y elementos de competencia para orientar la trayectoria educativa.",
    badges: ["Competencias", "Perfil de salida", "Currículo 2030"],
    macro: "El nivel macro formula competencias y perfiles de salida como horizonte de aprendizaje para todo el Sistema Educativo Nacional.",
    meso: "El PCI debe traducir las competencias en proyectos, secuencias, indicadores institucionales y contextos de aplicación.",
    micro: "La planificación de aula evidencia desempeño mediante resolución de problemas, inclusión, retroalimentación y transferencia a contextos reales.",
    math: "Matemática se proyecta como lenguaje para modelar, argumentar, tomar decisiones, leer datos, comparar escenarios y resolver problemas complejos."
  }
];

const ncc = {
  macro: {
    title: "Nivel Macro: política curricular nacional",
    text: "Define el marco común obligatorio: fines educativos, perfiles de salida, competencias, áreas, bloques, destrezas, indicadores y orientaciones de evaluación. En Matemática, establece qué aprendizajes deben desarrollarse y cómo se relacionan con el perfil del bachiller.",
    points: [
      "Responsable principal: Ministerio de Educación.",
      "Producto curricular: currículo nacional, currículo priorizado y marco competencial.",
      "Decisión clave: qué Matemática debe aprenderse y con qué nivel de profundidad.",
      "Riesgo: una reforma puede quedarse en documento si no llega al PCI y al aula."
    ]
  },
  meso: {
    title: "Nivel Meso: modelización institucional del PCI",
    text: "Contextualiza el currículo nacional en el PEI y PCI. La institución decide cómo secuenciar, priorizar y adaptar las destrezas considerando territorio, recursos, brechas de aprendizaje, identidad institucional y necesidades del estudiantado.",
    points: [
      "Responsable principal: institución educativa y equipos docentes.",
      "Producto curricular: PCI, PCA, proyectos interdisciplinarios y acuerdos de evaluación.",
      "Decisión clave: cómo convertir las competencias nacionales en experiencias institucionales.",
      "Ejemplo rural: geometría aplicada a áreas de cultivo; ejemplo urbano: estadística para movilidad y consumo."
    ]
  },
  micro: {
    title: "Nivel Micro: planificación inclusiva de aula",
    text: "Convierte el currículo en una experiencia concreta. Integra objetivo, actividad, recurso, estrategia, evaluación, retroalimentación y adaptación. En este dashboard se ejemplifica con un sprint para discalculia en funciones lineales.",
    points: [
      "Responsable principal: docente.",
      "Producto curricular: planificación de clase, instrumento de evaluación y adaptación curricular.",
      "Decisión clave: cómo evidenciar aprendizaje en estudiantes reales.",
      "Inclusión: apoyos visuales, reducción de carga cognitiva, evaluación flexible y uso de material concreto."
    ]
  }
};

const mathRows = [
  {
    hito: "1996",
    carga: "Organización más rígida del tiempo curricular; prioridad en cubrir contenidos mínimos y secuencias prescritas. La carga se interpreta como tiempo para avanzar temas.",
    algebra: "Operaciones, expresiones y procedimientos algebraicos con énfasis mecánico.",
    geometria: "Figuras, medidas y fórmulas trabajadas de forma principalmente operacional.",
    estadistica: "Menor presencia curricular y baja integración con lectura crítica de datos.",
    ncc: "Macro prescribe; Meso organiza cumplimiento; Micro ejecuta contenidos y ejercicios."
  },
  {
    hito: "2010",
    carga: "Mejora la articulación entre contenidos, destrezas y tiempo disponible; se corrigen incongruencias detectadas en el modelo anterior.",
    algebra: "Relaciones, patrones y resolución de problemas con mayor progresión.",
    geometria: "Medición y razonamiento espacial conectados con problemas prácticos.",
    estadistica: "Mayor visibilidad de representación e interpretación de información.",
    ncc: "Macro fortalece destrezas; Meso secuencia; Micro relaciona destreza-actividad-evaluación."
  },
  {
    hito: "2016",
    carga: "BGU organizado en períodos semanales; Bachillerato en Ciencias mantiene 40 períodos y Técnico 45, con períodos institucionales adicionales según modalidad.",
    algebra: "Bloque 1: Álgebra y Funciones. Relaciones, funciones, modelación y análisis simbólico.",
    geometria: "Bloque 2: Geometría y Medida. Magnitudes, formas, representación y solución de problemas.",
    estadistica: "Bloque 3: Estadística y Probabilidad. Lectura de datos, análisis, probabilidad e interpretación.",
    ncc: "Macro define bloques y DCD; Meso contextualiza PCI; Micro planifica desempeño evaluable."
  },
  {
    hito: "2021",
    carga: "Priorización de aprendizajes esenciales; el tiempo se usa estratégicamente para recuperar y consolidar competencias clave.",
    algebra: "Funciones y relaciones usadas para resolver problemas contextualizados.",
    geometria: "Áreas, escalas, medición y representación espacial en situaciones reales.",
    estadistica: "Gráficos, tablas y datos para comprensión de fenómenos cotidianos.",
    ncc: "Macro prioriza; Meso identifica brechas; Micro diseña actividades de alto impacto."
  },
  {
    hito: "2023",
    carga: "El tiempo curricular se orienta al desarrollo progresivo de competencias, perfiles de salida y evidencias de desempeño.",
    algebra: "Modelización, análisis funcional, argumentación y toma de decisiones.",
    geometria: "Geometría aplicada a problemas territoriales, productivos, tecnológicos y ciudadanos.",
    estadistica: "Pensamiento crítico con datos, incertidumbre, probabilidad y ciudadanía digital.",
    ncc: "Macro define competencias; Meso diseña trayectorias; Micro evidencia desempeño e inclusión."
  }
];

const concretion = {
  rural: {
    title: "Modelización institucional: PCI rural",
    text: "Estándar de aprendizaje contextualizado: el estudiante utiliza geometría, proporcionalidad y medición para calcular áreas de cultivo, estimar producción y analizar costos básicos de una actividad agrícola local.",
    blocks: [
      ["Álgebra y funciones", "Modelar relación entre superficie cultivada y producción estimada."],
      ["Geometría y medida", "Calcular áreas de parcelas rectangulares, triangulares o compuestas."],
      ["Estadística", "Registrar datos de producción, comparar promedios y representar resultados."],
      ["Evidencia", "Plano simple del terreno, tabla de datos y explicación de decisiones."],
      ["Recursos", "Cinta métrica, croquis, hojas cuadriculadas, calculadora y datos del entorno."],
      ["Evaluación", "Rúbrica: precisión de cálculo, interpretación, argumentación y pertinencia contextual."]
    ]
  },
  urbano: {
    title: "Modelización institucional: PCI urbano",
    text: "Estándar de aprendizaje contextualizado: el estudiante interpreta funciones, porcentajes y datos estadísticos para tomar decisiones sobre movilidad, consumo digital, emprendimiento escolar o presupuesto familiar.",
    blocks: [
      ["Álgebra y funciones", "Comparar planes de internet, transporte o ventas mediante funciones lineales."],
      ["Geometría y medida", "Usar escalas, rutas y distancias en mapas urbanos."],
      ["Estadística", "Analizar encuestas de consumo, movilidad o uso de tecnología."],
      ["Evidencia", "Gráfico, tabla comparativa y recomendación sustentada."],
      ["Recursos", "Datos de barrio, formularios, calculadora, hoja de cálculo y mapas."],
      ["Evaluación", "Rúbrica: lectura de datos, modelo matemático, decisión y comunicación."]
    ]
  },
  sprint: {
    title: "Sprint de planificación: discalculia en funciones lineales",
    text: "Tema: funciones lineales. Necesidad educativa: discalculia. Objetivo accesible: reconocer una función como relación entre dos variables usando objetos, tabla, gráfico y explicación verbal antes de pasar a la expresión simbólica.",
    blocks: [
      ["Momento 1 · Activación", "Usar una tienda escolar: cantidad de productos y precio total."],
      ["Momento 2 · Representación concreta", "Manipular fichas o tarjetas de precio para formar pares cantidad-precio."],
      ["Momento 3 · Tabla visual", "Completar una tabla con colores: variable independiente y dependiente."],
      ["Momento 4 · Gráfico guiado", "Ubicar puntos en plano cartesiano con escala marcada y pocos datos."],
      ["Momento 5 · Verbalización", "Explicar oralmente: si aumenta la cantidad, aumenta el precio."],
      ["IA especializada", "MagicSchool.ai puede apoyar con sugerencias tipo IEP para ajustar instrucción, evaluación y apoyos visuales."]
    ]
  },
  evaluacion: {
    title: "Evaluación inclusiva para funciones",
    text: "La evaluación no mide rapidez de cálculo, sino comprensión de relación funcional, interpretación de datos y comunicación del procedimiento. Se aplican apoyos sin reducir el objetivo esencial.",
    blocks: [
      ["Instrumento", "Lista de cotejo + rúbrica breve de desempeño."],
      ["Criterio 1", "Completa una tabla con al menos tres pares ordenados."],
      ["Criterio 2", "Ubica puntos con apoyo de escala y colores."],
      ["Criterio 3", "Interpreta el patrón con lenguaje cotidiano."],
      ["Criterio 4", "Relaciona la situación con una expresión simple cuando sea posible."],
      ["Retroalimentación", "Inmediata, visual y centrada en el procedimiento correcto."]
    ]
  }
};

const entropyData = [
  { year: 1996, c: 2.3, f: 1.4, note: "Baja flexibilidad y complejidad centrada en cobertura." },
  { year: 2010, c: 3.1, f: 2.5, note: "Mayor articulación y fortalecimiento de destrezas." },
  { year: 2016, c: 4.1, f: 3.4, note: "Bloques, DCD, indicadores y currículo flexible." },
  { year: 2021, c: 4.5, f: 4.1, note: "Priorización por competencias y aprendizajes esenciales." },
  { year: 2023, c: 5.0, f: 4.8, note: "Competencias, perfiles de salida y elementos de competencia." }
];

const aiTools = [
  ["ChatGPT", "Organización del análisis, matriz comparativa, redacción crítica y mejora del diseño del dashboard.", "Evidencia: captura del prompt y fragmento del resultado usado."],
  ["Perplexity AI", "Verificación de fuentes oficiales del Ministerio de Educación y contraste de hitos curriculares.", "Evidencia: capturas con enlaces oficiales consultados."],
  ["MagicSchool.ai", "Sugerencias de adaptación para estudiante con discalculia en funciones lineales.", "Evidencia: captura de IEP Suggestion o adaptación generada."],
  ["Napkin.ai", "Conceptualización visual del gráfico de entropía curricular: complejidad vs. flexibilidad.", "Evidencia: captura o exportación del esquema base."],
  ["Consensus.app", "Búsqueda de literatura sobre implementación curricular, rendimiento y brechas entre reforma y aula.", "Evidencia: artículos guardados y síntesis breve."],
  ["Claude.ai Artifacts", "Referencia técnica para prototipar dashboards interactivos en HTML/React.", "Evidencia: captura del prototipo o comparación de estructura."]
];

const sources = [
  ["Currículo de Matemática · Ministerio de Educación", "Bloques de Álgebra y Funciones, Geometría y Medida, Estadística y Probabilidad; pensamiento crítico y resolución de problemas.", "https://educacion.gob.ec/curriculo-matematica/"],
  ["Malla Curricular BGU · Ministerio de Educación", "Organización de Bachillerato en Ciencias con 40 períodos semanales y Bachillerato Técnico con 45 períodos.", "https://educacion.gob.ec/malla-curricular-bachillerato-general-unificado/"],
  ["Currículo Priorizado", "Énfasis en competencias comunicacionales, matemáticas, digitales y socioemocionales.", "https://educacion.gob.ec/curriculo-priorizado/"],
  ["Marco Curricular Competencial 2023", "Competencias, perfiles de salida y elementos de competencia del Sistema Educativo Nacional.", "https://educacion.gob.ec/marco-curricular-competencial-de-aprendizajes/"],
  ["PISA-D Ecuador · INEVAL", "Base para reflexionar sobre brechas entre currículo, implementación y rendimiento.", "https://evaluaciones.evaluacion.gob.ec/BI/educacion-en-ecuador-resultados-de-pisa-para-el-desarrollo/"],
  ["Literatura de implementación curricular", "Soporte para explicar que una reforma requiere formación docente, recursos y evaluación alineada.", "https://journals.sagepub.com/doi/abs/10.1177/2158244015581018"]
];

let chartProgress = 0;
let chartTimer = null;
let plottedPoints = [];

window.addEventListener("DOMContentLoaded", () => {
  renderTimeline(0);
  renderNcc("macro");
  renderMathTable();
  renderConcretion("rural");
  renderAiTools();
  renderSources();
  setupEvents();
  setupReveal();
  setupNavigationObserver();
  updateSimulator();
  animateChart();
});

function renderTimeline(activeIndex) {
  const years = document.getElementById("timelineYears");
  const detail = document.getElementById("timelineDetail");
  years.innerHTML = hitos.map((h, index) => `
    <button class="year-btn ${index === activeIndex ? "active" : ""}" type="button" data-index="${index}">
      <strong>${h.year}</strong><span>${h.title}</span>
    </button>
  `).join("");
  const h = hitos[activeIndex];
  detail.innerHTML = `
    <p class="eyebrow">${h.focus}</p>
    <h3>${h.year} · ${h.title}</h3>
    <div class="badges">${h.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
    <p><strong>Lectura matemática:</strong> ${h.math}</p>
    <div class="detail-grid">
      <article><strong>Macro</strong><p>${h.macro}</p></article>
      <article><strong>Meso</strong><p>${h.meso}</p></article>
      <article><strong>Micro</strong><p>${h.micro}</p></article>
    </div>
  `;
  document.querySelectorAll(".year-btn").forEach(btn => {
    btn.addEventListener("click", () => renderTimeline(Number(btn.dataset.index)));
  });
}

function renderNcc(level) {
  const panel = document.getElementById("nccPanel");
  const item = ncc[level];
  panel.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <ul>${item.points.map(p => `<li>${p}</li>`).join("")}</ul>
  `;
  document.querySelectorAll(".flow-node").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.level === level);
  });
}

function renderMathTable() {
  const tbody = document.getElementById("mathTableBody");
  const q = document.getElementById("mathSearch")?.value.toLowerCase().trim() || "";
  const year = document.getElementById("mathFilter")?.value || "todos";
  const filtered = mathRows.filter(row => {
    const matchYear = year === "todos" || row.hito === year;
    const text = Object.values(row).join(" ").toLowerCase();
    return matchYear && text.includes(q);
  });
  tbody.innerHTML = filtered.map(row => `
    <tr>
      <td><strong>${row.hito}</strong></td>
      <td>${row.carga}</td>
      <td>${row.algebra}</td>
      <td>${row.geometria}</td>
      <td>${row.estadistica}</td>
      <td>${row.ncc}</td>
    </tr>
  `).join("");
}

function renderConcretion(tab) {
  const panel = document.getElementById("concretionPanel");
  const data = concretion[tab];
  panel.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    <div class="concretion-grid">
      ${data.blocks.map(([title, text]) => `
        <article class="concretion-mini"><strong>${title}</strong><p>${text}</p></article>
      `).join("")}
    </div>
  `;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
}

function renderAiTools() {
  document.getElementById("aiGrid").innerHTML = aiTools.map(([name, use, evidence]) => `
    <article><h3>${name}</h3><p>${use}</p><small><strong>Evidencia:</strong> ${evidence}</small></article>
  `).join("");
}

function renderSources() {
  document.getElementById("sourcesGrid").innerHTML = sources.map(([title, note, url]) => `
    <article class="source-card"><strong>${title}</strong><p>${note}</p><a href="${url}" target="_blank" rel="noopener noreferrer">Abrir fuente</a></article>
  `).join("");
}

function setupEvents() {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    document.body.classList.toggle("nav-open");
  });
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  });
  document.querySelectorAll("[data-jump]").forEach(btn => {
    btn.addEventListener("click", () => document.querySelector(btn.dataset.jump).scrollIntoView({ behavior: "smooth" }));
  });
  document.querySelectorAll(".flow-node").forEach(btn => btn.addEventListener("click", () => renderNcc(btn.dataset.level)));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.addEventListener("click", () => renderConcretion(btn.dataset.tab)));
  document.getElementById("mathSearch").addEventListener("input", renderMathTable);
  document.getElementById("mathFilter").addEventListener("change", renderMathTable);
  document.getElementById("restartChart").addEventListener("click", animateChart);
  document.getElementById("entropySpeed").addEventListener("input", animateChart);
  document.getElementById("backTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  ["sCurriculum", "sTeacher", "sResources", "sEvaluation"].forEach(id => document.getElementById(id).addEventListener("input", updateSimulator));
  window.addEventListener("scroll", handleScroll);
  const canvas = document.getElementById("entropyCanvas");
  canvas.addEventListener("mousemove", handleChartHover);
  canvas.addEventListener("mouseleave", () => document.getElementById("chartTooltip").style.display = "none");
}

function handleScroll() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
  document.getElementById("progressBar").style.width = `${progress}%`;
  document.getElementById("backTop").classList.toggle("show", window.scrollY > 700);
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .14 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupNavigationObserver() {
  const links = [...document.querySelectorAll(".main-nav a")];
  const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));
}

function updateSimulator() {
  const c = Number(document.getElementById("sCurriculum").value);
  const t = Number(document.getElementById("sTeacher").value);
  const r = Number(document.getElementById("sResources").value);
  const e = Number(document.getElementById("sEvaluation").value);
  document.getElementById("oCurriculum").textContent = c;
  document.getElementById("oTeacher").textContent = t;
  document.getElementById("oResources").textContent = r;
  document.getElementById("oEvaluation").textContent = e;
  const supportAverage = (t + r + e) / 3;
  const gapPenalty = Math.abs(c - supportAverage) * 4;
  const score = Math.max(0, Math.min(100, Math.round(((supportAverage / 10) * 100) - gapPenalty)));
  document.getElementById("resultValue").textContent = `${score}%`;
  document.getElementById("meterFill").style.width = `${score}%`;
  const label = score >= 80 ? "Cambio sostenible" : score >= 60 ? "Cambio en desarrollo" : "Brecha de implementación";
  document.getElementById("resultLabel").textContent = label;
}

function animateChart() {
  clearInterval(chartTimer);
  chartProgress = 0;
  const speed = Number(document.getElementById("entropySpeed")?.value || 3);
  const step = 0.012 + speed * 0.006;
  chartTimer = setInterval(() => {
    chartProgress += step;
    if (chartProgress >= 1) {
      chartProgress = 1;
      clearInterval(chartTimer);
    }
    drawEntropyChart(chartProgress);
  }, 16);
}

function drawEntropyChart(progress = 1) {
  const canvas = document.getElementById("entropyCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const pad = { left: 78, right: 58, top: 70, bottom: 76 };
  plottedPoints = [];
  ctx.clearRect(0, 0, w, h);

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#ffffff");
  bg.addColorStop(1, "#edf6fa");
  ctx.fillStyle = bg;
  rounded(ctx, 0, 0, w, h, 24);
  ctx.fill();

  ctx.fillStyle = "rgba(249, 173, 22, .13)";
  ctx.beginPath();
  ctx.arc(w - 110, 100, 170, 0, Math.PI * 2);
  ctx.fill();

  drawGrid(ctx, w, h, pad);
  drawAxes(ctx, w, h, pad);

  const visible = entropyData.slice(0, Math.max(1, Math.ceil(entropyData.length * progress)));
  ctx.strokeStyle = "#f9ad16";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  visible.forEach((p, i) => {
    const x = map(p.c, 1, 5, pad.left, w - pad.right);
    const y = map(p.f, 1, 5, h - pad.bottom, pad.top);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  visible.forEach(p => {
    const x = map(p.c, 1, 5, pad.left, w - pad.right);
    const y = map(p.f, 1, 5, h - pad.bottom, pad.top);
    const e = (p.c * p.f).toFixed(1);
    plottedPoints.push({ ...p, x, y, e });

    ctx.fillStyle = "#053247";
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f9ad16";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#053247";
    ctx.font = "bold 16px Segoe UI, Arial";
    ctx.fillText(String(p.year), x + 18, y - 12);
    ctx.fillStyle = "#617487";
    ctx.font = "13px Segoe UI, Arial";
    ctx.fillText(`E=${e}`, x + 18, y + 7);
  });

  ctx.fillStyle = "#053247";
  ctx.font = "bold 24px Segoe UI, Arial";
  ctx.fillText("Entropía curricular 1996–2023", pad.left, 36);
  ctx.fillStyle = "#617487";
  ctx.font = "14px Segoe UI, Arial";
  ctx.fillText("Escala 1–5 · Elaboración propia: complejidad pedagógica × flexibilidad curricular", pad.left, 58);
}

function drawGrid(ctx, w, h, pad) {
  ctx.strokeStyle = "rgba(5, 50, 71, .12)";
  ctx.fillStyle = "#617487";
  ctx.font = "13px Segoe UI, Arial";
  for (let i = 1; i <= 5; i++) {
    const x = map(i, 1, 5, pad.left, w - pad.right);
    const y = map(i, 1, 5, h - pad.bottom, pad.top);
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, h - pad.bottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
    ctx.fillText(i, x - 4, h - pad.bottom + 24);
    ctx.fillText(i, pad.left - 28, y + 4);
  }
}

function drawAxes(ctx, w, h, pad) {
  ctx.strokeStyle = "#053247";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(pad.left, h - pad.bottom);
  ctx.lineTo(w - pad.right, h - pad.bottom);
  ctx.moveTo(pad.left, h - pad.bottom);
  ctx.lineTo(pad.left, pad.top);
  ctx.stroke();
  ctx.fillStyle = "#053247";
  ctx.font = "bold 18px Segoe UI, Arial";
  ctx.fillText("Complejidad pedagógica", w / 2 - 110, h - 25);
  ctx.save();
  ctx.translate(26, h / 2 + 105);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Flexibilidad curricular", 0, 0);
  ctx.restore();
}

function handleChartHover(event) {
  const canvas = event.currentTarget;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const point = plottedPoints.find(p => Math.hypot(p.x - x, p.y - y) < 22);
  const tooltip = document.getElementById("chartTooltip");
  if (!point) { tooltip.style.display = "none"; return; }
  tooltip.style.display = "block";
  tooltip.style.left = `${event.clientX - rect.left + 14}px`;
  tooltip.style.top = `${event.clientY - rect.top + 14}px`;
  tooltip.innerHTML = `<strong>${point.year}</strong><br>C=${point.c} · F=${point.f} · E=${point.e}<br>${point.note}`;
}

function map(value, min, max, start, end) {
  return start + ((value - min) * (end - start)) / (max - min);
}

function rounded(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}
