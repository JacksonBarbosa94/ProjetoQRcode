
// A função foi renomeada para seguir as convenções de código, e o "async" é removido
// pois não há operações assíncronas dentro dela.
function permittedCharacters() {
    let permitted = [];
    if (process.env.UPPERCASE_LETTERS == 'TRUE') permitted.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (process.env.LOWERCASE_LETTERS == 'TRUE') permitted.push('abcdefghijklmnopqrstuvwxyz');
    if (process.env.NUMBERS === 'TRUE') permitted.push('0123456789');
    if (process.env.SPECIAL_CHARACTERS === 'TRUE') permitted.push('!@#$%^&*()_+~`|}{[]:;?><,./-=');
   
    // A string única é criada aqui.
    // O método .join('') une todos os elementos do array "permitted" em uma única string sem separadores.
    return permitted.join(''); 
}

async function handle(params) {
    let password = '';

    // A variável passwordLength é convertida para número.
    const passwordLength = Number(process.env.PASSWORD_LENGTH);

    // Chama a função que agora retorna uma única string.
    const allCharacters = permittedCharacters();
    
    // Verifica se há caracteres para gerar a senha.
    if (!allCharacters) {
        throw new Error('Nenhum tipo de caractere permitido. Verifique as variáveis de ambiente.');
    }
    
    for (let i = 0; i < passwordLength; i++) {
        // Gera um índice aleatório dentro do tamanho da string allCharacters.
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        
        // Pega um único caractere da string e o adiciona à senha.
        password += allCharacters[randomIndex];
    }
    
    return password;
}


export default handle;