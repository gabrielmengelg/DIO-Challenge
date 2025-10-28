import * as readline from "node:readline/promises";
import {stdin as input, stdout as output} from 'node:process';
import requestUrl from "./code.js"
import pasd from "./pswd.js"





async function menu() {

    let Option = '';
    while(Option != "F"){

       let rl = readline.createInterface({input, output})
       Option = await rl.question("\nSelecione a opção\n1 - Gerar QrCode\n2 - Gerar Password\nF para sair...\n")
       Option = Option.toUpperCase();
       
       switch(Option){
            case "1":
                const url = await rl.question("Digite a URL: ")
                await requestUrl(url);
                break;
            case "2":
                pasd()
                break;    

        }
        rl.close(); 


    }

}menu().catch(console.error)