<?php

//incluindo uma conexão
include($conexao.php);

//obter dados
$obterDados = file_get_contents("php://input");

// extraindo os dados do Json
$extrairDados = json_decode($obterDados);

//separando os dados do Json
$idCurso = $extrairDados->cursos->idCurso;
$nomeCurso = $extrairDados->cursos->nomeCurso;
$valorCurso = $extrairDados->cursos->$valorCurso;

//SQL
$sql = "UPDATE cursos SET nomeCurso='$nomeCurso', valorCurso=$valorCurso WHERE idCurso=$idCurso";
mysqli_query($conn, $sql);

//exportar dados cadastrados
$curso[
    'idCurso' => $idCurso,
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>