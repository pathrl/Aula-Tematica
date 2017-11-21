<?php
    $im = imagecreatefrompng("../img/ciudad.png");
    header('Content-Type: image/png');
    for($x = 0;$x<7552;$x+=512){
        for($y = 0;$y<4224;$y+=512){
            $rectangulo['x'] = $x;
            $rectangulo['y'] = $y;
            $rectangulo['width'] = 512;
            $rectangulo['height'] = 512;
            $im2 = imagecrop ( $im , $rectangulo );
            imagepng($im2,"supercachos/512/cacho".$x."-".$y.".png");
            $imgnueva = imagescale($im2,256,256);
            imagepng($imgnueva,"supercachos/256/cacho".$x."-".$y.".png");
            $imgnueva = imagescale($im2,128,128);
            imagepng($imgnueva,"supercachos/128/cacho".$x."-".$y.".png");
            $imgnueva = imagescale($im2,64,64);
            imagepng($imgnueva,"supercachos/64/cacho".$x."-".$y.".png");
            $imgnueva = imagescale($im2,32,32);
            imagepng($imgnueva,"supercachos/32/cacho".$x."-".$y.".png");
            
            echo "cachocreado<br>";
        }  
    }
    
    imagedestroy($im);
    imagedestroy($im2);
?>
ok