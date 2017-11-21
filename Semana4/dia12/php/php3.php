<?php
    $fp = fopen('hola.txt', 'w');
    fwrite($fp, 'Hola mundo');
    fclose($fp);
?>