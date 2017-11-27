<?php
    $imgfondo = imagecreatefrompng("recursos/fondo.png");
    $imgcarretera = imagecreatefrompng("recursos/road2.png");
    header('Content-Type: image/png');
    for($i = 0;$i<100;$i++){
        $im2 = imagecopy($imgfondo, $imgcarretera, rand(0,512),rand(0,512), 0, 0, 64, 64);
    }
    imagepng($imgfondo,"fondogenerado.png");
    imagedestroy($imgfondo);
    imagedestroy($imgcarretera);
?>
ok