<?php
    $fp = fopen('posiciones.txt', 'c');
    fwrite($fp, $_GET['posx'].','.$_GET['posy']);
    fclose($fp);
    echo "escribiendo...".$_GET['posx'].','.$_GET['posy'];
?>
