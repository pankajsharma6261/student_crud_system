<?php 

require_once './dbConnection.php';
$data = json_decode(stripslashes(file_get_contents('php://input')),true);

$sql = "INSERT INTO students(id,name,mobile_no,email,message) VALUES(:id,:name,:mobile_no,:email,:message) ON DUPLICATE KEY UPDATE name=:name , mobile_no=:mobile_no, email=:email, message=:message ";

$stm = $conn->prepare($sql);
$stm->execute($data);
echo json_encode('data successfully save');


?>