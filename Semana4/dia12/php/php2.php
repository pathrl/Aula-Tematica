<?php
    $gestor = fopen("leeme.txt", "r");      // Abrir el archivo
    
    $contenido = '';                        // Inicializa la variable   
    while (!feof($gestor)) {                // Repite algo mientras se de una condicion
        $contenido .= fread($gestor, 8192); // Añade la linea al contenido
    }
    echo $contenido;                        // Escribo el contenido
    fclose($gestor);                        // Cierre de recursos
?>