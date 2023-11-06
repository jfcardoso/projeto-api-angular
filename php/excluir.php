<?php

//incluindo uma conexão
include($conexao.php);

//obter dados
$obterDados = file_get_contents("php://input");

// extraindo os dados do Json
$extrairDados = json_decode($obterDados);

//separando os dados do Json
$idCurso = $extrairDados->cursos->idCurso;

//SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conn, $sql);

?>