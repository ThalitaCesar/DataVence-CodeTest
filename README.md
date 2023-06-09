

<div align="center">
  <h1> <img src="https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/32baa938-ea96-4219-b388-b25e039659d0" width="30" /> Leiturama</h1>
</div>
Este é o projeto chamado Leiturama faz parte do code test da dataVence para o cargo de desenvolvedor frontend. O objetivo do teste é desenvolver uma landing page responsiva que redirecione para um formulário, e um formulário responsivo que envie as informações via requisição POST no formato JSON.

## Requisitos
Para executar o projeto, você precisa ter instalado o seguinte:

* Node.js (versão 12 ou superior)
* npm (gerenciador de pacotes do Node.js)
* git (opcional, caso você queira clonar o repositório)
* Clonando o repositório
* Você pode clonar o repositório usando o seguinte comando:

```
git clone https://github.com/ThalitaCesar/DataVence-CodeTest
```

## Instalando as dependências
Após clonar o repositório, navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências:

```
npm install ou yarn 
```

## Executando o projeto
Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
yarn start
```

Isso iniciará o projeto e poderá ser acessado no navegador através da URL http://localhost:3000.

## Tecnologias utilizadas

* React Typescript: biblioteca JavaScript para construção de interfaces de usuário juntamente com typescript.
* React-hook-form: biblioteca para criação de formulários com validação.
* yup: biblioteca para validação de dados.
* MUI (Material-UI): biblioteca de componentes React para criar uma interface de usuário consistente e moderna.
* Styled-components: biblioteca para estilização de componentes React utilizando CSS-in-JS.

## Api
Para a api, esse projeto utiliza o [viaCep](https://viacep.com.br/ws/01001000/json/) e os dados do formulário são enviados para a api [Webhook Inbox](http://webhookinbox.com/view/4sQxDkRy/), que pode ser acessada ao clicar no link. Para enviar para a api webhook é preciso estar em https;

## Estrutura do projeto

A estrutura básica do projeto é a seguinte:

```

leiturama/
  src/
    assets/           # Arquivos de mídias
    components/       # Componentes reutilizáveis
    context/          # Estado global da api viaCep
    pages/            # Páginas do aplicativo
    services/         # Serviços/APIs utilizados
    styles/           # Estilos globais
    App.tsx           # Componente principal do aplicativo
    index.tsx         # Arquivo de inicialização do React
    routers.tsx       # Arquivo de rotas do react router dom
  public/
    index.html        # Arquivo HTML base
  README.md           # Documentação do projeto
  package.json        # Arquivo de configuração do npm
  
 ```
 
## Funcionalidades
O projeto Leiturama consiste em uma landing page simples e um formulário responsivo com as seguintes funcionalidades:

### Landing Page
A landing page apresenta uma interface simples com texto, imagens e um botão para inserir o cep e acessar o formulário.

![telainicial](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/fd579d29-1f08-43ad-b85b-4e4f2e69e4fb)

![mobile1](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/e5ccee06-94f8-4330-9cf3-ef725b31c656)

![mobilemenu](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/b3146df7-da34-4d87-a778-16110ddfab61)


### Formulário
O formulário é composto por campos como:

- Campos de textos
- Select 
- Radio button
- Checkbox
- Input file

![cadastro](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/04974bee-8578-496f-a5e8-b573d3769dac)

![cadastro2](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/03da28cf-a0a0-4bfa-8232-18135264708e)

![mobilecadastro1](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/71385c43-fb8c-4912-bd7c-c42a8fed64de)

![mobilecadastro2](https://github.com/ThalitaCesar/DataVence-CodeTest/assets/83131771/c66ac78a-ae91-4230-8f78-0582480b7cd1)


## Contribuição
Se você quiser contribuir para o projeto Leiturama, fique à vontade para abrir um pull request. Será um prazer receber sua colaboração.
