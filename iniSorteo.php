<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo</title>
    <link rel="stylesheet" href="./css/iniSorteo.css">
</head>
<body>

    <form class="login-form" method="POST" action="sorteo.php">
        <h2>Sorteo</h2>

        <div class="input-group">
            <label>Usuario</label>
            <input type="text" name="usuario" required>
        </div>

        <div class="input-group">
            <label>Contraseña</label>
            <input type="password" name="contraseña" required>
        </div>

        <button type="submit">Entrar</button>
    </form>

</body>
</html>