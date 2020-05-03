<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $email_from = "hello@shanelbeebe.com";
    $mailTo = "hello@shanelbeebe.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received and email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.html");

    }
?>
