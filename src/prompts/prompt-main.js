import chalk from "chalk";

const mainprompt = [
    {
        name: 'selection',
        description: chalk.yellow.bold('Escolha uma opção:\n 1 - QRCODE \n 2 - PASSWORD\n'),
        pattern: /^[1-2]{1}$/,// apenas 1 ou 2
        message: chalk.red('Seleção inválida, escolha 1 ou 2'),
        required: true
    }
]

export default mainprompt;