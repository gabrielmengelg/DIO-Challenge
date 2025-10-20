import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from 'node:process';
import catalogo from "./catalogo.js";
import {receberItem} from "./addProd.js";
import removerItem from "./romoveItem.js";



async function options() {
    let option = '';

    while (option != "F") {

        let rl = readline.createInterface({input, output})
        option = await rl.question(
            "\nSELECIONE UMA OPCÃO: \n\n1 - Mostrar Catalogo \n2 - Selecionar Produtos \n3 - Remover Produto \n\nDigite: ");

        option = option.toUpperCase();
        
        switch (option) {
            case "1":
                await catalogo.selectIten();
                break;
            case "2":
                let indice = "";
                let quant = "";

                while(indice.toUpperCase() != "F"){
                    indice = await rl.question("Selecione o produto (ou 'F' para voltar): ");
                    if (indice.toUpperCase() === "F") break;

                    quant = await rl.question("Quantidade: ");
                    if (quant.toUpperCase() === "F") break;

                    const id = Number(indice);
                    const quantidade = Number(quant)

                    if (Number.isNaN(id) || Number.isNaN(quantidade)) {
                        console.log(" Entrada inválida, use números válidos.");
                        continue;
                    }
                    receberItem(id, quantidade);
                }                   
                break;
            case "3":
                removerItem.listarCarrinho(); // Mostra o carrinho primeiro
                let indiceRemover = await rl.question("Digite o número correspondente ao item a remover (ou 'F' para voltar): ");
                if (indiceRemover.toUpperCase() === "F") break;

                const id = Number(indiceRemover);
                if (Number.isNaN(id)) {
                    console.log("⚠️ Entrada inválida, use um número.\n");
                    break;
                }
                removerItem.removerItem(id);

                break;

                default:
                    console.log("❌ Seleção inválida!")
        }        
        rl.close();    
    }
    

}options();