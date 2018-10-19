<?php
    header("Location: index.html?sended=true");
    $user_name = $_POST['name'];
    $email = $_POST['email'];
    $telephone = $_POST['phone-number'];

    $email_from = 'ipoteka@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $user_name.\n".
                    "User Telephon Number: $telephone.\n".
                    "User Email: $email.\n".




    $to = "579531535@etlgr.com, 206315401@etlgr.com";

    $headers = "From: $email_from \r\n";

    $ok = mail($to, $email_subject, $email_body, $headers);
?>
