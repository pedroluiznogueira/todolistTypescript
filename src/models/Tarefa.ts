// --  ESTRUTURAS --
import * as uniqid from "uniqid";
export class Tarefa {
    
    feita: boolean;
    texto: string;
    prioridade: Prioridade;
    id: string;

    constructor(texto: string, prioridade: Prioridade) {

        this.feita = false;
        this.texto = texto;
        this.prioridade = prioridade;
        this.id = uniqid();
    }

    toRow(): HTMLTableRowElement {
        let tr = document.createElement("tr");  
        tr.setAttribute("id", this.id);

        tr.innerHTML = `
                        <td><input type="checkbox"></td>
                        <td>${this.texto}</td>
                        <td><i class="material-icons">delete</i></td>
        `;

        let checkbox = tr.querySelector("input");
        checkbox.addEventListener("click", () => {
            tr.classList.toggle("done");
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