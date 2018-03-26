<?php
// revisar si espacios están vacíos
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// enviar correo
$to = 'your@email.com';
$email_subject = "Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  "Here are the details:\n \nName: $name \n Phone: $phone \n".
				  "Email: $email_address\n Message \n $message";
$headers = "From: $name\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>