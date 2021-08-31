// --  ESTRUTURAS --
export class Tarefa {
    feita: boolean;
    texto: string;
    prioridade: Prioridade;

    constructor(texto: string, prioridade: Prioridade) {
        // "this" refere-se á cada objeto instnciado pela classe
        this.feita = false;
        this.texto = texto;
        this.prioridade = prioridade;
    }
}

// enum para prioridades
export enum Prioridade {
    baixa = 1,
    media = 2,
    alta = 3
}

// -- OBJETOS --
const tarefaUm = new Tarefa("Acordar cedo", Prioridade.alta);

// -- DEBUGANDO --
console.log(tarefaUm);
console.log(tarefaUm.feita);
console.log(tarefaUm.texto);
console.log(tarefaUm.prioridade);