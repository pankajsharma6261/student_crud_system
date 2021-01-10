<?php 

require_once './dbConnection.php';

$stm = "SELECT *FROM students";
$stm = $conn->prepare($stm);
$stm->execute();
$result = $stm->fetchAll();
echo json_encode($result);



?>