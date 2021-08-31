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

    for (let tarefa of tarefas) {
        tabela.appendChild(tarefa.toRow());
    }
}

// Consoles log