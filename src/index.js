import prompt from 'prompt';
import  mainprompt  from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(params) {
    prompt.get(mainprompt, async (err, choose) => {
        if (choose.selection === '1')await createQRCode();
        if (choose.selection === '2')await createPassword();
        
        // handle the result here
    });
    prompt.start();
}
main();