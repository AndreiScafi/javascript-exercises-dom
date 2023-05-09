// Window

//Conceito:

/* 
Em JavaScript, o objeto Window representa a janela que contém um documento em um navegador da web. Ele é a raiz do modelo de objeto do navegador e, portanto, fornece acesso a muitos recursos úteis do navegador, como a barra de endereços, histórico de navegação, controle de janelas e muito mais.

O objeto Window também é responsável por gerenciar o ciclo de vida da janela do navegador, incluindo a criação, carregamento, fechamento e redimensionamento da janela.

Além disso, o objeto Window é o escopo global para código JavaScript em uma página da web. Isso significa que qualquer variável ou função definida globalmente estará acessível a partir do objeto Window.

Em resumo, o objeto Window é um dos principais objetos em JavaScript para interagir com o ambiente do navegador e é fundamental para muitos recursos da web moderna.
*/

//Como window é o objeto padrão do javascript, por isso não precisa ser chamado sem a necessidade de escrever window na sintaxe:

window.console.log('Objeto Window com objeto console e método log.');
// Pode ser chamado sem escrever window na sintaxe.
console.log('Objeto Window com objeto console e método log. Mas sem escrever window na sintaxe.');

// Document

// Conceito: 

/* 
Em JavaScript, o objeto "document" representa o documento HTML que está sendo exibido em um navegador da web. É a interface principal para manipulação e navegação de elementos HTML na página.

O objeto "document" é criado automaticamente pelo navegador ao carregar uma página HTML e oferece uma ampla variedade de métodos e propriedades que permitem a manipulação dinâmica da página.

Algumas das funções mais comuns do objeto "document" incluem:
*/

/* 
getElementById() // retorna o elemento HTML que possui o ID especificado
getElementsByTagName()//retorna uma lista de elementos HTML com o nome de tag especificado
querySelector() // retorna o primeiro elemento HTML que corresponde ao seletor CSS especificado
createElement() // cria um novo elemento HTML especificado pelo nome da tag
createTextNode()// cria um novo nó de texto com o texto especificado 
*/

/*
Além dessas, existem muitas outras funções e propriedades disponíveis no objeto "document", que permitem a manipulação dinâmica do conteúdo da página, como alterar o conteúdo de um elemento HTML, adicionar ou remover elementos HTML, manipular estilos CSS e muito mais.

Em resumo, o objeto "document" é fundamental para a interação com o conteúdo HTML em uma página da web e é um dos principais objetos do DOM (Modelo de Objeto do Documento) em JavaScript.
*/

console.log(document) // contém todo o HTML

//DOM - Document Object Model

//Conceito:

/* 
DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Em JavaScript, o DOM é uma representação hierárquica do conteúdo de um documento, onde cada elemento na página é representado por um objeto no modelo de objeto do documento.

O DOM é uma estrutura de árvore que representa a estrutura do documento HTML/XML. Cada elemento HTML é representado por um objeto no DOM, que pode ser acessado e manipulado usando JavaScript.

O DOM permite que os desenvolvedores acessem e manipulem elementos da página dinamicamente, adicionando, removendo e alterando elementos HTML e seus atributos em tempo de execução. Além disso, o DOM também permite que os desenvolvedores adicionem e removam eventos para interagir com o usuário, como cliques do mouse, teclas pressionadas, entre outros.

Algumas das tarefas que podem ser realizadas com o DOM em JavaScript incluem:

Acesso aos elementos HTML e seus atributos
Manipulação do conteúdo HTML dinamicamente
Adição e remoção de elementos HTML
Manipulação de estilos CSS
Adição e remoção de eventos do usuário
Manipulação de formulários HTML
Em resumo, o DOM é uma representação hierárquica dos elementos de um documento HTML ou XML que permite que os desenvolvedores acessem e manipulem dinamicamente o conteúdo e a interação do usuário com a página usando JavaScript.
 */

// Aplicação prática:

document.body.innerHTML = '<h1>Esse título foi inserido com Javascript.</h1>' + document.body.innerHTML // O objeto document contém todo o HTML, porém especificamos o body, e com o método innerHTML, que recebe uma string, adicionamos a TAG <h1> com o título descrito, depois é preciso concatenar com o mesmo método para não perder o conteúdo que já havia dentro do body.

document.body.innerHTML += '<h2>Esse segudno título também foi inserido com Javascript' // A concatenação += é necessária para manter o conteúdo antigo, ao adicionar o novo conteúdo. 

