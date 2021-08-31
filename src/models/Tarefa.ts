export interface Tarefa {
    feita: boolean;
    texto: string;
    prioridade: Prioridade;
}

export enum Prioridade {
    baixa = 1,
    media = 2,
    alta = 3
}