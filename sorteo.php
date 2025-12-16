<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sorteo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/sorteo.css">
</head>

<body>

<?php
if (isset($_POST['usuario']) && isset($_POST['contraseña'])) {
    if ($_POST['usuario'] === "AdminLLF" && $_POST['contraseña'] === "DarkoGOAT") {
?>

<div class="container">

    <h1>🎲 SORTEO DE SELECCIONES LLF</h1>

    <div class="bombos">
        <div class="bombo">
            <h2>Bombo jugadores</h2>
            <img src="imgs/bombo.png" id="bomboJugador">
            <button id="btnJugador">Sacar jugador</button>
            <div class="resultado" id="jugadorActual"></div>
        </div>

        <div class="bombo">
            <h2>Bombo equipos</h2>
            <img src="imgs/bombo.png">
            <button id="btnEquipo">Sacar equipo</button>
            <div class="resultado" id="equipoActual"></div>
        </div>
    </div>

    <div class="tables" id="tablaEquipos"></div>

</div>

<script src="js/sorteo.js"></script>

<?php
    } else {
        header("Location: iniSorteo.php?error=1");
    }
} else {
    header("Location: iniSorteo.php?error=1");
}
?>

</body>
</html>
