<?php
    $imgfondo = imagecreatefrompng("recursos/fondo.png");
    $imgcarretera = imagecreatefrompng("recursos/road.png");

    header('Content-Type: image/png');
    
    imagepng($imgfondo);

    imagedestroy($imgfondo);
    imagedestroy($imgcarretera);
?>