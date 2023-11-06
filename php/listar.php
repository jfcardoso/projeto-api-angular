<?php
//incluindo uma conexão
include("conexao.php");

//Preparando o comando SQL
$sql = "SELECT * FROM cursos";

//executando a query no BD
$executar = mysqli_query($conn, $sql);

//laço para posteiormente popular o json
$cursos = [];
$indice = 0;

while ($linha = mysqli_fetch_assoc($executar)) {
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

//Json
json_encode(['cursos']=>$cursos);

var_dump($cursos);

?>