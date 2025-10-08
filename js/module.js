//document.addEventListener('DOMContentLoaded', function() {
  if (typeof currentModuleId === 'undefined') {
    console.error("A variável 'currentModuleId' não foi definida na página HTML.");
    return;
  }
  
  const moduleData = projectData[currentModuleId];

  if (!moduleData) {
    console.error(`Módulo com ID '${currentModuleId}' não encontrado em data.js.`);
    document.getElementById('module-title').textContent = "Erro: Módulo não encontrado!";
    return;
  }

  // Atualiza o título da página e do card
  document.title = moduleData.title;
  document.getElementById('module-title').textContent = moduleData.title;

  const tableBody = document.getElementById('requirements-tbody');
  tableBody.innerHTML = ''; // Limpa qualquer conteúdo existente

  // Preenche a tabela com os requisitos
  if(moduleData.requirements.length === 0){
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 5;
    cell.textContent = "Nenhum requisito cadastrado para este módulo.";
    cell.style.textAlign = "center";
    row.appendChild(cell);
    tableBody.appendChild(row);
  } else {
    moduleData.requirements.forEach(req => {
      const row = document.createElement('tr');
      const priorityClass = req.prioridade.toLowerCase();

      row.innerHTML = `
        <td>${req.id}</td>
        <td>${req.requisito}</td>
        <td>${req.descricao}</td>
        <td>${req.tipo}</td>
        <td><span class="priority-badge priority-${priorityClass}">${req.prioridade}</span></td>
      `;
      tableBody.appendChild(row);
    });
  }

  // --- INÍCIO DA NOVA LÓGICA DE NAVEGAÇÃO ---
  const navContainer = document.getElementById('module-nav-container');
  if (navContainer) {
    // 1. Pega todos os IDs dos módulos e os ordena numericamente
    const allModuleIds = Object.keys(projectData).sort((a, b) => {
      return parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);
    });

    // 2. Encontra o índice do módulo atual na lista ordenada
    const currentIndex = allModuleIds.indexOf(currentModuleId);

    // 3. Determina o ID do módulo anterior e do próximo
    const prevModuleId = currentIndex > 0 ? allModuleIds[currentIndex - 1] : null;
    const nextModuleId = currentIndex < allModuleIds.length - 1 ? allModuleIds[currentIndex + 1] : null;

    let prevButtonHTML = '<div></div>'; // Placeholder para manter o alinhamento
    if (prevModuleId) {
      const prevModuleNumber = prevModuleId.split('-')[1];
      prevButtonHTML = `<a href="modulo-${prevModuleNumber}.html" class="nav-button prev">&larr; Módulo Anterior</a>`;
    }

    let nextButtonHTML = '<div></div>'; // Placeholder para manter o alinhamento
    if (nextModuleId) {
      const nextModuleNumber = nextModuleId.split('-')[1];
      nextButtonHTML = `<a href="modulo-${nextModuleNumber}.html" class="nav-button next">Próximo Módulo &rarr;</a>`;
    }
    
    // 4. Insere os botões no container
    navContainer.innerHTML = prevButtonHTML + nextButtonHTML;
  }
  // --- FIM DA NOVA LÓGICA DE NAVEGAÇÃO ---
});