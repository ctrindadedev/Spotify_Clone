// Arrow funcion
const Teste = () => <h1> Olá, mundo </h1>;

// rafce
import React from "react";

const info = () => {
  return <div>info</div>;
};

export default info;

//Nomeação de Componentes:
// PascalCase => Cachorro ; CachorroDalmata

//Nomeação de Funções,Variaveis:
//CamelCase => luzBranca ; luzPreta

//Export default no fim do arquivo, posso importar para outro file com qualquer nome e sem chaves
// Export "sem defalut", só posso importar entre chaves e com o nome exportado

//Para acessar um diretório que não está na mesma subpasta, mas na pasta geral, só por .. ao inves de .

//Self Closing Tag
//<header> </header>
// é o mesmmo que <Header/> -> usado quando não queremos colocar contéudo no meio

// Variavel do JS aplicado no JSX (No html precisa estar em chaves), exemplo: {title} populares

//O css funciona com chave valor

//Tudo no html é uma caixa, e no css trabalhamos com box-models, sendo o conteúdo composto por marin (espaçamento ex) e o padding (espaçamento interno)

//css box-model (conceito fundamental do css):
// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   /* box-sizing: content-box; */
//   width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
//exemplo:
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

// Tag vazia em React se chama Fragment ou Fragmento
//Permite passar sobre a restrição do react de retornar somente um componente, como no caso:
//Se não tivesse entre tags vazias, o código retornaria um erro por ter mais de um componente.
<>
  <SingleItem />
  <SingleItem />
</>;

//Components recebem props

//Desestruturação
const { pathname } = useLocation();
const pathnamee = useLocation().pathname;

//Operador ternário
// {artist ?? "Artista"} é o mesmo que {artist !== null && artist !== undefined ? artist : "Artista"}

// isHome ? (FinalItems = items) : (finalItems = Infinity); é o mesmo que finalItems = isHome? items : Infinity

//var.map(currentValue, index) => <componente/>)
//função map: uma função que pode ser usada como loop!

// Array(items)
//           .fill()
//           .map((currentValue, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))

// Spread operator
// ...

// Quando componentes se re-renderizão?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - useState
