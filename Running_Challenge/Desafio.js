//players
const player1 = {
    nome: "Gabriel",
    velocidade: 5,
    manobilidade: 2,
    poder: 5,
    pontos: 0,
} 

const player2 = {
    nome: "Rafael",
    velocidade: 3,
    manobilidade: 4,
    poder: 4,
    pontos: 0,
} 

function DadoRandom() {
   let dados = Math.floor(Math.random() * 6) + 1
   return dados 
}

async function PistaRadom() {
    let rodada = Math.floor(Math.random() * 3) + 1
    let Curva = "Curva"
    let Reta = "Reta"
    let Confronto = "Confronto"

    if(rodada <= 1){
        console.log(`A pista é: ${Reta}\n`)
        return Reta

        
    }else if (rodada == 2) {
        console.log(`A Pista é: ${Curva}\n`)
        return Curva


    } else {
        console.log(`A Pista é: ${Confronto}\n`)
        return Confronto
        
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Funcionamento() {
    
    for(let rodada = 0; rodada < 5; rodada++){
        let pontoG = 0 
        let pontoR = 0
        let pista = await PistaRadom()
        console.log(`Rodada Numero: ${rodada + 1}\n`)
        if(pista == "Reta"){
    
            console.log("PLayer Gabriel")
            pontoG = DadoRandom() + player1.velocidade
            console.log(`Pontuação da rodada: ${pontoG}`)
            player1.pontos += pontoG
            console.log(`A pontuação de Gabriel é: ${player1.pontos}\n`)

        
            console.log("PLayer Rafael")
            pontoR = DadoRandom() + player2.velocidade
            console.log(`Pontuação da rodada: ${pontoR}`)
            player2.pontos += pontoR
            console.log(`A pontuação de Rafael é: ${player2.pontos}\n`)
            console.log("###############################################")
        
        }else if(pista == "Curva"){
            console.log("PLayer Gabriel")
            pontoG = DadoRandom() + player1.manobilidade
            console.log(`Pontuação da rodada: ${pontoG}`)
            player1.pontos += pontoG
            console.log(`A pontuação de Gabriel é: ${player1.pontos}\n`)

        
            console.log("PLayer Rafael")
            pontoR = DadoRandom() + player2.manobilidade
            console.log(`Pontuação da rodada: ${pontoR}`)
            player2.pontos += pontoR
            console.log(`A pontuação de Rafael é: ${player2.pontos}\n`)
            console.log("###############################################")
        
        }else if(pista == "Confronto") {
            console.log("PLayer Gabriel")
            pontoG = DadoRandom() + player1.poder
            console.log(`Pontuação da rodada: ${pontoG}`)
            player1.pontos += pontoG
            console.log(`A pontuação de Gabriel é: ${player1.pontos}\n`)

        
            console.log("PLayer Rafael")
            pontoR = DadoRandom() + player2.poder
            console.log(`Pontuação da rodada: ${pontoR}`)
            player2.pontos += pontoR
            console.log(`A pontuação de Rafael é: ${player2.pontos}\n`)
            console.log("###############################################")
            

            if(pontoG < pontoR){
                player1.pontos = player1.pontos - 1
                console.log("# Menos 1 #")
            
            }else {
                player2.pontos = player2.pontos - 1
                console.log("# Menos 1 #")
            }
        }
        await delay(2000)

    }
    console.log("Resultado Final\n")
    console.log(`Total Ponto ${player1.nome}: ${player1.pontos}`)
    console.log(`Total Ponto ${player2.nome}: ${player2.pontos}\n`)
    if(player1.pontos === player2.pontos){
        console.log("Empate entre os competidores")
    }
} 
Funcionamento()   
