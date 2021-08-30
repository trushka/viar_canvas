<?php

/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['name'])) {$surname = $_POST['surname'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}



/* Сюда впишите свою эл. почту */
$address = "iTeplik@gmail.com";


/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "
<html>
<head>
	<title>Social Computing Academy</title>
</head>
<body> 
	<p>Contact</p>
	<p>Name: $name</p>
	<p>Surname: $phone</p>
	<p>E-mail: $email</p>
</body>
</html>"; 


/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Request'; //сабж
$email='Social Computing Academy'; // от кого

$send = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\nFrom:$email");
