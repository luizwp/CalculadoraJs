// Array para armanezar o histórico de cálculos
let history = [];

//Função para adicionar valor ao display
function appendToDisplay(value) {
    const result = document.getElementById('result');
    result.value += value; // Adicionar o valor ao campo de exibição
}

// função para limpar o display
function clearDisplay() {
  document.getElementById('result').value = ''; 
 // Limpa o campo de exibição
}

// Função para deletar o ultimo caractere do display
function deletelast() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
  // Remove o ultimo caractere do campo de exibição
}

// Função para calcular o resultado da expressão
function calculateResult() {
  const result = document.getElementById('result');
  const expression = result.value;


}

if (isValidExpression(expression)) {
    const evaluatedResult = evaluateExpression(expression);
    addToHistory(expression, evaluatedResult);
    result.value = evaluatedResult;
} else {
    alert ('Expressão inválida!');
}

function isValidExpression(expression) {
  const regex = /^[0-9=\-*/^.()]*$/;
  return regex.test(expression);

}
//Função para avaliar a expressão
function evaluateExpression(expression) {
  // Substituir ^ por **
  let formattedExpression = expression.replace(/\^/g,'**');
  // Avaliar a expressão
  return Function(`"use strict"; return (${formattedExpression})`)();
}
// Função para adicionar a expressão e o resultado ao histórico
function addToHistory(expression, result) {
  history.push({expression, result});
  // Adicionar a expressão e o resultado ao array de histórico
  updateHistory(); // Atualizar a ixibição do histórico
}

// Função para atualizar a exibição do histórico
function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = ''; // Limpa a lista de historico

  history.forEach (entry => {
    let li = document.createElement('li');
    li.textContent = `${entry.expression} = ${entry.result}`;
    historyList.appendChild(li);
  })
}

// Função para alterar entre modos básico e cientifico
function toggleScientificMode() {
  const sciButtons = document.getElementById
  ('scientific-buttons')
  if (sciButtons.style.display === 'none') {
    sciButtons.style.display = 'grid';
  } else {
    sciButtons.style.display = 'none';
  }
}
