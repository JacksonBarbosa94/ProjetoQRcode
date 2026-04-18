import chalk from "chalk";
import qr from "qrcode-terminal";

const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow.bold('Digite o link para gerar o QRCODE:\n'),
        
    },
    {
        name: 'namefile',
        description: chalk.yellow.bold('Escolha entre o tipo de QRCODE:\n 1 - qrcode-normal \n 2 - qrcode-terminal\n'),
        pattern: /^[1-2]{1}$/,// apenas 1 ou 2
        message: chalk.red('Seleção inválida, escolha 1 ou 2'),
        required: true // obrigatorio
        
    }
]

export default promptQRCode;