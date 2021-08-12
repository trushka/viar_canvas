<?php
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$site = htmlspecialchars($_POST["site"]);
$country = htmlspecialchars($_POST["country"]);
$q1 = htmlspecialchars($_POST["q1"]);
$q2 = htmlspecialchars($_POST["q2"]);
$q3 = htmlspecialchars($_POST["q3"]);
$q4 = htmlspecialchars($_POST["q4"]);
$q5 = htmlspecialchars($_POST["q5"]);
$q6 = htmlspecialchars($_POST["q6"]);
$q7 = htmlspecialchars($_POST["q7"]);
$theme = "Form - SNAP CREATIVE CHALLENGE";
$sendTo = "email@snapcreativechallenge.com";
$serverMail = "info@teplin.agency";

/* Создаем новую переменную, присвоив ей значение */
if ($_POST["q1"]) {
    $message = "Name: " . $name . "<br>".
    "Phone: " . $phone . "<br>".
    "E-mail: " . $email . "<br>".
    "Website: " . $site . "<br>".
    "Country: " . $country. "<br>".
    "<b>Quiz</b> <br>".
    "Question 1: " . $q1. "<br>".
    "Question 2: " . $q2. "<br>".
    "Question 3: " . $q3. "<br>".
    "Question 4: " . $q4. "<br>".
    "Question 5: " . $q5. "<br>".
    "Question 6: " . $q6. "<br>".
    "Question 7: " . $q7;
} else {
    $message = "Name: " . $name . "<br>".
    "Phone: " . $phone . "<br>".
    "E-mail: " . $email . "<br>".
    "Website: " . $site . "<br>".
    "Country: " . $country;
}
/* Отправляем сообщение, используя mail() функцию */
$headers = "Date: ".date("D, d M Y H:i:s")." UT\r\n";
$headers.= "MIME-Version: 1.0\r\n";
$headers.= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
$headers.= "Content-Transfer-Encoding: 8bit\r\n";
$headers.= "From: =?UTF-8?B?".base64_encode('SNAP CREATIVE CHALLENGE')."?= <".$serverMail.">\r\n";
mail($sendTo, $theme, $message, $headers);
header('Location: thanks.html');
exit;
?>