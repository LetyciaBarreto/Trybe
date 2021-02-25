var peca = "rEi";
switch (peca.toLocaleLowerCase()){
    case ("peao"):
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo");
        break;
    case("rei"):
        console.log( "horizontal, vertical e diagonal");
        break;
    case ("rainha"):
        console.log("orizontal, vertical e diagonais mas não pode pular outras peças");
        break;
    case ("torre"):
        console.log("vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case ("bispo"):
            console.log("diagonal. Não pode pular outras peças.");
            break;
    case("cavalo"):
    console.log("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
    default:
        console.log("ERROR")

}
