<?php

//incluindo uma conexão
include($conexao.php);

//obter dados
$obterDados = file_get_contents("php://input");

// extraindo os dados do Json
$extrairDados = json_decode($obterDados);

//separando os dados do Json
$nomeCurso = $extrairDados->cursos->nomeCurso;
$valorCurso = $extrairDados->cursos->$valorCurso;

//SQL
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";
mysqli_query($conn, $sql);

//exportar dados cadastrados
$curso[
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>