// src/validator.test.ts
// O compilador de TypeScript resolverá o módulo JavaScript de forma transparente
import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {

    //Primeiro teste -> Validando se tem algo escrito
    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    //Segundo teste -> Testando se chegou vazio
    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => {
            validarChamado("");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    //Terceiro teste -> Testando se chegou uma mensagem só com caracteres em branco
    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => {
            validarChamado("   ");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    //Quarto teste -> Testando se chegou uma mensagem com menos caracteres do que o permitido
    test('Deve lançar erro se o título tiver menos de 5 caracteres', () => {
        expect(() => {
            validarChamado("Uva"); //Preciso mostrar um exemplo de título com menos de 5 caracteres
        }).toThrow("O título do chamado não pode ter menos de 5 caracteres ou mais de 100");
    });

    //Quinto teste -> Testando se chegou uma mensagem com mais caracteres do que o permitido
    test('Deve lançar erro se o título tiver mais de 100 caracteres', () => {
        expect(() => {
            validarChamado("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        }).toThrow("O título do chamado não pode ter menos de 5 caracteres ou mais de 100");
    });

});
