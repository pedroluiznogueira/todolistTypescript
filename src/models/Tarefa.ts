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

    toRow(): HTMLTableRowElement {
        let tr = document.createElement("tr");  

        tr.className = this.feita ? "done" : "";

        tr.innerHTML = `<td><input type="checkbox"></td>
                        <td>${this.texto}</td>
                        <td><i class="material-icons">delete</i></td>
        `;

        let checkbox = tr.querySelector("input");
        checkbox.addEventListener("click", () => {
            tr.classList.toggle("done");
        });

        let bt = tr.querySelector("i");
        bt.addEventListener("click", () => {
            tr.remove();
        });

        return tr;
        
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