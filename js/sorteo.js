// ======================
// DATOS
// ======================
let jugadores = [
    "Jugador 1","Jugador 2","Jugador 3","Jugador 4","Jugador 5",
    "Jugador 6","Jugador 7","Jugador 8","Jugador 9","Jugador 10",
    "Jugador 11","Jugador 12","Jugador 13","Jugador 14","Jugador 15",
    "Jugador 16","Jugador 17","Jugador 18","Jugador 19","Jugador 20",
    "Jugador 21","Jugador 22","Jugador 23","Jugador 24","Jugador 25",
    "Jugador 26","Jugador 27","Jugador 28","Jugador 29","Jugador 30",
    "Jugador 31","Jugador 32","Jugador 33","Jugador 34","Jugador 35",
    "Jugador 36","Jugador 37","Jugador 38","Jugador 39","Jugador 40",
    "Jugador 41","Jugador 42","Jugador 43","Jugador 44","Jugador 45",
    "Jugador 46","Jugador 47","Jugador 48","Jugador 49","Jugador 50",
];

let equipos = [
    "Equipo A", "Equipo B", "Equipo C", "Equipo D", 
    "Equipo E", "Equipo F", "Equipo G", "Equipo H", 
    "Equipo I", "Equipo J", "Equipo K", "Equipo L",
    "Equipo M", "Equipo N", "Equipo O", "Equipo P"
];
const MAX_JUGADORES = 14;

let equiposData = {};
equipos.forEach(e => equiposData[e] = []);

let jugadorSeleccionado = null;

// ======================
// ELEMENTOS
// ======================
const jugadorDiv = document.getElementById("jugadorActual");
const equipoDiv = document.getElementById("equipoActual");
const tablaEquipos = document.getElementById("tablaEquipos");
const bomboJugador = document.getElementById("bomboJugador");

document.getElementById("btnJugador").addEventListener("click", sacarJugador);
document.getElementById("btnEquipo").addEventListener("click", sacarEquipo);

// ======================
// FUNCIONES
// ======================
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function sacarJugador() {
    if (jugadores.length === 0) {
        jugadorDiv.textContent = "No quedan jugadores";
        return;
    }

    bomboJugador.classList.add("shake");
    jugadorDiv.classList.remove("final");
    jugadorDiv.classList.add("animating");

    let vueltas = 20;
    let i = 0;

    const intervalo = setInterval(() => {
        jugadorDiv.textContent = jugadores[randomIndex(jugadores)];
        i++;

        if (i >= vueltas) {
            clearInterval(intervalo);

            setTimeout(() => {
                bomboJugador.classList.remove("shake");

                jugadorSeleccionado = jugadores.splice(randomIndex(jugadores), 1)[0];
                jugadorDiv.textContent = jugadorSeleccionado;
                jugadorDiv.classList.remove("animating");
                jugadorDiv.classList.add("final");
            }, 300);
        }
    }, 80);
}

function sacarEquipo() {
    if (!jugadorSeleccionado) {
        equipoDiv.textContent = "Saca un jugador primero";
        return;
    }

    let equipo;
    do {
        equipo = equipos[randomIndex(equipos)];
    } while (equiposData[equipo].length >= MAX_JUGADORES);

    equiposData[equipo].push(jugadorSeleccionado);
    equipoDiv.textContent = equipo;

    jugadorSeleccionado = null;
    jugadorDiv.textContent = "";

    renderEquipos();
}

function renderEquipos() {
    tablaEquipos.innerHTML = "";

    for (let e in equiposData) {
        const div = document.createElement("div");
        div.className = "team";

        let html = `<h3>${e} (${equiposData[e].length}/14)</h3><ul>`;
        equiposData[e].forEach(j => html += `<li>${j}</li>`);
        html += "</ul>";

        div.innerHTML = html;
        tablaEquipos.appendChild(div);
    }
}

renderEquipos();
