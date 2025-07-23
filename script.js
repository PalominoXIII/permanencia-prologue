let atendimentos = [
    {}, {}, {}, {}, {} // Um objeto para cada aluno
];
let alunoAtual = 0; // Índice do aluno atualmente em atendimento

let motivoSelecionado = null; // variável global para guardar o motivo

function trocarAluno(index) {
    alunoAtual = index;
    motivoSelecionado = null;

    // Atualiza visual dos botões
    document.querySelectorAll(".botao-aluno").forEach(botao => {
        botao.classList.remove("aluno-ativo");
    });
    const botoes = document.querySelectorAll(".botao-aluno");
    if (botoes[index]) {
        botoes[index].classList.add("aluno-ativo");
    }

    const aluno = atendimentos[alunoAtual];
    const divResultado = document.getElementById("resultadoArgumentacao");

    // Preenche campos básicos
    document.getElementById("nome").value = aluno.nome || "";
    document.getElementById("curso").value = aluno.curso || "";
    document.getElementById("ra").value = aluno.ra || "";

    divResultado.innerHTML = "";

    if (!aluno.etapa) return;

    // Frase motivacional no topo
    divResultado.innerHTML = gerarFraseMotivacional();

    if (aluno.etapa === "motivo") {
        let msg = `
            <h1 class="texto-inicial-template">Confirme os dados com o aluno:</h1>
            <h2 class="texto-inicial-template">Apenas para confirmar, converso com: ${aluno.nome}, do curso: ${aluno.curso}, do RA: ${aluno.ra}?</h2>
            <button id="btnAvancar" onclick="solicitarMotivoCancelamento()">Avançar</button>
        `;
        divResultado.innerHTML += msg;

    } else if (aluno.etapa === "informacoes" || aluno.etapa === "argumentacao-pendente") {
        solicitarMotivoCancelamento();

    } else if (aluno.etapa === "argumentacao") {
        divResultado.innerHTML += `
            <h2>Argumentação Final:</h2>
            <div class="caixa-argumentacao">${aluno.argumentacaoFinal}</div>
        `;
    }
}

function funcaoPrincipal() {
    confirmarDados();
}

function confirmarDados() {
    let nome = document.getElementById("nome").value;
    let curso = document.getElementById("curso").value;
    let ra = document.getElementById("ra").value;

    atendimentos[alunoAtual].nome = nome;
    atendimentos[alunoAtual].curso = curso;
    atendimentos[alunoAtual].ra = ra;
    atendimentos[alunoAtual].etapa = "motivo";

    let divResultado = document.getElementById("resultadoArgumentacao");
    divResultado.innerHTML = gerarFraseMotivacional();

    let mensagemTemplate = `
        <h1 class="texto-inicial-template">Confirme os dados com o aluno:</h1>
        <h2 class="texto-inicial-template">Apenas para confirmar, converso com: ${nome}, do curso: ${curso}, do RA: ${ra}?</h2>
        <button id="btnAvancar" onclick="solicitarMotivoCancelamento()">Avançar</button>
    `;

    divResultado.innerHTML += mensagemTemplate;
}

function solicitarMotivoCancelamento() {
    document.getElementById("btnAvancar").remove();
    let divResultado = document.getElementById("resultadoArgumentacao");

    let motivoSalvo = atendimentos[alunoAtual].motivo || "";

    let opcoes = [
        { value: "1", texto: "Atendimento" },
        { value: "2", texto: "Concorrência" },
        { value: "3", texto: "Desempregado" },
        { value: "4", texto: "Falta de Tempo" },
        { value: "5", texto: "Financeiro" },
        { value: "6", texto: "Gravidez - Ainda não nasceu" },
        { value: "7", texto: "Gravidez - Já nasceu" },
        { value: "8", texto: "Não reconhece a matrícula" },
        { value: "9", texto: "Não se identificou com o curso" },
        { value: "10", texto: "Pedagógico" },
        { value: "11", texto: "Pessoal" },
        { value: "12", texto: "Problemas Técnicos" },
        { value: "13", texto: "Prouni" },
        { value: "14", texto: "Saúde" }
    ];

    let selectHTML = `<select id="motivoCancelamento">
        <option value="" disabled ${motivoSalvo === "" ? "selected" : ""}>Selecione um motivo</option>
    `;

    opcoes.forEach(op => {
        let selecionado = motivoSalvo === op.value ? "selected" : "";
        selectHTML += `<option value="${op.value}" ${selecionado}>${op.texto}</option>`;
    });

    selectHTML += `</select>`;

    let mensagem = `
        <h2 class="texto-inicial-template">Confirme com o aluno o motivo do cancelamento e marque aqui:</h2>
        ${selectHTML}
    `;

    divResultado.innerHTML += mensagem;
    divResultado.innerHTML += `<button id="btnAvancar" onclick="informacoesMatricula()">Avançar</button>`;

    atendimentos[alunoAtual].etapa = "informacoes";

    setTimeout(() => {
        const select = document.getElementById("motivoCancelamento");
        if (select) {
            // Atualiza a variável global e o objeto de atendimento ao alterar a seleção
            select.addEventListener("change", () => {
                motivoSelecionado = select.value;
                atendimentos[alunoAtual].motivo = motivoSelecionado;
            });
        }
    }, 0);
}

