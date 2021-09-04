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

        tr.innerHTML = `<td><input type="checkbox"></td>
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