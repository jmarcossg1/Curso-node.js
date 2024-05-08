// declaração de funçaõ

function minhaFuncao(){
    //bloco código
}

//minhaFuncao("param");

// expressões de função

//const soma = function(nun1, nun2){ return nun1 + nun2 }
//console.log(soma( 1, 1));


// diferença  principal: HOISTING
//funções e var são "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "Óla";
}

console.log(soma(1,1))
const soma = function(nun1, nun2){ return nun1 + nun2 }
