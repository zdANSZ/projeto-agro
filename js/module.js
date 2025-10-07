document.addEventListener('DOMContentLoaded', function() {
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

      // ALTERADO: Adicionado 'data-label' em cada célula (td)
      row.innerHTML = `
        <td data-label="ID">${req.id}</td>
        <td data-label="Requisito">${req.requisito}</td>
        <td data-label="Descrição">${req.descricao}</td>
        <td data-label="Tipo">${req.tipo}</td>
        <td data-label="Prioridade"><span class="priority-badge priority-${priorityClass}">${req.prioridade}</span></td>
      `;
      tableBody.appendChild(row);
    });
  }
});