function informacoesMatricula() {
    document.getElementById("btnAvancar").remove();

    let divResultado = document.getElementById("resultadoArgumentacao");

    let mensagem = `
    <h2 class="texto-inicial-template">Agora faça uma análise da matrícula do aluno e preencha as informações:</h2>

    <div class="grupo-perguntas">
        <h3>🟣 PEDAGÓGICO</h3>
        <p>O aluno é ingressante?</p>
        <div class="grupo-radio">
            <input type="radio" name="ingressante" value="Sim"> SIM
            <input type="radio" name="ingressante" value="Não"> NÃO
        </div>

        <p>O aluno fez desplug no último módulo?</p>
        <div class="grupo-radio">
            <input type="radio" name="desplugUltimo" value="Sim"> SIM
            <input type="radio" name="desplugUltimo" value="Não"> NÃO
        </div>

        <p>O aluno fez recomeço?</p>
        <div class="grupo-radio">
            <input type="radio" name="recomeco" value="Sim"> SIM
            <input type="radio" name="recomeco" value="Não"> NÃO
        </div>

        <p>Atualmente, o aluno está desplugado?</p>
        <div class="grupo-radio">
            <input type="radio" name="desplugAtual" value="Sim"> SIM
            <input type="radio" name="desplugAtual" value="Não"> NÃO
        </div>
    </div>

    <div class="grupo-perguntas">
        <h3>🔵 ENGAJAMENTO</h3>
        <p>O aluno tem disciplinas aprovadas?</p>
        <div class="grupo-radio">
            <input type="radio" name="aprovado" value="Sim"> SIM
            <input type="radio" name="aprovado" value="Não"> NÃO
        </div>

        <p>O aluno fez atividades no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="atividades" value="Sim"> SIM
            <input type="radio" name="atividades" value="Não"> NÃO
        </div>

        <p>O aluno tem dependências ou adaptações no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="dependencias" value="Sim"> SIM
            <input type="radio" name="dependencias" value="Não"> NÃO
        </div>

        <p>O aluno só possui dependências ou adaptações no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="apenasDependencias" value="Sim"> SIM
            <input type="radio" name="apenasDependencias" value="Não"> NÃO
        </div>
    </div>

    <div class="grupo-perguntas">
        <h3>🟡 FINANCEIRO</h3>
        <p>O aluno pagou mensalidades?</p>
        <div class="grupo-radio">
            <input type="radio" name="pagou" value="Sim"> SIM
            <input type="radio" name="pagou" value="Não"> NÃO
        </div>

        <p>O aluno possui mensalidades vencidas?</p>
        <div class="grupo-radio">
            <input type="radio" name="vencido" value="Sim"> SIM
            <input type="radio" name="vencido" value="Não"> NÃO
        </div>

        <p>O aluno solicitou o cancelamento após o vencimento da mensalidade atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="cancelamentoVencido" value="Sim"> SIM
            <input type="radio" name="cancelamentoVencido" value="Não"> NÃO
        </div>
    </div>

    <div class="grupo-perguntas">
        <h3>🟢 ANÁLISE DE BENEFÍCIOS</h3>
        <p>O aluno pode receber uma prorrogação de mensalidade para Dezembro?</p>
        <div class="grupo-radio">
            <input type="radio" name="prorrogacao" value="Sim"> SIM
            <input type="radio" name="prorrogacao" value="Não"> NÃO
        </div>

        <p>O aluno pode receber mais descontos?</p>
        <div class="grupo-radio">
            <input type="radio" name="descontosPossivel" value="Sim"> SIM
            <input type="radio" name="descontosPossivel" value="Não"> NÃO
        </div>

        <p>O aluno possui dependências ou adaptações no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="dependenciasBeneficio" value="Sim"> SIM
            <input type="radio" name="dependenciasBeneficio" value="Não"> NÃO
        </div>

        <p>O aluno pode fazer recomeço no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="recomecoPossivel" value="Sim"> SIM
            <input type="radio" name="recomecoPossivel" value="Não"> NÃO
        </div>

        <p>O aluno pode fazer desplug no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="desplugAtualPossivel" value="Sim"> SIM
            <input type="radio" name="desplugAtualPossivel" value="Não"> NÃO
        </div>

        <p>O aluno pode fazer baixa de mensalidades no módulo atual?</p>
        <div class="grupo-radio">
            <input type="radio" name="baixaMensalidade" value="Sim"> SIM
            <input type="radio" name="baixaMensalidade" value="Não"> NÃO
        </div>
    </div>

    <button id="btnGerar" onclick="gerarArgumentacao()">Gerar Argumentação</button>
    `;

    divResultado.innerHTML += mensagem;
    atendimentos[alunoAtual].etapa = "argumentacao-pendente";
}

