<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$title = $_POST['title'];
$message = $_POST['message'];
$fp = fopen('Data.txt', 'w+');
$content =  "message form" . PHP_EOL . $title . $fullname . PHP_EOL . "Email: " . $email . PHP_EOL . "Message: " . $message;
fwrite($fp, $content);
fclose($fp);

$file = 'Data.txt';
    
if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}
die(header("Location: " . $_SERVER["HTTP_REFERER"]));
?>