// ===================== MOTIVOS DE CANCELAMENTO =====================

const argumentos = {
    "1": "Sinto muito que o nosso atendimento não tenha atendido às suas expectativas ou que, de alguma forma, tenha sido desagradável. Essa não é a experiência que buscamos oferecer, e queremos muito poder resolver qualquer situação relacionada ao seu atendimento. Estamos totalmente à disposição para te ajudar e esclarecer qualquer dúvida sobre o seu curso. Pode contar conosco.",
    "2": "Entendo que esteja avaliando outras instituições, é natural querer o melhor para a sua formação. Mas é importante lembrar que a UNICESUMAR é reconhecida entre as melhores EADs do país, com qualidade e suporte que fazem a diferença no dia a dia do aluno. Se quiser conversar melhor ou tirar dúvidas para tomar a melhor decisão, estamos à disposição.",
    "3": "Sinto muito que esteja passando por esse momento delicado. Entendo perfeitamente como o desemprego pode impactar nosso planejamento, principalmente em relação ao financeiro e aos estudos. Mas é importante lembrar que continuar a graduação é um investimento no seu futuro e pode, inclusive, te ajudar a conquistar novas oportunidades de emprego. Se quiser, existem alternativas que podemos te apresentar para te apoiar nesse momento. Conte com a gente.",
    "4": "Entendo que, muitas vezes, a correria do dia a dia acaba dificultando a organização dos estudos. Mas, por ser EAD, o seu curso oferece muito mais flexibilidade, com prazos longos e aulas gravadas, inclusive as aulas ao vivo. Com apenas 20 a 30 minutos por dia, já é possível manter um bom desempenho. Estamos aqui para te ajudar a organizar sua rotina e seguir com seus estudos no seu ritmo.",
    "5": "Compreendo que questões financeiras às vezes nos obrigam a rever planos, especialmente em relação aos estudos. Mas é importante lembrar que a graduação é um investimento em você e no seu futuro, abrindo portas para melhores oportunidades e salários. Sabemos que esse momento pode ser desafiador, mas existem alternativas que podem facilitar sua permanência. Estamos aqui para te apoiar no que for preciso.",
    "6": "Parabéns pelo nascimento do seu filho, esse com certeza é um momento de grandes mudanças. Sabemos que a rotina fica diferente, mas o formato EAD do seu curso te dá liberdade para estudar no seu tempo e no seu ritmo, sem pressões. Existem alternativas que podem te ajudar a conciliar os estudos com essa nova fase. Se quiser, estamos prontos para te auxiliar.",
    "7": "Primeiramente, parabéns por esse momento tão especial. Imagino que esteja vivendo uma fase de muitas mudanças, e queremos que saiba que pode contar conosco para o que precisar. Mesmo com as novidades que virão, seu curso, por ser EAD, oferece toda a flexibilidade para você estudar no seu ritmo e no seu tempo. Se quiser, podemos te apresentar alternativas que ajudam a manter os estudos sem sobrecarga.",
    "8": "Sinto muito por essa situação. Às vezes, por algum mal-entendido ou erro no sistema, podem acontecer cadastros sem o conhecimento do aluno. Estamos totalmente disponíveis para esclarecer o que aconteceu e apresentar as melhores alternativas diante dessa situação. Pode contar com a gente.",
    "9": "Entendo perfeitamente como se identificar com o curso é essencial para o seu desenvolvimento. Mas, caso sinta que esse não é o caminho ideal, existem alternativas, como a possibilidade de mudar de curso ou explorar outras áreas. Estamos aqui para te orientar, tirar dúvidas e te ajudar a encontrar a melhor solução.",
    "10": "Compreendo sua preocupação em relação à metodologia, mas quero tranquilizar você: nossa plataforma é bastante intuitiva e, conforme você for se familiarizando, vai perceber que os estudos se tornam mais naturais e organizados. Além disso, contamos com uma equipe pedagógica altamente capacitada para tirar suas dúvidas e te auxiliar em qualquer dificuldade. Pode contar com a gente.",
    "11": "Entendo que motivos pessoais às vezes nos fazem repensar decisões importantes. E, justamente por sabermos disso, nossa instituição oferece alternativas flexíveis para esses momentos. Queremos te ajudar a encontrar o melhor caminho, de forma tranquila e respeitosa. Se quiser conversar, estamos à disposição.",
    "12": "Imagino como essa situação deve estar sendo frustrante, mas estamos prontos para te ajudar a resolver qualquer problema técnico relacionado à plataforma ou aos seus estudos. Temos uma equipe técnica especializada que pode te orientar e buscar a melhor solução para você continuar os estudos sem preocupações. Pode contar conosco.",
    "13": "Parabéns pela conquista da sua bolsa PROUNI! Sabemos o quanto essa oportunidade é importante para o seu futuro. Lembrando que é possível transferir a sua bolsa para a UNICESUMAR, caso queira continuar com a gente e ainda aproveitar todos os benefícios da bolsa. Se quiser entender como funciona, estamos à disposição para te explicar direitinho.",
    "14": "Lamento muito saber que está passando por um momento delicado relacionado à saúde. Espero, de coração, que você consiga se recuperar da melhor forma possível. E saiba que estamos aqui para te auxiliar no que for preciso em relação aos seus estudos. Existem alternativas que podem facilitar esse período e te ajudar a seguir no seu tempo e no seu ritmo. Pode contar conosco."
};

