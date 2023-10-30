<?php
//criando uma conexão
include("connection.php");

//Preparando o comando SQL
$sql = "SELECT * FROM cursos";

//executando a query no BD
$execute = mysqli_query($connection,$sql);

//laço para posteiormente popular o json
$cursos = [];
$index = 0;

while ($line = mysqli_fetch_assoc($execute)) {
    $cursos[$index]['idCurso'] = $line['idCurso'];
    $cursos[$index]['nomeCurso'] = $line['nomeCurso'];
    $cursos[$index]['valorCurso'] = $line['valorCurso'];

    $index++;
}

//Json
json_encode(['cursos'=>$cursos]);

//var_dump($cursos);

?>