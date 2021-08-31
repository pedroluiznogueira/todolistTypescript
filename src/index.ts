// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./models/Tarefa";

// Seletores
let tabela = document.getElementById("table");
let input = document.querySelector("input");
let formulario = document.querySelector("form");

// Escutando eventos
formulario.addEventListener("submit", adicionarTarefa);

// Array de tarefas

const tarefas: Tarefa[] = []

// Funções

function adicionarTarefa(evento) {
    evento.preventDefault(); 

    while (tarefas.length > 0) {
        tarefas.shift();
    }

    if (! (input.value == "")) {
    
        let novaTarefa: Tarefa = {
            feita: true,
            texto: input.value,
            prioridade: Prioridade.alta
        }
    
        tarefas.push(novaTarefa);
    
        exibirTarefa(tarefas);
        input.value = "";
    };
}

function exibirTarefa(tarefas:Tarefa[]) {

    let tr = document.createElement("tr");
    
    for (let tarefa of tarefas) {

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

// Consoles log

console.log(tabela);
console.log(input);