# Projeto Final - Reprograma 🚀

Turma Online 12 - Todas em Tech | Back-end | 2021 | 



## **Projeto não desista**

<h5 align="center">Status: 🚧 Em construção... 🚧</h5>

<p align="center"><img src="https://colegioguiness.com.br/wp-content/uploads/2021/05/Como-preparar-e-dar-aulas-online-mantendo-o-foco-dos-alunos.gif" alt="Educacão" style="zoom:50%;" />	</p>	

### 1. **Qual o problema?**
_______________________________________________________________________________
A educação para Jovens e Adultos sempre foi um grande desafio, devido a vários fatores: escolas que não estão preparadas para atender esse público, não tem horário adequado e diversos problemas. Mesmo com todos os desafios muitas pessoas já em fase adulta procuram voltar aos estudos, e principalmente se adequarem as novas tecnologias que se renovam a cada dia nos setores organizacionais e pessoais.

Pensando nesses publico e em todos os problemas que enfrentam foi desenvolvido o projeto não desista que foi criado com base no modelo Andragogico que se baseia nos seguintes princípios:

**Necessidade de saber:** Adultos precisam saber porque precisam aprender algo e qual o ganho que terão no processo.

**Autoconceito de aprendiz:** Adultos são responsáveis por suas decisões e por sua vida, portanto querem ser vistos e tratados como capazes de se autodirigir.

**Papel das experiências:** Para o adulto suas experiências são a base do seu aprendizado. As técnicas que aproveitam essa amplitude de diferenças individuais serão mais eficazes.

**Prontidão para aprender:** O adulto fica disposto a aprender quando a ocasião exige algum tipo de aprendizagem, relacionada a situações do seu dia a dia.

**Orientação para a aprendizagem:** O adulto aprende melhor quando os conceitos apresentados estão contextualizados para alguma aplicação e utilidade.

**Motivação:** Adultos são mais motivados a aprender por valores intrínsecos como autoestima, qualidade de vida, desenvolvimento, etc.

*Fonte: http://www.andragogiabrasil.com.br/artigos/premissas-andragogia*

### 2. **O que propõe o projeto?**
_______________________________________________________________________________
Criar uma comunidade para conectar Universitários e professores aposentados que gostariam de ensinar e auxiliar pessoas que voltaram a estudar na vida adulta.

Esse projeto foi desenvolvimento para atender um público que cresce todos os dias no Brasil, pessoas que voltaram a estudar devido aos critérios de contratação das empresas que cada dia exigem mais qualificações. Pensando também nas metodologias de ensino das escolas que muitas vezes deixam a desejar.

O projeto visa atender as necessidades do aluno , onde ele pode escolher o tema da aula expor sua dificuldades e combinar com o professor o melhor horário para as aulas.

Na aula pode ter outras pessoas que tem a mesma dificuldade, o professor vai encontrar a melhor forma de transmitir seu conhecimento usando fórmulas ou métodos mais modernos de resolver os exercícios e com situações do dia a dia.

A comunidade também abre há oportunidade dos universitários vivenciar a realidade do ensino para adultos e usar as horas para cumprir o estágio obrigatório.

```
"Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo."
Paulo Freire
```



<p align="center"><img src="https://educacao.imaginie.com.br/wp-content/uploads/2020/12/Pagina-de-materiais-gratuitos.gif" alt="Educacão" style="zoom:50%;" />	</p>



### 3. Sumário

