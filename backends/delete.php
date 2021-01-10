<?php 

require_once './dbConnection.php';

$data = stripslashes(file_get_contents('php://input'));
$mydata = json_decode($data,true);
$sql = "DELETE FROM students WHERE id = :id ";
$stm = $conn->prepare($sql);
$stm->execute($mydata);
echo "data successfully deleted";



?>