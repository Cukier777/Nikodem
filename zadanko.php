<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nazwa_pliku = "Lasota.txt";

    $pliczek = fopen("$nazwa_pliku","r");
    $plik2 = fopen("LasotaWynik.txt","r+");
    $x1=(float)fgets($pliczek);
    $y1=(float)fgets($pliczek);
    $x2=(float)fgets($pliczek);
    $y2=(float)fgets($pliczek);
    fclose($pliczek);

    $odcinek = sqrt(pow($x2 - $x1, 2) + pow($y2 - $y1, 2));
    echo  "długość odcinka ", $odcinek;
    fwrite($plik2, $odcinek);
    fclose($plik2);
    ?>
</body>
</html>