- [Projeto não desista](#Projeto-não-desista)
- [1. Qual o problema?](https://github.com/anapsantos1/Projeto_Final_Reprograma#1-qual-o-problema)
- [2. O que propõe o projeto?](https://github.com/anapsantos1/Projeto_Final_Reprograma#2-o-que-prop%C3%B5e-o-projeto)
- [3. Sumário](https://github.com/anapsantos1/Projeto_Final_Reprograma#3-sum%C3%A1rio)
- [4. Como vai funcionar?](https://github.com/anapsantos1/Projeto_Final_Reprograma#4-como-vai-funcionar)
- [5. Tecnologias usadas:](https://github.com/anapsantos1/Projeto_Final_Reprograma#5-tecnologias-usadas)
- [6. Arquitetura MVC](https://github.com/anapsantos1/Projeto_Final_Reprograma#6--arquitetura-mvc)
- [7. Documentação da API](https://github.com/anapsantos1/Projeto_Final_Reprograma#7-documenta%C3%A7%C3%A3o-da-api)
- [7.1 Rotas de aluno](#Rotas-de-aluno)
- [7.2 Rotas de Professor](#Rotas-de-Professor)
- [7.3 Rotas da Agenda](#Rotas-da-Agenda)
- [7.4 Rotas da Mural](#Rotas-da-Mural)
- [7.5. Schemas](https://github.com/anapsantos1/Projeto_Final_Reprograma#75-schemas)
- [7.5.1 Alunos](#Alunos)
- [7.5.2 Professor](#Professor)
- [7.5.3 Agenda](#Agenda)
- [7.5.4 Mural](#Mural)
- [8. Regras de negocio:](https://github.com/anapsantos1/Projeto_Final_Reprograma#8-regras-de-negocio)
- [9 Implementações Futuras:](https://github.com/anapsantos1/Projeto_Final_Reprograma#9-implementa%C3%A7%C3%B5es-futuras)
- [Deseja Contribuir?](https://github.com/anapsantos1/Projeto_Final_Reprograma#10-deseja-contribuir)
- [Autor](https://github.com/anapsantos1/Projeto_Final_Reprograma#11-autor--woman_student)


### 4. Como vai funcionar?

_______________________________________________________________________________
O Projeto não desista é uma API RESTfull feita com a linguagen Javascript usando o node.js integrada com o banco de dados MongoDB. Está divida em 4 telas Aluno, Professor, Agenda e mural. A tela de aluno será usada para realização do cadastro do aluno, exclusão, alteração e na tela o professor pode visualizar todos os alunos cadastrados também.

Na tela do professor será usada para realização do cadastro do professor, exclusões.:Só será possível se o professor não tiver aulas agendadas, alteração e os alunos também podem visualizar todos os professores cadastrados.

Agenda nesta tela o professor pode criar as aulas com os temas mais solicitados pelos alunos, ele também pode incluir os alunos na turma de acordo com a dificuldade informada. O aluno também pode incluir seu nome na aula caso não tenha sido incluído. O professor pode visualizar todas as aulas agendadas por ele e o aluno pode visualizar as aulas que esta cadastrado. O professor pode excluir a aula.

O mural será um espaço onde alunos e professores vão postar vídeos de depoimentos positivos encorajadores, podem passar informações sobre universidades, cursos, sobre o vestibular e fazer indicação de livros.



## 5. Tecnologias usadas:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Robo 3T` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 6. 📁 Arquitetura MVC

```
 📁 naoDesista
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 agendaController.js
   |         |- 📄 alunosController.js
   |         |- 📄 professorController.js
   |         |- 📄 muralController.js
   |
   |    |- 📁 models
   |         |- 📄 agenda.js
   |         |- 📄 alunos.js
   |         |- 📄 mural.js
   |         |- 📄 professores.js
   |
   |    |- 📁 routes
   |         |- 📄 agendaRoutes.js
   |         |- 📄 alunosRoutes.js
   |         |- 📄 professorRoutes.js
   |         |- 📄 muralRoutes.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

### 7. Documentação da API:
_______________________________________________________________________________


<p align="center"><img src="https://acegif.com/wp-content/uploads/cat-typing-24.gif" width="150"></p>

**7.1** **Rotas de aluno**

Endpoint: {{URL}}aluno/

| Rota            | Método | Permissão de acesso | O que faz?                                      |
| --------------- | ------ | ------------------- | ----------------------------------------------- |
| '/ '            | GET    | Professor           | Busca todos os alunos                           |
| '/cadastro'     | POST   |                     | Cadastro do aluno                               |
| '/:id'          | GET    | Aluno               | Busca o aluno por ID                            |
| '/anything/:id' | PATCH  | Aluno               | O aluno pode alterar qualquer dados do cadastro |
| '/:id'          | DELETE | Aluno               | O aluno pode excluir o cadastro                 |

**7.2** **Rotas de Professor**

Endpoint: {{URL}}professor/

| Rota            | Método | Permissão de acesso | O que faz?                                          |
| --------------- | ------ | ------------------- | --------------------------------------------------- |
| '/ '            | GET    | Professor e Aluno   | Busca todos os professores                          |
| '/cadastro'     | POST   |                     | Cadastro do professor                               |
| '/:id'          | GET    | Professor           | Busca o professor por ID                            |
| '/anything/:id' | PATCH  | Professor           | O professor pode alterar qualquer dados do cadastro |
| '/:id'          | DELETE | Professor           | O professor pode excluir o cadastro                 |

**7.3** **Rotas da Agenda**

Endpoint:{{URL}}agenda/

| Rota             | Método | Permissão de acesso | O que faz?                                                  |
| ---------------- | ------ | ------------------- | ----------------------------------------------------------- |
| '/ '             | GET    | Professor e Aluno   | Busca todas as aulas agendadas                              |
| '/aula'          | POST   | Professor           | Cadastrar uma aula                                          |
| '/aula/:id'      | PATCH  | Aluno               | Incluir um aluno em uma aula existente                      |
| '/professor/:id' | GET    | Professor           | Busca todas as aulas que o ID do professor está cadastrado. |
| '/:id'           | PUT    | Professor           | O ID do professor pode ser pelo ID do professor substituto. |
| '/:id'           | DELETE | Professor           | Excluir a aula.                                             |

**7.4** **Rotas da Mural**

Endpoint:{{URL}}mural/

| Rota | Método | Permissão de acesso | O que faz?                    |
| ---- | ------ | ------------------- | ----------------------------- |
| '/ ' | GET    | Professor e Aluno   | Busca todos os itens do mural |
| '/ ' | POST   | Professor e Aluno   | Cadastrar um depoimento       |

### 7.5 **Schemas**
_______________________________________________________________________________
**7.5.1** **Alunos**

```
const alunoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  disciplinas: {
    type: String,
    required: true
  },
  duvidas: {
    type: String,
    required: true
  },
  cursando: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})
```



**7.5.2** **Professor**

```
const professorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  graduadoEm: {
    type: String,
    required: true
  },
  disciplinas: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})
```



**7.5.3** **Agenda**

```
const agendaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tema: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  },
  descricao: {
    type: String,
    required: true
  },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'professores'
  },
  turma : [{
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    IDcadastrado: {
      type: String,
      required: true
    },

  }] 

})
```



**7.5.4** **Mural**

```
const muralSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  url_do_video: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
})
```



### 8. Regras de negocio:
_______________________________________________________________________________
- [x] Não deverá ser possível criar um cadastro de aluno com um e-mail já cadastrado;
- [x] Para criar uma nova aula, deverá vincular no momento da criação a um professor já existente no sistema, utilizando o numero do id do professor correspondente no corpo da requisição;
- [x] Os alunos devem conseguir se incluir em uma aula;
- [x] O aluno deve consegui excluir o cadastro do site;
- [x] Não deverá ser possível excluir um professor que possuí uma aula agendada;
- [x] O professor pode incluir um professor substituto;
- [x] É necessária a autenticação do token em todas as telas;
- [x] Os alunos não devem ter acesso as paginas de controle do professor;
- [x] Os professor não devem ter acesso as paginas de controle do aluno.

<br>
<br>

### 9. Implementações Futuras:
_______________________________________________________________________________
- Desenvolvimento da interface do site;
- Envio de e-mail automático dos agendamentos;
- Excluir o aluno automaticamente da aula quando o cadastro for excluido da tabela de aluno;
- Criar uma rota para buscar agenda do aluno;
- Ampliar o projeto para atender todas as regiões do Brasil;
- Incluir psicólogos e profissionais da saúde para fazer um acompanhamento emocional e psicológico dos alunos

### 10. **Deseja Contribuir?**
_______________________________________________________________________________
1. Faça o download ou clone este repositório;
2. Abra seu Terminal/Prompt e navegue até o diretório Projeto_Final_Reprograma;
3. Rode: $ npm install;
4. Para subir o servidor é só rodar $ npm run start.

### 11. Autor  :woman_student:
_______________________________________________________________________________
##### Ana Paula Araújo

<p><img src="https://github.com/anapsantos1/Projeto_Final_Reprograma/blob/main/img/ScreenHunter_278.png" width="150"></p>

-  [Linkedin](https://www.linkedin.com/in/ana-paula-lima-3269214b/#)
-  [Github](https://github.com/anapsantos1?tab=repositories)

