import generator from 'generate-password'



async function pasd(params) {
    var senha = generator.generate({
        length: 10,
        uppercase: true,
        lowercase: true,
        numbers: true
    })
        
    console.log("\nSenha Gerada: " + senha) 
    
}

export default pasd;