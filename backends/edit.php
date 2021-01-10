<?php 

require_once './dbConnection.php';

$data = json_decode(stripslashes(file_get_contents('php://input')),true);

$sql = "SELECT *FROM students WHERE id= :id";
$stm = $conn->prepare($sql);
$stm->execute($data);
$result = $stm->fetch();
echo json_encode($result);

?>