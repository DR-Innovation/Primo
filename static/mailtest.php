<?php
echo("Mail Test. ");

//$to = "thfl@dr.dk";
//$subject = "Test mail";
//$message = "Hello! This is a simple email message.";
//$from = "thfl@dr.dk";
//$headers = "From:" . $from;
//mail($to,$subject,$message,$headers);
//echo "Mail Sent.";

$Name = "Thomas";
$email = "thfl@dr.dk"; //senders e-mail adress 
$recipient = "tlynge@gmail.com"; //recipient 
$mail_body = "The text for the mail..."; //mail body 
$subject = "Subject for reviever"; //subject 
$header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields 
mail($recipient, $subject, $mail_body, $header); //mail command :) 
echo "Mail Sent...";

?>