import {carrinho} from "./addProd.js";


function removerItem(index) {
    if (!carrinho.length) {
        console.log("🛒❌ Carrinho vazio! Nada a remover.\n");
        return;
    }

    const idx = index - 1;
    if (idx < 0 || idx >= carrinho.length) {
        console.log(`⚠️ Índice inválido: ${index}. Escolha entre 1 e ${carrinho.length}.\n`);
        return;
    }

    const itemRemovido = carrinho.splice(idx, 1)[0];
    const totalGeral = carrinho.reduce((acc, item) => acc + item.subtotal, 0);

    console.log(`\n🗑️ Item removido: ${itemRemovido.produto} x${itemRemovido.quantRecebido}`);
    console.log(`Valor removido: R$ ${itemRemovido.subtotal.toFixed(2)}`);
    console.log(`Novo total geral: R$ ${totalGeral.toFixed(2)}\n`);

    return totalGeral;
}


function listarCarrinho() {
    if (!carrinho.length) {
        console.log("🛒 Seu carrinho está vazio!\n");
        return;
    }

    console.log("\n🛒 Seu Carrinho:");
    carrinho.forEach((item, idx) => {
        console.log(`${idx + 1}. ${item.produto} x${item.quantRecebido} - Subtotal: R$ ${item.subtotal.toFixed(2)}`);
    });
    console.log(`Total geral: R$ ${carrinho.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)}\n`);
}

export default {removerItem, listarCarrinho };