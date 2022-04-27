var nomes = ["João Vitor","Ingrid Vieira"];
var nota1 = [8,7];
var nota2 = [2,1];

function media(n1,n2){
    return (n1 + n2)/2;
}

function infoPassou(media){
    if(media >= 5){
        return "Aprovado"
    }
    else{
        return"Reprovado"
    }
}

for(var index in nomes){
   
    var primeiraNota = nota1[index];
    var segundaNota = nota2[index];
    var medias = media(primeiraNota, segundaNota);

    console.log(`${nomes[index]} primeira nota: ${primeiraNota} - segunda nota: ${segundaNota} - média final ${medias} - Situação: ${infoPassou(medias)}`)
}