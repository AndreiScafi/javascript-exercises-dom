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