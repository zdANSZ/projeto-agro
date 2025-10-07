document.addEventListener('DOMContentLoaded', function() {
  const overviewBody = document.getElementById('overview-body');
  const priorityStats = document.getElementById('priority-stats');
  const navigationLinks = document.getElementById('navigation-links');

  if (!overviewBody || !priorityStats || !navigationLinks) {
    console.error('Um ou mais elementos do dashboard não foram encontrados no HTML.');
    return;
  }
  
  if (typeof projectData === 'undefined') {
    console.error('O arquivo data.js não foi carregado.');
    return;
  }

  let totalModules = 0;
  let totalRequirements = 0;
  const priorityCounts = { 'Essencial': 0, 'Importante': 0, 'Desejável': 0 };

  // --- NOVO: Variáveis para os dados do gráfico de módulos ---
  const moduleLabels = [];
  const moduleData = [];
  const moduleColors = ['#7dad7d', '#a7d7a7', '#558b55', '#3b6e3b', '#2f582f', '#c8e6c9'];


  const sortedModuleIds = Object.keys(projectData).sort((a, b) => {
    return parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);
  });

  sortedModuleIds.forEach(moduleId => {
    totalModules++;
    const module = projectData[moduleId];
    const reqCount = module.requirements.length;
    totalRequirements += reqCount;
    
    // --- NOVO: Coleta dados para o gráfico de módulos ---
    moduleLabels.push(module.title.split(':')[0]); // Pega só o "Módulo X"
    moduleData.push(reqCount);

    module.requirements.forEach(req => {
      if (req.prioridade in priorityCounts) {
        priorityCounts[req.prioridade]++;
      }
    });

    const linkItem = document.createElement('li');
    linkItem.innerHTML = `<a href="modulo-${moduleId.split('-')[1]}.html">${module.title}</a> <span>${reqCount} requisitos</span>`;
    navigationLinks.appendChild(linkItem);
  });
  
  // --- ATUALIZADO: Cria a nova estrutura HTML com espaço para o gráfico ---
  overviewBody.innerHTML = `
    <div class="overview-stats-container">
      <div class="overview-item">
        <div class="overview-number">${totalModules}</div>
        <div class="overview-label">Módulos</div>
      </div>
      <div class="overview-item">
        <div class="overview-number">${totalRequirements}</div>
        <div class="overview-label">Requisitos</div>
      </div>
    </div>
    <div class="overview-chart-container">
        <canvas id="moduleChart"></canvas>
    </div>
  `;

  priorityStats.innerHTML = `
    <li><span class="priority-badge priority-essencial">🎯 Essencial</span> <span>${priorityCounts['Essencial']}</span></li>
    <li><span class="priority-badge priority-importante">⭐ Importante</span> <span>${priorityCounts['Importante']}</span></li>
    <li><span class="priority-badge priority-desejavel">👍 Desejável</span> <span>${priorityCounts['Desejável']}</span></li>
  `;

  // --- GRÁFICO 1: Distribuição por Prioridade (sem alteração) ---
  const ctxPriority = document.getElementById('priorityChart').getContext('2d');
  new Chart(ctxPriority, {
    type: 'bar',
    data: {
      labels: ['Essencial', 'Importante', 'Desejável'],
      datasets: [{
        label: 'Nº de Requisitos',
        data: [priorityCounts['Essencial'], priorityCounts['Importante'], priorityCounts['Desejável']],
        backgroundColor: [ 'rgba(224, 102, 102, 0.7)', 'rgba(241, 194, 50, 0.7)', 'rgba(147, 196, 125, 0.7)' ],
        borderColor: [ 'rgb(224, 102, 102)', 'rgb(241, 194, 50)', 'rgb(147, 196, 125)' ],
        borderWidth: 1
      }]
    },
    options: {
      color: 'rgba(255, 255, 255, 0.8)',
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1, color: 'rgba(255, 255, 255, 0.8)' }, grid: { color: 'rgba(255, 255, 255, 0.2)' } },
        x: { ticks: { color: 'rgba(255, 255, 255, 0.8)' }, grid: { color: 'rgba(255, 255, 255, 0.2)' } }
      },
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Requisitos por Prioridade', color: 'rgba(255, 255, 255, 0.8)' }
      }
    }
  });

  // --- NOVO GRÁFICO 2: Distribuição por Módulo ---
  const ctxModule = document.getElementById('moduleChart').getContext('2d');
  new Chart(ctxModule, {
      type: 'doughnut',
      data: {
          labels: moduleLabels,
          datasets: [{
              label: 'Requisitos',
              data: moduleData,
              backgroundColor: moduleColors,
              borderColor: 'rgba(0, 0, 0, 0.5)',
              borderWidth: 2
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Legenda desativada para economizar espaço
          },
          title: {
            display: true,
            text: 'Requisitos por Módulo',
            color: 'rgba(255, 255, 255, 0.8)'
          }
        }
      }
  });
});