// ===================== FRASE DE TRANSIÇÃO =====================

const fraseTransicao = "Mas para prosseguir com seu atendimento, eu preciso te passar algumas informações:";

// ===================== RECAPITULAÇÕES =====================

const recapitulacoes = {
    "1": "Novamente, peço desculpas por qualquer mal entendido em relação ao seu atendimento conosco, mas vamos te auxiliar.",
    "2": "Novamente, ressalto que atualmente a UNICESUMAR é uma das melhores instituições do país, estudar conosco é um diferencial.",
    "3": "Novamente, eu ressalto que compreendo que é um momento delicado, mas vamos te auxiliar em relação ao seu curso.",
    "4": "Novamente, entendo que a falta de tempo pode afetar nosso planejamento em relação aos estudos, mas podemos te auxiliar.",
    "5": "Novamente, entendo que o financeiro afeta todo o planejamento, mas como eu disse, é um investimento no seu futuro, e podemos te auxiliar.",
    "6": "Novamente, entendo que é um momento de muitas mudanças, mas estamos aqui para te auxiliar com os estudos.",
    "7": "Novamente, entendo que é um momento de muitas mudanças, mas estamos aqui para te auxiliar com os estudos.",
    "8": "Novamente peço desculpas pelo mal entendido, mas estamos aqui para esclarecer qualquer dúvida e te auxiliar neste momento.",
    "9": "Novamente, entendo perfeitamente que para ter um bom estudo, é necessário se identificar com o curso, mas vamos te auxiliar neste momento.",
    "10": "Novamente, sinto muito que neste momento você possua algumas ressalvas em relação à nossa metodologia ou plataforma, mas estamos disponíveis para te auxiliar.",
    "11": "Novamente, sinto muito que esteja passando por questões pessoais, mas estamos aqui para te ajudar neste momento delicado.",
    "12": "Novamente, sinto muito que esteja passando por questões técnicas, mas estamos disponíveis para te auxiliar e resolver qualquer problema com nossa plataforma.",
    "13": "Novamente, parabéns pela sua conquista, mas como eu disse, é possível manter seus estudos conosco usando sua bolsa PROUNI.",
    "14": "Novamente, sinto muito que esteja enfrentando esse momento delicado envolvendo a saúde, mas estamos aqui para te auxiliar neste momento delicado."
};

// ===================== FRASES POR CATEGORIA =====================

const frasesPorCategoria = {
    pedagogico: {
        ingressante: {
            Sim: "Verifiquei no sistema e você é um aluno ingressante, ou seja, iniciou seus estudos conosco recentemente, e isso te dá muitas vantagens, como por exemplo o fato que de no seu primeiro ano de curso, todas as provas e avaliações são online, então você faz tudo no seu computador e nem vai precisar fazer a prova presencialmente. O que facilita muito seu desenvolvimento nos estudos.",
            Não: "Verifiquei no sistema e você é um aluno que já está conosco faz um tempo, ou seja, já conhece nossa metodologia e nossa plataforma. Então tem uma certa familiaridade com o nosso sistema, mudar para outra metodologia pode acabar sendo um processo totalmente novo de adaptação, o que pode prejudicar seus estudos."
        },
        recomeco: {
            Sim: "No caso você fez o recomeço recentemente, então seu curso foi reiniciado, entendo que às vezes as coisas não saem conforme o planejado, mas aproveita essa oportunidade de recomeçar os estudos para investir no seu futuro."
        },
        desplugAtual: {
            Sim: "No caso, seu curso está pausado atualmente, então até o final do módulo atual você não estuda e não tem nenhuma mensalidade. Então oriento que mantenha o curso ativo até o fim da pausa para evitar qualquer interferência no benefício, pode ficar tranquilo que até o fim do módulo você não vai ter nenhuma cobrança ou obrigação com os estudos."
        }
    },
    engajamento: {
        aprovado: {
            Sim: "Inclusive você olhei no seu histórico, e você tem algumas aprovações, então você está tendo um bom desempenho e está evoluindo no seu curso."
        },
        atividades: {
            Sim: "Ademais, você até fez algumas atividades no módulo atual, então está bem próximo de ter suas notas e aprovações.",
            Não: "E se caso tenha perdido alguma atividade ou trabalho, saiba que você pode fazer as recuperações no final do módulo e garantir suas aprovações."
        },
        dependencias: {
            Sim: "No caso, atualmente no módulo atual você possui algumas dependências ou adaptações, mas saiba que se precisar podemos te auxiliar com elas, você não precisa necessariamente cursar elas agora, se desejar você pode fazer o cancelamento delas, assim sua grade curricular fica mais flexível."
        }
    },
    financeiro: {
        pagou: {
            Sim: "Em relação ao financeiro, é importante ressaltar que você já fez um certo investimento, pois já pagou algumas mensalidades. Cancelando agora, o investimento é perdido."
        },
        vencido: {
            Sim: "E verifiquei no sistema, atualmente você possui algumas pendências financeiras em relação à sua mensalidade, mas estamos disponíveis para te auxiliar em relação a estas pendências.",
            Não: "No momento você não tem nenhuma pendência financeira conosco, então é um momento bem tranquilo para manter os estudos."
        },
        cancelamentoVencido: {
            Sim: "Como você solicitou o cancelamento após o vencimento da mensalidade atual, cancelando agora, você teria que pagar por qualquer mensalidade vencida até a data de solicitação do cancelamento, então cancelando agora, você teria um prejuízo financeiro, mas estamos aqui para te auxiliar neste momento."
        }
    }
};

