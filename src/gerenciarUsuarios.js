// Vetor com informações dos usuários do site
const usuarios = [
    {
        id: 1,
        nome: 'Alice Silva',
        email: 'alice@email.com',
        senha: 'alice123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Bruno Costa',
        email: 'bruno@email.com',
        senha: 'bruno456',
        expirado: false
    },
    {
        id: 3,
        nome: 'Carla Dias',
        email: 'carla@email.com',
        senha: 'carla789',
        expirado: true
    },
    {
        id: 4,
        nome: 'Diego Ramos',
        email: 'diego@email.com',
        senha: 'diego321',
        expirado: false
    },
    {
        id: 5,
        nome: 'Eva Martins',
        email: 'eva@email.com',
        senha: 'eva654',
        expirado: false
    }
];

// Função que realiza o login de um usuário
export function fazerLogin(email, senha) {
    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        return 'Credenciais incorretas.';
    }

    if (usuario.expirado) {
        return 'Renove suas credenciais.';
    }

    if (usuario.senha !== senha) {
        return 'Credenciais incorretas.';
    }

    return 'Login realizado com sucesso.';
}
