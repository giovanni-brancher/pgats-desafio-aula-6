import { fazerLogin } from '../src/gerenciarUsuarios.js';
import assert from 'node:assert';

describe('Testes da Gestão de Usuários', function () {
    it('1) Sucesso: deve retornar mensagem de sucesso ao informar email e senha corretos', function () {
        // Act
        const retorno = fazerLogin('alice@email.com', 'alice123');

        // Assert
        assert.equal(retorno, 'Login realizado com sucesso.');
    });

    it('2) Credencial expirada: deve informar que as credenciais expiraram', function () {
        // Act
        const retorno = fazerLogin('carla@email.com', 'carla789');

        // Assert
        assert.equal(retorno, 'Renove suas credenciais.');
    });

    it('3) Usuário não encontrado: deve informar credenciais incorretas quando o email não existe', function () {
        // Act
        const retorno = fazerLogin('naoexiste@email.com', 'qualquersenha');

        // Assert
        assert.equal(retorno, 'Credenciais incorretas.');
    });

    it('4) Senha incorreta: deve informar credenciais incorretas quando a senha está errada para o usuário encontrado', function () {
        // Act
        const retorno = fazerLogin('alice@email.com', 'senhaErrada');

        // Assert
        assert.equal(retorno, 'Credenciais incorretas.');
    });
});
