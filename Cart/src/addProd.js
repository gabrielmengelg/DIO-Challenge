import catalogo from "./catalogo.js";

let carrinho = []
async function receberItem(index, quantRecebido){
    let {produto, preco} = catalogo.itens[index - 1];
    let recebe = {
        produto,
        preco,
        quantRecebido,
        subtotal: preco * quantRecebido,  
    }
    carrinho.push(recebe);

    const totalGeral = carrinho.reduce((acc, item) => acc + item.subtotal, 0);   

    console.log(`\n🛒 Produto adicionado: ${produto} x${quantRecebido}`);
    console.log(`Subtotal: R$ ${recebe.subtotal.toFixed(2)}\n`);
    console.log(`Total geral: R$ ${totalGeral.toFixed(2)}\n`);
    
}

export {receberItem, carrinho};