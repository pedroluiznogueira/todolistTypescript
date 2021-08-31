// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./models/Tarefa";

const tarefas: Tarefa[] = []

let tabela = document.getElementById("table");
let input = document.querySelector("input");
let formulario = document.querySelector("form");

function exibirTarefa(tarefas:Tarefa[]) { 

    for (let tarefa of tarefas) {
        tabela.appendChild(tarefa.toRow());
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); 

    while (tarefas.length > 0) {
        tarefas.shift();
    }

    if (input.value == "") return;
    
    const novaTarefa = new Tarefa(input.value, Prioridade.alta);

    tarefas.push(novaTarefa);

    tabela.appendChild(novaTarefa.toRow());

    input.value = "";
});
