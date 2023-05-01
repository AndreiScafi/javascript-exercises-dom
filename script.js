console.log("teste de javascript");

//window objeto muito importante com inúmeros métodos:

window.console.log("teste do window");
//window.alert("teste do window.")

// para chamar esses métodos do window não precisa chamar o window na sintaxe. 

// Propriedade importante do window - documente: 

window.document
// ou
document

//Objeto chama a documentação do html

console.log(document)

// dom - document object model (modelo de objetos do documento) - tags html podem ser transformadas em objetos do javascript:

document.body.innerHTML += "<h1> Esse título foi inserido por Javascript</h1>"

//acessando elementos dentro do html -

let p1 = document.getElementById("p1"); // seleciona o id #p1

console.log(p1);


let paragrafos = document.getElementsByClassName("paragrafo"); // seleciona toda a classe parágrafo .pargrafo

for(let p of paragrafos){
    console.log(p);
}

let tp = document.getElementsByTagName("p"); // seleciona todas as tags <p>

for(let p of tp){
    console.log(p);
}

tp

// marcando os modos de seleção. 

p1.innerHTML += " conteúdo adicionado por Javascript."

for (i = 0; i < paragrafos.length; i++){
    paragrafos[i].innerHTML += " - classe parágrafos"
}

for (i=0; i < tp.length; i++){
    tp[i].innerText += "- Tag <p>"
}

// diferenças entre o innerHTML o innerText e o textContent

// innerHTML consegue receber tags

p1.innerHTML += "<p>Inserindo a tag de um novo parágrafo com innerHTML.</p><br>"

// já o innerText e o textContent não conseguem receber tags: 
p1.innerText += "<p>Inserindo a tag de um novo parágrafo com innerText.</p>"

// diferença entre innerText e textContent -
// innerText mostra apenas o que aparece na tela, já o textContent mostra todo o conteúdo do html, mesmo o que não aparece na tela. 

let p3 = document.getElementById("p3");

console.log(p3);

// modificando atributos com javascript

// Utilizando o this:

let t1 = document.getElementById("p1");

t1.onclick = colocarEmMaiusculo;

function colocarEmMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase();
}

// diferença entre  o evento onclick do html e o evento onclick feito por javascript

//Onclick html:
function f(e){
    console.log('Teste');
    console.log(this);// imprime o window
    console.log(e);// imprime indefino pois não foi atribuído nenhum parâmetro à função, para imprimir o elemento HTML é necessário passar o comando "this" ao parâmetro da função no html.
    console.log(this);// também imprime o elemento HTML, porém somente quando o parâmetro "this" for atribuído a função localizada no HTML
}

//Onclick javascript:
function f1(e){
    console.log('Teste f1');
    console.log(this); // impirme o elemento html
    console.log(e); // imprime o evento de click do mouse;
    console.log(e.target); // outra maneira de pegar o elemento html
}

window.onload = function() {
    let h5 = document.getElementsByTagName("h5")[0];

    h5.addEventListener("click", f1);
}

// Elementos Pai e filho:

//imprimindo o elemento:
let d1 = document.getElementById("d1");
console.log(d1);

//imprimindo os filhos do elemento:
console.log(d1.children);
console.log(d1.children[0]);// escolhendo um lemento filho específico.

let h1 = d1.children[0]
//imprimindo o pai do elemento:
console.log(h1.parentElement);

// Objeto Math:

/* 
Math Object Properties
Property	Description
E	Returns Euler's number (approx. 2.718)
LN2	Returns the natural logarithm of 2 (approx. 0.693)
LN10	Returns the natural logarithm of 10 (approx. 2.302)
LOG2E	Returns the base-2 logarithm of E (approx. 1.442)
LOG10E	Returns the base-10 logarithm of E (approx. 0.434)
PI	Returns PI (approx. 3.14)
SQRT1_2	Returns the square root of 1/2 (approx. 0.707)
SQRT2	Returns the square root of 2 (approx. 1.414)

Math Object Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
asin(x)	Returns the arcsine of x, in radians
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
ceil(x)	Returns the value of x rounded up to its nearest integer
cos(x)	Returns the cosine of x (x is in radians)
exp(x)	Returns the value of Ex
floor(x)	Returns the value of x rounded down to its nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Returns the value of x rounded to its nearest integer
sin(x)	Returns the sine of x (x is in radians)
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
*/

// Exemplo:

let n = Math.PI;
console.log(n);

let n2 = Math.round(Math.random() * 10);
console.log(n2);

// JSON - Javascript Object Notation - Notação de um objeto Javascript:

// Objeto y:
let y = {
    nome: "Andrei",
    nota: 8.5
}

// String y2 - sintax está difrente porque o JSON normalmente atua junto ao servidor no back-end.
let y2 = '{"nome": "fabio", "nota": 7.8}'



// Método "stringfy" - Pega um objeto e tenta transformar em string:
let z = JSON.stringify(y)

console.log(y);// imprimiu o Objeto y.

console.log(z)// transformou o objeto y em uma string.

// Método "parse" - Pega string e tenta transformar em objeto:
let z2 = JSON.parse(y2)

console.log(y2)// imprimiu a string y2

console.log(z2)// transformou a string em um objeto.

// Local Storage - Armazenamento de dados no servidor. 

localStorage.setItem("chave","string"); // Grava um dado na memória. É preciso passar uma chave e uma string como argumento;

localStorage.getItem("chave"); // Seleciona um dado armazenado na memória;

localStorage.removeItem("chave"); // Remove um dado armazenado na memória;

// Exemplo de funcionalidade:

onload = function (){
    let nome = localStorage.getItem("nome");
    let h1 = document.getElementById("nome");
    h1.innerHTML = nome;
}

function atualizar(element){
    let valor = element.value;
    console.log(valor);

    let h1 = document.getElementById("nome");
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor);
}

// Porém este método somente armazena strings, para armazenar números é necessário usar o JSON. 

//let objeto = { nome: "Andrei", nota: 10.00 };
//localStorage.setItem("aluno", JSON.stringify(objeto));

let objeto = localStorage.getItem("aluno");
console.log(JSON.parse(objeto));

// mini projeto - botão de sorteio de rifa:

function sortear(){

    let pessoas = ["Andrei", "Laiza", "Viviane", "Chrissie", "Francisco"];


    let numeroDePessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroDePessoas);

    document.getElementById("d").innerHTML = pessoas[numeroSorteado];
}