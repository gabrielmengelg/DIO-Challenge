import qrcode from 'qrcode-terminal'

async function requestUrl(url) {
    console.log("QrCode Gerado Abaixo...\n")
    qrcode.generate(url, { small: true })
    
}

export default requestUrl;