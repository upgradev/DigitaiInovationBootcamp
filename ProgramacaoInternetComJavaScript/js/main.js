// var nome = "Ana carolina";
// var idade = 25;
// var idade2 = 10;
// var frase = "Japão é o melhor time";

// var n1 = 20;
// var n2 = 2;
// //alert("nome " + nome + " tem " + idade + " anos");
// //alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// console.log(n1 * n2);


///array
// var lista = ['maca','laranja', 'pera'];
// lista.push("uva"); //adicionar
// console.log(lista);
// lista.pop(); // remover ultima da lista
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());//transforma em string
// console.log(lista.join(" | "));

// var fruta = {nome: "maca", cor: "vermelha"};
// console.log(fruta);
// console.log(fruta.nome);

// var fruta = [{nome: "maca", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(fruta);

///////////// Condicionais, laços de repetição de Date
// var idade = prompt("Qual sua idade?")
// if(idade >= 18){
//     console.log("maior de idade");
// }
// else{
//     console.log("menor de idade");    
// }
// var count = 0;
// while(count <= 5){
//     console.log(count);
//     count++;
// }
// var count;
// for (count = 0; count <= 5; count++) {
//     console.log(count);
// }
// var d = new Date();
// console.log(d.getMonth());


/////////////function
// function soma(n1, n2){
//     return n1 + n2;
// }

// function validaIdade(idade){
//     var validar = false;
//     if(idade >= 18){
//         validar = true;
//     }
//     else{
//         validar = false;
//     }
//     return validar;
// }

// console.log(soma(5, 10));
// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));


////////////////Manipulação de elemento

function botao(){
    console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    //window.open("http://www.google.com.br"); //outra aba
    window.location.href = "http://www.google.com.br"; //mesma aba
}

function trocar(elemento){
    console.log("Trocar texto");
    //document.getElementById("mousemove").innerHTML = "Mouse passado";
    elemento.innerHTML = "Mouse passado";
}


function voltar(elemento){
    console.log("Trocar texto");
    //document.getElementById("mousemove").innerHTML = "Passar o o mouse aqui";
    elemento.innerHTML ="Passar o o mouse aqui";
}