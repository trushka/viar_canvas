<?php
if (isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = trim(urldecode(htmlspecialchars($_POST['name'])));
    $surname = trim(urldecode(htmlspecialchars($_POST['surname'])));
    $email = trim(urldecode(htmlspecialchars($_POST['email'])));
    $message = trim(urldecode(htmlspecialchars($_POST['message'])));
    $phone = "The Number is not specified";
    if (!empty($_POST['phone'])) {
      $phone = trim(urldecode(htmlspecialchars($_POST['phone'])));
    }
    $subject = "Message from the site The Art of Web";
    if (!empty($_POST['subject'])) {
      $subject = trim(urldecode(htmlspecialchars($_POST['subject'])));
    }
    

    $to = "Elena-Bonito@yandex.ru, theartofwebgabon@gmail.com";
    $headers = "Content-Type: text/html;charset=utf-8 \r\n";
    $message = "
     <b>Reply to:</b> $email <br>
     <b>Name:</b> $name <br>
     <b>Surname:</b> $surname <br>
     <b>Subject:</b> $subject <br>
     <b>Phone:</b> $phone <br>
     <b>Message:</b> $message <br>
    ";
   mail($to, $subject, $message, $headers);
}

