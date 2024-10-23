const { invoke } = window.__TAURI__.core;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});




function updateFlipClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  document.querySelectorAll('.flip-unit .top')[0].textContent = hours;
  document.querySelectorAll('.flip-unit .bottom')[0].textContent = hours;

  document.querySelectorAll('.flip-unit .top')[1].textContent = minutes;
  document.querySelectorAll('.flip-unit .bottom')[1].textContent = minutes;
}

setInterval(updateFlipClock, 60000);  // Actualiza cada minuto
updateFlipClock();  // Inicializar al cargar
