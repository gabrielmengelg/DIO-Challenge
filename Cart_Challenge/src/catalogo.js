let itens = [
    
    {id: 1, produto: "Camisa", preco: 10.00, quantidade: 0 },
    {id: 2, produto: "Bone", preco: 12.00, quantidade: 0 },
    {id: 3, produto: "Calça", preco: 22.00, quantidade: 0 },
    {id: 4, produto: "Bermuda", preco: 11.50, quantidade: 0 },
    {id: 5, produto: "Tenis", preco: 51.99, quantidade: 0 },

]

async function selectIten(){
    
    console.log("Selecione os Itens: \n")
    itens.forEach(item => {
        console.log(`ID: ${item.id} - Produto: ${item.produto} - Preço: ${item.preco} -  Quant: ${item.quantidade}`

    )})       
}

export default {itens, selectIten};