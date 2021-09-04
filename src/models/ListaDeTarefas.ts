import { Prioridade, Tarefa } from "./Tarefa";

export class ListaDeTarefa {
    tabela: HTMLTableElement;
    input: HTMLInputElement;
    formulario: HTMLFormElement;
    tarefas: Tarefa[];

    constructor(main: HTMLElement) {
        this.tabela = <HTMLTableElement>main.querySelector("#table")!;
        this.input = <HTMLInputElement>main.querySelector("input")!;
        this.formulario = <HTMLFormElement>main.querySelector("form")!;
        this.tarefas = [];

        this.formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            this.adicionarTarefa();
        })
    }

    removerTarefa(novaTarefa: Tarefa) {
        this.tarefas.splice(this.tarefas.indexOf(novaTarefa), 1);
    }

    adicionarTarefa() {
        if (this.input.value == "") return;

        const novaTarefa = new Tarefa(this.input.value, Prioridade.alta);

        this.tarefas.push(novaTarefa);

        let tr = novaTarefa.toRow();

        tr.querySelector("i").addEventListener("click", () => {
            tr.remove();
            this.removerTarefa(novaTarefa);
        })

        this.tabela.appendChild(tr);

        this.input.value = "";
    }

}