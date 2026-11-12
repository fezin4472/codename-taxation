function CPFvalidation(cpf) {
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos ou se todos são iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

export default CPFvalidation;