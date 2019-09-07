<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$title = $_POST['title'];
$message = $_POST['message'];
$fp = fopen('Data.txt', 'w+');
$content =  "message form" . PHP_EOL . $title . $fullname . PHP_EOL . "Email: " . $email . PHP_EOL . "Message: " . $message;
fwrite($fp, $content);
fclose($fp);
die(header("Location: " . $_SERVER["HTTP_REFERER"]));
?>