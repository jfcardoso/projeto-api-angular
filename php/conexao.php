<?php

//variáveis de acesso
$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//conexão
$conn = mysqli_connect($url, $usuario, $senha, $base);

// arrumando os caracteres especiais
mysqli_set_charset($conn, "utf8");

?>
