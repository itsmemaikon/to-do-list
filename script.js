let index = 1;
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const dateTime = new Date();
  const newItem = document.createElement("tr");

  if (taskInput.value === "") {
    window.alert(
      "Preencha a descrição para tarefa para prosseguir com a inclusão",
    );
    return;
  } else {
    newItem.innerHTML = `
        <td>${index}</td>
        <td>${taskInput.value}</td>
        <td align="center">${dateTime.toLocaleDateString("pt-BR")} ${dateTime.toLocaleTimeString("pt-BR")}
        <td align="center"><button onclick="deleteTask(${index})" class="btn delete">Remover</button></td>
  `;
    newItem.setAttribute("id", index);
    taskList.appendChild(newItem);
    taskInput.value = "";
    index++;
  }
}

function deleteTask(index) {
  const removeItem = document.getElementById(index);

  if (window.confirm("Você tem certeza que deseja excluir essa atividade?")) {
    removeItem.remove();
  }
}
