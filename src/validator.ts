//Função responsável por responder ao chamado.
function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
        //Aqui basicamente responderá um erro sobre o espaço vazio!

        //console.log("O título do chamado não pode ser vazio.")
        //Mais um exemplo de mostrar a validação ocorendo!
        //Manter comentado! Se eu comentar o || titulo.trim() === "" passará a dar erro!
    }

    //Função responsável por responder o novo chamado.
    if (titulo.length < 5) {
        throw new Error("O título do chamado não pode ter menos de 5 caracteres ou mais de 100");
        //Objetivo é aqui responder a um erro sobre tamanho do título
    }

    return true;
}

export default validarChamado;