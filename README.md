# On12-TodasEmTech-s14-ProjetoNãoéTarde-BD 🚀

Turma Online 12 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD



## Sobre o Projeto da semana

community for senior students

Esta aplicação é uma API para gerenciar dados de professores e alunos.

A idéia é criar uma comunidade para conectar pessoas que tem interesse em ensinar ou auxiliar pessoas que voltaram a estudar na vida adulta.

Esse projeto foi desenvolvimento para atender um público que cresce todos os dias no Brasil, pessoas que voltaram a estudar devido aos critérios de contratação das empresas que cada dia exigem mais qualificações. Pensando também nas metodologias de ensino das escolas que muitas vezes deixam a desejar.

Essas pessoas têm muita dificuldade em relembrar ou aprender novos assuntos e muitas vezes não tem o suporte necessário nas escolas.

Tanto professores quantos alunos precisam se cadastrar

```
"Relacionamento" no MongoDB? Como é isso?
- ref no model
- populate do find (eager loading)
```

## Tecnologias usadas:
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

## 📁 Arquitetura 

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

### Regras de negocio:



<img src="https://acegif.com/wp-content/uploads/cat-typing-24.gif" width="150">

- [x] **"/estudantes/"** Deverá retornar todos os alunos

- [x] **"/estudantes/cadastro"** Deverá criar um aluno. O aluno não pode ter mais de um cadastro

- [x] **"/estudantes/:id"** Deverá buscar um aluno por id

- [x] **"/estudantes/:id"** Deverá alterar qualquer informação do cadastro



  ```
  const getAllMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome = "Marvel")
    res.json(titulosFiltrados)
  }
  ```

- [x] **"/titulos/ghibli"** Deverá retornar todos os títulos com o estúdio Ghibli

  ```
  const getAllGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome = "Ghibli")
    res.json(titulosFiltrados)
  }
  ```

- [x] **"/titulos/pixar"** Deverá retornar todos os títulos com o estúdio Pixar

  ```
  const getAllPixar = async (req, res) =>{
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
  }
  ```

- [x] **"/estudios"** Deverá retornar todos os estúdios cadastrados

  ```
  const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.status(200).json(estudios)
  }
  ```

- [x] "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estúdio

  ```
  const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    res.status(200).json(titulos)
  }
  ```

- [x] "**/estudios**" Deverá criar um estúdio 

  ```
  const createStudio = async (req, res) => {
    const estudio = new Estudio({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      criadoEm: req.body.criadoEm,
    })
    const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
    if (estudioJaExiste) {
      return res.status(409).json({error: 'Estudio ja cadastrado.'})
    }
    try{
      const novoEstudio = await estudio.save()
      res.status(201).json(novoEstudio)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
  }
  ```

- [x] "**/titulos**"  Deverá criar um título 

  ```
  const createTitle = async (req, res) => {
    const titulo = new Titulo({
      _id: new mongoose.Types.ObjectId(),
      nome: req.body.nome,
      genero: req.body.genero,
      descricao: req.body.descricao,
      estudio: req.body.estudio,
      criadoEm: req.body.criadoEm
    })
    //TODO : criar validação se filme já existe
    const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})
    if (tituloJaExiste) {
      return res.status(409).json({error: 'Titulo ja cadastrado.'})
    }
    try {
      const novoTitulo = await titulo.save()
      res.status(201).json(novoTitulo)
    } catch (err) {
      res.status(400).json({ message: err.message})
    }
  }
  ```

- [x] "**/titulos/[ID]**" Deverá deletar titulo por id específico e retorna mensagem amigável

  ```
  const removeOneTitulo = async (req, res) => {
    try{
      const titulo = await Titulo.findById(req.params.id)
      if (titulo == null){
        return res.status(404).json({message: "Titulo  não encontrado"})
      }
      titulo.remove()
      res.status(200).json({"mensagem":"Titulo removido com sucesso"})
  
    }catch (err){
      res.status(500).json({message: err.message})
    }
  }
  ```

- [x] "**/estudios/[ID]**" Deverá deletar estúdio por id específico e retorna mensagem amigável

  ```
  const removeOneEstudio = async (req, res) => {
    try{
      const estudio = await Estudio.findById(req.params.id)
      if (estudio == null){
        return res.status(404).json({message: "Estudio  não encontrado"})
      }
      estudio.remove()
      res.status(200).json({"mensagem":"Estudio removido com sucesso"})
  
    }catch (err){
      res.status(500).json({message: err.message})
    }
  }
  ```

- [x] "**/titulos/[ID]**" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

  ```
  const updateAnythingTitulo = async (req, res) => {
    try{
      const titulo = await Titulo.findById(req.params.id)
      if (titulo == null){
        return res.status(404).json({message: "Titulo não encontrado"})
      }
      const updatedTitulo = req.body
  
      if (updatedTitulo != null){
  
        let keyList = Object.keys(updatedTitulo)
        keyList.forEach((conteudo) => {
          console.log('chave', conteudo);
          titulo[conteudo] = updatedTitulo[conteudo];
      });
      
      }
      const tituloAtualizado = await titulo.save()
      res.status(200).json({tituloAtualizado})
  
  
    }
    catch (err){
      res.status(500).json({message: err.message})
    }
  }
  ```

- [x] "**/estudios/[ID]**" Deverá alterar informação específica dentro de um estúdio por id específico e retorna o título alterado

  ```
  const updateOne = async (req, res) => {
    try{
      const estudio = await Estudio.findById(req.params.id)
      if (estudio == null){
        return res.status(404).json({message: "Estudio  não encontrado"})
      }
  
      if (req.body.nome != null){
        estudio.nome = req.body.nome
      }
  
      const estudioAtualizado = await estudio.save()
      res.status(200).json({estudioAtualizado})
  
    }catch (err){
      res.status(500).json({message: err.message})
    }
  }
  ```


### Regras de negócio

- [x]  Não deverá ser possível criar estúdio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estúdio já existente no sistema, utilizando o numero do id do estúdio correspondente no corpo da requisição

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```
<br>
<br>

### Um pouquinho do resultado

<img src="https://github.com/anapsantos1/ProjetoGuiado_On12_s14_Ana-Paula/blob/main/Anima%C3%A7%C3%A3o.gif?raw=true">


_______________________________________________________________________________

Aluna : [Ana Paula Lima](https://www.linkedin.com/in/ana-paula-lima-3269214b/#)

Prof.: Simara Conceição
