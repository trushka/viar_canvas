<?php

/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}



/* Сюда впишите свою эл. почту */
$address = "bavergen@gmail.com";


/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "
<html>
<head>
	<title>Заявка номера телефона</title>
</head>
<body> 
	<p>Handler</p>
	<p>Имя: $name</p>
	<p>Емейл: $email</p>
	<p>Телефон: $phone</p>
	<p>Сообщение: $message</p>
</body>
</html>"; 


/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заявка телефона'; //сабж
$email='Lorgano'; // от кого

$send = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\nFrom:$email");
