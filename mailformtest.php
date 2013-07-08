<html>
<head><title>MailForm Test</title>
</head>
<body>
<?php
if (isset($_POST['submit'])) 
{ 
// Process Form
$Name = "Thomas";
$email = $_POST['sender']; //senders e-mail adress 
$recipient = $_POST['recipient']; //recipient 
$mail_body = "The text for the mail..."; //mail body 
$subject = $_POST['subject']; //subject 
$header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields 
mail($recipient, $subject, $mail_body, $header, '-f thfl@dr.dk'); //mail command :) 
echo("Mail sent to ");
echo($recipient);
echo(" from ");
echo($email);
echo(".");
?>
<br />
<a href="mailformtest.php">return to form</a>
<?php
}
else
{
?>
<form  action="mailformtest.php" method="post">
Sender: <input type="text" name="sender" id="sender" value="noreply@dr.dk" /><br />
Receiver: <input type="text" name="recipient" id="recipient" value="thfl@dr.dk" /><br />
Subject: <input type="text" name="subject" id="subject" value="Subject for email" /><br />
<input type="submit" value="Send" name="submit" id="submit" /> 
</form>
<?php
}
?>
</body>
</html>