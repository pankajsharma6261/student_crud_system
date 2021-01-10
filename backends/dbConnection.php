<?php 

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "school";

try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_pass);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Connnection Failed" . $e->getMessage());
}

?>