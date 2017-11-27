<?php
$directorio = "posiciones/";
$gestor_dir = opendir($directorio);
$contenido = ''; 
while (false !== ($nombre_fichero = readdir($gestor_dir))) {
    $gestor = fopen("posiciones/".$nombre_fichero, "r");      // Abrir el archivo
    while (!feof($gestor)) {                // Repite algo mientras se de una condicion
        $contenido .= fread($gestor, 8192); // Añade la linea al contenido
    }
    
    $contenido .= "-";
       
      fclose($gestor);
}
echo $contenido;
 
?>
