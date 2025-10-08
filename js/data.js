//const projectData = {
  "modulo-0": {
    title: "Módulo 0: Estrutura da Fazenda e Configurações",
    requirements: [
      { id: "CG-1.1", requisito: "Cadastro Completo da Propriedade", descricao: "Permitir o registro da propriedade com Razão Social, CNPJ, Inscrição Estadual, endereço, e dados do CAR (Cadastro Ambiental Rural).", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-1.2", requisito: "Vínculo de Contatos", descricao: "Associar contatos à propriedade: proprietário, gerente geral, responsável técnico (agrônomo/veterinário) com dados de contato e credenciais (CREA/CRMV).", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-2.1", requisito: "Cadastro de Talhão Agrícola", descricao: "Permitir o cadastro de talhões com nome/número, área (ha), tipo de solo, topografia (plano, ondulado) e cultura anterior.", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-2.2", requisito: "Cadastro de Pasto/Piquete", descricao: "Permitir o cadastro de pastos com nome/número, área (ha), tipo de forrageira, capacidade de suporte (UA/ha) e status (em uso, em descanso, vedado).", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-2.3", requisito: "Cadastro de Outras Áreas", descricao: "Permitir o cadastro de áreas não produtivas como reservas legais, sedes, galpões, silos e corredores de manejo.", tipo: "RF", prioridade: "Importante" },
      { id: "CG-3.1", requisito: "Cadastro de Usuários", descricao: "Cadastrar usuários com login, senha e associação a um colaborador.", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-3.2", requisito: "Perfis de Acesso Customizáveis", descricao: "Permitir a criação de perfis (ex: 'Gerente', 'Veterinário', 'Operador') e a definição granular de permissões de leitura, escrita e exclusão para cada tela/módulo.", tipo: "RF", prioridade: "Essencial" },
      { id: "CG-3.3", requisito: "Log de Auditoria", descricao: "O sistema deve registrar todas as ações críticas (criação, alteração, exclusão de dados) realizadas por cada usuário, com data e hora.", tipo: "RNF", prioridade: "Importante" }
    ]
  },
  "modulo-1": {
    title: "Módulo 1: Topografia, Clima e Ambiente",
    requirements: [
      { id: "TA-1.1", requisito: "Sobreposição de Camadas no Mapa", descricao: "O usuário deve poder alternar e sobrepor diferentes visualizações no mapa: satélite, relevo, mapa de solo, mapa de produtividade (pós-colheita).", tipo: "RF", prioridade: "Importante" },
      { id: "TA-1.2", requisito: "Ferramentas de Medição", descricao: "Permitir que o usuário meça distâncias e áreas diretamente no mapa.", tipo: "RF", prioridade: "Desejável" },
      { id: "TA-1.3", requisito: "Marcação de Pontos de Interesse", descricao: "Permitir que o usuário adicione marcadores no mapa para identificar cochos, bebedouros, porteiras, caixas d'água, etc.", tipo: "RF", prioridade: "Importante" },
      { id: "TA-1.4", requisito: "Importação de Mapas Externos", descricao: "Permitir a importação de arquivos de georreferenciamento já existentes (formatos KML, Shapefile).", tipo: "RF", prioridade: "Desejável" },
      { id: "TA-2.1", requisito: "Registro Detalhado de Análise de Solo", descricao: "Permitir o upload de laudos de análise de solo e o registro dos resultados (macro/micronutrientes, pH, etc.) por ponto amostral dentro de um talhão.", tipo: "RF", prioridade: "Importante" },
      { id: "TA-2.2", requisito: "Integração com Estação Meteorológica", descricao: "Permitir a integração com estações meteorológicas (próprias ou de serviços de API) para coletar dados de chuva, temperatura, umidade e vento em tempo real.", tipo: "RF", prioridade: "Desejável" },
      { id: "TA-2.3", requisito: "Histórico Climático", descricao: "Armazenar e exibir o histórico de dados climáticos, permitindo comparações entre safras.", tipo: "RF", prioridade: "Desejável" }
    ]
  },
  "modulo-2": {
    title: "Módulo 2: Gestão de Pessoas e Tarefas",
    requirements: [
      { id: "GP-1.1", requisito: "Cadastro Detalhado de Pessoal", descricao: "Cadastrar informações completas: dados pessoais, documentação, vínculo (CLT, terceirizado), cargo, salário, data de admissão.", tipo: "RF", prioridade: "Essencial" },
      { id: "GP-1.2", requisito: "Controle de Exames e Documentos", descricao: "Anexar documentos (CNH, certificados) e controlar as datas de vencimento de exames (ASO) e certificações, com alertas automáticos para o gestor.", tipo: "RF", prioridade: "Importante" },
      { id: "GP-2.1", requisito: "Criação de Ordem de Serviço", descricao: "Permitir que um gestor crie uma OS, especificando a tarefa, o local (talhão/pasto), os equipamentos/máquinas necessários, os insumos a serem usados e o prazo.", tipo: "RF", prioridade: "Importante" },
      { id: "GP-2.2", requisito: "Atribuição e Acompanhamento de OS", descricao: "Atribuir a OS a um ou mais colaboradores e acompanhar seu status em tempo real (Pendente, Em Execução, Pausada, Concluída, Cancelada).", tipo: "RF", prioridade: "Importante" },
      { id: "GP-2.3", requisito: "Apontamento de Horas e Atividades", descricao: "O colaborador, via app, deve poder iniciar/finalizar uma OS, e o sistema deve registrar o tempo gasto. O colaborador também pode adicionar observações ou fotos.", tipo: "RF", prioridade: "Essencial" },
      { id: "GP-3.1", requisito: "Controle de Entrega de EPI", descricao: "Registrar a entrega de Equipamentos de Proteção Individual (EPIs) a cada colaborador, com data e assinatura (digital ou anexo).", tipo: "RF", prioridade: "Importante" }
    ]
  },
  "modulo-3": {
    title: "Módulo 3: Inventário e Gestão de Máquinas",
    requirements: [
      { id: "IM-1.1", requisito: "Ficha da Máquina/Implemento", descricao: "Cadastrar a máquina com todos os seus dados: tipo, marca, modelo, ano, placa, chassi, centro de custo, data de aquisição, valor de compra, apólice de seguro.", tipo: "RF", prioridade: "Essencial" },
      { id: "IM-1.2", requisito: "Controle de Componentes", descricao: "Cadastrar componentes de desgaste associados à máquina (ex: pneus, filtros), com data de instalação e vida útil esperada para planejar trocas.", tipo: "RF", prioridade: "Desejável" },
      { id: "IM-2.1", requisito: "Diário de Bordo Digital", descricao: "O operador, ao iniciar o uso, deve registrar o horímetro/odômetro inicial. Ao finalizar, o final. O sistema calcula o uso. Registro de abastecimentos (litros, preço, local).", tipo: "RF", prioridade: "Essencial" },
      { id: "IM-2.2", requisito: "Integração com Telemetria/GPS", descricao: "(Para máquinas compatíveis) Integrar-se ao sistema de GPS para obter localização em tempo real, velocidade, consumo de combustível e alertas de mau uso.", tipo: "RF", prioridade: "Desejável" },
      { id: "IM-3.1", requisito: "Plano de Manutenção Preventiva", descricao: "Criar planos de manutenção baseados em horímetro, KM ou tempo para cada máquina. O sistema deve gerar alertas automáticos de manutenções futuras.", tipo: "RF", prioridade: "Importante" },
      { id: "IM-3.2", requisito: "Abertura de OS de Manutenção", descricao: "Ao identificar um problema (corretiva) ou receber um alerta (preventiva), o sistema deve permitir a abertura de uma OS de manutenção, detalhando o serviço e as peças.", tipo: "RF", prioridade: "Importante" },
      { id: "IM-3.3", requisito: "Controle de Estoque de Peças", descricao: "Cadastrar peças de reposição no estoque, com controle de quantidade mínima e baixa automática quando utilizadas em uma OS de manutenção.", tipo: "RF", prioridade: "Desejável" },
      { id: "IM-3.4", requisito: "Análise de Custo de Manutenção", descricao: "O sistema deve gerar relatórios mostrando o custo total de manutenção por máquina, permitindo identificar os ativos mais problemáticos.", tipo: "RF", prioridade: "Importante" }
    ]
  },
  "modulo-4": {
    title: "Módulo 4: Gestão de Cultivo (Agrícola)",
    requirements: [
      { id: "GC-1.1", requisito: "Orçamento de Safra", descricao: "Permitir a criação de um orçamento detalhado por talhão, estimando custos com sementes, fertilizantes, defensivos, mão de obra e operações mecanizadas.", tipo: "RF", prioridade: "Importante" },
      { id: "GC-1.2", requisito: "Planejamento de Insumos", descricao: "Com base na área e na cultura, o sistema deve calcular a necessidade total de insumos para a safra, auxiliando no planejamento de compras.", tipo: "RF", prioridade: "Importante" },
      { id: "GC-2.1", requisito: "Registro de Plantio", descricao: "Registrar a operação de plantio com data, cultura, variedade/híbrido, densidade de sementes, profundidade e máquina utilizada.", tipo: "RF", prioridade: "Essencial" },
      { id: "GC-2.2", requisito: "Registro de Aplicação de Insumos", descricao: "Registrar pulverizações e adubações com data, produto, dose aplicada, alvo, responsável técnico, máquina e condições climáticas no momento da aplicação.", tipo: "RF", prioridade: "Essencial" },
      { id: "GC-2.3", requisito: "Monitoramento de Pragas e Doenças", descricao: "Permitir que o agrônomo registre pontos de monitoramento no talhão, com fotos e observações sobre o nível de infestação de pragas/doenças.", tipo: "RF", prioridade: "Importante" },
      { id: "GC-2.4", requisito: "Registro de Colheita", descricao: "Registrar a operação de colheita com data, produtividade (sc/ha), máquina e operador. O sistema deve atualizar o status do talhão para 'Colhido'.", tipo: "RF", prioridade: "Essencial" },
      { id: "GC-3.1", requisito: "Controle de Armazenagem", descricao: "Registrar a entrada da produção em silos/armazéns, com informações de peso, umidade, impurezas e talhão de origem, gerando lotes de armazenagem.", tipo: "RF", prioridade: "Importante" },
      { id: "GC-3.2", requisito: "Gestão de Vendas de Grãos", descricao: "Registrar contratos de venda, associando-os aos lotes armazenados. O sistema deve dar baixa no estoque e gerar um relatório de resultado (R$ / ha).", tipo: "RF", prioridade: "Importante" },
      { id: "GC-3.3", requisito: "Rastreabilidade da Produção", descricao: "O sistema deve ser capaz de rastrear um lote de grãos vendido de volta ao silo, à data de colheita, ao talhão e a todos os insumos aplicados nele.", tipo: "RNF", prioridade: "Essencial" }
    ]
  },
  "modulo-5": {
    title: "Módulo 5: Gestão de Pecuária (Foco em Corte)",
    requirements: [
      { id: "GPec-1.1", requisito: "Ficha Individual do Animal", descricao: "Permitir o cadastro de um animal com identificador único (brinco SISBOV, tag eletrônica), raça, sexo, data de nascimento/aquisição, genealogia (pai/mãe).", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-1.2", requisito: "Registro de Aquisição", descricao: "Para animais comprados, registrar fornecedor, data, preço de compra (R$/cabeça ou R$/@), peso de entrada e anexar a Nota Fiscal e GTA (Guia de Trânsito Animal).", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-1.3", requisito: "Registro de Venda", descricao: "Registrar a venda do animal com comprador, data, peso de saída, preço de venda e resultado financeiro (lucro/prejuízo). Anexar NF e GTA de saída.", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-1.4", requisito: "Registro de Baixas/Mortalidade", descricao: "Registrar a morte de um animal com data, causa provável (doença, acidente, etc.) e opção para anexar laudo. O animal deve sair do inventário ativo.", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-2.1", requisito: "Calendário Sanitário", descricao: "Criar e gerenciar um calendário de vacinação e vermifugação para o rebanho. O sistema deve gerar alertas sobre manejos futuros.", tipo: "RF", prioridade: "Importante" },
      { id: "GPec-2.2", requisito: "Registro de Sanidade", descricao: "Registrar a aplicação de vacinas, medicamentos e vermífugos, especificando produto, dose, data e período de carência.", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-2.3", requisito: "Controle Reprodutivo", descricao: "Para matrizes, registrar coberturas/inseminações, diagnósticos de gestação, previsão de parto e registro de nascimentos (associando a cria à mãe).", tipo: "RF", prioridade: "Desejável" },
      { id: "GPec-3.1", requisito: "Registro de Pesagens Periódicas", descricao: "Permitir o registro de pesagens individuais ou por lote, com data. O sistema deve calcular automaticamente o Ganho Médio Diário (GMD) entre pesagens.", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-3.2", requisito: "Controle de Lotes por Pasto", descricao: "Registrar a movimentação de lotes entre pastos, controlando o número de animais, a data de entrada/saída, para gerenciar a taxa de lotação e o período de descanso do pasto.", tipo: "RF", prioridade: "Importante" },
      { id: "GPec-3.3", requisito: "Gestão Nutricional", descricao: "Cadastrar as dietas (sal mineral, ração) e registrar o fornecimento por lote, permitindo o cálculo do custo nutricional.", tipo: "RF", prioridade: "Importante" },
      { id: "GPec-4.1", requisito: "Relatório de Desempenho do Ciclo", descricao: "Para um animal ou lote, o sistema deve gerar um relatório completo: GMD total, custo total (aquisição + sanidade + nutrição), preço de venda e rentabilidade final.", tipo: "RF", prioridade: "Essencial" },
      { id: "GPec-4.2", requisito: "Curva de Ganho de Peso", descricao: "Exibir um gráfico da evolução do peso de um animal/lote ao longo do tempo.", tipo: "RF", prioridade: "Importante" },
      { id: "GPec-4.3", requisito: "Inventário do Rebanho", descricao: "Apresentar um dashboard em tempo real com o número total de animais, divididos por categoria (bezerros, garrotes, novilhas, touros), por lote e por pasto.", tipo: "RF", prioridade: "Essencial" }
    ]
  }
};