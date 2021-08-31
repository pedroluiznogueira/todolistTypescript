// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./models/Tarefa";

// Seletores
let tabela = document.querySelector("#table");

// Objetos
const tarefas: Tarefa[] = [  
    {
        feita: true,
        texto: "Estudar TS",
        prioridade: Prioridade.baixa
    },
    {
        feita: false,
        texto: "Estudar Angular",
        prioridade: Prioridade.alta
    }
]

// Funções 

function exibirTarefa(tarefas: Tarefa[]) {

    for (let tarefa of tarefas) {
        let tr = document.querySelector("tr");
        tr.innerHTML = `<td>
                            <input type="checkbox">
                        </td>
                        <td>
                            ${tarefa.texto}
                        </td>
                        <td>
                            <i class="material-icons">delete</i>
                        </td>
                            `
    tabela.appendChild(tr);
    }
}

exibirTarefa(tarefas);

// Consoles log

console.log(tabela);