function gerarArgumentacao() {
    const divResultado = document.getElementById("resultadoArgumentacao");
    let textoFinal = "";

    const motivoID = atendimentos[alunoAtual].motivo;
    if (!motivoID) {
        alert("Selecione o motivo do cancelamento antes de prosseguir.");
        return;
    }

    // Título da primeira parte
    textoFinal += "<strong>Argumentação inicial:</strong><br><br>";

    // Parte 1: argumento do motivo + transição
    textoFinal += argumentos[motivoID] + "<br><br>";
    textoFinal += fraseTransicao + "<br><br>";

    // Parte 2: frases personalizadas
    const perguntas = [
        { categoria: "pedagogico", nome: "ingressante" },
        { categoria: "pedagogico", nome: "desplugUltimo" },
        { categoria: "pedagogico", nome: "recomeco" },
        { categoria: "pedagogico", nome: "desplugAtual" },
        { categoria: "engajamento", nome: "aprovado" },
        { categoria: "engajamento", nome: "atividades" },
        { categoria: "engajamento", nome: "dependencias" },
        { categoria: "engajamento", nome: "apenasDependencias" },
        { categoria: "financeiro", nome: "pagou" },
        { categoria: "financeiro", nome: "vencido" },
        { categoria: "financeiro", nome: "cancelamentoVencido" }
    ];

    let respostas = {};

    perguntas.forEach(p => {
        const input = document.querySelector(`input[name="${p.nome}"]:checked`);
        if (input) {
            const valor = input.value;
            respostas[p.nome] = valor;

            if (
                frasesPorCategoria[p.categoria] &&
                frasesPorCategoria[p.categoria][p.nome] &&
                frasesPorCategoria[p.categoria][p.nome][valor]
            ) {
                textoFinal += frasesPorCategoria[p.categoria][p.nome][valor] + "<br><br>";
            }
        }
    });

    atendimentos[alunoAtual].respostas = respostas;

    // Recapitulação
    if (recapitulacoes[motivoID]) {
        textoFinal += recapitulacoes[motivoID] + "<br><br>";
    }

    // Título da segunda parte
    textoFinal += "<strong>Segunda argumentação com oferta de benefícios:</strong><br><br>";
    textoFinal += "Além disso, quero te apresentar algumas alternativas que podem te auxiliar:<br><br>";

    const beneficiosCheck = [
        "prorrogacao",
        "descontosPossivel",
        "dependenciasBeneficio",
        "recomecoPossivel",
        "desplugAtualPossivel",
        "baixaMensalidade"
    ];

    let beneficiosAdicionados = false;

    beneficiosCheck.forEach(nome => {
        const input = document.querySelector(`input[name="${nome}"]:checked`);
        if (input && input.value === "Sim" && beneficios[nome]) {
            textoFinal += beneficios[nome] + "<br><br>";
            beneficiosAdicionados = true;
        }
    });

    // Caso especial de cancelamento após vencimento
    if (
        respostas["vencido"] === "Sim" &&
        respostas["cancelamentoVencido"] === "Sim" &&
        frasesPorCategoria["financeiro"]["cancelamentoVencido"] &&
        frasesPorCategoria["financeiro"]["cancelamentoVencido"]["Sim"]
    ) {
        textoFinal += frasesPorCategoria["financeiro"]["cancelamentoVencido"]["Sim"] + "<br><br>";
    }

    if (!beneficiosAdicionados) {
        textoFinal += "No momento, nenhuma alternativa aplicável foi selecionada. Caso tenha dúvidas, estou à disposição para explicar melhor.<br>";
    }

    // Exibir resultado
    divResultado.innerHTML += `
        <h2>Argumentação Final:</h2>
        <div class="caixa-argumentacao">${textoFinal}</div>
    `;

    // Salvar a argumentação renderizada
    atendimentos[alunoAtual].etapa = "argumentacao";
    atendimentos[alunoAtual].argumentacaoFinal = textoFinal;
}

function gerarFraseMotivacional() {
    const index = Math.floor(Math.random() * frasesMotivacionais.length);
    const frase = frasesMotivacionais[index];
    return `<p class="frase-motivacional"><em>${frase}</em></p>`;
}

function apagarAtendimento() {
    document.getElementById("nome").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("ra").value = "";
    document.getElementById("resultadoArgumentacao").innerHTML = "";
    motivoSelecionado = null;
    atendimentos[alunoAtual] = {};
}



