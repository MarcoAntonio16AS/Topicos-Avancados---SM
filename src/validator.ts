//Função responsável por responder ao chamado.
function validarChamado(titulo: string): boolean {
    if (!titulo) {
        throw new Error("O título do chamado não pode ser vazio.");
        //Aqui basicamente responderá um erro sobre o espaço vazio!

        //console.log("O título do chamado não pode ser vazio.")
        //Mais um exemplo de mostrar a validação ocorendo!
        //Manter comentado! Se eu comentar o || titulo.trim() === "" passará a dar erro!
    }

    return true;
}

export default validarChamado;