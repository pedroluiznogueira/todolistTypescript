// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./models/Tarefa";

// Seletores
let tabela = document.getElementById("table");
let input = document.querySelector("input");
let formulario = document.querySelector("form");

// -- OBJETOS --

// -- ARRAY TAREFAS --
const tarefas: Tarefa[] = []

// Escutando eventos
formulario.addEventListener("submit", adicionarTarefa);

// Funções

function adicionarTarefa(evento) {
    // interrompe envio padrão
    evento.preventDefault(); 

    // limpa array, p/ evitar redundância
    while (tarefas.length > 0) {
        // remove primeiro elemento 
        tarefas.shift();
    }

    // evita que o input vazio seja enviado
    if (! (input.value == "")) {
    
        // criando nova tarefa
        const novaTarefa = new Tarefa(input.value, Prioridade.alta);
    
        // add no array cada tarefa
        tarefas.push(novaTarefa);
    
        // chama a função com a tarefa recém criada
        exibirTarefa(tarefas);

        // limpa input após tarefa ser enviada
        input.value = "";
    };
}

function exibirTarefa(tarefas:Tarefa[]) {
    // cria um "tr" (table > tr > td)
    let tr = document.createElement("tr");    

    // para cada elemento do array tarefas
    for (let tarefa of tarefas) {

        // cria elementos para colocar na tr criada 
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
        // coloca a tr na tabela  
        tabela.appendChild(tr);
    }
}

// Consoles log