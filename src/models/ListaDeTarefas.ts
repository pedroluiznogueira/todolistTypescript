import { Prioridade, Tarefa } from "./Tarefa";

export class ListaDeTarefa {

    tabela: HTMLTableElement;
    input: HTMLInputElement;
    formulario: HTMLFormElement;
    tarefas: Tarefa[];

    constructor(main: HTMLElement) {

        this.tabela = <HTMLTableElement>main.querySelector("#table");
        this.input = <HTMLInputElement>main.querySelector("#tf_2do");
        this.formulario = <HTMLFormElement>main.querySelector("#form");
        this.tarefas = [];

        let dados = window.localStorage.getItem("todolistPedro");

        if (dados == null) {
            // na hora que a aplicação for inializada, inicia o localStorage com essa string ->"[]"<-
            window.localStorage.setItem("todolistPedro", "[]");

        } else {
            // parseando o array e atribuindo com as devidas características para o array de tarefas
            this.tarefas = JSON.parse(dados).map(
                // para tarefa iterada, eu faço uma cópia com as características que preciso 
                tarefa => {
                    // acessando os atributos texto e prioridade de cada tarefa que está no localStorage
                    let novaTarefa = new Tarefa(tarefa.texto, tarefa.prioridade);
                    // atribuindo o id da tarefa que está no localStorage para o arrau de tarefas
                    novaTarefa.id = tarefa.id;
                    
                    return novaTarefa;
                }
            )
        }

        // Referencia o array de parseado mapeado
        this.mostrarTarefas();

        this.formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            this.adicionarTarefa();
        })
    }

    removerTarefa(novaTarefa: Tarefa) {
        this.tarefas.splice(this.tarefas.indexOf(novaTarefa), 1);
        window.localStorage.setItem("todolistPedro", JSON.stringify(this.tarefas));
        document.getElementById(novaTarefa.id).remove();

    }

    adicionarTarefa() {
        if (this.input.value == "") return;

        let novaTarefa = new Tarefa(this.input.value, Prioridade.baixa);

        this.tarefas.push(novaTarefa);

        // Salvando no local storage cada tarefa como uma string, pois o localStorage só armazena strings
        window.localStorage.setItem("todolistPedro", JSON.stringify(this.tarefas));

        // Função que a mostrarTarefas anteriormente fazia
        let tr = novaTarefa.toRow();

        tr.querySelector("i").addEventListener("click", () => {
            this.removerTarefa(novaTarefa);
        });

        this.tabela.appendChild(tr);

        // Limpando o input após o envio
        this.input.value = "";
    }

    // Aqui quero fazer a adição da lista de tarefas parseadas vindas localStorage e fixá-las na tabela
    mostrarTarefas() {
        // Limpando a tabela
        this.tabela.innerHTML = "";

        // Para cada tarefa do array, vou configurá-las para aparecerem na tabela
        this.tarefas.forEach((tarefa) => {
            let tr = tarefa.toRow();

            tr.querySelector("i").addEventListener("click", () => {
                    this.removerTarefa(tarefa);
                }
            )

            this.tabela.appendChild(tr);
        })
    }
}