// ===================== BENEFÍCIOS =====================

const beneficios = {
    prorrogacao: "Se for te auxiliar, podemos prorrogar sua mensalidade atual ou a próxima para o final do ano, assim a mensalidade seria prorrogada para Dezembro, você ganha mais tempo para fazer o pagamento e poderia focar nos estudos neste momento, sem a pressão de fazer o pagamento da mensalidade, o que acha?",
    descontosPossivel: "Para ajudar financeiramente você a manter o curso, podemos aumentar seu desconto conosco, assim sua mensalidade fica financeiramente mais acessível, o que pode facilitar os estudos, o que acha?",
    dependenciasBeneficio: "Como no módulo atual você possui algumas dependências ou adaptações, se desejar podemos cancelar elas, assim sua grade curricular fica mais flexível, facilitando os estudos, inclusive com o cancelamento das dependências ou adaptações, sua mensalidade ficaria mais barata, pois seriam menos disciplinas no módulo atual. O que acha? Caso no módulo atual, você possuir apenas dependências ou adaptações, e cancelar todas elas, sua matrícula ficaria pausada até o próximo módulo, sem mensalidades.",
    recomecoPossivel: "No caso, se desejar podemos reiniciar o seu curso do zero para você ter uma nova oportunidade no próximo módulo. Com o recomeço, todo investimento que você fez até agora seria reaproveitado nas mensalidades do próximo módulo, ou seja, você não perde o que já investiu. E se caso tiver alguma pendência financeira, ela será perdoada, então com o recomeço você ganha uma nova chance de estudar sem nenhuma pendência financeira. E não tem alteração na mensalidade e você mantém seus descontos, além de que ganha um tempo para se preparar com calma porque as aulas seriam apenas no próximo módulo. Então é uma opção bem interessante para você neste momento, e caso no próximo módulo você de fato precisar fazer o cancelamento, você pode falar conosco que a gente vê uma forma de te auxiliar novamente. O que acha?",
    desplugAtualPossivel: "No caso, se desejar, podemos fazer uma pausa temporária, que seria o desplug do módulo atual, se aceitar a proposta. Seu curso ficaria pausado até o final do módulo, e enquanto pausado você não estuda e não tem mensalidades, e se caso tiver alguma pendência financeira referente ao módulo atual, ela seria perdoada, ou seja, se tiver alguma mensalidade vencida atualmente, com esse benefício, a mensalidade seria desconsiderada e você não precisaria pagar por ela e poderia ficar um tempo pausado, sem cobranças e ainda iria manter seus descontos. Ao final da pausa você toma sua decisão final, se vai querer continuar com o curso ou não, caso de fato precise do cancelamento, não teria nenhuma cobrança do período pausado, e se quiser continuar, você continua o curso normalmente no próximo módulo, o que acha? É uma alternativa bem interessante ao cancelamento definitivo neste primeiro momento.",
    baixaMensalidade: "No caso, como você teve poucos acessos nos últimos módulos e acabou acumulando algumas mensalidades, se for te auxiliar podemos verificar a possibilidade de perdoar todas estas pendências financeiras, de forma que você possa retomar os estudos no próximo módulo sem estas pendências financeiras, é uma opção bem interessante porque vai te dar a chance de continuar os estudos e vai te auxiliar financeiramente, pois as pendência financeiras seriam perdoadas."
};

// ===================== FRASES MOTIVACIONAIS =====================

const frasesMotivacionais = [
    "Hoje não temos frases motivacionais, se quiser desistir, desista!",
    "Hoje é um ótimo dia para reter alunos!",
    "Lembre-se: o aluno só cancela se você deixar. E a gente não deixa.",
    "Motivação do dia: finge que acredita na retenção e vai.",
    "A frase motivacional de hoje foi cancelada. Mas o aluno ainda não.",
    "Você é incrível. Mais incrível ainda se salvar esse atendimento.",
    "Nem todo herói usa capa. Alguns usam o botão \"Iniciar Atendimento\".",
    "Se tudo der errado, tenta de novo. E finge que é estratégia.",
    "Sorria! Você está a uma frase de salvar um aluno (ou não).",
    "Retenção não é magia. É insistência com educação e um toque de desespero.",
    "Que suas retenções sejam Sônicas!"
];
