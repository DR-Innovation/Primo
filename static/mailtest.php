<?php
echo("Mail Test");

$to = "thfl@dr.dk";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "thfl@dr.dk";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";

?>