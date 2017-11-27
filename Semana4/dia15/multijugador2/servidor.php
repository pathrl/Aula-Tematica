<?php
    $fp = fopen('posiciones/'.$_GET['jugador'].'.txt', 'c');
    fwrite($fp, $_GET['jugador'].','.$_GET['posx'].','.$_GET['posy']);
    fclose($fp);
    echo "escribiendo...".$_GET['posx'].','.$_GET['posy'];
?>
