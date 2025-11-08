/* Funciones comunes de navegación y consola visual */
function goTo(page){ window.location.href = page; }
function backToMenu(){ window.location.href = 'index.html'; }

function printToConsole(message){
  const consoleBox = document.getElementById('console');
  if(!consoleBox){
    console.log('Consola no encontrada:', message);
    return;
  }
  const span = document.createElement('div');
  span.innerHTML = message;
  consoleBox.appendChild(span);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function clearConsole(){ const c = document.getElementById('console'); if(c) c.innerHTML = ''; }

// helper to ask for number with validation
function askNumber(promptText){
  const val = prompt(promptText);
  if(val === null) return null;
  const num = Number(val);
  if(Number.isNaN(num)) { alert('Valor no válido'); return null; }
  return num;
}

// helper to ask string
function askString(promptText){ const v = prompt(promptText); if(v===null) return null; return v.trim(); }
